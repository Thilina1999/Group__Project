import React from 'react';
import styled from "styled-components";
import { introItems } from './data';

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
`;

const Para = styled.div`
    color: gray;
    font-size: 15px;
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

function Intro ({item}){
    return(
        <Container>
            <Item1>
                {introItems.map((item) =>(
                <ImgContainer bg={item.bg} key={item.id}>
                        <Image src={item.backgroundImage} />
                </ImgContainer>
                ))}
           </Item1>
           <Item2>
                <SubTitle>Trending</SubTitle>
                <Title>We Want to Hear Your Thoughts</Title> <br/>
                <Para>miniBell never stop giving the best for your little one - that's what motivates us <br/>
                to keep making improvements. </Para> 
                <Button> Get Started </Button> 
            </Item2>  
        </Container>
    
    );
};


export default Intro;