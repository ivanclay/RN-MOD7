import React, {useState} from 'react';
import styled from 'styled-components/native';
import uuid from 'uuid/v4';

//Components
import AddItemArea from './src/components/AddItemArea';
import ListaItem from './src/components/ListaItem';

//file lista.js
import lista from './src/files/lista';

const Page = styled.SafeAreaView`
  flex: 1;
`;

const Listagem = styled.FlatList`
  flex: 1;
`;

export default () => {
  const [items, setItems] = useState(lista);
  const addNewItem = (texto) => {
    let newItems = [...items];
    newItems.push({
      id: uuid(),
      task: texto,
      done: false,
    });
    setItems(newItems);
  };

  const toggleDone = (index) => {
    let newItems = [...items];
    newItems[index].done = !newItems[index].done;
    setItems(newItems);
  };

  return (
    <Page>
      <AddItemArea onAdd={addNewItem} />
      <Listagem
        data={items}
        renderItem={({item, index}) => (
          <ListaItem onPress={() => toggleDone(index)} data={item} />
        )}
        keyExtractor={(item) => item.id}
      />
    </Page>
  );
};
