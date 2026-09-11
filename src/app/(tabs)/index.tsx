// import { Ionicons } from "@expo/vector-icons";
// import { router } from "expo-router";
// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";

// import { SafeAreaView } from "react-native-safe-area-context";

// export default function HomeScreen() {
//   const stats = [
//     {
//       title: "Reported",
//       value: "128",
//       icon: "document-text-outline",
//       color: "#2563EB",
//     },
//     {
//       title: "Resolved",
//       value: "76",
//       icon: "checkmark-circle-outline",
//       color: "#16A34A",
//     },
//     {
//       title: "Active",
//       value: "52",
//       icon: "alert-circle-outline",
//       color: "#EA580C",
//     },
//   ];

//   const priorityProblems = [
//     {
//       title: "Contaminated Drinking Water",
//       location: "Ranchi, Jharkhand",
//       priority: "Critical",
//       icon: "water-outline",
//       color: "#DC2626",
//     },
//     {
//       title: "Broken Road Connecting Village",
//       location: "Dhanbad, Jharkhand",
//       priority: "High",
//       icon: "construct-outline",
//       color: "#EA580C",
//     },
//   ];

//   const recentProblems = [
//     {
//       title: "Street Lights Not Working",
//       location: "Jamshedpur",
//       status: "Under Review",
//       icon: "bulb-outline",
//     },
//     {
//       title: "Water Supply Interruption",
//       location: "Bokaro",
//       status: "Assigned",
//       icon: "water-outline",
//     },
//     {
//       title: "Garbage Collection Issue",
//       location: "Ranchi",
//       status: "Reported",
//       icon: "trash-outline",
//     },
//   ];

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.scrollContent}
//       >
//         {/* HEADER */}

//         <View style={styles.header}>
//           <View>
//             <Text style={styles.greeting}>Hello, Sakshi 👋</Text>
//             <Text style={styles.subtitle}>
//               Let's improve your community together
//             </Text>
//           </View>

//           <View style={styles.profileIcon}>
//             <Ionicons name="person-outline" size={24} color="#2563EB" />
//           </View>
//         </View>

//         {/* HERO CARD */}

//         <View style={styles.heroCard}>
//           <View style={styles.heroIcon}>
//             <Ionicons name="people-outline" size={32} color="#FFFFFF" />
//           </View>

//           <Text style={styles.heroTitle}>See a problem in your community?</Text>

//           <Text style={styles.heroDescription}>
//             Report it and let e-KALP intelligently analyze and route it to the
//             right department.
//           </Text>

//           <TouchableOpacity
//             style={styles.reportButton}
//             onPress={() => router.push("/report-problem")}
//           >
//             <Ionicons name="add-circle-outline" size={22} color="#2563EB" />

//             <Text
//               style={styles.reportButtonText}
//               onPress={() => router.push("/report-problem")}
//             >
//               Report a Problem
//             </Text>
//           </TouchableOpacity>
//         </View>

//         {/* COMMUNITY OVERVIEW */}

//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Community Overview</Text>
//         </View>

//         <View style={styles.statsContainer}>
//           {stats.map((stat) => (
//             <View key={stat.title} style={styles.statCard}>
//               <View
//                 style={[
//                   styles.statIcon,
//                   { backgroundColor: `${stat.color}18` },
//                 ]}
//               >
//                 <Ionicons
//                   name={stat.icon as any}
//                   size={22}
//                   color={stat.color}
//                 />
//               </View>

//               <Text style={styles.statValue}>{stat.value}</Text>
//               <Text style={styles.statTitle}>{stat.title}</Text>
//             </View>
//           ))}
//         </View>

//         {/* HIGH PRIORITY */}

//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>🔥 High Priority Issues</Text>

//           <TouchableOpacity onPress={() => router.push("/(tabs)/problems")}>
//             <Text style={styles.seeAll}>See All</Text>
//           </TouchableOpacity>
//         </View>

//         {priorityProblems.map((problem) => (
//           <TouchableOpacity
//             key={problem.title}
//             style={styles.problemCard}
//             activeOpacity={0.8}
//           >
//             <View
//               style={[
//                 styles.problemIcon,
//                 { backgroundColor: `${problem.color}18` },
//               ]}
//             >
//               <Ionicons
//                 name={problem.icon as any}
//                 size={25}
//                 color={problem.color}
//               />
//             </View>

//             <View style={styles.problemInfo}>
//               <Text style={styles.problemTitle}>{problem.title}</Text>

