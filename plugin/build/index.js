"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_plugins_1 = require("@expo/config-plugins");
const withAndroid_1 = require("./withAndroid");
const withIOS_1 = require("./withIOS");
const utils_1 = require("./utils");
const withBreezSdk = (config, options) => {
    const {} = options || {};
    return (0, config_plugins_1.withPlugins)(config, [
        // Configure Android
        withAndroid_1.withBreezSdkAndroid,
        // Configure iOS
        withIOS_1.withBreezSdkIOS,
    ]);
};
exports.default = (0, config_plugins_1.createRunOncePlugin)(withBreezSdk, utils_1.sdkPackage.name, utils_1.sdkPackage.version);
