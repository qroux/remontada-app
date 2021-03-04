import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Size, Colors } from '../../../assets/main';

export const BankrollCard = ({ title, icon, value, unit, evolution }) => {
  const renderProgress = () => {
    const sign = evolution >= 0 ? '+' : '-';

    return evolution ? `(${sign}${evolution}%)` : null;
  };
  return (
    <View style={[styles.container]}>
      <View style={styles.title}>
        {icon}
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text
        style={[
          styles.content,
          { color: value >= 0 ? Colors.success : Colors.fail },
        ]}>
        {value}
        {unit ? unit : null}
        {renderProgress()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.33,
  },
  title: {
    fontWeight: 'normal',
    fontSize: 10,
    color: Colors.textDark,
    alignItems: 'center',
  },
  content: {
    fontSize: Size.small,
  },
});
