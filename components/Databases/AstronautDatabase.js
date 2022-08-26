import React, { useEffect, useState } from 'react';
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
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import flag from './../../assets/flag.png';
import spacex from './../../assets/spacex.png';
import axiom from './../../assets/axiom.png';
import sattelite1 from './../../assets/sattelite1.png';
import sattelite2 from './../../assets/sattelite2.png';

import Icon from 'react-native-vector-icons/FontAwesome';

import astronaut from './../../assets/astronaut2.jpg';
export default function AstronautDatabase({ navigation }) {
  const [search, onChangeSearch] = useState(null);

  const [sortOpen, setSortOpen] = useState(false);
  const [sortValue, setSortValue] = useState('');
  const [sortItems, setSortItems] = useState([
    { label: 'A-Z', value: 'AZ' },
    { label: 'First Name', value: 'FN' },
    { label: 'Last Name', value: 'LN' },
    { label: 'Time In Space', value: 'TS' },
  ]);

  const [genderOpen, setGenderOpen] = useState(false);
  const [genderValue, setGenderValue] = useState('');
  const [genderItems, setGenderItems] = useState([
    { label: 'ALL', value: 'ALL' },
    { label: 'MALE', value: 'MALE' },
    { label: 'FEMALE', value: 'FEMALE' },
  ]);
  const [nationOpen, setNationOpen] = useState(false);
  const [nationValue, setNationValue] = useState('');
  const [nationItems, setNationItems] = useState([
    { label: 'ALL', value: 'ALL' },
    { label: 'USA', value: 'American' },
    { label: 'RUSSIA', value: 'Russian' },
    { label: 'UK', value: 'Dutch' },
    { label: 'CANADA', value: 'Canadian' },
    { label: 'CHINA', value: 'Chinese' },
    { label: 'AUS', value: 'Australian' },
  ]);

  const [agencyOpen, setAgencyOpen] = useState(false);
  const [agencyValue, setAgencyValue] = useState('');
  const [agencyItems, setAgencyItems] = useState([
    { label: 'ALL', value: 'ALL' },
    { label: 'NASA', value: 'NASA' },
    { label: 'RFSA', value: 'RFSA' },
    { label: 'ESA', value: 'ESA' },
    { label: 'SPX', value: 'SPX' },
    { label: 'JAXA', value: 'JAXA' },
  ]);

  const [craftOpen, setCraftOpen] = useState(false);
  const [craftValue, setCraftValue] = useState('');
  const [craftItems, setCraftItems] = useState([
    { label: 'ALL', value: 'ALL' },
    { label: 'APOLLO', value: 'APOLLO' },
    { label: 'CREW DRAGON', value: 'CREW DRAGON' },
    { label: 'GEMINI', value: 'GEMINI' },
    { label: 'MERCURY', value: 'MERCURY' },
    { label: 'NEW SHEPARD', value: 'NEW SHEPARD' },
    { label: 'SHENZHOU', value: 'SHENZHOU' },
    { label: 'SOYUZ', value: 'SOYUZ' },
    { label: 'SPACE SHUTTLE', value: 'SPACE SHUTTLE' },
    { label: 'SPACESSHIPONE', value: 'SPACESSHIPONE' },
    { label: 'SPACESSHIPTWO', value: 'SPACESSHIPTWO' },
    { label: 'VOSKHOD', value: 'VOSKHOD' },
    { label: 'VOSTOK', value: 'VOSTOK' },
    { label: 'X-15', value: 'X-15' },
  ]);
  const [destinationOpen, setDestinationOpen] = useState(false);
  const [destinationValue, setDestinationValue] = useState('');
  const [destinationItems, setDestinationItems] = useState([
    { label: 'ALL', value: 'ALL' },
    { label: 'ISS', value: 'International Space Station' },
    { label: 'MOON', value: 'Moon' },
    { label: 'LOW EARTH ORBIT', value: 'LOW EARTH ORBIT' },
    { label: 'SUB ORBITAL', value: 'SUB ORBITAL' },
    { label: 'SKYLAB', value: 'SKYLAB' },
    { label: 'MIR', value: 'Mir' },
    { label: 'MARS', value: 'Mars' },
  ]);

  const back = '<';
  const[astemp,setastemp]=useState([])
  const[asdata,setasdata]=useState([])
const[loading,setloading]=useState(false)
  //getting austronauts
const getaustronauts=()=>{
  setloading(true)
  fetch('https://api.tlpnetwork.com/astronaut?limit=100')
  .then((response)=>response.json())
  .then((data)=>{
    setastemp(data.results)
    setasdata(data.results)
    setloading(false)
  })
  .catch((e)=>{
    setloading(false)
    console.log(e)
  })
}
//ends

//Search function starts
const searchfunc=(e)=>{
  onChangeSearch(e)
  if(e==='')
  {
    setasdata(astemp)
  }
  else
  {
    setasdata(asdata.filter((item,i)=>item.name?.toLowerCase().includes(e.toLowerCase())))
  }
  
}
//search function ends
//gender filtration starts
const genderfiltration=(e)=>{
  setloading(true)
  if(e==='ALL')
  {
    setasdata(astemp)
    setTimeout(() => {
      setloading(false)
    }, 1000);
  }
  else
  {
    setasdata(astemp.filter((item,i)=>item.gender?.toLowerCase()===e.toLowerCase()))
    setTimeout(() => {
      setloading(false)
    }, 1000);
  }
 
}
//gender filtration ends
//nationality filtration starts
  const nationalityfiltration=(e)=>{
    setloading(true)
    if(e==='ALL')
    {
      setasdata(astemp)
      setTimeout(() => {
        setloading(false)
      }, 1000);
    }
    else
    {
      setasdata(astemp.filter((item,i)=>item.nationality?.toLowerCase()===e.toLowerCase()))
      setTimeout(() => {
        setloading(false)
      }, 1000);
    }
   
  }
//nationality filtration ends
//agency filtration starts
const agencyfiltration=(e)=>{
  setloading(true)
  if(e==='ALL')
  {
    setasdata(astemp)
    setTimeout(() => {
      setloading(false)
    }, 1000);
  }
  else
  {
    setasdata(astemp.filter((item,i)=>item?.agency?.abbreviation?.toLowerCase()===e.toLowerCase()))
    setTimeout(() => {
      setloading(false)
    }, 1000);
  }
 
}
//agency filtration ends
//destination filtration starts
const destinationfiltration=(e)=>{
  console.log(e)
  setloading(true)
  if(e==='ALL')
  {
    setasdata(astemp)
    setTimeout(() => {
      setloading(false)
    }, 1000);
  }
  else
  {
    setasdata(astemp.filter((item,i)=>item?.destinations.map((it)=>it.name.toLowerCase()===e.toLowerCase()&&it.visited===true)))
    setTimeout(() => {
      setloading(false)
    }, 1000);
  }
 
}
//destination filtration ends

//GENERAL filtration starts
const generalfiltration=(e)=>{

  switch(e)
  {
    case "AZ":
      setloading(true)
      setasdata(astemp?.sort((a,b)=>a.id-b.id))  
      setTimeout(() => {
        setloading(false)
      }, 1000);
      break;
    case "FN":
      setloading(true)
      setasdata(astemp?.sort((a,b)=>a.name-b.name))
      setTimeout(() => {
        setloading(false)
      }, 1000);
      break;
    case "LN":
      setloading(true)
      setasdata(astemp?.sort((a,b)=>b.name-a.name))
      setTimeout(() => {
        setloading(false)
      }, 1000);
      break;
    case "TS":
      setloading(true)
      setasdata(astemp?.sort((a,b)=>a.days_in_space-b.days_in_space))
      setTimeout(() => {
        setloading(false)
      }, 1000);
      break;
  }
}
//general filtration ends
const Controller=new AbortController();
useEffect(()=>{
  getaustronauts()
  return Controller.abort()
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
            width: '10%',
          }}>
          <TouchableOpacity
            style={styles.backbuttons}
            onPress={() => navigation.navigate('Databases')}>
              <Ionicons name="arrow-back" size={35} color="white" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            // //backgroundColor:'red',
            width: '65%',
          }}>
          <TextInput
            style={styles.input}
            onChangeText={(e)=>searchfunc(e)}
            textStyle={{ color: 'white' }}
            value={search}
            placeholder="Search"
          />
        </View>

        <View
          style={{
            // //backgroundColor:'red' ,
            width: '8%',
            height: 40,
            marginRight: 70,
          }}>
          <DropDownPicker
            open={sortOpen}
            value={sortValue}
            items={sortItems}
            setOpen={setSortOpen}
            setValue={setSortValue}
            theme="DARK"
            setItems={setSortItems}
            modalTitle="Select an item"
            listMode="MODAL"
            // style={styles.dropdown}
            style={styles.dropdown}
            textStyle={styles.text}
            containerStyle={{ width: 100 }}
            placeholder={<Ionicons
              name={'funnel-outline'}
              size={25}
              color={'white'}
            />}
            onChangeValue={(value) => {
              generalfiltration(value)
            }}
         
          />
        </View>
      </View>
      <View style={styles.scrollView}>
        <ScrollView
          horizontal={true}
          style={{
            // //backgroundColor: 'red',
           // alignItems: 'center',
          }}>
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
            containerStyle={{ width: 125, marginLeft: 3 }}
            placeholder={'Gender'}
            onChangeValue={(value) => {
              genderfiltration(value)
            }}
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
            placeholder={'Nation'}
            onChangeValue={(value) => {
              nationalityfiltration(value)
            }}
          />
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
            placeholder={'Agency'}
            onChangeValue={(value) => {
              agencyfiltration(value)
            }}
        
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
            placeholder={'SpaceCraft'}
            disabled
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
            placeholder={'Destination'}
            onChangeValue={(value) => {
              destinationfiltration(value)
            }}
            disabled
          />
        </ScrollView>
      </View>
      <ScrollView style={styles.profileView}>
        <View style={styles.rowView}>
          {
            asdata?.map((item,i)=>{
              return(
                <>
                <TouchableOpacity key={i} style={styles.onePhotoView} onPress={() => navigation.navigate('AstronautProfile',{profile:item})}>
            <View style={styles.pictureView}>
              <Image source={{uri:item.profile_image}} style={styles.astronautImage} />
            </View>
            <View style={styles.detailView}>
              <View style={styles.flagRowView}>
                <View style={styles.flagView}>
                  <Image  source={{uri:item.country_flag}} style={styles.logoView} />
                </View>
                <View style={styles.numView}>
                  <Text style={styles.number}>#{item.id}</Text>
                  <Text style={styles.nameText}>{item.name}</Text>
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
                    <Text style={styles.textInSecondRowOfDetail}>{item.days_in_space}</Text>
                  </View>
                </View>
                <View style={styles.textChildView}>
                  <View style={styles.leftTextView}>
                    <Text style={styles.textInSecondRowOfDetail}>MISSIONS</Text>
                  </View>
                  <View style={styles.textRightView}>
                    <Text style={styles.textInSecondRowOfDetail}>{item?.flights.length}</Text>
                  </View>
                </View>
                <View style={styles.textChildView}>
                  <View style={styles.leftTextView}>
                    <Text style={styles.textInSecondRowOfDetail}>
                      SPACEWALKS
                    </Text>
                  </View>
                  <View style={styles.textRightView}>
                    <Text style={styles.textInSecondRowOfDetail}>{item?.num_flights}</Text>
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
        }
}

const styles = StyleSheet.create({
  logosView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // backgroundColor: 'red',
    width: '65%',
    height: '20%',
    paddingHorizontal: '1%',
  },
  textRightView: {
    //backgroundColor: 'black',
    width: '50%',
    marginLeft: '10%',
  },
  textChildView: {
    flexDirection: 'row',
    // backgroundColor: 'blue',
    width: '100%',
    // height:'33%'
  },
  leftTextView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'green',
    width: '50%',
    height: '100%',
  },
  spaceWalkChildView: {
    flexDirection: 'row',
    //backgroundColor: 'blue',
    width: '100%',
    
  },
  spaceWalkView: {
    width: '70%',
    height: '40%',
    // backgroundColor: 'red',
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
    //backgroundColor: 'yellow',
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
    //backgroundColor: 'purple',
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
    //backgroundColor: 'red',
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
    //backgroundColor: 'blue',
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
  astronautImage: {
    width: '100%',
    height: '100%',
    // aspectRatio: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,

    resizeMode: 'stretch',
  },
  pictureView: {
    height: '57%',
    width: '100%',
    // position: 'relative',
    // flex: 1,
    //backgroundColor: 'yellow',
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
    //backgroundColor: 'green',
    // marginBottom:'10%',
    width: '100%',
  },
  dropdown: {
    borderRadius: 50,
    // //backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',

    // paddingHorizontal:40
  },
  text: {
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    // paddingHorizontal:20,
    // //backgroundColor: 'purple',
    width: '100%',
    height: 60,
    // marginTop: 20,
    justifyContent: 'center',
    alignContent: 'center',
    // flex:1
    // flexDirection: 'row',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    marginTop: '8%',
    borderColor: 'white',
    width: '90%',
    paddingLeft: 10,
    // //backgroundColor: 'grey',
    borderRadius: 20,
    color: 'white',
  },
  searchBarView: {
    // //backgroundColor: 'blue',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  backText: {
    marginTop: 6,
    fontSize: 10,
    color: 'white',
  },
  backSign: {
    fontSize: 30,
    color: 'white',
  },
  backbuttons: {
    // //backgroundColor: 'grey',
    height: 50,
    // width: '97%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    // padding:40
  },
  container: {
    flex: 1,
    paddingVertical: '4%',
    paddingHorizontal: '3%',
    // width:'90%',
    // justifyContent: 'center',
    // //backgroundColor: 'green',
    alignItems: 'center',
  },
});
