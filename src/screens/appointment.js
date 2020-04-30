/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  ActivityIndicator,
  loading,
  Alert,
} from 'react-native';
import DashboardNavbarNoBack from '../component/navbars/DashboardNavbarNoBack';
import {Title, TextInput, withTheme} from 'react-native-paper';
import Orders from '../component/orders/Orders';
import AppContext from '../context/AppContext';
import axios from 'axios';
import Detail from '../component/orders/Detail';

const appointment = ({theme, navigation, description}) => {
  const {colors} = theme;
  const {idC, tokenC, baseUrl, storeId, storeToken} = useContext(AppContext);
  // const [testarray,setTestArray] = useState([{ text: 'Camera' }]);
  const [allAppointments, setAllAppointments] = useState([]);

  const allAppointmentsFunction = async () => {
    console.log(baseUrl);
    console.log(idC);
    console.log(tokenC);

    axios({
      method: 'post',
      url: `${baseUrl}/api/driver/appointment/view`,
      headers: {Authorization: `bearer ${tokenC}`},
      data: {
        id: idC,
      },
    }).then(
      (response) => {
        // console.log(response.data)

        setAllAppointments(response.data);
      },
      (error) => {},
    );
  };

  useEffect(() => {
    allAppointmentsFunction();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#e7e7e7'}}>
      <DashboardNavbarNoBack title="All Appointments" />
      {/* <ActivityIndicator /> */}

      <View>
        <FlatList
          // horizontal={true}
          keyExtractor={(singleItem) => {
            singleItem.id + '';
          }}
          // showsHorizontalScrollIndicator={false}
          data={allAppointments}
          renderItem={({item}) => {
            return <Detail item={item} />;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default withTheme(appointment);
