import { useNavigate } from "react-router-dom";
import {
  Button,
  ButtonWrapper,
  Container,
  Input,
  InputWrapper,
  Title,
  Wrapper,
} from "../styles/NavBar.styles";

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
