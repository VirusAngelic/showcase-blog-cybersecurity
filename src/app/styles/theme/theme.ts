import {extendTheme, ThemeConfig} from '@chakra-ui/react';
import {tabsTheme} from "@/app/styles/theme/components/ComponentThemes";
import "@fontsource/inter/"

const configColorMode: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
}

export const mainTheme = extendTheme({configColorMode, components: {Tabs: tabsTheme}});
/*
export const mainTheme = extendTheme({
    colors: {
        primary: "#252323",
        secondary: "#70798C",
        highlight: "#F5F1ED",
        warning: "#DAD2BC",
        danger: "#A99985",
    },
    components: {
        Tabs: tabsTheme,
    }
});
*/

