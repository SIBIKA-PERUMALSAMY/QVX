import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ICONS } from '../../images/image/icon';
interface CustomTextInputProps {
    label: string;
    value: string;
    placeholder: string;
    onChangeText: (text: string) => void;
    errorMessage?: string;
    isPassword?: boolean;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
    label,
    value,
    placeholder,
    onChangeText,
    errorMessage,
    isPassword = false,
}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={[
                styles.inputContainer,
                errorMessage ? styles.errorBorder : styles.defaultBorder
            ]}>
                <TextInput
                    style={styles.input}
                    value={value}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    secureTextEntry={isPassword && !isPasswordVisible}
                />
                {isPassword && (
                    <TouchableOpacity
                        style={styles.iconContainer}
                        onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                    >
                        {!errorMessage && (
                            <Image source={isPasswordVisible ? ICONS.eye : ICONS.eyeoff} style={styles.icon} />
                        )}

                    </TouchableOpacity>
                )}
                {errorMessage && (
                    <View style={styles.errorIconContainer}>
                        <Image source={ICONS.error} style={styles.errorIcon} />
                    </View>
                )}
            </View>
            {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
        </View>
    );
};

export default CustomTextInput;

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        marginHorizontal: 16,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: '#000',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    defaultBorder: {
        borderColor: '#ccc', // Default border color
    },
    errorBorder: {
        borderColor: 'red', // Error border color
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#666666',
        paddingVertical: 10,
    },
    iconContainer: {
        marginLeft: 10,
    },
    icon: {
        width: 24,
        height: 24,
    },
    errorIconContainer: {
        marginLeft: 10,
    },
    errorIcon: {
        width: 24,
        height: 24,
    },
    errorText: {
        marginTop: 4,
        fontSize: 14,
        color: 'red',
    },
});
