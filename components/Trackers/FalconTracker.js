import React, { useState } from "react";

import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  TextInput,
  ActivityIndicator
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Ionicons from "react-native-vector-icons/Ionicons";

import DashedLine from "react-native-dashed-line";

import falcon1 from "./../../assets/Falcon9-1.1.png";
import falcon2 from "./../../assets/Falcon9-2.png";
import falcon3 from "./../../assets/Falcon9.png";
import nasa_red from "./../../assets/spaceCompanies/nasa_red.png";


export default function FalconTracker({navigation}) {
  const [button, setButton] = useState("inservice");
  const back = "<";
  const [search, onChangeSearch] = useState(null);

  const [sortOpen, setSortOpen] = useState(false);
  const [sortValue, setSortValue] = useState("");
  const [sortItems, setSortItems] = useState([
    { label: "A-Z", value: "A_Z" },
    { label: "Booster Number", value: "Booster Number" },
    { label: "Most Flown Missions", value: "Most Flown Missions" },
  ]);
  const [ftdata,setftddata]=useState()
  const apiurl="https://api.tlpnetwork.com/booster"
  const[loading,setloading]=React.useState(false)
  //fetching dashboard info
  const fetchftinfo=()=>{  
  setloading(true)
    fetch(apiurl).
  then((res)=>res.json()).
  then((data)=>
  {
    //console.log(Object.keys(data.in_service[0].flights[0].landing))
    //console.log(data.in_service[0].serial_number.flights[0].landing.attempt)
    setftddata(data)
    setloading(false)
  }
  ).
  catch((e)=>setloading(false))
  }
  //ends
const controller=new AbortController()
React.useEffect(()=>{
  fetchftinfo()
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
      <View style={styles.searchBarView}>
        <View
          style={{
            // //backgroundColor:'red',
            width: "10%",
          }}
        >
          <TouchableOpacity
            style={styles.backbuttons}
            onPress={() => navigation.navigate("Trackers")}
          >
      <Ionicons name="arrow-back" size={35} color="white" />
          </TouchableOpacity>
        </View>

        <Text style={styles.titileTop}>Falcon 9 Tracker</Text>

        <View
          style={{
            // //backgroundColor:'red' ,
            width: "8%",
            height: 40,
            marginRight: 38,
          }}
        >
          <DropDownPicker
            open={sortOpen}
            value={sortValue}
            items={sortItems}
            setOpen={setSortOpen}
            // setValue={setGenderValue}
            // closeOnBackPressed={true}
            theme="DARK"
            setItems={setSortItems}
            modalTitle="Select an item"
            listMode="MODAL"
            // style={styles.dropdown}
            style={{ backgroundColor: "black" }}
            textStyle={styles.text}
            containerStyle={{ width: 80 }}
            placeholder={
              <Ionicons name={"funnel-outline"} size={20} color={"white"} />
            }
          />
        </View>
      </View>
      <View style={styles.topView}>
        <TouchableOpacity
          style={[
            styles.leftButtonTypeView,
            { backgroundColor: button === "inservice" ? "red" : "grey" },
          ]}
          onPress={() => {
            setButton("inservice");
          }}
        >
          <Text style={styles.text}>IN SERVICE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.rightButtonTypeView,
            { backgroundColor: button === "inservice" ? "grey" : "red" },
          ]}
          onPress={() => {
            setButton("retired");
          }}
        >
          <Text style={styles.text}>RETIRED</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.bottomView}>
        {button === "inservice" ? <InService ins={ftdata} /> : <Retired ins={ftdata}/>}
      </ScrollView>
    </View>
  );
        }
}
const Retired = (props) => {
  const{ins}=props
  return (
    <View style={{ flexDirection: "row", flex: 1 }}>
     <View style={styles.leftView}>  
        {
          ins?.out_of_service.map((item,i)=>(
            <View style={[styles.topRowView,{display:item.flights.length===0?"none":"flex"}]}>
            <View style={styles.line}>
              <DashedLine
                dashLength={4}
                dashThickness={4}
                dashColor="white"
                style={{ marginTop: "70%" }}
              />
            </View>
            <View style={styles.hexagon}>
              <View style={styles.hexagonInner}>
                <Text style={styles.text}>{item.serial_number}</Text>
              </View>
              <View style={styles.hexagonBefore} />
              <View style={styles.hexagonAfter} />
            </View>
            <View style={styles.line}>
              <DashedLine
                dashLength={4}
                dashThickness={3}
                dashColor="white"
                style={{ marginTop: "100%" }}
              />
            </View>
          {
              item.flights.map((ite,i)=>(
                <View style={[styles.rectangularHalfer,{minHeight:300}]}>
              <View style={styles.rectangularParentViewHalf}>
                <Text style={styles.date}>- {ite.launch.id}</Text>
                <Text style={styles.titile}>{ite.launch.name}</Text>
                <Text style={styles.date}>LAUNCH</Text>
                <Text style={[styles.date, { marginBottom: "5%" }]}>
                {new Date(ite.launch.net).toLocaleDateString()}
                </Text>
                <View style={styles.logoView}>
                  <Image style={styles.logo} source={nasa_red} />
                </View>
              </View>
              
            </View>
              ))       
          }
          </View>
  
          ))
        }
      </View>
      <View style={styles.rocketView}>
        <View style={styles.topRocketView}>
          <Image style={styles.falcon} source={falcon1} />
        </View>
        <View style={styles.middleRocketView}>
          <Image style={styles.falcon} source={falcon2} />
        </View>
        <View style={styles.bottomRocketView}>
          <Image style={styles.falcon} source={falcon3} />
        </View>
      </View>
    </View>
  );
};

