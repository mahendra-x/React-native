import React from "react";
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
} from "react-native";

import Left from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/Feather";

const { width, height } = Dimensions.get("window");
console.log(width);

const COLORS = { primary: "#fff", white: "#282534" };

const slides = [
  {
    id: "1",
    image: require("../../assets/onboardImages/Discover-new-technology-1.png"),
    title: `Scan anything in HD,\n Wherever you are...`,
    subtitle: `Simply launch the AirScan app and scan any \n document,papers or real world photographs in \n seconds.`,
  },
  {
    id: "2",
    image: require("../../assets/onboardImages/Group-972.png"),
    title: `Navigate work documents\n like pro1`,
    subtitle: `Scan and organize your work documents in\nstructured folders. Scan single or multiple\ndocuments in one swift go.Merge scans into\nPDFs,reorder pages and share them on the fly`,
  },
  {
    id: "3",
    image: require("../../assets/onboardImages/Father-and-Son-1.png"),
    title: `Less Time scanning homework \n =more time for fun`,
    subtitle: `Scanning of homework and assignments are a \n breeze with AirScan.Capture scans,generate\n PDFs and push them to any app installed on \n your phone. its that easy!`,
  },
  {
    id: "4",
    image: require("../../assets/onboardImages/Hero-Image.png"),
    title: `Covert Pictures to text with our\n next generation offline OCR`,
    subtitle: `Leverage our cutting edge machine learning \n OCR to convert documents to text in seconds\nwith accurate results. Share OCR scans as Doc\nfiles or PDFs in seconds`,
  },
];

const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Image
        source={item?.image}
        style={{ height: "40%", width, resizeMode: "contain" }}
      />
      <View>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

export default function OnBoarding({navigation}) {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <>
        <View
          style={{
            height: height * 0.25,
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          {/* Indicator container */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            {/* Render indicator */}
            {slides.map((_, index) => (
              <>
                <View
                  key={index}
                  style={[
                    styles.indicator,
                    currentSlideIndex == index && {
                      backgroundColor: "#49A6FC",
                      width: 12,
                      height: 12,
                    },
                  ]}
                />
              </>
            ))}
          </View>

          {/* Render buttons */}
          <View
            style={{
              marginBottom: 0,
              width: 50,
              position: "absolute",
              right: 0,
              marginRight: 30,
            }}
          >
            {
              currentSlideIndex == slides.length - 1 ? (
                <>
                  <View style={{ height: 50, justifyContent: "center" }}>
                    <TouchableOpacity
                      style={styles.btn}
                      onPress={() => navigation.replace("HomeScreen")}
                    >
                      <Icon name="chevron-right" size={30} color="#fff" />
                    </TouchableOpacity>
                  </View>
                </>
              ) : null
              
            }
          </View>
        </View>
        <View style={styles.bottomLine}>
          <Image
            style={{ width: 125, height: 20, resizeMode: "contain" }}
            source={require("../../assets/Home-Indicator.png")}
          />
        </View>
      </>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <StatusBar backgroundColor={COLORS.primary} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: COLORS.white,
    fontSize: 13,
    marginTop: 10,
    maxWidth: "87%",
    textAlign: "center",
    fontWeight: "bold",
    // lineHeight: 23,
  },
  title: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 30,
    textAlign: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  indicator: {
    height: 10,
    width: 10,
    backgroundColor: "grey",
    marginHorizontal: 10,
    borderRadius: 50,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#49A6FC",
  },
  bottomLine: {
    bottom: 10,
    alignItems: "center",
  },
});
