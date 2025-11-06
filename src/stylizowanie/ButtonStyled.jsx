import React from 'react';
import styled from "styled-components";
const Button = styled.button`
  background-color: #4f46e5;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #4338ca;
  }
`;


const ButtonStyled = () => {

    return (
        <div>
            <Button>Kliknij mnie</Button>
        </div>
    );
};

export default ButtonStyled;