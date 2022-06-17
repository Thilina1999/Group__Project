import { Badge } from "@material-ui/core";
import { Reorder, Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Favorite } from "@material-ui/icons";
import React from 'react';
import styled from 'styled-components';
import { logoImage } from "../Home/data";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Container = styled.div`
    height: 80px;
    background-color: #d4f2ff;
`;

const Wrapper = styled.div`
    padding: 10px 40px;
    font-family: 'montserrat';
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 0px;
    margin-top: -50px;
     
`;

const Left1 = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 50px;
    margin-top: -70px;
     
`;

const Right = styled.div`
    flex: 1;
    display: flex; 
    align-items: center;
    justify-content: flex-end;
    margin-top: -50px;
     
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    border-radius: 50px;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    width: 300px;
    border: none;
    background-color: white;
     
`;

const Input = styled.input`
    border: none;
`;

const Button = styled.div`
    padding: 5px;
    curosr: pointer;
    text-align: center;
`;

const Button1 = styled.div`
    background-color: white;
    padding: 7px 7px 7px 7px;
    margin-left: -50px;
    border-radius: 10px;
    cursor: pointer;
`;

const Button2 = styled.div`
    background-color: white;
    padding: 5px ;
    border-radius: 50px;
    curosr: pointer;    
`;

const Button3 = styled.div`
    background-color: white;
    padding: 5px ;
    border-radius: 50px;
    curosr: pointer;   
    text-align: center; 
`;

const Center = styled.div`
    flex: 1;
`;

const Logo = styled.h1`
    margin-left: 200px;
    cursor: pointer;
`;

const MenuItem1 = styled.div`
    font-size: 14px;
    margin-top: 30px;
    cursor: pointer;
    margin-left: 40px;
    font-weight: 500;
    transition: all 0.5s ease;
    
    &:hover{
        color: gray;
        transform: scale(1.1);
    }
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 40px;
    font-weight: 500;
    transition: all 0.5s ease;
    
    &:hover{
        color: gray;
        transform: scale(1.1);
    }
`;

const ImgContainer = styled.div`
     diplay: flex;
`;

const Image = styled.img`
     height: 100px;
     width: 100px;
`;

function Navbar1() {
    let firstName

    const logOut = async () => {
        const token = localStorage.getItem('auth-token')
        await axios.post('http://localhost:8080/api/logout', { headers: { Authorization: `Bearer ${token}` } }, { withCredentials: true });
        firstName = ''
        localStorage.removeItem('auth-token')
        localStorage.removeItem('name')
        localStorage.removeItem('id')
        localStorage.removeItem('role')
    }

    firstName = localStorage.getItem('name')
    console.log(firstName)


    let menu;

    if (firstName === null) {
        menu = (
            <>
                <MenuItem><Button3 style={{ padding: "10px 10px", width: "70px" }} >
                    <Link to={"/signin"} style={{ textDecoration: "none", color: "black" }}>
                        Sign In
                    </Link>
                </Button3></MenuItem>
                <MenuItem>
                    <Link to={"/signup"} style={{ textDecoration: "none", color: "black" }}>
                        Create Account
                    </Link>
                </MenuItem>
            </>
        );
    }
    else {
        menu = (
            <>
                <MenuItem><Button3 style={{ padding: "10px 10px", width: "70px" }} onClick={logOut} >
                    <Link to={"/signin"} style={{ textDecoration: "none", color: "black" }}>
                        Log Out
                    </Link>
                </Button3></MenuItem>
            </>

        )
    }

    let buyer;
    let seller;
    let admin;

    if (localStorage.getItem('role') == 'client') {
        buyer = (
            <>
                <Wrapper>
                    <Left1>
                        <MenuItem1><Button1 style={{ color: "blue", background: "#d4f2ff", width: "30px", height: "30px" }}><Reorder style={{ color: "gray", width: "18px" }}></Reorder></Button1></MenuItem1>
                        <Link to="/home"
                            style={{
                                color: "#000",
                                textDecoration: "none"
                            }}>

                            <MenuItem1>Home</MenuItem1>
                        </Link>

                        <Link to="/Buyer"
                            style={{
                                color: "#000",
                                textDecoration: "none"
                            }}>

                            <MenuItem1>Buyer Protection</MenuItem1>
                        </Link>

                        {/* <Link to="/viewprofile"
                            style={{
                                color: "#000",
                                textDecoration: "none"
                            }}>

                            <MenuItem1>Profile</MenuItem1>
                        </Link> */}

                        <Link to="/sell"
                            style={{
                                color: "#000",
                                textDecoration: "none"
                            }}>

                            <MenuItem1>Sell</MenuItem1>
                        </Link>
                        {/* <Link to="/productview"
                            style={{
                                color: "#000",
                                textDecoration: "none"
                            }}>

                            <MenuItem1>Product</MenuItem1>
                        </Link>
                        <Link to="/viewCategory"
                            style={{
                                color: "#000",
                                textDecoration: "none"
                            }}>

                            <MenuItem1>Category</MenuItem1>
                        </Link> */}
                    </Left1>
                </Wrapper>
            </>
        )
    }

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ fontSize: "16", width: "230" }}></Search>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        {logoImage.map((item) => (
                            <ImgContainer bg={item.bg} key={item.id}>
                                <Image src={item.backgroundImage} />
                            </ImgContainer>
                        ))}
                    </Logo>
                </Center>
                <Right>
                    <>
                        {menu}
                    </>
                    {firstName ? ' Hi ' + firstName : ''}
                    <Button style={{ width: "50px" }}>
                        <MenuItem>
                            <Badge badgeContent={4} color="primary">
                                <Favorite style={{ color: "red" }}></Favorite>
                            </Badge>
                        </MenuItem>
                    </Button>
                    <Button2>
                        <MenuItem>
                            <Badge badgeContent={2} color="primary">
                                <ShoppingCartOutlined></ShoppingCartOutlined>
                            </Badge>
                        </MenuItem>
                    </Button2>
                </Right>
            </Wrapper>
            {buyer}

        </Container>
    )
}

export default Navbar1;
