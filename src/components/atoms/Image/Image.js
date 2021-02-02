import styled from 'styled-components';


const Image = styled.div` 
  background-image: url("${props=>props.src}");
  background-color: #cccccc;
  height: 400px;
  width: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px 50px 5px 5px; 
`;
export default Image;
