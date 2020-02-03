/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {FunctionComponent} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  dealDetails: {
    thumb: string;
    hotels: Array<string>;
    title: string;
    subtitle: string;
    from: {value: number};
    popular: boolean;
  };
}

const OneDeal: FunctionComponent<Props> = props => {
  return (
    <View style={styles.dealContainer}>
      <View>
        <View style={styles.imageCont}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: props.dealDetails.thumb,
            }}
          />
        </View>
        <View style={styles.hotelsAvail}>
          <LinearGradient
            colors={['rgba(0,0,0,0.01)', 'rgba(0,0,0,0.13)', 'rgba(2,2,2,0.4)']}
            locations={[0, 0.2, 0.5]}>
            <Text style={styles.bottomImageText}>
              beschikbaar voo {props.dealDetails.hotels.length} hotels
            </Text>
          </LinearGradient>
        </View>
      </View>

      <View style={{paddingLeft: 20, paddingTop: 5}}>
        <Text style={styles.titleText}>{props.dealDetails.title}</Text>
        <Text style={styles.subtitleText}>{props.dealDetails.subtitle}</Text>
        <View style={styles.priceCont}>
          <Text style={styles.vanafText}>p.p vanaf </Text>
          <Text style={styles.value}>{props.dealDetails.from.value}</Text>
        </View>
      </View>
      {props.dealDetails.popular ? (
        <View style={styles.populaire}>
          <Text style={styles.populaireText}>Erg Populair</Text>
        </View>
      ) : (
        <View />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dealContainer: {
    elevation: 5,
    borderRadius: 3,
    width: 230,
    margin: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 3,
    shadowOpacity: 0.5,
  },
  imageCont: {
    width: '100%',
    aspectRatio: 1.5,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  imageStyle: {
    width: '100%',
    aspectRatio: 1.5,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  populaire: {
    backgroundColor: 'rgb(126,121,221)',
    width: 100,
    borderRadius: 8,
    position: 'absolute',
    right: 3,
    top: 3,
  },
  hotelsAvail: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  bottomImageText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  subtitleText: {fontWeight: '300', fontSize: 12, paddingVertical: 10},
  priceCont: {
    flexDirection: 'row',
    paddingTop: 5,
    alignSelf: 'flex-end',
    paddingRight: 5,
  },
  vanafText: {fontWeight: '400', fontSize: 10},
  value: {fontWeight: 'bold', fontSize: 12},
  populaireText: {textAlign: 'center', color: 'white'},
  titleText: {fontWeight: 'bold', fontSize: 14},
});

export default OneDeal;
