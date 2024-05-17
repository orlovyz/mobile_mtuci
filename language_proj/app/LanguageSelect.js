import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LanguageSelectScreen = ({ navigation }) => {
    const handleChoose = () => {
      navigation.navigate('Senior');
    };

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.headerText}>Language select</Text>
      </View>
      
     
      <Text style={styles.subHeading}>What's your Mother language?</Text>
      
      
      <View style={styles.languageButtonsContainer}>
      <TouchableOpacity style ={styles.languageButton}>
        <Text style= {styles.languageButtonText}>Russian</Text>
      </TouchableOpacity>
      <TouchableOpacity style ={styles.languageButton}>
        <Text style= {styles.languageButtonText}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity style ={styles.languageButton}>
      <Text style= {styles.languageButtonText}>Chinese</Text>
      </TouchableOpacity>
      <TouchableOpacity style ={styles.languageButton}>
      <Text style= {styles.languageButtonText}>Belarus</Text>
      </TouchableOpacity>
      <TouchableOpacity style ={styles.languageButton}>
      <Text style= {styles.languageButtonText}>Kazakh</Text>
      </TouchableOpacity>
      </View>
      
     
      <TouchableOpacity style={styles.chooseButton} onPress={handleChoose}>
        <Text style={styles.chooseButtonText}>Choose</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: '#410FA3',
    height: 80,
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 17,
    textAlign:'center',
    fontFamily: 'Fredoka-M',
    fontWeight: 500,
    paddingTop: 50,
  },
  subHeading: {
    lineHeight:28,
    textAlign:'center',
    fontWeight: 500,
    fontFamily: 'Fredoka-M',
    fontSize: 18,
    marginTop: 12,
  },
  languageButtonsContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 270,
  },
  languageButton: {
    width: '80%',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: '#FFF6EB',
    
  },
  languageButtonText: {
    fontFamily: 'Fredoka-M',
    fontWeight:500,
    fontSize: 18,
    lineHeight: 28,
  },
  chooseButton: {
    position: 'relative', 
  bottom: 200, 
  backgroundColor: '#5B7BFE',
  width: '80%',
  height: 56,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 8,
  alignSelf: 'center',
  },
  chooseButtonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Fredoka-M',
    lineHeight: 24,
  },
});

export default LanguageSelectScreen;