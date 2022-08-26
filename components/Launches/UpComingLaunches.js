import React, { useEffect, useState, useCallback } from "react";
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
  Button,
  Modal,
  Platform,
  ActivityIndicator,
  FlatList
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import { useNavigation } from "@react-navigation/native";

import flag from "./../../assets/flag.png";
import spacex from "./../../assets/spacex.png";
import axiom from "./../../assets/axiom.png";
import sattelite1 from "./../../assets/sattelite1.png";
import sattelite2 from "./../../assets/sattelite2.png";

import Ionicons from "react-native-vector-icons/Ionicons";
import CountDown from "react-native-countdown-component";

export default function UpComingLaunches({ route, navigation }) {
  const [search, onChangeSearch] = useState(null);
  const[load,setload]=React.useState(false)
  const [sortOpen, setSortOpen] = useState(false);
  const [sortValue, setSortValue] = useState("");
  const [uplaunch,setuplaunch]=useState([])
  const [prlaunch,setprlaunch]=useState([])
  const [launchdata,setlaunchdata]=useState([])
  const [launchdatapr,setlaunchdatapr]=useState([])
  const[firstlaunch,setfirstlaunch]=React.useState(null)
  const [sortItems, setSortItems] = useState([
    { label: "A-Z", value: "A_Z" },
    { label: "First Name", value: "First Name" },
    { label: "Last Name", value: "Last Name" },
    { label: "Time In Space", value: "Time In Space" },
  ]);

  const [genderOpen, setGenderOpen] = useState(false);
  const [genderValue, setGenderValue] = useState("");
  const [genderItems, setGenderItems] = useState([
    { label: "ALL", value: "ALL" },
    { label: "Option 1", value: "Option 2" },
    { label: "Option 2", value: "Option 2" },
  ]);

  const [nationOpen, setNationOpen] = useState(false);
  const [nationValue, setNationValue] = useState("");
  const [nationItems, setNationItems] = useState([
    { label: "ALL", value: "ALL" },

    { label: "Option 1", value: "Option 2" },
    { label: "Option 2", value: "Option 2" },
  ]);

  const [agencyOpen, setAgencyOpen] = useState(false);
  const [agencyValue, setAgencyValue] = useState("");
  const [agencyItems, setAgencyItems] = useState([
    { label: "ALL", value: "ALL" },
    { label: "USA", value: "USA" },
    { label: "RUSSIA", value: "RUSSIA" },
    { label: "ESA", value: "ESA" },
    { label: "UAE", value: "UAE" },
    { label: "CANADA", value: "CANADA" },
  ]);

  const [craftOpen, setCraftOpen] = useState(false);
  const [craftValue, setCraftValue] = useState("");
  const [craftItems, setCraftItems] = useState([
    { label: "ALL", value: "ALL" },
    { label: "APOLLO", value: "APOLLO" },
    { label: "CREW DRAGON", value: "CREW DRAGON" },
    { label: "GEMINI", value: "GEMINI" },
    { label: "MERCURY", value: "MERCURY" },
    { label: "NEW SHEPARD", value: "NEW SHEPARD" },
    { label: "SHENZHOU", value: "SHENZHOU" },
    { label: "SOYUZ", value: "SOYUZ" },
    { label: "SPACE SHUTTLE", value: "SPACE SHUTTLE" },
    { label: "SPACESSHIPONE", value: "SPACESSHIPONE" },
    { label: "SPACESSHIPTWO", value: "SPACESSHIPTWO" },
    { label: "VOSKHOD", value: "VOSKHOD" },
    { label: "VOSTOK", value: "VOSTOK" },
    { label: "X-15", value: "X-15" },
  ]);
  const [destinationOpen, setDestinationOpen] = useState(false);
  const [destinationValue, setDestinationValue] = useState("");
  const [destinationItems, setDestinationItems] = useState([
    { label: "ALL", value: "ALL" },
    { label: "ISS", value: "ISS" },
    { label: "MOON", value: "MOON" },
    { label: "LOW EARTH ORBIT", value: "LOW EARTH ORBIT" },
    { label: "SUB ORBITAL", value: "SUB ORBITAL" },
    { label: "SKYLAB", value: "SKYLAB" },
  ]);
  const { page } = route?.params;
  const [button, setButton] = useState(page);
  const getupcomming=()=>{
    setload(true)
    fetch("https://api.tlpnetwork.com/launch/upcoming?limit=100")
    .then((res)=>res.json())
    .then((data)=>{
      setfirstlaunch(Math.floor((new Date(data[0]?.net).getTime()-new Date().getTime())/(24*3600*1000)))
      setuplaunch(data)
      setlaunchdata(data)
      setload(false)
    })    
    .catch((e)=>{
      setload(false)
    })
  }


  const getprevious=()=>{
    setload(true)
    fetch("https://api.tlpnetwork.com/launch/previous?limit=100")
    .then((res)=>res.json())
    .then((data)=>{
      setprlaunch(data)
      setlaunchdatapr(data)
      setload(false)
    })    
    .catch((e)=>{
      setload(false)
    })
  }
//search filtration
//end search filter


  const controller=new AbortController();
  React.useEffect(()=>{
    getupcomming()
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
            onPress={() => navigation.navigate("HOME")}
          >
              <Ionicons name="arrow-back" size={35} color="white" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            // //backgroundColor:'red',
            width: "65%",
          }}
        >
          <TextInput
            style={styles.input}
            textStyle={{ color: "white" }}
            value={search}
            placeholder="Search"
          />
        </View>

        <View
          style={{
            // //backgroundColor:'red' ,
            width: "8%",
            height: 40,
            marginRight: 70,
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
            style={styles.dropdown}
            textStyle={styles.text}
            containerStyle={{ width: 100 }}
            placeholder={
              <Ionicons name={"funnel-outline"} size={25} color={"white"} />
            }
          />
        </View>
      </View>
      <View style={styles.scrollView}>
        <ScrollView
          horizontal={true}
          style={{
            // //backgroundColor: 'red',
    //        alignItems: "center",
          }}
        >
          <DropDownPicker
            open={agencyOpen}
            value={agencyValue}
            items={agencyItems}
            setOpen={setAgencyOpen}
            setValue={setAgencyValue}
            // closeOnBackPressed={true}
            theme="DARK"
            setItems={setAgencyItems}
            modalTitle="Select an item"
            listMode="MODAL"
            style={styles.dropdown}
            textStyle={styles.text}
            containerStyle={{ width: 125, marginLeft: 3 }}
            placeholder={"Agency"}
          />

          <DropDownPicker
            open={nationOpen}
            value={nationValue}
            items={nationItems}
            setOpen={setNationOpen}
            setValue={setNationValue}
            // closeOnBackPressed={true}

            theme="DARK"
            setItems={setNationItems}
            modalTitle="Select an item"
            listMode="MODAL"
            style={styles.dropdown}
            textStyle={styles.text}
            containerStyle={{ width: 125, marginLeft: 3 }}
            placeholder={"Rocket"}
          />
          <DropDownPicker
            open={genderOpen}
            value={genderValue}
            items={genderItems}
            setOpen={setGenderOpen}
            setValue={setGenderValue}
            // closeOnBackPressed={true}
            theme="DARK"
            setItems={setGenderItems}
            modalTitle="Select an item"
            listMode="MODAL"
            style={styles.dropdown}
            textStyle={styles.text}
            containerStyle={{ width: 140 }}
            placeholder={"Launch site"}
          />

          <DropDownPicker
            open={craftOpen}
            value={craftValue}
            items={craftItems}
            setOpen={setCraftOpen}
            setValue={setCraftValue}
            // closeOnBackPressed={true}
            theme="DARK"
            setItems={setCraftItems}
            modalTitle="Select an item"
            listMode="MODAL"
            style={styles.dropdown}
            textStyle={styles.text}
            containerStyle={{ width: 195, marginLeft: 3 }}
            placeholder={"SpaceCraft"}
          />
          <DropDownPicker
            open={destinationOpen}
            value={destinationValue}
            items={destinationItems}
            setOpen={setDestinationOpen}
            setValue={setDestinationValue}
            // closeOnBackPressed={true}
            theme="DARK"
            setItems={setDestinationItems}
            modalTitle="Select an item"
            listMode="MODAL"
            style={styles.dropdown}
            textStyle={styles.text}
            containerStyle={{ width: 205, marginLeft: 3 }}
            placeholder={"Destination"}
          />
        </ScrollView>
      </View>

      <View style={styles.topView}>
        <TouchableOpacity
          style={[
            styles.leftButtonTypeView,
            { backgroundColor: button === "previous" ? "red" : "grey" },
          ]}
          onPress={() => {
            setButton("previous");
          }}
        >
          <Text style={styles.text}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.rightButtonTypeView,
            { backgroundColor: button === "previous" ? "grey" : "red" },
          ]}
          onPress={() => {
            setButton("upcoming");
          }}
        >
          <Text style={styles.text}>Upcoming</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomView}>

