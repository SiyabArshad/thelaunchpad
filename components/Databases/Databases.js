
import * as React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

export default function Databases({navigation}) {
  const back = '<';
  return (
    <ScrollView style={{backgroundColor:"#101215"}}>
      <Text 
      style={{
        textAlign:"center",
        marginVertical:RFPercentage(5),
        color:"white",
        fontSize:RFPercentage(3),
        fontWeight:"bold",
        fontFamily:'naz'
      }}
      >
          LIVE DATABASES
      </Text>
      <TouchableOpacity   onPress={() => navigation.navigate('AstronautDatabase')}>
        <ImageBackground style={{display:"flex",justifyContent:"center",alignItems:"center",height:RFPercentage(22)
      }}
      source={require("../../assets/AstronautDatabaseButton.png")}
      resizeMode="center"

      >
        </ImageBackground>
        </TouchableOpacity>

      <View style={{
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap"        
      }}>
        <TouchableOpacity style={{
          height:RFPercentage(10),
          display:"flex",
          flexDirection:"column",
          backgroundColor:"white",
          alignContent:"center",
          justifyContent:"center",
          padding:RFPercentage(2)
          ,width:"40%",
          borderRadius:RFPercentage(2),
          margin:RFPercentage(.5)
        }}>
          <Text style={{textAlign:"center",fontWeight:"bold",fontFamily:"naz",fontSize:RFPercentage(2.5)}}>LAUNCH FACILITIES</Text>
          <Text style={{textAlign:"center",fontSize:RFPercentage(1.3)}}>COMMING SOON</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          width:"50%",
          marginTop:RFPercentage(-6)
         }}>
          <Image resizeMode='contain' style={{width:RFPercentage(29),height:RFPercentage(25)}} source={require("../../assets/RocketButton.png")}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={{
          height:RFPercentage(10),
          display:"flex",
          flexDirection:"column",
          backgroundColor:"white",
          alignContent:"center",
          justifyContent:"center",
          padding:RFPercentage(2)
          ,width:"40%",
          borderRadius:RFPercentage(2),
          margin:RFPercentage(.5),
          marginTop:RFPercentage(-6)
        }}>
          <Text style={{textAlign:"center",fontWeight:"bold",fontFamily:"naz",fontSize:RFPercentage(2.5)}}>LAUNCH PROVIDERS</Text>
          <Text style={{textAlign:"center",fontSize:RFPercentage(1.3)}}>COMMING SOON</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          width:"50%",
          marginTop:RFPercentage(-12)
         }}>
          <Image resizeMode='contain' style={{width:RFPercentage(29),height:RFPercentage(25)}} source={require("../../assets/EngineSButton.png")}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={{
          height:RFPercentage(10),
          display:"flex",
          flexDirection:"column",
          backgroundColor:"white",
          alignContent:"center",
          justifyContent:"center",
          padding:RFPercentage(2)
          ,width:"40%",
          borderRadius:RFPercentage(2),
          margin:RFPercentage(.5),
          marginTop:RFPercentage(-6)
        }}>
          <Text style={{textAlign:"center",fontWeight:"bold",fontFamily:"naz",fontSize:RFPercentage(2.5)}}>SPACE AGENCIES</Text>
          <Text style={{textAlign:"center",fontSize:RFPercentage(1.3)}}>COMMING SOON</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          width:"50%",
          marginTop:RFPercentage(-12)
         }}>
          <Image resizeMode='contain' style={{width:RFPercentage(29),height:RFPercentage(25)}} source={require("../../assets/RoverButton.png")}></Image>
        </TouchableOpacity>
      </View>

      
      
     {/* <View style={styles.container}>
        <TouchableOpacity style={styles.backbuttons} onPress={() => navigation.navigate('HOME')}>
          <Text
            style={{
              fontSize: 30,
              color: 'white',
            }}>
            {back}
          </Text>
          <Text
            style={{
              marginTop:10,
              fontSize: 10,
              color: 'white',
            }}>
            BACK
          </Text>
        </TouchableOpacity>
        <View style={styles.upperView}>
          <View style={styles.secondView}>
            <TouchableOpacity style={styles.leftbuttons} onPress={() => navigation.navigate('AstronautDatabase')}>
            <ImageBackground  
              resizeMode="cover"
              source={require("../../assets/AstronautsButton.png")}
             style={styles.coverimg}
             >
              <Text style={styles.text}>ASTRONAUTS</Text>
            </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={styles.rightView}>
            <TouchableOpacity style={styles.rightbuttons}>
              <ImageBackground  
              resizeMode="cover"
              source={require("../../assets/RocketsButton(transparent).png")}
             style={styles.coverimg}
             >
              <Text style={styles.text}>ROCKETS</Text>
              <Text style={styles.cm}>Coming soon</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightbuttons}>
            <ImageBackground  
              resizeMode="cover"
              source={require("../../assets/EngineButton.png")}
             style={styles.coverimg}
             >
              <Text style={styles.text}>ENGINES</Text>
              <Text style={styles.cm}>Coming soon</Text>
            </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.lowerView}>
          <TouchableOpacity style={styles.lowerbuttons}>
          <ImageBackground  
              resizeMode="cover"
              source={require("../../assets/AgenciesButton.png")}
             style={styles.coverimg}
             >
            <Text style={styles.text}>AGENCIES</Text>
            <Text style={styles.cm}>Coming soon</Text>
          </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.lowerbuttons}>
         
            <Text style={styles.text}>LAUNCH SITES</Text>
            <Text style={styles.cm}>Coming soon</Text>
          </TouchableOpacity>
        </View>
      </View>
          */}
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  backbuttons: {
    // backgroundColor: 'grey',
    height: 30,
    width: '97%',
    flexDirection: 'row',
    // marginVertical: 3,
    // padding:'10%',
    // marginVertical:3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 20,
    // padding:40
  },
  lowerbuttons: {
    backgroundColor: 'grey',
    height: 150,
    // padding:'10%',
    width: '49%',
    // marginVertical:3,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
    borderRadius: 20,
    // padding:40
  },
  leftbuttons: {
    backgroundColor: 'grey',
    height: 304,
    width: '97%',
    // marginVertical: 3,
    // padding:'10%',
    // marginVertical:3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    // padding:40
  },
  rightbuttons: {
    backgroundColor: 'grey',
    height: 150,
    width: '98%',
    margin: 3,
    // padding:'10%',
    // marginVertical:3,
    borderRadius: 20,
    // padding:40
  },
  coverimg:{
    height:"100%",
    width:"100%",
    display:"flex",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
   
  },
  lowerView: {
    // backgroundColor: 'yellow',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // height:'100%',
    flexDirection: 'row',
    margin:3,
  },

  rightView: {
    // backgroundColor: 'red',
    width: '50%',
    // height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // margin:5,
  },
  secondView: {
    width: '50%',
    // height: '80%',
    // borderRadius: 20,
    // backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: '5%',
    // flex:1
  },
  upperView: {
    flexDirection: 'row',
    width: '100%',
    // height:'100%',
    flex: 1,
    // backgroundColor: 'white',
  },
  container: {
    flex: 1,
    paddingVertical: '12%',
    paddingHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 20,
    // fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'black',
  },
  cm:{
    fontSize: 11,
    color:'black'
  }
});
