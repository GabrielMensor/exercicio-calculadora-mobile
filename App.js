import { StyleSheet, View, Text } from 'react-native';
import CalculatorKey from './components/CalculatorKey';
import { useState } from 'react';

export default function App() {
  const [display, setDisplay] = useState('0');
  const [firstValue, setFirstValue] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleNumber = (num) => {
    setDisplay((prev) => (prev === '0' ? num : prev + num));
  };

  const handleOperation = (op) => {
    setFirstValue(display);
    setOperation(op);
    setDisplay('0');
  };

  const handleClear = () => {
    setDisplay('0');
    setFirstValue(null);
    setOperation(null);
  };

  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(display);
    let result = 0;

    if (firstValue === null || operation === null) return;
    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          setDisplay('Erro');
          return;
        }
        result = num1 / num2;
        break;
    }

    setDisplay(String(result));
    setFirstValue(null);
    setOperation(null);
  };

  const handleDecimal = () => {
    if (!display.includes('.')) {
      setDisplay((prev) => prev + '.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text
          style={styles.displayText}
          numberOfLines={1}
          adjustsFontSizeToFit
        >{display}</Text>
      </View>
      <View style={styles.subContainer}>
        <CalculatorKey value="C" onPress={handleClear} style={styles.specialKey} />
        <CalculatorKey value="/" onPress={() => handleOperation('/')} style={styles.operationKey} />
        <CalculatorKey value="*" onPress={() => handleOperation('*')} style={styles.operationKey} />
        <CalculatorKey value="-" onPress={() => handleOperation('-')} style={styles.operationKey} />
      </View>

      <View style={styles.subContainer}>
        <CalculatorKey value="7" onPress={() => handleNumber('7')} />
        <CalculatorKey value="8" onPress={() => handleNumber('8')} />
        <CalculatorKey value="9" onPress={() => handleNumber('9')} />
        <CalculatorKey value="+" onPress={() => handleOperation('+')} style={styles.operationKey} />
      </View>

      <View style={styles.subContainer}>
        <CalculatorKey value="4" onPress={() => handleNumber('4')} />
        <CalculatorKey value="5" onPress={() => handleNumber('5')} />
        <CalculatorKey value="6" onPress={() => handleNumber('6')} />
        <CalculatorKey value="=" onPress={handleEqual} style={styles.operationKey} />

      </View>
      <View style={styles.subContainer}>
        <CalculatorKey value="1" onPress={() => handleNumber('1')} />
        <CalculatorKey value="2" onPress={() => handleNumber('2')} />
        <CalculatorKey value="3" onPress={() => handleNumber('3')} />
        <CalculatorKey value="" disabled style={{ opacity: 0.65 }} />

      </View>
      <View style={styles.subContainer}>
        <CalculatorKey value="." onPress={handleDecimal} />
        <CalculatorKey value="0" onPress={() => handleNumber('0')} />
        <CalculatorKey value="" disabled style={{ opacity: 0.65 }} />
        <CalculatorKey value="" disabled style={{ opacity: 0.65 }} />
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
  displayContainer: {
    width: '100%',
    padding: 20,
    alignItems: 'flex-end',
  },
  displayText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  operationKey: {
    backgroundColor: '#f39c12',
  },
  specialKey: {
    backgroundColor: '#95a5a6',
  },
});