//               <View style={styles.locationRow}>
//                 <Ionicons name="location-outline" size={15} color="#64748B" />

//                 <Text style={styles.location}>{problem.location}</Text>
//               </View>
//             </View>

//             <View
//               style={[
//                 styles.priorityBadge,
//                 { backgroundColor: `${problem.color}18` },
//               ]}
//             >
//               <Text style={[styles.priorityText, { color: problem.color }]}>
//                 {problem.priority}
//               </Text>
//             </View>
//           </TouchableOpacity>
//         ))}

//         {/* RECENT PROBLEMS */}

//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Recent Problems</Text>
//         </View>

//         {recentProblems.map((problem) => (
//           <TouchableOpacity
//             key={problem.title}
//             style={styles.recentCard}
//             activeOpacity={0.8}
//           >
//             <View style={styles.recentIcon}>
//               <Ionicons name={problem.icon as any} size={22} color="#2563EB" />
//             </View>

//             <View style={styles.recentInfo}>
//               <Text style={styles.recentTitle}>{problem.title}</Text>

//               <Text style={styles.recentLocation}>📍 {problem.location}</Text>
//             </View>

//             <View style={styles.statusBadge}>
//               <Text style={styles.statusText}>{problem.status}</Text>
//             </View>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F8FAFC",
//   },

//   scrollContent: {
//     padding: 20,
//     paddingBottom: 100,
//   },

//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 24,
//   },

//   greeting: {
//     fontSize: 24,
//     fontWeight: "700",
//     color: "#0F172A",
//   },

//   subtitle: {
//     fontSize: 14,
//     color: "#64748B",
//     marginTop: 5,
//     maxWidth: 250,
//   },

