import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

export default function VoiceAssistantScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={26} color="white" />
        </TouchableOpacity>
      </View>

      {/* ElevenLabs Voice Assistant */}
      <WebView
        source={{
          uri: "https://elevenlabs.io/app/talk-to?agent_id=agent_0501m26gbwzmej3t81egz3dypbbs&branch_id=agtbrch_5801m26gby9bfvhs33hm9qvbwgkm",
        }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  header: {
    height: 60,
    justifyContent: "center",
    paddingHorizontal: 15,
  },

  backButton: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
});
