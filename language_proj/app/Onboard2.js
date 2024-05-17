import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Onboarding2Screen = ({ navigation }) => {
    const handleNext = () => {
      
      navigation.navigate('Onboard3'); 
    };
  
    const handleSkip = () => {
      
      navigation.navigate('LanguageSelect'); 
    };

  return (
    <View style={styles.container}>
      
      <Image
        source={require('./src/images/onboard2.png')}
        style={styles.image}
      />
      
      <View style={styles.slider}>
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
      </View>
     
      <Text style={styles.heading}>Take your time to learn</Text>
    
      <Text style={styles.subText}>Develop a habit of learning and make it a part of your daily routine</Text>
      
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
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
      height: 257,
      marginTop: 75,
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
  export default Onboarding2Screen;  