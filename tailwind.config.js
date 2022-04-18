module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {
            spacing: {
                20: '-20px',
                21: '100px',
                30: '-30px',
                50: '-50px',
                lh: '90vh',
                fullPlus: '105%',
                plus10: '110%',
            },
            colors: {
                'main-blue': 'var(--main-blue)',
                'main-gray': 'var(--main-gray)',
            },
            minWidth: {
                300: '300px',
            },
            maxWidth: {
                500: '500px',
            },
            zIndex: {
                '01': '-1',
            },
        },
    },
    plugins: [],
};
