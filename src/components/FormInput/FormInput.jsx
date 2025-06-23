import styled from "@emotion/styled";
import { useValid } from "../../hooks/useValid";
import { memo, useEffect } from "react";

export const Input = styled.input`
  border: 1px solid #d0d0d0;
  padding: 1.25rem;
  color: #fff;
  background: #00000085;
  font-size: 1rem;
  border-radius: 0.5rem;
  outline: none;

  &::placeholder {
    color: #d0d0d0;
  }

  &:focus {
    outline: 3px solid #fff;
    outline-offset: 2px;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.mobile}) {
    font-size: 1.25rem;
  }
`;

const ValidText = styled.span`
  color: #eee;
  font-size: 1rem;

  @media (min-width: ${(props) => props.theme.breakPoints.mobile}) {
    font-size: 1.125rem;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FormInput = memo(
  ({ type, placeholder, formName, formState, setFormState, confirmText }) => {
    const { value } = formState;

    const { isValid: isFormValid, validText } = useValid(
      value,
      formName,
      formName === "passwordConfirm" ? confirmText : ""
    );

    useEffect(() => {
      setFormState({ value, isValid: isFormValid });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, isFormValid]);

    return (
      <Container>
        <Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(event) =>
            setFormState({
              value: event.target.value,
              isValid: formState.isValid,
            })
          }
        />
        {value && <ValidText>{validText}</ValidText>}
      </Container>
    );
  }
);

export default FormInput;
