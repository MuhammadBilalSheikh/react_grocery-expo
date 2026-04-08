import { StyleSheet, useColorScheme, View, ViewProps } from 'react-native';

type Props = ViewProps & {
    lightColor?: string;
    darkColor?: string;
};

export function ThemedView({
    style,
    lightColor,
    darkColor,
    ...rest
}: Props) {
    const colorScheme = useColorScheme();

    const backgroundColor =
        colorScheme === 'dark'
            ? darkColor || '#000'
            : lightColor || '#fff';

    return <View style={[{ backgroundColor }, styles.container, style]} {...rest} />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});