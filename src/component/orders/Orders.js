/* eslint-disable prettier/prettier */
import React, {useContext, useState} from 'react';
import {Image, View, Text, Dimensions, Alert, StyleSheet} from 'react-native';
import {Card, Title, Paragraph, withTheme, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {withNavigation} from 'react-navigation';
import AppContext from '../../context/AppContext';
import axios from 'axios';

const Orders = ({theme, item, navigation, onChange}) => {
  const {colors} = theme;
  const {idC, tokenC, baseUrl} = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  const updateStatus = async () => {
    // console.log(baseUrl);
    // console.log("-----------------------------");
    // console.log(tokenC);
    // console.log("-----------------------------");
    // console.log(idC);

    axios({
      method: 'post',
      url: `${baseUrl}/api/driver/orders/changeStatus`,
      headers: {Authorization: `bearer ${tokenC}`},
      data: {
        id: item.id,
      },
    }).then(
      (response) => {
        Alert.alert(
          'Congrets!',
          'Status Updated.',
          [
            {
              text: 'OK',
              onPress: () => {
                navigation.replace('Ordder');
              },
            },
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

          width: Dimensions.get('window').width - 10,
        }}>
        <Card.Content style={{padding: 0}}>
          <Paragraph style={{color: colors.text, height: 90}}>
            {item.description}
          </Paragraph>
          <Paragraph style={{color: colors.text}}>
            <Icon name="bank" size={16} color={colors.text} />
            {'   '}
            {item.shopname} ({item.shopphone})
          </Paragraph>
          <Paragraph style={{color: colors.text}}>
            <Icon name="user" size={16} color={colors.text} />
            {'   '} {item.drivername} ({item.driverphone})
          </Paragraph>
          <Paragraph style={{color: colors.text}}>
            <Icon name="history" size={16} color={colors.text} />
            {'   '} {item.apptdate} ({item.appttime})
          </Paragraph>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: colors.primary,
                alignItems: 'center',
              }}>
              <Title style={{fontSize: 14, color: colors.text}}>
                {item.amount}
              </Title>
              <Paragraph style={{fontSize: 10}}>Amount</Paragraph>
            </View>
            <View
              style={{
                flex: 2,
                borderWidth: 1,
                borderColor: colors.primary,
                alignItems: 'center',
              }}>
              <Title style={{fontSize: 14, color: colors.text}}>
                {item.order_id}
              </Title>
              <Paragraph style={{fontSize: 10}}>PIN</Paragraph>
            </View>

            <View
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: colors.primary,
                alignItems: 'center',
              }}>
              <Title style={{fontSize: 14, color: colors.text}}>
                {item.status}
              </Title>
              <Paragraph style={{fontSize: 10}}>Status</Paragraph>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginVertical: 10}}>
            {item.status == 'place' ? (
              <Button
                loading={loading}
                style={{marginVertical: 5, flex: 1, marginHorizontal: 5}}
                onPress={() => {
                  updateStatus();
                }}
                mode="contained">
                Picked
              </Button>
            ) : (
              <Button
                loading={loading}
                style={{marginVertical: 5, flex: 1, marginHorizontal: 5}}
                disabled={true}
                mode="contained">
                Picked
              </Button>
            )}

            {item.status == 'pick' ? (
              <Button
                mode="outlined"
                onPress={() => {
                  updateStatus();
                }}
                style={{marginVertical: 5, flex: 1, marginHorizontal: 5}}>
                Dropped
              </Button>
            ) : (
              <Button
                mode="outlined"
                disabled={true}
                style={{marginVertical: 5, flex: 1, marginHorizontal: 5}}>
                Dropped
              </Button>
            )}
          </View>
          {/* {item.status=="complete" ? <Text style={{fontSize:16,textAlign:"center"}}>
          
         
         Ready For Pickup
        </Text>
        :null} */}
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  textt: {
    fontSize: 14,
    marginVertical: 20,
    marginHorizontal: 90,
    // color:"#0e2b57",
    fontWeight: 'bold',
  },
  input: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  btn: {
    marginVertical: 20,
  },
});
export default withTheme(withNavigation(Orders));
