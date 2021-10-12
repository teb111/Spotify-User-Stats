import styled from "styled-components";

export const MainStyled = styled.div``;
export const UserDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  width: fit-content;
  padding: 10px 14px 10px 120px;

  @media (max-width: 800px) {
    padding-left: 32px;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Name = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) =>
    theme?.colors?.color ? theme?.colors?.color : "#ffffffeb"};
  font-size: 30px;
  font-weight: 600;
`;

export const List = styled.ul`
  margin-top: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;

  & li {
    list-style: none;
    margin-left: 10px;
  }

  & li h5 {
    font-size: 12px;
    letter-spacing: 1.7px;
    text-transform: uppercase;
    font-weight: 400;
  }

  & li h5 span {
    color: ${({ theme }) =>
      theme?.colors?.logoColor ? theme?.colors?.logoColor : "#075b25"};
  }
`;

export const UserImage = styled.img`
  margin-top: 10px;
  width: 300px;
  height: 500px;
  border-radius: 20%;

  transition: 0.7s ease-in-out;

  @media (max-width: 600px) {
    width: 94%;
    height: 400px;
    border-radius: 50%;
  }
`;

export const UserInfo = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    width: 94%;
  }
`;

export const SignOut = styled.button`
  margin-top: 3px;
  display: block;
  padding: 1rem 0.2rem;
  font-size: 1.5rem;
  border-radius: 3rem;
  text-transform: uppercase;
  border: 0px;
  color: ${({ theme }) =>
    theme?.colors?.color ? theme?.colors?.color : "#ffffffeb"};

  text-align: center;
  letter-spacing: 2.6px;
  font-size: 14px;
  display: block;
  padding: 10px 35px;
  border-radius: 35px;
  box-shadow: none;
  background-color: none;
  cursor: pointer;
  text-decoration: none;
  border: 1px dashed
    ${({ theme }) =>
      theme?.colors?.logoColor ? theme?.colors?.logoColor : "#075b25"};
  background-color: transparent;
  background-image: linear-gradient(
    to left,
    transparent,
    transparent 50%,
    #075b25 70%,
    #075b25
  );
  background-position: 100% 0px;
  background-size: 200% 100%;
  transition: 0.7s ease-in-out;
  width: 90%;
  outline: none;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) =>
      theme?.colors?.logoColor ? theme?.colors?.logoColor : "#075b25"};
  }

  & svg {
    margin: -2px;
    padding: 0;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 30px;

  & h3 {
    display: block;
    text-align: start;
    text-transform: uppercase;
    letter-spacing: 1.8px;
    font-size: 18px;
    font-weight: 400;
  }
`;
