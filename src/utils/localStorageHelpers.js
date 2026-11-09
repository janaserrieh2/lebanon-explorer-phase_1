export function loadFromStorage(key, defaultValue) {
    try {
        const savedText = localStorage.getItem(key);
        if (savedText === null) {
            return defaultValue;
        }
        const parsedData = JSON.parse(savedText);

        // Ensure the data type matches if default is an array
        if (Array.isArray(defaultValue) && !Array.isArray(parsedData)) {
            return defaultValue;
        }

        return parsedData;
    } catch (error) {
        console.error(`Unable to load key "${key}" from localStorage:`, error);
        return defaultValue;
    }
}

/**
 * Safely saves data to localStorage using JSON.stringify().
 */
export function saveToStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.error(`Unable to save key "${key}" to localStorage:`, error);
    }
}
