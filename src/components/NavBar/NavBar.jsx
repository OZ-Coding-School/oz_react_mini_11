import { useNavigate } from "react-router-dom";
import {
  Button,
  ButtonWrapper,
  Container,
  Input,
  InputWrapper,
  MenuButton,
  StyledLottie,
  Title,
  Wrapper,
} from "./NavBar.styles";
import Lottie from "lottie-react";
import menuAnimation from "../../assets/animations/menu-animation.json";

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
      <MenuButton>
        <StyledLottie animationData={menuAnimation} loop autoplay />
      </MenuButton>
    </Container>
  );
}

export default NavBar;
