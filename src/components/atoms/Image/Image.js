import styled from 'styled-components';


const Image = styled.div` 
  background-image: url("${props=>props.src}");
  background-color: #cccccc;
  height: 300px;
  width: 210px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;

`;
export default Image;
