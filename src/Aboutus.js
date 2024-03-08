import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";


const Colors={
    theme:"#fdb4ba",
    white:"#fff",
    greyish:"#8E8A8A",
    black:"#000000",
    blue:"#0000FF"
    };

const Aboutus=()=>{
return(
    <ScrollView>
    <View style={{flex:1, backgroundColor:Colors.theme}}>
        <View style={{flex:1,backgroundColor:Colors.white,marginBottom:90, 
  marginLeft:25, marginRight:25, marginTop:90,
    alignItems:'center',paddingBottom:50,
    paddingLeft:15,paddingRight:15}}>
    <Text style={{
      fontSize:50, color:Colors.black, alignSelf:'center', marginTop:40,marginBottom:70, fontWeight:'900'
    }}>About Us</Text>

<Text 
style={{color:Colors.black,fontSize:25,textAlign:'center'}}>
    Welcome to our app
    </Text>
<Text 
style={{color:Colors.black,fontSize:25,textAlign:'center',fontWeight:'800',fontStyle:'italic'}}>
    'Glamour Point'
    </Text>

<Text 
style={{color:Colors.black,fontSize:30,textAlign:'center',fontWeight:'900',marginTop:30,marginBottom:10}}>
    Our Mission
    </Text>
<Text 
style={{color:Colors.black,fontSize:25,textAlign:'center'}}>
    Glamour Point is dedicated to providing users with good services.
    This can include features such as:
    </Text>
    <Text 
style={{color:Colors.black,fontSize:22,textAlign:'center',fontWeight:'500',marginTop:20,marginBottom:10}}>
    Appointment Booking:
    </Text>
    <Text 
style={{color:Colors.black,fontSize:20,textAlign:'center'}}>
    Allow users to schedule appointments conveniently from their smartphones, 
    eliminating the need for phone calls or in-person visits.
    </Text>
    <Text 
style={{color:Colors.black,fontSize:22,textAlign:'center',fontWeight:'500',marginTop:20,marginBottom:10}}>
    Service Catalog:
    </Text>
    <Text 
style={{color:Colors.black,fontSize:20,textAlign:'center'}}>
    Display a comprehensive list of services offered by the salon,
     along with descriptions, prices, and availability.
    </Text>
    <Text 
style={{color:Colors.black,fontSize:22,textAlign:'center',fontWeight:'500',marginTop:20,marginBottom:10}}>
    Stylist Profiles:
    </Text>
    <Text 
style={{color:Colors.black,fontSize:20,textAlign:'center'}}>
   Provide profiles for each stylist, showcasing their expertise, experience, and previous work,
    helping users make informed decisions when booking appointments.
    </Text>
    <Text 
style={{color:Colors.black,fontSize:22,textAlign:'center',fontWeight:'500',marginTop:20,marginBottom:10}}>
   Reviews and Ratings:
    </Text>
    <Text 
style={{color:Colors.black,fontSize:20,textAlign:'center'}}>
   Allow customers to leave reviews and ratings for services and stylists, 
   helping others make informed decisions and maintaining transparency.
    </Text>
    <Text 
style={{color:Colors.black,fontSize:22,textAlign:'center',fontWeight:'500',marginTop:20,marginBottom:10}}>
   Push Notifications:
    </Text>
    <Text 
style={{color:Colors.black,fontSize:20,textAlign:'center'}}>
   Send reminders for upcoming appointments, 
   promotions, or special offers to keep customers engaged and informed.
    </Text>
    <Text 
style={{color:Colors.black,fontSize:22,textAlign:'center',fontWeight:'500',marginTop:20,marginBottom:10}}>
   Online Payments:
    </Text>
    <Text 
style={{color:Colors.black,fontSize:20,textAlign:'center'}}>
    Enable secure online payments for services, 
    reducing the hassle of handling cash or cards during salon visits.
    </Text>
    <Text 
style={{color:Colors.black,fontSize:22,textAlign:'center',fontWeight:'500',marginTop:20,marginBottom:10}}>
   Virtual Consultations:
    </Text>
    <Text 
style={{color:Colors.black,fontSize:20,textAlign:'center'}}>
    Offer virtual consultations for 
    clients who may have questions or want advice before booking appointments.
    </Text>
    <Text 
style={{color:Colors.black,fontSize:22,textAlign:'center',fontWeight:'500',marginTop:20,marginBottom:10}}>
   Loyalty Program:
    </Text>
    <Text 
style={{color:Colors.black,fontSize:20,textAlign:'center'}}>
    Implement a loyalty program to reward frequent customers with discounts, 
    special offers, or exclusive perks, encouraging customer retention.
    </Text>
    <Text 
style={{color:Colors.black,fontSize:25,textAlign:'center',marginTop:10}}>
   Overall, the goal of a salon app is to provide a seamless and convenient experience for customers, 
   enhance salon operations, and increase customer satisfaction and loyalty.
    </Text>

    <Text 
style={{color:Colors.black,fontSize:30,textAlign:'center',fontWeight:'900',marginTop:30,marginBottom:10}}>
    Our Team
    </Text>
    <Text 
style={{color:Colors.black,fontSize:25,textAlign:'center'}}>
    Alisha Verma
    </Text>
    <Text 
style={{color:Colors.black,fontSize:25,textAlign:'center'}}>
    Bhanu Pratap Shukla
    </Text>

    <Text 
style={{color:Colors.black,fontSize:30,textAlign:'center',fontWeight:'900',marginTop:30,marginBottom:10}}>
    Contact Us
    </Text>
    <Text 
style={{color:Colors.black,fontSize:25,textAlign:'center'}}>
    Have any questions or feedback? we'd love to hear from you!!
    </Text>
    <Text 
style={{color:Colors.black,fontSize:20,textAlign:'center',marginTop:15}}>
    Email: alishav194@gmail.com
    </Text>
    <Text 
style={{color:Colors.black,fontSize:20,textAlign:'center',marginTop:5}}>
    Phone Number: 870767xxxx
    </Text>
    <Text 
style={{color:Colors.black,fontSize:20,textAlign:'center',marginTop:5}}>
   Address: Usmanpur, Station Road, Chunar, Mirzapur, Uttar Pradesh, 231304
    </Text>

    <Text 
style={{color:Colors.black,fontSize:25,textAlign:'center',marginTop:20}}>
    Thank you for using
    </Text>
    <Text 
style={{color:Colors.black,fontSize:25,textAlign:'center',fontWeight:'800',fontStyle:'italic'}}>
    'Glamour Point'
    </Text>

    </View>
    </View>
    </ScrollView>
)
}
export default Aboutus;