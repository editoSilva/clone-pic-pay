import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Button, Label} from './styles';
import {TouchableNativeFeedback} from 'react-native';

export default function PayButton({onPress, focused}) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <Button colors={focused ? ['#fff', '#ccc'] : ['#00ffc6', '#00ac4a']}>
        <FontAwesome5
          name={'dollar-sign'}
          size={30}
          color={focused ? '#000' : '#fff'}
        />
        <Label focused={focused}>Pagar</Label>
      </Button>
    </TouchableNativeFeedback>
  );
}
