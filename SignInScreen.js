import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSignIn = () => {
    const phoneRegex = /^[0-9]{10}$/; // Giả sử số điện thoại hợp lệ là 10 chữ số
    if (phoneRegex.test(phoneNumber)) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Số điện thoại không hợp lệ', 'Vui lòng nhập lại số điện thoại hợp lệ.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Đăng nhập</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, width: '80%', paddingHorizontal: 10 }}
        placeholder="Nhập số điện thoại"
        keyboardType="numeric"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Button title="Đăng nhập" onPress={handleSignIn} />
    </View>
  );
};

export default SignInScreen;
