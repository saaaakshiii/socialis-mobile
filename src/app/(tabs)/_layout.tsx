import { Ionicons } from "@expo/vector-icons";
import { router, Tabs } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { COLORS } from "../../../constants/theme";

export default function TabsLayout() {
  // const handleVoiceAssistant = async () => {
  //   await WebBrowser.openBrowserAsync(
  //     "https://elevenlabs.io/app/talk-to?agent_id=agent_0501m26gbwzmej3t81egz3dypbbs&branch_id=agtbrch_5801m26gby9bfvhs33hm9qvbwgkm",
  //   );
  // };

  const handleVoiceAssistant = () => {
    router.push("../voice-assistant");
  };

  return (
    <View style={styles.container}>
      <Tabs
        screenOptions={{
          headerShown: false,

          tabBarStyle: {
            backgroundColor: "#1F1F1F",
            borderTopColor: "#333",
            height: 65,
            paddingTop: 5,
          },

          tabBarActiveTintColor: COLORS.primary,

          tabBarInactiveTintColor: "#8A8A8A",

          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: "600",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="grid-outline" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="problems"
          options={{
            title: "My Problems",
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="document-text-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="report"
          options={{
            title: "Report",
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="add-circle-outline"
                size={size + 3}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>

      {/* AI Voice Assistant Button */}

      <TouchableOpacity
        style={styles.voiceButton}
        onPress={handleVoiceAssistant}
        activeOpacity={0.8}
      >
        <Ionicons name="mic" size={30} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  voiceButton: {
    position: "absolute",

    right: 20,

    // Above bottom navigation
    bottom: 85,

    width: 60,
    height: 60,

    borderRadius: 30,

    backgroundColor: COLORS.primary,

    justifyContent: "center",
    alignItems: "center",

    elevation: 8,

    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.3,

    shadowRadius: 5,
  },
});
