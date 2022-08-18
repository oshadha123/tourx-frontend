import React, {useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Dropdown from './src/components/Dropdown';
import Dropdown from './DropDown';

const DropDownList = () => {
  const [selected, setSelected] = useState(undefined);
  const data = [
    { label: 'Tour Guide', value: '1' },
    { label: 'Tourist', value: '2' },
  ];

  return (
    <View style={styles.container}>
      {/* {!!selected && (
        <Text>
          Selected: label = {selected.label} and value = {selected.value}
        </Text>
      )} */}
      <Dropdown label="Select Your Role" data={data} onSelect={setSelected} />
      {/* <Text>This is the rest of the form.</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

export default DropDownList;