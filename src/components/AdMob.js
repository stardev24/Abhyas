import React, { memo } from "react";
import { StyleSheet,Text,View } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { theme } from "../core/theme";
import { AdMobBanner} from 'react-native-admob'
  

const AdMob = ({ }) => (
  <View>
        <AdMobBanner
        adSize="smartBanner"
        adUnitID="xxx"
        testDeviceID=""
        didFailToReceiveAdWithError={this.bannerError} 
        style={styles.banner}
        />
  </View>
);

const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginVertical: 10
  },
  banner:{
    position:'relative'
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 26
  }
});

export default memo(AdMob);
