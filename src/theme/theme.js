import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = {
    body: "Volte-Semibold, sans-serif",
    heading: "Volte-Semibold, serif",
    mono: "Volte-Semibold, monospace",
}

// todo - choose the brand colors

const colors = {
    dark: {
        500: "#1E1E1E",
        600: "#161616",
        700: "#000000",
    },
    brand: {
        500: "#FD926F",
        600:"#87230F",
        700: "#5D0102"
    }
};

const breakpoints = createBreakpoints({
    sm: '25em',
    md: '37.5em',
    lg: '64em',
    xl: '80em',
})

const theme = extendTheme({
    colors: colors,
    // todo set the focus outline color
    shadows: {
        outline: '0 0 0 3px rgba(66, 153, 225, 0.6);'
    },
    fonts,
    breakpoints,
    styles: {
        global: {
            // todo set the default font color and line height
            "html, body": {
                color: "gray.600",
                lineHeight: "tall",
            },
            a: {
                textDecoration: "none",
            },
            ':focus:not(:focus-visible):not([role="dialog"]):not([role="menu"])': {
                boxShadow: 'none !important'
            }
        }
    }
    // icons: {
    //
    // },
})

export default theme