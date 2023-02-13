import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import Footer from '../components/Footer';
import {colors, defaultStyle, inputStyle} from '../styles/styles';

const Verify = ({navigation}) => {
  const [otp, setOTP] = useState('');
  const [password, setPassword] = useState('');

  const inputOptions = {
    style: inputStyle,
    mode: 'outlined',
    activeOutlineColor: colors.color1,
  };

  const loading = false;

  const submitHandler = () => {
    navigation.navigate('login');
  };
  return (
    <>
      <View style={defaultStyle}>
        <View
          style={{
            marginBottom: 20,
          }}>
          <Text style={styles.heading}>Reset Password</Text>
        </View>

        <View style={styles.container}>
          <TextInput
            {...inputOptions}
            placeholder="OTP"
            value={otp}
            keyboardType="numeric"
            onChangeText={setOTP}
          />
          <TextInput
            {...inputOptions}
            placeholder="New Password"
            value={password}
            secureTextEntry={true}
            onChangeText={setPassword}
          />

          <Button
            loading={loading}
            style={styles.btn}
            disabled={otp === '' || password === ''}
            textColor={colors.color2}
            onPress={submitHandler}>
            Reset
          </Button>
          <Text style={styles.or}>OR</Text>

          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('forgetpassword')}>
            <Text style={styles.link}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer activeRoute="profile" />
    </>
  );
};

export default Verify;

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
    flex: 1,
    padding: 20,
    backgroundColor: colors.color3,
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 10,
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
