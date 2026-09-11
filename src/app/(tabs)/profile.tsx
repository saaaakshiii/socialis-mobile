import { Ionicons } from "@expo/vector-icons";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProfileScreen() {
  const handleEditProfile = () => {
    Alert.alert(
      "Edit Profile",
      "Edit profile functionality will be added next.",
    );
  };

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Logout",
        style: "destructive",
        onPress: () => {
          Alert.alert("Logged Out", "You have been logged out successfully.");
        },
      },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.smallLabel}>CITIZEN PROFILE</Text>

        <Text style={styles.title}>My Profile</Text>

        <Text style={styles.subtitle}>
          Manage your civic identity and activity.
        </Text>
      </View>

      {/* PROFILE CARD */}
      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>S</Text>
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Sakshi Singh</Text>

          <Text style={styles.role}>Citizen Contributor</Text>

          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={15} color="#F97316" />

            <Text style={styles.location}>Ranchi, Jharkhand</Text>
          </View>
        </View>
      </View>

      {/* EDIT PROFILE */}
      <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
        <Ionicons name="create-outline" size={20} color="#F97316" />

        <Text style={styles.editText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* CIVIC ACTIVITY */}
      <Text style={styles.sectionTitle}>Civic Activity</Text>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Ionicons name="document-text-outline" size={25} color="#F97316" />

          <Text style={styles.statNumber}>12</Text>

          <Text style={styles.statLabel}>Reports</Text>
        </View>

        <View style={styles.statCard}>
          <Ionicons name="checkmark-circle-outline" size={25} color="#16A34A" />

          <Text style={styles.statNumber}>7</Text>

          <Text style={styles.statLabel}>Resolved</Text>
        </View>

        <View style={styles.statCard}>
          <Ionicons name="people-outline" size={25} color="#2563EB" />

          <Text style={styles.statNumber}>24</Text>

          <Text style={styles.statLabel}>Contributions</Text>
        </View>
      </View>

      {/* ACCOUNT */}
      <Text style={styles.sectionTitle}>Account Settings</Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <View style={styles.iconBox}>
              <Ionicons name="person-outline" size={21} color="#F97316" />
            </View>

            <Text style={styles.menuText}>Personal Information</Text>
          </View>

          <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <View style={styles.iconBox}>
              <Ionicons
                name="notifications-outline"
                size={21}
                color="#F97316"
              />
            </View>

            <Text style={styles.menuText}>Notifications</Text>
          </View>

          <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <View style={styles.iconBox}>
              <Ionicons
                name="shield-checkmark-outline"
                size={21}
                color="#F97316"
              />
            </View>

            <Text style={styles.menuText}>Privacy & Security</Text>
          </View>

          <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
        </TouchableOpacity>
      </View>

      {/* ABOUT */}
      <Text style={styles.sectionTitle}>About e-KALP</Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <View style={styles.iconBox}>
              <Ionicons
                name="information-circle-outline"
                size={21}
                color="#F97316"
              />
            </View>

            <Text style={styles.menuText}>About the Platform</Text>
          </View>

          <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <View style={styles.iconBox}>
              <Ionicons name="help-circle-outline" size={21} color="#F97316" />
            </View>

            <Text style={styles.menuText}>Help & Support</Text>
          </View>

          <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
        </TouchableOpacity>
      </View>

      {/* LOGOUT */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={21} color="#DC2626" />

        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      <Text style={styles.version}>
        e-KALP • Civic Intelligence Platform • Version 1.0.0
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F2",
  },

  header: {
    backgroundColor: "#FFFFFF",
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 28,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },

  smallLabel: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 2,
    color: "#F97316",
    marginBottom: 10,
  },

  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1F2937",
  },

  subtitle: {
    fontSize: 15,
    color: "#64748B",
    marginTop: 8,
  },

  profileCard: {
    margin: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#F97316",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    fontSize: 30,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  profileInfo: {
    marginLeft: 16,
    justifyContent: "center",
  },

  name: {
    fontSize: 21,
    fontWeight: "800",
    color: "#1F2937",
  },

  role: {
    fontSize: 14,
    color: "#F97316",
    marginTop: 4,
    fontWeight: "600",
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
  },

  location: {
    fontSize: 13,
    color: "#64748B",
    marginLeft: 5,
  },

  editButton: {
    marginHorizontal: 20,
    marginTop: -5,
    height: 52,
    borderWidth: 1,
    borderColor: "#F97316",
    borderRadius: 7,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  editText: {
    color: "#F97316",
    fontSize: 15,
    fontWeight: "700",
    marginLeft: 8,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#1F2937",
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 14,
  },

  statsContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    gap: 10,
  },

  statCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingVertical: 20,
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  statNumber: {
    fontSize: 24,
    fontWeight: "800",
    color: "#1F2937",
    marginTop: 10,
  },

  statLabel: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 4,
  },

  menuContainer: {
    marginHorizontal: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    overflow: "hidden",
  },

  menuItem: {
    minHeight: 64,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },

  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconBox: {
    width: 38,
    height: 38,
    backgroundColor: "#FFF7ED",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  menuText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#374151",
  },

  logoutButton: {
    marginHorizontal: 20,
    marginTop: 30,
    height: 55,
    borderWidth: 1,
    borderColor: "#FECACA",
    backgroundColor: "#FEF2F2",
    borderRadius: 7,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  logoutText: {
    color: "#DC2626",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 8,
  },

  version: {
    textAlign: "center",
    color: "#94A3B8",
    fontSize: 11,
    marginVertical: 30,
  },
});
