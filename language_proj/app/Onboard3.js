import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Onboarding3Screen = ({ navigation }) => {
    const handleNext = () => {
      
      navigation.navigate('LanguageSelect'); 
    };
  
    const handleSkip = () => {
      
      navigation.navigate('LanguageSelect'); 
    };
  return (
    <View style={styles.container}>
      
      <Image
        source={require('./src/images/onboard3.png')}
        style={styles.image}
      />
      
      <View style={styles.slider}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} />
      </View>
     
      <Text style={styles.heading}>The lessons you need to learn</Text>
      
      <Text style={styles.subText}>Using a variety of learning styles to learn and retain</Text>
     
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Choose a language</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={handleSkip}>
        <Text style={styles.skipText}>Skip onboarding</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      flexDirection: 'column'
    },
    image: {
      width: 215,
      height: 235,
      marginTop: 85,
    },
    slider: {
      flexDirection: 'row',
      marginTop: 20, 
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#C4C4C4',
      marginHorizontal: 5,
    },
    activeDot: {
      backgroundColor: '#FFA500',
    },
    heading: {
      fontSize: 22,
      marginTop: 20,
      lineHeight: 28,
      fontFamily: 'Fredoka-M',
    },
    subText: {
        fontFamily: 'Fredoka',
      fontSize: 15,
      marginTop: 8,
      textAlign: 'center',
      marginBottom: 16, 
      textAlign: 'center',
      width: 263,
      color: '#080E1E99',
    },
    button: {
      backgroundColor: '#5B7BFE',
      width: 300,
      height: 56,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 16,
    },
    buttonText: {
    fontFamily: 'Fredoka-M',
    lineHeight: 24,
      color: 'white',
      fontSize: 18,
    },
    skipText: {
        fontFamily:'Fredoka-M',
        fontWeight: 400,
      fontSize: 15,
      marginTop: 16,
      textDecorationLine: 'none',
      lineHeight: 20,
    },
  });
  export default Onboarding3Screen;  