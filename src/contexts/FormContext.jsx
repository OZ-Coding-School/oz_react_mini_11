import { createContext, useReducer } from "react";

const UPDATE_FORM = "UPDATE_FORM";

function formReducer(state, action) {
  switch (action.type) {
    case UPDATE_FORM: {
      const { label, value, isValid } = action.payload;
      return {
        ...state,
        [label]: { value, isValid },
      };
    }
    default:
      return state;
  }
}

export const FormContext = createContext({
  formState: {},
  updateForm: () => {},
});

export function FormProvider({ initialForms, children }) {
  const [formState, dispatch] = useReducer(formReducer, initialForms);

  const updateForm = (label, value, isValid) => {
    dispatch({
      type: UPDATE_FORM,
      payload: { label, value, isValid },
    });
  };

  return (
    <FormContext.Provider value={{ formState, updateForm }}>
      {children}
    </FormContext.Provider>
  );
}
