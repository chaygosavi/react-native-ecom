import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Avatar, Button, TextInput} from 'react-native-paper';
import Footer from '../components/Footer';
import {colors, defaultStyle, inputStyle} from '../styles/styles';

const SignUp = ({navigation, route}) => {
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [pinCode, setPinCode] = useState('');

  useEffect(() => {
    if (route.params?.image) {
      setAvatar(route.params.image);
    }
  }, [route.params]);

  const inputOptions = {
    style: inputStyle,
    mode: 'outlined',
    activeOutlineColor: colors.color1,
  };

  const loading = false;

  const disableBtn =
    !name || !email || !password || !address || !city || !country || !pinCode;

  const submitHandler = () => {
    navigation.navigate('verify');
  };
  return (
    <>
      <View style={defaultStyle}>
        <View
          style={{
            marginBottom: 20,
          }}>
          <Text style={styles.heading}>Sign Up</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            padding: 20,
            elevation: 10,
            borderRadius: 10,
            backgroundColor: colors.color3,
          }}>
          <View style={styles.container}>
            <Avatar.Image
              style={{alignSelf: 'center', backgroundColor: colors.color1}}
              size={90}
              source={{
                uri: avatar
                  ? avatar
                  : 'https://p.kindpng.com/picc/s/451-4517876_default-profile-hd-png-download.png',
              }}
            />

            <TouchableOpacity onPress={() => navigation.navigate('camera')}>
              <Button textColor={colors.color1}>Change Photo</Button>
            </TouchableOpacity>

            <TextInput
              {...inputOptions}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />

            <TextInput
              {...inputOptions}
              placeholder="Email"
              value={email}
              keyboardType="email-address"
              onChangeText={setEmail}
            />

            <TextInput
              {...inputOptions}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <TextInput
              {...inputOptions}
              placeholder="Address"
              value={address}
              onChangeText={setAddress}
            />

            <TextInput
              {...inputOptions}
              placeholder="City"
              value={city}
              onChangeText={setCity}
            />

            <TextInput
              {...inputOptions}
              placeholder="Country"
              value={country}
              onChangeText={setCountry}
            />
            <TextInput
              {...inputOptions}
              placeholder="Pin Code"
              value={pinCode}
              onChangeText={setPinCode}
            />
            <Button
              loading={loading}
              style={styles.btn}
              disabled={disableBtn}
              textColor={colors.color2}
              onPress={submitHandler}>
              Sign Up
            </Button>
            <Text style={styles.or}>OR</Text>

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate('login')}>
              <Text style={styles.link}>Log In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <Footer activeRoute="profile" />
    </>
  );
};

export default SignUp;

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
  container: {
    minHeight: 900,
  },
  forget: {
    color: colors.color2,
    marginVertical: 20,
    marginHorizontal: 10,
    alignSelf: 'flex-end',
    fontWeight: '400',
  },
  btn: {
    backgroundColor: colors.color1,
    margin: 20,
    padding: 6,
  },
  or: {
    alignSelf: 'center',
    fontSize: 13,
    fontWeight: '400',
    color: colors.color2,
  },
  link: {
    color: colors.color2,
    alignSelf: 'center',
    fontSize: 18,
    textTransform: 'uppercase',
    marginVertical: 10,
    marginHorizontal: 20,
  },
});
