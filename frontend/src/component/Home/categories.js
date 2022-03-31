import React from 'react';
import styled from "styled-components";
import { categories } from "./data";

const Container = styled.div`
    padding: 100px 100px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    margin-top: 50px;
`;

const ImgContainer = styled.div`
     
`;

const Image = styled.img`
    height: 100%;
    width: 180vh;
`;

const Title = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 30px;
`;

function Categories({item}) {
    return (
        <Container>
            <Title>Categories</Title>
            {categories.map((item) =>(
                <ImgContainer bg={item.bg} key={item.id}>
                    <Image src={item.backgroundImage} />
                </ImgContainer>   
       ))}
            <br/><Title>Popular Brands</Title>
        </Container>
    );
}

export default Categories;