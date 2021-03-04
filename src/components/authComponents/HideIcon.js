import React from 'react';
import { Feather } from '@expo/vector-icons';

export const HideIcon = ({ setHide }) => (
  <Feather
    name='eye-off'
    size={20}
    color='black'
    onPress={() => setHide(false)}
  />
);
