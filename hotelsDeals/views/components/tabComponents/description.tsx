/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {FunctionComponent} from 'react';
import {StyleSheet, Image, View, Text, ScrollView} from 'react-native';
const checkmark = require('./../../../assets/checkmark.png');
import {ifIphoneX} from 'react-native-iphone-x-helper';
interface Props {
  deal: {contents: Array<string>; description: string; terms: string};
}

const Description: FunctionComponent<Props> = props => {
  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.title}>Dit arragement bevat</Text>
      {props.deal.contents.map((item: string) => (
        <View style={{flexDirection: 'row'}} key={item}>
          <Image source={checkmark} style={styles.checkmarkStyle} />
          <Text>{item}</Text>
        </View>
      ))}
      <Text style={styles.title}>Over dit arragement </Text>
      <Text>{props.deal.description} </Text>
      <Text style={styles.termsText}>{props.deal.terms} </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 20,
    ...ifIphoneX(
      {
        marginBottom: 20,
      },
      {
        marginBottom: 50,
      },
    ),
  },
  checkmarkStyle: {
    height: 10,
    width: 10,
    marginRight: 20,
    marginTop: 3,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 10,
  },
  termsText: {opacity: 0.5, marginVertical: 20},
});

export default Description;
