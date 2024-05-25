module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.ios.tsx',
          '.android.ts',
          '.android.tsx',
          '.ts',
          '.tsx',
          '.js',
          '.jsx',
          '.json',
        ],
        alias: {
          '@shared': './src/shared',
          '@screens': './src/screens',
          '@app': './src/app',
          '@widgets': './src/widgets',
          '@features': './src/features',
          '@entities': './src/entities',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
