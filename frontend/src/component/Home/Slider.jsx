import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components";
import { useState } from "react";
import { sliderItems } from "../data";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    margin-top: 20px;
`;

const Arrow =  styled.div`
    width: 50px;
    height: 50px;
    background-color: #f7eeee;
    border-radius: 50px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    console: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.slideIndex * -100}vw);
    margin-left: 110px;
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: ${props=> props.bg};
`;

const ImgContainer = styled.div`
    height: 100%;
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    
`;

const InfoContainer = styled.div`
    position: absolute;
    top: 480px;
    left: 220px;
    width: 100%
    height: 100%;
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: center;
`;

const Button = styled.button`
    border: none;
    border-radius: 20px;
    padding: 15px 35px 15px 35px;
    background-color: white;
    box-shadow: 1px 3px #a6a6a6;
    color: black;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.5s ease;
    
    &:hover{
        color: gray;
        transform: scale(1.1);
`;  
 

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) =>{

        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }
    };
    
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) =>(
            <Slide bg={item.bg} key={item.id}>
                <ImgContainer>
                    <Image src={item.backgroundImage} />
                </ImgContainer>
                <InfoContainer>
                    <Button> Get Started </Button>
                </InfoContainer>
            </Slide>
            ))} 
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider
