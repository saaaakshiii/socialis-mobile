import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const categories = [
  { name: "Water", icon: "water-outline" },
  { name: "Roads", icon: "construct-outline" },
  { name: "Garbage", icon: "trash-outline" },
  { name: "Electricity", icon: "flash-outline" },
  { name: "Healthcare", icon: "medkit-outline" },
  { name: "Other", icon: "ellipsis-horizontal-outline" },
];

export default function ReportScreen() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}

        <View style={styles.header}>
          <Text style={styles.eyebrow}>CIVIC REPORTING SYSTEM</Text>

          <Text style={styles.heading}>
            Report a <Text style={styles.highlight}>Community Problem</Text>
          </Text>

          <Text style={styles.subheading}>
            Help identify challenges in your community and connect them with the
            right people and institutions.
          </Text>
        </View>

        {/* PROGRESS */}

        <View style={styles.progressContainer}>
          <View style={styles.progressItem}>
            <View style={[styles.stepCircle, styles.activeStep]}>
              <Text style={styles.stepNumber}>01</Text>
            </View>

            <Text style={styles.stepText}>DETAILS</Text>
          </View>

          <View style={styles.progressLine} />

          <View style={styles.progressItem}>
            <View style={styles.stepCircle}>
              <Text style={styles.inactiveStepNumber}>02</Text>
            </View>

            <Text style={styles.stepText}>LOCATION</Text>
          </View>

          <View style={styles.progressLine} />

          <View style={styles.progressItem}>
            <View style={styles.stepCircle}>
              <Text style={styles.inactiveStepNumber}>03</Text>
            </View>

            <Text style={styles.stepText}>SUBMIT</Text>
          </View>
        </View>

        {/* CATEGORY */}

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>01 — SELECT CATEGORY</Text>

          <Text style={styles.sectionTitle}>
            What type of problem are you reporting?
          </Text>

          <View style={styles.categoryGrid}>
            {categories.map((category) => {
              const selected = selectedCategory === category.name;

              return (
                <TouchableOpacity
                  key={category.name}
                  style={[
                    styles.categoryCard,
                    selected && styles.categoryCardSelected,
                  ]}
                  onPress={() => setSelectedCategory(category.name)}
                >
                  <Ionicons
                    name={category.icon as any}
                    size={24}
                    color={selected ? "#FF6B00" : "#475569"}
                  />

                  <Text
                    style={[
                      styles.categoryText,
                      selected && styles.categoryTextSelected,
                    ]}
                  >
                    {category.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* TITLE */}

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>02 — PROBLEM TITLE</Text>

          <TextInput
            style={styles.input}
            placeholder="Example: Broken street lights in Ward 4"
            placeholderTextColor="#94A3B8"
            value={title}
            onChangeText={setTitle}
          />
        </View>

        {/* DESCRIPTION */}

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>03 — DESCRIBE THE PROBLEM</Text>

          <TextInput
            style={[styles.input, styles.descriptionInput]}
            placeholder="Describe what happened, where it is happening, and how it affects the community..."
            placeholderTextColor="#94A3B8"
            multiline
            textAlignVertical="top"
            value={description}
            onChangeText={setDescription}
          />
        </View>

        {/* LOCATION */}

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>04 — LOCATION</Text>

          <TouchableOpacity style={styles.locationCard}>
            <View style={styles.locationIcon}>
              <Ionicons name="location-outline" size={24} color="#FF6B00" />
            </View>

            <View style={styles.locationTextContainer}>
              <Text style={styles.locationTitle}>Add Problem Location</Text>

              <Text style={styles.locationSubtitle}>
                Use your current location or enter manually
              </Text>
            </View>

            <Ionicons name="chevron-forward" size={20} color="#64748B" />
          </TouchableOpacity>
        </View>

        {/* PHOTO */}

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>05 — ADD EVIDENCE</Text>

          <TouchableOpacity style={styles.uploadBox}>
            <Ionicons name="camera-outline" size={30} color="#FF6B00" />

            <Text style={styles.uploadTitle}>Add Photo or Evidence</Text>

            <Text style={styles.uploadSubtitle}>
              Photos help institutions understand the problem better
            </Text>
          </TouchableOpacity>
        </View>

        {/* AI NOTICE */}

        <View style={styles.aiBox}>
          <Ionicons name="sparkles-outline" size={22} color="#FF6B00" />

          <View style={styles.aiTextContainer}>
            <Text style={styles.aiTitle}>AI-Assisted Analysis</Text>

            <Text style={styles.aiDescription}>
              e-KALP will analyze your report and help route it to relevant
              departments and institutions.
            </Text>
          </View>
        </View>

        {/* SUBMIT */}

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit Civic Report</Text>

          <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
        </TouchableOpacity>

        <Text style={styles.footerText}>
          YOUR REPORT • COMMUNITY INTELLIGENCE • REAL-WORLD IMPACT
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F2",
  },

  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    marginBottom: 30,
  },

  eyebrow: {
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 2,
    color: "#FF6B00",
    marginBottom: 12,
  },

  heading: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1E293B",
    lineHeight: 40,
  },

  highlight: {
    color: "#FF6B00",
  },

  subheading: {
    fontSize: 15,
    color: "#64748B",
    lineHeight: 23,
    marginTop: 14,
  },

  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
    paddingVertical: 18,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#D9D9D9",
  },

  progressItem: {
    alignItems: "center",
  },

  stepCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },

  activeStep: {
    backgroundColor: "#FF6B00",
    borderColor: "#FF6B00",
  },

  stepNumber: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "800",
  },

  inactiveStepNumber: {
    color: "#64748B",
    fontSize: 10,
    fontWeight: "700",
  },

  stepText: {
    fontSize: 8,
    fontWeight: "700",
    letterSpacing: 1,
    color: "#64748B",
    marginTop: 6,
  },

  progressLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#CBD5E1",
    marginHorizontal: 8,
    marginBottom: 18,
  },

  section: {
    marginBottom: 26,
  },

  sectionLabel: {
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.5,
    color: "#64748B",
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 16,
  },

  categoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  categoryCard: {
    width: "31%",
    minHeight: 90,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    backgroundColor: "#FFFFFF",
    padding: 12,
    justifyContent: "space-between",
  },

  categoryCardSelected: {
    borderColor: "#FF6B00",
    borderWidth: 2,
    backgroundColor: "#FFF7ED",
  },

  categoryText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#475569",
  },

  categoryTextSelected: {
    color: "#FF6B00",
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D9D9D9",
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 14,
    color: "#1E293B",
  },

  descriptionInput: {
    minHeight: 130,
  },

  locationCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D9D9D9",
    padding: 16,
  },

  locationIcon: {
    width: 46,
    height: 46,
    backgroundColor: "#FFF7ED",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  locationTextContainer: {
    flex: 1,
  },

  locationTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1E293B",
  },

  locationSubtitle: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 4,
  },

  uploadBox: {
    height: 150,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#FF6B00",
    backgroundColor: "#FFFDF9",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },

  uploadTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1E293B",
    marginTop: 10,
  },

  uploadSubtitle: {
    textAlign: "center",
    fontSize: 12,
    color: "#64748B",
    marginTop: 6,
    lineHeight: 18,
  },

  aiBox: {
    flexDirection: "row",
    backgroundColor: "#FFF7ED",
    borderLeftWidth: 3,
    borderLeftColor: "#FF6B00",
    padding: 16,
    marginBottom: 24,
  },

  aiTextContainer: {
    flex: 1,
    marginLeft: 12,
  },

  aiTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1E293B",
  },

  aiDescription: {
    fontSize: 12,
    color: "#64748B",
    lineHeight: 18,
    marginTop: 5,
  },

  submitButton: {
    backgroundColor: "#FF6B00",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 18,
    gap: 10,
  },

  submitButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },

  footerText: {
    textAlign: "center",
    fontSize: 8,
    letterSpacing: 1.5,
    color: "#94A3B8",
    marginTop: 20,
  },
});
