import React, { useState, useEffect } from 'react';
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
  ActivityIndicator
} from 'react-native';
import flag from './../../assets/flag.png';
import spacex from './../../assets/spacex.png';
import axiom from './../../assets/axiom.png';
import sattelite1 from './../../assets/sattelite1.png';
import sattelite2 from './../../assets/sattelite2.png';
import astronaut from './../../assets/astronaut2.jpg';
import iss from './../../assets/spaceCompanies/ISS_Dashboard.png';

import CountUp from 'react-native-countup-component';

const Crew = ({navigation,ong}) => {
  const astronauts=[{
    astronaut:astronaut,
    sattelite1:sattelite1,
    sattelite2:sattelite2
  },
  {
    astronaut:astronaut,
    sattelite1:sattelite1,
    sattelite2:sattelite2
  },
  {
    astronaut:astronaut,
    sattelite1:sattelite1,
    sattelite2:sattelite2
  },
  {
    astronaut:astronaut,
    sattelite1:sattelite1,
    sattelite2:sattelite2
  },
  {
    astronaut:astronaut,
    sattelite1:sattelite1,
    sattelite2:sattelite2
  },
  {
    astronaut:astronaut,
    sattelite1:sattelite1,
    sattelite2:sattelite2
  },
  {
    astronaut:astronaut,
    sattelite1:sattelite1,
    sattelite2:sattelite2
  },
  {
    astronaut:astronaut,
    sattelite1:sattelite1,
    sattelite2:sattelite2
  },
  {
    astronaut:astronaut,
    sattelite1:sattelite1,
    sattelite2:sattelite2
  },
  {
    astronaut:astronaut,
    sattelite1:sattelite1,
    sattelite2:sattelite2
  },
  {
    astronaut:astronaut,
    sattelite1:sattelite1,
    sattelite2:sattelite2
  },
  {
    astronaut:astronaut,
    sattelite1:sattelite1,
    sattelite2:sattelite2
  }]
 
return (
    <View style={styles.crewView}>
      <ScrollView style={styles.profileView}>
        <View style={styles.rowView}>
        {
            ong[0]?.crew.map((item,i)=>{
              return(
                <>
                <TouchableOpacity key={i} style={styles.onePhotoView} disabled>
            <View style={styles.pictureView}>
              <Image source={astronaut} style={styles.astronautImage} />
            </View>
            <View style={styles.detailView}>
              <View style={styles.flagRowView}>
                <View style={styles.flagView}>
                  <Image source={flag} style={styles.logoView} />
                </View>
                <View style={styles.numView}>
                  <Text style={styles.number}>#{item.astronaut.id}</Text>
                  <Text style={styles.nameText}>{item.astronaut.name}</Text>
                </View>
                <View style={styles.companyView}>
                  <Image source={sattelite1} style={styles.rightLogoView} />
                  <Image source={sattelite2} style={styles.rightLogoView} />
                </View>
              </View>
              <View style={styles.line} />
              <View style={styles.spaceWalkView}>
                <View style={styles.spaceWalkChildView}>
                  <View style={styles.leftTextView}>
                    <Text style={styles.textInSecondRowOfDetail}>
                      DAYS IN SPACE
                    </Text>
                  </View>
                  <View style={styles.textRightView}>
                    <Text style={styles.textInSecondRowOfDetail}>{item.astronaut.days_in_space}</Text>
                  </View>
                </View>
                <View style={styles.textChildView}>
                  <View style={styles.leftTextView}>
                    <Text style={styles.textInSecondRowOfDetail}>MISSIONS</Text>
                  </View>
                  <View style={styles.textRightView}>
                    <Text style={styles.textInSecondRowOfDetail}>{item.astronaut.flights.length}</Text>
                  </View>
                </View>
                <View style={styles.textChildView}>
                  <View style={styles.leftTextView}>
                    <Text style={styles.textInSecondRowOfDetail}>
                      SPACEWALKS
                    </Text>
                  </View>
                  <View style={styles.textRightView}>
                    <Text style={styles.textInSecondRowOfDetail}>3</Text>
                  </View>
                </View>
              </View>
              <View style={styles.line} />
              <View style={styles.logosView}>
                <Image source={spacex} style={styles.logoView} />
                <Image source={axiom} style={styles.logoView} />
              </View>
            </View>
          </TouchableOpacity>
          
                </>
              )
            })
          }
       
        </View>
      </ScrollView>
    </View>
  );
};

