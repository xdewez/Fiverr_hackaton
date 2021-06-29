import 'react-native-gesture-handler';

import * as React from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SearchScreen from './screens/SearchScreen';
import MyteamScreen from './screens/MyteamScreen';
import SettingsScreen from './screens/Setting';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function SearchStack() {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerStyle: { backgroundColor: '#1dbf73' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Myteam"
        component={SearchScreen}
        options={{ title: 'Search Page' }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Settings Page' }}
      />
    </Stack.Navigator>
  );
}

function MyteamStack() {
  return (
    <Stack.Navigator
      initialRouteName="Myteam"
      screenOptions={{
        headerStyle: { backgroundColor: '#1dbf73' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Myteam"
        component={MyteamScreen}
        options={{ title: 'Myteam Page' }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Settings Page' }}
      />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: '#1dbf73' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Search"
        component={SettingsScreen}
        options={{ title: 'Search Page' }}
      />
      <Stack.Screen
        name="Myteam"
        component={MyteamScreen}
        options={{ title: 'Myteam Page' }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Search"
        tabBarOptions={{
          activeTintColor: '#1dbf73',
        }}>
        <Tab.Screen
          name="SearchStack"
          component={SearchStack}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search-sharp" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Myteam"
          component={MyteamStack}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="groups" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsStack}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
