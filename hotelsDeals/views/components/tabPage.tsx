/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {FunctionComponent} from 'react';
import {Description, AvailHotels} from './tabComponents';
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
  tabN: number;
  tabLabel: string;
}

const TabPage: FunctionComponent<Props> = props => {
  return props.tabN === 0 ? (
    <Description deal={props.deal} />
  ) : (
    <AvailHotels deal={props.deal} />
  );
};

export default TabPage;