{
  button === "previous"?
<ScrollView style={{ marginBottom: 20 }}>
        <View style={styles.scrollViewParentView}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("LAUNCHES", { screen: "LaunchDetail",params:{launchdetail:prlaunch[0],timedetail:0}} )
            }
            style={[styles.imageBlock, { borderBottomColor: "green",minHeight:153 }]}
           // onPress={() => navigation.navigate("LaunchDetail")}
          >
            <ImageBackground
              source={{uri:prlaunch[0]?.image}}
              style={[styles.image,{height:150}]}
            >
              <Text
                style={{ fontSize: 25, fontWeight: "bold", color: "white" }}
              >
                {prlaunch[0]?.name}
              </Text>
              <Text style={styles.titleText}>{prlaunch[0]?.slug}</Text>
              
            </ImageBackground>
          </TouchableOpacity>

          <View style={{width:"100%",minHeight:"100%",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly"}}>
            {
              prlaunch.map((item,i)=>(
                <TouchableOpacity
                onPress={() =>
                  navigation.navigate("LAUNCHES", { screen: "LaunchDetail",params:{launchdetail:item,timedetail:0}} )
                }
              style={[styles.rowimageBlock, { borderBottomColor: "red",width:"48%",height:140 }]}
            >
              <ImageBackground
                source={{uri:item.image}}
                style={styles.rowimage}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
                >
                  {item.name}
                </Text>
                <Text style={styles.rowtitleText}>
               {item.slug}
                </Text>

              </ImageBackground>
            </TouchableOpacity>
            
              ))
            }

          </View>
          
        </View>
      </ScrollView>
      :
      <ScrollView style={{ marginBottom: 20 }}>
      <View style={styles.scrollViewParentView}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("LAUNCHES", { screen: "LaunchDetail",params:{launchdetail:uplaunch[0],timedetail:Math.floor((new Date(uplaunch[0]?.net).getTime()-new Date().getTime())/(24*3600*1000))}} )
          }
          style={[styles.imageBlock, { borderBottomColor: "green",minHeight:153 }]}
          //onPress={() => navigation.navigate("LaunchDetail")}
        >
          <ImageBackground
            source={{uri:uplaunch[0]?.image}}
            style={[styles.image,{height:150}]}
          >
            <Text
              style={{ fontSize: 25, fontWeight: "bold", color: "white" }}
            >
              {uplaunch[0]?.name}
            </Text>
            <Text style={styles.titleText}>{uplaunch[0]?.slug}</Text>
            <CountDown
              until={ firstlaunch * 24 * 60 * 60}
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

        <View style={{width:"100%",minHeight:"100%",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly"}}>
          {
            uplaunch.map((item,i)=>(
              <TouchableOpacity
              onPress={() =>
                navigation.navigate("LAUNCHES", { screen: "LaunchDetail",params:{launchdetail:item,timedetail:Math.floor((new Date(item?.net).getTime()-new Date().getTime())/(24*3600*1000))}} )
              }
            style={[styles.rowimageBlock, { borderBottomColor: "red",width:"48%",height:140 }]}
          >
            <ImageBackground
              source={{uri:item.image}}
              style={styles.rowimage}
            >
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                {item.name}
              </Text>
              <Text style={styles.rowtitleText}>
             {item.slug}
              </Text>
              <CountDown
                until={Math.floor((new Date(item?.net).getTime()-new Date().getTime())/(24*3600*1000)) * 24 * 60 * 60}
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
          
            ))
          }

        </View>
        
      </View>
    </ScrollView>



  }

        {/* button === "previous" ? <Previous ld={launchdata} prd={uplaunch} /> : <Upcoming ld={launchdata} upd={uplaunch} />*/}
      </View>
    </View>
  );
        }
}

