import styled from "@emotion/styled";
import { useValid } from "../../hooks/useValid";
import { memo, useContext, useEffect } from "react";
import { FormContext } from "../../contexts/FormContext";

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

const FormInput = memo(({ type, placeholder, label, confirmText }) => {
  const { formState, updateForm } = useContext(FormContext);
  const { value } = formState[label];

  const { isValid: valid, validText } = useValid(
    value,
    label,
    label === "passwordConfirm" ? confirmText : ""
  );

  useEffect(() => {
    updateForm(label, value, valid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, valid]);

  return (
    <Container>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => updateForm(label, event.target.value, valid)}
      />
      {value && <ValidText>{validText}</ValidText>}
    </Container>
  );
});

export default FormInput;
