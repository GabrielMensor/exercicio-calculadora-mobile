import { Pressable, Text, StyleSheet } from 'react-native';


export default function CalculatorKey({ value, onPress, style, disabled }) {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.calculatorKey,
                style,
                pressed && styles.pressedKey,
            ]}
            onPress={onPress}
            disabled={disabled}>
            <Text style={styles.keyText}>{value}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    keyboard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    calculatorKey: {
        flex: 1,
        height: 80,
        margin: 6,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
    },
    keyText: {
        fontSize: 24,
    },
    pressedKey: {
        opacity: 0.6,
        transform: [{ scale: 0.95 }],
    },
})