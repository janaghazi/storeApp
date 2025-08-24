import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LanguageContext } from "../context/LanguageContext";
import HeaderCard from "../components/HeaderCard";
import styles from "../style/style"

export default function SettingsScreen() {
  const { locale, switchLanguage, t } = useContext(LanguageContext);

  return (
    <View>
      <HeaderCard headerTitle={t("setting")} isHome={false} />

      <View style={styles.languageSection}>
        <Text style={styles.languageTitle}>Switch Language:</Text>

        {locale !== "en" && (
          <TouchableOpacity
            style={styles.languageButton}
            onPress={() => switchLanguage("en")}
          >
            <Text style={styles.languageButtonText}>English</Text>
          </TouchableOpacity>
        )}

        {locale !== "ar" && (
          <TouchableOpacity
            style={styles.languageButton}
            onPress={() => switchLanguage("ar")}
          >
            <Text style={styles.languageButtonText}>العربية</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
