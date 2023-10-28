import useInputt from "./hooks/use-inputt";

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    inputIsInvalid: firstNameIsInvalid,
    reset: resetFirstName,
  } = useInputt((value) => value.trim() !== "");
  const {
    value: lastName,
    isValid: lastNameIsValid,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    inputIsInvalid: lastNameIsInvalid,
    reset: resetLastName,
  } = useInputt((value) => value.trim() !== "");
  const {
    value: email,
    isValid: emailIsValid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    inputIsInvalid: emailIsInvalid,
    reset: resetEmail,
  } = useInputt((value) => value.includes("@"));

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!firstNameIsValid) {
      return;
    }
    if (!lastNameIsValid) {
      return;
    }
    if (!emailIsValid) {
      return;
    }

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameClasses = firstNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const lastNameClasses = lastNameIsInvalid
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailIsInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstName}
          />
          {firstNameIsInvalid && <p>Name input must not be empty</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastName}
          />
          {lastNameIsInvalid && <p>Last name input must not be empty</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
        {emailIsInvalid && <p>Email must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
