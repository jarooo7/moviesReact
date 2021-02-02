import styled from 'styled-components';
const Button = styled.a` 
   display:inline-block;
   padding:0.35em 1.2em;
   border:0.1em solid #FFFFFF;
   margin:0 0.3em 0.3em 0;
   border-radius:0.12em;
   box-sizing: border-box;
   text-decoration:none;
   font-family:'Roboto',sans-serif;
   font-weight:300;
   color:#FFFFFF;
   text-align:center;
   transition: all 0.2s;
   &:hover{
     color:#000000;
     background-color:#FFFFFF;
    }

`;
export default Button;