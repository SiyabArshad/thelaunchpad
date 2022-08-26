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
  ActivityIndicator
} from 'react-native';
import CountDown from 'react-native-countdown-component';
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
import { Ionicons } from '@expo/vector-icons';
//console.log(new Date(data[0].net).getDay()+1)toLocaleString('default', { month: 'long' })
//console.log(Math.floor((new Date(future[0]?.net).getTime()-new Date().getTime())/(24*3600*1000)))
export default function Launches({ navigation }) {

  const differenceindays=(fdate)=>{
   return Math.floor((new Date(fdate).getTime()-new Date().getTime())/(24*3600*1000))
  }
  const back = '<';
  const[onthisday,setonthisday]=React.useState([])
  const[upcomming,setupcomming]=React.useState([])
  const[future,setfuture]=React.useState([])
  const[load,setload]=React.useState(false)
  const[firstlaunch,setfirstlaunch]=React.useState(null)
  const[secondlaunch,setsecondlaunch]=React.useState(null)
  const[thirdlaunch,setthirdlaunch]=React.useState(null)
  const[rct1,setrct1]=React.useState("")
  const[rct2,setrct2]=React.useState("")
  const[rct3,setrct3]=React.useState("")
  const[rct4,setrct4]=React.useState("")
  const[rtlt1,setrlt1]=React.useState(null)
  const[rtlt2,setrlt2]=React.useState(null)
  const[rtlt3,setrlt3]=React.useState(null)
  const[rtlt4,setrlt4]=React.useState(null)
  const getupcomming=()=>{
    setload(true)
    fetch("https://api.tlpnetwork.com/launch/upcoming?limit=100")
    .then((res)=>res.json())
    .then((data)=>{
      setfuture(data)
      setfirstlaunch(Math.floor((new Date(data[data.length-1]?.net).getTime()-new Date().getTime())/(24*3600*1000)))
      setsecondlaunch(Math.floor((new Date(data[data.length-2]?.net).getTime()-new Date().getTime())/(24*3600*1000)))
      setthirdlaunch(Math.floor((new Date(data[data.length-3]?.net).getTime()-new Date().getTime())/(24*3600*1000)))
      setload(false)
    })    
    .catch((e)=>{
      setload(false)
    })
  }


  const getprevious=()=>{
    setload(true)
    fetch("https://api.tlpnetwork.com/launch/previous?limit=4")
    .then((res)=>res.json())
    .then((data)=>{
      setupcomming(data)
      setrct1(monthNames[new Date(upcomming[0]?.net).getMonth()].toUpperCase()+" "+new Date(upcomming[0]?.net).getDate()+", " +new Date(upcomming[0]?.net).getFullYear())
      setrct2(monthNames[new Date(upcomming[1]?.net).getMonth()].toUpperCase()+" "+new Date(upcomming[1]?.net).getDate()+", " +new Date(upcomming[1]?.net).getFullYear())
      setrct3(monthNames[new Date(upcomming[2]?.net).getMonth()].toUpperCase()+" "+new Date(upcomming[2]?.net).getDate()+", " +new Date(upcomming[2]?.net).getFullYear())
      setrct4(monthNames[new Date(upcomming[3]?.net).getMonth()].toUpperCase()+" "+new Date(upcomming[3]?.net).getDate()+", " +new Date(upcomming[3]?.net).getFullYear())
      setrlt1(Math.floor((new Date(data[0]?.net).getTime()-new Date().getTime())/(24*3600*1000)))
      setrlt2(Math.floor((new Date(data[1]?.net).getTime()-new Date().getTime())/(24*3600*1000)))
      setrlt3(Math.floor((new Date(data[2]?.net).getTime()-new Date().getTime())/(24*3600*1000)))
      setrlt4(Math.floor((new Date(data[2]?.net).getTime()-new Date().getTime())/(24*3600*1000)))
      setload(false)
    })    
    .catch((e)=>{
      setload(false)
    })
  }

  const getonthisday=()=>{
    setload(true)
    fetch("https://api.tlpnetwork.com/launch/on-this-day")
    .then((res)=>res.json())
    .then((data)=>{
      setonthisday(data)
      setload(false)
    })    
    .catch((e)=>{
      setload(false)
    })
  }
  //getdatestring(upcomming[0]?.net)
  const controller=new AbortController();
  React.useEffect(()=>{
    getupcomming()
    getonthisday()
    getprevious()
    return ()=>{
      controller.abort()
    }
  },[firstlaunch])
  if(load)
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
    <View style={{flex:1,paddingHorizontal:"5%",paddingVertical:"10%"}}>
   <ScrollView>
      <TouchableOpacity
        style={styles.backbuttons}
        onPress={() => navigation.navigate('DATABASES')}>
        
        <Ionicons name="arrow-back" size={35} color="white" />
      </TouchableOpacity>
      
        <View style={styles.launchView}>
          <Text style={styles.titleText}>NEXT LAUNCH:</Text>
          <TouchableOpacity>
            <Text
              style={styles.rightTitleText}
              onPress={() =>
                navigation.navigate('UpComingLaunches', { page: 'upcoming' })
              }>
              FUTURE CALENDER
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
        onPress={() =>
          navigation.navigate("LAUNCHES", { screen: "LaunchDetail",params:{launchdetail:future[future.length-1],timedetail:firstlaunch}} )
        }
          style={[styles.imageBlock, {borderBottomColor:"green",minHeight:150 }]}>
          <ImageBackground
            source={{uri:future[future.length-1]?.image}}
            style={[styles.image,{height:150}]}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>
              {future[future.length-1]?.name}
            </Text>
            <Text style={styles.titleText}>{future[future.length-1]?.slug}</Text>
            <CountDown
              until={firstlaunch*24*60*60}
              digitStyle={{ backgroundColor: 'grey' }}
              digitTxtStyle={{ color: 'white', fontSize: 20 }}
              separatorStyle={{ color: 'white' }}
              timeToShow={['D', 'H', 'M', 'S']}
              timeLabels={{ d: null, h: null, m: null, s: null }}
              showSeparator
              size={12}
            />
          </ImageBackground>
        </TouchableOpacity>
        <View style={[styles.rowView,{height:"20%"}]}>
          <TouchableOpacity
                 onPress={() =>
                  navigation.navigate("LAUNCHES", { screen: "LaunchDetail",params:{launchdetail:future[future.length-2],timedetail:secondlaunch}} )
                }
            style={[styles.rowimageBlock, { borderBottomColor: 'orange' }]}>
            <ImageBackground
              source={{uri:future[future.length-2]?.image}}
              style={styles.rowimage}>
              <Text
                style={{ textAlign:"center",fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                {future[future.length-2]?.name}
              </Text>
              <Text style={styles.rowtitleText}>{future[future.length-2]?.slug}</Text>
              <CountDown
                until={secondlaunch * 24 * 60 * 60}
                digitStyle={{ backgroundColor: 'grey' }}
                digitTxtStyle={{ color: 'white', fontSize: 20 }}
                separatorStyle={{ color: 'white' }}
                timeToShow={['D', 'H', 'M', 'S']}
                timeLabels={{ d: null, h: null, m: null, s: null }}
                showSeparator
                size={12}
              />
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
                 onPress={() =>
                  navigation.navigate("LAUNCHES", { screen: "LaunchDetail",params:{launchdetail:future[future.length-3],timedetail:thirdlaunch}} )
                }
            style={[styles.rowimageBlock, { borderBottomColor: 'red' }]}>
            <ImageBackground
              source={{uri:future[future.length-3]?.image}}
              style={styles.rowimage}>
              <Text
                style={{ textAlign:"center",fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                {future[future.length-3]?.name}
              </Text>
              <Text style={styles.rowtitleText}>{future[future.length-3]?.slug}</Text>
              <CountDown
                until={thirdlaunch * 24 * 60 * 60}
                digitStyle={{ backgroundColor: 'grey' }}
                digitTxtStyle={{ color: 'white', fontSize: 20 }}
                separatorStyle={{ color: 'white' }}
                timeToShow={['D', 'H', 'M', 'S']}
                timeLabels={{ d: null, h: null, m: null, s: null }}
                showSeparator
                size={12}
              />
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={[styles.launchView, { marginTop: 30 }]}>
          <Text style={styles.titleText}>RECENT LAUNCHES:</Text>
          <TouchableOpacity>
            <Text
              style={styles.rightTitleText}
              onPress={() =>
                navigation.navigate('UpComingLaunches', { page: 'previous' })
              }>
              PAST CALENDER
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.fourrowView,{height:"20%"}]}>
          <TouchableOpacity
                onPress={() =>
                  navigation.navigate("LAUNCHES", { screen: "LaunchDetail",params:{launchdetail:upcomming[0],timedetail:rtlt1}} )
                }
            style={[styles.rowimageBlock, { borderBottomColor: 'orange' }]}>
            <ImageBackground
              source={{uri:upcomming[0]?.image}}
              style={styles.rowimage}>
              <Text style={styles.date}>{rct1}</Text>
              <Text
                style={{ fontSize: 20,textAlign:"center",fontWeight: 'bold', color: 'white' }}>
                { upcomming[0]?.name}
              </Text>
              <Text style={styles.rowtitleText}>{ upcomming[0]?.slug}</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
                         onPress={() =>
                          navigation.navigate("LAUNCHES", { screen: "LaunchDetail",params:{launchdetail:upcomming[1],timedetail:rtlt2}} )
                        }
            style={[styles.rowimageBlock, { borderBottomColor: 'orange' }]}>
            <ImageBackground
              source={{uri:upcomming[1]?.image}}
              style={styles.rowimage}>
              <Text style={styles.date}>{rct2}</Text>
              <Text
                style={{ fontSize: 20, textAlign:"center",fontWeight: 'bold', color: 'white' }}>
                { upcomming[1]?.name}
              </Text>
              <Text style={styles.rowtitleText}>{ upcomming[1]?.slug}</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={[styles.fourrowView,{height:"20%"}]}>
          <TouchableOpacity
                         onPress={() =>
                          navigation.navigate("LAUNCHES", { screen: "LaunchDetail",params:{launchdetail:upcomming[2],timedetail:rtlt3}} )
                        }
            style={[styles.rowimageBlock, { borderBottomColor: 'red' }]}>
            <ImageBackground
              source={{uri:upcomming[0]?.image}}
              style={styles.rowimage}>
              <Text style={styles.date}>{rct3}</Text>
              <Text
                style={{ fontSize: 20, textAlign:"center",fontWeight: 'bold', color: 'white' }}>
                { upcomming[2]?.name}
              </Text>
              <Text style={styles.rowtitleText}>{ upcomming[2]?.slug}</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
                         onPress={() =>
                          navigation.navigate("LAUNCHES", { screen: "LaunchDetail",params:{launchdetail:upcomming[3],timedetail:rtlt4}} )
                        }
            style={[styles.rowimageBlock, { borderBottomColor: 'green' }]}>
            <ImageBackground
              source={{uri:upcomming[0]?.image}}
              style={styles.rowimage}>
              <Text style={styles.date}>{rct4}</Text>
              <Text
                style={{ fontSize: 20, textAlign:"center",fontWeight: 'bold', color: 'white' }}>
                { upcomming[3]?.name}
              </Text>
              <Text style={styles.rowtitleText}>{ upcomming[3]?.slug}</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={[styles.launchView, { marginTop: 30}]}>
          <Text style={styles.titleText}>ON THIS DAY:</Text>
          <TouchableOpacity   onPress={() =>
                navigation.navigate('UpComingLaunches', { page: 'previous' })
              }>
            <Text style={styles.rightTitleText}>SEARCH A DATE</Text>
          </TouchableOpacity>
        </View>
     <View >
      <ScrollView
          style={{height:600,padding:5}}
        showsHorizontalScrollIndicator={false}
          horizontal={true}>
        <View style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
         {
            onthisday?.map((item,i)=>(
              <TouchableOpacity style={{display:"flex",justifyContent:"center",alignItems:"center",width:200,height:170,margin:5}}>
              <ImageBackground
                   resizeMode="cover"
                     source={require('../../assets/rocket.jpg')}
                     style={{height:170,width:200}}>
                     <Text style={styles.year}>{new Date(item.net).getFullYear()}</Text>
                     <Text style={styles.threeRowdate}>{monthNames[new Date(item.net).getMonth()].toUpperCase()} {new Date(item.net).getDate()}</Text>
                     <Text
                       style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>
                       {item.name}
                     </Text>
                     <Text style={styles.threeRowText}>{item.slug}</Text>
                   </ImageBackground>
              </TouchableOpacity>
            
            ))
            }
         </View>
        </ScrollView>
        </View>
      
   
    </ScrollView>
    </View>
  );
        }
}

