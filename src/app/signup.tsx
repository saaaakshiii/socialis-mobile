import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignupScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = () => {
    if (!name || !email || !password) {
      Alert.alert("Missing Information", "Please fill in all required fields.");
      return;
    }

    // Temporary navigation until backend authentication is connected
    router.replace("/(tabs)");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* BACK BUTTON */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={22} color="#1F2937" />
        </TouchableOpacity>

        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.logoBox}>
            <Ionicons name="earth-outline" size={35} color="#F97316" />
          </View>

          <Text style={styles.smallLabel}>JOIN e-KALP</Text>

          <Text style={styles.title}>Create Account</Text>

          <Text style={styles.subtitle}>
            Join the platform and help transform community challenges into
            meaningful solutions.
          </Text>
        </View>

        {/* FORM */}
        <View style={styles.form}>
          {/* NAME */}
          <Text style={styles.label}>
            Full Name <Text style={styles.required}>*</Text>
          </Text>

          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={20} color="#F97316" />

            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              placeholderTextColor="#94A3B8"
              value={name}
              onChangeText={setName}
            />
          </View>

          {/* EMAIL */}
          <Text style={styles.label}>
            Email Address <Text style={styles.required}>*</Text>
          </Text>

          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color="#F97316" />

            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#94A3B8"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* LOCATION */}
          <Text style={styles.label}>Location</Text>

          <View style={styles.inputContainer}>
            <Ionicons name="location-outline" size={20} color="#F97316" />

            <TextInput
              style={styles.input}
              placeholder="City / District"
              placeholderTextColor="#94A3B8"
              value={location}
              onChangeText={setLocation}
            />
          </View>

          {/* PASSWORD */}
          <Text style={styles.label}>
            Password <Text style={styles.required}>*</Text>
          </Text>

          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#F97316" />

            <TextInput
              style={styles.input}
              placeholder="Create a password"
              placeholderTextColor="#94A3B8"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={20}
                color="#94A3B8"
              />
            </TouchableOpacity>
          </View>

          {/* CREATE ACCOUNT */}
          <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
            <Text style={styles.signupButtonText}>Create Account</Text>

            <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* LOGIN */}
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account?</Text>

          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text style={styles.loginButton}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F2",
  },

  content: {
    padding: 24,
    paddingBottom: 35,
  },

  backButton: {
    width: 45,
    height: 45,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    marginTop: 30,
  },

  logoBox: {
    width: 65,
    height: 65,
    backgroundColor: "#FFF7ED",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },

  smallLabel: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 2,
    color: "#F97316",
    marginBottom: 10,
  },

  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1F2937",
  },

  subtitle: {
    fontSize: 15,
    color: "#64748B",
    lineHeight: 22,
    marginTop: 8,
  },

  form: {
    marginTop: 25,
  },

  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#374151",
    marginTop: 18,
    marginBottom: 9,
  },

  required: {
    color: "#F97316",
  },

  inputContainer: {
    height: 56,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: "#1F2937",
  },

  signupButton: {
    height: 58,
    backgroundColor: "#F97316",
    borderRadius: 7,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  signupButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
    marginRight: 10,
  },

  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 28,
  },

  loginText: {
    color: "#64748B",
    fontSize: 14,
  },

  loginButton: {
    color: "#F97316",
    fontSize: 14,
    fontWeight: "800",
    marginLeft: 5,
  },
});
