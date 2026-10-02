import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';

const InputComponent = () => {
  const [text, setText] = useState('');
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width: width * 0.9 }]}>
      <TextInput
        style={[
          styles.inputField,
          {
            width: width * 0.8,
          },
        ]}
        value={text}
        onChangeText={txt => setText(txt)}
        placeholder="Ask Gemini.... 🤔"
        placeholderTextColor="#888"
        multiline
        scrollEnabled={false}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>➤</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: '#1f1f1f',
    borderWidth: 1,
    borderRadius: 24,
  },
  inputField: {
    position: 'relative',
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    minHeight: 40,
  },
  button: {
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 36,
    color: '#007AFF',
    marginRight: 8,
  },
});

export default InputComponent;
