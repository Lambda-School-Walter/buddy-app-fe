import React from "react";

import Global from "../styles/Global";
import { onSignOut } from "../utils/authHelper";
import { connect } from "react-redux";
import {
  View,
  TouchableHighlight,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import bell from "../assets/icons/bell.png";
import home from "../assets/icons/home.png";
import profile from "../assets/icons/profile.png";

const Profile = props => {
  return (
    <View style={Global.container}>
      <View style={Global.logoContainer}>
        <Text style={Global.logo}>BUDDY</Text>
      </View>
      <TouchableHighlight
        onPress={() => {
          onSignOut();
          props.navigation.navigate("Landing");
        }}
      >
        <Text style={[Global.textNormal, { marginTop: 20 }]}>Sign Out</Text>
      </TouchableHighlight>

      <View style={Global.bottomNav}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Dashboard")}
        >
          <Image source={home} />
        </TouchableOpacity>
        <Image source={bell} />
        <Image source={profile} />
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    ...state,
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  {}
)(Profile);
