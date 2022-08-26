import React, { useState } from 'react';

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
import nasa from './../../assets/spaceCompanies/nasa_red.png';
import CountDown from 'react-native-countdown-component';

import astronaut from './../../assets/astronaut2.jpg';

import flag from './../../assets/flag.png';
import spacex from './../../assets/spacex.png';
import axiom from './../../assets/axiom.png';
import sattelite1 from './../../assets/sattelite1.png';
import sattelite2 from './../../assets/sattelite2.png';
import { Ionicons } from '@expo/vector-icons';
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
export default function LaunchDetail(props) {
  //const  = route.params;
 const{launchdetail,timedetail}=props.route.params
  const [fetchData, setFetchedData] = useState(
    'This text will be fetched from APIs. This text will be fetched from APIs. This text will be fetched from APIs. This text will be fetched from APIs. This text will be fetched from APIs. This text will be fetched from APIs. This text will be fetched from APIs. This text will be fetched from APIs. This text will be fetched from APIs. This text will be fetched from APIs. This text will be fetched from APIs. This text will be fetched from APIs. This text will be fetched from APIs. This text will be fetched from APIs. This text will be fetched from APIs. This text will be fetched from APIs.'
  );
  const back = '<';
  const crew=[1,2,3,4,5,56,6,6]
  return (
    <View style={styles.container}>
      <View style={styles.watchButtonParentView}>
        <TouchableOpacity
          style={styles.backbuttons}
          onPress={() =>
            props.navigation.navigate('UpComingLaunches', { page: 'upcoming' })
          }>
                  <Ionicons name="arrow-back" size={35} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.watchbuttons}
          onPress={() =>
            Linking.openURL(launchdetail.stream_url)
          }>
          <Text style={styles.watch}>WATCH</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.pictureView}>
          <Image source={nasa} style={styles.astronautImage} />
        </View>
        <View style={styles.detailView}>
          <Text style={styles.titleTxt}>{launchdetail.name&&launchdetail.name}</Text>
          <Text style={styles.date}>{new Date(launchdetail.net).getFullYear()} {monthNames[new Date(launchdetail.net).getMonth()].toUpperCase()} {new Date(launchdetail.net).getDate()}</Text>
          <CountDown
            until={timedetail * 24 * 60 * 60}
            digitStyle={{ backgroundColor: 'black' }}
            digitTxtStyle={{ color: 'white', fontSize: 25 }}
            separatorStyle={{ color: 'white' }}
            timeToShow={['D', 'H', 'M', 'S']}
            timeLabels={{ d: null, h: null, m: null, s: null }}
            showSeparator
            size={17}
          />
          <Text style={styles.titleHeading}>Launch Site:</Text>
          <Text style={styles.titleText}>{launchdetail.pad.location.name&&launchdetail.pad.location.name}</Text>
          <Text style={styles.titleHeading}>Launch Pad:</Text>
          <Text style={styles.titleText}>{launchdetail.pad.name&&launchdetail.pad.name}</Text>
        </View>
          
          <View>
          {/*card1*/}
            <View
            style={styles.outermain}
            >
                <View
                style={styles.inner1}
                >
                  <Text 
                  style={styles.inner1text1}
                  >Vehicle</Text>
                  <Text
                   style={styles.inner1text2}
                  >Falcon 9</Text>
                  <View
                  style={styles.innertextparrent}
                  >
                    <Text
                    style={styles.innerlefttext}
                    >Block</Text>
                    <Text
                    style={styles.innerrighttext}
                    >5</Text>
                  </View>
                  <View
                  style={styles.innertextparrent}
                  >
                    <Text
                    style={styles.innerlefttext}
                    >Serial</Text>
                    <Text
                    style={styles.innerrighttext}
                    >B1509</Text>
                  </View>
                </View>
                <View style={styles.inner2}>
                    <View style={{
                  backgroundColor:"#191D22",
                  padding:10,
                }}>
                    <View
                  style={styles.innertextparrent}
                  >
                    <Text
                    style={styles.innerlefttext}
                    >Flight #</Text>
                    <Text
                    style={styles.innerrighttext}
                    >2</Text>
                  </View>
                  <View
                  style={styles.innertextparrent}
                  >
                    <Text
                    style={styles.innerlefttext}
                    >Reused</Text>
                    <Text
                    style={styles.innerrighttext}
                    >Yes</Text>
                  </View>
                </View>
                </View>
            </View>
            {/*card1ends*/}
          {/*card2*/}
          <View
            style={styles.outermain}
            >
                <View
                style={styles.inner1}
                >
                  <Text 
                  style={styles.inner1text1}
                  >payload</Text>
                  <Text
                   style={styles.inner1text2}
                  >CRS-20</Text>
                  <View
                  style={styles.innertextparrent}
                  >
                    <Text
                    style={styles.innerlefttext}
                    >Customer</Text>
                    <Text
                    style={styles.innerrighttext}
                    >NASA (CSR)</Text>
                  </View>
                  <View
                  style={styles.innertextparrent}
                  >
                    <Text
                    style={styles.innerlefttext}
                    >Country</Text>
                    <Text
                    style={styles.innerrighttext}
                    >US</Text>
                  </View>
                </View>
                <View style={styles.inner2}>
                    <View style={{
                  backgroundColor:"#191D22",
                  padding:10,
                }}>
                    <View
                  style={styles.innertextparrent}
                  >
                    <Text
                    style={styles.innerlefttext}
                    >Mass (Kg)</Text>
                    <Text
                    style={styles.innerrighttext}
                    >2K</Text>
                  </View>
                  <View
                  style={styles.innertextparrent}
                  >
                    <Text
                    style={styles.innerlefttext}
                    >Orbit</Text>
                    <Text
                    style={styles.innerrighttext}
                    >ISS</Text>
                  </View>
                </View>
                </View>
            </View>
            {/*card2ends*/}
          {/*card3*/}
          <View
            style={styles.outermain}
            >
                <View
                style={styles.inner1}
                >
                  <Text 
                  style={styles.inner1text1}
                  >Landing</Text>
                  <Text
                   style={styles.inner1text2}
                  >LZ-1</Text>
                  <View
                  style={styles.innertextparrent}
                  >
                    <Text
                    style={styles.innerlefttext}
                    >Type</Text>
                    <Text
                    style={styles.innerrighttext}
                    >RTLS</Text>
                  </View>
                  
                </View>
                <View style={styles.inner2}>
                    <View style={{
                  backgroundColor:"#191D22",
                  padding:10,
                }}>
                    <View
                  style={styles.innertextparrent}
                  >
                    <Text
                    style={styles.innerlefttext}
                    >Attempt</Text>
                    <Text
                    style={styles.innerrighttext}
                    >Yes</Text>
                  </View>
                  <View
                  style={styles.innertextparrent}
                  >
                    <Text
                    style={styles.innerlefttext}
                    >Success</Text>
                    <Text
                    style={styles.innerrighttext}
                    >Yes</Text>
                  </View>
                </View>
                </View>
            </View>
            {/*card3ends*/}
          
          </View>

        <Text style={styles.date}> MISSION DETAILS:</Text>
        <View style={styles.misisionDetailTextView}>
          <ScrollView>
            <Text style={styles.data}>{launchdetail?.mission?.description&&launchdetail.mission.description}</Text>
          </ScrollView>
        </View>

                {/**scroll crew */}
                <Text style={[styles.date,{marginTop:10}]}>CREW</Text>
                <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} horizontal={true}>
                  <View style={{display:"flex",flexDirection:"row",paddingVertical:10}}>
                  {
                    crew.map((item,i)=>(
                <TouchableOpacity key={i} style={{marginBottom:5,marginHorizontal:5,borderRadius:10}}>
                    <View style={{backgroundColor:"grey",width:150,borderRadius:10}}>
                      <Image resizeMode='cover' style={{width:"100%",height:130,borderTopRightRadius:10,borderTopLeftRadius:10}} source={astronaut}></Image>
                    <View style={{display:"flex",flexDirection:"row",padding:5,justifyContent:"space-between"}}>
                      <View style={{width:"15%"}}>
                          <Image style={{height:25,width:25}} resizeMode={"cover"} source={flag}></Image>
                      </View>
                      <View style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"70%"}}>
                          <Text>#154</Text>
                          <Text style={{fontWeight:"500",textAlign:"center"}}>Scientist Name</Text>
                      </View>
                      <View style={{display:"flex",flexDirection:"column",width:"15%"}}>
                      <Image style={{height:25,width:25}} resizeMode={"cover"} source={sattelite1}></Image>
                      <Image style={{height:25,width:25}} resizeMode={"cover"} source={sattelite2}></Image>
                      </View>
                    </View>
                    <View style={{marginBottom:2,borderWidth:.8,width:"80%",marginHorizontal:"10%",borderColor:"black"}}></View>
                    <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                      <View style={{ display:"flex",flexDirection:"row"}}>
                        <Text style={{marginRight:5}}>Days in</Text>
                        <Text>52</Text>
                      </View>
                    </View>
                    </View>
                  </TouchableOpacity>

                    ))
                  }
                  
                  </View>
                </ScrollView>
                {/**scroll crew end*/}

        <View style={[styles.parentRowView, { marginTop: 12 }]}>
          <View style={styles.singleRowView}>
            <Text style={styles.date}> PAYLOAD:</Text>
            <View style={styles.misisionDetailTextViewRow}>
              <ScrollView>
                <Text style={styles.data}>{fetchData}</Text>
              </ScrollView>
            </View>
          </View>
          <View style={styles.singleRowView}>
            <Text style={styles.date}> ROCKET:</Text>
            <View style={styles.misisionDetailTextViewRow}>
              <ScrollView>
                <Text style={styles.data}>{fetchData}</Text>
              </ScrollView>
            </View>
          </View>
        </View>
        <View style={[styles.parentRowView, { marginTop: 12 }]}>
          <View style={styles.singleRowView}>
            <Text style={styles.date}> AGENCIES:</Text>
            <View style={styles.misisionDetailTextViewRow}>
              <ScrollView>
                <Text style={styles.data}>{fetchData}</Text>
              </ScrollView>
            </View>
          </View>
          <View style={styles.singleRowView}>
            <Text style={styles.date}> LAUNCH PROVIDER:</Text>
            <View style={styles.misisionDetailTextViewRow}>
              <ScrollView>
                <Text style={styles.data}>{launchdetail.launch_service_provider.description}</Text>
              </ScrollView>
            </View>
          </View>
        </View>
        <Text style={[styles.date, { marginTop: 12 }]}> RELATED STORIES:</Text>
                 {[1,2,3,4,5,6].map((item,i)=>(
 <View key={i} style={{display:"flex",flexDirection:"row",flexWrap:"wrap",marginBottom:5}}>
 <View style={{padding:10,width:"100%",backgroundColor:"#191D22",display:"flex",flexDirection:"row"}}>
       <View style={{width:"30%"}}>
         <Image style={{width:"100%",height:100,borderRadius:5}} resizeMode={"cover"} source={require("../../assets/spacex.jpg")}></Image>
       </View>
       <View style={{width:"70%",display:"flex",flexDirection:"column",marginLeft:7}}>
             <Text style={{textAlign:"auto",color:"white"}}>Space x to lauch his Historic mission to the space.</Text>
             <Text style={{textAlign:"auto",color:"white",marginVertical:5,fontWeight:"bold"}}>December 12,2023</Text>
           <Text style={{textAlign:"auto",color:"white"}}>New come from api ......</Text>
       </View>
 </View>
</View>
                 ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  watchButtonParentView: {
    // backgroundColor: 'green',
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  parentRowView: {
    //backgroundColor: 'yellow',
    width: '100%',
    height: 200,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  singleRowView: {
    //backgroundColor: 'orange',
    width: '48%',
    height: '87%',
  },
  misisionDetailTextViewRow: {
    width: '100%',
    height: '100%',
    backgroundColor: 'grey',
    borderRadius: 28,
    padding: '4%',
  },
  mapView: {
    width: '100%',
    height: 80,
    backgroundColor: 'grey',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  misisionDetailTextView: {
    width: '100%',
    height: 120,
    backgroundColor: 'grey',
    borderRadius: 28,
    padding: '3%',
  },
  titleHeading: {
    fontSize: 12,
    color: 'red',
    fontWeight: 'bold',
    marginTop: 8,
  },
  titleTxt: {
    fontSize: 56,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  detailView: {
    width: '100%',
    // height: '100%',
    justifyContent: 'center',
    //backgroundColor: 'purple',
    alignItems: 'center',
    marginBottom: 28,
  },
  data: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  date: {
    fontSize: 15,
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  titleText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  scrollView: {
    //backgroundColor: 'red',
    width: '100%',
    marginTop: 5,
  },
  astronautImage: {
    width: '100%',
    height: '100%',
    // aspectRatio: 1,
    // borderTopRightRadius: 20,
    // borderTopLeftRadius: 20,

    resizeMode: 'center',
  },
  pictureView: {
    height: 50,
    width: '100%',
    // position: 'relative',
    // flex: 1,
    //backgroundColor: 'yellow',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  backSignTxt: {
    fontSize: 30,
    color: 'white',
  },
  watch: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  back: {
    marginTop: 10,
    fontSize: 10,
    color: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    //backgroundColor: 'green',
    paddingTop: '10%',
    paddingBottom: '3%',
    paddingHorizontal: '3%',
  },

  watchbuttons: {
    backgroundColor: 'red',
    height: '80%',
    width: '30%',
    flexDirection: 'row',
    // marginVertical: 3,
    // padding:'10%',
    // marginVertical:3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    // padding:40
  },
  backbuttons: {
    // backgroundColor: 'grey',
    height: 30,
    width: '30%',
    flexDirection: 'row',
    // marginVertical: 3,
    // padding:'10%',
    // marginVertical:3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 20,
    // padding:40
  },
  outermain:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:2
  },
  inner1:{
    backgroundColor:"#191D22",
    padding:10,
    width:"60%"
  },
  inner1text1:{
    color:"red",
    fontSize:15,
    fontWeight:"bold",
    textTransform:"uppercase",
    marginBottom:5
  },
  inner1text2:{
    color:"white",
    fontSize:22,
    fontWeight:"bold",
    marginBottom:5
  },
  innertextparrent:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:5
  },
  innerlefttext:{
    color:"grey",
    fontSize:16,
 
  },
  innerrighttext:{
    color:"white",
    fontSize:16,
  },
  inner2:{
    width:"40%",
    display:"flex",
    justifyContent:"flex-end"
  },
});
