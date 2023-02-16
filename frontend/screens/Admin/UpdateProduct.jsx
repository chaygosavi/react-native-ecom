import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {colors, defaultStyle, inputStyle} from '../../styles/styles';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import {Button, TextInput} from 'react-native-paper';
import SelectComponent from '../../components/SelectComponent';

const inputOptions = {
  style: inputStyle,
  mode: 'outlined',
  activeOutlineColor: colors.color1,
};

const UpdateProduct = ({navigation, route: {params: id}}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('Laptop');
  const [categoryID, setCategoryID] = useState('');
  const [categories, setCategories] = useState([
    {
      _id: 'asasd',
      category: 'Laptop',
    },
    {
      _id: 'asasdd',
      category: 'Footwear',
    },
    {
      _id: 'aasasd',
      category: 'Cloths',
    },
  ]);
  const [visible, setVisible] = useState(false);
  const loading = false;
  const loadingOther = false;

  const submitHandler = () => {
    console.log(name, description, price, stock, categoryID);
  };
  console.log(id);
  return (
    <>
      <View
        style={{
          ...defaultStyle,
          backgroundColor: colors.color5,
        }}>
        <Header back />
        <View
          style={{
            marginBottom: 20,
            paddingTop: 70,
          }}>
          <Text style={styles.heading}>Update Product</Text>
        </View>

        {loading ? (
          <Loader />
        ) : (
          <ScrollView
            style={{
              padding: 20,
              elevation: 10,
              borderRadius: 10,
              backgroundColor: colors.color3,
            }}>
            <View
              style={{
                justifyContent: 'center',
                height: 650,
              }}>
              <Button
                textColor={colors.color1}
                onPress={() =>
                  navigation.navigate('productimages', {
                    id,
                    images: [],
                  })
                }>
                Manage Images
              </Button>

              <TextInput
                {...inputOptions}
                placeholder="Name"
                value={name}
                onChangeText={setName}
              />
              <TextInput
                {...inputOptions}
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
              />
              <TextInput
                {...inputOptions}
                placeholder="Price"
                keyboardType="number-pad"
                value={price}
                onChangeText={setPrice}
              />
              <TextInput
                {...inputOptions}
                placeholder="Stock"
                keyboardType="number-pad"
                value={stock}
                onChangeText={setStock}
              />
              <Text
                onPress={() => setVisible(true)}
                style={{
                  ...inputStyle,
                  textAlign: 'center',
                  borderRadius: 3,
                  textAlignVertical: 'center',
                }}>
                {category}
              </Text>

              <Button
                onPress={submitHandler}
                textColor={colors.color2}
                style={{
                  backgroundColor: colors.color1,
                  margin: 20,
                  padding: 6,
                }}
                loading={loadingOther}
                disabled={loading}>
                Update
              </Button>
            </View>
          </ScrollView>
        )}
      </View>
      <SelectComponent
        visible={visible}
        setVisible={setVisible}
        setCategory={setCategory}
        setCategoryID={setCategoryID}
        categories={categories}
      />
    </>
  );
};

export default UpdateProduct;

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
    backgroundColor: colors.color3,
    color: colors.color2,
    padding: 5,
    borderRadius: 5,
  },
});
