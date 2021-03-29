import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { Overlay } from 'react-native-elements';
import { Common } from '../../assets/common';

export const AnimatedOverlay = ({ visible, toggleOverlay, children }) => {
  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={toggleOverlay}
      overlayStyle={Common.overlay.container}>
      {children}
    </Overlay>
  );
};
