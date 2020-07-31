import styled from "styled-components";

export const Add = styled.div`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem; 
  /* ${(props) => (props.active ? "calc(1rem + 14px)" : "1rem")} */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ theme: { color } }) => color.pink};
  user-select: none;
  transform: ${(props) => (props.activeAdd ? "rotate(45deg)" : "rotate(0)")};
  cursor: pointer;
  transition: transform 0.3s ease;
  z-index: 10;
`;
