import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const problems: Record<string, any> = {
  "1": {
    title: "Broken Handpump in Village",
    description:
      "The handpump in our village has been broken for several weeks, affecting drinking water supply. Residents are forced to travel long distances to collect clean drinking water.",
    category: "Water Resources",
    priority: "High",
    status: "Under Review",
    location: "Ranchi, Jharkhand",
    date: "Reported 2 days ago",
    affected: "Approximately 250 citizens",
    icon: "water-outline",

    ai: {
      confidence: "92%",
      department: "Water Resources Department",
      duplicate: "No similar active report found",
    },
  },

  "2": {
    title: "Large Potholes on Main Road",
    description:
      "The main road connecting our village to the nearby town has dangerous potholes. During rain, the road becomes extremely difficult and unsafe to travel on.",
    category: "Urban Infrastructure",
    priority: "Medium",
    status: "Assigned",
    location: "Dhanbad, Jharkhand",
    date: "Reported 5 days ago",
    affected: "Around 500 citizens",
    icon: "construct-outline",

    ai: {
      confidence: "89%",
      department: "Public Works Department",
      duplicate: "2 similar reports detected nearby",
    },
  },

  "3": {
    title: "Street Lights Not Working",
    description:
      "Street lights in our locality have not been functioning for the last month, making the streets unsafe during nighttime.",
    category: "Energy & Electrification",
    priority: "Low",
    status: "Resolved",
    location: "Jamshedpur, Jharkhand",
    date: "Reported 1 week ago",
    affected: "Approximately 120 citizens",
    icon: "flash-outline",

    ai: {
      confidence: "94%",
      department: "Electricity Department",
      duplicate: "No duplicate report found",
    },
  },

  "4": {
    title: "Garbage Accumulation Near School",
    description:
      "Large amounts of garbage have accumulated near the government school. The waste is creating unhygienic conditions and may affect children's health.",
    category: "Healthcare & Sanitation",
    priority: "High",
    status: "In Progress",
    location: "Bokaro, Jharkhand",
    date: "Reported 1 week ago",
    affected: "Students and nearby residents",
    icon: "trash-outline",

    ai: {
      confidence: "91%",
      department: "Municipal Sanitation Department",
      duplicate: "1 similar report found",
    },
  },
};

function getPriorityColor(priority: string) {
  switch (priority) {
    case "Critical":
      return "#DC2626";

    case "High":
      return "#EA580C";

    case "Medium":
      return "#D97706";

    default:
      return "#16A34A";
  }
}

function getPriorityBackground(priority: string) {
  switch (priority) {
    case "Critical":
      return "#FEE2E2";

    case "High":
      return "#FFEDD5";

    case "Medium":
      return "#FEF3C7";

    default:
      return "#DCFCE7";
  }
}

function getStatusColor(status: string) {
  switch (status) {
    case "Resolved":
      return "#16A34A";

    case "In Progress":
      return "#2563EB";

    case "Assigned":
      return "#7C3AED";

    default:
      return "#D97706";
  }
}

