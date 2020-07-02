module.exports = {
    purge: [],
    theme: {
        // Colors pallete defined in the figma file
        colors: {
            primary: {
                darkest: '#A00153',
                dark: '#C50166',
                default: '#EB338B',
                light: '#FF609E',
                lighter: '#E2979D',
            },
            accent: '#3AEFEA',
            white: '#FFFFFF',
            error: '#FF3232',
            success: '#1FE964',
            background: '#31364B',
            'low-contrast': '#5A5E6F',
            'high-contrast': '#F8F9F9',
            'reduce-contrast': '#ABAEB7',
            'green': '#5FBE00',
            'blue': '#00AAA5',
            'red': '#DD9200',
            'orange': '#F03117'
        },

        // font theme
        fontSize: {
            'display-4': '6rem',
            'display-3': '3.75rem',
            'display-2': '3rem',
            'display-1': '2.125rem',
            'headline': '1.5rem',
            'title': '1.25rem',
            'subhead': '1.125rem',
            'subtitle': '0.875rem',
            'body': '1rem',
            'button': '0.875rem',
            'caption': '0.75rem',
            'overline': '0.75rem',
        },
        fontWeight: {
            'display-4': '300',
            'display-3': '300',
            'display-2': '400',
            'display-1': '400',
            'headline': '400',
            'title': '600',
            'subhead': '400',
            'subtitle': '600',
            'body': '400',
            'button': '600',
            'caption': '600',
            'overline': '400',
        },

        // shadows
        boxShadow: {
            default: '0px 8px 16px rgba(0, 0, 0, 0.25);',
            neo: '-10px -10px 30px #383E56, 10px 10px 30px #2A2E40;',
            top: '-4px -4px 16px rgba(0, 0, 0, 0.25);',
        },

        // corners
        borderRadius: {
            default: '0.25rem',
            small: '0.375rem',
            big: '0.5rem',
            large: '1rem',
            'large-x2': '2rem',
            'large-x4': '4rem',
            full: '9999px',
        },
        extend: {
            spacing: {
                '1/3': '33.3333%',
                '2/3': '66.6666%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
            }
        },
    },
    variants: {
        borderColor: ['hover', 'focus', 'focus-within'],
    },
    plugins: [],
}