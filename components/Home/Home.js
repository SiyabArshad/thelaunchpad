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
  Linking,
  ActivityIndicator,
  Platform
} from "react-native";
import CountDown from "react-native-countdown-component";

import logo from "./../../assets/TLPLogoCenter.png";

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
export default function Home({ navigation }) {
  const[spot,setspot]=React.useState(null)
  const[loading,setloading]=React.useState(false)
  const[launch,setlaunch]=React.useState([])
  const[story,setstory]=React.useState([])
  const[launchtime,setlaunchtime]=React.useState(null)
  const [newsdate,setnewsdate]=React.useState("")
  const getnews=()=>{
    setloading(true)
    fetch("https://api.tlpnetwork.com/article")
    .then((res)=>res.json())
    .then((data)=>{
      setstory(data)
      setnewsdate(new Date(story[story.length-1]?.published_at).getFullYear()+ " "+monthNames[new Date(story[story.length-1]?.published_at).getMonth()].toUpperCase()+" "+new Date(story[story.length-1]?.published_at).getDate())
      setloading(false)
    })    
    .catch((e)=>{
      setloading(false)
    })
  }
  
  const getupcomming=()=>{
    setloading(true)
    fetch("https://api.tlpnetwork.com/launch/upcoming?limit=100")
    .then((res)=>res.json())
    .then((data)=>{
      setlaunch(data)
      let tm=Math.floor((new Date(data[data.length-1]?.net).getTime()-new Date().getTime())/(24*3600*1000))
      setlaunchtime(tm)
        setloading(false)
    })    
    .catch((e)=>{
      setloading(false)
    })
  }

  const getspot=()=>{
    setloading(true)
    fetch("https://api.tlpnetwork.com/spotlight")
    .then((res)=>res.json())
    .then((data)=>{
      setspot(data)
      setloading(false)
    })
    .catch((e)=>{setloading(false)})
  }
  React.useEffect(()=>{
    let controller=new AbortController();
    getupcomming()
    getspot()
    getnews()
    return ()=>{
     controller.abort()
}
},[launchtime])
 
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
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={[styles.logoView,{marginTop:Platform.OS==="android"?20:0}]}>
            <Image style={styles.logo} source={logo} />
          </View>
          <View style={styles.launchView}>
            <Text style={styles.titleText}>NEXT LAUNCH:</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("LAUNCHES", { screen: "Launches" })}
            >
              <Text style={styles.titleText}>{"FUTURE CALENDER-->"}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.imageBlock}
            onPress={() =>
              navigation.navigate("LAUNCHES", { screen: "LaunchDetail",params:{launchdetail:launch[launch.length-1],timedetail:launchtime}} )
            }
          >
            <ImageBackground
              resizeMode="cover"
              source={{uri:launch[launch.length-1]?.image}}
              style={styles.image}
            >
              <Text
                style={{ fontSize: 25, fontWeight: "bold", color: "white" }}
              >
                {launch[launch.length-1]?.name}
              </Text>
              <Text style={styles.titleText}>{launch[launch.length-1]?.slug}</Text>
              <CountDown
                until={launchtime* 24 * 60 * 60}
                digitStyle={{ backgroundColor: "grey" }}
                digitTxtStyle={{ color: "white", fontSize: 20 }}
                separatorStyle={{ color: "white" }}
                timeToShow={["D", "H", "M", "S"]}
                timeLabels={{ d: null, h: null, m: null, s: null }}
                showSeparator
                size={12}
              />
            </ImageBackground>
          </TouchableOpacity>
          <View style={styles.storyView}>
            <Text style={styles.titleText}>NEWEST STORY:</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("NEWS")}
            >
              <Text style={styles.titleText}>{"MORE STORIES-->"}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.imageBlock}
            onPress={() =>
              navigation.navigate("NEWS", { screen: "StoryDetail",params:{news:story[story?.length-1]} })
            }
          >
            <ImageBackground
              resizeMode="cover"
              //source={story[story.length-1]===null||undefined||""?require("../../assets/spacex.jpg"):{uri:story[story.length-1]?.image_url}}
              source={story[story.length-1]?.image_url?{uri:story[story.length-1]?.image_url}:require("../../assets/spacex.jpg")}
              style={styles.image2}
            >
              <Text style={styles.titleText2}>
               {story[story.length-1]?.title}
              </Text>
              <Text style={styles.date}>{newsdate}</Text>
            </ImageBackground>
          </TouchableOpacity>
          <View style={styles.spotlightView}>
            <Text style={styles.spotlightTitle}>SPOTLIGHT OF THE DAY</Text>
          </View>
          <View style={styles.astronuatView}>
            <ImageBackground
              resizeMode="cover"
              source={{uri:spot?.astronaut.profile_image}}
              style={styles.astronaut}
            >
              <Text style={styles.astronautName}>{spot?.astronaut.name}</Text>
            </ImageBackground>
            <ImageBackground
              resizeMode="cover"
              source={{uri:spot?.launch.image}}
              style={styles.astronaut}
            >
              <Text style={styles.astronautName}>{spot?.astronaut.name}</Text>
            </ImageBackground>
          </View>
          <View style={styles.tlp}>
            <TouchableOpacity
              style={styles.fullButton}
              onPress={() => navigation.navigate("TLP")}
            >
              <Text style={styles.tlptxt}>TLP+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btns}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() =>
                Linking.openURL("https://www.twitter.com/tlpn_official")
              }
            >
              <Text style={styles.btntxt}>TWITTER</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btntxt}>ABOUT US</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() =>
                Linking.openURL("https://www.youtube.com/thelaunchpad")
              }
            >
              <Text style={styles.btntxt}>YOUTUBE</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tlp}>
            <TouchableOpacity
              style={styles.fullButton}
              onPress={() => navigation.navigate("Settings")}
            >
              <Text style={styles.tlptxt}>Settings</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
}
const styles = StyleSheet.create({
  fullButton: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    // backgroundColor: 'red',
    width: "60%",
    height: 100,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    // marginLeft: '6%',
    resizeMode: "contain",
  },
  logoView: {
    // backgroundColor: 'green',
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  btntxt: {
    color: "white",
    fontWeight: "bold",
  },
  btn: {
    flex: 1,
    marginHorizontal: 3,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: "33%",
    borderRadius: 20,
  },
  btns: {
    marginTop: 8,
    // backgroundColor: 'green',
    width: "90%",
    height: 40,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // borderRadius:20,
  },
  tlptxt: {
    fontSize: 25,
    fontStyle: "italic",
    fontWeight: "500",
    color: "white",
  },
  tlp: {
    marginTop: 13,
    backgroundColor: "grey",
    width: "90%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  astronautName: {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
    alignContent: "center",
    // marginLeft: 13,
    // marginTop: 10,
    margin: 10,
  },
  astronaut: {
    flex: 0.9,
    margin: 5,
    width: "100%",
    height: 100,
    alignSelf: "center",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "flex-end",
    overflow: "hidden",
    // borderWidth: 0,
  },
  astronuatView: {
    width: "90%",
    height: 100,
    flexDirection: "row",
    flex: 1,
    // backgroundColor:'green',
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  spotlightTitle: {
    color: "white",
    marginTop: 10,
    fontWeight: "bold",
  },
  spotlightView: {
    // marginTop:1,
    marginBottom: 2,
  },
  imageBlock: {
    width: "90%",
    minHeight:140
  },
  image: {
    margin: 8,
    width: "100%",
    minHeight:140,
    alignSelf: "center",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    // borderWidth: 0,
  },
  image2: {
    margin: 8,
    width: "100%",
    height: 100,
    alignSelf: "center",
    borderRadius: 20,
    // alignItems: 'center',
    justifyContent: "flex-end",
    overflow: "hidden",
    // borderWidth: 0,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontStyle: "italic",
    fontWeight: "500",
    color: "white",
  },
  launchView: {
    marginTop: 12,
    paddingHorizontal: 10,
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
  },
  storyView: {
    marginTop: 2,
    paddingHorizontal: 10,
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
  },
  titleText: {
    fontSize: 15,
    color: "white",
  },
  titleText2: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
    // alignContent: 'left',
    marginLeft: 13,
    marginTop: 10,
  },
  date: {
    fontSize: 10,
    // fontWeight:'bold',
    color: "white",
    // alignContent: 'left',
    marginLeft: 13,
    marginTop: 1,
    marginBottom: 10,
  },
});
