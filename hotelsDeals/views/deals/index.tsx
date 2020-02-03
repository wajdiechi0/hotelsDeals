/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import axios from 'axios';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
const scan = require('./../../assets/scan.png');
const user = require('./../../assets/user.png');
import OneDeal from './../components/oneDeal';
import DealButton from './../components/dealButton';
import {NavigationStackProp} from 'react-navigation-stack';

interface State {
  deals: Array<{
    id: string;
    thumb: string;
    hotels: Array<string>;
    title: string;
    subtitle: string;
    from: {value: number};
    popular: boolean;
  }>;
  dealsButton: Array<string>;
}
interface Props {
  navigation: NavigationStackProp<{userId: string}>;
}
class Deals extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  state: State = {
    deals: [],
    dealsButton: [],
  };
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.dealsTitle}>Deals</Text>
            <View style={styles.headerButtons}>
              <TouchableOpacity>
                <Image source={scan} style={styles.scanStyle} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={user} style={styles.userStyle} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.dealsCont}>
            <Text style={styles.topDealsText}>Top Zomer deals</Text>
            <ScrollView horizontal={true}>
              {this.state.deals.map(
                (item: {
                  id: string;
                  thumb: string;
                  hotels: Array<string>;
                  title: string;
                  subtitle: string;
                  from: {value: number};
                  popular: boolean;
                }) => (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() =>
                      this.props.navigation.navigate('Details', {deal: item})
                    }>
                    <OneDeal dealDetails={item} />
                  </TouchableOpacity>
                ),
              )}
            </ScrollView>
            <Text style={styles.alleDealsText}>Alle Deals</Text>
            {this.state.dealsButton.map((item: string) => (
              <DealButton text={item} key={item} />
            ))}
            <View style={styles.line} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  componentDidMount(): void {
    try {
      axios
        .get('https://valkdigital-api.netlify.com/api/v1/deals')
        .then(response => {
          this.setState({
            deals: response.data.data,
            dealsButton: [
              'Arrangementen',
              'Valk Voordeel',
              'Feestdagen',
              'Last Minutes',
              'Non Refundables',
              'Early Birds',
            ],
          });
        });
    } catch (e) {
      console.log(e);
    }
  }
}

const styles = StyleSheet.create({
  header: {
    borderColor: 'rgba(160,160,160,0.35)',
    borderBottomWidth: 1,
    padding: 20,
  },
  headerButtons: {
    position: 'absolute',
    right: 5,
    top: 20,
    flexDirection: 'row',
  },
  dealsTitle: {alignSelf: 'center'},
  scanStyle: {width: 20, height: 20, marginRight: 10},
  topDealsText: {fontWeight: 'bold', fontSize: 20, marginBottom: 10},
  alleDealsText: {fontWeight: 'bold', fontSize: 20, marginVertical: 10},
  line: {backgroundColor: '#d9d9d9', width: '100%', height: 1},
  userStyle: {width: 20, height: 20},
  dealsCont: {padding: 10},
});

export default Deals;
