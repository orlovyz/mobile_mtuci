import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScr = ({ navigation }) => {
  const handleGoBack = () => {
    
    navigation.navigate('Loading');
  };
  const handleLogin = () => {
    
    navigation.navigate('Onboard1');
  };
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <Image
            source={require('./src/images/left_arrow.png')} 
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Login</Text>
      </View>
    <View style={styles.imagecont}>
    <Image
        source={require('./src/images/learn_at_home.png')} 
        style={styles.image}
      />
      
      
      <Text style={styles.subtitle}>For free, join now and start learning</Text>
    </View>
      
     
      <View style={styles.LoginCont}>
      <Text style={styles.label}>Email Address</Text>
        <TextInput
            placeholder="Email"
            style={styles.input}
        />
        <Text style={styles.label}>Password</Text>
        
        <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input}
        />
      </View>
     
      
      
      
      <Text style={styles.forgotPassword}>Forgot Password</Text>
      
      <View style={styles.LoginCont}>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      </View>
      
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
    flexDirection: 'row',
    backgroundColor: '#410FA3',
    height: 80,
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'center',
    
  },
  arrowIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginRight: 16,
    right: 90,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily:'Fredoka-M',
    right: 20,
  },
  imagecont:{
    textAlign: 'center',
    justifyContent: 'center',
  },
  image: {
    textAlign: 'center',
    width: 105,
    height: 82,
    marginTop: 24,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  subtitle: {
    lineHeight:28,
    textAlign:'center',
    fontWeight: 500,
    fontFamily: 'Fredoka-M',
    fontSize: 18,
    marginTop: 12,
    justifyContent:'center',
    width: 263,
    left: 35,
  },
  LoginCont:{
    bottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  label: {
    top: 25,
    fontSize: 12,
    marginBottom: 3,
    fontFamily: 'Fredoka',
  },
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 8,
    height: 48,
    paddingHorizontal: 16,
    marginTop: 24,
    fontFamily: 'Fredoka',
  },
  forgotPassword: {
    marginTop: 12,
    color: '#666',
    textAlign: 'left',
    textDecorationLine: 'none',
    left:33,
    fontFamily: 'Fredoka',
    color: '#D6185D',
    bottom: 60,
  },
  loginButton: {
    backgroundColor: '#410FA3',
    borderRadius: 8,
    height: 48,
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    bottom: 70,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Fredoka-M',
  },
});

export default LoginScr;