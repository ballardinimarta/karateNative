import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: "#b0a0ed" }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#7996e9" }}>
        <WebView
          style={{ flex: 1 }}
          useWebKit={true}
          source={{ url: "https://karatefylla.vercel.app" }}
        />
        <Text style={{ textAlign: "center", fontSize: "12px", padding: "5%" }}>
          Produkt av Märta Ballardini, Wilma Stenström och Linnea Gustafsson
        </Text>
      </SafeAreaView>
    </>
  );
}
