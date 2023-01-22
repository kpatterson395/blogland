import { useEffect, useReducer } from "react";

function useLocalStorage(key, defaultVal, reducer) {
    const [state, dispatch] = useReducer(reducer, defaultVal, () => {
        let value;
        try {
            value = JSON.parse(
                window.localStorage.getItem(key) || String(defaultVal)
            );
        } catch (e) {
            value = defaultVal;
        }
        console.log("USING", value);
        return value;
    })
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);
    return [state, dispatch];
}
export { useLocalStorage };
