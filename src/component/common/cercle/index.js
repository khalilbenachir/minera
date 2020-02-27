import styled from "styled-components";


export const Cercle = styled.div`
border-radius: 50%;
display: flex;
position: absolute;

${props => `
height: ${props.height};
width: ${props.height};
left: ${props.left};
top: ${props.top};
right: ${props.right};
bottom: ${props.bottom};

background-color:${props.background};
`};
`;