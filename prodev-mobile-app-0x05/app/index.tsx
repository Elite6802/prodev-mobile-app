import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  const handleSignIn = () => {
    // Navigate to the sign-in page (login page)
    router.push("/signin");
  };

  const handleJoin = () => {
    // Navigate to the join page (sign up page)
    router.push("/join");
  };

  // NEW: Handler for navigating to the Tab Navigator's Home screen
  const handleContinueToHome = () => {
    // Use a type assertion (as any) to satisfy the strict TypeScript checker
    // while providing the correct, resolved path for the Tab Navigator.
    router.replace("/(home)" as any);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("@/assets/images/background-image.png")}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.container}>
            {/* Company Logo */}
            <View style={styles.companyLogo}>
              <Image source={require("@/assets/images/logo.png")} />
            </View>

            {/* Text Elements */}
            <View style={styles.textGroup}>
              <Text style={styles.textLarge}>Find your favorite place here</Text>
              <Text style={styles.textSmall}>The best prices for over 2 </Text>
              <Text style={styles.textSmall}>million properties worldwide</Text>
            </View>

            {/* Button Group and Navigation Prompt */}
            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
              <View style={styles.buttonGroup}>
                {/* Handle 'Join here' (Sign Up) click */}
                <TouchableOpacity style={styles.button} onPress={handleJoin}>
                  <Text style={{ ...styles.textSmall, color: "black" }}>Join here</Text>
                </TouchableOpacity>

                {/* Handle 'Sign In' (Login) click */}
                <TouchableOpacity style={styles.transparentButton} onPress={handleSignIn}>
                  <Text style={styles.textSmall}>Sign In</Text>
                </TouchableOpacity>
              </View>

              {/* WRAP 'Continue to home' in TouchableOpacity with new handler */}
              <TouchableOpacity onPress={handleContinueToHome} style={{ alignItems: "center", paddingVertical: 20 }}>
                <Text style={{ color: "white" }}>Continue  </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: Dimensions.get("window").height,
  },
  companyLogo: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    marginBottom: 50,
  },
  textGroup: {
    alignItems: "center",
  },
  textLarge: {
    color: "white",
    fontWeight: "800",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 12,
  },
  textSmall: {
    color: "white",
    fontSize: 18,
    fontWeight: "200",
    textAlign: "center",
  },
  transparentButton: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    flex: 1,
  },
  button: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    backgroundColor: "white",
    flex: 1,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 20,
  },
});