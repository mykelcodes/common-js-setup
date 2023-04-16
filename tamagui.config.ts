import { createFont, createTamagui, createTokens } from 'tamagui'

const tokens = createTokens({
    color: { brand: 'teal' },
    space: {
        0: 0,
        1: 4,
        2: 8,
        3: 12,
        4: 16,
        true: 16,
        5: 20,
        6: 24,
        7: 28,
        8: 32,
        9: 36,
        10: 40,
    },
    size: {
        0: 0,
        1: 4,
        2: 8,
        3: 12,
        4: 16,
        true: 16,
        5: 20,
        6: 24,
        7: 28,
        8: 32,
        9: 36,
        10: 40,
    },
    radius: {
        0: 0,
        1: 4,
        2: 8,
        3: 12,
        4: 16,
        true: 16,
        5: 20,
        6: 24,
        7: 28,
        8: 32,
        9: 36,
        10: 40,
        full: 999,
    },
    zIndex: {
        0: 0,
        1: 5,
        2: 10,
        3: 20,
        4: 40,
        5: 50,
    },
})

const brandFont = createFont({
    size: {
        xs: 12,
        sm: 14,
        md: 16,
    },
    lineHeight: {
        1: 16,
        2: 24,
    },
    letterSpacing: {},
    weight: {
        1: 400,
    },
    family: 'DeliciousHandrawn',
})

export default createTamagui({
    fonts: {
        heading: brandFont,
        body: brandFont,
    },
    tokens,
    themes: {
        light: {
            bg: 'teal',
        },
        dark: {
            bg: 'blue',
        },
    },
})
