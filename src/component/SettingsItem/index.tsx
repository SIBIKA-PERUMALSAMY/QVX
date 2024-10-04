import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { COLORS } from '../Colors';
import { ICONS } from '../../images/image/icon';
interface CustomRowProps {
    icon1: any; 
    title: string;
    rightText?: string; 
    rightIcon?: any; 
    showSlider?: boolean; 
    sliderValue?: boolean; 
    onSliderChange?: (value: boolean) => void; 
    onRightIconPress?: () => void; 
}

const CustomRow: React.FC<CustomRowProps> = ({
    icon1,
    title,
    rightText,
    rightIcon,
    showSlider,
    sliderValue,
    onSliderChange,
    onRightIconPress
}) => {
    return (
        <View style={styles.container}>
          
            <View style={styles.leftContainer}>
                <Image source={icon1} style={styles.icon} />
                <Text style={styles.title}>{title}</Text>
            </View>

            <View style={styles.rightContainer}>
                {rightText && <Text style={styles.rightText}>{rightText}</Text>}

                {showSlider && (
                    <Switch
                        value={sliderValue}
                        onValueChange={onSliderChange}
                        thumbColor={sliderValue ? COLORS.SurfieGreen : COLORS.SurfieGreen}
                        trackColor={{ false: COLORS.harp, true: '#F0F0F0' }}
                    />
                )}

                {rightIcon && (
                    <TouchableOpacity onPress={onRightIconPress}>
                        <Image source={ICONS.right} style={styles.rightIcon} />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        color: COLORS.gray,
        marginLeft: 8,
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightText: {
        fontSize: 12,
        marginRight: 15,
        color: COLORS.gray,
        fontWeight: '600',
    },
    rightIcon: {
        marginRight: 5,
        tintColor: COLORS.gray,
    },
});

export default CustomRow;