/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Alert,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
const {SliderBox} = require('react-native-image-slider-box');
const backArrow = require('./../../assets/left-arrow.png');
const rightArrow = require('./../../assets/right-arrow.png');
import {ifIphoneX} from 'react-native-iphone-x-helper';
const ScrollableTabView = require('react-native-scrollable-tab-view');
import Page from './../components/tabPage';

interface State {}
interface Props {
  navigation: NavigationStackProp<{userId: string}>;
}
class Details extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const deal = this.props.navigation.getParam('deal');
    return (
      <SafeAreaView style={{flex: 1}}>
        <TouchableOpacity
          style={styles.arrowContainer}
          onPress={() => this.props.navigation.navigate('Deals')}>
          <Image source={backArrow} style={styles.arrow} />
        </TouchableOpacity>
        <SliderBox images={deal.images} dotColor={'white'} />
        <View style={styles.infosCont}>
          <Text style={styles.titleText}>{deal.title}</Text>
          <Text style={styles.subtitleText}>{deal.subtitle}</Text>
          <View style={styles.valueCont}>
            <Text style={styles.priceText}>p.p vanaf </Text>
            <Text style={styles.priceText}>{deal.from.value}</Text>
            <Text style={styles.priceText}> per person </Text>
          </View>
        </View>
        <View style={styles.scrollableTab}>
          <ScrollableTabView
            tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
            tabBarActiveTextColor={'#000'}>
            <Page tabLabel="Beschrijving" tabN={0} deal={deal} />
            <Page
              tabLabel={'Beschikbare hotels (' + deal.hotels.length + ')'}
              tabN={1}
              deal={deal}
            />
          </ScrollableTabView>
        </View>
        <TouchableOpacity
          style={styles.bookNowCont}
          onPress={() => Alert.alert(deal.title)}>
          <Text style={styles.bookNowText}> Nu Boeken</Text>
          <Image source={rightArrow} style={styles.rightArrow} />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  arrow: {
    height: 20,
    width: 15,
  },
  arrowContainer: {
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.8,
    elevation: 5,
    position: 'absolute',
    ...ifIphoneX(
      {
        top: 70,
      },
      {
        top: 30,
      },
    ),
    left: 20,
    zIndex: 99,
  },
  priceText: {
    fontWeight: '400',
    fontSize: 18,
  },
  scrollableTab: {flex: 1, marginTop: 20},
  tabBarUnderlineStyle: {backgroundColor: '#fb9b34'},
  bookNowCont: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#fb9b34',
  },
  rightArrow: {
    position: 'absolute',
    bottom: 15,
    right: 20,
    width: 20,
    height: 20,
  },
  bookNowText: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
  infosCont: {paddingLeft: 20, paddingTop: 5},
  titleText: {fontWeight: 'bold', fontSize: 20},
  subtitleText: {fontWeight: '400', fontSize: 16, paddingTop: 5},
  valueCont: {
    flexDirection: 'row',
    paddingTop: 5,
  },
});

export default Details;