export default function Dashboard({navigation}) {
  const [button, setButton] = useState('overview');
  const apiurl="https://api.tlpnetwork.com/iss"
  const[loading,setloading]=React.useState(false)
  //fetching dashboard info
  const[ongex,setongex]=React.useState([])
  const fetchdashboardinfo=()=>{  
  setloading(true)
    fetch(apiurl).
  then((res)=>res.json()).
  then((data)=>
  {

    setongex(data.data.ongoing_expeditions)
    setloading(false)
    //data.data.ongoing_expeditions[0].crew//start//end/name

  //console.log(data.position)
  //console.log(data.data.docking_locations) 
  //console.log(data.data.ongoing_expeditions[2].crew[2]) 
  //console.log(Object.keys(data.data.ongoing_expeditions[0].name[0]))
  //console.log(Object.keys(data.data.ongoing_expeditions[0].crew[0]))
  //console.log(Object.keys(data.data.ongoing_expeditions[0].crew[0].astronaut))
  //console.log(Object.keys(data.data.ongoing_expeditions[0].crew[0].astronaut.flights[0]))
//console.log((data.data.ongoing_expeditions[0].crew[0].astronaut.flights[0]).spacecraft)
}
  ).
  catch((e)=>setloading(false))
  }
  //ends
const controller=new AbortController()
React.useEffect(()=>{
  fetchdashboardinfo()
  return controller.abort()
  
},[])

if(loading)
  {
    return(
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
          <ActivityIndicator size="large" color={"white"}></ActivityIndicator>
      </View>
    )    
  }
  else
  {
return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <TouchableOpacity
          style={[
            styles.leftButtonTypeView,
            { backgroundColor: button === 'overview' ? 'red' : 'grey' },
          ]}
          onPress={() => {
            setButton('overview');
          }}>
          <Text style={styles.text}>overview</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.rightButtonTypeView,
            { backgroundColor: button === 'crew' ? 'red' : 'grey' },
          ]}
          onPress={() => {
            setButton('crew');
          }}>
          <Text style={styles.text}>crew</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.rightButtonTypeView,
            { backgroundColor: button === 'spacecraft' ? 'red' : 'grey' },
          ]}
          onPress={() => {
            setButton('spacecraft');
          }}>
          <Text style={styles.text}>spacecraft</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomView}>
        {button === 'overview' ? (
          <Overview ong={ongex} />
        ) : button === 'crew' ? (
          <Crew navigation={navigation} ong={ongex} />
        ) : (
          <Spacecraft  ong={ongex}/>
        )}
      </View>
    </View>
  );
        }
}
const Overview = (props) => {
  
  const {ong}=props
  const [time, setTime] = useState((new Date().getTime()/1000)-(new Date(ong[0]?.start).getTime()/1000));
  useEffect(() => {
    setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    // return () => clearInterval(interval);
  }, []);
  return (
    <View style={styles.crewView}>
      <View style={styles.sattelitepictureView}>
        <Image source={sattelite1} style={styles.sattelitetImage} />
      </View>
      <Text style={styles.missionTitle}>{ong[0]?.name}</Text>
      <Text style={styles.clockTitle}>MISSION CLOCK</Text>

      <Text style={[styles.crewAndVehicles, { marginTop: '6%' }]}>
        TOTAL CREW MEMBERS
      </Text>
      <Text style={styles.crewAndVehicles}>{ong[0]?.crew.length}</Text>
      <CountUp
        current={time}
        // max = {7452107845120}
        digitStyle={{ marginTop: '20%' }}
        digitTxtStyle={{ color: 'white', fontSize: 20, fontWeight: 'bold',  marginTop: '40%' }}
        timeLabelStyle={{
          color: 'white',
          fontSize: 12,
          fontWeight: 'bold',
          //backgroundColor: 'black',
        }}
        separatorStyle={{
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
          //backgroundColor: 'black',
        }}
        timeToShow={['D', 'H', 'M', 'S']}
        timeLabels={{ d: 'DAY', h: 'HOUR', m: 'MIN', s: 'SEC' }}
        showSeparator
        running={true}
        size={15}
      />
     
    </View>
  );
};

