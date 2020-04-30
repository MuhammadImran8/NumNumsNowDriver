/* eslint-disable react-native/no-inline-styles */
/* eslint-disable radix */
/* eslint-disable prettier/prettier */
import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {
  withTheme,
  TextInput,
  Button,
  RadioButton,
  Chip,
  Card,
} from 'react-native-paper';
import DefaultNavbar from '../component/navbars/DefaultNavbar';
import {AirbnbRating} from 'react-native-ratings';
import Iconn from 'react-native-vector-icons/MaterialCommunityIcons';
import AppContext from '../context/AppContext';
import axios from 'axios';
import {withNavigation} from 'react-navigation';
import DocumentPicker from 'react-native-document-picker';

const ProfileScreen = ({theme, navigation}) => {
  const {colors} = theme;
  const {
    area_codeC,
    dobC,
    dayC,
    monthC,
    yearC,
    emailC,
    addressC,
    statusC,
    genderC,
    idC,
    nameC,
    passwordC,
    phoneC,
    tokenC,
    baseUrl,
    storeAreaCode,
    storeAvatar,
    storeStatus,
    storeEmail,
    storeId,
    storeName,
    storePhone,
    storeToken,
    storeDob,
    storeDay,
    storeMonth,
    storeYear,
  } = useContext(AppContext);
  const dob = dobC.split('/');
  const [allDays, setAllDays] = useState('');
  const [allMonth, setAllMonth] = useState('');
  const [allyears, setAllYears] = useState('');
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('Male');
  const {checked} = gender;

  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [area_code, setArea_Code] = useState();
  const [token, setToken] = useState(tokenC);
  const [id, setId] = useState(idC);
  const [maleSelected, setMaleSelected] = useState(false);
  const [femaleSelected, setFemaleSelected] = useState(false);
  const [avatar, setAvatar] = useState('');
  const [avatarToUpload, setAvatarToUpload] = useState('');
  const [imageselectconfirm, setImageselectconfirm] = useState('');

  const uploadAvatar = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      setAvatarToUpload(res.uri);
      setImageselectconfirm('Image Selected.');
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };

  const driverprofile = async (
    idp,
    nameP,
    emailP,
    phoneP,
    AddressP,
    area_codeP,
  ) => {
    //  if(Platform.OS==="ios")
    //  {

    //  }else{

    //  }

    var bodyFormData = new FormData();
    bodyFormData.append('id', idp);
    bodyFormData.append('name', nameP);
    bodyFormData.append('email', emailP);
    bodyFormData.append('phone', phoneP);
    bodyFormData.append('address', AddressP);
    bodyFormData.append('gender', gender);
    bodyFormData.append('area_code', area_codeP);
    bodyFormData.append('date_of_birth', `${allDays}-${allMonth}-${allyears}`);
    bodyFormData.append('password', password);
    bodyFormData.append('avatar', {
      uri: avatarToUpload, // your file path string
      name: 'customer.jpg',
      type: 'image/jpeg',
    });

    axios({
      method: 'post',
      url: `${baseUrl}/api/driver/profile/update`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
      data: bodyFormData,
    }).then(
      (response) => {
        console.log(response.data);

        Alert.alert(
          'Congrets!',
          'Profile Updated Successfully.',
          [{text: 'OK', onPress: () => navigation.replace('Prof')}],
          {cancelable: false},
        );
      },
      (error) => {
        // if(error.response.status==401)
        // {
        //   setLoading(false);
        //   Alert.alert(
        //     'Ooops!',
        //     'Invalid Details',
        //     [
        //         {
        //             text: 'Cancel',
        //             onPress: () => console.log('Cancel Pressed'),
        //             style: 'cancel',
        //         },
        //         {text: 'OK', onPress: () => console.log('ok pressed')},
        //     ],
        //     {cancelable: false}
        // )
        // }
        // else if(error.response.status==500)
        // {
        // }
      },
    );
  };

  const ViewProfile = async () => {
    axios({
      method: 'post',
      url: `${baseUrl}/api/driver/profile/show`,
      headers: {Authorization: `bearer ${token}`},
      data: {
        id: idC,
      },
    }).then(
      (response) => {
        console.log(response.data);
        setId(response.data.id);
        setName(response.data.name);
        setEmail(response.data.email);
        //  setDob(response.data.dob);
        if (response.data.dob != null) {
          let doob = response.data.dob.split('-');
          setAllDays(doob[0]);
          setAllMonth(doob[1]);
          setAllYears(doob[2]);
        }
        if (response.data.gender === 'male') {
          setMaleSelected(true);
          setFemaleSelected(false);
        } else {
          setMaleSelected(false);
          setFemaleSelected(true);
        }
        setAddress(response.data.address);
        setPhone(response.data.phone);
        setArea_Code(response.data.area_code);
        setAvatar(response.data.avatar);
      },
      (error) => {},
    );
  };

  useEffect(() => {
    ViewProfile();
  }, []);

  return (
    <View style={{backgroundColor: colors.backgroundsForApp, flex: 1}}>
      <DefaultNavbar />
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        {/* <View style={{flexDirection:"row",marginHorizontal:80}}> */}
        {/* <Image source={require('../../assets/logo.png')} style={{height:80,width:80,alignSelf:"center",marginTop:50,marginBottom:20}} /> */}

        {/* <View style={{flex: 1,borderColor:colors.primary, alignItems: 'center',marginTop:50,marginBottom:20}}>
            {/* <Iconn name="van-utility" size={16} color={colors.text} /> */}
        {/* <AirbnbRating
          count={6}
          reviews={[
            'Terrible',
            'Bad',
            'OK',
            'Good', */}
        {/* // 'Amazing',
            // 'Unbelievable',
          // ]}
          // disabled={true}
          // size={20}
          // style={{marginVertical: 10}}
          // />
          // </View> */}

        {/* </View> */}

        <View style={styles.input}>
          <TouchableOpacity
            onPress={() => {
              uploadAvatar();
            }}>
            <Image
              source={{uri: `https://www.ezcare2go.com/${avatar}`}}
              style={styles.logoSetting}
            />
            {/* {Alert.alert(`https://www.myybuilder.com/${avatar}`)}; */}
          </TouchableOpacity>
          <Text style={{textAlign: 'center', color: colors.text}}>
            {imageselectconfirm}
          </Text>
          <TextInput
            label="Full Name"
            onChangeText={(text) => {
              setName(text);
            }}
            value={name}
          />
          <TextInput
            label="Email"
            onChangeText={(text) => {
              setEmail(text);
            }}
            value={email}
          />
          <TextInput
            label="Password"
            onChangeText={(text) => {
              setPassword(text);
            }}
            secureTextEntry={true}
            value={password}
          />

          <TextInput
            label="Address"
            onChangeText={(text) => {
              setAddress(text);
            }}
            value={address}
          />

          <TextInput
            label="Phone with country code"
            onChangeText={(text) => {
              setPhone(text);
            }}
            value={phone}
          />

          <TextInput
            label="Area Code"
            onChangeText={(text) => {
              setArea_Code(text);
            }}
            value={area_code}
          />

          <View style={({marginTop: 10}, styles.inputSetting)}>
            <Chip
              icon="male"
              selected={maleSelected}
              onPress={() => setGender('male')}>
              Male
            </Chip>
            <Chip
              icon="female"
              selected={femaleSelected}
              onPress={() => setGender('female')}>
              Female
            </Chip>
          </View>

          <Text
            style={{
              marginHorizontal: 10,
              color: colors.primary,
              fontSize: 15,
              marginTop: 20,
            }}>
            Date of Birth
          </Text>
          <Card style={{elevation: 10, margin: 20}}>
            <Card.Content>
              <Text style={{color: colors.text, marginVertical: 5}}>
                SELECT DOB
              </Text>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={{flex: 1}}
                  placeholder="Days"
                  value={allDays}
                  maxLength={2}
                  onChangeText={(val) => {
                    if (parseInt(val) > 0 && parseInt(val) < 32) {
                      setAllDays(val);
                      console.log(val);
                    } else {
                      setAllDays('');
                    }
                  }}
                />
                <TextInput
                  style={{flex: 1}}
                  placeholder="Month"
                  value={allMonth}
                  maxLength={2}
                  onChangeText={(val) => {
                    if (parseInt(val) > 0 && parseInt(val) < 13) {
                      setAllMonth(val);
                      console.log(val);
                    } else {
                      setAllMonth('');
                    }
                  }}
                />
                <TextInput
                  style={{flex: 1}}
                  placeholder="Year"
                  value={allyears}
                  maxLength={4}
                  onChangeText={(val) => {
                    if (parseInt(val) > 0 && parseInt(val) < 2021) {
                      setAllYears(val);
                      console.log(val);
                    } else {
                      setAllYears('');
                    }
                  }}
                />
              </View>
            </Card.Content>
          </Card>

          <Button
            loading={loading}
            style={styles.btn}
            onPress={() => {
              setLoading(true);
              if (email === '') {
                Alert.alert(
                  'Invalid Requirements!',
                  'Please Check Your Requirements',
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
                setLoading(false);
              } else if (password === '') {
                Alert.alert(
                  'Necessary!',
                  'Please Write Your Password',
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
                setLoading(false);
              } else if (name == '') {
                Alert.alert(
                  'Invalid Requirements!',
                  'Please Check Your Requirements',
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
                setLoading(false);
              } else if (avatarToUpload == '') {
                Alert.alert(
                  'Invalid Requirements!',
                  'Please Upload the image must to update your profile.',
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
                setLoading(false);
              } else {
                driverprofile(
                  id,
                  name,
                  email,
                  phone,
                  address,
                  area_code,
                  // gender,
                  // date,
                );
                ViewProfile(id);
              }
            }}
            mode="outlined">
            Update Profile
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  textt: {
    fontSize: 15,
    color: '#0e2b57',
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  btn: {
    marginVertical: 20,
    marginHorizontal: 20,
    marginBottom: 30,
  },
  logoSetting: {
    height: 80,
    width: 80,
    borderRadius: 100,

    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  inputSetting: {
    marginHorizontal: 30,
    marginVertical: 10,
  },
  buttonSetting: {
    marginHorizontal: 30,
    marginVertical: 10,
  },
});

export default withTheme(withNavigation(ProfileScreen));
