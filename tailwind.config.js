module.exports = {
  mode: 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  //"./components/**/*.{js,ts,jsx,tsx}",
    // darkMode: media, // or 'media' or 'class'
    theme: {
        screens: {
            sm: '375px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        spacing: {
            px: '1px',
            0: '0',
            0.5: '2px',
            1: '4px',
            1.5: '6px',
            2: '8px',
            2.5: '10px',
            3: '12px',
            3.5: '14px',
            4: '16px',
            5: '20px',
            6: '24px',
            7: '28px',
            8: '32px',
            9: '36px',
            10: '40px',
            11: '44px',
            12: '48px',
            14: '56px',
            16: '64px',
            20: '80px',
            24: '96px',
            28: '112px',
            32: '128px',
            36: '144px',
            40: '160px',
            44: '176px',
            48: '192px',
            52: '208px',
            56: '224px',
            60: '240px',
            64: '256px',
            72: '288px',
            80: '320px',
            96: '384px',
        },
        extend: {
            fontSize: {
                5: '11px',
                6: '12px',
                7: '14px',
                8: '16px',
                9: '18px',
                10: '20px',
                11: '22px',
                12: '24px',
                13: '26px',
                14: '28px',
                15: '30px',
                16: '32px',
                17: '34px',
                18: '36px',
                19: '38px',
                20: '40px',
            },
            lineHeight: {
                6: '12px',
                7: '14px',
                8: '16px',
                9: '18px',
                10: '20px',
                11: '22px',
                12: '24px',
                13: '26px',
                14: '28px',
                15: '30px',
                16: '32px',
                17: '34px',
                18: '36px',
                19: '38px',
                20: '40px',
            },
            colors: {
                'primary-color': '#177EFF',
                'secondary-color': '#F5F6FA',
                'text-color': '#111111',
                'label-color': '#667281',
                'light-blue': '#B2C2DF',
                'dod-grey': '#2F2F2F',
                'border-color': '#DBDBE2'
            },
            height: {
                cover: '89vh',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
