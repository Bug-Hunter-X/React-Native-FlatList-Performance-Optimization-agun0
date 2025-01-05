// FlatListSolution.js
import React, { useState, useCallback, useMemo } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const DATA = Array.from({ length: 1000 }, (_, i) => ({ id: i, img: `https://picsum.photos/200/300?random=${i}` }));

const OptimizedFlatList = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = useCallback(({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.img }} style={styles.image} resizeMode='cover' />
        <Text style={styles.title}>Item {item.id}</Text>
      </View>
    );
  }, []);

  const memoizeItemKey = useMemo(() => (item) => item.id, []);

  return (
    <FlatList
      data={DATA}
      keyExtractor={memoizeItemKey}
      renderItem={renderItem}
      extraData={selectedId}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 200,
    height: 300,
  },
  title: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default OptimizedFlatList;