const Upcoming = (props) => {
  const navigation = useNavigation();
const{ld,upd}=props
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    " June",
    "July ",
    "August ",
    "September ",
    "October",
    "November",
    "December",
  ];
  var max = 2080;
  var min = 2000;
  var years = [];

  for (var i = min; i <= max; i++) {
    years.push(i);
  }
  const back = "<";
  const next = ">";
  const [currentMonth, setCurrentMonth] = useState(7);
  const [currentYear, setCurrentYear] = useState(22);

  return (
    <View style={styles.container}>
      <View style={styles.monthView}>
        <TouchableOpacity
          onPress={() => {
            if (currentMonth === 0) {
              setCurrentMonth(11);
            } else setCurrentMonth(currentMonth - 1);
          }}
        >
          <Text style={styles.monthText}>{back}</Text>
        </TouchableOpacity>
        <Text style={styles.monthText}>{month[currentMonth]}</Text>
        <TouchableOpacity
          onPress={() => {
            if (currentMonth === 11) {
              setCurrentMonth(0);
            } else setCurrentMonth(currentMonth + 1);
          }}
        >
          <Text style={styles.monthText}>{next}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.monthView}>
        <TouchableOpacity
          onPress={() => {
            if (currentYear === 0) {
              setCurrentYear(80);
            } else setCurrentYear(currentYear - 1);
          }}
        >
          <Text style={styles.yearText}>{back}</Text>
        </TouchableOpacity>
        <Text style={styles.yearText}>{years[currentYear]}</Text>
        <TouchableOpacity
          onPress={() => {
            if (currentYear === 80) {
              setCurrentYear(0);
            } else setCurrentYear(currentYear + 1);
          }}
        >
          <Text style={styles.yearText}>{next}</Text>
        </TouchableOpacity>
      </View>
      {/**card */}
      <ScrollView style={{ marginBottom: 20 }}>
        <View style={styles.scrollViewParentView}>
          <TouchableOpacity
            style={[styles.imageBlock, { borderBottomColor: "green" }]}
            onPress={() => navigation.navigate("LaunchDetail")}
          >
            <ImageBackground
              source={{uri:ld[0]?.image}}
              style={styles.image}
            >
              <Text
                style={{ fontSize: 25, fontWeight: "bold", color: "white" }}
              >
                {ld[0]?.name}
              </Text>
              <Text style={styles.titleText}>{ld[0]?.slug}</Text>
              <CountDown
                until={Math.floor((new Date(ld[0]?.net).getTime()-new Date().getTime())/(24*3600*1000)) * 24 * 60 * 60}
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

          <View style={{width:"100%",minHeight:"100%",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly"}}>
            {
              ld.map((item,i)=>(
                <TouchableOpacity
              style={[styles.rowimageBlock, { borderBottomColor: "red",width:"48%",height:140 }]}
            >
              <ImageBackground
                source={{uri:item.image}}
                style={styles.rowimage}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
                >
                  {item.name}
                </Text>
                <Text style={styles.rowtitleText}>
               {item.slug}
                </Text>
                <CountDown
                  until={Math.floor((new Date(item?.net).getTime()-new Date().getTime())/(24*3600*1000)) * 24 * 60 * 60}
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
            
              ))
            }

          </View>
          
        </View>
      </ScrollView>
      {/**cards end */}
    </View>
  );
};

