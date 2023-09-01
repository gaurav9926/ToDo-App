import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {IItem} from './AddItems';

const Item = ({
  ItemList,
  setItemList,
}: {
  ItemList: IItem[];
  setItemList: React.Dispatch<React.SetStateAction<IItem[]>>;
}) => {
  return (
    <View style={styles.container}>
      {ItemList.length === 0 ? (
        <Text style={styles.subtitle}> No To Do Tasks! </Text>
      ) : (
        <Text style={styles.subtitle}> Your To Do Tasks!</Text>
      )}

      {ItemList.map((todo: IItem, index: number) => (
        <View style={styles.listItem} key={index}>
          <Text
            style={[
              styles.task,
              {
                textDecorationLine: todo.isCompleted ? 'line-through' : 'none',
              },
            ]}>
            {todo.value}
          </Text>

          <Button
            title={todo.isCompleted ? 'Completed' : 'Complete'}
            onPress={() => {
              console.debug(
                'Value of ItemList[index].value- ',
                ItemList[index].value,
              );
              const newItemList = [...ItemList];
              newItemList[index].isCompleted = !newItemList[index].isCompleted;
              setItemList(newItemList);
            }}
          />

          <Button
            title="X"
            onPress={() => {
              console.debug(
                'Value of ItemList[index].value- ',
                ItemList[index].value,
              );
              const newItemList = [...ItemList];
              newItemList.splice(index, 1);
              setItemList(newItemList);
            }}
            color={'crimson'}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  task: {
    width: 200,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    color: 'purple',
  },
});

export default Item;
