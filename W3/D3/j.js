// 1. The Function Definition
function mergeSettings(savedSettingsJSON, defaultSettings) {
    let saved = JSON.parse(savedSettingsJSON);
    let merged = {};

    // copy default settings
    for (let key in defaultSettings) {
        merged[key] = defaultSettings[key];
    }

    // override with saved settings
    for (let key in saved) {
        merged[key] = saved[key];
    }

    return {
        mergedObject: merged,
        mergedJSON: JSON.stringify(merged)
    };
}

// 2. Data to test it with
let myDefaults = { theme: "light", volume: 50, showTips: true };
let mySavedJSON = '{"theme": "dark", "volume": 80}';

// 3. Running the function
let result = mergeSettings(mySavedJSON, myDefaults);

// 4. Seeing the result
console.log("Original Defaults:", myDefaults);
console.log("Merged Result:", result.mergedObject)