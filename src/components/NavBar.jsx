import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
  /* background-color: green; */
`;

const Title = styled.div`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.purple.dark};
  cursor: pointer;
  font-family: "Tenada";
  /* background-color: pink; */
  margin-bottom: -1rem;
`;

const InputWrapper = styled.div`
  width: 50%;
  /* background-color: pink; */
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 2rem;
  border: 0;
  border-radius: 2rem;
  background-color: #eee;
  font-size: 1.2rem;
  outline: 0;
  caret-color: ${(props) => props.theme.colors.purple.lightActive};

  &:focus {
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.purple.lightActive}
      inset;
  }
`;

const ButtonWrapper = styled.nav`
  flex: 1 0 fill;
  display: flex;
  gap: 0.5rem;
  /* background-color: blueviolet; */
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 1rem;
  background-color: transparent;
  color: ${(props) => props.theme.colors.purple.normal};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s ease-out;

  &:hover {
    color: #fff;
    background-color: ${(props) => props.theme.colors.purple.normal};
    box-shadow: 0 0 20px 10px ${(props) => props.theme.colors.purple.normal};
  }
`;

const Container = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1.5rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0 0 10px 3px #00000015;
  background-color: #2c2c2c;
`;

function NavBar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Container>
      <Wrapper>
        <Title onClick={handleClick}>MOVIEFLIX</Title>
        <InputWrapper>
          <Input />
        </InputWrapper>
      </Wrapper>
      <ButtonWrapper>
        <Button>로그인</Button>
        <Button>회원가입</Button>
      </ButtonWrapper>
    </Container>
  );
}

export default NavBar;
