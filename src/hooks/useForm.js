// write your custom hook here to control your checkout form
// write your custom hook here to control your checkout form

//Added the useLocalStorage functionalitys
import { useLocalStorage } from "./useLocalStorage";

export const useForm = (initialValues) => {
  const [values, setValues] = useLocalStorage("formValues", initialValues);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return [values, handleChanges];
};