const Previous = (props) => {
  const navigation = useNavigation();
  const{ld,upd}=props

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    " June",
    "July ",
    "August ",
    "September ",
    "October",
    "November",
    "December",
  ];
  var max = 2080;
  var min = 2000;
  var years = [];

  for (var i = min; i <= max; i++) {
    years.push(i);
  }
  const back = "<";
  const next = ">";
  const [currentMonth, setCurrentMonth] = useState(7);
  const [currentYear, setCurrentYear] = useState(22);

  return (
    <View style={styles.container}>
      <View style={styles.monthView}>
        <TouchableOpacity
          onPress={() => {
            if (currentMonth === 0) {
              setCurrentMonth(11);
            } else setCurrentMonth(currentMonth - 1);
          }}
        >
          <Text style={styles.monthText}>{back}</Text>
        </TouchableOpacity>
        <Text style={styles.monthText}>{month[currentMonth]}</Text>
        <TouchableOpacity
          onPress={() => {
            if (currentMonth === 11) {
              setCurrentMonth(0);
            } else setCurrentMonth(currentMonth + 1);
          }}
        >
          <Text style={styles.monthText}>{next}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.monthView}>
        <TouchableOpacity
          onPress={() => {
            if (currentYear === 0) {
              setCurrentYear(80);
            } else setCurrentYear(currentYear - 1);
          }}
        >
          <Text style={styles.yearText}>{back}</Text>
        </TouchableOpacity>
        <Text style={styles.yearText}>{years[currentYear]}</Text>
        <TouchableOpacity
          onPress={() => {
            if (currentYear === 80) {
              setCurrentYear(0);
            } else setCurrentYear(currentYear + 1);
          }}
        >
          <Text style={styles.yearText}>{next}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ marginBottom: 20 }}>
        <View style={styles.scrollViewParentView}>
          <TouchableOpacity
            style={[styles.imageBlock, { borderBottomColor: "green" }]}
            onPress={() => navigation.navigate("LaunchDetail")}
          >
            <ImageBackground
              source={{uri:ld[0]?.image}}
              style={styles.image}
            >
              <Text
                style={{ fontSize: 25, fontWeight: "bold", color: "white" }}
              >
                {ld[0]?.name}
              </Text>
              <Text style={styles.titleText}>{ld[0]?.slug}</Text>
              <CountDown
                until={0 * 24 * 60 * 60}
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

          <View style={{width:"100%",minHeight:"100%",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly"}}>
            {
              ld.map((item,i)=>(
                <TouchableOpacity
              style={[styles.rowimageBlock, { borderBottomColor: "red",width:"48%",height:140 }]}
            >
              <ImageBackground
                source={{uri:item.image}}
                style={styles.rowimage}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
                >
                  {item.name}
                </Text>
                <Text style={styles.rowtitleText}>
               {item.slug}
                </Text>
                <CountDown
                  until={0 * 24 * 60 * 60}
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
            
              ))
            }

          </View>
          
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 15,
    color: "white",
  },
  rowtitleText: {
    fontSize: 10,
    color: "white",
    marginBottom: "5%",
  },
  rowView: {
    width: "100%",
    // backgroundColor: 'white',
    flexDirection: "row",
    alignItems: "center",
    flexWrap:"wrap",
    justifyContent: "space-evenly",
    marginTop: 5,
    height:150
  },
  image: {
    width: "100%",
    height: 107,
    alignItems: "center",
    paddingTop: "5%",
    justifyContent: "center",
    overflow: "hidden",
    // borderBottomColor:'red',
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
    borderBottomWidth: 3,
  },

  rowimage: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    // paddingTop:'5%',
    justifyContent: "center",
    overflow: "hidden",
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
    // borderBottomWidth:20,
    // //backgroundColor:'yellow'
  },
  rowimageBlock: {
    marginTop: 4,
    width: "48%",
    height: "100%",
    borderBottomWidth: 3,
    borderRadius: 3,

    //borderBottomColor: 'green',
    // //backgroundColor:'green'
  },
  imageBlock: {
    marginTop: 4,
    width: "98%",
   borderBottomWidth: 3,
    borderRadius: 3,
    backgroundColor: "yellow",
    height: 110,
    //borderBottomColor: 'green',
    // //backgroundColor:'green'
  },

  scrollViewParentView: {
    //  flex:1,
    //backgroundColor: 'yellow',
    width: "100%",
    marginTop: 53,
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
  container: {
    flex: 1,
    // paddingVertical: '2%',
    paddingHorizontal: "3%",
    // width:'90%',
    // justifyContent: 'center',
    // //backgroundColor: 'green',
    alignItems: "center",
    paddingTop:"5%"
  },
  yearText: {
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    marginLeft: 3,
    color: "white",
  },
  monthText: {
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    marginLeft: 3,
    color: "white",
  },
  monthView: {
    flexDirection: "row",
    width: "35%",
    height: "3.5%",
    // backgroundColor: 'green',
    justifyContent: "center",
  },
  bottomView: {
    // flex: 1,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    // backgroundColor: 'red',
    flex:1
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
    height: "60%",
    borderRadius: 20,
  },
  topView: {
    // flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: 'purple',
    width: "50%",
    height: "5%",
    // borderRadius:20
    flexDirection: "row",
  },
  rightButtonTypeView: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: color === 'inservice' ? 'grey' : 'red',
    width: "44%",
    height: "60%",
    borderRadius: 20,
  },

  dropdown: {
    borderRadius: 50,
    // //backgroundColor: 'green',
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",

    // paddingHorizontal:40
  },
  text: {
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    // paddingHorizontal:20,
    // //backgroundColor: 'purple',
    width: "100%",
    height: 60,
    // marginTop: 20,
    justifyContent: "center",
    alignContent: "center",
    // flex:1
    // flexDirection: 'row',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    marginTop: "8%",
    borderColor: "white",
    width: "90%",
    paddingLeft: 10,
    // //backgroundColor: 'grey',
    borderRadius: 20,
    color: "white",
  },
  searchBarView: {
    // //backgroundColor: 'blue',
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
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
});
