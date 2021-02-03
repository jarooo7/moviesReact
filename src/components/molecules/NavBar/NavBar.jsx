import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import { Nav, SearchContainer, Item } from './NavBar.styles';


const NavBar = (props) => {

  const [searchText, setSearchText] = useState();
  const history = useHistory();

  const handelSearch = ()=>{
    const location = {
      pathname: `/search/${searchText}`,
      state:{
        isActive: true
      }
    }
    history.push(location);
  };

  
  const handelChange = (e)=>{
    setSearchText(e.target.value);
  };

  return(
    <Nav>
      <Item to='/' exact>Start</Item>
      <Item to='/fav'>Ulubione</Item>
      <SearchContainer>
        <Input value={searchText} onChange={handelChange} type="text" name="search" placeholder="Search.." />
        <Button onClick={handelSearch}>Wyszukaj</Button>
      </SearchContainer>
    </Nav>
  );
}



export default NavBar;
