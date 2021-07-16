import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home() {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      source: require('../../assets/images/1.png'),
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      source: require('../../assets/images/2.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      source: require('../../assets/images/3.png'),
    },
  ];

  const Item = ({source}) => (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={source} />
    </View>
  );

  const renderItem = ({item}) => <Item source={item.source} />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <Icon name="chevron-left" size={20} color="#DDD" />
        </TouchableOpacity>
        <Text style={styles.title}>Gallery</Text>
      </View>
      <FlatList data={DATA} renderItem={renderItem} />
    </View>
  );
}
