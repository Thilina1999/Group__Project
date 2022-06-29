import React from 'react';
import styled from "styled-components";

import { Link } from "react-router-dom";

const Container = styled.div`
    margin-top: 50px;
    display: flex;
`;

const Item1 = styled.div`
    width: 40%;
    height: 50vh;
    margin-left: 195px;           
`;

const Item2 = styled.div`
     margin-top: 70px;
`;

const ImgContainer = styled.div`
    height: 100vh;
`;  

const Image = styled.img`
    height: 50%;
    border-radius: 50px;
`; 

const SubTitle = styled.div`
    color: #75d6dc;
`;

const Title = styled.div`
    font-weight: bold;
    font-size: 30px;
    font-family: 'montserrat';
`;

const Para = styled.div`
    color: gray;
    font-size: 15px;
    font-family: 'montserrat';
`;
  

function OrderProduct (prop){
    const {
        producttitle,
        productsubtitle,
        imageurl,
        quantity,
        productprice,
    }=prop;
    return(
        <Container>
            <Item1>
               
                <ImgContainer >
                        <Image src={imageurl} />           
                </ImgContainer>
               
           </Item1>
           <Item2>
                <SubTitle>Product Name={producttitle}</SubTitle>
                <Title>Product Subtitle</Title> <br/>
                <Para>Quantity={quantity}</Para> 
                <Para>Price={productprice}</Para> 
            </Item2>  
        </Container>
    
    );
};


export default OrderProduct;