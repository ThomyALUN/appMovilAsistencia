import { Text, Pressable, StyleSheet } from 'react-native';

export default function Button({ title, onPress, buttonStyle, textStyle }) {
    return (
        <Pressable 
            style={buttonStyle??styles.button} 
            onPress={onPress}
        >
            <Text style={textStyle??styles.buttonText}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});

