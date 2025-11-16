// metro.config.js

// Learn more: https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

// Import the NativeWind wrapper
const { withNativeWind } = require("nativewind/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Wrap the default config with withNativeWind, specifying the input CSS file
module.exports = withNativeWind(config, { input: "./styles/global.css" });