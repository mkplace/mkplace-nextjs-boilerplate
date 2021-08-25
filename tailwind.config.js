module.exports = {
    purge: [],
    theme: {
        extend: {},
    },
    darkMode: 'class',
    variants: {
        extend: {
            backgroundColor: ['active', 'group-active'],
            borderWidth: ['last'],
            margin: ['last'],
        },
    },
    plugins: [
        require('tailwindcss-interaction-variants'),
        require('@tailwindcss/forms'),
    ],
};
