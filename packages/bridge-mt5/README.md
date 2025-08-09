# MT5 Platform Bridge (Server-Side Plugin)

This package contains the source code and project files for the MetaTrader 5 Server-Side Plugin. This plugin is written in C++ and interacts directly with the MT5 Server API.

## 1. Overview

The purpose of this plugin is to intercept trade requests made by traders on the MT5 platform *before* they are executed. It then communicates with our external `backend-api` to fetch the appropriate execution rules for that trader, which are then processed by the `core-engine`.

Because this is a C++ project compiled into a DLL (for Windows), it cannot directly use our TypeScript `core-engine`. Instead, the `backend-api` will be responsible for calling the `core-engine` and returning the result to this plugin.

## 2. Project Structure

The project should be set up as a standard Visual Studio C++ project.

```
/packages/bridge-mt5/
|
├── /src/
│   ├── Main.cpp          // Main entry point, event handlers
│   ├── Config.h          // For loading connection settings
│   ├── ApiClient.h       // Networking client to talk to our backend
│   └── ApiClient.cpp
|
├── MT5_SDK/              // The MT5 Server SDK headers/libs would go here
|
└── project.vcxproj       // Visual Studio project file
```

## 3. Core Logic (Pseudo-Code)

The primary logic will live inside the `OnTradeRequest` hook provided by the MT5 Server API.

```cpp
// In Main.cpp

#include "MT5APIManager.h"
#include "ApiClient.h"
#include "json.hpp" // Using a library like nlohmann/json

// ... other includes

// Global API client instance
ApiClient g_apiClient("https://your-backend-api.com/api");

// This function is called by the MT5 server for every trade request
void __stdcall OnTradeRequest(const IMTTradeRequest* request,
                              const IMTConfirm* confirmation,
                              const IMTUser* user,
                              const IMTAccount* account)
{
    // 1. Extract relevant data from the request
    std::string traderId = std::to_string(user->Login());
    std::string symbol = request->Symbol();
    double volume = request->Volume();
    double price = request->Price();
    std::string tradeType = (request->Type() == 0) ? "BUY" : "SELL"; // TypeBuy=0, TypeSell=1

    // 2. Create a JSON payload to send to our backend API
    nlohmann::json tradePayload = {
        {"platform", "MT5"},
        {"traderId", traderId},
        {"symbol", symbol},
        {"volume", volume},
        {"price", price},
        {"type", tradeType}
    };

    // 3. Call our backend API to get the processed trade
    try
    {
        nlohmann::json processedTrade = g_apiClient.processTrade(tradePayload);

        // 4. Extract modified parameters from the response
        double newPrice = processedTrade["price"];
        int executionDelay = processedTrade.value("executionDelay", 0);

        // 5. Apply the modifications to the original request
        // This is a simplified example; the actual MT5 API usage is more complex
        // and requires modifying a pointer to the request object.
        IMTTradeRequest* mutableRequest = const_cast<IMTTradeRequest*>(request);
        mutableRequest->SetPrice(newPrice);
        
        // 6. Handle the execution delay
        if (executionDelay > 0)
        {
            Sleep(executionDelay); // Pause execution
        }
    }
    catch (const std::exception& e)
    {
        // Log the error and allow the trade to pass through unmodified
        // or reject it, based on firm policy.
        g_Logger->Error(L"Failed to process trade via API: %s", e.what());
    }

    // The trade will now proceed with the (potentially) modified parameters.
}
```

## 4. Compilation

This project must be compiled as a 64-bit Windows DLL using Visual Studio and the MT5 Server SDK. The final DLL file is then copied to the `/Plugins/` directory of the MT5 Server installation.

---
This file serves as the starting point for the C++ development of the MT5 bridge. 