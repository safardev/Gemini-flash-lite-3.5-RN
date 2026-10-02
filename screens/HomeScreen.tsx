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

import InputComponent from '../components/InputComponent';

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
  inputContainer: {
    alignItems: 'center',
    paddingBottom: 16,
  },
});

export default HomeScreen;
