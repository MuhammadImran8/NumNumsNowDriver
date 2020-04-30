import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Appbar, withTheme} from 'react-native-paper';

import Iconn from 'react-native-vector-icons/Ionicons';
import {withNavigation} from 'react-navigation';

const DashboardNavbarNoBack = ({navigation, theme, title}) => {
  const colors = {theme};
  return (
    <View>
      <Appbar.Header style={{backgroundColor: colors.darkCard}}>
        <Appbar.Content title={title} color="#FFFFFF" />
      </Appbar.Header>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyles: {
    backgroundColor: '#1fc157',
    color: '#FFFFFF',
  },
  titleStyle: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default withTheme(withNavigation(DashboardNavbarNoBack));
