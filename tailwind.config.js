const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./components/**/*.js', './pages/**/*.js'],
    mode: 'jit',
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
