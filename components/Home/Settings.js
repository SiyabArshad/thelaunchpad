import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  Switch,
  Platform,
} from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function News() {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const [t24, setT24] = useState(true);
  const [t60, setT60] = useState(false);
  const [t10, setT10] = useState(false);
  const [tlpNews, setTlpNews] = useState(true);

  const [spaceX, setSpaceX] = useState(true);
  const [blueOrigin, setBlueOrigin] = useState(true);
  const [nasa, setNasa] = useState(false);
  const [rocketLab, setRocketLab] = useState(false);
  const [ula, setUla] = useState(true);
  const [northRop, setNorthRop] = useState(true);
  const [rosCosMos, setRoscosmos] = useState(false);
  const [arianSpace, setArianspace] = useState(false);

  const [florida, setFlorida] = useState(true);
  const [wallops, setWallops] = useState(true);
  const [russia, setRussia] = useState(false);
  const [newZealand, setNewZealand] = useState(false);
  const [india, setIndia] = useState(true);
  const [japan, setJapan] = useState(true);
  const [china, setChina] = useState(false);
  const [french, setFrench] = useState(true);
  const [vandenberg, setVandenberg] = useState(true);

  const t24Switch = () => {
    if (t24 === true) {
      // schedulePushNotification();
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    } else {
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    }
    setT24((previousState) => !previousState);
  };
  const t60Switch = () => {
    if (t60 === true) {
      // schedulePushNotification();
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    } else {
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    }
    setT60((previousState) => !previousState);
  };
  const t10Switch = () => {
    if (t10 === true) {
      // schedulePushNotification();
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    } else {
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    }
    setT10((previousState) => !previousState);
  };

  const tlpNewsSwitch = () => {
    if (tlpNews === true) {
      // schedulePushNotification();
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    } else {
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    }
    setTlpNews((previousState) => !previousState);
  };

  const spaceXSwitch = () => {
    if (spaceX === true) {
      // schedulePushNotification();
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    } else {
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    }
    setSpaceX((previousState) => !previousState);
  };
  const blueOriginSwitch = () => {
    if (blueOrigin === true) {
      // schedulePushNotification();
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    } else {
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    }
    setBlueOrigin((previousState) => !previousState);
  };
  const nasaSwitch = () => {
    if (nasa === true) {
      // schedulePushNotification();
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    } else {
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    }
    setNasa((previousState) => !previousState);
  };
  const RocketLabSwitch = () => {
    if (rocketLab === true) {
      // schedulePushNotification();
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    } else {
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    }
    setRocketLab((previousState) => !previousState);
  };
  const ulaSwitch = () => {
    if (ula === true) {
      // schedulePushNotification();
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    } else {
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    }
    setUla((previousState) => !previousState);
  };
  const NorthropSwitch = () => {
    if (northRop === true) {
      // schedulePushNotification();
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    } else {
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    }
    setNorthRop((previousState) => !previousState);
  };
  const roscosmosSwitch = () => {
    if (rosCosMos === true) {
      // schedulePushNotification();
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    } else {
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    }
    setRoscosmos((previousState) => !previousState);
  };
  const arianspaceSwitch = () => {
    if (arianSpace === true) {
      // schedulePushNotification();
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    } else {
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    }
    setArianspace((previousState) => !previousState);
  };

  const floridaSwitch = () => {
    if (florida === true) {
      // schedulePushNotification();
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    } else {
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    }
    setFlorida((previousState) => !previousState);
  };
  const wallopsSwitch = () => {
    if (wallops === true) {
      // schedulePushNotification();
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    } else {
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    }
    setWallops((previousState) => !previousState);
  };
  const russiaSwitch = () => {
    if (russia === true) {
      // schedulePushNotification();
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    } else {
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    }
    setRussia((previousState) => !previousState);
  };
  const newzealandSwitch = () => {
    if (newZealand === true) {
      // schedulePushNotification();
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    } else {
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    }
    setNewZealand((previousState) => !previousState);
  };
  const indiaSwitch = () => {
    if (india === true) {
      // schedulePushNotification();
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    } else {
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    }
    setIndia((previousState) => !previousState);
  };
  const japanSwitch = () => {
    if (japan === true) {
      // schedulePushNotification();
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    } else {
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    }
    setJapan((previousState) => !previousState);
  };
  const chinaSwitch = () => {
    if (china === true) {
      // schedulePushNotification();
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    } else {
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    }
    setChina((previousState) => !previousState);
  };
  const frenchSwitch = () => {
    if (french === true) {
      // schedulePushNotification();
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    } else {
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    }
    setFrench((previousState) => !previousState);
  };
  const vandenbergSwitch = () => {
    if (vandenberg === true) {
      // schedulePushNotification();
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    } else {
      Notifications.scheduleNotificationAsync({
        content: {
          title: "This is customiseable title.",
          body: "Here is the notification body",
          // data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
      });
    }
    setVandenberg((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.titleView}>
          <Text style={styles.title}>TLP</Text>
        </View>
        <Text style={styles.text}>LAUNCH NOTIFICATIONS</Text>
        <View style={styles.swicthView}>
          <Text style={styles.subtext}>Allow T-24 Hour Notifications</Text>
          <Switch
            trackColor={{ false: "#808080", true: "#65a765" }}
            thumbColor={t24 ? "#90ee90" : "black"}
            // ios_//backgroundColor="black"
            onValueChange={t24Switch}
            value={t24}
          />
        </View>
        <View style={styles.swicthView}>
          <Text style={styles.subtext}>Allow T-60 Min Notifications</Text>
          <Switch
            trackColor={{ false: "#808080", true: "#65a765" }}
            thumbColor={t60 ? "#90ee90" : "black"}
            // ios_//backgroundColor="black"
            onValueChange={t60Switch}
            value={t60}
          />
        </View>
        <View style={styles.swicthView}>
          <Text style={styles.subtext}>Allow T-10 Min Notifications</Text>
          <Switch
            trackColor={{ false: "#808080", true: "#65a765" }}
            thumbColor={t10 ? "#90ee90" : "black"}
            // ios_//backgroundColor="black"
            onValueChange={t10Switch}
            value={t10}
          />
        </View>
        <Text style={[styles.text, { marginTop: 10 }]}>NEWS NOTIFICATIONS</Text>

        <View style={styles.swicthView}>
          <Text style={styles.subtext}>Allow TLP News Notifications</Text>
          <Switch
            trackColor={{ false: "#808080", true: "#65a765" }}
            thumbColor={tlpNews ? "#90ee90" : "black"}
            // ios_//backgroundColor="black"
            onValueChange={tlpNewsSwitch}
            value={tlpNews}
          />
        </View>
        <View style={[styles.titleView, { marginVertical: 25 }]}>
          <Text style={styles.subtext}>FAVOURITE FILTERS SETTINGS</Text>
        </View>
        <Text style={styles.text}>AGENCIES</Text>
        <View style={styles.swicthView}>
          <View style={styles.halfSwicthView}>
            <Text style={styles.agenciesText}>SpaceX</Text>
            <Switch
              trackColor={{ false: "#808080", true: "#65a765" }}
              thumbColor={spaceX ? "#90ee90" : "black"}
              // ios_//backgroundColor="black"
              onValueChange={spaceXSwitch}
              value={spaceX}
            />
          </View>
          <View style={styles.halfSwicthView}>
            <Text style={styles.agenciesText}>Blue Origin</Text>
            <Switch
              trackColor={{ false: "#808080", true: "#65a765" }}
              thumbColor={blueOrigin ? "#90ee90" : "black"}
              // ios_//backgroundColor="black"
              onValueChange={blueOriginSwitch}
              value={blueOrigin}
            />
          </View>
        </View>
        <View style={styles.swicthView}>
          <View style={styles.halfSwicthView}>
            <Text style={styles.agenciesText}>NASA</Text>
            <Switch
              trackColor={{ false: "#808080", true: "#65a765" }}
              thumbColor={nasa ? "#90ee90" : "black"}
              // ios_//backgroundColor="black"
              onValueChange={nasaSwitch}
              value={nasa}
            />
          </View>
          <View style={styles.halfSwicthView}>
            <Text style={styles.agenciesText}>RocketLab</Text>
            <Switch
              trackColor={{ false: "#808080", true: "#65a765" }}
              thumbColor={rocketLab ? "#90ee90" : "black"}
              // ios_//backgroundColor="black"
              onValueChange={RocketLabSwitch}
              value={rocketLab}
            />
          </View>
        </View>
        <View style={styles.swicthView}>
          <View style={styles.halfSwicthView}>
            <Text style={styles.agenciesText}>ULA</Text>
            <Switch
              trackColor={{ false: "#808080", true: "#65a765" }}
              thumbColor={ula ? "#90ee90" : "black"}
              // ios_//backgroundColor="black"
              onValueChange={ulaSwitch}
              value={ula}
            />
          </View>
          <View style={styles.halfSwicthView}>
            <Text style={styles.agenciesText}>NorthropGruman</Text>
            <Switch
              trackColor={{ false: "#808080", true: "#65a765" }}
              thumbColor={northRop ? "#90ee90" : "black"}
              // ios_//backgroundColor="black"
              onValueChange={NorthropSwitch}
              value={northRop}
            />
          </View>
        </View>
        <View style={styles.swicthView}>
          <View style={styles.halfSwicthView}>
            <Text style={styles.agenciesText}>Roscosmos</Text>
            <Switch
              trackColor={{ false: "#808080", true: "#65a765" }}
              thumbColor={rosCosMos ? "#90ee90" : "black"}
              // ios_//backgroundColor="black"
              onValueChange={roscosmosSwitch}
              value={rosCosMos}
            />
          </View>
          <View style={styles.halfSwicthView}>
            <Text style={styles.agenciesText}>Arianespace</Text>
            <Switch
              trackColor={{ false: "#808080", true: "#65a765" }}
              thumbColor={arianSpace ? "#90ee90" : "black"}
              // ios_//backgroundColor="black"
              onValueChange={arianspaceSwitch}
              value={arianSpace}
            />
          </View>
        </View>
        <Text style={[styles.text, { marginTop: 15 }]}>LOCATIONS</Text>
        <View style={styles.swicthView}>
          <View style={styles.halfSwicthView}>
            <Text style={styles.agenciesText}>Florida</Text>
            <Switch
              trackColor={{ false: "#808080", true: "#65a765" }}
              thumbColor={florida ? "#90ee90" : "black"}
              // ios_//backgroundColor="black"
              onValueChange={floridaSwitch}
              value={florida}
            />
          </View>
          <View style={styles.halfSwicthView}>
            <Text style={styles.agenciesText}>Wallops</Text>
            <Switch
              trackColor={{ false: "#808080", true: "#65a765" }}
              thumbColor={wallops ? "#90ee90" : "black"}
              // ios_//backgroundColor="black"
              onValueChange={wallopsSwitch}
              value={wallops}
            />
          </View>
        </View>
        <View style={styles.swicthView}>
          <View style={styles.halfSwicthView}>
            <Text style={styles.agenciesText}>Russia/Zazakhstan</Text>
            <Switch
              trackColor={{ false: "#808080", true: "#65a765" }}
              thumbColor={russia ? "#90ee90" : "black"}
              // ios_//backgroundColor="black"
              onValueChange={russiaSwitch}
              value={russia}
            />
          </View>
          <View style={styles.halfSwicthView}>
            <Text style={styles.agenciesText}>New Zealand</Text>
            <Switch
              trackColor={{ false: "#808080", true: "#65a765" }}
              thumbColor={newZealand ? "#90ee90" : "black"}
              // ios_//backgroundColor="black"
              onValueChange={newzealandSwitch}
              value={newZealand}
            />
          </View>
        </View>
        <View style={styles.swicthView}>
          <View style={styles.halfSwicthView}>
            <Text style={styles.agenciesText}>India</Text>
            <Switch
              trackColor={{ false: "#808080", true: "#65a765" }}
              thumbColor={india ? "#90ee90" : "black"}
              // ios_//backgroundColor="black"
              onValueChange={indiaSwitch}
              value={india}
            />
          </View>
          <View style={styles.halfSwicthView}>
            <Text style={styles.agenciesText}>Japan</Text>
            <Switch
              trackColor={{ false: "#808080", true: "#65a765" }}
              thumbColor={japan ? "#90ee90" : "black"}
              // ios_//backgroundColor="black"
              onValueChange={japanSwitch}
              value={japan}
            />
          </View>
        </View>
        <View style={styles.swicthView}>
          <View style={styles.halfSwicthView}>
            <Text style={styles.agenciesText}>China</Text>
            <Switch
              trackColor={{ false: "#808080", true: "#65a765" }}
              thumbColor={china ? "#90ee90" : "black"}
              // ios_//backgroundColor="black"
              onValueChange={chinaSwitch}
              value={china}
            />
          </View>
          <View style={styles.halfSwicthView}>
            <Text style={styles.agenciesText}>French Guiana</Text>
            <Switch
              trackColor={{ false: "#808080", true: "#65a765" }}
              thumbColor={french ? "#90ee90" : "black"}
              // ios_//backgroundColor="black"
              onValueChange={frenchSwitch}
              value={french}
            />
          </View>
        </View>
        <View style={styles.halfSwicthView}>
          <Text style={styles.agenciesText}>Vandenberg</Text>
          <Switch
            trackColor={{ false: "#808080", true: "#65a765" }}
            thumbColor={vandenberg ? "#90ee90" : "black"}
            // ios_//backgroundColor="black"
            onValueChange={vandenbergSwitch}
            value={vandenberg}
          />
        </View>
      </ScrollView>
    </View>
  );
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: "Here is the notification body",
      data: { data: "goes here" },
    },
    trigger: { seconds: 1 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log("token");
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}

const styles = StyleSheet.create({
  agenciesText: {
    fontSize: 15,
    // fontWeight: 'bold',
    color: "white",
  },
  subtext: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: "white",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  halfSwicthView: {
    //backgroundColor: 'red',
    width: "49%",
    height: 35,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  swicthView: {
    //backgroundColor: 'purple',
    width: "100%",
    height: 35,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  titleView: {
    //backgroundColor: 'red',
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  container: {
    flex: 1,
    // alignItems: 'center',
    //backgroundColor: 'green',
    paddingTop: "10%",
    paddingBottom: "3%",
    paddingHorizontal: "4%",
  },

  title: {
    fontSize: 50,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "white",
  },
});
