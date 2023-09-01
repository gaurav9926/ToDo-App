import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header';
import AddItems, {IItem} from './src/components/AddItems';
import Item from './src/components/Items';


const App = () => {
  const [ItemList, setItemList] = useState<IItem[]>([]);


  return (
    <SafeAreaView>
      <Header heading="To Do App!" />
      <AddItems ItemList={ItemList} setItemList={setItemList}></AddItems>

      <Item ItemList={ItemList} setItemList={setItemList}></Item>

    </SafeAreaView>
  );
};

export default App;
