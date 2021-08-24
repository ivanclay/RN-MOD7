import React from 'react';
import styled from 'styled-components/native';
import ListaItem from './src/components/ListaItem';

import lista from './src/files/lista';

const Page = styled.SafeAreaView`
  flex: 1;
`;

const Listagem = styled.FlatList`
  flex: 1;
`;

export default () => {
  return (
    <Page>
      <Listagem
        data={lista}
        renderItem={({item}) => <ListaItem data={item} />}
        keyExtractor={(item) => item.id}
      />
    </Page>
    // <Page>
    //   <Listagem>
    //     {lista.map((item, index) => {
    //       return (
    //         <Item key={index} onPress={() => {}} activeOpacity={0.4}>
    //           <>
    //             <ItemText>{item.task}</ItemText>
    //             <ItemCheck />
    //           </>
    //         </Item>
    //       );
    //     })}
    //   </Listagem>
    // </Page>
  );
};
