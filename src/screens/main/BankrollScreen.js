import React, { useContext, useEffect, useState, useRef } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  PlatformColor,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Overlay } from 'react-native-elements';
import { Common } from '../../assets/common';
import { Colors } from '../../assets/main';

import { Context as BankrollContext } from '../../context/BankrollContext';

import { PageSpinner } from '../../components/shared/PageSpinner';
import { BankrollList } from '../../components/mainComponents/bankrollScreen/BankrollList';
import { AnimatedOverlay } from '../../components/shared/AnimatedOverlay';
import { CreateOverlay } from '../../components/mainComponents/bankrollScreen/CreateOverlay';

export const BankrollScreen = () => {
  const {
    state: { bankrolls, isLoading },
    getUserBankrolls,
  } = useContext(BankrollContext);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getUserBankrolls();
  }, []);

  // ANIMATIONS
  const animOpacity = useRef(new Animated.Value(0)).current;
  const animY = useRef(new Animated.Value(-25)).current;

  const toggleOverlay = () => {
    if (visible) {
      Animated.parallel([
        Animated.timing(animY, {
          toValue: -25,
          useNativeDriver: true,
        }),
        Animated.timing(animOpacity, {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(animY, {
          toValue: 0,
          useNativeDriver: true,
          duration: 400,
        }),
        Animated.timing(animOpacity, {
          toValue: 1,
          useNativeDriver: true,
          duration: 400,
        }),
      ]).start();
    }
    setVisible(!visible);
  };

  return (
    <SafeAreaView style={Common.fullPage}>
      <View style={Common.container}>
        <View style={styles.header}>
          <Text style={[Common.title, styles.title]}>Bankrolls</Text>
          {isLoading ? (
            <View style={styles.spinner}>
              <ActivityIndicator
                size='small'
                color={PlatformColor(`@android:color/${Colors.spinner}`)}
              />
            </View>
          ) : (
            <TouchableOpacity style={styles.button} onPress={toggleOverlay}>
              <Ionicons name='add-outline' size={35} color={Colors.textDark} />
            </TouchableOpacity>
          )}
        </View>

        {bankrolls ? <BankrollList bankrolls={bankrolls} /> : <PageSpinner />}
      </View>
      {/* CREATEOVERLAY PART */}
      <AnimatedOverlay visible={visible} toggleOverlay={toggleOverlay}>
        <Animated.View
          style={[
            Common.overlay.content,
            { opacity: animOpacity, transform: [{ translateY: animY }] },
          ]}>
          <CreateOverlay toggleOverlay={toggleOverlay} />
        </Animated.View>
      </AnimatedOverlay>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    alignItems: 'center',
    position: 'relative',
  },
  title: {
    lineHeight: 35,
  },
  button: {
    position: 'absolute',
    top: 0,
    right: 10,
  },
  spinner: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
