const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ["./**/*.{ts,tsx}"],
    theme: {
        extend: {
            screens: {
                'xlg': '1200px'
            }
        },
        aspectRatio: {
            340: '340',
            246: '246',

        },
        fontFamily: {
            'poppins': ['Poppins', 'sans-serif']
        },
        borderWidth: {
            '1': '1px'
        }
    },
    daisyui: {
        themes: [
            {
                custom: {
                primary: "#570DF8",
                secondary: "#F000B8",
                accent: "#37CDBE",
                neutral: "#3D4451",
                "base-100": "#FFFFFF",
                info: "#3ABFF8",
                success: "#36D399",
                warning: "#FBBD23",
                error: "#F87272",
                },
            },
        ],
    },
    plugins: [
        require("daisyui"),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
};
