// Copyright 2024, MetaQuotes Ltd.
// https://www.metaquotes.net

#include "stdafx.h"
#include "Main.h"
#include "ApiClient.h"
#include "Config.h"
#include <string>

//--- Plugin interface implementation
CPlugin g_plugin;

// Global API client instance
ApiClient g_apiClient;

//+------------------------------------------------------------------+
//| Plugin instance creation                                         |
//+------------------------------------------------------------------+
CPlugin* __stdcall GetInstance(void)
{
    return(&g_plugin);
}

//+------------------------------------------------------------------+
//| Main DLL entry point                                             |
//+------------------------------------------------------------------+
BOOL APIENTRY DllMain(HMODULE hModule, DWORD ul_reason_for_call, LPVOID lpReserved)
{
    //---
    switch (ul_reason_for_call)
    {
    case DLL_PROCESS_ATTACH:
    case DLL_THREAD_ATTACH:
    case DLL_THREAD_DETACH:
    case DLL_PROCESS_DETACH:
        break;
    }
    //---
    return(TRUE);
}

//+------------------------------------------------------------------+
//| About plugin                                                     |
//+------------------------------------------------------------------+
void CPlugin::About(void)
{
    //--- show modal dialog with about info
    // MessageBoxW(NULL, L"Risk Control Bridge v1.0", L"About", MB_OK | MB_ICONINFORMATION);
}

//+------------------------------------------------------------------+
//| Called when the plugin is started.                               |
//+------------------------------------------------------------------+
MTAPIRES CPlugin::Start(IMTServerAPI* api)
{
    if (!api) return(MT_RET_ERR_PARAMS);
    m_api = api;

    // Load configuration from an external file (e.g., config.ini)
    PluginConfig config = LoadConfig();
    g_apiClient.Initialize(config.backend_api_url);

    // Subscribe to trade requests
    if (m_api->TradeRequestSubscribe(this) != MT_RET_OK)
    {
        m_api->LoggerOut(MTLogErr, L"Failed to subscribe to trade requests");
        return(MT_RET_ERR_FUNC);
    }

    m_api->LoggerOut(MTLogOK, L"Risk Control Bridge plugin started successfully.");
    return(MT_RET_OK);
}

//+------------------------------------------------------------------+
//| Called when the plugin is stopped.                               |
//+------------------------------------------------------------------+
void CPlugin::Stop(void)
{
    if (m_api)
    {
        // Unsubscribe from trade requests
        m_api->TradeRequestUnsubscribe(this);
        m_api = nullptr;
    }
}


//+------------------------------------------------------------------+
//| This is the core function where we intercept trade requests.     |
//+------------------------------------------------------------------+
void __stdcall CPlugin::OnTradeRequest(const IMTTradeRequest* request,
    const IMTConfirm* confirmation,
    const IMTUser* user,
    const IMTAccount* account)
{
    if (!request || !user) return;

    // 1. Extract data from the MT5 request object.
    std::string traderId = std::to_string(user->Login());
    std::string symbol = request->Symbol();
    double volume = request->Volume();
    double price = request->Price();
    // Assuming TypeBuy=0, TypeSell=1. This should be confirmed with MT5 docs.
    std::string tradeType = (request->Type() == IMTTradeRequest::TT_BUY) ? "BUY" : "SELL";

    // 2. Construct JSON payload.
    // A library like nlohmann/json is highly recommended here.
    // This is a manual string construction for demonstration purposes.
    std::string payload = "{"
        "\"platform\":\"MT5\","
        "\"traderId\":\"" + traderId + "\","
        "\"symbol\":\"" + symbol + "\","
        "\"volume\":" + std::to_string(volume) + ","
        "\"price\":" + std::to_string(price) + ","
        "\"type\":\"" + tradeType + "\""
        "}";

    try
    {
        // 3. Call our backend API via the ApiClient.
        std::string response = g_apiClient.ProcessTrade(payload);

        // 4. Parse the JSON response.
        // Again, a JSON library would make this robust.
        // Example parsing logic would go here to extract newPrice and executionDelay.
        double newPrice = price; // Default to original price
        int executionDelay = 0; // Default to no delay

        // TODO: Parse 'response' to get newPrice and executionDelay

        // 5. Modify the original request if necessary.
        // This requires getting a mutable pointer to the request.
        IMTTradeRequest* mutableRequest = const_cast<IMTTradeRequest*>(request);
        if (newPrice != price) {
            mutableRequest->SetPrice(newPrice);
            m_api->LoggerOut(MTLogOK, L"Price for trader %s skewed to %f", user->Name(), newPrice);
        }

        // 6. Handle any execution delay.
        if (executionDelay > 0)
        {
            Sleep(executionDelay); // Blocking delay.
        }
    }
    catch (const std::exception& e)
    {
        m_api->LoggerOut(MTLogErr, L"Failed to process trade via API: %S. Allowing trade to pass.", e.what());
        // Depending on policy, we might reject the trade here instead.
    }

    // The trade request continues to the server with the modified values.
} 