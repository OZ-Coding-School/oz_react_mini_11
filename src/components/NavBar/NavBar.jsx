import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  ButtonWrapper,
  Container,
  Input,
  InputWrapper,
  MenuWrapper,
  StyledLottie,
  Title,
  Wrapper,
} from "./NavBar.styles";
import menuAnimation from "../../assets/animations/menu-animation.json";
import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";

function NavBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleTitleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    if (location.pathname !== "/search") {
      setQuery("");
    }
  }, [location.pathname]);

  useDebounce(() => navigate(`/search?q=${query}`), query, 500);

  return (
    <Container>
      <Wrapper>
        <Title onClick={handleTitleClick}>MOVIEFLIX</Title>
        <InputWrapper>
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </InputWrapper>
      </Wrapper>
      <ButtonWrapper>
        <Button>로그인</Button>
        <Button>회원가입</Button>
      </ButtonWrapper>
      <MenuWrapper>
        <StyledLottie animationData={menuAnimation} loop autoPlay />
      </MenuWrapper>
    </Container>
  );
}

export default NavBar;
