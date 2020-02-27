import styled from "styled-components";



export const CategoryList=styled.ul`
list-style:none;
display:flex;
margin:1rem 2rem;



`

export const CategotyItem=styled.li`
margin:0 1rem;
text-transform:capitalize;
border:none;
padding-bottom:.6rem;

transition:all .2s ease-in;
&:hover{
    border-bottom:1px solid black;
}

`;

