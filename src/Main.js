// @flow

import React from 'react';

import {View} from './generals/core-ui';
import {Header} from './layouts';
import {LandingPage} from './pages';

type Props = {
  match?: Object, //TODO: be specific about object that passed from 'react router'
};

function Main(props: Props) {
  return (
    <View>
      <Header />
      <LandingPage />
    </View>
  );
}

export default Main;
