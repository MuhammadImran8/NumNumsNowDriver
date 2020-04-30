/* eslint-disable prettier/prettier */
import React, {useContext, useState} from 'react';
import {
  Image,
  View,
  Text,
  Dimensions,
  Alert,
  StyleSheet,
  TouchableOpacity,
  DatePickerAndroid,
} from 'react-native';
import {
  Card,
  Title,
  Paragraph,
  withTheme,
  Button,
  ActivityIndicator,
} from 'react-native-paper';
import AppContext from '../../context/AppContext';
import axios from 'axios';
import Iconn from 'react-native-vector-icons/MaterialCommunityIcons';
import {withNavigation} from 'react-navigation';

const Detail = ({theme, item, navigation}) => {
  const {colors} = theme;
  const [loading, setLoading] = useState(false);
  const {idC, tokenC, baseUrl} = useContext(AppContext);

  const deleteAppointments = async () => {
    axios({
      method: 'post',
      url: `${baseUrl}/api/driver/appointment/delete`,
      headers: {Authorization: `bearer ${tokenC}`},
      data: {
        id: item.id,
      },
    }).then(
      (response) => {
        console.log(response.data);

        Alert.alert(
          'Congrets!',
          'Appointment Deleted Successfully.',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => navigation.replace('ViewBooking')},
          ],
          {cancelable: false},
        );
      },
      (error) => {},
    );
  };

  return (
    <View>
      <Card
        style={{
          elevation: 10,
          margin: 20,
          marginHorizontal: 10,
        }}>
        <Card.Content>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 6, alignItems: 'center', flexDirection: 'row'}}>
              <Title
                style={{
                  fontSize: 15,
                  color: colors.text,
                  marginHorizontal: 20,
                }}>
                <Iconn name="calendar" size={16} color={colors.darkCard} />
                {item.date}
              </Title>
              <Paragraph style={{fontSize: 15, marginHorizontal: 40}}>
                <Iconn name="history" size={16} color={colors.darkCard} />
                {item.time}
              </Paragraph>
            </View>

            <View style={{flex: 1, marginVertical: 10}}>
              {item.status === 'available' ? (
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert(
                      'Warning!',
                      'Are you sure ?',
                      [
                        {
                          text: 'No',
                          onPress: () => console.log('Cancel Pressed'),
                          style: 'cancel',
                        },
                        {
                          text: 'Yes',
                          onPress: () => {
                            setLoading(true);
                            deleteAppointments();
                          },
                        },
                      ],
                      {cancelable: false},
                    );
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    {loading ? <ActivityIndicator size={14} /> : null}
                    <Iconn name="delete" size={22} color={colors.darkCard} />
                  </View>
                </TouchableOpacity>
              ) : null}
            </View>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};
export default withTheme(withNavigation(Detail));
