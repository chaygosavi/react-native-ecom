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
    price: 999,
    name: 'Sabon ki tikiya',
    _id: 'sdfnwwui43uu',
    images: [
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsG4fG2P2kKxsY1m5OpvZnIt4vS8xTHwLeiA2RccQclw&s',
      },
    ],
  },
];
const Home = () => {
  const [category, setCategory] = useState('');
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSeachQuery] = useState('');

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
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
