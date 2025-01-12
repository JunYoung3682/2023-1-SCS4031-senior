module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            minHeight: {
                screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh'],
            },
            gridTemplateRows: {
                'header-footer': 'auto 1fr auto',
            },
            textColor: {
                primary: '#3C3C3C',
            },
        },
    },
    plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('daisyui')],
    daisyui: {
        darkTheme: 'light',
    },
}