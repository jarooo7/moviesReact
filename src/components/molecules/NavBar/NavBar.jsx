import React from 'react';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import { Nav, SearchContainer, Item } from './NavBar.styles';
const handelSearch = ()=>{
  console.log("juz");
};

const NavBar = (props) => {


  return(
    <Nav>
      <Item>Start</Item>
      <SearchContainer>
        <Input  type="text" name="search" placeholder="Search.." />
        <Button onClick={handelSearch}>Wyszukaj</Button>
      </SearchContainer>
    </Nav>
  );
}



export default NavBar;
