import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {colors, defaultStyle} from '../styles/styles';
import Header from '../components/Header';
import {Avatar, Button} from 'react-native-paper';
import SearchModal from '../components/SearchModal';
import ProductCard from '../components/ProductCard';
import {useNavigation} from '@react-navigation/native';
import Footer from '../components/Footer';

const categories = [
  {category: 'Nice1', _id: 'sdfsdfadadrgwdawdwdsdf'},
  {category: 'Nice2', _id: 'sdfsdfawdasdf'},
  {category: 'Nice3', _id: 'sdfsdadfsdf'},
  {category: 'Nice4', _id: 'sdfsdadafwadwddsdf'},
  {category: 'Nice5', _id: 'sdfsdadafwadwadsdf'},
  {category: 'Nice6', _id: 'sdfsdadaffwadwdsdf'},
  {category: 'Nice7', _id: 'sdfsdadafawadwdsdf'},
  {category: 'Nice8', _id: 'sdfsdadafwgadwdsdf'},
  {category: 'Nice9', _id: 'sdfsdadafwvadwdsdf'},
];

const products = [
  {
    _id: 9,
    price: 999,
    stock: 99,
    name: 'Sabon',
    _id: 'sdfnwwui43uu',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      },
    ],
  },
  {
    _id: 9,
    price: 999,
    stock: 99,
    name: 'SaEUUbon',
    _id: 'sdfnwdwdwui43uu',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      },
    ],
  },
];

const addToCardHandler = id => {
  console.log('Add to cart', id);
};

const Home = () => {
  const [category, setCategory] = useState('');
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSeachQuery] = useState('');

  const navigate = useNavigation();

  const categoryButtonHandler = id => {
    setCategory(id);
  };

  return (
    <>
      {activeSearch ? (
        <SearchModal
          searchQuery={searchQuery}
          setSeachQuery={setSeachQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      ) : (
        <></>
      )}
      <View style={defaultStyle}>
        <Header />
        <View
          style={{
            paddingTop: 70,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{fontSize: 25}}>Our</Text>
            <Text style={{fontSize: 25, fontWeight: '900'}}>Products</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => setActiveSearch(prev => !prev)}>
              <Avatar.Icon
                icon={'magnify'}
                color="gray"
                size={50}
                style={{
                  backgroundColor: colors.color2,
                  elevation: 12,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            height: 80,
          }}>
          <ScrollView
            contentContainerStyle={{
              alignItems: 'center',
            }}
            horizontal
            showsHorizontalScrollIndicator={false}>
            {categories.map(item => (
              <Button
                onPress={() => categoryButtonHandler(item._id)}
                key={item._id}
                style={{
                  backgroundColor:
                    category === item._id ? colors.color1 : colors.color5,
                  borderRadius: 100,
                  margin: 5,
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    color: category === item._id ? colors.color2 : 'gray',
                  }}>
                  {item.category}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>

        <View style={{flex: 1}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((item, idx) => (
              <ProductCard
                stock={item.stock}
                name={item.name}
                price={item.price}
                image={item.images[0]?.url}
                addToCardHandler={addToCardHandler}
                id={item._id}
                key={item._id}
                i={idx}
                navigate={navigate}
              />
            ))}
          </ScrollView>
        </View>
      </View>
      <Footer activeRoute="home" />
    </>
  );
};

export default Home;
