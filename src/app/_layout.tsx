import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="report-problem" />
        <Stack.Screen name="ai-analysis" />
        <Stack.Screen name="problem/[id]" />
        <Stack.Screen name="voice-assistant" />
      </Stack>
    </>
  );
}
