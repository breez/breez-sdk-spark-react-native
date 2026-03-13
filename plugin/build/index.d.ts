import { type ConfigPlugin } from '@expo/config-plugins';
export type BreezSdkPluginOptions = {
    /**
     * Skip downloading binary artifacts (default: false)
     * Set to true if you want to handle binary downloads manually
     */
    skipBinaryDownload?: boolean;
    /**
     * Add webcredentials:keys.breez.technology to the iOS Associated Domains
     * entitlement, required for passkey-based seed derivation (default: false)
     */
    enablePasskey?: boolean;
};
declare const _default: ConfigPlugin<void | BreezSdkPluginOptions>;
export default _default;
