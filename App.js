import * as React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Expo from 'expo';
import logo from './assets/TLPNlogo.png';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Launches from './components/Launches/Launches';
import UpComingLaunches from './components/Launches/UpComingLaunches';
import LaunchDetail from './components/Launches/LaunchDetail';
import Home from './components/Home/Home';
import TLP from './components/Home/TLP';
import Settings from './components/Home/Settings';

import Databases from './components/Databases/Databases';
import AstronautDatabase from './components/Databases/AstronautDatabase';
import AstronautProfile from './components/Databases/AstronautProfile';

import Trackers from './components/Trackers/Trackers';
import DragonTracker from './components/Trackers/DragonTracker';
import FalconTracker from './components/Trackers/FalconTracker';
import Dashboard from './components/Trackers/Dashboard';

import NewsPage from './components/News/NewsPage';
import StoryDetail from './components/News/StoryDetail';

import Shop from './components/Shop/Shop';
import * as ScreenOrientation from 'expo-screen-orientation';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

const Stack=createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const DatabaseStack = createNativeStackNavigator();
const TrackerStack = createNativeStackNavigator();
const LaunchStack = createNativeStackNavigator();
const NewsStack = createNativeStackNavigator();

function LaunchStackScreen({ navigation }) {
  return (
    <LaunchStack.Navigator initialRouteName="Launches">
      <LaunchStack.Screen
        options={{ headerShown: false }}
        name="Launches"
        component={Launches}
      />
      <LaunchStack.Screen
        options={{ headerShown: false }}
        name="UpComingLaunches"
        component={UpComingLaunches}
      />
      <LaunchStack.Screen
        options={{ headerShown: false }}
        name="LaunchDetail"
        component={LaunchDetail}
      />
    </LaunchStack.Navigator>
  );
}

function NewsStackScreen({ navigation }) {
  const back = '<';

  return (
    <NewsStack.Navigator initialRouteName="NewsPage">
      <NewsStack.Screen
        options={{
          // headerStyle: { height: 100 },
          headerLeft: () => (
            <View
              style={{
                // backgroundColor: 'red',
                width: '100%',
                height: 60,
                // flex: 1,
                // justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  // backgroundColor: 'green',
                  width: '60%',
                  height: 50,
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                  marginRight: '12%',

                  // flex: 1,
                  // width: null,
                  // height: null,
                  resizeMode: 'contain',
                }}
                source={logo}
              />
            </View>
          ),
        }}
        name="NewsPage"
        component={NewsPage}
      />
      <NewsStack.Screen
        options={{
          headerLeft: () => (
            <View
              style={{
                width: '100%',
                height: 60,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: '10%',
                }}>
                <TouchableOpacity
                  style={styles.backbuttons}
                  onPress={() => navigation.navigate('NewsPage')}>
                    <Ionicons name="arrow-back" size={35} color="white" />
                 </TouchableOpacity>
              </View>
              <Image
                style={{
                  width: '60%',
                  height: 50,
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                  marginLeft: '6%',
                  resizeMode: 'contain',
                }}
                source={logo}
              />
            </View>
          ),
        }}
        name="StoryDetail"
        component={StoryDetail}
      />
    </NewsStack.Navigator>
  );
}

function TrackerStackScreen({ navigation }) {
  const back = '<';
  return (
    <TrackerStack.Navigator initialRouteName="Trackers">
      <TrackerStack.Screen
        options={{ headerShown: false }}
        name="Trackers"
        component={Trackers}
      />
      <TrackerStack.Screen
        options={{
          headerShown: false ,
        }}
        name="DragonTracker"
        component={DragonTracker}
      />
      <TrackerStack.Screen
        options={{
           headerShown: false ,
        }}
        name="FalconTracker"
        component={FalconTracker}
      />
      <TrackerStack.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity
              style={styles.backbuttons}
              onPress={() => navigation.navigate('Trackers')}>
           <Ionicons name="arrow-back" size={35} color="white" />
            </TouchableOpacity>
          ),
          title: 'ISS DASHBOARD',
        }}
        name="Dashboard"
        component={Dashboard}
      />
    </TrackerStack.Navigator>
  );
}

function DatabaseStackScreen({ navigation }) {
  const back = '<';
  return (
    <DatabaseStack.Navigator initialRouteName="Databases">
      <DatabaseStack.Screen
        options={{ headerShown: false }}
        name="Databases"
        component={Databases}
      />
      <DatabaseStack.Screen
        options={{ headerShown: false }}
        name="AstronautDatabase"
        component={AstronautDatabase}
      />
      <DatabaseStack.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity
              style={styles.backbuttons}
              onPress={() => navigation.navigate('AstronautDatabase')}>
                  <Ionicons name="arrow-back" size={35} color="white" />
              <Text style={styles.backText}>BACK TO ASTRONAUT DATABASE</Text>
            </TouchableOpacity>
          ),
          title: '',
        }}
        name="AstronautProfile"
        component={AstronautProfile}
      />
    </DatabaseStack.Navigator>
  );
}

function HomeStackScreen({ navigation }) {
  // ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="Settings"
        component={Settings}
      />
       <HomeStack.Screen
        options={{ headerShown: false }}
        name="TLP"
        component={TLP}
      />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'naz': require('./assets/FONTS/nasalization-rg.otf'),
  });
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HOME') {
              iconName = 'home-outline';
            } else if (route.name === 'LAUNCHES') {
              iconName = 'calendar-outline';
            } else if (route.name === 'DATABASES') {
              iconName = 'desktop-outline';
            } else if (route.name === 'TRACKERS') {
              iconName = 'rocket-sharp';
            } else if (route.name === 'NEWS') {
              iconName = 'newspaper-outline';
            } else if (route.name === 'SHOP') {
              iconName = 'cart-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="HOME" component={HomeStackScreen} />
        <Tab.Screen name="LAUNCHES" component={LaunchStackScreen} />
        <Tab.Screen name="TRACKERS" component={TrackerStackScreen} />
        <Tab.Screen name="DATABASES" component={DatabaseStackScreen} />
        <Tab.Screen name="NEWS" component={NewsStackScreen} />
        <Tab.Screen name="SHOP" component={Shop} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backText: {
    fontSize: 10,
    color: 'white',
    marginTop: 15,
  },
  backSign: {
    fontSize: 30,
    color: 'white',
    marginTop: 2,
  },
  backbuttons: {
    // backgroundColor: 'grey',
    height: 50,
    // width: '97%',
    // marginBottom:50,
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 20,
    // padding:40
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
