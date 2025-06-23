import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  ButtonWrapper,
  Container,
  Input,
  InputWrapper,
  LaptopNavWrapper,
  LogoutButton,
  Menu,
  NavWrapper,
  StyledLink,
  StyledLottie,
  StyledUserIcon,
  Title,
  UserButton,
  Wrapper,
} from "./NavBar.styles";
import menuAnimation from "../../assets/animations/menu-animation.json";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";

function NavBar() {
  const [query, setQuery] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isShowed, setIsShowed] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const lottieRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleTitleClick = () => {
    navigate("/");
  };

  const handleMenuMouseEnter = () => {
    if (!isLogin && !isShowed) lottieRef.current.playSegments([0, 35], true);
    setIsHovered(true);
    setIsShowed(true);
  };

  const handleMenuMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (location.pathname !== "/search") {
      setQuery("");
    }
  }, [location.pathname]);

  useDebounce(() => navigate(`/search?q=${query}`), query, 500);

  useDebounce(
    () => {
      if (!isLogin) lottieRef.current.playSegments([40, 70], true);
      setIsShowed(false);
    },
    !isHovered,
    500
  );

  return (
    <Container>
      <Wrapper>
        <Title onClick={handleTitleClick}>
          <span>MOVIE</span>
          <span>FLIX</span>
        </Title>
        <InputWrapper>
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </InputWrapper>
      </Wrapper>
      {isLogin ? (
        <NavWrapper>
          <UserButton
            onMouseEnter={handleMenuMouseEnter}
            onMouseLeave={handleMenuMouseLeave}>
            <StyledUserIcon />
          </UserButton>
          {isShowed && (
            <Menu
              isLogin={isLogin}
              onMouseEnter={handleMenuMouseEnter}
              onMouseLeave={handleMenuMouseLeave}>
              <StyledLink to="/wishlist">위시리스트</StyledLink>
              <LogoutButton onClick={() => setIsLogin(false)}>
                로그아웃
              </LogoutButton>
            </Menu>
          )}
        </NavWrapper>
      ) : (
        <>
          <ButtonWrapper>
            <Link to="/login">
              <Button>로그인</Button>
            </Link>
            <Link to="/signup">
              <Button>회원가입</Button>
            </Link>
          </ButtonWrapper>
          <LaptopNavWrapper
            onMouseEnter={handleMenuMouseEnter}
            onMouseLeave={handleMenuMouseLeave}>
            <StyledLottie
              animationData={menuAnimation}
              lottieRef={lottieRef}
              loop={false}
              autoplay={false}
            />
            {isShowed && (
              <Menu
                onMouseEnter={handleMenuMouseEnter}
                onMouseLeave={handleMenuMouseLeave}>
                <StyledLink to="/login">로그인</StyledLink>
                <StyledLink to="/signup">회원가입</StyledLink>
              </Menu>
            )}
          </LaptopNavWrapper>
        </>
      )}
    </Container>
  );
}

export default NavBar;
