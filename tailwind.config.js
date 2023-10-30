module.exports = {
    content: [
        "../BlazorTailwind/**/*.{html,razor}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
    darkMode: 'class'
}