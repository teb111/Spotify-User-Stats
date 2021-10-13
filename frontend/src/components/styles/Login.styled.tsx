import styled from "styled-components";

export const LoginStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 25vh;

  & button {
    display: block;
    padding: 1rem 0.2rem;
    font-size: 1.5rem;
    border-radius: 3rem;
    text-transform: uppercase;
    border: 0px;
    color: ${({ theme }) =>
      theme?.colors?.color ? theme?.colors?.color : "#ffffffeb"};

    letter-spacing: 1.6px;
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
    width: 50%;
    outline: none;
  }

  & button:hover {
    cursor: pointer;
    background: ${({ theme }) =>
      theme?.colors?.logoColor ? theme?.colors?.logoColor : "#075b25"};
  }

  & h6 a svg {
    width: 70px;
  }

  & h6 a .cls-1 {
    fill: url(#linear-gradient);
  }
  & h6 a .cls-2 {
    fill: "#111";
  }
  & h6 a .cls-3 {
    fill: "#111";
  }
  & h6 a .cls-4 {
    fill: "#111";
  }

  & h2 {
    text-transform: uppercase;
    letter-spacing: 2.9px;
    font-size: 1.3em;
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
    & button {
      width: 75%;
    }
  }
`;