const InService = (props) => {
  const {ins}=props
  return (
    <View style={{ flexDirection: "row", flex: 1 }}>
      <View style={styles.leftView}>  
        {
          ins?.in_service.map((item,i)=>(
            <View style={[styles.topRowView,{display:item.flights.length===0?"none":"flex"}]}>
            <View style={styles.line}>
              <DashedLine
                dashLength={4}
                dashThickness={4}
                dashColor="white"
                style={{ marginTop: "70%" }}
              />
            </View>
            <View style={styles.hexagon}>
              <View style={styles.hexagonInner}>
                <Text style={styles.text}>{item.serial_number}</Text>
              </View>
              <View style={styles.hexagonBefore} />
              <View style={styles.hexagonAfter} />
            </View>
            <View style={styles.line}>
              <DashedLine
                dashLength={4}
                dashThickness={3}
                dashColor="white"
                style={{ marginTop: "100%" }}
              />
            </View>
          {
              item.flights.map((ite,i)=>(
                <View style={[styles.rectangularHalfer,{minHeight:300}]}>
              <View style={styles.rectangularParentViewHalf}>
                <Text style={styles.date}>- {ite.launch.id}</Text>
                <Text style={styles.titile}>{ite.launch.name}</Text>
                <Text style={styles.date}>LAUNCH</Text>
                <Text style={[styles.date, { marginBottom: "5%" }]}>
                {new Date(ite.launch.net).toLocaleDateString()}
                </Text>
                <View style={styles.logoView}>
                  <Image style={styles.logo} source={nasa_red} />
                </View>
              </View>
              
            </View>
              ))       
          }
          </View>
  
          ))
        }
      </View>
      <View style={styles.rocketView}>
        <View style={styles.topRocketView}>
          <Image style={styles.falcon} source={falcon1} />
        </View>
        <View style={styles.middleRocketView}>
          <Image style={styles.falcon} source={falcon2} />
        </View>
        <View style={styles.bottomRocketView}>
          <Image style={styles.falcon} source={falcon3} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  searchBarView: {
    // backgroundColor: 'blue',
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    marginTop: 19,
  },
  titileTop: {
    marginTop: 6,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  backText: {
    marginTop: 6,
    fontSize: 10,
    color: "white",
  },
  backSign: {
    fontSize: 30,
    color: "white",
  },
  backbuttons: {
    // //backgroundColor: 'grey',
    height: 50,
    // width: '97%',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    // padding:40
  },
  midddleRowView: {
    width: "100%",
    height: 105,
    // backgroundColor: 'green',
    justifyContent: "flex-start",
    // alignItems: 'center',
    // backgroundColor: 'yellow',
    // width: '100%',
    // height: '20%',
    // borderRadius:20
    flexDirection: "row",
    direction: "rtl",
  },
  rectangularHalfer: {
    width: "21%",
    height: 175,
    // backgroundColor: 'yellow',
    marginTop: "6%",
    justifyContent: "space-between",
  },
  topRowView: {
    width: "100%",
    height: 200,
    // backgroundColor: 'red',
    justifyContent: "flex-start",
    // alignItems: 'center',
    // backgroundColor: 'yellow',
    // width: '100%',
    // height: '20%',
    // borderRadius:20
    flexDirection: "row",
    direction: "rtl",
  },
  topRocketView: {
    width: "100%",
    height: "15%",
    // backgroundColor: 'red',
  },
  middleRocketView: {
    width: "100%",
    height: "15%",
    // backgroundColor: 'white',
  },
  bottomRocketView: {
    width: "100%",
    height: "70%",
    // backgroundColor: 'yellow',
  },
  leftView: {
    width: "85%",
    height: "100%",
    // backgroundColor: 'blue',
  },
  rocketView: {
    width: "15%",
    height: "100%",
    // backgroundColor: 'red',
    marginRight: "20%",
  },
  verticleLine: {
    // paddingLeft:10,
    height: "100%",
    // marginBottom:10,
    borderStyle: "dashed",
    borderRadius: 1,
    borderWidth: 1,
    borderColor: "red",
    // borderTopColor: 'red',
    marginRight: "10%",
  },
  verticalLineView: {
    backgroundColor: "white",
    width: "100%",
    height: "6%",
    justifyContent: "flex-end",

    alignItems: "flex-end",
  },
  hexagon: {
    width: 55,
    height: 40,
    marginTop: "6.5%",
    // backgroundColor: 'yellow',
  },
  hexagonInner: {
    width: 55,
    height: 30,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  hexagonAfter: {
    position: "absolute",
    bottom: -13,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 28,
    borderLeftColor: "transparent",
    borderRightWidth: 28,
    borderRightColor: "transparent",
    borderTopWidth: 23,
    borderTopColor: "grey",
  },
  hexagonBefore: {
    position: "absolute",
    top: -23,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 28,
    borderLeftColor: "transparent",
    borderRightWidth: 28,
    borderRightColor: "transparent",
    borderBottomWidth: 23,
    borderBottomColor: "grey",
  },
  line: {
    width: "4%",
    height: "50%",
    // backgroundColor: 'white',
    marginTop: "4%",
  },
  logo: {
    // backgroundColor: 'white',

    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  logoView: {
    // backgroundColor: 'red',
    // marginTop: '2%',
    width: "80%",
    height: "20%",
    alignItems: "center",
  },
  date: {
    fontSize: 7,
    // fontStyle: 'italic',
    fontWeight: "bold",
    color: "white",
  },
  titile: {
    fontSize: 12,
    // fontStyle: 'italic',
    fontWeight: "bold",
    color: "white",
    marginBottom: "6%",
  },
  rectangularParentViewHalf: {
    // backgroundColor: 'black',
    width: "100%",
    height: "49.5%",
    alignItems: "center",
    // justifyContent: 'center',
    borderWidth: 3,
    // flex:1,
    borderColor: "white",
  },
  rectangularParentView: {
    // backgroundColor: 'black',
    width: "21%",
    height: "83%",
    alignItems: "center",
    // justifyContent: 'center',
    borderWidth: 3,
    marginTop: "6%",
    // flex:1,
    borderColor: "white",
  },
  hexagonParentView: {
    backgroundColor: "red",
    width: "15%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "green",
  },
  falcon: {
    // backgroundColor: 'green',
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  rowView: {
    // flex: 1,
    justifyContent: "flex-start",
    // alignItems: 'center',
    backgroundColor: "yellow",
    width: "100%",
    height: "20%",
    // borderRadius:20
    flexDirection: "row",
    direction: "rtl",
    // paddingTop:'1%'
  },
  bottomView: {
    // flex: 1,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    // backgroundColor: 'red',
    width: "100%",
    height: "92%",
    // marginBottom: 40,
    // borderRadius:20
    // flexDirection: 'row',
  },
  leftButtonTypeView: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: color === 'inservice' ? 'red' : 'grey',
    width: "54%",
    height: "40%",
    borderRadius: 20,
  },
  topView: {
    // flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: 'purple',
    width: "50%",
    height: "8%",
    // borderRadius:20
    flexDirection: "row",
  },
  rightButtonTypeView: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: color === 'inservice' ? 'grey' : 'red',
    width: "44%",
    height: "40%",
    borderRadius: 20,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
    // backgroundColor: 'green',
    paddingHorizontal: "2%",
  },

  text: {
    fontSize: 15,
    // fontStyle: 'italic',
    fontWeight: "bold",
    color: "white",
  },
});
