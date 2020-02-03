/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Hotel from '../../components/hotel';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import axios from 'axios';
interface Props {
  deal: {
    id: string;
    title: string;
    subtitle: string;
    from: {currency: string; value: number};
    popular: boolean;
    thumb: string;
    images: Array<string>;
    contents: Array<string>;
    description: string;
    terms: string;
    hotels: Array<string>;
  };
}
interface State {
  hotels: Array<{
    id: string;
    name: string;
    photo: string;
    from: {value: number};
  }>;
}

class AvailHotels extends React.Component<Props, State> {
  state: State = {
    hotels: [],
  };
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <ScrollView style={styles.scrollView}>
        {this.state.hotels.map(
          (item: {
            id: string;
            name: string;
            photo: string;
            from: {value: number};
          }) => (
            <Hotel hotelDetails={item} key={item.id} />
          ),
        )}
      </ScrollView>
    );
  }
  componentDidMount(): void {
    try {
      axios('https://valkdigital-api.netlify.com/api/v1/hotels').then(
        response => {
          response.data.data.map(
            (item: {
              id: string;
              name: string;
              photo: string;
              from: {value: number};
            }) => {
              if (this.props.deal.hotels.includes(item.id)) {
                this.setState({
                  hotels: [...this.state.hotels, item],
                });
              }
            },
          );
        },
      );
    } catch (e) {
      console.log(e);
    }
  }
}

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
});

export default AvailHotels;
