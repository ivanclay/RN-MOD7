import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
`;

export default () => {
  return (
    <Page>
      <Text>TESTANDO</Text>
      <Text>TESTANDO</Text>
      <Text>TESTANDO</Text>
    </Page>
  );
};
