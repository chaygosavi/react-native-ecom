import {
  BackHandler,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../styles/styles';
import {Headline, Searchbar} from 'react-native-paper';

const SearchModal = ({
  searchQuery,
  setSeachQuery,
  setActiveSearch,
  products = [],
}) => {
  const navigate = useNavigation();

  const backAction = () => {
    setSeachQuery('');
    setActiveSearch(false);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  });

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        zIndex: 99,
        padding: 30,
        backgroundColor: colors.color2,
      }}>
      <SafeAreaView>
        <Searchbar
          placeholder="Search..."
          onChangeText={query => setSeachQuery(query)}
          value={searchQuery}
        />

        <ScrollView>
          <View
            style={{
              paddingVertical: 40,
              paddingHorizontal: 10,
            }}>
            {console.log(products)}
            {products.map(i => (
              <SearchItem
                key={i._id}
                imgSrc={i.images[0]?.url}
                name={i.name}
                price={i.price}
                handler={() => navigate.navigate('productdetails', {id: _id})}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const SearchItem = ({price, name, imgSrc, handler}) => {
  return (
    <TouchableOpacity onPress={handler}>
      <View
        style={{
          padding: 20,
          borderRadius: 10,
          backgroundColor: colors.color2,
          elevation: 5,
          width: '100%',
          alignItems: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          marginVertical: 30,
        }}>
        <Image
          source={{uri: imgSrc}}
          style={{
            width: 70,
            height: 70,
            position: 'absolute',
            resizeMode: 'contain',
            left: 10,
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        />

        <View style={{width: '80%', paddingHorizontal: 40}}>
          <Text numberOfLines={1}>{name}</Text>
          <Headline style={{fontWeight: '900'}} numberOfLines={1}>
            {price}
          </Headline>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SearchModal;

const styles = StyleSheet.create({});
