import { type ConfigPlugin } from '@expo/config-plugins';
export type BreezSdkPluginOptions = {
    /**
     * Skip downloading binary artifacts (default: false)
     * Set to true if you want to handle binary downloads manually
     */
    skipBinaryDownload?: boolean;
};
declare const _default: ConfigPlugin<void | BreezSdkPluginOptions>;
export default _default;
