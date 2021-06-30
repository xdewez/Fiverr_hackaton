import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './components/WelcomeScreen';
import CategoryScreen from './components/CategoryScreen';
import DetailsScreen from './components/DetailsScreen';
import GetStartedScreen from './components/GetStartedScreen';
import Settings from './components/Settings';
import ProfileList from './components/Profile/ProfileList';

const { Navigator, Screen } = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Navigator>
        {/*<Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Screen name="GetStarted" component={GetStartedScreen} options={{ headerShown: false }} />
        <Screen name="Profil" component={CategoryScreen} options={{ headerShown: false }} />
        <Screen name="Details" component={DetailsScreen} />
        <Screen name="Settings" component={Settings} options={{ headerShown: false }} />*/}
        <Screen name="ProfileList" component={ProfileList} options={{ headerShown: false }} />
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
