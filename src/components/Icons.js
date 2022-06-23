import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  FlatList,
  Image,
} from "react-native";

const Icons = (props) => {
  const { imageName, imageTitle } = props;
  return (
    <View style={styles.iconsContainer}>
      <View>
        <Image
          style={styles.img}
          source={require(`../../assets/Icons/${imageName}.png`)}
        />
      </View>
      <View>
        <Text style={styles.imageTitileSize}>{imageTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    // padding: 10,
  },
  img: {
    width: 40,
    height: 40,
    resizeMode:"contain"
  },
  imageTitileSize: {
    fontWeight: 500,
    fontStyle: "bold",
  },
});

export default Icons;
