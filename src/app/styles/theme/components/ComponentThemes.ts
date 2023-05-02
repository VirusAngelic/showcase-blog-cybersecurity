import {tabsAnatomy} from "@chakra-ui/anatomy";
import {createMultiStyleConfigHelpers, PartsStyleInterpolation, StyleFunctionProps} from "@chakra-ui/react";
const {definePartsStyle, defineMultiStyleConfig} = createMultiStyleConfigHelpers(tabsAnatomy.keys);
import "@fontsource/inter/"
import "@fontsource/noto-mono/"

const baseStyle =  definePartsStyle((props: StyleFunctionProps)=>{
    const {colorScheme: color} = props;

return {
    tab: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 'xl',
        fontStyle: 'normal',
        borderColor: 'transparent',
        borderBottom: 'none',
        colorScheme: 'purple',
    },
    tabPanel: {
        fontFamily: 'Noto-Mono',
        border: '2px solid',
        borderColor: 'green',
    },
}
})

const variants = {
    defaultVariant: baseStyle,
}

const defaultProps = {
    size: 'lg',
}

export const tabsTheme = defineMultiStyleConfig({
    variants,
    defaultProps,
})