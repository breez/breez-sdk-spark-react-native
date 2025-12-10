"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withBreezSdkAndroid = void 0;
const config_plugins_1 = require("@expo/config-plugins");
/**
 * Add required configurations to gradle.properties
 */
const withGradlePropertiesConfig = (config) => {
    return (0, config_plugins_1.withGradleProperties)(config, (config) => {
        config.modResults = config.modResults.filter((item) => item.type !== 'property' || item.key !== 'android.useAndroidX');
        config.modResults.push({
            type: 'property',
            key: 'android.useAndroidX',
            value: 'true',
        });
        return config;
    });
};
/**
 * Configure Android build settings for Breez SDK
 */
const withBreezSdkAndroid = (config) => {
    config = withGradlePropertiesConfig(config);
    return config;
};
exports.withBreezSdkAndroid = withBreezSdkAndroid;
