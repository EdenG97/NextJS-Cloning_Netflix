import { createContext, useReducer } from "react";

const mailFormat =
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Context
const EmailContext = createContext({
  emailValue: "",
  emailCheck: true,
  emailInput: (value: string) => {},
  emailBlur: () => {},
  clear: () => {},
});

export default EmailContext;

// Reducer and InitialState
type State = typeof initialState;

type Action =
  | { type: "EMAIL_INPUT"; val: string }
  | { type: "EMAIL_CHECK" }
  | { type: "CLEAR" };

const initialState = {
  value: "",
  isValid: true,
};

const emailReducer = (state: State, action: Action) => {
  if (action.type === "EMAIL_INPUT") {
    return {
      value: action.val,
      isValid: action.val.length < 30,
    };
  }
  if (action.type === "EMAIL_CHECK") {
    const stateValue = state.value.match(mailFormat);
    let emailCheck: boolean;
    if (stateValue) {
      emailCheck = true;
    } else {
      emailCheck = false;
    }
    return {
      value: state.value,
      isValid: emailCheck,
    };
  }
  if (action.type === "CLEAR") {
    return {
      value: "",
      isValid: true,
    };
  }

  return initialState;
};

// Context Provider
type Children = {
  children: React.ReactNode;
};

export const EmailContextProvider = ({
  children,
}: Children) => {
  const [emailState, dispatchEmail] = useReducer(
    emailReducer,
    initialState
  );

  const emailInputHandler = (value: string): void => {
    dispatchEmail({ type: "EMAIL_INPUT", val: value });
  };

  const emailBlurHandler = (): void => {
    dispatchEmail({ type: "EMAIL_CHECK" });
  };

  const clearHandler = () => {
    dispatchEmail({ type: "CLEAR" });
  };

  const store = {
    emailValue: emailState.value,
    emailCheck: emailState.isValid,
    emailInput: emailInputHandler,
    emailBlur: emailBlurHandler,
    clear: clearHandler,
  };

  return (
    <EmailContext.Provider value={store}>
      {children}
    </EmailContext.Provider>
  );
};
