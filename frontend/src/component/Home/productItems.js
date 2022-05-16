import React from 'react';
import styled from "styled-components";
import {popularProducts} from "../Home/data";
import Product from "../Home/product";

const Container = styled.div`
    padding: 50px;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Item = styled.div`
    margin-top: 50px;
    display: flex;
`;

const SubTitle = styled.div`
    text-align: center;
    color: #75d6dc;
`;

const Title = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 30px;
`;

function ProductItems(){
  return (
        <Container>
            <SubTitle>Trending</SubTitle>
            <Title>Shop our popular <br/> baby products</Title>
            <Item>
            {popularProducts.map((item)=> (
                <Product item={item} key={item.id} />
            ))}
            </Item>
        </Container>
  )

}

export default ProductItems;
