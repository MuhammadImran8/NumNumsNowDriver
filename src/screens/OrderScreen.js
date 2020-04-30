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
import CompletedOrdersCards from '../component/orders/CompletedOrdersCards';
import CancelOrderCard from '../component/orders/CancelOrderCard';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AppContext from '../context/AppContext';
import axios from 'axios';

const OrderScreen = ({theme, Paragraph, title, navigation}) => {
  const {colors} = theme;
  const {
    area_codeC,
    storeDate,
    dateC,
    dayC,
    monthC,
    yearC,
    dobC,
    emailC,
    addressC,
    statusC,
    genderC,
    idC,
    nameC,
    passwordC,
    phoneC,
    ratingC,
    tokenC,
    baseUrl,
    storeAreaCode,
    storeAvatar,
    storeStatus,
    storeDob,
    storeEmail,
    storeId,
    storeName,
    storePhone,
    storeRating,
    storeToken,
    storeDay,
    storeMonth,
    storeYear,
  } = useContext(AppContext);
  const [testarray, setTestArray] = useState([
    {text: 'Camera'},
    {text: 'Live'},
    {text: 'action'},
  ]);
  const [allOnGoingOrders, setAllOnGoingOrders] = useState([]);
  const [allCompletedOrders, setAllCompletedOrders] = useState([]);
  const [allCancelledOrders, setAllCancelledOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const allOngoingOrdersFunction = async () => {
    axios({
      method: 'post',
      url: `${baseUrl}/api/driver/orders/onGoing`,
      headers: {Authorization: `bearer ${tokenC}`},
      data: {
        driver_id: idC,
      },
    }).then(
      (response) => {
        console.log(response.data);
        setAllOnGoingOrders(response.data);
        // storeDate(response.data.due_date);
      },
      (error) => {},
    );
  };

  const allCompleteOrdersFunction = async () => {
    axios({
      method: 'post',
      url: `${baseUrl}/api/driver/orders/completed`,
      headers: {Authorization: `bearer ${tokenC}`},
      data: {
        driver_id: idC,
      },
    }).then(
      (response) => {
        console.log(response.data);
        setAllCompletedOrders(response.data);
      },
      (error) => {},
    );
  };

  const allCanceledOrdersFunction = async () => {
    axios({
      method: 'post',
      url: `${baseUrl}/api/driver/orders/canceled`,
      headers: {Authorization: `bearer ${tokenC}`},
      data: {
        driver_id: idC,
      },
    }).then(
      (response) => {
        setAllCancelledOrders(response.data);
      },
      (error) => {
        Alert.alert(error);
      },
    );
  };

  useEffect(() => {
    allOngoingOrdersFunction();
    allCompleteOrdersFunction();
    allCanceledOrdersFunction();
    setLoading(false);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#e7e7e7'}}>
      <DashboardNavbarNoBack title="Orders" />
      {loading ? <ActivityIndicator /> : null}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Title style={{marginHorizontal: 20, marginVertical: 10}}>
            On Going Orders
          </Title>
          {allOnGoingOrders.length > 0 ? (
            <FlatList
              horizontal={true}
              keyExtractor={(singleItem) => {
                singleItem.updated_at;
              }}
              showsHorizontalScrollIndicator={false}
              extraData={allOnGoingOrders}
              data={allOnGoingOrders}
              renderItem={({item}) => {
                return <Orders item={item} />;
              }}
            />
          ) : (
            <View style={{alignItems: 'center'}}>
              <FontAwesome5 name="sad-tear" size={64} color={colors.darkCard} />
              <Text style={{textAlign: 'center'}}>No On-Going Order Found</Text>
            </View>
          )}
        </View>

        <View>
          <Title style={{marginHorizontal: 20}}>Completed Orders</Title>
          {allCompletedOrders.length > 0 ? (
            <FlatList
              horizontal={true}
              keyExtractor={(singleItemm) => {
                singleItemm.updated_at;
              }}
              showsHorizontalScrollIndicator={false}
              data={allCompletedOrders}
              extraData={allCompletedOrders}
              renderItem={({item}) => {
                return <CompletedOrdersCards item={item} />;
              }}
            />
          ) : (
            <View style={{alignItems: 'center'}}>
              <FontAwesome5 name="award" size={64} color={colors.darkCard} />
              <Text style={{textAlign: 'center'}}>
                No Completed Order Found
              </Text>
            </View>
          )}
        </View>
        <View>
          <Title style={{marginHorizontal: 20}}>Canceled Orders</Title>
          {allCancelledOrders.length > 0 ? (
            <FlatList
              horizontal={true}
              keyExtractor={(singleItemOrder) => {
                singleItemOrder.updated_at;
              }}
              showsHorizontalScrollIndicator={false}
              data={allCancelledOrders}
              extraData={allCancelledOrders}
              renderItem={({item}) => {
                return <CancelOrderCard item={item} />;
              }}
            />
          ) : (
            <View style={{alignItems: 'center'}}>
              <FontAwesome5
                name="thumbs-up"
                size={64}
                color={colors.darkCard}
              />
              <Text style={{textAlign: 'center'}}>No Canceled Order Found</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default withTheme(OrderScreen);
