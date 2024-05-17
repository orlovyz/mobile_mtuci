import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';

const Listening = ({ navigation }) => {
  const goBackToSeniorScreen = () => {
    navigation.navigate('Senior');
  };

  const handleCheckSpeech = () => {
    navigation.navigate('Senior');
  };

  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
        <TouchableOpacity onPress={goBackToSeniorScreen}>
        <Text style={styles.headerText}>
        ←
        </Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Listening</Text>
        
      </View>
     
      <View style={styles.content}>
        <Text style={styles.textcuc}>cucumber</Text>
        <Text style={styles.textkuk}>['kju:kʌmbə]</Text>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.pls}>Please press button and say this word. Our service will check your pronunciation.</Text>
        <TouchableOpacity style={styles.bbbutton} onPress={handleCheckSpeech}>
        <Text style={styles.bbbuttonText}>Check my speach</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 80,
    backgroundColor: '#410FA3',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  arrowIcon3: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginRight: 16,
    right: 90,
  },
  headerText: {
    fontFamily: 'Fredoka-M',
    fontSize: 24,
    color: 'white',
    marginRight: 10,
  },
  textcuc :{
    bottom: 150,
    fontFamily:'Fredoka-M',
    fontWeight: 500,
    fontSize: 22,

  },
  textkuk :{
    bottom: 150,
    fontFamily:'Fredoka-M',
    fontWeight: 500,
    fontSize: 22,
  },
  pls: {
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: 'Fredoka-M',
    fontWeight: 500,
    bottom: 300,
    alignItems: 'center',
    alignContent: 'center',
  },
  backButton: {
    color: 'white',
    fontSize: 20,
  },
  bbbutton: {
    backgroundColor: '#410FA3',
    borderRadius: 8,
    height: 48,
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    bottom: 170,
    alignSelf: 'center',
  },
  bbbuttonText:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Fredoka-M',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
});

export default Listening;
