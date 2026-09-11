import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const categories = [
  { name: "Water Supply", icon: "water-outline" },
  { name: "Road & Infrastructure", icon: "construct-outline" },
  { name: "Sanitation", icon: "trash-outline" },
  { name: "Electricity", icon: "flash-outline" },
  { name: "Healthcare", icon: "medkit-outline" },
  { name: "Education", icon: "school-outline" },
  { name: "Environment", icon: "leaf-outline" },
  { name: "Other", icon: "ellipsis-horizontal-outline" },
];

export default function ReportProblemScreen() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [showCategories, setShowCategories] = useState(false);

  const handleAnalyze = () => {
    if (!title.trim() || !description.trim()) {
      alert("Please enter the problem title and description.");
      return;
    }

    router.push({
      pathname: "/ai-analysis",
      params: {
        title,
        description,
        category: category || "Not selected",
        location: location || "Location not provided",
      },
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {/* HEADER */}

        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="#1E293B" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Report a Problem</Text>

          <View style={{ width: 44 }} />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* HERO */}

          <View style={styles.hero}>
            <View style={styles.heroIcon}>
              <Ionicons name="megaphone-outline" size={32} color="#2563EB" />
            </View>

            <View style={styles.heroTextContainer}>
              <Text style={styles.heroTitle}>Make your voice heard</Text>

              <Text style={styles.heroSubtitle}>
                Tell us about a problem in your community and e-KALP AI will
                help analyze it.
              </Text>
            </View>
          </View>

          {/* TITLE */}

          <Text style={styles.label}>Problem Title</Text>

          <View style={styles.inputContainer}>
            <Ionicons
              name="create-outline"
              size={20}
              color="#64748B"
              style={styles.inputIcon}
            />

            <TextInput
              style={styles.input}
              placeholder="Example: No water supply in my area"
              placeholderTextColor="#94A3B8"
              value={title}
              onChangeText={setTitle}
            />
          </View>

          {/* DESCRIPTION */}

          <Text style={styles.label}>Describe the Problem</Text>

          <View style={[styles.inputContainer, styles.descriptionContainer]}>
            <TextInput
              style={styles.descriptionInput}
              placeholder="Explain the issue in detail. Include how long the problem has existed and how it affects people..."
              placeholderTextColor="#94A3B8"
              multiline
              textAlignVertical="top"
              value={description}
              onChangeText={setDescription}
            />
          </View>

          {/* CATEGORY */}

          <Text style={styles.label}>Category</Text>

          <TouchableOpacity
            style={styles.selector}
            onPress={() => setShowCategories(true)}
          >
            <View style={styles.selectorLeft}>
              <Ionicons name="grid-outline" size={21} color="#64748B" />

              <Text
                style={[
                  styles.selectorText,
                  !category && styles.placeholderText,
                ]}
              >
                {category || "Select a category"}
              </Text>
            </View>

            <Ionicons name="chevron-down" size={20} color="#64748B" />
          </TouchableOpacity>

          {/* LOCATION */}

          <Text style={styles.label}>Location</Text>

          <View style={styles.inputContainer}>
            <Ionicons
              name="location-outline"
              size={21}
              color="#64748B"
              style={styles.inputIcon}
            />

            <TextInput
              style={styles.input}
              placeholder="Example: Ranchi, Jharkhand"
              placeholderTextColor="#94A3B8"
              value={location}
              onChangeText={setLocation}
            />
          </View>

          {/* PHOTO */}

          <Text style={styles.label}>Add Photo</Text>

          <TouchableOpacity style={styles.photoBox}>
            <View style={styles.cameraCircle}>
              <Ionicons name="camera-outline" size={28} color="#2563EB" />
            </View>

            <Text style={styles.photoTitle}>Upload a photo</Text>

            <Text style={styles.photoSubtitle}>
              Adding a photo can help us understand the problem better
            </Text>
          </TouchableOpacity>

          {/* AI INFO */}

          <View style={styles.aiInfo}>
            <View style={styles.aiIcon}>
              <Ionicons name="sparkles" size={22} color="#7C3AED" />
            </View>

            <View style={styles.aiTextContainer}>
              <Text style={styles.aiTitle}>AI Powered Analysis</Text>

              <Text style={styles.aiDescription}>
                e-KALP will analyze the category, priority and responsible
                department.
              </Text>
            </View>
          </View>

          {/* BUTTON */}

          <TouchableOpacity
            style={styles.analyzeButton}
            onPress={handleAnalyze}
            activeOpacity={0.85}
          >
            <Ionicons name="sparkles" size={22} color="#FFFFFF" />

            <Text style={styles.analyzeButtonText}>Analyze with e-KALP AI</Text>

            <Ionicons name="arrow-forward" size={22} color="#FFFFFF" />
          </TouchableOpacity>

          <Text style={styles.footerText}>
            Your report can help create meaningful change in your community 💙
          </Text>
        </ScrollView>

        {/* CATEGORY MODAL */}

        <Modal
          visible={showCategories}
          transparent
          animationType="slide"
          onRequestClose={() => setShowCategories(false)}
        >
          <Pressable
            style={styles.modalOverlay}
            onPress={() => setShowCategories(false)}
          >
            <Pressable style={styles.modalContent}>
              <View style={styles.modalHandle} />

              <Text style={styles.modalTitle}>Select Category</Text>

              <ScrollView showsVerticalScrollIndicator={false}>
                {categories.map((item) => (
                  <TouchableOpacity
                    key={item.name}
                    style={styles.categoryItem}
                    onPress={() => {
                      setCategory(item.name);
                      setShowCategories(false);
                    }}
                  >
                    <View style={styles.categoryIcon}>
                      <Ionicons
                        name={item.icon as any}
                        size={22}
                        color="#2563EB"
                      />
                    </View>

                    <Text style={styles.categoryName}>{item.name}</Text>

                    {category === item.name && (
                      <Ionicons
                        name="checkmark-circle"
                        size={24}
                        color="#2563EB"
                      />
                    )}
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </Pressable>
          </Pressable>
        </Modal>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  container: {
    flex: 1,
  },

  header: {
    height: 65,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  backButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1E293B",
  },

  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },

  hero: {
    backgroundColor: "#EFF6FF",
    borderRadius: 24,
    padding: 20,
    flexDirection: "row",
    marginBottom: 28,
    borderWidth: 1,
    borderColor: "#DBEAFE",
  },

  heroIcon: {
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: "#DBEAFE",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },

  heroTextContainer: {
    flex: 1,
  },

  heroTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E3A8A",
    marginBottom: 6,
  },

  heroSubtitle: {
    fontSize: 14,
    lineHeight: 21,
    color: "#64748B",
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#334155",
    marginBottom: 10,
    marginTop: 4,
  },

  inputContainer: {
    height: 58,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
    paddingHorizontal: 16,
  },

  inputIcon: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 15,
    color: "#1E293B",
  },

  descriptionContainer: {
    height: 130,
    alignItems: "flex-start",
    paddingVertical: 14,
  },

  descriptionInput: {
    flex: 1,
    width: "100%",
    fontSize: 15,
    color: "#1E293B",
    lineHeight: 22,
  },

  selector: {
    height: 58,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
  },

  selectorLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  selectorText: {
    marginLeft: 12,
    fontSize: 15,
    color: "#1E293B",
  },

  placeholderText: {
    color: "#94A3B8",
  },

  photoBox: {
    height: 170,
    borderRadius: 20,
    borderWidth: 1.5,
    borderStyle: "dashed",
    borderColor: "#93C5FD",
    backgroundColor: "#F8FBFF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 22,
    paddingHorizontal: 30,
  },

  cameraCircle: {
    width: 54,
    height: 54,
    borderRadius: 18,
    backgroundColor: "#DBEAFE",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  photoTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2563EB",
    marginBottom: 5,
  },

  photoSubtitle: {
    fontSize: 12,
    textAlign: "center",
    color: "#94A3B8",
    lineHeight: 18,
  },

  aiInfo: {
    backgroundColor: "#F5F3FF",
    borderRadius: 20,
    padding: 16,
    flexDirection: "row",
    marginBottom: 24,
  },

  aiIcon: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: "#EDE9FE",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  aiTextContainer: {
    flex: 1,
  },

  aiTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#5B21B6",
    marginBottom: 4,
  },

  aiDescription: {
    fontSize: 13,
    lineHeight: 19,
    color: "#64748B",
  },

  analyzeButton: {
    height: 60,
    borderRadius: 18,
    backgroundColor: "#2563EB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  analyzeButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  footerText: {
    textAlign: "center",
    color: "#94A3B8",
    fontSize: 13,
    marginTop: 20,
    lineHeight: 20,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(15,23,42,0.45)",
    justifyContent: "flex-end",
  },

  modalContent: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingBottom: 35,
    paddingTop: 12,
    maxHeight: "75%",
  },

  modalHandle: {
    width: 45,
    height: 5,
    borderRadius: 10,
    backgroundColor: "#CBD5E1",
    alignSelf: "center",
    marginBottom: 18,
  },

  modalTitle: {
    fontSize: 21,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 16,
  },

  categoryItem: {
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },

  categoryIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  categoryName: {
    flex: 1,
    fontSize: 16,
    color: "#334155",
    fontWeight: "500",
  },
});
