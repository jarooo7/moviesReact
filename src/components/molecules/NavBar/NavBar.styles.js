import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
overflow: hidden;
background-color: #333;
width: 100wv;
.item {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
.item:hover {
    background-color: #ddd;
    color: black;
  }
  
.item.active {
    border-top: 3px solid;
    color: white;
  }

`;

export const Item = styled(NavLink)`

float: left;
color: #f2f2f2;
text-align: center;
padding: 14px 16px;
text-decoration: none;
margin-left:20px;
font-size: 17px;

&:hover {
    background-color: #ddd;
    color: black;
  }
  
&.active {
    border-bottom: 3px solid;
    color: white;
  }

`;




export const SearchContainer = styled.div`
    margin-left: auto;
    width:100%;
    max-width: 500px;
`;

