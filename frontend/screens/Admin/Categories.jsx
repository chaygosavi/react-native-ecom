import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Avatar, Button, TextInput} from 'react-native-paper';
import Header from '../../components/Header';
import {colors, defaultStyle, inputStyle} from '../../styles/styles';

const categories = [
  {
    name: 'Laptop',
    id: '23325325',
  },
  {
    name: 'Laptop',
    id: '233253d25',
  },
  {
    name: 'Laptop',
    id: '2332532a5',
  },
];

const inputOptions = {
  style: inputStyle,
  mode: 'outlined',
  activeOutlineColor: colors.color1,
};

const CategoryCard = ({id, name, deleteHandler}) => (
  <View style={styles.cardContainer}>
    <Text style={styles.cardText}>{name}</Text>
    <TouchableOpacity onPress={() => deleteHandler(id)}>
      <Avatar.Icon
        icon={'delete'}
        size={30}
        style={{
          backgroundColor: colors.color1,
        }}
      />
    </TouchableOpacity>
  </View>
);

const Categories = () => {
  const [category, setCategory] = useState(null);
  const deleteHandler = id => {};
  const submitHandler = () => {};

  const loading = false;
  return (
    <View style={{...defaultStyle, backgroundColor: colors.color5}}>
      <Header back />
      <View
        style={{
          marginBottom: 20,
          paddingTop: 70,
        }}>
        <Text style={styles.heading}>Categories</Text>
      </View>

      <ScrollView
        style={{
          marginBottom: 20,
        }}>
        <View
          style={{
            backgroundColor: colors.color2,
            padding: 20,
            minHeight: 400,
          }}>
          {categories.map(i => (
            <CategoryCard
              name={i.name}
              id={i._id}
              key={i._id}
              deleteHandler={deleteHandler}
            />
          ))}
        </View>
      </ScrollView>

      <View style={styles.container}>
        <TextInput
          {...inputOptions}
          placeholder="Category"
          value={category}
          onChangeText={setCategory}
        />
        <Button
          textColor={colors.color2}
          disabled={!category}
          loading={loading}
          style={{
            backgroundColor: colors.color1,
            margin: 20,
            padding: 6,
          }}
          onPress={submitHandler}>
          Add
        </Button>
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: colors.color3,
  },
  heading: {
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
    backgroundColor: colors.color3,
    color: colors.color2,
    padding: 5,
    borderRadius: 5,
  },
  cardContainer: {
    backgroundColor: colors.color2,
    elevation: 5,
    margin: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
  },
  cardText: {
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
