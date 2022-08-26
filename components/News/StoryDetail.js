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
import author from '../../assets/YannMartel.jpg';
import image from '../../assets/spacex.jpg';
import rocket from '../../assets/rocket.jpg';
import astronaut from '../../assets/astronaut1.jpg';
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function StoryDetail({ route,navigation}) {
  const {news}=route.params
  const array = [
    {
      image: image,
      title: 'SPACEX set to launch historic mission to the Moon',
      date: 'December 12, 2023',
      description:
        'With Artemis missions, NASA will land the first woman and first person of color on the Moon, using innovative technologies to explore more of the lunar surface than ever before. We will collaborate with commercial and international partners and establish the first long-term presence on the Moon. Then, we will use what we learn on and around the Moon to take the next giant leap: sending the first astronauts to Mars.',
    },
    {
      image: rocket,
      title: 'SPACEX set to launch historic mission to the Sun',
      date: 'Agust 22, 2025',
      description:
        'With Artemis missions, NASA will land the first woman and first person of color on the Moon, using innovative technologies to explore more of the lunar surface than ever before. We will collaborate with commercial and international partners and establish the first long-term presence on the Moon. Then, we will use what we learn on and around the Moon to take the next giant leap: sending the first astronauts to Mars.',
    },
    {
      image: astronaut,
      title: 'SPACEX set to launch historic mission to the Mars',
      date: 'November 05, 2024',
      description:
        'With Artemis missions, NASA will land the first woman and first person of color on the Moon, using innovative technologies to explore more of the lunar surface than ever before. We will collaborate with commercial and international partners and establish the first long-term presence on the Moon. Then, we will use what we learn on and around the Moon to take the next giant leap: sending the first astronauts to Mars.',
    },
  ];
  const [button, setButton] = React.useState('twitter');

  return (
    // <SafeAreaView>
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.text}>
            {news?.title}
          </Text>
        </View>
        <View style={styles.nameAndphotoView}>
          <View style={styles.photoView}>
            <Image
              source={{uri:news?.author.profile_image}}
              style={{ width: 40, height: 40, borderRadius: 40 / 2 }}
            />
          </View>
          <View style={styles.authorView}>
            <Text style={styles.author}>{news?.author.username}.</Text>
            <Text style={styles.date}>
              Updated {monthNames[new Date(news.updated_at).getMonth()]+" "+new Date(news?.updated_at).getDate()+", " +new Date(news?.updated_at).getFullYear()}
            </Text>
          </View>
        </View>
        <View style={styles.storyView}>
          <Text style={styles.storyText}>
            {news.description}
          </Text>
        </View>
        <View style={styles.shareView}>
          <Text style={styles.share}>SHARE THIS STORY</Text>
          <View style={styles.line} />
          <View style={styles.btns}>
            <TouchableOpacity onPress={()=>setButton("twitter")} style={[styles.btn1,{backgroundColor:button==='twitter'?"#AC7D0C":"grey"}]}>
              <Text style={styles.btntxt}>TWITTER</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setButton("facebook")} style={[styles.btn,{backgroundColor:button==='facebook'?"#AC7D0C":"grey"}]}>
              <Text style={styles.btntxt}>FACEBOOK</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setButton("email")} style={[styles.btn,{backgroundColor:button==='email'?"#AC7D0C":"grey"}]}>
              <Text style={styles.btntxt}>EMAIL</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.relatedStoryView}>
          <Text style={styles.relatedStory}>RELATED NEWS STORIES</Text>
          <View style={styles.relatedStorLine} />
        </View>
        <View style={styles.storyChildView}>
          {array.map((element) => {
            return (
              <TouchableOpacity
                style={styles.storyChild2View}
                onPress={() => {
                  navigation.navigate('StoryDetail');
                }}>
                <View style={styles.storyphotoView}>
                  <ImageBackground
                    resizeMode="cover"
                    source={element.image}
                    style={styles.storyimage}></ImageBackground>
                </View>
                <View style={styles.storyDetailView}>
                  <Text style={styles.storytitle4}>{element.title}</Text>
                  <Text style={styles.date3}>{element.date}</Text>
                  <Text
                    style={styles.description}
                    numberOfLines={2}
                    ellipsizeMode="tail">
                    {element.description}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </ScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  storytitle4: {
    // flex:1,
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 4,
    color: 'white',
    // alignContent: 'left',
    marginLeft: 4,
    // marginBottom: 10,
  },
  description: {
    fontSize: 10,
    // fontWeight: 'bold',
    color: 'white',
    // alignContent: 'left',
    marginLeft: 4,
    marginTop: 6,
    // marginBottom: 8,
  },
  date3: {
    fontSize: 8,
    fontWeight: 'bold',
    color: 'white',
    // alignContent: 'left',
    marginLeft: 4,
    // marginTop: 1,
    // marginBottom: 8,
  },
  storyimage: {
    flex: 1,
    margin: 4,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    borderRadius: 5,
    // justifyContent: 'flex-end',
    overflow: 'hidden',
    // borderWidth: 0,
  },
  storyDetailView: {
    flex: 2,
    // width: '80%',
    height: '100%',
    // flexDirection:'row',
    // marginHorizontal: 5, // will be deleted
    // backgroundColor: 'red',
  },
  storyphotoView: {
    flex: 1,
    // padding:1,
    // width: '20%',
    // height: '100%',
    // flexDirection:'row',
    // marginHorizontal: 5, // will be deleted
    // backgroundColor: 'white',
  },
  storyChild2View: {
    // flex: 1,
    // width: '100%',
    height: 83,
    flexDirection: 'row',
    margin: 5,
    // padding:5,
    // backgroundColor: 'green',
  },
  storyChildView: {
    // flex: 1,
    width: '100%',
    height: 250,
    // marginHorizontal: 5,
    // marginTop:12,
    // backgroundColor: 'green',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  relatedStorLine: {
    // flex: 1,
    width: '85%',
    height: 5,
    // marginHorizontal: 20,
    marginTop: 4,
    backgroundColor: 'white',
  },
  relatedStoryView: {
    width: '95%',
    // backgroundColor: 'green',
    marginTop: 20,
  },

  relatedStory: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  btntxt: {
    fontSize: 10,
    color: 'white',
    // fontWeight: 'bold',
  },
  btn: {
    flex: 1,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    // width: '20%',
    borderRadius: 20,
  },
  btn1: {
    flex: 1,
    // marginHorizontal: 4.5,
    backgroundColor: '#00acee',
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    // width: '20%',
    borderRadius: 20,
  },
  btns: {
    // marginTop: 5,
    // backgroundColor: 'green',
    width: '70%',
    height: 40,
    // flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    // borderRadius:20,
  },
  line: {
    // flex: 1,
    width: '85%',
    height: 3,
    // marginHorizontal: 20,
    marginTop: 4,
    backgroundColor: 'white',
  },
  shareView: {
    width: '95%',
    // backgroundColor: 'green',
    marginTop: 20,
  },

  share: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  storyText: {
    fontSize: 15,
    color: 'white',
  },
  storyView: {
    width: '100%',
    // backgroundColor: 'green',
  },
  author: {
    fontSize: 12,
    fontStyle: 'italic',
    fontWeight: '500',
    color: 'white',
  },
  date: {
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: '500',
    color: 'white',
  },
  authorView: {
    // backgroundColor: 'green',
    width: '80%',
    margin: 4,
    // paddingHorizontal:10,
    // flex:1,
    // justifyContent:'center',
    // alignItems: 'center',
  },
  photoView: {
    // backgroundColor: 'purple',
    justifyContent: 'center',
  },
  nameAndphotoView: {
    margin: 10,
    // backgroundColor: 'red',
    width: '100%',
    flexDirection: 'row',
  },
  titleView: {
    // backgroundColor: 'green',
    // width: '100%',
    // paddingHorizontal:10,
    // flex:1,
    // justifyContent:'center',
    // alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingHorizontal: '2.5%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '5%',
  },

  text: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '500',
    color: 'white',
  },
});
