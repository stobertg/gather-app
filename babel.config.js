module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Expo Router
      'expo-router/babel',

      // Tamagui compiler (per Tamagui Expo guide)
      [
        '@tamagui/babel-plugin',
        {
          components: ['tamagui'],
          config: './tamagui.config.ts',
          logTimings: true,
          disableExtraction: process.env.NODE_ENV === 'development',
        },
      ],

      // Reanimated must be last
      'react-native-reanimated/plugin',
    ],
  };
};