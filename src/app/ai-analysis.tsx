import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AIAnalysisScreen() {
  const { title, description, category, location } = useLocalSearchParams<{
    title: string;
    description: string;
    category: string;
    location: string;
  }>();

  const [analyzing, setAnalyzing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnalyzing(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Temporary AI simulation
  const getAIAnalysis = () => {
    const text = `${title} ${description}`.toLowerCase();

    let predictedCategory = category;
    let priority = "Medium";
    let department = "Municipal Corporation";
    let confidence = 82;

    // CATEGORY DETECTION
    if (
      text.includes("water") ||
      text.includes("drinking") ||
      text.includes("pipe") ||
      text.includes("supply")
    ) {
      predictedCategory = "Water Supply";
      department = "Water Supply Department";
      confidence = 91;
    }

    if (
      text.includes("road") ||
      text.includes("pothole") ||
      text.includes("bridge")
    ) {
      predictedCategory = "Road & Infrastructure";
      department = "Public Works Department";
      confidence = 89;
    }

    if (
      text.includes("garbage") ||
      text.includes("waste") ||
      text.includes("dirty") ||
      text.includes("sanitation")
    ) {
      predictedCategory = "Sanitation";
      department = "Sanitation Department";
      confidence = 87;
    }

    if (
      text.includes("electricity") ||
      text.includes("light") ||
      text.includes("power") ||
      text.includes("electric")
    ) {
      predictedCategory = "Electricity";
      department = "Electricity Department";
      confidence = 90;
    }

    if (
      text.includes("hospital") ||
      text.includes("doctor") ||
      text.includes("health") ||
      text.includes("medicine")
    ) {
      predictedCategory = "Healthcare";
      department = "Health Department";
      confidence = 88;
    }

    // PRIORITY DETECTION

    if (
      text.includes("emergency") ||
      text.includes("danger") ||
      text.includes("critical") ||
      text.includes("death") ||
      text.includes("contaminated") ||
      text.includes("accident")
    ) {
      priority = "Critical";
    } else if (
      text.includes("urgent") ||
      text.includes("serious") ||
      text.includes("broken") ||
      text.includes("not working")
    ) {
      priority = "High";
    } else if (text.includes("problem") || text.includes("issue")) {
      priority = "Medium";
    }

    return {
      category: predictedCategory,
      priority,
      department,
      confidence,
    };
  };

  const analysis = getAIAnalysis();

  const priorityConfig = {
    Critical: {
      color: "#DC2626",
      background: "#FEF2F2",
      icon: "flame" as const,
    },
    High: {
      color: "#EA580C",
      background: "#FFF7ED",
      icon: "alert-circle" as const,
    },
    Medium: {
      color: "#CA8A04",
      background: "#FEFCE8",
      icon: "information-circle" as const,
    },
    Low: {
      color: "#16A34A",
      background: "#F0FDF4",
      icon: "checkmark-circle" as const,
    },
  };

  const priorityStyle =
    priorityConfig[analysis.priority as keyof typeof priorityConfig];

  const handleSubmit = () => {
    // Later this will send the complete report to Supabase/backend

    router.replace("/(tabs)/problems");
  };

  // LOADING SCREEN

  if (analyzing) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.loadingContainer}>
          <View style={styles.aiCircle}>
            <Ionicons name="sparkles" size={48} color="#7C3AED" />
          </View>

          <Text style={styles.loadingTitle}>
            e-KALP AI is analyzing your report
          </Text>

          <Text style={styles.loadingText}>
            Understanding the problem, determining priority and finding the
            right department...
          </Text>

          <ActivityIndicator
            size="large"
            color="#2563EB"
            style={{ marginTop: 30 }}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* HEADER */}

        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="#1E293B" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>AI Analysis</Text>

          <View style={{ width: 44 }} />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* SUCCESS HERO */}

          <View style={styles.successHero}>
            <View style={styles.successIcon}>
              <Ionicons name="sparkles" size={38} color="#7C3AED" />
            </View>

            <Text style={styles.successTitle}>Analysis Complete!</Text>

            <Text style={styles.successSubtitle}>
              e-KALP AI has analyzed your community problem.
            </Text>
          </View>

          {/* PROBLEM SUMMARY */}

          <Text style={styles.sectionTitle}>Your Report</Text>

          <View style={styles.problemCard}>
            <Text style={styles.problemTitle}>{title}</Text>

            <Text style={styles.problemDescription}>{description}</Text>

            <View style={styles.locationRow}>
              <Ionicons name="location-outline" size={18} color="#64748B" />

              <Text style={styles.locationText}>{location}</Text>
            </View>
          </View>

          {/* AI RESULTS */}

          <Text style={styles.sectionTitle}>🤖 AI Insights</Text>

          {/* CATEGORY */}

          <View style={styles.analysisCard}>
            <View style={[styles.resultIcon, styles.categoryIcon]}>
              <Ionicons name="grid-outline" size={24} color="#2563EB" />
            </View>

            <View style={styles.resultContent}>
              <Text style={styles.resultLabel}>Predicted Category</Text>

              <Text style={styles.resultValue}>{analysis.category}</Text>
            </View>
          </View>

          {/* PRIORITY */}

          <View style={styles.analysisCard}>
            <View
              style={[
                styles.resultIcon,
                { backgroundColor: priorityStyle.background },
              ]}
            >
              <Ionicons
                name={priorityStyle.icon}
                size={24}
                color={priorityStyle.color}
              />
            </View>

            <View style={styles.resultContent}>
              <Text style={styles.resultLabel}>Priority Level</Text>

              <Text
                style={[styles.resultValue, { color: priorityStyle.color }]}
              >
                {analysis.priority}
              </Text>
            </View>

            <View
              style={[
                styles.priorityBadge,
                { backgroundColor: priorityStyle.background },
              ]}
            >
              <Text
                style={[
                  styles.priorityBadgeText,
                  { color: priorityStyle.color },
                ]}
              >
                {analysis.priority}
              </Text>
            </View>
          </View>

          {/* DEPARTMENT */}

          <View style={styles.analysisCard}>
            <View style={[styles.resultIcon, styles.departmentIcon]}>
              <Ionicons name="business-outline" size={24} color="#059669" />
            </View>

            <View style={styles.resultContent}>
              <Text style={styles.resultLabel}>Recommended Department</Text>

              <Text style={styles.resultValue}>{analysis.department}</Text>
            </View>
          </View>

          {/* CONFIDENCE */}

          <View style={styles.confidenceCard}>
            <View style={styles.confidenceHeader}>
              <View>
                <Text style={styles.confidenceTitle}>AI Confidence</Text>

                <Text style={styles.confidenceSubtitle}>
                  How confident the AI is about this analysis
                </Text>
              </View>

              <Text style={styles.confidencePercentage}>
                {analysis.confidence}%
              </Text>
            </View>

            <View style={styles.progressBackground}>
              <View
                style={[
                  styles.progressBar,
                  { width: `${analysis.confidence}%` },
                ]}
              />
            </View>
          </View>

          {/* INFO */}

          <View style={styles.infoBox}>
            <Ionicons
              name="information-circle-outline"
              size={22}
              color="#2563EB"
            />

            <Text style={styles.infoText}>
              This analysis helps route your problem to the appropriate
              department. Final action will be taken by the responsible
              authority.
            </Text>
          </View>

          {/* SUBMIT BUTTON */}

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Ionicons name="send" size={21} color="#FFFFFF" />

            <Text style={styles.submitButtonText}>Submit Report</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
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
    paddingBottom: 45,
  },

  loadingContainer: {
    flex: 1,
    paddingHorizontal: 35,
    alignItems: "center",
    justifyContent: "center",
  },

  aiCircle: {
    width: 100,
    height: 100,
    borderRadius: 35,
    backgroundColor: "#F5F3FF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 28,
  },

  loadingTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1E293B",
    textAlign: "center",
    marginBottom: 12,
  },

  loadingText: {
    fontSize: 15,
    color: "#64748B",
    textAlign: "center",
    lineHeight: 23,
  },

  successHero: {
    backgroundColor: "#F5F3FF",
    borderRadius: 28,
    padding: 28,
    alignItems: "center",
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "#EDE9FE",
  },

  successIcon: {
    width: 76,
    height: 76,
    borderRadius: 25,
    backgroundColor: "#EDE9FE",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  successTitle: {
    fontSize: 23,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 7,
  },

  successSubtitle: {
    fontSize: 14,
    color: "#64748B",
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 14,
  },

  problemCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  problemTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 8,
  },

  problemDescription: {
    fontSize: 14,
    color: "#64748B",
    lineHeight: 21,
    marginBottom: 14,
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  locationText: {
    marginLeft: 6,
    color: "#64748B",
    fontSize: 14,
  },

  analysisCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 13,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  resultIcon: {
    width: 52,
    height: 52,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  categoryIcon: {
    backgroundColor: "#EFF6FF",
  },

  departmentIcon: {
    backgroundColor: "#ECFDF5",
  },

  resultContent: {
    flex: 1,
  },

  resultLabel: {
    fontSize: 13,
    color: "#64748B",
    marginBottom: 4,
  },

  resultValue: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1E293B",
  },

  priorityBadge: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 12,
  },

  priorityBadgeText: {
    fontSize: 12,
    fontWeight: "700",
  },

  confidenceCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  confidenceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  confidenceTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 4,
  },

  confidenceSubtitle: {
    fontSize: 12,
    color: "#64748B",
  },

  confidencePercentage: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2563EB",
  },

  progressBackground: {
    height: 10,
    backgroundColor: "#E2E8F0",
    borderRadius: 10,
    overflow: "hidden",
  },

  progressBar: {
    height: "100%",
    backgroundColor: "#2563EB",
    borderRadius: 10,
  },

  infoBox: {
    backgroundColor: "#EFF6FF",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 22,
  },

  infoText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 13,
    lineHeight: 20,
    color: "#475569",
  },

  submitButton: {
    height: 60,
    borderRadius: 18,
    backgroundColor: "#2563EB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  submitButtonText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});
