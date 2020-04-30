import React from 'react';
import {Appbar, withTheme} from 'react-native-paper';

const DefaultNavbar = ({title, theme}) => {
  return (
    <Appbar.Header>
      <Appbar.Content title="EzCare2Go" />
    </Appbar.Header>
  );
};

export default withTheme(DefaultNavbar);
