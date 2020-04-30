/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react';
import {View,Text,ScrollView, StyleSheet, Dimensions,TouchableOpacity, Alert} from 'react-native';
import { withTheme, TextInput, Button, RadioButton } from 'react-native-paper';
import DashboardNavbar from '../component/navbars/DashboardNavbar';
import { withNavigation } from 'react-navigation';
import AppContext from '../context/AppContext';
import axios from "axios";

const BookingScreen = ({theme, navigation}) => {
  const {baseUrl,tokenC,storeTime,storeId,storeToken,storeDayCB,storeMothCB,storeYearCB,idC,dayCB,yearCB,monthCB} = useContext(AppContext)
  const {colors}=theme;
  const [time, setTime] = useState('');
  const { checked } = time;
  const [day,setDay] = useState("");
  const [month,setMonth] = useState("");
  const [year,setYear] = useState("");
  const [date,setDate] = useState("");

  const [id,setId] = useState(idC)
  const [loading,setLoading] = useState(false);

     const driverBooking = async (dateP,timeP)=>{
            // console.log(date);
            // console.log(time);
            // console.log(idC);

       axios({
         method: 'post',
         url: `${baseUrl}/api/driver/appointment/store`,
         headers: {'Authorization': `bearer ${tokenC}`},

         data: {
           "date":`${day}/${month}/${year}`,
           "time":timeP,
           "driver_id":idC,
         }
       }).then((response) => {
         console.log(response.data);
         storeTime(time);
        setLoading(false);
            
        Alert.alert(  
            'Congrets!',  
            'Appointment Added Successfully.',  
            [  
                {  
                    text: 'Cancel',  
                    onPress: () => console.log('Cancel Pressed'),  
                    style: 'cancel',  
                },  
                {text: 'OK', onPress: () => console.log("Ok")},  
            ],  
            {cancelable: false}  
        )

       },
        (error) => {
              console.log(error.response.data);
        }
         
       );
       
     }


  return (
    <View  style={{flex:1, backgroundColor:"#e7e7e7"}}>
      <DashboardNavbar title="Booking"/>
      
      <ScrollView 
      showsVerticalScrollIndicator={false}
      style={{marginHorizontal:20 , marginVertical:15}}>

                    <Text style={{color:colors.primary, fontSize:20}}>Register your Appointment</Text>
                    <View style = {{ paddingRight:20,marginHorizontal:20 , flexDirection:"row",marginBottom:20 }}> 
                    <TextInput
                     style = {{ flex: 3 }} 
                     label="Day"
                     value={day} 
                     onChangeText={(text) => {
                           setDay(text);
                        setDate(`${day}/${month}/${year}`);}}
                     /> 
                    <TextInput 
                    style = {{ flex: 3 }}
                    label="Month"  
                    value={month}  
                    onChangeText={(text) => {
                          setMonth(text);
                        setDate(`${day}/${month}/${year}`);}}
                    /> 
                    <TextInput
                     style = {{ flex: 5 }}
                     label="year"  
                     value={year} 
                     onChangeText={(text) =>{ 
                           setYear(text);
                  }}
                     />
                    </View>

     

        
               {time=='8:00am' ?
                <Text style={{
                      textAlign:"center",
                      fontSize:18,
                      height:30,
                      width:Dimensions.get("window").width-120,
                      marginHorizontal:40,
                      marginVertical:5,
                      backgroundColor:colors.whiteText,
                      borderWidth:1,
                      color:colors.cardDark,
                      borderRadius:15
                      }} >8:00am</Text>
                :

                <TouchableOpacity onPress={()=>{
                  setTime("8:00am");
                  }}>
                  <Text style={{
                        textAlign:"center",
                        fontSize:18,
                        height:30,
                        width:Dimensions.get("window").width-120,
                        marginHorizontal:40,
                        marginVertical:5,
                        backgroundColor:colors.darkCard,
                        color:colors.whiteText,
                        borderRadius:15
                        }} >8:00am</Text>
                  </TouchableOpacity>
               
               
               }


              {time=='9:00am' ?
                <Text style={{
                      textAlign:"center",
                      fontSize:18,
                      height:30,
                      width:Dimensions.get("window").width-120,
                      marginHorizontal:40,
                      marginVertical:5,
                      backgroundColor:colors.whiteText,
                      borderWidth:1,
                      color:colors.cardDark,
                      borderRadius:15
                      }} >9:00am</Text>
                :

                <TouchableOpacity onPress={()=>{
                  setTime("9:00am");
                  }}>
                  <Text style={{
                        textAlign:"center",
                        fontSize:18,
                        height:30,
                        width:Dimensions.get("window").width-120,
                        marginHorizontal:40,
                        marginVertical:5,
                        backgroundColor:colors.darkCard,
                        color:colors.whiteText,
                        borderRadius:15
                        }} >9:00am</Text>
                  </TouchableOpacity>
               
               
               }
                
            {/* </View> */}
            {time=='10:00am' ?
                <Text style={{
                      textAlign:"center",
                      fontSize:18,
                      height:30,
                      width:Dimensions.get("window").width-120,
                      marginHorizontal:40,
                      marginVertical:5,
                      backgroundColor:colors.whiteText,
                      borderWidth:1,
                      color:colors.cardDark,
                      borderRadius:15
                      }} >10:00am</Text>
                :

                <TouchableOpacity onPress={()=>{
                  setTime("10:00am");
                  }}>
                  <Text style={{
                        textAlign:"center",
                        fontSize:18,
                        height:30,
                        width:Dimensions.get("window").width-120,
                        marginHorizontal:40,
                        marginVertical:5,
                        backgroundColor:colors.darkCard,
                        color:colors.whiteText,
                        borderRadius:15
                        }} >10:00am</Text>
                  </TouchableOpacity>
               
               
               }
            {/* <<<<<<<<<<<<<<<<<<<<<<< */}
            
            {time=='11:00am - 12:00pm' ?
                <Text style={{
                      textAlign:"center",
                      fontSize:18,
                      height:30,
                      width:Dimensions.get("window").width-120,
                      marginHorizontal:40,
                      marginVertical:5,
                      backgroundColor:colors.whiteText,
                      borderWidth:1,
                      color:colors.cardDark,
                      borderRadius:15
                      }} >11:00am</Text>
                :

                <TouchableOpacity onPress={()=>{
                  setTime("11:00am");
                  }}>
                  <Text style={{
                        textAlign:"center",
                        fontSize:18,
                        height:30,
                        width:Dimensions.get("window").width-120,
                        marginHorizontal:40,
                        marginVertical:5,
                        backgroundColor:colors.darkCard,
                        color:colors.whiteText,
                        borderRadius:15
                        }} >11:00am</Text>
                  </TouchableOpacity>
               
               
               }




{time=='12:00pm' ?
                <Text style={{
                      textAlign:"center",
                      fontSize:18,
                      height:30,
                      width:Dimensions.get("window").width-120,
                      marginHorizontal:40,
                      marginVertical:5,
                      backgroundColor:colors.whiteText,
                      borderWidth:1,
                      color:colors.cardDark,
                      borderRadius:15
                      }} >12:00pm</Text>
                :

                <TouchableOpacity onPress={()=>{
                  setTime("12:00pm");
                  }}>
                  <Text style={{
                        textAlign:"center",
                        fontSize:18,
                        height:30,
                        width:Dimensions.get("window").width-120,
                        marginHorizontal:40,
                        marginVertical:5,
                        backgroundColor:colors.darkCard,
                        color:colors.whiteText,
                        borderRadius:15
                        }} >12:00pm</Text>
                  </TouchableOpacity>
               
               
               }





{time=='1:00pm' ?
                <Text style={{
                      textAlign:"center",
                      fontSize:18,
                      height:30,
                      width:Dimensions.get("window").width-120,
                      marginHorizontal:40,
                      marginVertical:5,
                      backgroundColor:colors.whiteText,
                      borderWidth:1,
                      color:colors.cardDark,
                      borderRadius:15
                      }} >1:00pm</Text>
                :

                <TouchableOpacity onPress={()=>{
                  setTime("1:00pm");
                  }}>
                  <Text style={{
                        textAlign:"center",
                        fontSize:18,
                        height:30,
                        width:Dimensions.get("window").width-120,
                        marginHorizontal:40,
                        marginVertical:5,
                        backgroundColor:colors.darkCard,
                        color:colors.whiteText,
                        borderRadius:15
                        }} >1:00pm</Text>
                  </TouchableOpacity>
               
               
               }





{time=='2:00pm' ?
                <Text style={{
                      textAlign:"center",
                      fontSize:18,
                      height:30,
                      width:Dimensions.get("window").width-120,
                      marginHorizontal:40,
                      marginVertical:5,
                      backgroundColor:colors.whiteText,
                      borderWidth:1,
                      color:colors.cardDark,
                      borderRadius:15
                      }} >2:00pm</Text>
                :

                <TouchableOpacity onPress={()=>{
                  setTime("2:00pm");
                  }}>
                  <Text style={{
                        textAlign:"center",
                        fontSize:18,
                        height:30,
                        width:Dimensions.get("window").width-120,
                        marginHorizontal:40,
                        marginVertical:5,
                        backgroundColor:colors.darkCard,
                        color:colors.whiteText,
                        borderRadius:15
                        }} >2:00pm</Text>
                  </TouchableOpacity>
               
               
               }






{time=='3:00pm' ?
                <Text style={{
                      textAlign:"center",
                      fontSize:18,
                      height:30,
                      width:Dimensions.get("window").width-120,
                      marginHorizontal:40,
                      marginVertical:5,
                      backgroundColor:colors.whiteText,
                      borderWidth:1,
                      color:colors.cardDark,
                      borderRadius:15
                      }} >3:00pm</Text>
                :

                <TouchableOpacity onPress={()=>{
                  setTime("3:00pm");
                  }}>
                  <Text style={{
                        textAlign:"center",
                        fontSize:18,
                        height:30,
                        width:Dimensions.get("window").width-120,
                        marginHorizontal:40,
                        marginVertical:5,
                        backgroundColor:colors.darkCard,
                        color:colors.whiteText,
                        borderRadius:15
                        }} >3:00pm</Text>
                  </TouchableOpacity>
               
               
               }





{time=='4:00pm' ?
                <Text style={{
                      textAlign:"center",
                      fontSize:18,
                      height:30,
                      width:Dimensions.get("window").width-120,
                      marginHorizontal:40,
                      marginVertical:5,
                      backgroundColor:colors.whiteText,
                      borderWidth:1,
                      color:colors.cardDark,
                      borderRadius:15
                      }} >4:00pm</Text>
                :

                <TouchableOpacity onPress={()=>{
                  setTime("4:00pm");
                  }}>
                  <Text style={{
                        textAlign:"center",
                        fontSize:18,
                        height:30,
                        width:Dimensions.get("window").width-120,
                        marginHorizontal:40,
                        marginVertical:5,
                        backgroundColor:colors.darkCard,
                        color:colors.whiteText,
                        borderRadius:15
                        }} >4:00pm</Text>
                  </TouchableOpacity>
               
               
               }





{time=='5:00pm' ?
                <Text style={{
                      textAlign:"center",
                      fontSize:18,
                      height:30,
                      width:Dimensions.get("window").width-120,
                      marginHorizontal:40,
                      marginVertical:5,
                      backgroundColor:colors.whiteText,
                      borderWidth:1,
                      color:colors.cardDark,
                      borderRadius:15
                      }} >5:00pm</Text>
                :

                <TouchableOpacity onPress={()=>{
                  setTime("5:00pm");
                  }}>
                  <Text style={{
                        textAlign:"center",
                        fontSize:18,
                        height:30,
                        width:Dimensions.get("window").width-120,
                        marginHorizontal:40,
                        marginVertical:5,
                        backgroundColor:colors.darkCard,
                        color:colors.whiteText,
                        borderRadius:15
                        }} >5:00pm</Text>
                  </TouchableOpacity>
               
               
               }





{time=='6:00pm' ?
                <Text style={{
                      textAlign:"center",
                      fontSize:18,
                      height:30,
                      width:Dimensions.get("window").width-120,
                      marginHorizontal:40,
                      marginVertical:5,
                      backgroundColor:colors.whiteText,
                      borderWidth:1,
                      color:colors.cardDark,
                      borderRadius:15
                      }} >6:00pm</Text>
                :

                <TouchableOpacity onPress={()=>{
                  setTime("6:00pm");
                  }}>
                  <Text style={{
                        textAlign:"center",
                        fontSize:18,
                        height:30,
                        width:Dimensions.get("window").width-120,
                        marginHorizontal:40,
                        marginVertical:5,
                        backgroundColor:colors.darkCard,
                        color:colors.whiteText,
                        borderRadius:15
                        }} >6:00pm</Text>
                  </TouchableOpacity>
               
               
               }





{time=='7:00pm' ?
                <Text style={{
                      textAlign:"center",
                      fontSize:18,
                      height:30,
                      width:Dimensions.get("window").width-120,
                      marginHorizontal:40,
                      marginVertical:5,
                      backgroundColor:colors.whiteText,
                      borderWidth:1,
                      color:colors.cardDark,
                      borderRadius:15
                      }} >7:00pm</Text>
                :

                <TouchableOpacity onPress={()=>{
                  setTime("7:00pm");
                  }}>
                  <Text style={{
                        textAlign:"center",
                        fontSize:18,
                        height:30,
                        width:Dimensions.get("window").width-120,
                        marginHorizontal:40,
                        marginVertical:5,
                        backgroundColor:colors.darkCard,
                        color:colors.whiteText,
                        borderRadius:15
                        }} >7:00pm</Text>
                  </TouchableOpacity>
               
               
               }





{time=='8:00pm' ?
                <Text style={{
                      textAlign:"center",
                      fontSize:18,
                      height:30,
                      width:Dimensions.get("window").width-120,
                      marginHorizontal:40,
                      marginVertical:5,
                      backgroundColor:colors.whiteText,
                      borderWidth:1,
                      color:colors.cardDark,
                      borderRadius:15
                      }} >8:00pm</Text>
                :

                <TouchableOpacity onPress={()=>{
                  setTime("8:00pm");
                  }}>
                  <Text style={{
                        textAlign:"center",
                        fontSize:18,
                        height:30,
                        width:Dimensions.get("window").width-120,
                        marginHorizontal:40,
                        marginVertical:5,
                        backgroundColor:colors.darkCard,
                        color:colors.whiteText,
                        borderRadius:15
                        }} >8:00pm</Text>
                  </TouchableOpacity>
               
               
               }






{time=='9:00pm' ?
                <Text style={{
                      textAlign:"center",
                      fontSize:18,
                      height:30,
                      width:Dimensions.get("window").width-120,
                      marginHorizontal:40,
                      marginVertical:5,
                      backgroundColor:colors.whiteText,
                      borderWidth:1,
                      color:colors.cardDark,
                      borderRadius:15
                      }} >9:00pm</Text>
                :

                <TouchableOpacity onPress={()=>{
                  setTime("9:00pm");
                  }}>
                  <Text style={{
                        textAlign:"center",
                        fontSize:18,
                        height:30,
                        width:Dimensions.get("window").width-120,
                        marginHorizontal:40,
                        marginVertical:5,
                        backgroundColor:colors.darkCard,
                        color:colors.whiteText,
                        borderRadius:15
                        }} >9:00pm</Text>
                  </TouchableOpacity>
               
               
               }




{time=='10:00pm' ?
                <Text style={{
                      textAlign:"center",
                      fontSize:18,
                      height:30,
                      width:Dimensions.get("window").width-120,
                      marginHorizontal:40,
                      marginVertical:5,
                      backgroundColor:colors.whiteText,
                      borderWidth:1,
                      color:colors.cardDark,
                      borderRadius:15
                      }} >10:00pm</Text>
                :

                <TouchableOpacity onPress={()=>{
                  setTime("10:00pm");
                  }}>
                  <Text style={{
                        textAlign:"center",
                        fontSize:18,
                        height:30,
                        width:Dimensions.get("window").width-120,
                        marginHorizontal:40,
                        marginVertical:5,
                        backgroundColor:colors.darkCard,
                        color:colors.whiteText,
                        borderRadius:15
                        }} >10:00pm</Text>
                  </TouchableOpacity>
               
               
               }





{time=='11:00pm' ?
                <Text style={{
                      textAlign:"center",
                      fontSize:18,
                      height:30,
                      width:Dimensions.get("window").width-120,
                      marginHorizontal:40,
                      marginVertical:5,
                      backgroundColor:colors.whiteText,
                      borderWidth:1,
                      color:colors.cardDark,
                      borderRadius:15
                      }} >11:00pm</Text>
                :

                <TouchableOpacity onPress={()=>{
                  setTime("11:00pm");
                  }}>
                  <Text style={{
                        textAlign:"center",
                        fontSize:18,
                        height:30,
                        width:Dimensions.get("window").width-120,
                        marginHorizontal:40,
                        marginVertical:5,
                        backgroundColor:colors.darkCard,
                        color:colors.whiteText,
                        borderRadius:15
                        }} >11:00pm</Text>
                  </TouchableOpacity>
               
               
               }





{time=='12:00am' ?
                <Text style={{
                      textAlign:"center",
                      fontSize:18,
                      height:30,
                      width:Dimensions.get("window").width-120,
                      marginHorizontal:40,
                      marginVertical:5,
                      backgroundColor:colors.whiteText,
                      borderWidth:1,
                      color:colors.cardDark,
                      borderRadius:15
                      }} >12:00am</Text>
                :

                <TouchableOpacity onPress={()=>{
                  setTime("12:00am");
                  }}>
                  <Text style={{
                        textAlign:"center",
                        fontSize:18,
                        height:30,
                        width:Dimensions.get("window").width-120,
                        marginHorizontal:40,
                        marginVertical:5,
                        backgroundColor:colors.darkCard,
                        color:colors.whiteText,
                        borderRadius:15
                        }} >12:00am</Text>
                  </TouchableOpacity>
               
               
               }





{time=='1:00am' ?
                <Text style={{
                      textAlign:"center",
                      fontSize:18,
                      height:30,
                      width:Dimensions.get("window").width-120,
                      marginHorizontal:40,
                      marginVertical:5,
                      backgroundColor:colors.whiteText,
                      borderWidth:1,
                      color:colors.cardDark,
                      borderRadius:15
                      }} >1:00am</Text>
                :

                <TouchableOpacity onPress={()=>{
                  setTime("1:00am");
                  }}>
                  <Text style={{
                        textAlign:"center",
                        fontSize:18,
                        height:30,
                        width:Dimensions.get("window").width-120,
                        marginHorizontal:40,
                        marginVertical:5,
                        backgroundColor:colors.darkCard,
                        color:colors.whiteText,
                        borderRadius:15
                        }} >1:00am</Text>
                  </TouchableOpacity>
               
               
               }


{time=='2:00am' ?
                <Text style={{
                      textAlign:"center",
                      fontSize:18,
                      height:30,
                      width:Dimensions.get("window").width-120,
                      marginHorizontal:40,
                      marginVertical:5,
                      backgroundColor:colors.whiteText,
                      borderWidth:1,
                      color:colors.cardDark,
                      borderRadius:15
                      }} >2:00am</Text>
                :

                <TouchableOpacity onPress={()=>{
                  setTime("2:00am");
                  }}>
                  <Text style={{
                        textAlign:"center",
                        fontSize:18,
                        height:30,
                        width:Dimensions.get("window").width-120,
                        marginHorizontal:40,
                        marginVertical:5,
                        backgroundColor:colors.darkCard,
                        color:colors.whiteText,
                        borderRadius:15
                        }} >2:00am</Text>
                  </TouchableOpacity>
               
               
               }



{time=='3:00am' ?
                <Text style={{
                      textAlign:"center",
                      fontSize:18,
                      height:30,
                      width:Dimensions.get("window").width-120,
                      marginHorizontal:40,
                      marginVertical:5,
                      backgroundColor:colors.whiteText,
                      borderWidth:1,
                      color:colors.cardDark,
                      borderRadius:15
                      }} >3:00am</Text>
                :

                <TouchableOpacity onPress={()=>{
                  setTime("3:00am");
                  }}>
                  <Text style={{
                        textAlign:"center",
                        fontSize:18,
                        height:30,
                        width:Dimensions.get("window").width-120,
                        marginHorizontal:40,
                        marginVertical:5,
                        backgroundColor:colors.darkCard,
                        color:colors.whiteText,
                        borderRadius:15
                        }} >3:00am</Text>
                  </TouchableOpacity>
               
               
               }




{time=='4:00am' ?
                <Text style={{
                      textAlign:"center",
                      fontSize:18,
                      height:30,
                      width:Dimensions.get("window").width-120,
                      marginHorizontal:40,
                      marginVertical:5,
                      backgroundColor:colors.whiteText,
                      borderWidth:1,
                      color:colors.cardDark,
                      borderRadius:15
                      }} >4:00am</Text>
                :

                <TouchableOpacity onPress={()=>{
                  setTime("4:00am");
                  }}>
                  <Text style={{
                        textAlign:"center",
                        fontSize:18,
                        height:30,
                        width:Dimensions.get("window").width-120,
                        marginHorizontal:40,
                        marginVertical:5,
                        backgroundColor:colors.darkCard,
                        color:colors.whiteText,
                        borderRadius:15
                        }} >4:00am</Text>
                  </TouchableOpacity>
               
               
               }




{time=='5:00am' ?
                <Text style={{
                      textAlign:"center",
                      fontSize:18,
                      height:30,
                      width:Dimensions.get("window").width-120,
                      marginHorizontal:40,
                      marginVertical:5,
                      backgroundColor:colors.whiteText,
                      borderWidth:1,
                      color:colors.cardDark,
                      borderRadius:15
                      }} >5:00am</Text>
                :

                <TouchableOpacity onPress={()=>{
                  setTime("5:00am");
                  }}>
                  <Text style={{
                        textAlign:"center",
                        fontSize:18,
                        height:30,
                        width:Dimensions.get("window").width-120,
                        marginHorizontal:40,
                        marginVertical:5,
                        backgroundColor:colors.darkCard,
                        color:colors.whiteText,
                        borderRadius:15
                        }} >5:00am</Text>
                  </TouchableOpacity>
               
               
               }


{time=='6:00am' ?
                <Text style={{
                      textAlign:"center",
                      fontSize:18,
                      height:30,
                      width:Dimensions.get("window").width-120,
                      marginHorizontal:40,
                      marginVertical:5,
                      backgroundColor:colors.whiteText,
                      borderWidth:1,
                      color:colors.cardDark,
                      borderRadius:15
                      }} >6:00am</Text>
                :

                <TouchableOpacity onPress={()=>{
                  setTime("6:00am");
                  }}>
                  <Text style={{
                        textAlign:"center",
                        fontSize:18,
                        height:30,
                        width:Dimensions.get("window").width-120,
                        marginHorizontal:40,
                        marginVertical:5,
                        backgroundColor:colors.darkCard,
                        color:colors.whiteText,
                        borderRadius:15
                        }} >6:00am</Text>
                  </TouchableOpacity>
               
               
               }





{time=='7:00am' ?
                <Text style={{
                      textAlign:"center",
                      fontSize:18,
                      height:30,
                      width:Dimensions.get("window").width-120,
                      marginHorizontal:40,
                      marginVertical:5,
                      backgroundColor:colors.whiteText,
                      borderWidth:1,
                      color:colors.cardDark,
                      borderRadius:15
                      }} >7:00am</Text>
                :

                <TouchableOpacity onPress={()=>{
                  setTime("7:00am");
                  }}>
                  <Text style={{
                        textAlign:"center",
                        fontSize:18,
                        height:30,
                        width:Dimensions.get("window").width-120,
                        marginHorizontal:40,
                        marginVertical:5,
                        backgroundColor:colors.darkCard,
                        color:colors.whiteText,
                        borderRadius:15
                        }} >7:00am</Text>
                  </TouchableOpacity>
               
               
               }
    
  {/* <View><Text>{time}</Text></View> */}
  
        

      </ScrollView>
      <View style={{flexDirection:"row"}}>
      <Button
          mode="outlined"
          loading={loading}
          

          onPress={()=>{
                setLoading(true);
                if (day == "") {
                                    
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
                        {cancelable: false}  
                    )
                  setLoading(false);
                } else if(month=="") {
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
                        {cancelable: false}  
                    )
                  setLoading(false);
                } else if(year==""){
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
                        {cancelable: false}  
                    )        
                  setLoading(false);
                }else{
            console.log(`${day}/${month}/${year}`);
            driverBooking( date,time)}}
                }
          style={{flex:1}}
          >
              
           Add
        </Button>
        <Button
          mode="contained"
          style={{flex:1}}
          onPress={()=>{
            navigation.navigate("ViewBooking");
      }}          >
            View
        </Button>
        </View>
      </View>
 
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  
});

export default withTheme(withNavigation(BookingScreen))