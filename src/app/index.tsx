// import { router } from "expo-router";

// import {
//   ImageBackground,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { Colors } from "../constants/theme";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function WelcomeScreen() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ImageBackground
//         source={require("../../assets/images/bg.png")}
//         style={styles.background}
//         resizeMode="cover"
//       >
//         {/* Dark overlay so text is readable */}
//         <View style={styles.overlay}>
//           <View style={styles.content}>
//             <View style={styles.logoContainer}>
//               <Text style={styles.logo}>🌍</Text>
//             </View>

//             <Text style={styles.title}>e-KALP</Text>

//             <Text style={styles.subtitle}>
//               Turning Community Challenges{"\n"}
//               into Real Solutions
//             </Text>
//           </View>

//           <View style={styles.bottom}>
//             <TouchableOpacity
//               style={styles.button}
//               onPress={() => router.push("/onboarding")}
//             >
//               <Text style={styles.buttonText}>Get Started</Text>
//             </TouchableOpacity>

//             <Text style={styles.description}>
//               Report. Collaborate. Innovate.
//             </Text>
//           </View>
//         </View>
//       </ImageBackground>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },

//   background: {
//     flex: 1,
//     width: "100%",
//     height: "100%",
//   },

//   overlay: {
//     flex: 1,
//     backgroundColor: "rgba(5, 15, 30, 0.60)",
//   },

//   content: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 24,
//   },

//   logoContainer: {
//     width: 130,
//     height: 130,
//     borderRadius: 65,
//     backgroundColor: "rgba(224, 242, 254, 0.85)",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 30,
//   },

//   logo: {
//     fontSize: 65,
//   },

//   title: {
//     fontSize: 42,
//     fontWeight: "800",
//     letterSpacing: 3,
//     color: "#FFFFFF",
//   },

//   subtitle: {
//     fontSize: 18,
//     textAlign: "center",
//     color: "#E2E8F0",
//     marginTop: 16,
//     lineHeight: 28,
//   },

//   bottom: {
//     paddingHorizontal: 24,
//     paddingBottom: 50,
//     alignItems: "center",
//   },

//   button: {
//     width: "100%",
//     backgroundColor: "#2563EB",
//     paddingVertical: 17,
//     borderRadius: 14,
//     alignItems: "center",
//   },

//   buttonText: {
//     color: "white",
//     fontSize: 17,
//     fontWeight: "700",
//   },

//   description: {
//     marginTop: 16,
//     color: "#E2E8F0",
//     fontSize: 14,
//   },
// });

import { router } from "expo-router";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants/theme";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../../assets/images/bg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Dark overlay */}
      <View style={styles.overlay}>
        <SafeAreaView style={styles.container}>
          {/* Top Branding */}
          <View style={styles.header}>
            <View style={styles.brandRow}>
              <View style={styles.logoBox}>
                <View style={styles.orangeSquare} />
              </View>

              <Text style={styles.brand}>e-KALP</Text>

              <View style={styles.divider} />

              <Text style={styles.smallBrand}>CIVIC • INTELLIGENCE</Text>
            </View>
          </View>

          {/* Main Content */}
          <View style={styles.content}>
            <Text style={styles.label}>■ BUILD FOR BETTER COMMUNITIES</Text>

            <Text style={styles.title}>
              TURNING REAL-WORLD{"\n"}
              PROBLEMS INTO{"\n"}
              MEANINGFUL CHANGE.
            </Text>

            <Text style={styles.description}>
              A collaborative platform connecting citizens, institutions,
              industry, and government to turn everyday civic problems into
              measurable solutions.
            </Text>

            {/* Buttons */}
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.primaryButton}
                onPress={() => router.push("/onboarding")}
              >
                <Text style={styles.primaryButtonText}>GET STARTED →</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.secondaryButton}
                onPress={() => router.push("/onboarding")}
              >
                <Text style={styles.secondaryButtonText}>EXPLORE →</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Bottom */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>CIVIC INTELLIGENCE PLATFORM</Text>

            <View style={styles.onlineContainer}>
              <View style={styles.onlineDot} />

              <Text style={styles.onlineText}>SYSTEM ONLINE</Text>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(10, 12, 12, 0.78)",
  },

  container: {
    flex: 1,
    paddingHorizontal: 28,
  },

  header: {
    paddingTop: 10,
  },

  brandRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  logoBox: {
    width: 28,
    height: 28,
    borderWidth: 1,
    borderColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  orangeSquare: {
    width: 9,
    height: 9,
    backgroundColor: COLORS.primary,
  },

  brand: {
    color: COLORS.textLight,
    fontSize: 18,
    fontWeight: "800",
    letterSpacing: 1,
  },

  divider: {
    width: 1,
    height: 20,
    backgroundColor: "#666",
    marginHorizontal: 12,
  },

  smallBrand: {
    color: "#A1A1AA",
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 2,
  },

  content: {
    flex: 1,
    justifyContent: "center",
  },

  label: {
    color: COLORS.primary,
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 2,
    marginBottom: 24,
  },

  title: {
    color: COLORS.textLight,
    fontSize: 43,
    fontWeight: "900",
    lineHeight: 48,
    letterSpacing: -1,
  },

  description: {
    color: "#C4C4C4",
    fontSize: 15,
    lineHeight: 24,
    marginTop: 24,
    maxWidth: 350,
  },

  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 35,
  },

  primaryButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 22,
    paddingVertical: 17,
    marginRight: 18,
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.5,
  },

  secondaryButton: {
    paddingVertical: 17,
  },

  secondaryButtonText: {
    color: "#E5E5E5",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1.5,
  },

  footer: {
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.15)",
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  footerText: {
    color: "#777",
    fontSize: 8,
    fontWeight: "700",
    letterSpacing: 1.5,
  },

  onlineContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  onlineDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#22C55E",
    marginRight: 7,
  },

  onlineText: {
    color: "#777",
    fontSize: 8,
    fontWeight: "700",
    letterSpacing: 1.5,
  },
});
