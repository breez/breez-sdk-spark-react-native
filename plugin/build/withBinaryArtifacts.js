"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.withBinaryArtifacts = void 0;
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const child_process_1 = require("child_process");
/**
 * Downloads prebuilt binary artifacts for Android and iOS
 * This runs during expo prebuild to ensure binaries are available
 */
const withBinaryArtifacts = (config) => {
    return {
        ...config,
        async prebuildAsync(config) {
            try {
                await downloadBinaryArtifacts();
            }
            catch (error) {
                console.warn('Failed to download Breez SDK binary artifacts:', error);
                console.warn('You may need to run the postinstall script manually or check your network connection.');
            }
            return config;
        },
    };
};
exports.withBinaryArtifacts = withBinaryArtifacts;
async function downloadBinaryArtifacts() {
    const packageRoot = findPackageRoot();
    if (!packageRoot) {
        throw new Error('Could not find @breeztech/breez-sdk-spark-react-native package');
    }
    // Check if artifacts already exist
    const androidLibsPath = path.join(packageRoot, 'android/src/main/jniLibs');
    const iosFrameworkPath = path.join(packageRoot, 'build/RnBreezSdkSpark.xcframework');
    if (fs.existsSync(androidLibsPath) && fs.existsSync(iosFrameworkPath)) {
        return;
    }
    const packageJsonPath = path.join(packageRoot, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    const version = packageJson.version;
    const androidChecksum = packageJson.checksums?.android;
    const iosChecksum = packageJson.checksums?.ios;
    if (!androidChecksum || !iosChecksum) {
        throw new Error('Binary checksums not found in package.json');
    }
    const repo = 'https://github.com/breez/breez-sdk-spark-react-native';
    const androidUrl = `${repo}/releases/download/${version}/android-artifacts.zip`;
    const iosUrl = `${repo}/releases/download/${version}/ios-artifacts.zip`;
    // Download and verify Android artifacts
    try {
        (0, child_process_1.execSync)(`curl -L "${androidUrl}" --output android-artifacts.zip`, {
            cwd: packageRoot,
            stdio: 'inherit',
        });
        const actualAndroidChecksum = (0, child_process_1.execSync)('shasum -a 256 android-artifacts.zip | cut -d" " -f1', { cwd: packageRoot, encoding: 'utf-8' }).trim();
        if (actualAndroidChecksum !== androidChecksum) {
            throw new Error(`Android artifacts checksum mismatch. Expected: ${androidChecksum}, Got: ${actualAndroidChecksum}`);
        }
        (0, child_process_1.execSync)('unzip -o android-artifacts.zip && rm -rf android-artifacts.zip', {
            cwd: packageRoot,
            stdio: 'inherit',
        });
    }
    catch (error) {
        (0, child_process_1.execSync)('rm -f android-artifacts.zip', { cwd: packageRoot });
        console.error('Failed to download or verify Android artifacts');
        throw error;
    }
    // Download and verify iOS artifacts
    try {
        (0, child_process_1.execSync)(`curl -L "${iosUrl}" --output ios-artifacts.zip`, {
            cwd: packageRoot,
            stdio: 'inherit',
        });
        const actualIosChecksum = (0, child_process_1.execSync)('shasum -a 256 ios-artifacts.zip | cut -d" " -f1', { cwd: packageRoot, encoding: 'utf-8' }).trim();
        if (actualIosChecksum !== iosChecksum) {
            throw new Error(`iOS artifacts checksum mismatch. Expected: ${iosChecksum}, Got: ${actualIosChecksum}`);
        }
        (0, child_process_1.execSync)('unzip -o ios-artifacts.zip && rm -rf ios-artifacts.zip', {
            cwd: packageRoot,
            stdio: 'inherit',
        });
    }
    catch (error) {
        (0, child_process_1.execSync)('rm -f ios-artifacts.zip', { cwd: packageRoot });
        console.error('Failed to download or verify iOS artifacts');
        throw error;
    }
}
function findPackageRoot() {
    let currentDir = __dirname;
    // Walk up the directory tree to find the package root
    while (currentDir !== path.dirname(currentDir)) {
        const packageJsonPath = path.join(currentDir, 'package.json');
        if (fs.existsSync(packageJsonPath)) {
            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
            if (packageJson.name === '@breeztech/breez-sdk-spark-react-native') {
                return currentDir;
            }
        }
        currentDir = path.dirname(currentDir);
    }
    return null;
}
