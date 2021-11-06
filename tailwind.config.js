const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./components/**/*.js', './pages/**/*.js'],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            gray: colors.neutral,
            green: colors.green,
            lime: colors.lime,
            emerald: colors.emerald,
            blue: colors.sky,
            yellow: colors.amber,
            white: colors.white,
            black: colors.black,
            push: '#18a6d8',
        },
    },
    variants: {
        extend: {
            translate: ['hover'],
            transform: ['hover'],
            backgroundImage: ['hover'],
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
