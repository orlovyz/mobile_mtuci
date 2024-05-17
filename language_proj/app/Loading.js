import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoadingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigation]);


  return (
    <View style={styles.container}>
      <View style={styles.background}>
        
        <Image
          source={require('./src/images/loading.png')} 
          style={styles.image}
        />
      </View>
      
      <Text style={styles.text}>Language App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#410FA3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    top: 175,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  text: {
    fontFamily: 'Fredoka-M',
    fontSize: 36,
    color: '#FFF',
    width: '100%',
    top: 40,
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default LoadingScreen;
