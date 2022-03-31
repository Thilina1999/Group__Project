import React from 'react';
import styled from "styled-components";
import { brands } from "./data";

const Container = styled.div`
    display: flex;
    padding: 0px 200px 100px 200px;
    justify-content: space-between;  
`;

const ImgContainer = styled.div`
    
`;

const Image = styled.img`
    height: 120px;
    width: 180px;
    transition: all 0.5s ease;
    opacity: 0.5;
    cursor: pointer;
    
    &:hover{
        opacity: 100%;
        transform: scale(1.1)
`;

function Branding({item}){
    return (
        <Container>
            {brands.map((item) => (
                <ImgContainer item={item} key={item.id}>
                    <Image src={item.img} />
                </ImgContainer>
       ))}
        </Container>
    );
}


export default Branding;