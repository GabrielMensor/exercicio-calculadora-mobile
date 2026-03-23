import { Pressable, Text, StyleSheet } from 'react-native';


export default function CalculatorKey (value) {
    return (
    <Pressable
        style={styles.calculatorKey}
        onPress={() => console.log(value)}
    >
        <Text style={styles.keyText}>{value}</Text>
    </Pressable>
)};

const styles = StyleSheet.create({
    calculatorKey: {
        height: 80,
        width: 80,
        backgroundColor: '#ddd',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    keyText: {
        fontSize: 24,
    },
})