import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, defaultStyle} from '../styles/styles';
import {Avatar, Button} from 'react-native-paper';
import ButtonBox from '../components/ButtonBox';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const user = {
  name: 'SHRI RAM',
  email: 'shri@ram.co',
};

const loading = false;

const Profile = ({navigation, route}) => {
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (route.params?.image) {
      setAvatar(route.params.image);
    }
  }, [route.params]);

  const logoutHandler = () => {};

  const navigationHandler = text => {
    console.log('textttt', text);
    switch (text) {
      case 'Admin':
        navigation.navigate('adminpanel');
        break;
      case 'Orders':
        navigation.navigate('orders');
        break;
      case 'Profile':
        navigation.navigate('updateprofile');
        break;
      case 'Password':
        navigation.navigate('changepassword');
        break;
      case 'Sign Out':
        logoutHandler();
        break;

      default:
      case 'Orders':
        navigation.navigate('orders');
        break;
    }
  };
  return (
    <>
      <View style={defaultStyle}>
        <View
          style={{
            marginBottom: 20,
          }}>
          <Text style={styles.heading}>Profile</Text>
        </View>

        {/* Loading */}

        {loading ? (
          <Loader />
        ) : (
          <>
            <View style={styles.container}>
              <Avatar.Image
                size={100}
                style={{backgroundColor: colors.color1}}
                source={{uri: avatar}}
              />

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('camera', {updateProfile: true})
                }>
                <Button textColor={colors.color1}>Change Photo</Button>
              </TouchableOpacity>

              <Text style={styles.name}>{user?.name}</Text>
              <Text
                style={{
                  fontWeight: '300',
                  color: colors.color2,
                }}>
                {user?.email}
              </Text>
            </View>

            <View>
              <View
                style={{
                  flexDirection: 'row',
                  margin: 10,
                  justifyContent: 'space-between',
                }}>
                <ButtonBox
                  text={'Orders'}
                  icon="format-list-bulleted-square"
                  handler={navigationHandler}
                />
                <ButtonBox
                  reverse
                  icon={'view-dashboard'}
                  text="Admin"
                  handler={navigationHandler}
                />
                <ButtonBox
                  text={'Profile'}
                  icon="pencil"
                  handler={navigationHandler}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  margin: 10,
                  justifyContent: 'space-evenly',
                }}>
                <ButtonBox
                  text={'Password'}
                  icon="pencil"
                  handler={navigationHandler}
                />
                <ButtonBox
                  icon={'exit-to-app'}
                  text="Sign Out"
                  handler={navigationHandler}
                />
              </View>
            </View>
          </>
        )}
      </View>
      <Footer activeRoute="profile" />
    </>
  );
};

export default Profile;

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
    elevation: 7,
    backgroundColor: colors.color3,
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    color: colors.color2,
  },
});
