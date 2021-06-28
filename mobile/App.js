import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './components/WelcomeScreen';
import ProfilScreen from './components/ProfileSreen';

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Navigator>
        <Screen name="Welcome" component={WelcomeScreen} />
        <Screen name="Profil" component={ProfilScreen} />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
