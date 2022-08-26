import * as React from "react";
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import dargonimage from "../../assets/DragonTrackerButton.jpg"
export default function Trackers({ navigation }) {
  const back = "<";
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
          LIVE DASHBOARDS
      </Text>
      <View style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
        <TouchableOpacity
        style={{
          backgroundColor:"black",
          height:RFPercentage(13),
          width:RFPercentage(13),
          margin:RFPercentage(1),
          borderRadius:RFPercentage(1.5)
        }}
        
        >
          <Image resizeMode="cover" style={{height:"100%",width:"100%"}} source={require("../../assets/MoonButton.png")}></Image>
        </TouchableOpacity>
        <TouchableOpacity
        style={{
          backgroundColor:"black",
          height:RFPercentage(13),
          width:RFPercentage(13),
          margin:RFPercentage(1),
          borderRadius:RFPercentage(1.5)
        }}
        >
           <Image resizeMode="cover" style={{height:"100%",width:"100%"}} source={require("../../assets/MarsButton.png")}></Image>
        </TouchableOpacity>
        <TouchableOpacity
        style={{
          backgroundColor:"black",
          height:RFPercentage(13),
          width:RFPercentage(13),
          margin:RFPercentage(1),
          borderRadius:RFPercentage(1.5)
        }}
        >
 <Image resizeMode="cover" style={{height:"100%",width:"100%"}} source={require("../../assets/SunButton.png")}></Image>
        </TouchableOpacity>
      </View>
        <TouchableOpacity   onPress={() => navigation.navigate("Dashboard")}>
        <ImageBackground style={{display:"flex",justifyContent:"center",alignItems:"center",height:RFPercentage(22)
      }}
      source={require("../../assets/ISSsButton.png")}
      resizeMode="center"

      >
        </ImageBackground>
        </TouchableOpacity>

        <View style={{display:"flex",flexDirection:"row"}}>
          <TouchableOpacity style={{margin:RFPercentage(0)}}>
            <ImageBackground 
            resizeMode="contain" style={{height:RFPercentage(19),width:RFPercentage(25)}}
             source={require("../../assets/StarbaseButton.png")}>
             </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={{margin:RFPercentage(0)}}>
            <ImageBackground 
            resizeMode="contain" style={{height:RFPercentage(19),width:RFPercentage(25)}}
             source={require("../../assets/SpaceCoastButton.png")}>
             </ImageBackground>
          </TouchableOpacity>
        </View>

        <View style={{display:"flex",flexDirection:"row",padding:RFPercentage(.5),justifyContent:"center",alignItems:"center"}}>
          <TouchableOpacity style={{width:"45%",height:RFPercentage(7),display:"flex",justifyContent:"center"
        ,alignItems:"center",flexDirection:"column",backgroundColor:"white",borderRadius:RFPercentage(2),marginRight:RFPercentage(1.2)
        }}>
            <Text style={{color:"black",fontWeight:"bold",fontSize:RFPercentage(2.2),fontFamily:'naz'}}>HUBBLE</Text>
            <Text style={{color:"black",fontSize:RFPercentage(1.5)}}>COMMING SOON</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width:"45%",height:RFPercentage(7),display:"flex",justifyContent:"center"
        ,alignItems:"center",flexDirection:"column",backgroundColor:"white",borderRadius:RFPercentage(2)
        }}>
            <Text style={{color:"black",fontWeight:"bold",fontSize:RFPercentage(2.2),fontFamily:'naz'}}>JWST</Text>
            <Text style={{color:"black",fontSize:RFPercentage(1.5)}}>COMMING SOON</Text>
          </TouchableOpacity>
        </View>

        <View style={{display:"flex",flexDirection:"row",padding:RFPercentage(.5),justifyContent:"center",alignItems:"center"}}>
          <TouchableOpacity style={{width:"45%",height:RFPercentage(7),display:"flex",justifyContent:"center"
        ,alignItems:"center",flexDirection:"column",backgroundColor:"white",borderRadius:RFPercentage(2),marginRight:RFPercentage(1.2)
        }}>
            <Text style={{color:"black",fontWeight:"bold",fontSize:RFPercentage(2.2),fontFamily:'naz'}}>CURIOSITY</Text>
            <Text style={{color:"black",fontSize:RFPercentage(1.5)}}>COMMING SOON</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width:"45%",height:RFPercentage(7),display:"flex",justifyContent:"center"
        ,alignItems:"center",flexDirection:"column",backgroundColor:"white",borderRadius:RFPercentage(2)
        }}>
            <Text style={{color:"black",fontWeight:"bold",fontSize:RFPercentage(2.2),fontFamily:'naz'}}>PERSEVERANCE</Text>
            <Text style={{color:"black",fontSize:RFPercentage(1.5)}}>COMMING SOON</Text>
          </TouchableOpacity>
        </View>
        <Text 
      style={{
        textAlign:"center",
        marginVertical:RFPercentage(2),
        color:"white",
        fontSize:RFPercentage(3),   
        fontWeight:"bold",
        fontFamily:'naz'
      }}
      >
          LIVE TRACKERS
      </Text>
      <View style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
          <TouchableOpacity style={{marginTop:RFPercentage(-5)}}  onPress={() => navigation.navigate("DragonTracker")}>
            <ImageBackground 
            resizeMode="contain" style={{height:RFPercentage(19),width:RFPercentage(25)}}
             source={require("../../assets/DragonButton.png")}>
             </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop:RFPercentage(-5)}}  onPress={() => navigation.navigate("FalconTracker")}>
            <ImageBackground 
            resizeMode="contain" style={{height:RFPercentage(19),width:RFPercentage(25)}}
             source={require("../../assets/FalconButton.png")}>
             </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop:RFPercentage(-9)}}>
            <ImageBackground 
            resizeMode="contain" style={{height:RFPercentage(19),width:RFPercentage(25)}}
             source={require("../../assets/StarshipButton.png")}>
             </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop:RFPercentage(-3),display:"flex",justifyContent:"center",alignItems:"center"
        ,flexDirection:"column",height:RFPercentage(8),width:RFPercentage(25),backgroundColor:"white",
        borderRadius:RFPercentage(2)
        }}>
              <Text style={{color:"black",fontWeight:"bold",fontSize:RFPercentage(2.2),
        fontFamily:'naz'}}>NEW SHEPARD</Text>
            <Text style={{color:"black",fontSize:RFPercentage(1.5)}}>COMMING SOON</Text>
         

          </TouchableOpacity>
        </View>
  
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backbuttons: {
    // backgroundColor: 'grey',
    height: 30,
    width: "97%",
    flexDirection: "row",
    // marginVertical: 3,
    // padding:'10%',
    // marginVertical:3,
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 20,
    // padding:40
  },
  lowerbuttons: {
    backgroundColor: "grey",
    height: 150,
    // padding:'10%',
    width: "49%",
    // marginVertical:3,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 3,
    borderRadius: 20,
    // padding:40
  },
  lowerView: {
    // backgroundColor: 'yellow',
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // height:'100%',
    flexDirection: "row",
    margin: 3,
  },

  container: {
    flex: 1,
    paddingVertical: "12%",
    paddingHorizontal: "5%",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 20,
    // fontStyle: 'italic',
    fontWeight: "bold",
    color: "black",
  },
  cm: {
    fontSize: 12,
    // fontStyle: 'italic',
    //fontWeight: "bold",
    color: "black",
  },
  coverimg:{
    height:"100%",
    width:"100%",
    display:"flex",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
   
  }
});
