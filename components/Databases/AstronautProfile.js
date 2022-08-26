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
  TextInput,
} from 'react-native';
import flag from './../../assets/flag.png';
import astronaut from './../../assets/astronaut2.jpg';
import aero from './../../assets/spaceCompanies/aero.png';
import astra from './../../assets/spaceCompanies/astra.png';
import avio from './../../assets/spaceCompanies/avio.png';
import howmet from './../../assets/spaceCompanies/howmet.png';
import leo from './../../assets/spaceCompanies/leo.png';
import thales from './../../assets/spaceCompanies/thales.png';
import virginia from './../../assets/spaceCompanies/virginia.png';
import nasa from './../../assets/spaceCompanies/nasa.png';
import spaceX from './../../assets/spaceCompanies/spaceX.png';

import spacex from './../../assets/spacex.png';
import axiom from './../../assets/axiom.png';

export default function AstronautProfile(props) {
  const {profile}=props.route.params
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.photoRowView}>
          <View style={styles.photoView}>
            <View style={styles.pictureView}>
              <Image source={{uri:profile.profile_image}} style={styles.astronautImage} />
            </View>
          </View>
          <View style={styles.detailView}>
            <View style={styles.flagRowView}>
              <View style={styles.numView}>
                <Text style={styles.number}>#{profile?.id}</Text>
              </View>
              <View style={styles.flagView}>
                <Image source={{uri:profile.country_flag}} style={styles.flagImage} />
              </View>
            </View>
            <View style={styles.nameView}>
              <Text style={styles.name}>{profile?.name}</Text>
            </View>
            <View style={styles.dateView}>
              <Text style={styles.date}>b. {profile?.date_of_birth} - d.{profile?.date_of_death===null?"Present":profile?.date_of_death}</Text>
            </View>
            <View style={styles.otherDetailView}>
              <View style={styles.otherDetail1stRowView}>
                <Text style={styles.detail}>Life Form: Humman</Text>
              </View>
              <View style={styles.otherDetail2ndRowView}>
                <Text style={styles.detail}>Age: --</Text>
              </View>
            </View>
            <View style={styles.otherDetailView}>
              <View style={styles.otherDetail1stRowView}>
                <Text style={styles.detail}>Nationality: {profile?.nationality}</Text>
              </View>
              <View style={styles.otherDetail2ndRowView}>
                <Text style={styles.detail}>Gender: {profile?.gender}</Text>
              </View>
            </View>

            <View style={styles.otherDetailView}>
              <View style={styles.otherDetail1stRowView}>
                <Text style={styles.detail}>Hometown: ?????</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.astronautStatsView}>
          <Text style={styles.astronautStatText}>Astronaut Stats</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.statsView}>
          <View style={styles.rowStatsView}>
            <Text style={styles.statText}>Missions:</Text>
            <Text style={styles.statValue}>{profile.flights.length}</Text>
          </View>
          <View style={styles.rowStatsView}>
            <Text style={styles.statText}>Days In Space:</Text>
            <Text style={styles.statValue}>{profile.days_in_space}</Text>
          </View>
          <View style={styles.rowStatsView}>
            <Text style={styles.statText}>Spacewalks:</Text>
            <Text style={styles.statValue}>{profile.num_flights}</Text>
          </View>
        </View>
        <View style={styles.companiesView}>
          <View style={styles.logosView}>
            <View style={styles.logoView}>
              <Image source={aero} style={styles.logo} />
            </View>

            <View style={styles.logoView}>
              <Image source={avio} style={styles.logo} />
            </View>
            <View style={styles.logoView}>
              <Image source={virginia} style={styles.logo} />
            </View>
            <View style={styles.logoView}>
              <Image source={howmet} style={styles.logo} />
            </View>
            <View style={styles.logoView}>
              <Image source={leo} style={styles.logo} />
            </View>
          </View>
          <View style={styles.companiesChildView}>
            <View style={styles.companyView}>
              <Image source={nasa} style={styles.company} />
            </View>
            <View style={styles.companyView}>
              <Image source={nasa} style={styles.company} />
            </View>
          </View>
        </View>
        <View style={styles.awardsView}>
          <View style={styles.awardView}>
            <Image source={aero} style={styles.company} />
          </View>
          <View style={styles.awardView}>
            <Image source={virginia} style={styles.company} />
          </View>
          <View style={styles.awardView}>
            <Image source={leo} style={styles.company} />
          </View>
        </View>
        <View style={styles.languageView}>
          <Text style={styles.languageText}>Languages Spoken: </Text>
          <Text style={styles.language}>English, Russian</Text>
        </View>

        <View style={styles.astronautStatsView}>
          <Text style={styles.astronautStatText}>Missions</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.missionsView}>
          {profile.flights.map((item,i)=>(
            <View key={i} style={styles.leftmissionView}>
            <View style={styles.missionPhotoView}>
              <Image source={{uri:item.spacecraft.spacecraft.configuration.image_url}} style={styles.missionPhoto} />
            </View>
            <Text style={styles.missionName}>{item.role.role}</Text>
            <View style={styles.missionDetailView}>
              <View style={styles.missionLeftRowView}>
                <Text style={styles.missionText}>START DATE:</Text>
              </View>
              <View style={styles.missionRightRowView}>
                <Text style={styles.missionText}>{new Date(item.spacecraft.launch.net).toLocaleDateString()}</Text>
              </View>
            </View>
            <View style={styles.missionDetailView}>
              <View style={styles.missionLeftRowView}>
                <Text style={styles.missionText}>VEHICLE:</Text>
              </View>
              <View style={styles.missionRightRowView}>
                <Text style={styles.missionText}>{item.spacecraft.spacecraft.name}</Text>
              </View>
            </View>
            <View style={styles.missionDetailView}>
              <View style={styles.missionLeftRowView}>
                <Text style={styles.missionText}>END DATE:</Text>
              </View>
              <View style={styles.missionRightRowView}>
                <Text style={styles.missionText}>{new Date(item.spacecraft.mission_end).toLocaleDateString()}</Text>
              </View>
            </View>
            <View style={styles.missionDetailView}>
              <View style={styles.missionLeftRowView}>
                <Text style={styles.missionText}>AGENCY:</Text>
              </View>
              <View style={styles.missionLeftRowView}>
                <Text style={styles.missionText}>{item.spacecraft.launch.launch_service_provider.abbreviation}</Text>
              </View>
            </View>
          </View>
         
          ))}
          
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  missionText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
  },
  missionRightRowView: {
    height: '100%',
    width: '50%',
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  missionLeftRowView: {
    height: '100%',
    width: '50%',
    //backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  missionDetailView: {
    flexDirection: 'row',

    //backgroundColor: 'black',
    justifyContent: 'space-between',
    // alignItems:'start'
    height: '10%',
    width: '90%',
  },

  missionName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  possition: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  missionPhoto: {
    width: '100%',
    height: '100%',
    // aspectRatio: 1,
    // borderRadius: 30,

    resizeMode: 'contain',
  },
  missionPhotoView: {
    height: '45%',
    width: '80%',
    // position: 'relative',
    // flex: 1,
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftmissionView: {
    // marginTop: '1%',
    //backgroundColor: 'purple',
    width: '50%',
    height: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    marginBottom:25
    // flexDirection: 'row',
  },
  missionsView: {
    marginBottom: '10%',
    //backgroundColor: 'yellow',
    width: '100%',
    height: 189,
    flexDirection: 'row',
    flexWrap:"wrap"
  },
  language: {
    color: 'white',
    // fontWeight: 'bold',
    fontSize: 13,
  },
  languageText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
  },
  languageView: {
    marginTop: '1%',
    //backgroundColor: 'red',
    width: '100%',
    height: 20,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  awardView: {
    height: '100%',
    width: '8%',
    // position: 'relative',
    // flex: 1,
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  awardsView: {
    marginTop: '1%',
    //backgroundColor: 'purple',
    width: '100%',
    height: '3%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  company: {
    width: '100%',
    height: '100%',
    // aspectRatio: 1,
    // borderRadius: 30,

    resizeMode: 'contain',
  },
  companyView: {
    height: '100%',
    width: '12%',
    marginHorizontal:'3%',
    // position: 'relative',
    // flex: 1,
    //backgroundColor: 'black',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  companiesChildView: {
    width: '40%',
    height: '100%',
    //backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  logo: {
    width: '100%',
    height: '100%',
    // aspectRatio: 1,
    // borderRadius: 30,

    resizeMode: 'contain',
  },
  logoView: {
    height: '100%',
    width: '12%',
    // position: 'relative',
    // flex: 1,
    //backgroundColor: 'red',
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  logosView: {
    width: '60%',
    height: '100%',
    //backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  companiesView: {
    //backgroundColor: 'purple',
    width: '100%',
    height: 20,
    flexDirection: 'row',
    marginTop: '2%',
    justifyContent: 'space-between',
  },
  statText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  statValue: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
  },
  rowStatsView: {
    width: '30%',
    height: '100%',
    //backgroundColor: 'red',
    // justifyContent:'space-between'
  },
  statsView: {
    width: '100%',
    height: 65,
    //backgroundColor: 'purple',
    // marginTop:'1%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  astronautStatText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  line: {
    // flex: 1,
    width: '80%',
    height: 1,
    // marginHorizontal: 20,
    // marginTop: 4,
    backgroundColor: 'white',
  },
  astronautStatsView: {
    width: '100%',
    height: 35,
    //backgroundColor: 'red',
    marginTop: '1%',
  },
  astronautImage: {
    width: '100%',
    height: '100%',
    // aspectRatio: 1,
    borderRadius: 30,

    resizeMode: 'cover',
  },
  pictureView: {
    height: '95%',
    width: '90%',
    // position: 'relative',
    // flex: 1,
    ////backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detail: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 11,
  },
  otherDetail2ndRowView: {
    height: '100%',
    width: '35%',
    //backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  otherDetail1stRowView: {
    height: '100%',
    width: '65%',
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  otherDetailView: {
    flexDirection: 'row',

    //backgroundColor: 'black',
    justifyContent: 'space-between',
    // alignItems:'start'
    height: '12%',
    width: '100%',
  },
  date: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 11,
  },

  dateView: {
    //backgroundColor: 'red',
    justifyContent: 'center',
    height: '11%',
    width: '100%',
    alignItems: 'flex-end',
  },
  name: { color: 'white', fontWeight: 'bold', fontSize: 25 },

  nameView: {
    //backgroundColor: 'black',
    justifyContent: 'center',
    height: '20%',
    width: '100%',
    alignItems: 'flex-start',
  },
  number: { color: 'white', fontWeight: 'bold', fontSize: 12 },
  numView: {
    //backgroundColor: 'yellow',
    height: '100%',
    width: '80%',
    color: 'black',
    // justifyContent:'center',
    // alignItems:'center'
    // paddingLeft: '2%',
    paddingTop: '3%',
    // //backgroundColor: 'blue',
  },
  flagImage: {
    width: '100%',
    height: '100%',
    // aspectRatio: 1,
    //backgroundColor: 'red',
    resizeMode: 'cover',
  },
  flagView: {
    //backgroundColor: 'blue',

    // //backgroundColor: 'red',
    height: '100%',
    width: '20%',
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',
    padding: '.8%',
    // marginTop: '3%',
  },
  flagRowView: {
    flexDirection: 'row',
    width: '100%',
    height: '15%',
    //backgroundColor: 'red',
  },
  detailView: {
    height: '100%',
    //backgroundColor: 'purple',
    width: '65%',
    padding: '.5%',
  },
  photoView: {
    height: '100%',
    //backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    width: '35%',
  },
  photoRowView: {
    width: '100%',
    height: 200,
    //backgroundColor: 'green',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'green',
    paddingHorizontal: '2%',
    marginTop: '3%',
  },
});