export default function ProblemDetailsScreen() {
  const { id } = useLocalSearchParams();

  const problem = problems[String(id)];

  if (!problem) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.errorContainer}>
          <Ionicons name="alert-circle-outline" size={55} color="#EF4444" />

          <Text style={styles.errorTitle}>Problem not found</Text>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const priorityColor = getPriorityColor(problem.priority);
  const priorityBackground = getPriorityBackground(problem.priority);
  const statusColor = getStatusColor(problem.status);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {/* HEADER */}

        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="#1E293B" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Problem Details</Text>

          <View style={{ width: 44 }} />
        </View>

        {/* PROBLEM HEADER */}

        <View style={styles.problemCard}>
          <View style={styles.problemTop}>
            <View style={styles.problemIcon}>
              <Ionicons name={problem.icon as any} size={30} color="#2563EB" />
            </View>

            <View
              style={[
                styles.priorityBadge,
                { backgroundColor: priorityBackground },
              ]}
            >
              <Text style={[styles.priorityText, { color: priorityColor }]}>
                {problem.priority} Priority
              </Text>
            </View>
          </View>

          <Text style={styles.problemTitle}>{problem.title}</Text>

          <Text style={styles.problemDescription}>{problem.description}</Text>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Ionicons name="folder-outline" size={19} color="#64748B" />

            <Text style={styles.infoText}>{problem.category}</Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="location-outline" size={19} color="#64748B" />

            <Text style={styles.infoText}>{problem.location}</Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="people-outline" size={19} color="#64748B" />

            <Text style={styles.infoText}>{problem.affected}</Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="calendar-outline" size={19} color="#64748B" />

            <Text style={styles.infoText}>{problem.date}</Text>
          </View>
        </View>

        {/* STATUS */}

        <Text style={styles.sectionTitle}>Current Status</Text>

        <View style={styles.statusCard}>
          <View
            style={[
              styles.statusCircle,
              { backgroundColor: statusColor + "20" },
            ]}
          >
            <Ionicons name="time-outline" size={26} color={statusColor} />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={[styles.statusTitle, { color: statusColor }]}>
              {problem.status}
            </Text>

            <Text style={styles.statusDescription}>
              Your report is currently being processed by the relevant team.
            </Text>
          </View>
        </View>

        {/* AI ANALYSIS */}

        <Text style={styles.sectionTitle}>e-KALP AI Analysis 🤖</Text>

        <View style={styles.aiCard}>
          <View style={styles.aiHeader}>
            <View style={styles.aiIcon}>
              <Ionicons name="sparkles" size={24} color="#7C3AED" />
            </View>

            <View>
              <Text style={styles.aiTitle}>AI Triage Complete</Text>

              <Text style={styles.aiSubtitle}>
                Analysis generated automatically
              </Text>
            </View>
          </View>

          <View style={styles.aiDivider} />

          <View style={styles.aiRow}>
            <View style={styles.aiRowLeft}>
              <Ionicons name="analytics-outline" size={21} color="#7C3AED" />

              <Text style={styles.aiLabel}>AI Confidence</Text>
            </View>

            <Text style={styles.aiValue}>{problem.ai.confidence}</Text>
          </View>

          <View style={styles.aiRow}>
            <View style={styles.aiRowLeft}>
              <Ionicons name="business-outline" size={21} color="#7C3AED" />

              <Text style={styles.aiLabel}>Best Department</Text>
            </View>

            <Text style={styles.aiValueSmall}>{problem.ai.department}</Text>
          </View>

          <View style={styles.aiRow}>
            <View style={styles.aiRowLeft}>
              <Ionicons name="copy-outline" size={21} color="#7C3AED" />

              <Text style={styles.aiLabel}>Duplicate Check</Text>
            </View>

            <Text style={styles.aiValueSmall}>{problem.ai.duplicate}</Text>
          </View>
        </View>

        {/* PROGRESS TIMELINE */}

        <Text style={styles.sectionTitle}>Report Progress</Text>

        <View style={styles.timeline}>
          <TimelineItem
            title="Problem Reported"
            description="Your problem was successfully submitted."
            active={true}
            last={false}
          />

          <TimelineItem
            title="AI Analysis"
            description="e-KALP analyzed category, priority and routing."
            active={true}
            last={false}
          />

          <TimelineItem
            title="Under Review"
            description="Authorities are reviewing your report."
            active={problem.status !== "Resolved"}
            last={false}
          />

          <TimelineItem
            title="Resolved"
            description="The issue has been successfully resolved."
            active={problem.status === "Resolved"}
            last={true}
          />
        </View>

        {/* SUPPORT */}

        <View style={styles.supportCard}>
          <Ionicons name="heart-outline" size={26} color="#2563EB" />

          <View style={{ flex: 1 }}>
            <Text style={styles.supportTitle}>Support this issue</Text>

            <Text style={styles.supportText}>
              Community support helps highlight important problems.
            </Text>
          </View>

          <TouchableOpacity style={styles.supportButton}>
            <Ionicons name="thumbs-up-outline" size={20} color="#2563EB" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function TimelineItem({
  title,
  description,
  active,
  last,
}: {
  title: string;
  description: string;
  active: boolean;
  last: boolean;
}) {
  return (
    <View style={styles.timelineItem}>
      <View style={styles.timelineLeft}>
        <View
          style={[
            styles.timelineDot,
            {
              backgroundColor: active ? "#2563EB" : "#CBD5E1",
            },
          ]}
        >
          {active && <Ionicons name="checkmark" size={13} color="#FFFFFF" />}
        </View>

        {!last && (
          <View
            style={[
              styles.timelineLine,
              {
                backgroundColor: active ? "#93C5FD" : "#E2E8F0",
              },
            ]}
          />
        )}
      </View>

      <View style={styles.timelineContent}>
        <Text
          style={[
            styles.timelineTitle,
            { color: active ? "#1E293B" : "#94A3B8" },
          ]}
        >
          {title}
        </Text>

        <Text style={styles.timelineDescription}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  container: {
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  backIcon: {
    width: 44,
    height: 44,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E293B",
  },

  problemCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  problemTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  problemIcon: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
  },

  priorityBadge: {
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 20,
  },

  priorityText: {
    fontSize: 12,
    fontWeight: "700",
  },

  problemTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#1E293B",
    marginBottom: 10,
  },

  problemDescription: {
    fontSize: 14,
    lineHeight: 22,
    color: "#64748B",
  },

  divider: {
    height: 1,
    backgroundColor: "#F1F5F9",
    marginVertical: 18,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 13,
  },

  infoText: {
    fontSize: 14,
    color: "#475569",
    marginLeft: 11,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E293B",
    marginTop: 26,
    marginBottom: 12,
  },

  statusCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 17,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    gap: 14,
  },

  statusCircle: {
    width: 52,
    height: 52,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
  },

  statusTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
  },

  statusDescription: {
    fontSize: 12,
    color: "#64748B",
    lineHeight: 18,
  },

  aiCard: {
    backgroundColor: "#FAF5FF",
    borderRadius: 22,
    padding: 18,
    borderWidth: 1,
    borderColor: "#EDE9FE",
  },

  aiHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
  },

  aiIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: "#EDE9FE",
    alignItems: "center",
    justifyContent: "center",
  },

  aiTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#5B21B6",
  },

  aiSubtitle: {
    fontSize: 12,
    color: "#7C3AED",
    marginTop: 3,
  },

  aiDivider: {
    height: 1,
    backgroundColor: "#EDE9FE",
    marginVertical: 16,
  },

  aiRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  aiRowLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 9,
  },

  aiLabel: {
    fontSize: 13,
    color: "#475569",
    flex: 1,
  },

  aiValue: {
    fontSize: 14,
    fontWeight: "700",
    color: "#5B21B6",
  },

  aiValueSmall: {
    fontSize: 12,
    fontWeight: "600",
    color: "#5B21B6",
    maxWidth: 150,
    textAlign: "right",
  },

  timeline: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  timelineItem: {
    flexDirection: "row",
    minHeight: 75,
  },

  timelineLeft: {
    width: 30,
    alignItems: "center",
  },

  timelineDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  timelineLine: {
    width: 3,
    flex: 1,
    marginVertical: 3,
    borderRadius: 10,
  },

  timelineContent: {
    flex: 1,
    paddingLeft: 10,
    paddingBottom: 15,
  },

  timelineTitle: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 4,
  },

  timelineDescription: {
    fontSize: 12,
    color: "#64748B",
    lineHeight: 17,
  },

  supportCard: {
    marginTop: 25,
    backgroundColor: "#EFF6FF",
    borderRadius: 20,
    padding: 17,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  supportTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1E3A8A",
    marginBottom: 3,
  },

  supportText: {
    fontSize: 12,
    color: "#64748B",
    lineHeight: 17,
  },

  supportButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  errorContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },

  errorTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1E293B",
    marginTop: 15,
    marginBottom: 20,
  },

  backButton: {
    backgroundColor: "#2563EB",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
  },

  backButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
});