const Spacecraft = (props) => {
  const{ong}=props
  return (
    <View style={[styles.crewView, { flexDirection: 'row' }]}>
      <View style={styles.leftRightView}>
        <View style={[styles.cardView, { marginTop: '110%' }]}>
          <View style={styles.leftRightCardView}>
            <Image source={flag} style={styles.flagImage} />
          </View>
          <View style={styles.middleCardView}>
            <Text style={styles.missionName}>{ong[0].name}</Text>
            <Text style={styles.missionName}>Docked Date</Text>
            <Text style={styles.missionName}>{new Date(ong[0].start).toDateString()}</Text>
            <Text style={styles.missionName}>{new Date(ong[0].start).toLocaleTimeString()}</Text>
          </View>
          <View style={styles.leftRightCardView}>
            <Image source={sattelite2} style={styles.flagImage} />
          </View>
        </View>
        <View style={[styles.cardView, { marginTop: '60%' }]}>
          <View style={styles.leftRightCardView}>
            <Image source={flag} style={styles.flagImage} />
          </View>
          <View style={styles.middleCardView}>
            <Text style={styles.missionName}>{ong[1].name}</Text>
            <Text style={styles.missionName}>Docked Date</Text>
            <Text style={styles.missionName}>{new Date(ong[1].start).toDateString()}</Text>
            <Text style={styles.missionName}>{new Date(ong[1].start).toLocaleTimeString()}</Text>
          </View>
          <View style={styles.leftRightCardView}>
            <Image source={sattelite2} style={styles.flagImage} />
          </View>
        </View>
        <View style={[styles.cardView, { marginTop: '10%' }]}>
          <View style={styles.leftRightCardView}>
            <Image source={flag} style={styles.flagImage} />
          </View>
          <View style={styles.middleCardView}>
            <Text style={styles.missionName}>{ong[2].name}</Text>
            <Text style={styles.missionName}>Docked Date</Text>
            <Text style={styles.missionName}>{new Date(ong[2].start).toDateString()}</Text>
            <Text style={styles.missionName}>{new Date(ong[2].start).toLocaleTimeString()}</Text>
          </View>
          <View style={styles.leftRightCardView}>
            <Image source={sattelite2} style={styles.flagImage} />
          </View>
        </View>
        <View style={[styles.cardView, { marginTop: '45%' }]}>
          <View style={styles.leftRightCardView}>
            <Image source={flag} style={styles.flagImage} />
          </View>
          <View style={styles.middleCardView}>
            <Text style={styles.missionName}>{ong[3].name}</Text>
            <Text style={styles.missionName}>Docked Date</Text>
            <Text style={styles.missionName}>{new Date(ong[3].start).toDateString()}</Text>
            <Text style={styles.missionName}>{new Date(ong[3].start).toLocaleTimeString()}</Text>
          </View>
          <View style={styles.leftRightCardView}>
            <Image source={sattelite2} style={styles.flagImage} />
          </View>
        </View>
        <View style={[styles.cardView, { marginTop: '40%' }]}>
          <View style={styles.leftRightCardView}>
            <Image source={flag} style={styles.flagImage} />
          </View>
          <View style={styles.middleCardView}>
            <Text style={styles.missionName}>{ong[4].name}</Text>
            <Text style={styles.missionName}>Docked Date</Text>
            <Text style={styles.missionName}>{new Date(ong[4].start).toDateString()}</Text>
            <Text style={styles.missionName}>{new Date(ong[4].start).toLocaleTimeString()}</Text>
          </View>
          <View style={styles.leftRightCardView}>
            <Image source={sattelite2} style={styles.flagImage} />
          </View>
        </View>
      </View>
      <View style={styles.middleView}>
        <Image source={iss} style={styles.issImage} />
      </View>
      <View style={styles.leftRightView}>
        <View style={[styles.cardView, { marginTop: '10%' }]}>
          <View style={styles.leftRightCardView}>
            <Image source={flag} style={styles.flagImage} />
          </View>
          <View style={styles.middleCardView}>
            <Text style={styles.missionName}>{ong[5].name}</Text>
            <Text style={styles.missionName}>Docked Date</Text>
            <Text style={styles.missionName}>{new Date(ong[5].start).toDateString()}</Text>
            <Text style={styles.missionName}>{new Date(ong[5].start).toLocaleTimeString()}</Text>
          </View>
          <View style={styles.leftRightCardView}>
            <Image source={sattelite2} style={styles.flagImage} />
          </View>
        </View>
        <View style={[styles.cardView, { marginTop: '30%' }]}>
          <View style={styles.leftRightCardView}>
            <Image source={flag} style={styles.flagImage} />
          </View>
          <View style={styles.middleCardView}>
            <Text style={styles.missionName}>{ong[6].name}</Text>
            <Text style={styles.missionName}>Docked Date</Text>
            <Text style={styles.missionName}>{new Date(ong[6].start).toDateString()}</Text>
            <Text style={styles.missionName}>{new Date(ong[6].start).toLocaleTimeString()}</Text>
          </View>
          <View style={styles.leftRightCardView}>
            <Image source={sattelite2} style={styles.flagImage} />
          </View>
        </View>
        <View style={[styles.cardView, { marginTop: '255%' }]}>
          <View style={styles.leftRightCardView}>
            <Image source={flag} style={styles.flagImage} />
          </View>
          <View style={styles.middleCardView}>
            <Text style={styles.missionName}>{ong[7].name}</Text>
            <Text style={styles.missionName}>Docked Date</Text>
            <Text style={styles.missionName}>{new Date(ong[7].start).toDateString()}</Text>
            <Text style={styles.missionName}>{new Date(ong[7].start).toLocaleTimeString()}</Text>
          </View>
          <View style={styles.leftRightCardView}>
            <Image source={sattelite2} style={styles.flagImage} />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  flagImage: {
    width: '100%',
    height: '20%',
    // aspectRatio: 1,
    // borderTopRightRadius: 20,
    // borderTopLeftRadius: 20,
    // borderRadius: '50%',
    resizeMode: 'stretch',
    //backgroundColor: 'green',
    // padding:'5%'
  },
  leftRightCardView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '15%',
    height: '100%',
    // //backgroundColor: 'yellow',
  },
  middleCardView: {
    width: '70%',
    height: '100%',
    // //backgroundColor: 'blue',
    paddingVertical: '10%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  crewAndVehicles: {
    fontSize: 17,
    // fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'white',
  },
  missionName: {
    fontSize: 7,
    // fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '10%',
  },
  cardView: {
    width: '90%',
    height: '10%',
    backgroundColor: 'grey',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
  },
  issImage: {
    width: '100%',
    height: '100%',
    // aspectRatio: 1,
    // borderTopRightRadius: 20,
    // borderTopLeftRadius: 20,
    // borderRadius: '50%',
    resizeMode: 'stretch',
    //backgroundColor: 'green',
    // padding:'5%'
  },
  middleView: {
    width: '50%',
    height: '100%',
    //backgroundColor: 'blue',
    paddingVertical: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftRightView: {
    width: '25%',
    height: '100%',
    //backgroundColor: 'purple',
    alignItems: 'center',
  },
  crewAndVehicles: {
    fontSize: 17,
    // fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'white',
  },
  clockTitle: {
    fontSize: 12,
    // fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'white',
  },
  missionTitle: {
    fontSize: 25,
    // fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'white',
  },
  logosView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // //backgroundColor: 'red',
    width: '65%',
    height: '20%',
    paddingHorizontal: '1%',
  },
  textRightView: {
    ////backgroundColor: 'black',
    width: '50%',
    marginLeft: '10%',
  },
  textChildView: {
    flexDirection: 'row',
    // //backgroundColor: 'blue',
    width: '100%',
    // height:'33%'
  },
  leftTextView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // //backgroundColor: 'green',
    width: '50%',
    height: '100%',
  },
  spaceWalkChildView: {
    flexDirection: 'row',
    ////backgroundColor: 'blue',
    width: '100%',
  },
  spaceWalkView: {
    width: '70%',
    height: '40%',
    // //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    // marginHVertical:'4%'
  },
  textInSecondRowOfDetail: { color: 'black', fontSize: 8, marginLeft: '5%' },
  rightLogoView: {
    width: '100%',
    height: '50%',
    // aspectRatio: 1,

    resizeMode: 'contain',
  },
  companyView: {
    ////backgroundColor: 'yellow',
    height: '100%',
    width: '20%',
    padding: '.5%',
  },
  nameText: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: '3%',
  },
  number: { color: 'black', fontWeight: 'bold', fontSize: 8 },
  numView: {
    ////backgroundColor: 'purple',
    height: '100%',
    width: '60%',
    color: 'black',
    // justifyContent:'center',
    // alignItems:'center'
    paddingLeft: '2%',
    paddingTop: '2%',
  },
  logoView: {
    width: '100%',
    height: '100%',
    // aspectRatio: 1,

    resizeMode: 'contain',
  },
  flagView: {
    ////backgroundColor: 'red',
    height: '100%',
    width: '20%',
    // justifyContent: 'flex-end',
    // alignItems: 'stretch',
    padding: '3%',
    marginTop: '3%',
  },
  flagRowView: {
    flexDirection: 'row',
    width: '100%',
    height: '40%',
    ////backgroundColor: 'blue',
    justifyContent: 'center',
  },
  detailView: {
    width: '100%',
    height: '43%',
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '2%',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  sattelitetImage: {
    width: '100%',
    height: '100%',
    // aspectRatio: 1,
    // borderTopRightRadius: 20,
    // borderTopLeftRadius: 20,
    borderRadius: 50,
    resizeMode: 'contain',
    borderColor: 'red',
    borderWidth: 1,
    //backgroundColor: 'green',
  },
  astronautImage: {
    width: '100%',
    height: '100%',
    // aspectRatio: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,

    resizeMode: 'stretch',
  },
  sattelitepictureView: {
    height: '20%',
    width: '40%',
    // position: 'relative',
    // flex: 1,
    //backgroundColor: 'yellow',
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: '5%',
    marginBottom: '7%',
  },
  pictureView: {
    height: '57%',
    width: '100%',
    // position: 'relative',
    // flex: 1,
    ////backgroundColor: 'yellow',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  onePhotoView: {
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'grey',
    marginTop: '2.5%',
    height: 250,
  },
  rowView: {
    
    width: '100%',
    flex: 1,
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  line: {
    // flex: 1,
    width: '80%',
    height: 1,
    // marginHorizontal: 20,
    // marginTop: 4,
    backgroundColor: 'black',
  },
  profileView: {
    ////backgroundColor: 'green',
    // marginBottom:'10%',
    width: '100%',
  },
  crewView: {
    flex: 1,
    //backgroundColor: 'red',
    width: '100%',
    height: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
  },

  bottomView: {
    flex: 1,
    // justifyContent: 'flex-end',
    alignItems: 'center',
    //backgroundColor: 'yellow',
    width: '100%',
    height: '92%',
    // marginBottom: 40,
    // borderRadius:20
    // flexDirection: 'row',
  },
  leftButtonTypeView: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // //backgroundColor: color === 'inservice' ? 'red' : 'grey',
    width: '30%',
    height: '40%',
    borderRadius: 20,
  },
  topView: {
    // flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    //backgroundColor: 'purple',
    width: '80%',
    height: '8%',
    // borderRadius:20
    flexDirection: 'row',
  },
  rightButtonTypeView: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // //backgroundColor: color === 'inservice' ? 'grey' : 'red',
    width: '30%',
    height: '40%',
    borderRadius: 20,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'green',
    paddingHorizontal: '2%',
  },

  text: {
    fontSize: 15,
    // fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'white',
  },
});
