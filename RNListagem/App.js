import React from 'react';
import styled from 'styled-components/native';

import lista from './src/files/lista';

const Page = styled.SafeAreaView`
  flex: 1;
`;

const Scroll = styled.ScrollView`
  flex: 1;
`;

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

export default () => {
  return (
    <Page>
      <Scroll>
        {lista.map((item, index) => {
          return (
            <Item key={index} onPress={() => {}} activeOpacity={0.4}>
              <>
                <ItemText>{item.task}</ItemText>
                <ItemCheck />
              </>
            </Item>
          );
        })}
      </Scroll>
    </Page>
  );
};
