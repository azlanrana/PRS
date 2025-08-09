#pragma once
#include <string>
#include <fstream>
#include <stdexcept>

// A simple struct to hold configuration data for the plugin.
struct PluginConfig
{
    std::string backend_api_url;
    // Other config values like timeouts, API keys, etc., would go here.
};

// Placeholder function for loading configuration.
// In a real implementation, this would parse a file (e.g., INI or JSON)
// that is located in the MT5 server's configuration directory.
inline PluginConfig LoadConfig()
{
    PluginConfig config;
    
    // For demonstration, we're hardcoding the URL.
    // A real implementation should read this from a file, e.g., "config.ini".
    config.backend_api_url = "http://localhost:3001/api";

    // Example of file reading (would need a proper INI parser):
    /*
    std::ifstream configFile("MQL5\\Files\\RiskControlConfig.ini");
    if (configFile.is_open()) {
        // Parse the file line by line
        // e.g., getline(configFile, config.backend_api_url);
    } else {
        throw std::runtime_error("Could not open configuration file.");
    }
    */
   
    return config;
} 