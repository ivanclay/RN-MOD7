/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components/native';

const ListaItemSwipe = styled.TouchableHighlight`
  width: 100%;
  height: 50px;
  background-color: #ff3300;
  justify-content:center;
`;

const ListaItemIcon = styled.View`
  width: 20px;
  height: 20px;
  background-color: #fff;
  margin-left:14px;
  border-radius: 1px;
  border: 3px solid #000;
`;

export default (props) => {
  return (
      <ListaItemSwipe onPress={props.onDelete} underlayColor="#FFFF33" >
      <ListaItemIcon/>
      </ListaItemSwipe>
      );
};
