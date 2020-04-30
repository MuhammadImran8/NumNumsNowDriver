/* eslint-disable prettier/prettier */
import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  AsyncStorage,
} from 'react-native';
import {withTheme, TextInput, Button} from 'react-native-paper';
import DefaultNavbar from '../component/navbars/DefaultNavbar';
import AppContext from '../context/AppContext';
import {withNavigation} from 'react-navigation';
import {ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';
const DriverLogin = ({theme, navigation}) => {
  const {colors} = theme;
  const {
    baseUrl,
    storeDob,
    storeAreaCode,
    storeStatus,
    storeAvatar,
    storePassword,
    storeEmail,
    storeGender,
    storeId,
    storeName,
    storePhone,
    storeRating,
    storeToken,
    storeAddress,
  } = useContext(AppContext);
  const [email, setEmail] = useState('professionaldeveloper07@gmail.com');
  const [pass, setPass] = useState('password');
  const [messageEmail, setMessageEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [messagePassword, setMessagePassword] = useState('');

  const driverLogin = async (emailP, passwordP) => {
    axios({
      method: 'post',
      url: `${baseUrl}/api/driver/login`,
      data: {
        email: JSON.parse(emailP),
        password: JSON.parse(passwordP),
      },
    }).then(
      (response) => {
        console.log(response.data);
        storeToken(response.data.access_token);
        storeAreaCode(response.data.customer.area_code);
        storeAvatar(response.data.customer.avatar);
        storeEmail(response.data.customer.email);
        storeGender(response.data.customer.gender);
        storeId(response.data.customer.id);
        storeName(response.data.customer.name);
        storePhone(response.data.customer.phone);
        storeRating(response.data.customer.rating);
        storeStatus(response.data.customer.status);
        storeAddress(response.data.customer.address);
        storeDob(response.data.customer.dob);
        AsyncStorage.setItem('email', emailP);
        AsyncStorage.setItem('password', passwordP);
        navigation.replace('dashboard');
      },
      (error) => {
        //   if(error.response.status==401)
        //   {
        setLoading(false);
        Alert.alert(
          'Ooops!',
          'Invalid Details',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false},
        );
      },
    );
  };

  const getEmailAndPassword = async () => {
    try {
      let emal = await AsyncStorage.getItem('email');
      let passwrd = await AsyncStorage.getItem('password');

      if (emal !== null && emal !== '') {
        if (passwrd !== null && passwrd !== '') {
          driverLogin(emal, passwrd);
        }
      }
    } catch (error) {}
  };

  useEffect(() => {
    getEmailAndPassword();
  }, []);

  return (
    <View
      style={{
        backgroundColor: colors.backgroundsForApp,
        flex: 1,
        paddingBottom: 130,
      }}>
      <DefaultNavbar />

      <ScrollView>
        <Image
          source={require('../../assets/logo.png')}
          style={{
            height: 150,
            width: 150,
            alignSelf: 'center',
            marginTop: 50,
            marginBottom: 20,
          }}
        />

        <View style={styles.input}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
          <Text style={styles.message}>{messageEmail}</Text>

          <TextInput
            label="Password"
            secureTextEntry={true}
            value={pass}
            onChangeText={(text) => {
              setPass(text);
            }}
            //  onChangeText={(text)=>{storePassword(text)}}
          />
          <Text style={styles.message}>{messagePassword}</Text>

          <Button
            loading={loading}
            style={styles.btn}
            onPress={() => {
              setLoading(true);
              if (email == '') {
                setMessageEmail('Email Required');
                setMessagePassword('');
                setLoading(false);
              } else if (pass == '') {
                setMessageEmail('');
                setMessagePassword('Password Required');
                setLoading(false);
              } else {
                driverLogin(JSON.stringify(email), JSON.stringify(pass));
              }
            }}
            mode="outlined">
            LOGIN
          </Button>
        </View>
      </ScrollView>
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
    color: 'red',
  },
  message: {
    color: 'red',
    marginHorizontal: 20,
  },
  btn: {
    marginVertical: 20,
  },
});

export default withTheme(withNavigation(DriverLogin));
