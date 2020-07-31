import styled from "styled-components";

export const Overlay = styled.div`
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  backdrop-filter: blur(10px) grayscale(10%) brightness(80%);
`;

export const FormWrapper = styled.form`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 80%;
  background: #fff;
  border-radius: 5px;
  transform: ${({ visible }) =>
    visible ? "translateY(0)" : "translateY(10px)"};
  transition: transform 0.3s ease-out;
`;

export const Title = styled.p`
  margin: 3rem;
  text-align: center;
  font-size: 2.4rem;
  font-weight: 700;
  color: ${({ theme: { color } }) => color.darkFont};
`;

export const InputTitle = styled.input`
  width: 80%;
  margin-bottom: 1rem;
  padding: 1.5rem;
  background-color: ${({ theme: { color } }) => color.lightOrange};
  color: ${({ theme: { color } }) => color.white};
  font-size: 2rem;
  font-weight: 700;
  outline: none;
  border: none;
  border-radius: 30px;
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.34);
  &::placeholder {
    color: #fff;
  }
`;

export const InputIngredients = styled.textarea`
  width: 80%;
  margin: 1rem 0;
  padding: 1.5rem;
  min-height: 12rem;
  background-color: ${({ theme: { color } }) => color.lightOrange};
  color: ${({ theme: { color } }) => color.white};
  font-size: 2rem;
  font-weight: 700;
  outline: none;
  border: none;
  border-radius: 30px;
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.34);
  &::placeholder {
    color: #fff;
    opacity: 0.8;
  }
`;

export const InputButton = styled.button`
  width: 80%;
  margin: 3rem 0;
  padding: 1.5rem;
  background-color: ${({ theme: { color } }) => color.pink};
  color: ${({ theme: { color } }) => color.white};
  font-size: 1.8rem;
  font-weight: 700;
  outline: none;
  border: none;
  border-radius: 30px;
`;
