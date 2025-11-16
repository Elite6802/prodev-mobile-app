import { Text, TextInput, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles as mainStyles } from "@styles/_mainstyle";
import { styles as joinStyles } from "@styles/_join";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
// Import useRouter for navigation
import { useRouter } from "expo-router";

// NOTE: Using 'any' to resolve TypeScript issues related to style merging without explicit type definitions.
const styles = {
  ...mainStyles,
  ...joinStyles,
} as any;

export default function JoinScreen() {
  const router = useRouter();

  // Navigation function for the back arrow (Home)
  const handleBack = () => {
    // Use replace to go back to the index page (home) and clear the navigation history
    router.replace("/");
  };

  // Navigation function for the "Sign In now" link
  const handleSignIn = () => {
    // Navigate to the sign-in page
    router.push("/signin");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        {/* Back Button and Logo */}
        <View style={styles.navGroup}>
          {/* Back Arrow Button */}
          <TouchableOpacity onPress={handleBack}>
            <Ionicons name="arrow-back" size={25} />
          </TouchableOpacity>
          <Image source={require('@/assets/images/logo-green.png')} />
        </View>

        <Text style={styles.largeText}> Create Your</Text>
        <Text style={styles.largeText}>Account</Text>
        <Text style={styles.smallText}>
          Enter your details to create a new account.
        </Text>

        <View style={styles.formGroup}>
          <View>
            <Text style={styles.placeholderText}>Email</Text>
            <TextInput keyboardType="email-address" style={styles.inputField} />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.placeholderText}>Password</Text>
            <View style={styles.passwordGroup}>
              <TextInput style={{ flex: 1 }} />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
            <Text style={styles.placeholderText}>Confirm Password</Text>
            <View style={styles.passwordGroup}>
              <TextInput style={{ flex: 1 }} />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View
            style={styles.divider}
          ></View>
          <Text
            style={styles.dividerText}
          >
            OR
          </Text>
          <View
            style={styles.divider}
          ></View>
        </View>

        <View style={styles.socialMediaButtonGroup}>
          <TouchableOpacity style={styles.socialMediaButton}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={require("@/assets/images/google.png")} />
              <Text style={styles.socialMediaButtonText}>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialMediaButton}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={require("@/assets/images/facebook.png")} />
              <Text style={styles.socialMediaButtonText}>
                Continue with Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.signupgroup}>
          <Text style={styles.subText}>Already have an account?</Text>
          {/* Navigation Link to Sign In */}
          <TouchableOpacity onPress={handleSignIn}>
            <Text style={styles.subTextJoin}>Sign In now</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}