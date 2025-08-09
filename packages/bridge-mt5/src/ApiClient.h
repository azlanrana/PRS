#pragma once
#include <string>

class ApiClient
{
public:
    ApiClient();
    ~ApiClient();

    // Initializes the client with the base URL for the backend API.
    void Initialize(const std::string& baseUrl);

    // Sends the trade data to the backend and returns the JSON response.
    std::string ProcessTrade(const std::string& jsonPayload);

private:
    std::string m_baseUrl;
    // A pointer to a networking client implementation would go here.
    // For example, using a library like 'cpr' or 'cpp-httplib'.
    // void* m_httpClient; 
}; 