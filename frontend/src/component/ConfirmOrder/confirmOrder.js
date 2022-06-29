import React from 'react';
import styled from "styled-components";
//import { introItems } from './data';
import { Link } from "react-router-dom";

const Container = styled.div`
    margin-top: 50px;
    display: flex;
`;

 

const Item2 = styled.div`
     margin-top: 70px;
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

const Button = styled.button`
    border: none;
    border-radius: 20px;
    margin-top: 25px;
    padding: 15px 35px 15px 35px;
    background-color: #d4f2ff;
    box-shadow: 1px 3px #a6a6a6;
    color: black;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.5s ease;
    
    &:hover{
        color: gray;
        transform: scale(1.1);
`; 
  

function ConfirmOrder ({total}){
    return(
        <Container>
            
           <Item2>
                <Title>Order Summary</Title> <br/>
                <SubTitle>Product Name</SubTitle> <br/>
                <Para>Total={total}</Para> 
                <Button> 
                <Link
              to={""}
              style={{ textDecoration: "none", color: "black" }}
              > 
              Place the order
              </Link>
              </Button>
            </Item2>  
        </Container>
    
    );
};


export default ConfirmOrder;