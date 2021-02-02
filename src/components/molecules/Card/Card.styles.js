import styled from 'styled-components';

export const Container = styled.div`
    box-shadow: 0 4px 8px 0 rgba(255,255,255,0.2);
    transition: 0.3s;
    width: 300px;
    margin: 20px;
    float :left;
    background-color: #333333;
    border-radius: 15px 50px; 
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(255,255,255,0.2);
      }
    `;

export const Text = styled.div`
    padding: 20px 16px;
    text-align: center;
`;