const styles = StyleSheet.create({
  threeRowText: {
    fontSize: 10,
    color: 'white',
    marginBottom: '10%',
  },
  year: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginTop: '10%',
  },
  threeRowdate: {
    fontSize: 12,
    color: 'white',
  },
  threeimageBlock: {
    marginTop: 4,
    width: 170,
    minHeight: 300,
    borderRadius: 10,

    //borderBottomColor: 'green',
    // //backgroundColor:'green'
    marginHorizontal: 5,
  },
  todaysLaunchView: {
    // width: '100%',
    minHeight: 130,
    //backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fourrowView: {
    width: '100%',
    height: '14%',
    //backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    justifyContent: 'space-evenly',
  },

  date: {
    fontSize: 10,
    color: 'white',
    marginTop: '10%',
  },
  rowtitleText: {
    fontSize: 10,
    color: 'white',
    marginBottom: '5%',
  },
  rowView: {
    width: '100%',
    height: '15%',
    //backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 5,
  },
  image: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    paddingTop: '5%',
    justifyContent: 'center',
    overflow: 'hidden',
    borderTopRightRadius:3,
    borderTopLeftRadius: 3,
    borderBottomWidth: 3,
  },
  threerowimage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    // paddingTop:'5%',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 10,
    // borderBottomWidth:20,
    // backgroundColor:'yellow'
  },
  rowimage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    // paddingTop:'5%',
    justifyContent: 'center',
    overflow: 'hidden',
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
    // borderBottomWidth:20,
    // //backgroundColor:'yellow'
  },
  rowimageBlock: {
    marginTop: 4,
    width: '48%',
    height: '100%',
    borderBottomWidth: 3,
    borderRadius: 3,

    //borderBottomColor: 'green',
    // //backgroundColor:'green'
  },
  imageBlock: {
    marginTop: 4,
    width: '98%',
    borderBottomWidth: 3,
    borderRadius: 3,
    //borderBottomColor: 'green',
    // //backgroundColor:'green'
  },
  launchView: {
    //backgroundColor: 'green',
    marginTop: 6,

    paddingLeft: 10,
    flexDirection: 'row',
    width: '93%',
    justifyContent: 'space-between',
  },
  storyView: {
    marginTop: 2,
    paddingHorizontal: 10,
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 15,
    color: 'white',
  },
  rightTitleText: {
    fontSize: 10,
    color: 'white',
    marginTop: 5,
  },
  scrollViewParentView: {
    //  flex:1,
    //backgroundColor: 'yellow',
    height: 600,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scrollView: {
    // flex: 1,
    //backgroundColor: 'red',
    height: '100%',
    width: '100%',
    // justifyContent:'center',
    alignItems: 'center',
  },
  backbuttons: {
    //backgroundColor: 'grey',
    height: 30,
    width: '100%',
    flexDirection: 'row',
    // marginVertical: 3,
    // padding:'10%',
    // marginVertical:3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 20,
    // padding:40
  },
  containerr: {
    flex: 1,
    // paddingVertical: '12%',
    paddingTop: '10%',
    paddingBottom: '8%',
    paddingHorizontal: '5%',
    // justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'green',
  },

  text: {
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'white',
  },
});
