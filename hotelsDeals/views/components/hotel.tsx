/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {FunctionComponent} from 'react';
import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';

interface Props {
  hotelDetails: {
    id: string;
    name: string;
    photo: string;
    from: {value: number};
  };
}

const Hotel: FunctionComponent<Props> = props => {
  return (
    <TouchableOpacity style={styles.HotelContainer}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: props.hotelDetails.photo,
        }}
      />
      <View style={styles.infosContainer}>
        <Text style={styles.name}>{props.hotelDetails.name}</Text>
        <Text style={styles.description}>
          Vanaf {props.hotelDetails.from.value} Eur per person
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  HotelContainer: {
    borderRadius: 5,
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginVertical: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowRadius: 3,
    shadowOpacity: 0.3,
  },
  imageStyle: {
    height: '100%',
    aspectRatio: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  infosContainer: {
    justifyContent: 'space-evenly',
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    fontWeight: '300',
    fontSize: 14,
  },
});

export default Hotel;
