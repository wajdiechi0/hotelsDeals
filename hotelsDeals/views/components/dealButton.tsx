/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {FunctionComponent} from 'react';
import {
  StyleSheet,
  Image,
  Alert,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const next = require('./../../assets/next.png');

interface Props {
  text: string;
  key?: string;
}

const DealButton: FunctionComponent<Props> = props => {
  const showAlert = (message: string) => {
    Alert.alert(message);
  };
  return (
    <View>
      <View style={styles.line} />
      <TouchableOpacity
        onPress={() => showAlert(props.text)}
        style={styles.dealButton}>
        <Text>{props.text}</Text>
        <Image source={next} style={styles.imageStyle} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    backgroundColor: '#d9d9d9',
    width: '100%',
    height: 1,
  },
  dealButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  imageStyle: {
    marginLeft: 'auto',
    width: 10,
    height: 10,
  },
});

export default DealButton;
