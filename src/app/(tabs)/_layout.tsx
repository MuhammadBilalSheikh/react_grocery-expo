import { useAuth } from '@clerk/expo';
import { Redirect } from 'expo-router';
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { useColorScheme } from "nativewind";


export default function TabsLayout() {
    const { isSignedIn, isLoaded } = useAuth()

    const { colorsScheme } = useColorScheme();
    const isDark = colorsScheme === 'dark';
    const tabtTintColor = isDark ? "hsl(142 70% 54%)" : "hsl(147 75% 34%)";

    if (!isLoaded) {
        return null
    }

    if (!isSignedIn) {
        return <Redirect href="/(auth)/sign-in" />
    }

    return (
        <NativeTabs tintColor={tabtTintColor}>
            <NativeTabs.Trigger name="index">
                <NativeTabs.Trigger.Label>List</NativeTabs.Trigger.Label>
                <NativeTabs.Trigger.Icon sf={{
                    default: "list.bullet.clipboard",
                    selected: "list.bullet.clipboard.fill",
                }} md="list" />
                {/* todo: Add badge functionality */}
                {/* <NativeTabs.Trigger.Badge>3</NativeTabs.Trigger.Badge> */}
            </NativeTabs.Trigger>

            <NativeTabs.Trigger name="planner">
                <NativeTabs.Trigger.Icon sf={{
                    default: "plus.circle",
                    selected: "plus.circle.fill",
                }} md="add" />
                <NativeTabs.Trigger.Label>Planner</NativeTabs.Trigger.Label>
            </NativeTabs.Trigger>

            <NativeTabs.Trigger name="insights">
                <NativeTabs.Trigger.Icon sf={{
                    default: "chart.bar",
                    selected: "chart.bar.fill",
                }} md="analytics" />
                <NativeTabs.Trigger.Label>Insights</NativeTabs.Trigger.Label>
            </NativeTabs.Trigger>
        </NativeTabs >
    );
}