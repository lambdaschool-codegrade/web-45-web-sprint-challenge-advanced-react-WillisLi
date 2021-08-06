import useLocalStorage from './useLocaleStorage';

const useForm = (initialValues) => {
    const [values, setValues] = useLocalStorage("form", initialValues);

    return [values, setValues];
}

export default useForm;