import React, { useEffect, useState, useCallback } from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  Linking,
} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Shops() {

  const data = [
    {
      label: (
        <View style={styles.topButton}>
          <View style={styles.left}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                marginTop: 5,
              }}>
              YEARLY
            </Text>
          </View>
          <View style={styles.inTopButtonRigh}>
            <Text style={{ fontSize: 26, color: 'white' }}>$24.00</Text>
            <Text style={styles.dash}>$2.08/month</Text>
          </View>
        </View>
      ),
    },
    {
      label: (
        <View style={styles.topButton}>
          <View style={styles.left}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                marginTop: 5,
              }}>
              MONTHLY
            </Text>
          </View>
          <View style={styles.inTopButtonRigh}>
            <Text style={{ fontSize: 26, color: 'white' }}>$2.49</Text>
          </View>
        </View>
      ),
    },
  ];
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.text}>TLP+</Text>
          <Text style={styles.secondText}>THE FULL LAUNCH PAD PLATFORM</Text>
          <Text style={styles.three}>UNLIMITED LAUNCH CALANDER</Text>
          <View>
            <Text style={styles.dash}>- ALL History Unlocked</Text>
            <Text style={styles.dash}>- Detailed Mission Briedfings</Text>
          </View>
          <Text style={styles.three}>UNLOCK ALL CONTENT</Text>
          <View>
            <Text style={styles.dash}>- DATABASES</Text>
            <Text style={styles.dash}>- Dashboard</Text>
            <Text style={styles.dash}>- Live Trackers</Text>
          </View>
          <Text style={styles.three}>COLLECT DIGITAL MISSION PATCHES</Text>
          <Text style={styles.dash}>- 5 Patch per day</Text>
        </View>
        <View style={styles.buttons}>
          <RadioButtonRN
            data={data}
            selectedBtn={(e) => console.log(e)}
            activeColor="green"
            boxDeactiveBgColor="black"
            boxActiveBgColor="green"
            // animationTypes=
            duration={500}
            textStyle={{ fontSize: 20, color: 'white' }}
            icon={
              // <Icon name="circle-dot" size={25} color="white" />
              <Ionicons
                name={'radio-button-on-outline'}
                size={25}
                color={'white'}
              />
            }></RadioButtonRN>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.subscribeButton}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>
              SUBSCRIBE
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.restorePurchasesView}>
          <TouchableOpacity style={styles.restoreButton}>
            <Text style={{ fontSize: 15, color: 'white' }}>
              Restore Purchases
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.termsTextView}>
          <View style={styles.termsView}>
            <Text
              style={{
                fontSize: 15,
                color: 'white',
                justifyContent: 'space-between',
                textAlign: 'center',
              }}>
              By subscribing, you agree to our{' '}
              <Text
                style={{ color: 'white', fontWeight: 'bold' }}
                onPress={() => Linking.openURL('https://tlpnetwork.com')}>
                Terms of Service
              </Text>{' '}
              and confirm that you have read and understood our{' '}
              <Text
                style={{ color: 'white', fontWeight: 'bold' }}
                onPress={() => Linking.openURL('https://tlpnetwork.com')}>
                Privacy Policy
              </Text>
              . Your Apple account will be charged $25.99 each year.
              Subscription automatically renews unless auto-renew is turned off
              at least 24 hours before the end of current period. You can manage
              your subscription and turn off auto-renew from your Apple account
              settings.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  termsTextView: {
    width: '100%',
    // backgroundColor: 'purple',
    // height: 100,
    // justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  termsView: {
    width: '97%',
    // backgroundColor: 'blue',
    // height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  restoreButton: {
    // width: '70%',
    // flex:1,
    // height: 50,
    marginBottom: 15,
    // backgroundColor: 'red',
    borderColor: 'red',
    borderRadius: 20,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  restorePurchasesView: {
    width: '100%',
    // backgroundColor: 'green',
    // height: 100,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    width: '100%',
    // backgroundColor: 'yellow',
    height: 65,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  subscribeButton: {
    width: '70%',
    // flex:1,
    height: 50,
    backgroundColor: 'red',
    borderColor: 'red',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    // backgroundColor: 'yellow',
    width: '50%',
  },
  inTopButtonRigh: {
    // backgroundColor: 'blue',
    borderRadius: 12,
    // marginLeft:'15%',
    justifyContent: 'center',
    // marginHorizontal:100,
    // flex:1,
    //  width:'50%',
  },
  topButton: {
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  buttons: {
    // backgroundColor: 'red',
    height: 195,
    width: '100%',
    marginTop: 30,
  },
  secondText: {
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  three: {
    fontSize: 18,
    // fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'white',
    marginTop: 25,
  },
  dash: {
    fontSize: 15,
    // fontStyle: 'italic',
    // fontWeight: 'bold',
    color: 'white',
    //  marginBottom:30
  },
  textView: {
    width: '100%',
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    // flex:1
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 70,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  text: {
    fontSize: 50,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'white',
  },
});
