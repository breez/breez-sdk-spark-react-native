import { type ConfigPlugin } from '@expo/config-plugins';
type WithIOSOptions = {
    enablePasskey: boolean;
};
/**
 * Configure iOS build settings for Breez SDK
 * The podspec already defines the minimum iOS version via min_ios_version_supported
 */
export declare const withBreezSdkIOS: ConfigPlugin<WithIOSOptions>;
export {};
