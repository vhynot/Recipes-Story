import styled from "styled-components";

export const Add = styled.div`
  /* ${(props) => (props.active ? "calc(1rem + 14px)" : "1rem")} */
  margin: 1.2rem;
  margin-right:3rem;
  border-radius: 50%;
  stroke: ${({ theme: { color } }) => color.darkFont};
  user-select: none;
  transform: ${(props) => (props.activeAdd ? "rotate(45deg)" : "rotate(0)")};
  cursor: pointer;
  transition: transform 0.3s ease;
`;
