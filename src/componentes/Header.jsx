import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderArea = styled.header`
display: flex;
align-items: center;
justify-content: left;
gap: 1400px;
background-color: black;
padding: 20px;
margin-bottom: 70px;

a {
text-decoration: none;
color: white;
font-size: 25px;

&:hover{
    text-decoration: underline;

}
}


`;
export const Header = () => {
    return (
        <HeaderArea>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
        </HeaderArea>
    )
}