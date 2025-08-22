import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LanguageContext } from "../context/LanguageContext";
import HeaderCard from "../components/HeaderCard";

export default function SettingsScreen() {
  const { locale, switchLanguage, t } = useContext(LanguageContext);

  return (
    <View style={styles.container}>
      <HeaderCard headerTitle={t("setting")} isHome={false} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t("language")}</Text>

        {locale !== "en" && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => switchLanguage("en")}
          >
            <Text style={styles.buttonText}>🇺🇸 English</Text>
          </TouchableOpacity>
        )}

        {locale !== "ar" && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => switchLanguage("ar")}
          >
            <Text style={styles.buttonText}>🇸🇦 العربية</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  section: {
    padding: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1b4257",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#1b4257",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});