//   profileIcon: {
//     width: 48,
//     height: 48,
//     borderRadius: 24,
//     backgroundColor: "#EFF6FF",
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   heroCard: {
//     backgroundColor: "#2563EB",
//     borderRadius: 24,
//     padding: 24,
//     marginBottom: 28,
//   },

//   heroIcon: {
//     width: 58,
//     height: 58,
//     borderRadius: 18,
//     backgroundColor: "rgba(255,255,255,0.18)",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 18,
//   },

//   heroTitle: {
//     color: "#FFFFFF",
//     fontSize: 21,
//     fontWeight: "700",
//     marginBottom: 8,
//   },

//   heroDescription: {
//     color: "#DBEAFE",
//     fontSize: 14,
//     lineHeight: 21,
//     marginBottom: 22,
//   },

//   reportButton: {
//     backgroundColor: "#FFFFFF",
//     paddingVertical: 14,
//     borderRadius: 14,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 8,
//   },

//   reportButtonText: {
//     color: "#2563EB",
//     fontSize: 16,
//     fontWeight: "700",
//   },

//   sectionHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 14,
//     marginTop: 8,
//   },

//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "700",
//     color: "#0F172A",
//   },

//   seeAll: {
//     color: "#2563EB",
//     fontWeight: "600",
//     fontSize: 14,
//   },

//   statsContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     gap: 10,
//     marginBottom: 28,
//   },

//   statCard: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//     borderRadius: 18,
//     padding: 14,
//     alignItems: "center",
//   },

//   statIcon: {
//     width: 42,
//     height: 42,
//     borderRadius: 14,
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 10,
//   },

//   statValue: {
//     fontSize: 21,
//     fontWeight: "700",
//     color: "#0F172A",
//   },

//   statTitle: {
//     fontSize: 12,
//     color: "#64748B",
//     marginTop: 4,
//   },

//   problemCard: {
//     backgroundColor: "#FFFFFF",
//     borderRadius: 18,
//     padding: 16,
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 12,
//   },

//   problemIcon: {
//     width: 52,
//     height: 52,
//     borderRadius: 16,
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 13,
//   },

//   problemInfo: {
//     flex: 1,
//   },

//   problemTitle: {
//     fontSize: 15,
//     fontWeight: "600",
//     color: "#0F172A",
//     marginBottom: 7,
//   },

//   locationRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 4,
//   },

//   location: {
//     fontSize: 12,
//     color: "#64748B",
//   },

//   priorityBadge: {
//     paddingHorizontal: 10,
//     paddingVertical: 6,
//     borderRadius: 20,
//   },

//   priorityText: {
//     fontSize: 12,
//     fontWeight: "700",
//   },

//   recentCard: {
//     backgroundColor: "#FFFFFF",
//     borderRadius: 18,
//     padding: 15,
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 10,
//   },

//   recentIcon: {
//     width: 45,
//     height: 45,
//     borderRadius: 14,
//     backgroundColor: "#EFF6FF",
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 12,
//   },

//   recentInfo: {
//     flex: 1,
//   },

//   recentTitle: {
//     fontSize: 15,
//     fontWeight: "600",
//     color: "#0F172A",
//     marginBottom: 5,
//   },

//   recentLocation: {
//     fontSize: 12,
//     color: "#64748B",
//   },

//   statusBadge: {
//     backgroundColor: "#F1F5F9",
//     paddingHorizontal: 9,
//     paddingVertical: 6,
//     borderRadius: 12,
//   },

//   statusText: {
//     fontSize: 11,
//     fontWeight: "600",
//     color: "#475569",
//   },
// });

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

import { COLORS } from "../../../constants/theme";

const priorityIssues = [
  {
    title: "Contaminated Drinking Water",
    location: "Namkum, Ranchi",
    severity: "CRITICAL",
    icon: "water-outline",
  },
  {
    title: "Broken Road Connecting Village",
    location: "Dhanbad, Jharkhand",
    severity: "HIGH",
    icon: "construct-outline",
  },
];

const recentProblems = [
  {
    title: "Street Lights Not Working",
    location: "Jamshedpur",
    status: "UNDER REVIEW",
    icon: "bulb-outline",
  },
  {
    title: "Water Supply Interruption",
    location: "Bokaro",
    status: "ASSIGNED",
    icon: "water-outline",
  },
  {
    title: "Garbage Collection Issue",
    location: "Ranchi",
    status: "REPORTED",
    icon: "trash-outline",
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* TOP LABEL */}

        <Text style={styles.systemLabel}>■ NAMKUM CIVIC INNOVATION HUB</Text>

        {/* HEADER */}

        <View style={styles.header}>
          <View>
            <Text style={styles.welcome}>
              Welcome back, <Text style={styles.name}>Sakshi</Text>
            </Text>

            <Text style={styles.userInfo}>CITIZEN CONTRIBUTOR • RANCHI</Text>
          </View>

          <TouchableOpacity style={styles.notification}>
            <Ionicons
              name="notifications-outline"
              size={24}
              color={COLORS.text}
            />
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>

        {/* REPORT BUTTON */}

        <TouchableOpacity
          style={styles.reportButton}
          onPress={() => router.push("/(tabs)/report")}
        >
          <Ionicons name="add" size={22} color="white" />

          <Text style={styles.reportButtonText}>REPORT A SOCIAL PROBLEM</Text>
        </TouchableOpacity>

        {/* CIVIC OVERVIEW */}

        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionNumber}>01</Text>

            <Text style={styles.sectionTitle}>CIVIC OVERVIEW</Text>
          </View>

          <Text style={styles.live}>● LIVE DATA</Text>
        </View>

        <View style={styles.statsContainer}>
          <StatCard
            number="128"
            label="REPORTED"
            icon="document-text-outline"
          />

          <StatCard
            number="76"
            label="RESOLVED"
            icon="checkmark-circle-outline"
          />

          <StatCard number="52" label="ACTIVE" icon="alert-circle-outline" />
        </View>

        {/* HIGH PRIORITY */}

        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionNumber}>02</Text>

            <Text style={styles.sectionTitle}>PRIORITY ISSUES</Text>
          </View>

          <TouchableOpacity>
            <Text style={styles.viewAll}>VIEW ALL →</Text>
          </TouchableOpacity>
        </View>

        {priorityIssues.map((issue, index) => (
          <IssueCard key={index} {...issue} />
        ))}

        {/* RECENT PROBLEMS */}

        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionNumber}>03</Text>

            <Text style={styles.sectionTitle}>RECENT REPORTS</Text>
          </View>
        </View>

        {recentProblems.map((problem, index) => (
          <RecentProblemCard key={index} {...problem} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

/* ============================
   STAT CARD
============================ */

function StatCard({
  number,
  label,
  icon,
}: {
  number: string;
  label: string;
  icon: any;
}) {
  return (
    <View style={styles.statCard}>
      <Ionicons name={icon} size={22} color={COLORS.primary} />

      <Text style={styles.statNumber}>{number}</Text>

      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

/* ============================
   PRIORITY ISSUE CARD
============================ */

function IssueCard({ title, location, severity, icon }: any) {
  const isCritical = severity === "CRITICAL";

  return (
    <TouchableOpacity style={styles.issueCard}>
      <View style={styles.issueIcon}>
        <Ionicons name={icon} size={26} color={COLORS.primary} />
      </View>

      <View style={styles.issueContent}>
        <View style={styles.issueTop}>
          <Text style={styles.issueTitle}>{title}</Text>

          <View
            style={[
              styles.severityBadge,
              isCritical ? styles.criticalBadge : styles.highBadge,
            ]}
          >
            <Text
              style={[
                styles.severityText,
                isCritical ? styles.criticalText : styles.highText,
              ]}
            >
              {severity}
            </Text>
          </View>
        </View>

        <View style={styles.locationRow}>
          <Ionicons
            name="location-outline"
            size={16}
            color={COLORS.textSecondary}
          />

          <Text style={styles.location}>{location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

/* ============================
   RECENT PROBLEM CARD
============================ */

function RecentProblemCard({ title, location, status, icon }: any) {
  return (
    <TouchableOpacity style={styles.recentCard}>
      <View style={styles.recentIcon}>
        <Ionicons name={icon} size={24} color={COLORS.primary} />
      </View>

      <View style={styles.recentContent}>
        <Text style={styles.recentTitle}>{title}</Text>

        <View style={styles.locationRow}>
          <Ionicons
            name="location-outline"
            size={15}
            color={COLORS.textSecondary}
          />

          <Text style={styles.location}>{location}</Text>
        </View>
      </View>

      <View style={styles.statusBadge}>
        <Text style={styles.statusText}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
}

/* ============================
   STYLES
============================ */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  systemLabel: {
    color: COLORS.primary,
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.8,
    marginTop: 10,
    marginBottom: 14,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },

  welcome: {
    fontSize: 27,
    fontWeight: "800",
    color: COLORS.text,
  },

  name: {
    color: COLORS.primary,
  },

  userInfo: {
    marginTop: 7,
    fontSize: 10,
    fontWeight: "700",
    color: COLORS.textSecondary,
    letterSpacing: 1,
  },

  notification: {
    width: 48,
    height: 48,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  notificationDot: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
  },

  reportButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 18,
    paddingHorizontal: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 35,
  },

  reportButtonText: {
    color: "white",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.2,
    marginLeft: 8,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingTop: 16,
    marginBottom: 16,
    marginTop: 10,
  },

  sectionNumber: {
    fontSize: 9,
    color: COLORS.primary,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 6,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: COLORS.text,
    letterSpacing: 0.5,
  },

  live: {
    fontSize: 9,
    color: "#22C55E",
    fontWeight: "800",
    letterSpacing: 1,
  },

  viewAll: {
    fontSize: 10,
    color: COLORS.primary,
    fontWeight: "800",
    letterSpacing: 1,
  },

  /* STATS */

  statsContainer: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 30,
  },

  statCard: {
    flex: 1,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingVertical: 18,
    paddingHorizontal: 10,
  },

  statNumber: {
    fontSize: 25,
    fontWeight: "800",
    color: COLORS.text,
    marginTop: 14,
  },

  statLabel: {
    fontSize: 9,
    fontWeight: "800",
    color: COLORS.textSecondary,
    marginTop: 6,
    letterSpacing: 0.8,
  },

  /* PRIORITY */

  issueCard: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 16,
    flexDirection: "row",
    marginBottom: 10,
  },

  issueIcon: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.orangeLight,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  issueContent: {
    flex: 1,
  },

  issueTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },

  issueTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.text,
    lineHeight: 22,
  },

  severityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    alignSelf: "flex-start",
  },

  criticalBadge: {
    backgroundColor: "#FDE8E7",
  },

  highBadge: {
    backgroundColor: "#FFF0E5",
  },

  severityText: {
    fontSize: 8,
    fontWeight: "800",
    letterSpacing: 0.8,
  },

  criticalText: {
    color: "#DC2626",
  },

  highText: {
    color: COLORS.primary,
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 9,
  },

  location: {
    marginLeft: 5,
    color: COLORS.textSecondary,
    fontSize: 13,
  },

  /* RECENT */

  recentCard: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
  },

  recentIcon: {
    width: 46,
    height: 46,
    backgroundColor: COLORS.orangeLight,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 13,
  },

  recentContent: {
    flex: 1,
  },

  recentTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: COLORS.text,
  },

  statusBadge: {
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginLeft: 8,
  },

  statusText: {
    fontSize: 8,
    color: COLORS.textSecondary,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
});
