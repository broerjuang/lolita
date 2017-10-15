// @flow

import React from 'react';
import {StyleSheet} from 'react-native-web';

import {View, Text} from '../../generals/core-ui';

import Logo from './CompanyLogo';

let NAVIGATION_TEXT = [
  'Become our photographer',
  'Traveller',
  'How it works',
  'Help',
  'sign up',
  'Sign in',
];

type Props = {}; // TODO: put Navigation Link here

function DesktopHeader(props: Props) {
  return (
    <View style={styles.container}>
      <Logo key="logo" />
      <View style={styles.flexRow}>
        {NAVIGATION_TEXT.map(nav => (
          <Text style={{marginRight: 30}} key={nav}>
            {nav.toUpperCase()}
          </Text>
        ))}
      </View>
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
  },
});

export default DesktopHeader;
