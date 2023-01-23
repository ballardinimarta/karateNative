import React, { useState } from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import { WebView } from "react-native-webview";

const ActivityIndicatorElement = () => {
  return (
    <View style={{ flex: 0, backgroundColor: "#b0a0ed" }}>
      <Image source={require("./assets/splash.png")} />
    </View>
  );
};

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: "#b0a0ed" }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#7996e9" }}>
        <WebView
          style={{ flex: 1 }}
          useWebKit={true}
          source={{ url: "https://karatefylla.vercel.app" }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          onLoadStart={() => setVisible(true)}
          onLoad={() => setVisible(false)}
        />
        {visible ? <ActivityIndicatorElement /> : null}

        <Text
          style={{
            textAlign: "center",
            fontSize: "12px",
            padding: "5%",
          }}
        >
          Produkt av Märta Ballardini, Wilma Stenström och Linnea Gustafsson
        </Text>
      </SafeAreaView>
    </>
  );
}
