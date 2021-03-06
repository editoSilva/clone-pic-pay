import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import PayButton from './components/PayButton';

import Home from './screens/Home';
import Wallet from './screens/Wallet';
import Pay from './screens/Pay';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'home',
  },
  Wallet: {
    name: 'credit-card',
  },
  Notifications: {
    name: 'bell',
  },
  Settings: {
    name: 'cog',
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="Wallet"
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({color, size, focused}) => {
          if (route.name === 'Pay') {
            return (
              <PayButton
                onPress={() => navigation.navigate('Pay')}
                focused={focused}
              />
            );
          }
          const {name} = icons[route.name];
          return <FontAwesome5 name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#131418',
          borderTopColor: 'rgba(255, 255, 255, 0.2)',
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#92929c',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Início',
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          title: 'Carteira',
        }}
      />
      <Tab.Screen
        name="Pay"
        component={Pay}
        options={{
          title: '',
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Wallet}
        options={{
          title: 'Notificações',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Pay}
        options={{
          title: 'Ajustes',
        }}
      />
    </Tab.Navigator>
  );
}
