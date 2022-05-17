import React from 'react'
import styled from "styled-components"
import { FavoriteBorder,Search,ShoppingCartOutlined } from '@material-ui/icons';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fffff;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`;

const Image = styled.img`
    height: 100%;
    z-index: 2;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover{
        color: #d4f2ff;
        transform: scale(1.1);
    }
`;

function Product({item}){
  return ( 
        <Container>
            <Image src={item.img}/>
            <Info>
                <Icon>
                <ShoppingCartOutlined></ShoppingCartOutlined>
                </Icon>
                <Icon>
                <Search></Search>
                </Icon>
                <Icon>
                <FavoriteBorder></FavoriteBorder>
                </Icon>
            </Info>
        </Container>
  )
}

export default Product;
