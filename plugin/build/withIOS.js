"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withBreezSdkIOS = void 0;
/**
 * Configure iOS build settings for Breez SDK
 * The podspec already defines the minimum iOS version via min_ios_version_supported
 */
const withBreezSdkIOS = (config) => {
    // Currently no additional iOS configuration needed
    // The podspec handles minimum version and framework linking
    return config;
};
exports.withBreezSdkIOS = withBreezSdkIOS;
