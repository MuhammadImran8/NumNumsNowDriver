/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
const AppContext = React.createContext();
export const EzCareProvider = ({children}) => {
  const [baseUrl, setBaseUrl] = useState('https://www.ezcare2go.com');
  const [area_codeC, setArea_Code] = useState('');
  const [avatarC, setAvatar] = useState('');
  const [emailC, setEmail] = useState('');
  const [statusC, setStatus] = useState('');
  const [genderC, setGender] = useState('');
  const [idC, setId] = useState('');
  const [nameC, setName] = useState('');
  const [phoneC, setPhone] = useState('');
  const [ratingC, setRating] = useState('');
  const [tokenC, setToken] = useState('');
  const [addressC, setAddress] = useState('');
  const [dayC, setDay] = useState('');
  const [monthC, setMonth] = useState('');
  const [yearC, setYear] = useState('');
  const [dateC, setDate] = useState('');
  const [timeC, setTime] = useState('');
  const [passwordC, setPassword] = useState('');
  const [dobC, setDob] = useState('');

  const storePassword = (pas) => {
    setPassword(pas);
  };
  const storeDate = (dte) => {
    setDate(dte);
  };
  const storeTime = (tie) => {
    setTime(tie);
  };
  const storeAreaCode = (aco) => {
    setArea_Code(aco);
  };
  const storeDay = (daa) => {
    setDay(daa);
  };
  const storeMonth = (mo) => {
    setMonth(mo);
  };
  const storeYear = (ye) => {
    setYear(ye);
  };
  const storeAddress = (add) => {
    setAddress(add);
  };
  const storeAvatar = (avt) => {
    setAvatar(avt);
  };
  const storeEmail = (eml) => {
    setEmail(eml);
  };
  const storeGender = (gnd) => {
    setGender(gnd);
  };
  const storeId = (id) => {
    setId(id);
  };
  const storeName = (na) => {
    setName(na);
  };
  const storePhone = (ph) => {
    setPhone(ph);
  };
  const storeRating = (ra) => {
    setRating(ra);
  };
  const storeToken = (to) => {
    setToken(to);
  };
  const storeStatus = (stt) => {
    setStatus(stt);
  };
  const storeDob = (doo) => {
    setDob(doo);
  };
  return (
    <AppContext.Provider
      value={{
        baseUrl,
        dobC,
        passwordC,
        timeC,
        dateC,
        dayC,
        monthC,
        yearC,
        addressC,
        area_codeC,
        avatarC,
        emailC,
        statusC,
        genderC,
        idC,
        nameC,
        phoneC,
        ratingC,
        tokenC,
        storeTime,
        storeDate,
        storeAreaCode,
        storeAvatar,
        storeEmail,
        storeGender,
        storeId,
        storeName,
        storePhone,
        storeRating,
        storeToken,
        storePassword,
        storeStatus,
        storeAddress,
        storeDay,
        storeMonth,
        storeYear,
        storeDob,
      }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
