import { useState } from 'react'

const useLocalStorage = (key, initialValues) => {
    const [storedValues, setStoredValues] = useState(() => {
        const checkout = window.localStorage.getItem(key);
        return checkout ? JSON.parse(checkout) : initialValues;
    })

    const setValues = (values) => {
        setStoredValues(values);
        window.localStorage.setItem(key, JSON.stringify(values));
    }

    return [storedValues, setValues];
}

export default useLocalStorage;