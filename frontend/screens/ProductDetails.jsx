import React, {useRef} from 'react';
import {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Avatar, Button} from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import Header from '../components/Header';
import {colors, defaultStyle} from '../styles/styles';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH;

const ProductDetails = ({route: {params}}) => {
  const [quantity, setQuantity] = useState(1);
  console.log(params.id);

  const isCarousel = useRef(null);

  const name = 'Macbook pro';
  const price = 999999999;
  const description =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus architecto rerum, atque distinctio facere suscipit ullam hic tenetur quis quisquam maxime cupiditate consequatur magnam dolore, voluptas nobis.';

  const CarouselCardItem = ({item, index}) => (
    <View style={styles.container} key={index}>
      <Image source={{uri: item.url}} style={styles.image} />
    </View>
  );
  const images = [
    {
      id: '9999999999',
      url: 'https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: '95999999999',
      url: 'https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
  ];

  const incrementQty = () => {
    // stock
    setQuantity(prev => prev + 1);
  };
  const decrementQty = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  const stock = 9;

  const addToCartHandler = () => {
    if (stock === 0)
      return Toast.show({
        type: 'error',
        text1: 'Out of Stock',
      });
    Toast.show({
      type: 'success',
      text1: 'Added to Cart',
    });
  };

  return (
    <View style={{...defaultStyle, padding: 0, backgroundColor: colors.color1}}>
      <Header back />
      <Carousel
        layout="stack"
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        data={images}
        renderItem={CarouselCardItem}
      />

      <View
        style={{
          backgroundColor: colors.color2,
          padding: 35,
          flex: 1,
          marginTop: -380,
          borderTopLeftRadius: 55,
          borderTopRightRadius: 55,
        }}>
        <Text style={{fontSize: 25}} numberOfLines={2}>
          {name}
        </Text>
        <Text style={{fontSize: 18, fontWeight: '900'}}>₹{price}</Text>
        <Text
          style={{letterSpacing: 1, lineHeight: 20, marginVertical: 15}}
          numberOfLines={9}>
          {description}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 5,
          }}>
          <Text style={{color: colors.color3, fontWeight: '100'}}>
            Quantity
          </Text>

          <View
            style={{
              flexDirection: 'row',
              width: 80,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={decrementQty}>
              <Avatar.Icon
                icon={'minus'}
                size={20}
                style={{
                  backgroundColor: colors.color5,
                  height: 25,
                  borderRadius: 5,
                  width: 25,
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                backgroundColor: colors.color4,
                height: 25,
                width: 25,
                textAlignVertical: 'center',
                textAlign: 'center',
                borderWidth: 1,
                borderRadius: 5,
                borderColor: colors.color5,
              }}>
              {quantity}
            </Text>
            <TouchableOpacity onPress={incrementQty}>
              <Avatar.Icon
                icon={'plus'}
                size={20}
                style={{
                  backgroundColor: colors.color5,
                  height: 25,
                  borderRadius: 5,
                  width: 25,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.9} onPress={addToCartHandler}>
          <Button icon={'cart'} style={styles.btn} textColor={colors.color2}>
            Add To Cart
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color1,
    width: ITEM_WIDTH,
    paddingVertical: 40,
    height: 380,
  },
  image: {
    width: ITEM_WIDTH,
    resizeMode: 'contain',
    height: 250,
  },
  btn: {
    backgroundColor: colors.color3,
    borderRadius: 100,
    padding: 5,
    marginVertical: 35,
  },
});

export default ProductDetails;
