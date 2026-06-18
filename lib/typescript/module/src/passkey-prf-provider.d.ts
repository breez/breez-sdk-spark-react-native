import { PasskeyClient as SdkPasskeyClient, PasskeyProviderOptions, type PasskeyConfig, type PrfProvider } from './generated/breez_sdk_spark';
/**
 * A passkey credential from a register or sign-in ceremony. `credentialId`
 * is always set; the attestation fields are populated on registration and
 * absent on sign-in (an assertion carries no attestation). Persist
 * `credentialId` to drive `excludeCredentials` / `allowCredentials` on later
 * calls. Treat `aaguid` as an unverified display hint, never a trust decision.
 * `userId` is the user handle minted by the native plugin (never host-supplied).
 */
export interface PasskeyCredential {
    credentialId: Uint8Array;
    userId: Uint8Array | null;
    aaguid: Uint8Array | null;
    backupEligible: boolean | null;
}
/**
 * Result of {@link PasskeyProvider.checkDomainAssociation}. Switch on `kind`
 * to handle each outcome.
 */
export type DomainAssociation = {
    kind: 'Associated';
} | {
    kind: 'NotAssociated';
    source: string;
    reason: string;
} | {
    kind: 'Skipped';
    reason: string;
};
/**
 * Error thrown when a passkey operation fails, with a structured `code` for
 * programmatic handling: `userCancelled`, `userTimedOut`, `prfNotSupported`,
 * `noCredential`, `configuration`, `credentialAlreadyExists`, `unknown`.
 * `userTimedOut` is the OS biometric inactivity timeout (distinct from the
 * user dismissing the prompt), so hosts may safely auto-retry it.
 */
export declare class PasskeyPrfException extends Error {
    readonly code: string;
    constructor(code: string, message: string);
}
/**
 * Built-in React Native passkey PRF provider, backed by AuthenticationServices
 * on iOS and Credential Manager on Android. The default {@link PrfProvider};
 * inject a configured instance through {@link PasskeyClientBuilder}. Requires
 * iOS 18+ or Android 14+ (API 34) plus the Associated Domains entitlement
 * (iOS) or assetlinks.json (Android) for the RP domain.
 */
export declare class PasskeyProvider {
    /**
     * Breez's shared `keys.breez.technology` RP. Pass as `rpId` to opt in
     * (only valid for apps registered with Breez); apps with their own RP
     * domain pass their own string.
     */
    static readonly BREEZ_RP_ID: string;
    /** Default `rpName` for the zero-config client when none is supplied. */
    static readonly DEFAULT_RP_NAME: string;
    private rpId;
    private rpName;
    private userName;
    private userDisplayName;
    constructor(options: PasskeyProviderOptions);
    /**
     * Derive one 32-byte seed per salt from passkey PRF, in as few OS prompts
     * as the platform supports. `allowCredentials` restricts the assertion to
     * specific credential IDs (mainly for reauthentication) when non-empty;
     * `preferImmediatelyAvailableCredentials` overrides the platform default
     * when set. Returns the seeds plus the asserted credential ID.
     */
    deriveSeeds(request: {
        salts: string[];
        allowCredentials?: Uint8Array[];
        preferImmediatelyAvailableCredentials?: boolean | null;
    }): Promise<{
        seeds: Uint8Array[];
        credentialId?: Uint8Array;
    }>;
    /**
     * Register a new PRF-capable passkey (one prompt, no seed derivation): use
     * it to split credential creation from derivation in multi-step onboarding.
     * `excludeCredentials` blocks re-registering a device that already holds a
     * credential, surfaced as a `credentialAlreadyExists` failure. The returned
     * user handle is minted fresh per call (never host-supplied).
     */
    createPasskey(excludeCredentials?: Uint8Array[]): Promise<PasskeyCredential>;
    /** Whether this device supports passkeys with the PRF extension. */
    isSupported(): Promise<boolean>;
    /**
     * Verify the app is associated with the configured `rpId` for WebAuthn.
     * Android always returns `Skipped` rather than `NotAssociated`: Credential
     * Manager runs its own check internally against fresher data.
     */
    checkDomainAssociation(): Promise<DomainAssociation>;
}
/**
 * Builds a `PasskeyClient` backed by a caller-supplied provider. Use this
 * for a custom PRF backend; omit the provider for the zero-config Breez-RP
 * default and set `providerOptions` on the config to use your own RP.
 */
export declare class PasskeyClientBuilder {
    private readonly breezApiKey?;
    private readonly config?;
    private provider?;
    /**
     * @param breezApiKey Breez relay key for authenticated (NIP-42) label
     *   storage. Omit for public relays only.
     * @param config Passkey client config. `providerOptions` configures the
     *   default provider (ignored when a provider is injected via
     *   {@link withPrfProvider}, which owns its RP); `defaultLabel` is the
     *   label-store default.
     */
    constructor(breezApiKey?: string | undefined, config?: PasskeyConfig | undefined);
    /**
     * Inject the provider the client derives seeds through: the built-in
     * {@link PasskeyProvider} or any custom `PrfProvider` implementation.
     * Supersedes the config's `providerOptions` (the injected provider owns
     * its RP).
     */
    withPrfProvider(provider: PrfProvider): this;
    /**
     * Construct the client. Falls back to a default {@link PasskeyProvider}
     * on the config's `providerOptions` (default: the Breez RP) when no
     * provider was injected.
     */
    build(): SdkPasskeyClient;
}
/**
 * Zero-config passkey client on the Breez shared RP (`keys.breez.technology`),
 * so a Breez-registered app needs only its relay key; set `providerOptions` on
 * the config to use your own RP. For a custom PRF backend, build the provider
 * and inject it via {@link PasskeyClientBuilder}.
 */
export declare const PasskeyClient: {
    new (breezApiKey?: string, config?: PasskeyConfig): SdkPasskeyClient;
};
//# sourceMappingURL=passkey-prf-provider.d.ts.map