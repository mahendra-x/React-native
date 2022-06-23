import React,{useRef} from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ScollView,
} from "react-native";

import {
  VStack,
  Input,
  Button,
  IconButton,
  NativeBaseProvider,
  Center,
  Icon,
  Box,
  Divider,
  Heading,
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import Crown from "react-native-vector-icons/FontAwesome5";
import Icons from "./Icons";

const FoodData = [
    {
      curPage:0,
      img: "https://cdn.pixabay.com/photo/2017/01/25/12/31/bitcoin-2007769__480.jpg",
      name: "Deals Zone",
      time: "45 min",
      imgName: "BTC.png",
      currAbbr: "ETH",
      currValue: "30052.05",
      currName: "Etherum",
      gainorloss: "-3.54",
      color: "red",
      
    },
    {
      curPage:1,
      img: "https://cdn.pixabay.com/photo/2021/05/29/15/55/ethereum-6293700__340.jpg",
      name: "Industrial",
      time: "30 min",
      imgName: "DOGE.png",
      currAbbr: "DOGE",
      currValue: "70052.05",
      currName: "DOGE",
      gainorloss: "+9.54",
      color: "green",
    },
    {
      curPage:2,
      img: "https://images.livemint.com/img/2021/10/13/1600x900/CRYPTO-CURRENCIES-0_1634088316233_1634111148233.JPG",
      name: "Electricals ",
      time: "60 min",
      imgName: "ADA.png",
      currAbbr: "ADA",
      currValue: "30052.05",
      currName: "ADA",
      gainorloss: "-3.54",
      color: "red",
    },
    {
      curPage:3,
      img: "https://www.thehindubusinessline.com/money-and-banking/ny36ja/article35803995.ece/alternates/FREE_385/bl-teth",
      name: "Office",
      time: "45 min",
      imgName: "BTT.png",
      currAbbr: "BTT",
      currValue: "30052.05",
      currName: "BTRTTBBB",
      gainorloss: "-3.54",
      color: "red",
    },
    {
      curPage:4,
      img: "https://b.zmtcdn.com/data/pictures/2/19667922/e345f08eecf07656e9e9121e2fa976b6_o2_featured_v2.jpg",
      name: "Covid Essential",
      time: "45 min",
      imgName: "FLT.png",
      currAbbr: "FLT",
      currValue: "30052.05",
      currName: "Flits",
      gainorloss: "+8.54",
      color: "green",
    },
  ];

const Home = () => {
    const [curPage,setCurPage] = React.useState(0);
    const [currentIndex,setCurrentIndex] = React.useState(0);
  function SearchBar() {
    return (
      <VStack
        my="5"
        space={5}
        w="100%"
        maxW="366px"
        divider={
          <Box px="1">
            <Divider />
          </Box>
        }
      >
        <VStack w="100%" space={5} marginBottom={3}>
          <Input
            placeholder="Search People & Places"
            width="340px"
            height="40px"
            borderRadius="20"
            py="0"
            px="2"
            fontSize="12"
            backgroundColor="#fff"
            borderColor="black"
            InputLeftElement={
              <Icon
                m="2"
                ml="3"
                size="6"
                color="black.400"
                as={<MaterialIcons name="search" />}
              />
            }
            InputRightElement={
              <Icon
                m="2"
                mr="3"
                size="6"
                color="blue.400"
                as={<MaterialIcons name="mic" />}
              />
            }
          />
        </VStack>
      </VStack>
    );
  }

  function Example() {
    return (
      <Center flex={1} px="2">
        <SearchBar />
      </Center>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.nav}>
          <View style={styles.logo}>
            <View style={styles.leftIcon}>
              <View style={styles.imageTitle}>
                <View>
                  <Text style={styles.name}>Good Evening</Text>
                </View>
                <View>
                  <Text style={styles.greetings}>Welcome back</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.rightIcon}>
            <View>
              <Crown name="crown" size={30} color="#FFC107" />
            </View>
          </View>
        </View>
        <View>
          <View style={{ padding: 10, backgroundColor: "#f3f3f3" }}>
            <View style={styles.alertContainer}>
              <LinearGradient
                // Background Linear Gradient
                colors={["#0563DB", "#0F8CFF", "#0252CA"]}
                style={styles.background}
              />
              <View style={{ flexWrap: "wrap" }}>
                <Text style={{ color: "white", fontSize: 20 }}>
                  Unlock Premium{"\n"}
                </Text>
                <Text style={{ color: "white", fontSize: 14 }}>
                  create Unlimited HD Scan & Picture to Text{"\n"}
                  Scans without watermarks{"\n"}
                </Text>
              </View>
              <View
                style={{
                  //   backgroundColor: "white",
                  //   borderRadius: "50%",
                  //   padding: 2,
                  marginTop: -10,
                  marginRight: -10,
                }}
              >
                <Image
                  style={{ width: 80, height: 80 }}
                  source={require("../../assets/Mask-Group.png")}
                />
              </View>
            </View>
          </View>
          <View>
            <View style={styles.searchView}>
              <NativeBaseProvider>
                <Center flex={1} px="0">
                  <Example />
                </Center>
              </NativeBaseProvider>
              {/* <View style={{height:1,backgroundColor: 'black'}}></View> */}
            </View>
          </View>
          <View style={styles.iconsBox}>
            
              <View>
                <Icons imageName="File" imageTitle="Single Scan" />
              </View>
              <View>
                <Icons imageName="Folder" imageTitle="Batch Scan" />
              </View>
              <View>
                <Icons imageName="FileText" imageTitle="Scan to Text" />
              </View>
            
          </View>
        </View>
        <View>
            <View style={{backgroundColor: "#f3f3f3",padding:16,paddingTop:10}}>
                <Text style={{fontSize:16,fontWeight:'bold'}}>Recent Scans</Text>
            </View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                data={FoodData}
                keyExtractor={(item, index) => {index.toString(),setCurPage(item.curPage),console.log(index);}}
                // onScroll={Animated.event(
                //   [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                //   {
                //     useNativeDriver: false,
                //   }
                // )}
                // scrollEventThrottle={32}
                // onViewableItemsChanged={viewableItemsChanged}
                // viewabilityConfig={viewConfig}
                // ref={slideRef}
                contentContainerStyle={{
                  paddingTop: 5,
                  backgroundColor: "#f3f3f3",
                  paddingBottom: 15,
                }}
                renderItem={({ item }) => (
             
                  
                  <View style={{ marginLeft: 0, backgroundColor: "#f3f3f3" }}>
                    
                    <Image
                      style={{
                        width: 200,
                        height: 150,
                        marginLeft: 15,
                        borderRadius: 10,
                      }}
                      source={{
                        uri: item.img,
                      
                      }}

                      // source={require("../assets/others/boy.png")}
                    ></Image>
                    
                    {/* <View>
                <Text style={{ margin: 15, fontSize: 12, textAlign: "center" }}>
                  {item.name}
                </Text>
              </View> */}
                  </View>
               
                )}
              />

              <View style={{justifyContent: "center",alignItems: "center",textAlign: "center" }}>

                    {/* <PaginationDot
                    activeDotColor={"#fff"}
                    curPage={4}
                    maxPage={5}
                 
                  /> */}

                  {/* <Paginator data={FoodData} scrollX={scrollX} /> */}

                  

            
             </View>
            </View>
      </View>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   maxWidth:'90%',
    backgroundColor: "#FFFFFF",
  },
  innerContainer: {},
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "4%",
    backgroundColor: "#f3f3f3",
    // borderBottomWidth: 0.1,
    // borderBottomColor: "#7b63ff",
  },
  logo: {
    color: "#fff",
  },
  mongo: {
    color: "#900",
    fontWeight: "bold",
  },
  leftIcon: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  img: {
    paddingRight: 10,
  },
  imageTitle: {
    flexDirection: "column",
    color: "#fff",
  },

  greetings: {
    fontSize: 18,
    fontWeight: 400,
    color: "#9B9B9B",
  },
  name: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
  },
  rightIcon: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  qrscan: {
    marginRight: 15,
  },
  alertContainer: {
    flexDirection: "row",
    // backgroundColor: "#49A6FC",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    borderRadius: 15,
    height: "100%",
  },
  searchView: {
    width: "100%",
    marginTop: "0rem",
    // borderBottomWidth: 1,
    borderBottomColor: "gray",
    backgroundColor: "#f3f3f3",
  },
  iconsBox: {
    flexDirection: "row",

    justifyContent: "space-around",
    backgroundColor: "#f3f3f3",
    flexWrap: "wrap",

    elevation: 15,
  },
  innerIconsBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default Home;
