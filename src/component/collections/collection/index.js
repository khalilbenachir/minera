import styled from "styled-components";



export const CollectionsWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
margin-bottom:1rem;
`;

export const CollectionLong = styled.div`
display: flex;
flex: 2;
height: 100%;
${props => `
  background-color: ${props.backgroundColor};
  margin-right: ${props.mright};
  margin-left: ${props.mleft};
`};
`;

export const CollectionShort = styled.div`
display: flex;
flex: 1;
height: 100%;
${props => `
  background-color: ${props.backgroundColor};

`};
`;