module.exports = {
    content: ['./components/**/*.js', './pages/**/*.js'],
    theme: {
        extend: {
            colors: {
                push: '#18a6d8',
                accent: {
                    400: '#757722',
                    500: '#4c4d23',
                },
            },
            typography: {
                DEFAULT: {
                    css: {
                        color: '#000',
                    },
                },
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
