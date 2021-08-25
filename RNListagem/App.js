import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import styled from 'styled-components/native';

//Components

const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

const NameArea = styled.View`
  background-color: #CCC;
  padding: 20px;
  width: 90%;
  margin-top: 5px;
`;

const Nome = styled.Text`
font-size: 18px;
`;

const Input = styled.TextInput`
  background-color: #fff;
  font-size: 15px;
  height: 50px;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #000;
  width: 90%;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 10px;
`;

const Salvar = styled.Button``;

export default () => {
  const [nome, setNome] = useState('');
  const [novoNome, setNovoNome] = useState('');

  const handleSave = async () => {
    if (novoNome != '') {
      await AsyncStorage.setItem('@nome', novoNome);
      setNome(novoNome);
      setNovoNome('');
    }
  };

  const getNome = async () => {
    const n = await AsyncStorage.getItem('@nome');
    setNome(n);
  };

  useEffect(() => {
    getNome();
  }, []);

  return (
    <Page>
      <Input
        placeholder="Qual seu nome?"
        value={novoNome}
        onChangeText={texto => setNovoNome(texto)}
      />
      <Salvar title="Salvar" onPress={handleSave} />

      <NameArea>
        <Nome>{nome}</Nome>
      </NameArea>
    </Page>
  );
};
