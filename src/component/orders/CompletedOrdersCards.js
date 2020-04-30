/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {Image, View, Dimensions, Alert, Text} from 'react-native';
import {Card, Title, Paragraph, withTheme, Button} from 'react-native-paper';
import {withNavigation} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconn from 'react-native-vector-icons/MaterialCommunityIcons';
import {AirbnbRating} from 'react-native-ratings';
import AppContext from '../../context/AppContext';
import axios from 'axios';

const CompletedOrdersCards = ({theme, item, navigation}) => {
  const {colors} = theme;
  const {idC, tokenC, baseUrl} = useContext(AppContext);

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
              <Icon name="user" size={16} color={colors.text} />
              {'   '} {item.shopname} ({item.shopphone})
            </Paragraph>
            <Paragraph style={{color: colors.text}}>
              <Iconn name="van-utility" size={16} color={colors.text} />
              {'   '}
              {item.drivername} ({item.driverphone})
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
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: colors.primary,
                  alignItems: 'center',
                }}>
                <Iconn name="van-utility" size={16} color={colors.text} />
                <AirbnbRating
                  count={6}
                  isDisabled={true}
                  reviews={[
                    'Terrible',
                    'Bad',
                    'OK',
                    'Good',
                    'Amazing',
                    'Unbelievable',
                  ]}
                  defaultRating={item.driver_rating}
                  size={20}
                  style={{marginVertical: 10}}
                  onFinishRating={() => {}}
                />
              </View>
            </View>
            <Button
              mode="contained"
              disabled={true}
              onPress={() => {
                completedOrder();
              }}
              style={{marginVertical: 5, flex: 1, marginHorizontal: 5}}>
              Completed
            </Button>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

export default withTheme(withNavigation(CompletedOrdersCards));
