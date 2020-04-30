/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {Image, View, Dimensions, Alert, Text} from 'react-native';
import {Card, Title, Paragraph, withTheme, Button} from 'react-native-paper';
import {withNavigation} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {color} from 'react-native-reanimated';
import AppContext from '../../context/AppContext';
import axios from 'axios';
// import Iconn from 'react-native-vector-icons/MaterialCommunityIcons';
const CompletedOrdersCards = ({theme, item, navigation}) => {
  const {colors} = theme;
  const {idC, token, baseUrl} = useContext(AppContext);

  return (
    <View>
      <Card
        style={{
          elevation: 10,
          margin: 20,
          width: Dimensions.get('window').width - 10,
        }}>
        <Card.Content style={{padding: 0}}>
          <View>
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
              {'   '}
              {item.drivername} ({item.driverphone})
            </Paragraph>
            <Paragraph style={{color: colors.text}}>
              <Icon name="address-card" size={16} color={colors.text} />
              {'  '}
              {item.address}
            </Paragraph>

            <View style={{flexDirection: 'row', marginVertical: 10}}>
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

            <Button
              mode="contained"
              disabled={true}
              onPress={() => {
                canceledOrder();
              }}
              style={{marginVertical: 5, flex: 1, marginHorizontal: 5}}>
              Canceled By Support
            </Button>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

export default withTheme(withNavigation(CompletedOrdersCards));
