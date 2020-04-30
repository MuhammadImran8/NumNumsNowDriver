/* eslint-disable prettier/prettier */
import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import {
  withTheme,
  TextInput,
  Button,
  Title,
  RadioButton,
} from 'react-native-paper';
import DashboardNavbar from '../component/navbars/DashboardNavbar';
import {withNavigation} from 'react-navigation';

const AddBooking = ({theme}) => {
  const {colors} = theme;

  // useContext(AppContext)

  return (
    <View style={{flex: 1, backgroundColor: '#e7e7e7'}}>
      <DashboardNavbar title="Booking" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginHorizontal: 20}}>
        <Title style={{color: colors.primary, fontSize: 20}}>
          Your Appoinment have been booked
        </Title>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default withTheme(withNavigation(AddBooking));
