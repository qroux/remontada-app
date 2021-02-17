import React from 'react';
import { Text, View, FlatList } from 'react-native';

import { Position } from './Position';

export const PositionList = ({ positions }) => (
  <View>
    <Text>PositionList</Text>
    <FlatList
      data={positions}
      keyExtractor={(position) => position._id}
      renderItem={({ item }) => <Position position={item} />}
    />
  </View>
);
