const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./components/**/*.js', './pages/**/*.js'],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            gray: colors.trueGray,
            green: colors.green,
            lime: colors.lime,
            emerald: colors.emerald,
            blue: colors.lightBlue,
            yellow: colors.amber,
            white: colors.white,
            black: colors.black,
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
