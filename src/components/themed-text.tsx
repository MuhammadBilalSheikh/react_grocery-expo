import { Text, TextProps, StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native';

type Props = TextProps & {
    lightColor?: string;
    darkColor?: string;
    type?: 'title' | 'subtitle' | any;  // New `type` prop
};

export function ThemedText({
    style,
    lightColor,
    darkColor,
    type = 'body',  // Default to 'body'
    ...rest
}: Props) {
    const colorScheme = useColorScheme();

    const color =
        colorScheme === 'dark'
            ? darkColor || '#fff'
            : lightColor || '#000';

    // Choose style based on `type`
    const textStyle =
        type === 'title'
            ? styles.title
            : type === 'subtitle'
                ? styles.subtitle
                : styles.body;

    return <Text style={[{ color }, textStyle, style]} {...rest} />;
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 8,
    },
    body: {
        fontSize: 16,
    },
});