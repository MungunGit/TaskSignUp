import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const SignUp = ({ navigation }) => (
    
  <SafeAreaView style={styles.container}>
    <Text 
        style={{ textAlign: 'center', fontSize: "25", marginVertical: 6, paddingBottom: 50}}>SignUp</Text>
    <View>
      <Button
        title="Connect to facebook"/>
    </View>
    <Separator />
    <View>
      <Button
        title="Connect to email"
        color="orange"/>
    </View>
    <Separator />
    <View>
      <Button
        title="Connect to google account"
        disabled />
    </View>
    <Separator />
    <View>
      <View style={styles.fixToText}>
        <Button
          title="Back" onPress={() => navigation.pop() }/>
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

});

export default SignUp;