import { ConfigContext, ExpoConfig } from 'expo/config'

const rootAppId = ''
const appName = ''

let apiUrl = ''

if (process.env.APP_VARIANT === 'production') {
    apiUrl = ''
} else if (process.env.APP_VARIANT === 'preview') {
    apiUrl = ''
}

const config = ({ config: appConfig }: ConfigContext): ExpoConfig => {
    const { APP_VARIANT } = process.env
    const isProduction = APP_VARIANT === 'production'

    const name = !isProduction ? `${appName} ${APP_VARIANT}` : appName
    const appId = !isProduction ? `${rootAppId}.${APP_VARIANT}` : rootAppId

    return {
        ...appConfig,
        slug: 'app-slug',
        name,
        owner: '',
        version: '1.0.0',
        orientation: 'portrait',
        icon: './assets/icon.png',
        userInterfaceStyle: 'automatic',
        jsEngine: 'hermes',
        scheme: 'app-scheme',
        extra: {
            eas: {
                projectId: '',
            },
            appVariant: APP_VARIANT,
            apiUrl,
        },
        splash: {
            image: './assets/splash.png',
            resizeMode: 'contain',
            backgroundColor: '#25225E',
        },
        updates: {
            fallbackToCacheTimeout: 0,
        },
        assetBundlePatterns: ['**/*'],
        ios: {
            supportsTablet: true,
            bundleIdentifier: appId,
            infoPlist: {
                NSCameraUsageDescription: 'app uses the camera to verify your KYC',
                NSMicrophoneUsageDescription: 'app requires for video capture',
            },
        },
        android: {
            softwareKeyboardLayoutMode: 'pan',
            adaptiveIcon: {
                foregroundImage: './assets/icon.png',
                backgroundColor: '#25225E',
            },
            package: appId,
        },
        web: {
            name: 'appName',
            favicon: './assets/favicon.png',
            bundler: 'metro',
        },
        plugins: [
            [
                'expo-build-properties',
                {
                    android: {
                        compileSdkVersion: 32,
                        targetSdkVersion: 32,
                    },
                },
            ],
        ],
    }
}

export default config
