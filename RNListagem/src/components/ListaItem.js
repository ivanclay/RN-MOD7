import React from 'react';
import styled from 'styled-components/native';

//const Item = styled.TouchableHighlight`
const Item = styled.TouchableOpacity`
  padding: 10px;
  background-color: #ccc;
  flex-direction: row;
`;

const ItemText = styled.Text`
  font-size: 15px;
  flex: 1;
`;

const ItemCheck = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 3px solid #000;
  background-color: #fff;
`;

export default (props) => {
  return (
    <Item onPress={() => {}} activeOpacity={0.4}>
      <>
        <ItemText>{props.data.task}</ItemText>
        <ItemCheck />
      </>
    </Item>
  );
};
