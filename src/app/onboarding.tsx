import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* TOP BRAND */}
        <View style={styles.brand}>
          <View style={styles.logoBox}>
            <Ionicons name="earth-outline" size={38} color="#F97316" />
          </View>

          <Text style={styles.smallLabel}>WELCOME TO e-KALP</Text>

          <Text style={styles.title}>
            Turn Problems Into{"\n"}
            <Text style={styles.orangeText}>Possibilities.</Text>
          </Text>

          <Text style={styles.subtitle}>
            A civic intelligence platform that connects community challenges
            with institutions, experts, and solutions.
          </Text>
        </View>

        {/* FEATURES */}
        <View style={styles.features}>
          <Feature
            icon="document-text-outline"
            title="Report Challenges"
            description="Share problems affecting your community."
          />

          <Feature
            icon="sparkles-outline"
            title="AI-Powered Analysis"
            description="Understand priority, category, and possible duplicates."
          />

          <Feature
            icon="business-outline"
            title="Smart Routing"
            description="Connect challenges with the right institutions."
          />
        </View>

        {/* BUTTONS */}
        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => router.push("/signup")}
          >
            <Text style={styles.primaryButtonText}>Create an Account</Text>

            <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => router.push("/login")}
          >
            <Text style={styles.secondaryButtonText}>
              I already have an account
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <View style={styles.feature}>
      <View style={styles.featureIcon}>
        <Ionicons name={icon} size={24} color="#F97316" />
      </View>

      <View style={styles.featureContent}>
        <Text style={styles.featureTitle}>{title}</Text>

        <Text style={styles.featureDescription}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F2",
  },

  content: {
    flexGrow: 1,
    padding: 24,
    paddingTop: 35,
    paddingBottom: 30,
  },

  brand: {
    marginBottom: 35,
  },

  logoBox: {
    width: 70,
    height: 70,
    borderRadius: 12,
    backgroundColor: "#FFF7ED",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 28,
  },

  smallLabel: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 2,
    color: "#F97316",
    marginBottom: 12,
  },

  title: {
    fontSize: 34,
    fontWeight: "800",
    lineHeight: 42,
    color: "#1F2937",
  },

  orangeText: {
    color: "#F97316",
  },

  subtitle: {
    fontSize: 15,
    color: "#64748B",
    lineHeight: 23,
    marginTop: 16,
  },

  features: {
    gap: 14,
  },

  feature: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },

  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: "#FFF7ED",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  featureContent: {
    flex: 1,
  },

  featureTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: "#1F2937",
  },

  featureDescription: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 4,
    lineHeight: 18,
  },

  bottom: {
    marginTop: "auto",
    paddingTop: 35,
  },

  primaryButton: {
    height: 58,
    backgroundColor: "#F97316",
    borderRadius: 7,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
    marginRight: 10,
  },

  secondaryButton: {
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  secondaryButtonText: {
    color: "#475569",
    fontSize: 14,
    fontWeight: "700",
  },
});
