import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Config from 'react-native-config'
import InputComponent from '../components/InputComponent';
import OuputComponent from '../components/OuputComponent';

const HomeScreen = () => {
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.screen}>
            {/* header */}
            <View style={styles.headerContainer}>
              <Text
                style={[
                  styles.header,
                  {
                    fontSize: width > 450 ? 36 : 28,
                  },
                ]}
              >
                Gemini Flash Lite 3.5 🤘
              </Text>
            </View>
            {/* output component */}
            <View style={styles.outputContainer}>
              <OuputComponent />
            </View>
            {/* input component */}
            <View style={styles.inputContainer}>
              <InputComponent />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  keyboardContainer: {
    flex: 1,
  },
  screen: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  header: {
    textAlign: 'center',
  },
  outputContainer: {
    flex: 1,
    marginHorizontal: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  inputContainer: {
    alignItems: 'center',
    paddingBottom: 16,
  },
});

export default HomeScreen;
