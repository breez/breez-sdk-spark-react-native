"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withBreezSdkIOS = void 0;
const config_plugins_1 = require("@expo/config-plugins");
/**
 * Configure iOS build settings for Breez SDK
 * The podspec already defines the minimum iOS version via min_ios_version_supported
 */
const withBreezSdkIOS = (config, { enablePasskey }) => {
    if (!enablePasskey) {
        return config;
    }
    return (0, config_plugins_1.withEntitlementsPlist)(config, (config) => {
        const domain = 'webcredentials:keys.breez.technology';
        const domains = config.modResults['com.apple.developer.associated-domains'] ?? [];
        if (!domains.includes(domain)) {
            domains.push(domain);
        }
        config.modResults['com.apple.developer.associated-domains'] = domains;
        return config;
    });
};
exports.withBreezSdkIOS = withBreezSdkIOS;
