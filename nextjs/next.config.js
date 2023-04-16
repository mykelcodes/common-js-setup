process.env.TAMAGUI_TARGET = 'web'

const { withExpo } = require('@expo/next-adapter')
const { withTamagui } = require('@tamagui/next-plugin')

/** @type {import('next').NextConfig} */
const nextConfig = withExpo({
    reactStrictMode: true,
    swcMinify: true,
    transpilePackages: ['react-native', 'expo'],
    experimental: {
        forceSwcTransforms: true,
    },
})

const tamaguiPlugin = withTamagui({
    components: ['tamagui'],
    useReactNativeWebLite: true,
    config: './tamagui.config.ts',
})

module.exports = {
    ...nextConfig,
    ...tamaguiPlugin(nextConfig),
}
