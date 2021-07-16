import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login({navigation}) {
  const pressBtn = () => {
    Alert.alert('Button Pressed');
  };
  const goToHome = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={pressBtn}>
          <Icon name="chevron-left" size={20} color="#DDD" />
        </TouchableOpacity>
        <Text style={styles.title}>Sign up</Text>
      </View>
      <Text style={styles.paragraph}>
        Sign up with one of the following options
      </Text>
      <View style={styles.loginOptionsPanel}>
        <TouchableOpacity style={styles.loginOption} onPress={pressBtn}>
          {/* <Text style={styles.paragraph}>Google</Text> */}
          <Icon name="google" size={20} color="#DDD" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginOption} onPress={pressBtn}>
          {/* <Text style={styles.paragraph}>Apple</Text> */}
          <Icon name="apple" size={20} color="#DDD" />
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <View>
          <Text style={styles.formControlTitle}>Name</Text>
          <TextInput
            style={styles.formControl}
            placeholderTextColor="#606060"
            placeholder="John Doe"></TextInput>
        </View>
        <View>
          <Text style={styles.formControlTitle}>Email</Text>
          <TextInput
            style={styles.formControl}
            keyboardType="email-address"
            placeholderTextColor="#606060"
            placeholder="tim@apple.com"></TextInput>
        </View>
        <View>
          <Text style={styles.formControlTitle}>Password</Text>
          <TextInput
            style={styles.formControl}
            placeholderTextColor="#606060"
            placeholder="Pick a strong password"
            secureTextEntry={true}></TextInput>
        </View>
        <View style={styles.formSubmit}>
          <TouchableOpacity onPress={goToHome}>
            <Text style={{fontSize: 18, textAlign: 'center', color: '#EEE'}}>
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={styles.paragraph}>Already have an account?</Text>
          <TouchableOpacity style={styles.formHaveAccBtn} onPress={pressBtn}>
            <Text style={{color: '#DDD', marginLeft: 8}}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
