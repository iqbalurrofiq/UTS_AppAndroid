import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './screens/Home';
import About from './screens/About';
import Account from './screens/Account';
import {Text} from 'react-native';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tab"
          component={MenuTab}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const CustomHeader = () => ( 
  <Text style={{fontSize: 24, fontWeight: 'bold', color: '#255'}}>Top Up</Text>
);

const MenuTab = () => {
  return (
    <Tabs.Navigator screenOptions={{tabBarActiveTintColor: '#255'}}>
      <Tabs.Screen
        name="Top Up"
        component={Home}
        options={{
          headerTitle: () => <CustomHeader />,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="information-variant" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default App;
