import { createContext, useReducer } from "react";

// Context
const PasswordContext = createContext({
  passwordValue: "",
  passwordCheck: true,
  passwordInput: (value: string) => {},
  passwordBlur: () => {},
  clear: () => {},
});

export default PasswordContext;

// Reducer and Initial State
type State = typeof initialState;

type Action =
  | { type: "PASSWORD_INPUT"; val: string }
  | { type: "PASSWORD_CHECK" }
  | { type: "CLEAR" };

const initialState = {
  value: "",
  isValid: true,
};

const passwordReducer = (state: State, action: Action) => {
  if (action.type === "PASSWORD_INPUT") {
    return {
      value: action.val,
      isValid: action.val.length < 30,
    };
  }
  if (action.type === "PASSWORD_CHECK") {
    return {
      value: state.value,
      isValid: state.value.length > 6,
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

export const PasswordContextProvider = ({
  children,
}: Children): JSX.Element => {
  const [passwordState, dispatchPassword] = useReducer(
    passwordReducer,
    initialState
  );

  const passwordInputHandler = (value: string) => {
    dispatchPassword({
      type: "PASSWORD_INPUT",
      val: value,
    });
  };

  const passwordBlurHandler = () => {
    dispatchPassword({ type: "PASSWORD_CHECK" });
  };

  const clearHandler = () => {
    dispatchPassword({ type: "CLEAR" });
  };

  const store = {
    passwordValue: passwordState.value,
    passwordCheck: passwordState.isValid,
    passwordInput: passwordInputHandler,
    passwordBlur: passwordBlurHandler,
    clear: clearHandler,
  };

  return (
    <PasswordContext.Provider value={store}>
      {children}
    </PasswordContext.Provider>
  );
};
