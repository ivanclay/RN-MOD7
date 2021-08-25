import React from 'react';
import styled from 'styled-components/native';

//const Item = styled.TouchableHighlight`
const Item = styled.TouchableOpacity`
  padding: 10px;
  background-color: #eee;
  flex-direction: row;
`;

const ItemCheck = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 3px solid #000;
  background-color: ${props=>props.done ? '#ff0' : '#fff'};
`;

const ItemText = styled.Text`
  flex: 1;
  font-size: 15px;
  text-decoration: ${props=>props.done ? 'line-through' : ''};
  font-weight: ${props=>props.done ? 'bold' : 'normal'};
`;

export default (props) => {
  return (
    <Item onPress={props.onPress} activeOpacity={0.4}>
      <>
        <ItemText done={props.data.done}>{props.data.task}</ItemText>
        <ItemCheck done={props.data.done} />
      </>
    </Item>
  );
};
