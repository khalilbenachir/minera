import React from 'react'
import styled from "styled-components";
import { Container } from '../common/container';
import { Cercle } from '../common/cercle';

const MainWrapper=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex:1;
    background-color:#F5EDEB;
    height:90vh;
    position:relative;
    overflow:hidden;
`;



export const Main = () => {
    return (
        <Container>
            <MainWrapper>
            <Cercle height="20rem" top="-5%" right="10%" background="#EAD6D7" />
            </MainWrapper>
        </Container>
    )
}
