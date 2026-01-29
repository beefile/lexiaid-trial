import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, { Circle, G, Path } from "react-native-svg";

export default function Page() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 800'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23d4b5f5;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23c9a3e8;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='800' fill='url(%23grad)'/%3E%3C/svg%3E",
        }}
        style={styles.background}
      >
        <View style={styles.content}>
          {/* Illustration */}
          <View style={styles.illustrationContainer}>
            <Svg width={200} height={200} viewBox="0 0 200 200">
              {/* Shield Background */}
              <Path
                d="M 100 20 L 140 40 L 140 90 C 140 130 100 160 100 160 C 100 160 60 130 60 90 L 60 40 Z"
                fill="#8b5fbf"
                opacity="0.3"
              />

              {/* Scale/Balance - representing justice */}
              <G>
                {/* Balance beam */}
                <Path
                  d="M 70 80 L 130 80"
                  stroke="#7c3aed"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Center pivot */}
                <Circle cx="100" cy="80" r="4" fill="#7c3aed" />

                {/* Left pan */}
                <Path
                  d="M 75 80 L 75 100 L 70 100 L 70 105 L 80 105 L 80 100 L 75 100"
                  stroke="#7c3aed"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Right pan */}
                <Path
                  d="M 125 80 L 125 100 L 120 100 L 120 105 L 130 105 L 130 100 L 125 100"
                  stroke="#7c3aed"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </G>

              {/* Woman figure - left */}
              <G>
                {/* Head */}
                <Circle cx="65" cy="120" r="8" fill="#8b5fbf" />
                {/* Body */}
                <Path
                  d="M 65 128 L 65 145"
                  stroke="#8b5fbf"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                {/* Arms */}
                <Path
                  d="M 65 132 L 55 140"
                  stroke="#8b5fbf"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <Path
                  d="M 65 132 L 75 140"
                  stroke="#8b5fbf"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </G>

              {/* Child figure - right */}
              <G>
                {/* Head */}
                <Circle cx="135" cy="125" r="6" fill="#a78bdb" />
                {/* Body */}
                <Path
                  d="M 135 131 L 135 145"
                  stroke="#a78bdb"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {/* Arms */}
                <Path
                  d="M 135 135 L 127 142"
                  stroke="#a78bdb"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <Path
                  d="M 135 135 L 143 142"
                  stroke="#a78bdb"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </G>

              {/* Heart accent */}
              <Path
                d="M 100 150 L 108 158 L 100 166 L 92 158 Z"
                fill="#d4a5ff"
                opacity="0.6"
              />
            </Svg>
          </View>

          {/* Title */}
          <Text style={styles.title}>LexiAid</Text>

          {/* Tagline */}
          <Text style={styles.tagline}>Support Built on Rights Awareness</Text>

          {/* Description */}
          <Text style={styles.description}>
            Empowering women and children through legal awareness and safety
            support.
          </Text>

          {/* Buttons Container */}
          <View style={styles.buttonsContainer}>
            {/* Log In Button */}
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>← Log In</Text>
            </TouchableOpacity>

            {/* Sign Up Button */}
            <TouchableOpacity style={styles.signupButton}>
              <Text style={styles.signupButtonText}>👤 Sign Up</Text>
            </TouchableOpacity>
          </View>

          {/* Footer Text */}
          <Text style={styles.footerText}>
            By continuing, you agree to our Privacy & Terms
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 40,
    paddingHorizontal: 24,
  },
  illustrationContainer: {
    marginTop: 40,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#1a1a1a",
    textAlign: "center",
  },
  tagline: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
    marginTop: 8,
  },
  description: {
    fontSize: 14,
    color: "#666666",
    textAlign: "center",
    marginTop: 24,
    marginBottom: 40,
    lineHeight: 20,
  },
  buttonsContainer: {
    width: "100%",
    gap: 12,
  },
  loginButton: {
    backgroundColor: "#9575cd",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  signupButton: {
    borderWidth: 2,
    borderColor: "#7c5ab5",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  signupButtonText: {
    color: "#7c5ab5",
    fontSize: 16,
    fontWeight: "600",
  },
  footerText: {
    fontSize: 12,
    color: "#999999",
    textAlign: "center",
    marginTop: 20,
  },
});
