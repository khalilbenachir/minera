import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem 2rem;
  overflow:hidden;
  ${props => `
  display: ${props.display};
  flex-direction: ${props.direction};
  height: ${props.height};
  justify-content: ${props.justify};
  align-items: ${props.align};
  background-color:${props.background};
  position:${props.position};
  border-bottom:${props.borderB && "1px solid #F3F3F3"}
`};
`;
