import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryScreen from './components/CategoryScreen';
import ProfilScreen from './components/ProfilScreen';
import GetStartedScreen from './components/GetStartedScreen';

const { Navigator, Screen } = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Navigator>
        <Screen name="GetStarted" component={GetStartedScreen} options={{ headerShown: false }} />
        <Screen name="Category" component={CategoryScreen} options={{ headerShown: false }} />
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
