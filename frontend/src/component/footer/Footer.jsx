import { Twitter,Instagram,Facebook } from '@material-ui/icons';
import React from 'react';
import styled from "styled-components";
import { footerItems } from '../data';

const Container = styled.div`
    display: flex;
    background-color: #d4f2ff;
    padding: 50px;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`

`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #75C6DC;
    background-color: #${props => props.color};
    display: center;
    justify-content: center;
    margin-right: 0--px;
    cursor: pointer;

    &:hover{
        color: black;
        transform: scale(1.1)
`;

const Center1 = styled.div`
    flex: 1;
    padding: 20px;
`;

const Center2 = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
    font-size: 15px;
`;

const List = styled.ul`
     margin; 0;
     padding: 0;
     list-style: none;
      
`;
 
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 5px;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const ImgContainer = styled.div`
    diplay: flex;
`;

const Image = styled.img`
    margin-left: 70px;
    height: 200px;
    width: 200px;
`;

export const Footer = () => {
  return (
    <Container>
        <Left>
        <Logo>
            {footerItems.map((item) =>(
            <ImgContainer bg={item.bg} key={item.id}>
                <Image src={item.backgroundImage} />
            </ImgContainer>
            ))}
        </Logo>
        </Left>
        <Center1>
            <Title>Shop</Title>
            <List>
                <ListItem>All Products</ListItem>
                <ListItem>The baby cardigans</ListItem>
                <ListItem>The baby swimwear</ListItem>
                <ListItem>Baby Gify Packs</ListItem>
            </List>
        </Center1>
        <Center2>
        <Title>Customer Care</Title>
            <List>
                <ListItem>Customer Service</ListItem>
                <ListItem>Buyer Protection</ListItem>
            </List>
        </Center2>
        <Right>
        <Title>Stay Connected</Title>
            <List>
                <ListItem>help@miniBell.com</ListItem>
                <ListItem>+94 112 783 789</ListItem>
            </List>
            <br/>
            <SocialContainer>
                <SocialIcon>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon>
                    <Twitter/>
                </SocialIcon>
            </SocialContainer>
        </Right>
    </Container>
  )
}
<hr></hr>

export default Footer;
