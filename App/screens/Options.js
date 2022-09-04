import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Linking,
  Alert,
  StatusBar,
} from "react-native";
import colors from "../constants/colors";
import { Entypo } from "@expo/vector-icons";
import { RowItem, RowSeparator } from "../components/RowItem";

const openLink = (url) => {
  Linking.openURL(url).catch(() => {
    return Alert.alert("Sorry, something went wrong !");
  });
};

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

      <ScrollView>
        <View>
          {/*
        <TouchableOpacity style={styles.row}>
          <Text style={styles.text}>Themes</Text>
          <Entypo name="chevron-right" size={20} color={colors.blue} />
        </TouchableOpacity>
        */}
          <RowItem
            text="Themes"
            onPress={() => openLink("https://moucms.estamosenbeta.com/")}
            rightIcon={
              <Entypo name="chevron-right" size={20} color={colors.blue} />
            }
          />

          <RowSeparator />

          <RowItem
            text="React Native Basics"
            onPress={() => openLink("https://google.com")}
            rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
          />

          <RowSeparator />

          <RowItem
            text="Example"
            onPress={() => openLink("https://facebook.com")}
            rightIcon={<Entypo name="import" size={20} color={colors.blue} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
