import { StyleSheet, View } from 'react-native';
import CalculatorKey from './components/CalculatorKey';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        {CalculatorKey('1')}
        {CalculatorKey('2')}
        {CalculatorKey('3')}
      </View>

      <View style={styles.subContainer}>
        {CalculatorKey('4')}
        {CalculatorKey('5')}
        {CalculatorKey('6')}
      </View>

      <View style={styles.subContainer}>
        {CalculatorKey('7')}
        {CalculatorKey('8')}
        {CalculatorKey('9')}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});