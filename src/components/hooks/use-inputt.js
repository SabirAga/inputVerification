import { useState } from "react";

const useInputt = (validate) => {
  const [input, setInput] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const inputIsValid = validate(input);
  const inputIsInvalid = !inputIsValid && inputIsTouched;

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
    console.log(input);
  };

  const inputBlurHandler = (e) => {
    setInputIsTouched(true);
  };
  const reset = () => {
    setInput("");
    setInputIsTouched(false);
  };

  return {
    value: input,
    isValid: inputIsValid,
    inputChangeHandler,
    inputBlurHandler,
    inputIsInvalid,
    reset,
  };
};
export default useInputt;
