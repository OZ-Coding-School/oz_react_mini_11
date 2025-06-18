import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
  /* background-color: green; */
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: #82d1f8;
  cursor: pointer;
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
  background-color: #e1f6ff;
  font-size: 1.2rem;
  outline: 0;
  caret-color: #57c4fa;

  &:focus {
    border: 2px solid #82d1f8;
  }
`;

const ButtonWrapper = styled.div`
  flex: 1 0 fill;
  display: flex;
  gap: 0.5rem;
  /* background-color: blueviolet; */
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: 3px solid #abdef8;
  border-radius: 1rem;
  background-color: #fff;
  color: #82d1f8;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #abdef8;
  }
`;

const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100px;
  padding: 1rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0 0 10px 3px #00000015;
  background-color: #fff;
`;

function NavBar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Container>
      <Wrapper>
        <Title onClick={handleClick}>Movieflix</Title>
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
