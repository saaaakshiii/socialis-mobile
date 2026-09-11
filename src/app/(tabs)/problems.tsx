import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getProblems, Problem } from "../../../services/api";

const STATUS_COLORS: Record<string, string> = {
  NO_BIDDERS: "#94A3B8",
  ASSIGNED: "#8B5CF6",
  IN_PROGRESS: "#F59E0B",
  RESOLVED: "#10B981",
  CLOSED: "#EF4444",
};

export default function ProblemsScreen() {
  const router = useRouter();

  const [problems, setProblems] = useState<Problem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  const fetchProblems = async () => {
    try {
      setError("");

      const data = await getProblems();

      console.log("API DATA RECEIVED:", JSON.stringify(data, null, 2));

      setProblems(data.items);
    } catch (err) {
      console.error(err);

      setError(
        "Unable to connect to the server. Make sure the backend is running.",
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchProblems();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchProblems();
  };

  const formatStatus = (status: string) => {
    return status.replace(/_/g, " ");
  };

  const renderProblem = ({ item }: { item: Problem }) => {
    return (
      <TouchableOpacity
        style={styles.problemCard}
        activeOpacity={0.8}
        onPress={() =>
          router.push({
            pathname: "/problem/[id]",
            params: { id: item.id },
          })
        }
      >
        <View style={styles.cardHeader}>
          <View style={styles.tokenContainer}>
            <Text style={styles.tokenText}>#{item.token_number}</Text>
          </View>

          <View
            style={[
              styles.statusBadge,
              {
                backgroundColor: STATUS_COLORS[item.status] || "#64748B",
              },
            ]}
          >
            <Text style={styles.statusText}>{formatStatus(item.status)}</Text>
          </View>
        </View>

        <Text style={styles.problemTitle}>{item.title}</Text>

        <Text style={styles.problemDescription} numberOfLines={2}>
          {item.pd}
        </Text>

        <View style={styles.footer}>
          <Text style={styles.location}>📍 {item.location}</Text>

          <Text style={styles.viewText}>View →</Text>
        </View>

        {item.categories && item.categories.length > 0 && (
          <View style={styles.categories}>
            {item.categories.slice(0, 3).map((category) => (
              <View key={category} style={styles.categoryBadge}>
                <Text style={styles.categoryText}>{category}</Text>
              </View>
            ))}
          </View>
        )}
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#6C63FF" />

        <Text style={styles.loadingText}>Loading problems...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.centerContainer}>
        <Text style={styles.errorTitle}>Something went wrong</Text>

        <Text style={styles.errorText}>{error}</Text>

        <TouchableOpacity
          style={styles.retryButton}
          onPress={() => {
            setLoading(true);
            fetchProblems();
          }}
        >
          <Text style={styles.retryText}>Try Again</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.heading}>Community Problems</Text>

          <Text style={styles.subheading}>
            {problems.length} problems reported
          </Text>
        </View>

        <TouchableOpacity
          style={styles.reportButton}
          onPress={() => router.push("/report-problem")}
        >
          <Text style={styles.reportButtonText}>+ Report</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={problems}
        keyExtractor={(item) => item.id}
        renderItem={renderProblem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>No problems found</Text>

            <Text style={styles.emptyText}>
              There are currently no reported problems.
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#F8FAFC",
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  heading: {
    fontSize: 26,
    fontWeight: "700",
    color: "#0F172A",
  },

  subheading: {
    marginTop: 4,
    fontSize: 14,
    color: "#64748B",
  },

  reportButton: {
    backgroundColor: "#6C63FF",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
  },

  reportButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },

  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },

  problemCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    marginBottom: 14,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  tokenContainer: {
    backgroundColor: "#EEF2FF",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },

  tokenText: {
    color: "#6C63FF",
    fontWeight: "700",
    fontSize: 13,
  },

  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },

  statusText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "700",
  },

  problemTitle: {
    marginTop: 14,
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
  },

  problemDescription: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 21,
    color: "#64748B",
  },

  footer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  location: {
    flex: 1,
    fontSize: 13,
    color: "#475569",
  },

  viewText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#6C63FF",
  },

  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 14,
    gap: 8,
  },

  categoryBadge: {
    backgroundColor: "#F1F5F9",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  categoryText: {
    fontSize: 11,
    color: "#475569",
    fontWeight: "600",
  },

  loadingText: {
    marginTop: 12,
    color: "#64748B",
    fontSize: 15,
  },

  errorTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0F172A",
  },

  errorText: {
    marginTop: 10,
    textAlign: "center",
    color: "#64748B",
    lineHeight: 22,
  },

  retryButton: {
    marginTop: 20,
    backgroundColor: "#6C63FF",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },

  retryText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },

  emptyContainer: {
    paddingTop: 100,
    alignItems: "center",
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0F172A",
  },

  emptyText: {
    marginTop: 8,
    textAlign: "center",
    color: "#64748B",
  },
});
