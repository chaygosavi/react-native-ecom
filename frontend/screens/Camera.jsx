import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Linking, StyleSheet, TouchableOpacity, View} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {Avatar} from 'react-native-paper';
import {
  Camera as VisionCamera,
  useCameraDevices,
} from 'react-native-vision-camera';
import Loader from '../components/Loader';
import {colors} from '../styles/styles';

const Camera = ({navigation: {navigate}, route: {params}}) => {
  const devices = useCameraDevices();
  const [camView, setCamView] = useState('front');
  const device = camView === 'front' ? devices.back : devices.front;
  console.log('device', device);
  const cameraRef = useRef(VisionCamera);

  const cameraPermission = useCallback(async () => {
    const permission = await VisionCamera.requestCameraPermission();

    if (permission === 'denied') {
      await Linking.openSettings();
    }
  }, [devices]);

  useEffect(() => {
    cameraPermission();
  }, [cameraPermission, devices]);

  if (device == null) return <Loader />;

  const openImagePicker = async () => {
    const result = await ImagePicker.launchImageLibrary({quality: 1});
    // console.log('result', result.assets[0].uri);

    if (params?.newProduct)
      return navigate('newproduct', {
        image: result.assets[0].uri,
      });
    if (params?.updateProduct)
      return navigate('productimages', {
        image: result.assets[0].uri,
      });
    if (params?.updateProfile)
      return navigate('profile', {
        image: result.assets[0].uri,
      });
    else
      return navigate('signup', {
        image: result.assets[0].uri,
      });
  };
  const takePhoto = async () => {
    // console.log(cameraRef.current);
    // console.log(123);
    const result = await cameraRef.current.takePhoto();
    // console.log('result', 'file://' + result.path);

    if (params?.newProduct)
      return navigate('newproduct', {
        image: 'file://' + result.path,
      });
    if (params?.updateProduct)
      return navigate('productimages', {
        image: 'file://' + result.path,
      });
    if (params?.updateProfile)
      return navigate('profile', {
        image: 'file://' + result.path,
      });
    else
      return navigate('signup', {
        image: 'file://' + result.path,
      });
  };

  const MyIcon = ({icon, handler}) => (
    <TouchableOpacity onPress={handler}>
      <Avatar.Icon
        icon={icon}
        size={40}
        color={colors.color2}
        style={{
          backgroundColor: colors.color1,
        }}
      />
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        flex: 1,
      }}>
      <VisionCamera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
        ref={cameraRef}
      />

      <View
        style={{
          flexDirection: 'row',
          bottom: 10,
          width: '100%',
          justifyContent: 'space-evenly',
          position: 'absolute',
        }}>
        <MyIcon icon="image" handler={openImagePicker} />
        <MyIcon icon="camera" handler={takePhoto} />
        <MyIcon
          icon="camera-flip"
          handler={() => {
            camView === 'front' ? setCamView('back') : setCamView('front');
          }}
        />
      </View>
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({});
