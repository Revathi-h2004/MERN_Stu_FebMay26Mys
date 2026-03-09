function mergeSettings(savedSettingsJSON, defaultSettings) {

    let saved = JSON.parse(savedSettingsJSON); // convert JSON string to object

    let merged = { ...defaultSettings, ...saved }; 
    // copy default settings and override with saved settings

    return merged;
}

// Test data
let myDefaults = { theme: "light", volume: 50, showTips: true };
let mySavedJSON = '{"theme": "dark", "volume": 80}';

// Run function
let result = mergeSettings(mySavedJSON, myDefaults);

// Print result
console.log(result);