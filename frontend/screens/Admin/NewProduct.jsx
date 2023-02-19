import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, defaultStyle, inputStyle} from '../../styles/styles';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import {Avatar, Button, TextInput} from 'react-native-paper';
import SelectComponent from '../../components/SelectComponent';

const inputOptions = {
  style: inputStyle,
  mode: 'outlined',
  activeOutlineColor: colors.color1,
};

const NewProduct = ({navigation, route: {params}}) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
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
  useEffect(() => {
    if (params?.image) {
      setImage(params?.image);
    }
  }, [params]);

  const loading = false;

  const submitHandler = () => {
    console.log(name, description, price, stock, categoryID);
  };
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
          <Text style={styles.heading}>New Product</Text>
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
              <View
                style={{
                  width: 80,
                  height: 80,
                  alignSelf: 'center',
                  marginBottom: 20,
                }}>
                <Avatar.Image
                  size={80}
                  style={{
                    backgroundColor: colors.color1,
                  }}
                  source={{
                    uri: image ? image : null,
                  }}
                />
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('camera', {newProduct: true})
                  }>
                  <Avatar.Icon
                    icon={'camera'}
                    size={30}
                    color={colors.color3}
                    style={{
                      backgroundColor: colors.color2,
                      position: 'absolute',
                      bottom: 0,
                      right: -5,
                    }}
                  />
                </TouchableOpacity>
              </View>

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
                disabled={loading}>
                Create
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

export default NewProduct;

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
