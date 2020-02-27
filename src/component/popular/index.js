import React from 'react';
import styled from 'styled-components';


import { Container } from '../common/container';
import {CategotyItem,CategoryList} from "./category";
import {Card,CardWrapper} from "./card";



const Title=styled.h1`
    font-weight:bold;
    margin-bottom:1rem;
`;



const Popular = () => {
    return (
        <Container display="flex" justify="center" align="center" direction="column">
            <Title>#most.popular</Title>
            <CategoryList>
                <CategotyItem>furtniture</CategotyItem>
                <CategotyItem>Accessoires</CategotyItem>
                <CategotyItem>Decoration</CategotyItem>
            </CategoryList>
            <CardWrapper>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
           
            </CardWrapper>
        </Container>
    )
}

export default Popular;