import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export interface IItem {
  value: string;
  isCompleted: boolean;
}

const AddItems = ({
  ItemList,
  setItemList,
}: {
  ItemList: IItem[];
  setItemList: React.Dispatch<React.SetStateAction<IItem[]>>;
}) => {
  const [value, setValue] = useState('');
  const [isCompleted, setisCompleted] = useState(false);

  const addItems = () => {
    if (!value) {
      Alert.alert('No Item', 'You need to enter a task!');
    } else {
      setItemList([...ItemList, {value: value, isCompleted: false}]);
      console.log('Added Task- ', value);
      setValue('');
      setisCompleted(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add New Task!</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Enter Task"
          value={value}
          onChangeText={item => {
            setValue(item);
          }}
          style={styles.inputBox}
        />
        <TouchableOpacity style={styles.addItemButton}>
          <Text style={styles.buttonText} onPress={addItems}>
            Submit Task
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center"
  },  
  inputWrapper: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputBox: {
    width: 200,
    borderColor: "purple",
    borderRadius: 8,
    borderWidth: 2,
    paddingLeft: 8
  },
  heading: {
    padding : 10,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center'
    
  },
  addItemButton: {
    backgroundColor: '#eb8634',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {color: '#fff'},
});
export default AddItems;
