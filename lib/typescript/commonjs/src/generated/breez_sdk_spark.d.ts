import { type FfiConverter, type UniffiByteArray, type UniffiRustArcPtr, type UnsafeMutableRawPointer, FfiConverterObject, FfiConverterObjectWithCallbacks, RustBuffer, UniffiAbstractObject, destructorGuardSymbol, pointerLiteralSymbol, uniffiTypeNameSymbol } from 'uniffi-bindgen-react-native';
/**
 * Connects to the Spark network using the provided configuration and mnemonic.
 *
 * # Arguments
 *
 * * `request` - The connection request object
 *
 * # Returns
 *
 * Result containing either the initialized `BreezSdk` or an `SdkError`
 */
export declare function connect(request: ConnectRequest, asyncOpts_?: {
    signal: AbortSignal;
}): Promise<BreezSdkInterface>;
/**
 * Connects to the Spark network using an external signer.
 *
 * This method allows using a custom signer implementation instead of providing
 * a seed directly.
 *
 * # Arguments
 *
 * * `request` - The connection request object with external signer
 *
 * # Returns
 *
 * Result containing either the initialized `BreezSdk` or an `SdkError`
 */
export declare function connectWithSigner(request: ConnectWithSignerRequest, asyncOpts_?: {
    signal: AbortSignal;
}): Promise<BreezSdkInterface>;
/**
 * Builds the Turnkey-backed Breez and Spark signers from `config`, sharing one
 * Turnkey client.
 *
 * The Spark signer keeps every signing operation in the Turnkey enclave; the
 * Breez signer does too, except ECIES and HMAC, which run locally against a
 * dedicated, non-Spark key exported once here. Exporting a non-Spark key keeps
 * every Spark key (the identity key included) in the enclave; ECIES/HMAC only
 * need a stable key, not a Spark one.
 */
export declare function createTurnkeySigner(config: TurnkeyConfig, asyncOpts_?: {
    signal: AbortSignal;
}): Promise<ExternalSigners>;
/**
 * Wraps a caller-supplied [`Storage`] implementation as a [`StorageBackend`].
 * The tree, token-output and session stores use the in-memory defaults.
 */
export declare function customStorage(storage: Storage): StorageBackend;
export declare function defaultConfig(network: Network): Config;
/**
 * Creates the default external signers from a mnemonic.
 *
 * This is a convenience factory method for creating the two signer halves
 * that can be passed to `connect_with_signer` or `SdkBuilder::new_with_signer`.
 * Key derivation matches the seed-based connect path: an SDK built either way
 * from the same mnemonic is the same wallet.
 *
 * # Arguments
 *
 * * `mnemonic` - BIP39 mnemonic phrase (12 or 24 words)
 * * `passphrase` - Optional passphrase for the mnemonic
 * * `network` - Network to use (Mainnet or Regtest)
 * * `account_number` - Account number in the derivation path. Unset uses the
 * network default: 0 on Regtest, 1 on all other networks.
 */
export declare function defaultExternalSigners(mnemonic: string, passphrase: string | undefined, network: Network, accountNumber: /*u32*/ number | undefined): ExternalSigners;
/**
 * Builds a [`Config`] suitable for multi-tenant server-mode deployments.
 *
 * This preset returns the same configuration as [`default_config`] with
 * [`background_tasks_enabled`](Config::background_tasks_enabled) set to
 * `false`. In server mode, the SDK is treated as a library: the host
 * orchestrates sync, claiming, and event delivery (typically via webhooks)
 * explicitly, so an ephemeral SDK instance stays cheap and predictable.
 *
 * Config fields whose background services are gated off are reset to their
 * inactive shape: `real_time_sync_server_url` and `cross_chain_config` are
 * set to `None`, and both `leaf_optimization_config.auto_enabled` and
 * `token_optimization_config.auto_enabled` are set to `false`. The SDK
 * rejects builds where `background_tasks_enabled` is `false` and any of
 * those fields is left in its active shape, so flip the flag via this
 * helper rather than by hand.
 *
 * Explicit operations (`sync_wallet`, `claim_deposit`,
 * `list_unclaimed_deposits`, `refund_deposit`,
 * `refund_pending_conversions`, etc.) continue to work and are the intended
 * entry points in this mode.
 *
 * Stable Balance is not supported in this mode because its conversion worker
 * is a background service.
 *
 * One-time setup that the SDK normally applies automatically — notably
 * `private_enabled_default` — is NOT applied in this mode. Drive setup
 * explicitly via `update_user_settings` (and any other relevant APIs) so
 * ephemeral per-request SDK instances incur no implicit setup overhead.
 *
 * `get_info` reads balance directly from the spark wallet in this mode
 * rather than from the background-maintained storage cache, so balance
 * reflects the latest local sync and `ensure_synced=true` is rejected with
 * an invalid-input error
 */
export declare function defaultServerConfig(network: Network): Config;
/**
 * File-based `SQLite` storage rooted at `storage_dir` — the default for
 * mobile and desktop apps. Each tenant gets its own database file under the
 * directory.
 */
export declare function defaultStorage(storageDir: string): StorageBackend;
/**
 * Fetches the current status of Spark network services relevant to the SDK.
 *
 * This function queries the Spark status API and returns the worst status
 * across the Spark Operators and SSP services.
 */
export declare function getSparkStatus(asyncOpts_?: {
    signal: AbortSignal;
}): Promise<SparkStatus>;
export declare function initLogging(logDir: string | undefined, appLogger: Logger | undefined, logFilter: string | undefined): void;
/**
 * Constructs a shareable REST-based [`BitcoinChainService`].
 *
 * Pass the returned `Arc` to multiple [`SdkBuilder`](crate::SdkBuilder)s via
 * [`SdkBuilder::with_chain_service`](crate::SdkBuilder::with_chain_service)
 * to reuse a single underlying HTTP client (and its connection pool) across
 * SDK instances. All SDKs sharing the service must use the same `network`.
 *
 * For one-off, non-shared use, prefer
 * [`SdkBuilder::with_rest_chain_service`](crate::SdkBuilder::with_rest_chain_service).
 */
export declare function newRestChainService(url: string, network: Network, apiType: ChainApiType, credentials: Credentials | undefined, asyncOpts_?: {
    signal: AbortSignal;
}): Promise<BitcoinChainService>;
/**
 * Constructs an [`SdkContext`] from a `SdkContextConfig`.
 *
 * The returned `Arc` is cheap to clone and can back many SDK instances,
 * sharing their HTTP client and operator gRPC channels.
 */
export declare function newSharedSdkContext(config: SdkContextConfig, asyncOpts_?: {
    signal: AbortSignal;
}): Promise<SdkContextInterface>;
/**
 * Trait for event listeners
 */
export interface EventListener {
    /**
     * Called when an event occurs
     */
    onEvent(event: SdkEvent, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
}
export interface Logger {
    log(l: LogEntry): void;
}
/**
 * Request to add a new contact.
 */
export type AddContactRequest = {
    name: string;
    /**
     * A Lightning address (user@domain).
     */
    paymentIdentifier: string;
};
/**
 * Generated factory for {@link AddContactRequest} record objects.
 */
export declare const AddContactRequest: Readonly<{
    /**
     * Create a frozen instance of {@link AddContactRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<AddContactRequest> & Required<Omit<AddContactRequest, never>>) => AddContactRequest;
    /**
     * Create a frozen instance of {@link AddContactRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<AddContactRequest> & Required<Omit<AddContactRequest, never>>) => AddContactRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<AddContactRequest>;
}>;
/**
 * Payload of the AES success action, as received from the LNURL endpoint
 *
 * See [`AesSuccessActionDataDecrypted`] for a similar wrapper containing the decrypted payload
 */
export type AesSuccessActionData = {
    /**
     * Contents description, up to 144 characters
     */
    description: string;
    /**
     * Base64, AES-encrypted data where encryption key is payment preimage, up to 4kb of characters
     */
    ciphertext: string;
    /**
     * Base64, initialization vector, exactly 24 characters
     */
    iv: string;
};
/**
 * Generated factory for {@link AesSuccessActionData} record objects.
 */
export declare const AesSuccessActionData: Readonly<{
    /**
     * Create a frozen instance of {@link AesSuccessActionData}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<AesSuccessActionData> & Required<Omit<AesSuccessActionData, never>>) => AesSuccessActionData;
    /**
     * Create a frozen instance of {@link AesSuccessActionData}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<AesSuccessActionData> & Required<Omit<AesSuccessActionData, never>>) => AesSuccessActionData;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<AesSuccessActionData>;
}>;
/**
 * Wrapper for the decrypted [`AesSuccessActionData`] payload
 */
export type AesSuccessActionDataDecrypted = {
    /**
     * Contents description, up to 144 characters
     */
    description: string;
    /**
     * Decrypted content
     */
    plaintext: string;
};
/**
 * Generated factory for {@link AesSuccessActionDataDecrypted} record objects.
 */
export declare const AesSuccessActionDataDecrypted: Readonly<{
    /**
     * Create a frozen instance of {@link AesSuccessActionDataDecrypted}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<AesSuccessActionDataDecrypted> & Required<Omit<AesSuccessActionDataDecrypted, never>>) => AesSuccessActionDataDecrypted;
    /**
     * Create a frozen instance of {@link AesSuccessActionDataDecrypted}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<AesSuccessActionDataDecrypted> & Required<Omit<AesSuccessActionDataDecrypted, never>>) => AesSuccessActionDataDecrypted;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<AesSuccessActionDataDecrypted>;
}>;
/**
 * Request for [`BreezSdk::authorize_lightning_address_transfer`]. Called by
 * the *current owner* to authorize handing their registered username over to
 * `transferee_pubkey`.
 */
export type AuthorizeTransferRequest = {
    /**
     * The new owner's identity public key.
     */
    transfereePubkey: string;
};
/**
 * Generated factory for {@link AuthorizeTransferRequest} record objects.
 */
export declare const AuthorizeTransferRequest: Readonly<{
    /**
     * Create a frozen instance of {@link AuthorizeTransferRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<AuthorizeTransferRequest> & Required<Omit<AuthorizeTransferRequest, never>>) => AuthorizeTransferRequest;
    /**
     * Create a frozen instance of {@link AuthorizeTransferRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<AuthorizeTransferRequest> & Required<Omit<AuthorizeTransferRequest, never>>) => AuthorizeTransferRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<AuthorizeTransferRequest>;
}>;
export type Bip21Details = {
    amountSat: /*u64*/ bigint | undefined;
    assetId: string | undefined;
    uri: string;
    extras: Array<Bip21Extra>;
    label: string | undefined;
    message: string | undefined;
    paymentMethods: Array<InputType>;
};
/**
 * Generated factory for {@link Bip21Details} record objects.
 */
export declare const Bip21Details: Readonly<{
    /**
     * Create a frozen instance of {@link Bip21Details}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<Bip21Details> & Required<Omit<Bip21Details, never>>) => Bip21Details;
    /**
     * Create a frozen instance of {@link Bip21Details}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<Bip21Details> & Required<Omit<Bip21Details, never>>) => Bip21Details;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<Bip21Details>;
}>;
export type Bip21Extra = {
    key: string;
    value: string;
};
/**
 * Generated factory for {@link Bip21Extra} record objects.
 */
export declare const Bip21Extra: Readonly<{
    /**
     * Create a frozen instance of {@link Bip21Extra}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<Bip21Extra> & Required<Omit<Bip21Extra, never>>) => Bip21Extra;
    /**
     * Create a frozen instance of {@link Bip21Extra}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<Bip21Extra> & Required<Omit<Bip21Extra, never>>) => Bip21Extra;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<Bip21Extra>;
}>;
export type BitcoinAddressDetails = {
    address: string;
    network: BitcoinNetwork;
    source: PaymentRequestSource;
};
/**
 * Generated factory for {@link BitcoinAddressDetails} record objects.
 */
export declare const BitcoinAddressDetails: Readonly<{
    /**
     * Create a frozen instance of {@link BitcoinAddressDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<BitcoinAddressDetails> & Required<Omit<BitcoinAddressDetails, never>>) => BitcoinAddressDetails;
    /**
     * Create a frozen instance of {@link BitcoinAddressDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<BitcoinAddressDetails> & Required<Omit<BitcoinAddressDetails, never>>) => BitcoinAddressDetails;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<BitcoinAddressDetails>;
}>;
export type Bolt11Invoice = {
    bolt11: string;
    source: PaymentRequestSource;
};
/**
 * Generated factory for {@link Bolt11Invoice} record objects.
 */
export declare const Bolt11Invoice: Readonly<{
    /**
     * Create a frozen instance of {@link Bolt11Invoice}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<Bolt11Invoice> & Required<Omit<Bolt11Invoice, never>>) => Bolt11Invoice;
    /**
     * Create a frozen instance of {@link Bolt11Invoice}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<Bolt11Invoice> & Required<Omit<Bolt11Invoice, never>>) => Bolt11Invoice;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<Bolt11Invoice>;
}>;
export type Bolt11InvoiceDetails = {
    amountMsat: /*u64*/ bigint | undefined;
    description: string | undefined;
    descriptionHash: string | undefined;
    expiry: bigint;
    invoice: Bolt11Invoice;
    minFinalCltvExpiryDelta: bigint;
    network: BitcoinNetwork;
    payeePubkey: string;
    paymentHash: string;
    paymentSecret: string;
    routingHints: Array<Bolt11RouteHint>;
    timestamp: bigint;
};
/**
 * Generated factory for {@link Bolt11InvoiceDetails} record objects.
 */
export declare const Bolt11InvoiceDetails: Readonly<{
    /**
     * Create a frozen instance of {@link Bolt11InvoiceDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<Bolt11InvoiceDetails> & Required<Omit<Bolt11InvoiceDetails, never>>) => Bolt11InvoiceDetails;
    /**
     * Create a frozen instance of {@link Bolt11InvoiceDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<Bolt11InvoiceDetails> & Required<Omit<Bolt11InvoiceDetails, never>>) => Bolt11InvoiceDetails;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<Bolt11InvoiceDetails>;
}>;
export type Bolt11RouteHint = {
    hops: Array<Bolt11RouteHintHop>;
};
/**
 * Generated factory for {@link Bolt11RouteHint} record objects.
 */
export declare const Bolt11RouteHint: Readonly<{
    /**
     * Create a frozen instance of {@link Bolt11RouteHint}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<Bolt11RouteHint> & Required<Omit<Bolt11RouteHint, never>>) => Bolt11RouteHint;
    /**
     * Create a frozen instance of {@link Bolt11RouteHint}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<Bolt11RouteHint> & Required<Omit<Bolt11RouteHint, never>>) => Bolt11RouteHint;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<Bolt11RouteHint>;
}>;
export type Bolt11RouteHintHop = {
    /**
     * The `node_id` of the non-target end of the route
     */
    srcNodeId: string;
    /**
     * The `short_channel_id` of this channel
     */
    shortChannelId: string;
    /**
     * The fees which must be paid to use this channel
     */
    feesBaseMsat: number;
    feesProportionalMillionths: number;
    /**
     * The difference in CLTV values between this node and the next node.
     */
    cltvExpiryDelta: number;
    /**
     * The minimum value, in msat, which must be relayed to the next hop.
     */
    htlcMinimumMsat: /*u64*/ bigint | undefined;
    /**
     * The maximum value in msat available for routing with a single HTLC.
     */
    htlcMaximumMsat: /*u64*/ bigint | undefined;
};
/**
 * Generated factory for {@link Bolt11RouteHintHop} record objects.
 */
export declare const Bolt11RouteHintHop: Readonly<{
    /**
     * Create a frozen instance of {@link Bolt11RouteHintHop}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<Bolt11RouteHintHop> & Required<Omit<Bolt11RouteHintHop, never>>) => Bolt11RouteHintHop;
    /**
     * Create a frozen instance of {@link Bolt11RouteHintHop}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<Bolt11RouteHintHop> & Required<Omit<Bolt11RouteHintHop, never>>) => Bolt11RouteHintHop;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<Bolt11RouteHintHop>;
}>;
export type Bolt12Invoice = {
    invoice: string;
    source: PaymentRequestSource;
};
/**
 * Generated factory for {@link Bolt12Invoice} record objects.
 */
export declare const Bolt12Invoice: Readonly<{
    /**
     * Create a frozen instance of {@link Bolt12Invoice}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<Bolt12Invoice> & Required<Omit<Bolt12Invoice, never>>) => Bolt12Invoice;
    /**
     * Create a frozen instance of {@link Bolt12Invoice}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<Bolt12Invoice> & Required<Omit<Bolt12Invoice, never>>) => Bolt12Invoice;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<Bolt12Invoice>;
}>;
export type Bolt12InvoiceDetails = {
    amountMsat: bigint;
    invoice: Bolt12Invoice;
};
/**
 * Generated factory for {@link Bolt12InvoiceDetails} record objects.
 */
export declare const Bolt12InvoiceDetails: Readonly<{
    /**
     * Create a frozen instance of {@link Bolt12InvoiceDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<Bolt12InvoiceDetails> & Required<Omit<Bolt12InvoiceDetails, never>>) => Bolt12InvoiceDetails;
    /**
     * Create a frozen instance of {@link Bolt12InvoiceDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<Bolt12InvoiceDetails> & Required<Omit<Bolt12InvoiceDetails, never>>) => Bolt12InvoiceDetails;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<Bolt12InvoiceDetails>;
}>;
export type Bolt12InvoiceRequestDetails = {};
/**
 * Generated factory for {@link Bolt12InvoiceRequestDetails} record objects.
 */
export declare const Bolt12InvoiceRequestDetails: Readonly<{
    /**
     * Create a frozen instance of {@link Bolt12InvoiceRequestDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<Bolt12InvoiceRequestDetails> & Required<Omit<Bolt12InvoiceRequestDetails, never>>) => Bolt12InvoiceRequestDetails;
    /**
     * Create a frozen instance of {@link Bolt12InvoiceRequestDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<Bolt12InvoiceRequestDetails> & Required<Omit<Bolt12InvoiceRequestDetails, never>>) => Bolt12InvoiceRequestDetails;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<Bolt12InvoiceRequestDetails>;
}>;
export type Bolt12Offer = {
    offer: string;
    source: PaymentRequestSource;
};
/**
 * Generated factory for {@link Bolt12Offer} record objects.
 */
export declare const Bolt12Offer: Readonly<{
    /**
     * Create a frozen instance of {@link Bolt12Offer}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<Bolt12Offer> & Required<Omit<Bolt12Offer, never>>) => Bolt12Offer;
    /**
     * Create a frozen instance of {@link Bolt12Offer}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<Bolt12Offer> & Required<Omit<Bolt12Offer, never>>) => Bolt12Offer;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<Bolt12Offer>;
}>;
export type Bolt12OfferBlindedPath = {
    blindedHops: Array<string>;
};
/**
 * Generated factory for {@link Bolt12OfferBlindedPath} record objects.
 */
export declare const Bolt12OfferBlindedPath: Readonly<{
    /**
     * Create a frozen instance of {@link Bolt12OfferBlindedPath}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<Bolt12OfferBlindedPath> & Required<Omit<Bolt12OfferBlindedPath, never>>) => Bolt12OfferBlindedPath;
    /**
     * Create a frozen instance of {@link Bolt12OfferBlindedPath}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<Bolt12OfferBlindedPath> & Required<Omit<Bolt12OfferBlindedPath, never>>) => Bolt12OfferBlindedPath;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<Bolt12OfferBlindedPath>;
}>;
export type Bolt12OfferDetails = {
    absoluteExpiry: /*u64*/ bigint | undefined;
    chains: Array<string>;
    description: string | undefined;
    issuer: string | undefined;
    minAmount: Amount | undefined;
    offer: Bolt12Offer;
    paths: Array<Bolt12OfferBlindedPath>;
    signingPubkey: string | undefined;
};
/**
 * Generated factory for {@link Bolt12OfferDetails} record objects.
 */
export declare const Bolt12OfferDetails: Readonly<{
    /**
     * Create a frozen instance of {@link Bolt12OfferDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<Bolt12OfferDetails> & Required<Omit<Bolt12OfferDetails, never>>) => Bolt12OfferDetails;
    /**
     * Create a frozen instance of {@link Bolt12OfferDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<Bolt12OfferDetails> & Required<Omit<Bolt12OfferDetails, never>>) => Bolt12OfferDetails;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<Bolt12OfferDetails>;
}>;
export type BurnIssuerTokenRequest = {
    amount: U128;
};
/**
 * Generated factory for {@link BurnIssuerTokenRequest} record objects.
 */
export declare const BurnIssuerTokenRequest: Readonly<{
    /**
     * Create a frozen instance of {@link BurnIssuerTokenRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<BurnIssuerTokenRequest> & Required<Omit<BurnIssuerTokenRequest, never>>) => BurnIssuerTokenRequest;
    /**
     * Create a frozen instance of {@link BurnIssuerTokenRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<BurnIssuerTokenRequest> & Required<Omit<BurnIssuerTokenRequest, never>>) => BurnIssuerTokenRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<BurnIssuerTokenRequest>;
}>;
/**
 * Response containing a URL to complete the Bitcoin purchase
 */
export type BuyBitcoinResponse = {
    /**
     * The URL to open in a browser to complete the purchase
     */
    url: string;
};
/**
 * Generated factory for {@link BuyBitcoinResponse} record objects.
 */
export declare const BuyBitcoinResponse: Readonly<{
    /**
     * Create a frozen instance of {@link BuyBitcoinResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<BuyBitcoinResponse> & Required<Omit<BuyBitcoinResponse, never>>) => BuyBitcoinResponse;
    /**
     * Create a frozen instance of {@link BuyBitcoinResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<BuyBitcoinResponse> & Required<Omit<BuyBitcoinResponse, never>>) => BuyBitcoinResponse;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<BuyBitcoinResponse>;
}>;
export type CheckLightningAddressRequest = {
    username: string;
};
/**
 * Generated factory for {@link CheckLightningAddressRequest} record objects.
 */
export declare const CheckLightningAddressRequest: Readonly<{
    /**
     * Create a frozen instance of {@link CheckLightningAddressRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<CheckLightningAddressRequest> & Required<Omit<CheckLightningAddressRequest, never>>) => CheckLightningAddressRequest;
    /**
     * Create a frozen instance of {@link CheckLightningAddressRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<CheckLightningAddressRequest> & Required<Omit<CheckLightningAddressRequest, never>>) => CheckLightningAddressRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<CheckLightningAddressRequest>;
}>;
export type CheckMessageRequest = {
    /**
     * The message that was signed
     */
    message: string;
    /**
     * The public key that signed the message
     */
    pubkey: string;
    /**
     * The DER or compact hex encoded signature
     */
    signature: string;
};
/**
 * Generated factory for {@link CheckMessageRequest} record objects.
 */
export declare const CheckMessageRequest: Readonly<{
    /**
     * Create a frozen instance of {@link CheckMessageRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<CheckMessageRequest> & Required<Omit<CheckMessageRequest, never>>) => CheckMessageRequest;
    /**
     * Create a frozen instance of {@link CheckMessageRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<CheckMessageRequest> & Required<Omit<CheckMessageRequest, never>>) => CheckMessageRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<CheckMessageRequest>;
}>;
export type CheckMessageResponse = {
    isValid: boolean;
};
/**
 * Generated factory for {@link CheckMessageResponse} record objects.
 */
export declare const CheckMessageResponse: Readonly<{
    /**
     * Create a frozen instance of {@link CheckMessageResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<CheckMessageResponse> & Required<Omit<CheckMessageResponse, never>>) => CheckMessageResponse;
    /**
     * Create a frozen instance of {@link CheckMessageResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<CheckMessageResponse> & Required<Omit<CheckMessageResponse, never>>) => CheckMessageResponse;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<CheckMessageResponse>;
}>;
export type ClaimDepositRequest = {
    txid: string;
    vout: number;
    maxFee: MaxFee | undefined;
};
/**
 * Generated factory for {@link ClaimDepositRequest} record objects.
 */
export declare const ClaimDepositRequest: Readonly<{
    /**
     * Create a frozen instance of {@link ClaimDepositRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ClaimDepositRequest> & Required<Omit<ClaimDepositRequest, "maxFee">>) => ClaimDepositRequest;
    /**
     * Create a frozen instance of {@link ClaimDepositRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ClaimDepositRequest> & Required<Omit<ClaimDepositRequest, "maxFee">>) => ClaimDepositRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ClaimDepositRequest>;
}>;
export type ClaimDepositResponse = {
    payment: Payment;
};
/**
 * Generated factory for {@link ClaimDepositResponse} record objects.
 */
export declare const ClaimDepositResponse: Readonly<{
    /**
     * Create a frozen instance of {@link ClaimDepositResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ClaimDepositResponse> & Required<Omit<ClaimDepositResponse, never>>) => ClaimDepositResponse;
    /**
     * Create a frozen instance of {@link ClaimDepositResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ClaimDepositResponse> & Required<Omit<ClaimDepositResponse, never>>) => ClaimDepositResponse;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ClaimDepositResponse>;
}>;
export type ClaimHtlcPaymentRequest = {
    preimage: string;
};
/**
 * Generated factory for {@link ClaimHtlcPaymentRequest} record objects.
 */
export declare const ClaimHtlcPaymentRequest: Readonly<{
    /**
     * Create a frozen instance of {@link ClaimHtlcPaymentRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ClaimHtlcPaymentRequest> & Required<Omit<ClaimHtlcPaymentRequest, never>>) => ClaimHtlcPaymentRequest;
    /**
     * Create a frozen instance of {@link ClaimHtlcPaymentRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ClaimHtlcPaymentRequest> & Required<Omit<ClaimHtlcPaymentRequest, never>>) => ClaimHtlcPaymentRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ClaimHtlcPaymentRequest>;
}>;
export type ClaimHtlcPaymentResponse = {
    payment: Payment;
};
/**
 * Generated factory for {@link ClaimHtlcPaymentResponse} record objects.
 */
export declare const ClaimHtlcPaymentResponse: Readonly<{
    /**
     * Create a frozen instance of {@link ClaimHtlcPaymentResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ClaimHtlcPaymentResponse> & Required<Omit<ClaimHtlcPaymentResponse, never>>) => ClaimHtlcPaymentResponse;
    /**
     * Create a frozen instance of {@link ClaimHtlcPaymentResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ClaimHtlcPaymentResponse> & Required<Omit<ClaimHtlcPaymentResponse, never>>) => ClaimHtlcPaymentResponse;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ClaimHtlcPaymentResponse>;
}>;
/**
 * Request for [`BreezSdk::claim_lightning_address_transfer`]. Called by the
 * *new owner* to complete the takeover using the authorization produced by
 * the current owner.
 */
export type ClaimTransferRequest = {
    /**
     * Authorization produced by the current owner via
     * [`BreezSdk::authorize_lightning_address_transfer`].
     */
    authorization: TransferAuthorization;
    /**
     * Description for the address. Defaults to `"Pay to {username}@{domain}"`.
     */
    description: string | undefined;
};
/**
 * Generated factory for {@link ClaimTransferRequest} record objects.
 */
export declare const ClaimTransferRequest: Readonly<{
    /**
     * Create a frozen instance of {@link ClaimTransferRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ClaimTransferRequest> & Required<Omit<ClaimTransferRequest, "description">>) => ClaimTransferRequest;
    /**
     * Create a frozen instance of {@link ClaimTransferRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ClaimTransferRequest> & Required<Omit<ClaimTransferRequest, "description">>) => ClaimTransferRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ClaimTransferRequest>;
}>;
export type Config = {
    apiKey: string | undefined;
    network: Network;
    syncIntervalSecs: number;
    maxDepositClaimFee: MaxFee | undefined;
    /**
     * The domain used for receiving through lnurl-pay and lightning address.
     */
    lnurlDomain: string | undefined;
    /**
     * When this is set to `true` we will prefer to use spark payments over
     * lightning when sending and receiving. This has the benefit of lower fees
     * but is at the cost of privacy.
     */
    preferSparkOverLightning: boolean;
    /**
     * A set of external input parsers that are used by [`BreezSdk::parse`](crate::sdk::BreezSdk::parse) when the input
     * is not recognized. See [`ExternalInputParser`] for more details on how to configure
     * external parsing.
     */
    externalInputParsers: Array<ExternalInputParser> | undefined;
    /**
     * The SDK includes some default external input parsers
     * ([`DEFAULT_EXTERNAL_INPUT_PARSERS`]).
     * Set this to false in order to prevent their use.
     */
    useDefaultExternalInputParsers: boolean;
    /**
     * Url to use for the real-time sync server. Defaults to the Breez real-time sync server.
     */
    realTimeSyncServerUrl: string | undefined;
    /**
     * Whether the Spark private mode is enabled by default.
     *
     * If set to true, the Spark private mode will be enabled on the first
     * initialization of the SDK. If set to false, no changes will be made
     * to the Spark private mode.
     *
     * This default is only auto-applied when `background_tasks_enabled` is
     * `true`. When `background_tasks_enabled` is `false`, the SDK does not
     * touch the Spark private mode on startup; call `update_user_settings`
     * with `spark_private_mode_enabled` set as needed on a one-time setup
     * pass.
     */
    privateEnabledDefault: boolean;
    /**
     * Configuration for leaf optimization.
     *
     * Leaf optimization controls the denominations of leaves that are held in the wallet.
     * Fewer, bigger leaves allow for more funds to be exited unilaterally.
     * More leaves allow payments to be made without needing a swap, reducing payment latency.
     */
    leafOptimizationConfig: LeafOptimizationConfig;
    /**
     * Configuration for token-output optimization.
     *
     * Token-output optimization controls automatic consolidation of a token's
     * available outputs. Keeping the output set small reduces transaction size,
     * while keeping enough distinct outputs preserves concurrency for parallel
     * sends.
     */
    tokenOptimizationConfig: TokenOptimizationConfig;
    /**
     * Configuration for automatic conversion of Bitcoin to stable tokens.
     *
     * When set, received sats will be automatically converted to the specified token
     * once the balance exceeds the threshold.
     */
    stableBalanceConfig: StableBalanceConfig | undefined;
    /**
     * Maximum number of concurrent transfer claims.
     *
     * Default is 4. Increase for server environments with high incoming payment volume.
     */
    maxConcurrentClaims: number;
    /**
     * Optional custom Spark environment configuration.
     *
     * When set, overrides the default Spark operator pool, service provider,
     * threshold, and token settings. Use this to connect to alternative Spark
     * deployments (e.g. dev/staging environments).
     */
    sparkConfig: SparkConfig | undefined;
    /**
     * Master switch for per-instance background services.
     *
     * When `true` (default), the SDK runs its standard background work:
     * periodic sync, lightning-address recovery, private-mode initialization,
     * the leaf and token-output optimizers, the Spark server-event
     * subscription, and the real-time sync client (when
     * `real_time_sync_server_url` is set).
     *
     * When `false`, **no background service is started**, regardless of any
     * other setting on this config. This is intended for multi-tenant server
     * deployments where the host application orchestrates sync and claims
     * explicitly and receives events via webhooks. Use
     * `default_server_config` to get this preset.
     *
     * Explicit operations (`sync_wallet`, `claim_deposit`,
     * `list_unclaimed_deposits`, `refund_deposit`,
     * `refund_pending_conversions`, leaf/token optimization, etc.) work
     * regardless of this flag.
     *
     * When `false`, the SDK rejects builds where fields whose backing
     * service is gated off are still in their active shape:
     * `stable_balance_config` must be `None`, `real_time_sync_server_url`
     * must be `None`, and `optimization_config.auto_enabled` must be `false`.
     * `default_server_config` already sets these compatible values.
     */
    backgroundTasksEnabled: boolean;
    /**
     * Configuration for cross-chain sends via Orchestra and Boltz.
     *
     * `Some(_)` enables cross-chain sends (sats to USDT on external chains).
     * `None` (default) disables them entirely. Opt in by setting this to
     * [`CrossChainConfig::default`] (or a customized value): the providers
     * run background work (e.g. web sockets), so enabling is left to the
     * caller. Cross-chain sends are only supported on mainnet.
     */
    crossChainConfig: CrossChainConfig | undefined;
};
/**
 * Generated factory for {@link Config} record objects.
 */
export declare const Config: Readonly<{
    /**
     * Create a frozen instance of {@link Config}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<Config> & Required<Omit<Config, never>>) => Config;
    /**
     * Create a frozen instance of {@link Config}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<Config> & Required<Omit<Config, never>>) => Config;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<Config>;
}>;
export type ConnectRequest = {
    config: Config;
    seed: Seed;
    storageDir: string;
};
/**
 * Generated factory for {@link ConnectRequest} record objects.
 */
export declare const ConnectRequest: Readonly<{
    /**
     * Create a frozen instance of {@link ConnectRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ConnectRequest> & Required<Omit<ConnectRequest, never>>) => ConnectRequest;
    /**
     * Create a frozen instance of {@link ConnectRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ConnectRequest> & Required<Omit<ConnectRequest, never>>) => ConnectRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ConnectRequest>;
}>;
/**
 * Request shape for [`PasskeyClient::connect_with_passkey`].
 */
export type ConnectWithPasskeyRequest = {
    /**
     * Wallet label. Defaults to the configured default label when
     * `None`. Used both for the silent sign-in attempt and, if it
     * fast-fails, for the fallback registration.
     */
    label: string | undefined;
    /**
     * Optional credential IDs to restrict the silent sign-in
     * attempt to (reauthentication path). See
     * [`SignInRequest::allow_credentials`]. Ignored on the fallback
     * registration path.
     */
    allowCredentials: Array<ArrayBuffer> | undefined;
    /**
     * Optional already-registered credential IDs to surface
     * duplicates on the fallback registration path. See
     * [`RegisterRequest::exclude_credentials`]. Ignored on the
     * silent sign-in attempt.
     */
    excludeCredentials: Array<ArrayBuffer> | undefined;
};
/**
 * Generated factory for {@link ConnectWithPasskeyRequest} record objects.
 */
export declare const ConnectWithPasskeyRequest: Readonly<{
    /**
     * Create a frozen instance of {@link ConnectWithPasskeyRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ConnectWithPasskeyRequest> & Required<Omit<ConnectWithPasskeyRequest, "label" | "allowCredentials" | "excludeCredentials">>) => ConnectWithPasskeyRequest;
    /**
     * Create a frozen instance of {@link ConnectWithPasskeyRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ConnectWithPasskeyRequest> & Required<Omit<ConnectWithPasskeyRequest, "label" | "allowCredentials" | "excludeCredentials">>) => ConnectWithPasskeyRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ConnectWithPasskeyRequest>;
}>;
/**
 * Response from [`PasskeyClient::connect_with_passkey`].
 *
 * `credential` carries whichever credential signed in or was
 * registered, when the provider surfaces it. The register path also
 * populates the attestation fields (`aaguid`, `backup_eligible`); the
 * sign-in path sets only `credential_id`.
 */
export type ConnectWithPasskeyResponse = {
    wallet: Wallet;
    credential: PasskeyCredential | undefined;
};
/**
 * Generated factory for {@link ConnectWithPasskeyResponse} record objects.
 */
export declare const ConnectWithPasskeyResponse: Readonly<{
    /**
     * Create a frozen instance of {@link ConnectWithPasskeyResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ConnectWithPasskeyResponse> & Required<Omit<ConnectWithPasskeyResponse, never>>) => ConnectWithPasskeyResponse;
    /**
     * Create a frozen instance of {@link ConnectWithPasskeyResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ConnectWithPasskeyResponse> & Required<Omit<ConnectWithPasskeyResponse, never>>) => ConnectWithPasskeyResponse;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ConnectWithPasskeyResponse>;
}>;
/**
 * Request object for connecting to the Spark network using an external signer.
 *
 * This allows using a custom signer implementation instead of providing a seed directly.
 */
export type ConnectWithSignerRequest = {
    config: Config;
    /**
     * External signer for non-Spark SDK signing (LNURL-auth, sync, message
     * signing, ECIES).
     */
    breezSigner: ExternalBreezSigner;
    /**
     * External high-level Spark signer for the Spark wallet flows.
     */
    sparkSigner: ExternalSparkSigner;
    storageDir: string;
};
/**
 * Generated factory for {@link ConnectWithSignerRequest} record objects.
 */
export declare const ConnectWithSignerRequest: Readonly<{
    /**
     * Create a frozen instance of {@link ConnectWithSignerRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ConnectWithSignerRequest> & Required<Omit<ConnectWithSignerRequest, never>>) => ConnectWithSignerRequest;
    /**
     * Create a frozen instance of {@link ConnectWithSignerRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ConnectWithSignerRequest> & Required<Omit<ConnectWithSignerRequest, never>>) => ConnectWithSignerRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ConnectWithSignerRequest>;
}>;
/**
 * A contact entry containing a name and payment identifier.
 */
export type Contact = {
    id: string;
    name: string;
    /**
     * A Lightning address (user@domain).
     */
    paymentIdentifier: string;
    createdAt: bigint;
    updatedAt: bigint;
};
/**
 * Generated factory for {@link Contact} record objects.
 */
export declare const Contact: Readonly<{
    /**
     * Create a frozen instance of {@link Contact}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<Contact> & Required<Omit<Contact, never>>) => Contact;
    /**
     * Create a frozen instance of {@link Contact}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<Contact> & Required<Omit<Contact, never>>) => Contact;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<Contact>;
}>;
/**
 * A single conversion in a payment's conversion chain.
 */
export type Conversion = {
    /**
     * The provider that performed this conversion
     */
    provider: ConversionProvider;
    /**
     * Status of this specific conversion step
     */
    status: ConversionStatus;
    /**
     * Source side of the conversion
     */
    from: ConversionSide;
    /**
     * Destination side of the conversion
     */
    to: ConversionSide;
    /**
     * Reason the conversion amount was adjusted, if applicable (AMM only)
     */
    amountAdjustment: AmountAdjustmentReason | undefined;
};
/**
 * Generated factory for {@link Conversion} record objects.
 */
export declare const Conversion: Readonly<{
    /**
     * Create a frozen instance of {@link Conversion}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<Conversion> & Required<Omit<Conversion, never>>) => Conversion;
    /**
     * Create a frozen instance of {@link Conversion}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<Conversion> & Required<Omit<Conversion, never>>) => Conversion;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<Conversion>;
}>;
/**
 * The asset on a [`ConversionSide`] — groups the ticker, stable identifier,
 * and decimals that always travel together.
 */
export type ConversionAsset = {
    /**
     * Ticker (e.g. `"BTC"`, `"USDB"`, `"USDC"`, `"USDT"`). Tickers alone
     * are ambiguous across chains — pair with [`Self::identifier`] for a
     * hard match.
     */
    ticker: string;
    /**
     * Stable identifier: a Spark token identifier for Spark tokens, or a
     * contract/mint address for cross-chain assets. `None` for BTC/sats.
     */
    identifier: string | undefined;
    /**
     * Number of decimals for the asset.
     * `0` for BTC/sats sides (amount is already in the smallest unit,
     * so no scaling is needed); non-zero for token assets (e.g. `6` for
     * USDC/USDT/USDB).
     */
    decimals: number;
};
/**
 * Generated factory for {@link ConversionAsset} record objects.
 */
export declare const ConversionAsset: Readonly<{
    /**
     * Create a frozen instance of {@link ConversionAsset}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ConversionAsset> & Required<Omit<ConversionAsset, never>>) => ConversionAsset;
    /**
     * Create a frozen instance of {@link ConversionAsset}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ConversionAsset> & Required<Omit<ConversionAsset, never>>) => ConversionAsset;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ConversionAsset>;
}>;
/**
 * Outlines the steps involved in one or more conversions on a payment.
 *
 * Built progressively: `status` is available immediately from payment metadata,
 * while `conversions` are enriched later from child payments and conversion info.
 */
export type ConversionDetails = {
    /**
     * Overall status of the conversion (persisted in storage)
     */
    status: ConversionStatus;
    /**
     * Ordered list of conversion steps. For sends: [AMM, cross-chain].
     * For receives: [cross-chain, AMM]. Rebuilt on retrieval, not persisted.
     */
    conversions: Array<Conversion>;
};
/**
 * Generated factory for {@link ConversionDetails} record objects.
 */
export declare const ConversionDetails: Readonly<{
    /**
     * Create a frozen instance of {@link ConversionDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ConversionDetails> & Required<Omit<ConversionDetails, never>>) => ConversionDetails;
    /**
     * Create a frozen instance of {@link ConversionDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ConversionDetails> & Required<Omit<ConversionDetails, never>>) => ConversionDetails;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ConversionDetails>;
}>;
/**
 * Response from estimating a conversion, used when preparing a payment that requires conversion
 */
export type ConversionEstimate = {
    /**
     * The conversion options used for the estimate
     */
    options: ConversionOptions;
    /**
     * The input amount for the conversion.
     * For `FromBitcoin`: the satoshis required to produce the desired token output.
     * For `ToBitcoin`: the token amount being converted.
     */
    amountIn: U128;
    /**
     * The estimated output amount from the conversion.
     * For `FromBitcoin`: the estimated token amount received.
     * For `ToBitcoin`: the estimated satoshis received.
     */
    amountOut: U128;
    /**
     * The fee estimated for the conversion.
     * Denominated in satoshis if converting from Bitcoin, otherwise in the token base units.
     */
    fee: U128;
    /**
     * The reason the conversion amount was adjusted, if applicable.
     */
    amountAdjustment: AmountAdjustmentReason | undefined;
};
/**
 * Generated factory for {@link ConversionEstimate} record objects.
 */
export declare const ConversionEstimate: Readonly<{
    /**
     * Create a frozen instance of {@link ConversionEstimate}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ConversionEstimate> & Required<Omit<ConversionEstimate, never>>) => ConversionEstimate;
    /**
     * Create a frozen instance of {@link ConversionEstimate}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ConversionEstimate> & Required<Omit<ConversionEstimate, never>>) => ConversionEstimate;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ConversionEstimate>;
}>;
/**
 * Options for conversion when fulfilling a payment. When set, the SDK will
 * perform a conversion before fulfilling the payment. If not set, the payment
 * will only be fulfilled if the wallet has sufficient balance of the required asset.
 */
export type ConversionOptions = {
    /**
     * The type of conversion to perform when fulfilling the payment
     */
    conversionType: ConversionType;
    /**
     * The optional maximum slippage in basis points (1/100 of a percent) allowed when
     * a conversion is needed to fulfill the payment. Defaults to 10 bps (0.1%) if not set.
     * The conversion will fail if the actual amount received is less than
     * `estimated_amount * (1 - max_slippage_bps / 10_000)`.
     */
    maxSlippageBps: /*u32*/ number | undefined;
    /**
     * The optional timeout in seconds to wait for the conversion to complete
     * when fulfilling the payment. This timeout only concerns waiting for the received
     * payment of the conversion. If the timeout is reached before the conversion
     * is complete, the payment will fail. Defaults to 30 seconds if not set.
     */
    completionTimeoutSecs: /*u32*/ number | undefined;
};
/**
 * Generated factory for {@link ConversionOptions} record objects.
 */
export declare const ConversionOptions: Readonly<{
    /**
     * Create a frozen instance of {@link ConversionOptions}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ConversionOptions> & Required<Omit<ConversionOptions, "maxSlippageBps" | "completionTimeoutSecs">>) => ConversionOptions;
    /**
     * Create a frozen instance of {@link ConversionOptions}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ConversionOptions> & Required<Omit<ConversionOptions, "maxSlippageBps" | "completionTimeoutSecs">>) => ConversionOptions;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ConversionOptions>;
}>;
/**
 * One side (source or destination) of a conversion.
 */
export type ConversionSide = {
    /**
     * The chain or network for this side.
     */
    chain: ConversionChain;
    /**
     * The asset being converted on this side.
     */
    asset: ConversionAsset;
    /**
     * Amount in base units (satoshis or token base units)
     */
    amount: U128;
    /**
     * Fee in the same base units
     */
    fee: U128;
};
/**
 * Generated factory for {@link ConversionSide} record objects.
 */
export declare const ConversionSide: Readonly<{
    /**
     * Create a frozen instance of {@link ConversionSide}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ConversionSide> & Required<Omit<ConversionSide, never>>) => ConversionSide;
    /**
     * Create a frozen instance of {@link ConversionSide}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ConversionSide> & Required<Omit<ConversionSide, never>>) => ConversionSide;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ConversionSide>;
}>;
export type CreateIssuerTokenRequest = {
    name: string;
    ticker: string;
    decimals: number;
    isFreezable: boolean;
    maxSupply: U128;
};
/**
 * Generated factory for {@link CreateIssuerTokenRequest} record objects.
 */
export declare const CreateIssuerTokenRequest: Readonly<{
    /**
     * Create a frozen instance of {@link CreateIssuerTokenRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<CreateIssuerTokenRequest> & Required<Omit<CreateIssuerTokenRequest, never>>) => CreateIssuerTokenRequest;
    /**
     * Create a frozen instance of {@link CreateIssuerTokenRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<CreateIssuerTokenRequest> & Required<Omit<CreateIssuerTokenRequest, never>>) => CreateIssuerTokenRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<CreateIssuerTokenRequest>;
}>;
export type Credentials = {
    username: string;
    password: string;
};
/**
 * Generated factory for {@link Credentials} record objects.
 */
export declare const Credentials: Readonly<{
    /**
     * Create a frozen instance of {@link Credentials}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<Credentials> & Required<Omit<Credentials, never>>) => Credentials;
    /**
     * Create a frozen instance of {@link Credentials}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<Credentials> & Required<Omit<Credentials, never>>) => Credentials;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<Credentials>;
}>;
export type CrossChainAddressDetails = {
    address: string;
    addressFamily: CrossChainAddressFamily;
    contractAddress: string | undefined;
    chainId: /*u64*/ bigint | undefined;
    amount: U128 | undefined;
};
/**
 * Generated factory for {@link CrossChainAddressDetails} record objects.
 */
export declare const CrossChainAddressDetails: Readonly<{
    /**
     * Create a frozen instance of {@link CrossChainAddressDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<CrossChainAddressDetails> & Required<Omit<CrossChainAddressDetails, never>>) => CrossChainAddressDetails;
    /**
     * Create a frozen instance of {@link CrossChainAddressDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<CrossChainAddressDetails> & Required<Omit<CrossChainAddressDetails, never>>) => CrossChainAddressDetails;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<CrossChainAddressDetails>;
}>;
/**
 * Configuration for cross-chain sends.
 *
 * The presence of this struct on [`Config::cross_chain_config`] enables
 * cross-chain providers; `None` disables them.
 */
export type CrossChainConfig = {
    /**
     * Default maximum slippage in basis points used when
     * [`PaymentRequest::CrossChain::max_slippage_bps`] is not set on the
     * prepare request. Must be in `10..=500`. Falls back to 100 bps (1%)
     * when this field is `None`.
     */
    defaultSlippageBps: /*u32*/ number | undefined;
    /**
     * Default target-overpay pad in basis points applied to the user's
     * destination amount on `FeesExcluded` conversion sends. Bumps the
     * target upward before quoting so the recipient lands at or above the
     * requested amount despite provider slippage. Must be in `0..=500`.
     * Falls back to 15 bps when `None`.
     */
    defaultTargetOverpayBps: /*u32*/ number | undefined;
};
/**
 * Generated factory for {@link CrossChainConfig} record objects.
 */
export declare const CrossChainConfig: Readonly<{
    /**
     * Create a frozen instance of {@link CrossChainConfig}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<CrossChainConfig> & Required<Omit<CrossChainConfig, "defaultSlippageBps" | "defaultTargetOverpayBps">>) => CrossChainConfig;
    /**
     * Create a frozen instance of {@link CrossChainConfig}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<CrossChainConfig> & Required<Omit<CrossChainConfig, "defaultSlippageBps" | "defaultTargetOverpayBps">>) => CrossChainConfig;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<CrossChainConfig>;
}>;
/**
 * A single route available for cross-chain transfers, tagged with the provider
 * that offers it. Returned by `get_cross_chain_routes()`.
 */
export type CrossChainRoutePair = {
    /**
     * Which provider offers this route.
     */
    provider: CrossChainProvider;
    /**
     * Destination blockchain (e.g. `"base"`, `"solana"`, `"tron"`).
     */
    chain: string;
    /**
     * Stable chain identifier (e.g. EVM `chainId` as a decimal string).
     * `None` for non-EVM chains that don't expose one, or when the
     * provider doesn't surface it.
     */
    chainId: string | undefined;
    /**
     * Destination asset symbol (e.g. `"USDC"`, `"USDT"`).
     */
    asset: string;
    /**
     * Token contract / mint address on the destination chain.
     */
    contractAddress: string | undefined;
    /**
     * Decimal places for the destination asset.
     */
    decimals: number;
    /**
     * Whether the route supports exact-out mode.
     */
    exactOutEligible: boolean;
    /**
     * The source assets this route accepts on the Spark side.
     *
     * Boltz routes accept `[SourceAsset::Bitcoin]`. Orchestra routes accept
     * one or more of `Bitcoin` / `Token(...)` (a given destination endpoint
     * may be fronted by multiple source variants on Orchestra).
     */
    supportedSources: Array<SourceAsset>;
};
/**
 * Generated factory for {@link CrossChainRoutePair} record objects.
 */
export declare const CrossChainRoutePair: Readonly<{
    /**
     * Create a frozen instance of {@link CrossChainRoutePair}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<CrossChainRoutePair> & Required<Omit<CrossChainRoutePair, never>>) => CrossChainRoutePair;
    /**
     * Create a frozen instance of {@link CrossChainRoutePair}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<CrossChainRoutePair> & Required<Omit<CrossChainRoutePair, never>>) => CrossChainRoutePair;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<CrossChainRoutePair>;
}>;
/**
 * Details about a supported currency in the fiat rate feed
 */
export type CurrencyInfo = {
    name: string;
    fractionSize: number;
    spacing: /*u32*/ number | undefined;
    symbol: Symbol | undefined;
    uniqSymbol: Symbol | undefined;
    localizedName: Array<LocalizedName>;
    localeOverrides: Array<LocaleOverrides>;
};
/**
 * Generated factory for {@link CurrencyInfo} record objects.
 */
export declare const CurrencyInfo: Readonly<{
    /**
     * Create a frozen instance of {@link CurrencyInfo}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<CurrencyInfo> & Required<Omit<CurrencyInfo, never>>) => CurrencyInfo;
    /**
     * Create a frozen instance of {@link CurrencyInfo}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<CurrencyInfo> & Required<Omit<CurrencyInfo, never>>) => CurrencyInfo;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<CurrencyInfo>;
}>;
export type DepositInfo = {
    txid: string;
    vout: number;
    amountSats: bigint;
    isMature: boolean;
    refundTx: string | undefined;
    refundTxId: string | undefined;
    claimError: DepositClaimError | undefined;
};
/**
 * Generated factory for {@link DepositInfo} record objects.
 */
export declare const DepositInfo: Readonly<{
    /**
     * Create a frozen instance of {@link DepositInfo}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<DepositInfo> & Required<Omit<DepositInfo, never>>) => DepositInfo;
    /**
     * Create a frozen instance of {@link DepositInfo}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<DepositInfo> & Required<Omit<DepositInfo, never>>) => DepositInfo;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<DepositInfo>;
}>;
/**
 * Derived seeds plus the credential observed in the same assertion.
 */
export type DeriveSeedsOutput = {
    seeds: Array<ArrayBuffer>;
    /**
     * Absent when the provider does not surface it.
     */
    credentialId: ArrayBuffer | undefined;
};
/**
 * Generated factory for {@link DeriveSeedsOutput} record objects.
 */
export declare const DeriveSeedsOutput: Readonly<{
    /**
     * Create a frozen instance of {@link DeriveSeedsOutput}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<DeriveSeedsOutput> & Required<Omit<DeriveSeedsOutput, never>>) => DeriveSeedsOutput;
    /**
     * Create a frozen instance of {@link DeriveSeedsOutput}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<DeriveSeedsOutput> & Required<Omit<DeriveSeedsOutput, never>>) => DeriveSeedsOutput;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<DeriveSeedsOutput>;
}>;
/**
 * Per-call inputs for [`PrfProvider::derive_seeds`]. Hosts that
 * don't need per-ceremony overrides fall back to [`Default`]
 * (`salts` only, all overrides empty / `None`).
 */
export type DeriveSeedsRequest = {
    /**
     * Salt strings in caller order. One 32-byte PRF output is
     * returned per salt, in the same order.
     */
    salts: Array<string>;
    /**
     * Credential IDs the assertion is restricted to. The main use is
     * reauthenticating a known user: if a listed credential is on the
     * device the OS unlocks straight away (no account picker); otherwise
     * it asks for another device (paired phone, security key) holding one.
     * Empty falls through to the provider's configured default.
     */
    allowCredentials: Array<ArrayBuffer>;
    /**
     * Restrict the assertion to credentials already present on this
     * device. When `true`, the OS skips the cross-device picker (iOS
     * QR, Android hybrid, web `mediation: undefined`) and surfaces a
     * missing local credential as `CredentialNotFound` immediately.
     * When `false`, the OS picker is shown as usual. Unset uses the
     * provider's default (`true` for built-in providers).
     */
    preferImmediatelyAvailableCredentials: boolean | undefined;
};
/**
 * Generated factory for {@link DeriveSeedsRequest} record objects.
 */
export declare const DeriveSeedsRequest: Readonly<{
    /**
     * Create a frozen instance of {@link DeriveSeedsRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<DeriveSeedsRequest> & Required<Omit<DeriveSeedsRequest, "allowCredentials" | "preferImmediatelyAvailableCredentials">>) => DeriveSeedsRequest;
    /**
     * Create a frozen instance of {@link DeriveSeedsRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<DeriveSeedsRequest> & Required<Omit<DeriveSeedsRequest, "allowCredentials" | "preferImmediatelyAvailableCredentials">>) => DeriveSeedsRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<DeriveSeedsRequest>;
}>;
/**
 * FFI-safe representation of an ECDSA signature (64 bytes)
 */
export type EcdsaSignatureBytes = {
    bytes: ArrayBuffer;
};
/**
 * Generated factory for {@link EcdsaSignatureBytes} record objects.
 */
export declare const EcdsaSignatureBytes: Readonly<{
    /**
     * Create a frozen instance of {@link EcdsaSignatureBytes}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<EcdsaSignatureBytes> & Required<Omit<EcdsaSignatureBytes, never>>) => EcdsaSignatureBytes;
    /**
     * Create a frozen instance of {@link EcdsaSignatureBytes}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<EcdsaSignatureBytes> & Required<Omit<EcdsaSignatureBytes, never>>) => EcdsaSignatureBytes;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<EcdsaSignatureBytes>;
}>;
/**
 * FFI-safe representation of `spark_wallet::ClaimLeafInput`.
 */
export type ExternalClaimLeafInput = {
    nodeId: ExternalTreeNodeId;
    senderSignature: ArrayBuffer;
    leafKeyCiphertext: ArrayBuffer;
};
/**
 * Generated factory for {@link ExternalClaimLeafInput} record objects.
 */
export declare const ExternalClaimLeafInput: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalClaimLeafInput}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalClaimLeafInput> & Required<Omit<ExternalClaimLeafInput, never>>) => ExternalClaimLeafInput;
    /**
     * Create a frozen instance of {@link ExternalClaimLeafInput}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalClaimLeafInput> & Required<Omit<ExternalClaimLeafInput, never>>) => ExternalClaimLeafInput;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalClaimLeafInput>;
}>;
/**
 * FFI-safe representation of `spark_wallet::FrostSigningCommitmentsWithNonces`
 */
export type ExternalFrostCommitments = {
    /**
     * Serialized hiding nonce commitment (variable length, typically 33 bytes compressed point)
     */
    hidingCommitment: ArrayBuffer;
    /**
     * Serialized binding nonce commitment (variable length, typically 33 bytes compressed point)
     */
    bindingCommitment: ArrayBuffer;
    /**
     * Encrypted nonces ciphertext
     */
    noncesCiphertext: ArrayBuffer;
};
/**
 * Generated factory for {@link ExternalFrostCommitments} record objects.
 */
export declare const ExternalFrostCommitments: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalFrostCommitments}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalFrostCommitments> & Required<Omit<ExternalFrostCommitments, never>>) => ExternalFrostCommitments;
    /**
     * Create a frozen instance of {@link ExternalFrostCommitments}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalFrostCommitments> & Required<Omit<ExternalFrostCommitments, never>>) => ExternalFrostCommitments;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalFrostCommitments>;
}>;
/**
 * FFI-safe representation of `spark_wallet::FrostJob`.
 */
export type ExternalFrostJob = {
    /**
     * Which key to sign with.
     */
    derivation: ExternalFrostDerivation;
    /**
     * 32-byte BIP-341 sighash to sign.
     */
    sighash: ArrayBuffer;
    /**
     * FROST group verifying key (33 bytes compressed).
     */
    verifyingKey: ArrayBuffer;
    /**
     * Per-operator round-1 commitments.
     */
    operatorCommitments: Array<IdentifierCommitmentPair>;
    /**
     * Optional adaptor public key (33 bytes compressed).
     */
    adaptorPublicKey: ArrayBuffer | undefined;
};
/**
 * Generated factory for {@link ExternalFrostJob} record objects.
 */
export declare const ExternalFrostJob: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalFrostJob}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalFrostJob> & Required<Omit<ExternalFrostJob, never>>) => ExternalFrostJob;
    /**
     * Create a frozen instance of {@link ExternalFrostJob}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalFrostJob> & Required<Omit<ExternalFrostJob, never>>) => ExternalFrostJob;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalFrostJob>;
}>;
/**
 * FFI-safe representation of `spark_wallet::FrostShareResult`.
 */
export type ExternalFrostShareResult = {
    /**
     * The user's nonce commitment (round-1 output).
     */
    commitment: ExternalFrostCommitments;
    /**
     * The user's signature share (round-2 output).
     */
    signatureShare: ExternalFrostSignatureShare;
};
/**
 * Generated factory for {@link ExternalFrostShareResult} record objects.
 */
export declare const ExternalFrostShareResult: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalFrostShareResult}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalFrostShareResult> & Required<Omit<ExternalFrostShareResult, never>>) => ExternalFrostShareResult;
    /**
     * Create a frozen instance of {@link ExternalFrostShareResult}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalFrostShareResult> & Required<Omit<ExternalFrostShareResult, never>>) => ExternalFrostShareResult;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalFrostShareResult>;
}>;
/**
 * FFI-safe representation of `frost_secp256k1_tr::Signature`
 */
export type ExternalFrostSignature = {
    /**
     * Serialized Frost signature bytes (64 bytes)
     */
    bytes: ArrayBuffer;
};
/**
 * Generated factory for {@link ExternalFrostSignature} record objects.
 */
export declare const ExternalFrostSignature: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalFrostSignature}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalFrostSignature> & Required<Omit<ExternalFrostSignature, never>>) => ExternalFrostSignature;
    /**
     * Create a frozen instance of {@link ExternalFrostSignature}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalFrostSignature> & Required<Omit<ExternalFrostSignature, never>>) => ExternalFrostSignature;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalFrostSignature>;
}>;
/**
 * FFI-safe representation of `frost_secp256k1_tr::round2::SignatureShare`
 */
export type ExternalFrostSignatureShare = {
    /**
     * Serialized signature share bytes (variable length, typically 32 bytes)
     */
    bytes: ArrayBuffer;
};
/**
 * Generated factory for {@link ExternalFrostSignatureShare} record objects.
 */
export declare const ExternalFrostSignatureShare: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalFrostSignatureShare}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalFrostSignatureShare> & Required<Omit<ExternalFrostSignatureShare, never>>) => ExternalFrostSignatureShare;
    /**
     * Create a frozen instance of {@link ExternalFrostSignatureShare}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalFrostSignatureShare> & Required<Omit<ExternalFrostSignatureShare, never>>) => ExternalFrostSignatureShare;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalFrostSignatureShare>;
}>;
/**
 * FFI-safe representation of `frost_secp256k1_tr::Identifier`
 */
export type ExternalIdentifier = {
    /**
     * Serialized identifier bytes
     */
    bytes: ArrayBuffer;
};
/**
 * Generated factory for {@link ExternalIdentifier} record objects.
 */
export declare const ExternalIdentifier: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalIdentifier}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalIdentifier> & Required<Omit<ExternalIdentifier, never>>) => ExternalIdentifier;
    /**
     * Create a frozen instance of {@link ExternalIdentifier}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalIdentifier> & Required<Omit<ExternalIdentifier, never>>) => ExternalIdentifier;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalIdentifier>;
}>;
/**
 * Configuration for an external input parser
 */
export type ExternalInputParser = {
    /**
     * An arbitrary parser provider id
     */
    providerId: string;
    /**
     * The external parser will be used when an input conforms to this regex
     */
    inputRegex: string;
    /**
     * The URL of the parser containing a placeholder `<input>` that will be replaced with the
     * input to be parsed. The input is sanitized using percent encoding.
     */
    parserUrl: string;
};
/**
 * Generated factory for {@link ExternalInputParser} record objects.
 */
export declare const ExternalInputParser: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalInputParser}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalInputParser> & Required<Omit<ExternalInputParser, never>>) => ExternalInputParser;
    /**
     * Create a frozen instance of {@link ExternalInputParser}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalInputParser> & Required<Omit<ExternalInputParser, never>>) => ExternalInputParser;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalInputParser>;
}>;
/**
 * FFI-safe representation of `spark_wallet::NewLeafKey`.
 */
export type ExternalNewLeafKey = {
    nodeId: ExternalTreeNodeId;
    /**
     * New signing public key (33 bytes compressed).
     */
    newSigningPublicKey: ArrayBuffer;
};
/**
 * Generated factory for {@link ExternalNewLeafKey} record objects.
 */
export declare const ExternalNewLeafKey: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalNewLeafKey}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalNewLeafKey> & Required<Omit<ExternalNewLeafKey, never>>) => ExternalNewLeafKey;
    /**
     * Create a frozen instance of {@link ExternalNewLeafKey}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalNewLeafKey> & Required<Omit<ExternalNewLeafKey, never>>) => ExternalNewLeafKey;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalNewLeafKey>;
}>;
/**
 * FFI-safe representation of `spark_wallet::OperatorPackage`.
 */
export type ExternalOperatorPackage = {
    /**
     * The operator this package is encrypted for.
     */
    operatorIdentifier: ExternalIdentifier;
    /**
     * The ECIES-encrypted package bytes.
     */
    encryptedPackage: ArrayBuffer;
};
/**
 * Generated factory for {@link ExternalOperatorPackage} record objects.
 */
export declare const ExternalOperatorPackage: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalOperatorPackage}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalOperatorPackage> & Required<Omit<ExternalOperatorPackage, never>>) => ExternalOperatorPackage;
    /**
     * Create a frozen instance of {@link ExternalOperatorPackage}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalOperatorPackage> & Required<Omit<ExternalOperatorPackage, never>>) => ExternalOperatorPackage;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalOperatorPackage>;
}>;
/**
 * FFI-safe representation of `spark_wallet::OperatorRecipient`.
 */
export type ExternalOperatorRecipient = {
    /**
     * Numeric operator id (determines the Feldman share index).
     */
    id: bigint;
    /**
     * FROST identifier.
     */
    identifier: ExternalIdentifier;
    /**
     * The operator's ECIES / identity public key (33 bytes compressed).
     */
    publicKey: ArrayBuffer;
};
/**
 * Generated factory for {@link ExternalOperatorRecipient} record objects.
 */
export declare const ExternalOperatorRecipient: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalOperatorRecipient}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalOperatorRecipient> & Required<Omit<ExternalOperatorRecipient, never>>) => ExternalOperatorRecipient;
    /**
     * Create a frozen instance of {@link ExternalOperatorRecipient}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalOperatorRecipient> & Required<Omit<ExternalOperatorRecipient, never>>) => ExternalOperatorRecipient;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalOperatorRecipient>;
}>;
/**
 * FFI-safe representation of `spark_wallet::PrepareClaimRequest`.
 */
export type ExternalPrepareClaimRequest = {
    transferId: string;
    /**
     * Sender identity public key (33 bytes compressed).
     */
    senderIdentityPublicKey: ArrayBuffer;
    leaves: Array<ExternalClaimLeafInput>;
    operatorRecipients: Array<ExternalOperatorRecipient>;
    threshold: number;
};
/**
 * Generated factory for {@link ExternalPrepareClaimRequest} record objects.
 */
export declare const ExternalPrepareClaimRequest: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalPrepareClaimRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalPrepareClaimRequest> & Required<Omit<ExternalPrepareClaimRequest, never>>) => ExternalPrepareClaimRequest;
    /**
     * Create a frozen instance of {@link ExternalPrepareClaimRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalPrepareClaimRequest> & Required<Omit<ExternalPrepareClaimRequest, never>>) => ExternalPrepareClaimRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalPrepareClaimRequest>;
}>;
/**
 * FFI-safe representation of `spark_wallet::PrepareLightningReceiveRequest`.
 */
export type ExternalPrepareLightningReceiveRequest = {
    operatorRecipients: Array<ExternalOperatorRecipient>;
    threshold: number;
};
/**
 * Generated factory for {@link ExternalPrepareLightningReceiveRequest} record objects.
 */
export declare const ExternalPrepareLightningReceiveRequest: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalPrepareLightningReceiveRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalPrepareLightningReceiveRequest> & Required<Omit<ExternalPrepareLightningReceiveRequest, never>>) => ExternalPrepareLightningReceiveRequest;
    /**
     * Create a frozen instance of {@link ExternalPrepareLightningReceiveRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalPrepareLightningReceiveRequest> & Required<Omit<ExternalPrepareLightningReceiveRequest, never>>) => ExternalPrepareLightningReceiveRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalPrepareLightningReceiveRequest>;
}>;
/**
 * FFI-safe representation of `spark_wallet::PrepareStaticDepositClaimRequest`.
 */
export type ExternalPrepareStaticDepositClaimRequest = {
    index: number;
    userStatement: ArrayBuffer;
};
/**
 * Generated factory for {@link ExternalPrepareStaticDepositClaimRequest} record objects.
 */
export declare const ExternalPrepareStaticDepositClaimRequest: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalPrepareStaticDepositClaimRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalPrepareStaticDepositClaimRequest> & Required<Omit<ExternalPrepareStaticDepositClaimRequest, never>>) => ExternalPrepareStaticDepositClaimRequest;
    /**
     * Create a frozen instance of {@link ExternalPrepareStaticDepositClaimRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalPrepareStaticDepositClaimRequest> & Required<Omit<ExternalPrepareStaticDepositClaimRequest, never>>) => ExternalPrepareStaticDepositClaimRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalPrepareStaticDepositClaimRequest>;
}>;
/**
 * FFI-safe representation of `spark_wallet::PrepareStaticDepositRequest`.
 */
export type ExternalPrepareStaticDepositRequest = {
    index: number;
    /**
     * SSP public key (33 bytes compressed).
     */
    sspPublicKey: ArrayBuffer;
    frostJobs: Array<ExternalFrostJob>;
};
/**
 * Generated factory for {@link ExternalPrepareStaticDepositRequest} record objects.
 */
export declare const ExternalPrepareStaticDepositRequest: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalPrepareStaticDepositRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalPrepareStaticDepositRequest> & Required<Omit<ExternalPrepareStaticDepositRequest, never>>) => ExternalPrepareStaticDepositRequest;
    /**
     * Create a frozen instance of {@link ExternalPrepareStaticDepositRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalPrepareStaticDepositRequest> & Required<Omit<ExternalPrepareStaticDepositRequest, never>>) => ExternalPrepareStaticDepositRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalPrepareStaticDepositRequest>;
}>;
/**
 * FFI-safe representation of `spark_wallet::PrepareTokenTransactionRequest`.
 */
export type ExternalPrepareTokenTransactionRequest = {
    kind: ExternalTokenTransactionKind;
    digest: ArrayBuffer;
};
/**
 * Generated factory for {@link ExternalPrepareTokenTransactionRequest} record objects.
 */
export declare const ExternalPrepareTokenTransactionRequest: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalPrepareTokenTransactionRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalPrepareTokenTransactionRequest> & Required<Omit<ExternalPrepareTokenTransactionRequest, never>>) => ExternalPrepareTokenTransactionRequest;
    /**
     * Create a frozen instance of {@link ExternalPrepareTokenTransactionRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalPrepareTokenTransactionRequest> & Required<Omit<ExternalPrepareTokenTransactionRequest, never>>) => ExternalPrepareTokenTransactionRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalPrepareTokenTransactionRequest>;
}>;
/**
 * FFI-safe representation of `spark_wallet::PrepareTransferRequest`.
 */
export type ExternalPrepareTransferRequest = {
    transferId: string;
    /**
     * Receiver public key (33 bytes compressed).
     */
    receiverPublicKey: ArrayBuffer;
    leaves: Array<ExternalTransferLeafInput>;
    operatorRecipients: Array<ExternalOperatorRecipient>;
    threshold: number;
};
/**
 * Generated factory for {@link ExternalPrepareTransferRequest} record objects.
 */
export declare const ExternalPrepareTransferRequest: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalPrepareTransferRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalPrepareTransferRequest> & Required<Omit<ExternalPrepareTransferRequest, never>>) => ExternalPrepareTransferRequest;
    /**
     * Create a frozen instance of {@link ExternalPrepareTransferRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalPrepareTransferRequest> & Required<Omit<ExternalPrepareTransferRequest, never>>) => ExternalPrepareTransferRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalPrepareTransferRequest>;
}>;
/**
 * FFI-safe representation of `spark_wallet::PreparedClaim`.
 */
export type ExternalPreparedClaim = {
    operatorPackages: Array<ExternalOperatorPackage>;
};
/**
 * Generated factory for {@link ExternalPreparedClaim} record objects.
 */
export declare const ExternalPreparedClaim: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalPreparedClaim}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalPreparedClaim> & Required<Omit<ExternalPreparedClaim, never>>) => ExternalPreparedClaim;
    /**
     * Create a frozen instance of {@link ExternalPreparedClaim}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalPreparedClaim> & Required<Omit<ExternalPreparedClaim, never>>) => ExternalPreparedClaim;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalPreparedClaim>;
}>;
/**
 * FFI-safe representation of `spark_wallet::PreparedLightningReceive`.
 */
export type ExternalPreparedLightningReceive = {
    /**
     * SHA256 of the in-enclave preimage (32 bytes).
     */
    paymentHash: ArrayBuffer;
    operatorPreimagePackages: Array<ExternalOperatorPackage>;
};
/**
 * Generated factory for {@link ExternalPreparedLightningReceive} record objects.
 */
export declare const ExternalPreparedLightningReceive: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalPreparedLightningReceive}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalPreparedLightningReceive> & Required<Omit<ExternalPreparedLightningReceive, never>>) => ExternalPreparedLightningReceive;
    /**
     * Create a frozen instance of {@link ExternalPreparedLightningReceive}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalPreparedLightningReceive> & Required<Omit<ExternalPreparedLightningReceive, never>>) => ExternalPreparedLightningReceive;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalPreparedLightningReceive>;
}>;
/**
 * FFI-safe representation of `spark_wallet::PreparedStaticDeposit`.
 */
export type ExternalPreparedStaticDeposit = {
    exportedSecret: ArrayBuffer;
    frostShares: Array<ExternalFrostShareResult>;
};
/**
 * Generated factory for {@link ExternalPreparedStaticDeposit} record objects.
 */
export declare const ExternalPreparedStaticDeposit: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalPreparedStaticDeposit}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalPreparedStaticDeposit> & Required<Omit<ExternalPreparedStaticDeposit, never>>) => ExternalPreparedStaticDeposit;
    /**
     * Create a frozen instance of {@link ExternalPreparedStaticDeposit}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalPreparedStaticDeposit> & Required<Omit<ExternalPreparedStaticDeposit, never>>) => ExternalPreparedStaticDeposit;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalPreparedStaticDeposit>;
}>;
/**
 * FFI-safe representation of `spark_wallet::PreparedStaticDepositClaim`.
 */
export type ExternalPreparedStaticDepositClaim = {
    /**
     * The static-deposit secret key, exported in the clear for the SSP.
     */
    depositSecretKey: SecretBytes;
    userSignature: EcdsaSignatureBytes;
};
/**
 * Generated factory for {@link ExternalPreparedStaticDepositClaim} record objects.
 */
export declare const ExternalPreparedStaticDepositClaim: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalPreparedStaticDepositClaim}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalPreparedStaticDepositClaim> & Required<Omit<ExternalPreparedStaticDepositClaim, never>>) => ExternalPreparedStaticDepositClaim;
    /**
     * Create a frozen instance of {@link ExternalPreparedStaticDepositClaim}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalPreparedStaticDepositClaim> & Required<Omit<ExternalPreparedStaticDepositClaim, never>>) => ExternalPreparedStaticDepositClaim;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalPreparedStaticDepositClaim>;
}>;
/**
 * FFI-safe representation of `spark_wallet::PreparedTokenTransaction`.
 */
export type ExternalPreparedTokenTransaction = {
    signature: SchnorrSignatureBytes;
};
/**
 * Generated factory for {@link ExternalPreparedTokenTransaction} record objects.
 */
export declare const ExternalPreparedTokenTransaction: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalPreparedTokenTransaction}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalPreparedTokenTransaction> & Required<Omit<ExternalPreparedTokenTransaction, never>>) => ExternalPreparedTokenTransaction;
    /**
     * Create a frozen instance of {@link ExternalPreparedTokenTransaction}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalPreparedTokenTransaction> & Required<Omit<ExternalPreparedTokenTransaction, never>>) => ExternalPreparedTokenTransaction;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalPreparedTokenTransaction>;
}>;
/**
 * FFI-safe representation of `spark_wallet::PreparedTransfer`.
 */
export type ExternalPreparedTransfer = {
    operatorPackages: Array<ExternalOperatorPackage>;
    newLeafKeys: Array<ExternalNewLeafKey>;
    transferUserSignature: EcdsaSignatureBytes;
};
/**
 * Generated factory for {@link ExternalPreparedTransfer} record objects.
 */
export declare const ExternalPreparedTransfer: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalPreparedTransfer}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalPreparedTransfer> & Required<Omit<ExternalPreparedTransfer, never>>) => ExternalPreparedTransfer;
    /**
     * Create a frozen instance of {@link ExternalPreparedTransfer}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalPreparedTransfer> & Required<Omit<ExternalPreparedTransfer, never>>) => ExternalPreparedTransfer;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalPreparedTransfer>;
}>;
/**
 * FFI-safe representation of `spark_wallet::SignSparkInvoiceRequest`.
 */
export type ExternalSignSparkInvoiceRequest = {
    kind: ExternalSparkInvoiceKind;
    invoiceHash: ArrayBuffer;
};
/**
 * Generated factory for {@link ExternalSignSparkInvoiceRequest} record objects.
 */
export declare const ExternalSignSparkInvoiceRequest: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalSignSparkInvoiceRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalSignSparkInvoiceRequest> & Required<Omit<ExternalSignSparkInvoiceRequest, never>>) => ExternalSignSparkInvoiceRequest;
    /**
     * Create a frozen instance of {@link ExternalSignSparkInvoiceRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalSignSparkInvoiceRequest> & Required<Omit<ExternalSignSparkInvoiceRequest, never>>) => ExternalSignSparkInvoiceRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalSignSparkInvoiceRequest>;
}>;
/**
 * FFI-safe representation of `spark_wallet::SignStaticDepositRefundRequest`.
 */
export type ExternalSignStaticDepositRefundRequest = {
    index: number;
    sighash: ArrayBuffer;
    /**
     * FROST group verifying key (33 bytes compressed).
     */
    verifyingKey: ArrayBuffer;
    nonceCommitment: ExternalFrostCommitments;
    statechainCommitments: Array<IdentifierCommitmentPair>;
    statechainSignatures: Array<IdentifierSignaturePair>;
    statechainPublicKeys: Array<IdentifierPublicKeyPair>;
};
/**
 * Generated factory for {@link ExternalSignStaticDepositRefundRequest} record objects.
 */
export declare const ExternalSignStaticDepositRefundRequest: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalSignStaticDepositRefundRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalSignStaticDepositRefundRequest> & Required<Omit<ExternalSignStaticDepositRefundRequest, never>>) => ExternalSignStaticDepositRefundRequest;
    /**
     * Create a frozen instance of {@link ExternalSignStaticDepositRefundRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalSignStaticDepositRefundRequest> & Required<Omit<ExternalSignStaticDepositRefundRequest, never>>) => ExternalSignStaticDepositRefundRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalSignStaticDepositRefundRequest>;
}>;
/**
 * FFI-safe representation of `spark_wallet::SignedSparkInvoice`.
 */
export type ExternalSignedSparkInvoice = {
    signature: SchnorrSignatureBytes;
};
/**
 * Generated factory for {@link ExternalSignedSparkInvoice} record objects.
 */
export declare const ExternalSignedSparkInvoice: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalSignedSparkInvoice}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalSignedSparkInvoice> & Required<Omit<ExternalSignedSparkInvoice, never>>) => ExternalSignedSparkInvoice;
    /**
     * Create a frozen instance of {@link ExternalSignedSparkInvoice}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalSignedSparkInvoice> & Required<Omit<ExternalSignedSparkInvoice, never>>) => ExternalSignedSparkInvoice;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalSignedSparkInvoice>;
}>;
/**
 * The two default external signers created from one mnemonic by
 * [`default_external_signers`].
 */
export type ExternalSigners = {
    /**
     * External signer for non-Spark SDK signing (LNURL-auth, sync, message
     * signing, ECIES).
     */
    breezSigner: ExternalBreezSigner;
    /**
     * External high-level Spark signer for the Spark wallet flows.
     */
    sparkSigner: ExternalSparkSigner;
};
/**
 * Generated factory for {@link ExternalSigners} record objects.
 */
export declare const ExternalSigners: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalSigners}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalSigners> & Required<Omit<ExternalSigners, never>>) => ExternalSigners;
    /**
     * Create a frozen instance of {@link ExternalSigners}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalSigners> & Required<Omit<ExternalSigners, never>>) => ExternalSigners;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalSigners>;
}>;
/**
 * FFI-safe representation of `frost_secp256k1_tr::round1::SigningCommitments`
 */
export type ExternalSigningCommitments = {
    /**
     * Serialized hiding nonce commitment
     */
    hiding: ArrayBuffer;
    /**
     * Serialized binding nonce commitment
     */
    binding: ArrayBuffer;
};
/**
 * Generated factory for {@link ExternalSigningCommitments} record objects.
 */
export declare const ExternalSigningCommitments: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalSigningCommitments}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalSigningCommitments> & Required<Omit<ExternalSigningCommitments, never>>) => ExternalSigningCommitments;
    /**
     * Create a frozen instance of {@link ExternalSigningCommitments}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalSigningCommitments> & Required<Omit<ExternalSigningCommitments, never>>) => ExternalSigningCommitments;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalSigningCommitments>;
}>;
/**
 * FFI-safe representation of `spark_wallet::StartStaticDepositRefundRequest`.
 */
export type ExternalStartStaticDepositRefundRequest = {
    index: number;
    userStatement: ArrayBuffer;
};
/**
 * Generated factory for {@link ExternalStartStaticDepositRefundRequest} record objects.
 */
export declare const ExternalStartStaticDepositRefundRequest: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalStartStaticDepositRefundRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalStartStaticDepositRefundRequest> & Required<Omit<ExternalStartStaticDepositRefundRequest, never>>) => ExternalStartStaticDepositRefundRequest;
    /**
     * Create a frozen instance of {@link ExternalStartStaticDepositRefundRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalStartStaticDepositRefundRequest> & Required<Omit<ExternalStartStaticDepositRefundRequest, never>>) => ExternalStartStaticDepositRefundRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalStartStaticDepositRefundRequest>;
}>;
/**
 * FFI-safe representation of `spark_wallet::StartedStaticDepositRefund`.
 */
export type ExternalStartedStaticDepositRefund = {
    /**
     * Static-deposit signing public key (33 bytes compressed).
     */
    signingPublicKey: ArrayBuffer;
    nonceCommitment: ExternalFrostCommitments;
    userSignature: EcdsaSignatureBytes;
};
/**
 * Generated factory for {@link ExternalStartedStaticDepositRefund} record objects.
 */
export declare const ExternalStartedStaticDepositRefund: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalStartedStaticDepositRefund}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalStartedStaticDepositRefund> & Required<Omit<ExternalStartedStaticDepositRefund, never>>) => ExternalStartedStaticDepositRefund;
    /**
     * Create a frozen instance of {@link ExternalStartedStaticDepositRefund}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalStartedStaticDepositRefund> & Required<Omit<ExternalStartedStaticDepositRefund, never>>) => ExternalStartedStaticDepositRefund;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalStartedStaticDepositRefund>;
}>;
/**
 * FFI-safe representation of `spark_wallet::TransferLeafInput`. Conveys the old
 * leaf id and the new (post-transfer) leaf id; the signer derives keys from them.
 */
export type ExternalTransferLeafInput = {
    nodeId: ExternalTreeNodeId;
    newLeafId: ExternalTreeNodeId;
};
/**
 * Generated factory for {@link ExternalTransferLeafInput} record objects.
 */
export declare const ExternalTransferLeafInput: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalTransferLeafInput}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalTransferLeafInput> & Required<Omit<ExternalTransferLeafInput, never>>) => ExternalTransferLeafInput;
    /**
     * Create a frozen instance of {@link ExternalTransferLeafInput}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalTransferLeafInput> & Required<Omit<ExternalTransferLeafInput, never>>) => ExternalTransferLeafInput;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalTransferLeafInput>;
}>;
/**
 * FFI-safe representation of `spark_wallet::TreeNodeId`
 */
export type ExternalTreeNodeId = {
    /**
     * The tree node identifier as a string
     */
    id: string;
};
/**
 * Generated factory for {@link ExternalTreeNodeId} record objects.
 */
export declare const ExternalTreeNodeId: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalTreeNodeId}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalTreeNodeId> & Required<Omit<ExternalTreeNodeId, never>>) => ExternalTreeNodeId;
    /**
     * Create a frozen instance of {@link ExternalTreeNodeId}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalTreeNodeId> & Required<Omit<ExternalTreeNodeId, never>>) => ExternalTreeNodeId;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalTreeNodeId>;
}>;
export type FetchConversionLimitsRequest = {
    /**
     * The type of conversion, either from or to Bitcoin.
     */
    conversionType: ConversionType;
    /**
     * The token identifier when converting to a token.
     */
    tokenIdentifier: string | undefined;
};
/**
 * Generated factory for {@link FetchConversionLimitsRequest} record objects.
 */
export declare const FetchConversionLimitsRequest: Readonly<{
    /**
     * Create a frozen instance of {@link FetchConversionLimitsRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<FetchConversionLimitsRequest> & Required<Omit<FetchConversionLimitsRequest, "tokenIdentifier">>) => FetchConversionLimitsRequest;
    /**
     * Create a frozen instance of {@link FetchConversionLimitsRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<FetchConversionLimitsRequest> & Required<Omit<FetchConversionLimitsRequest, "tokenIdentifier">>) => FetchConversionLimitsRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<FetchConversionLimitsRequest>;
}>;
export type FetchConversionLimitsResponse = {
    /**
     * The minimum amount to be converted.
     * Denominated in satoshis if converting from Bitcoin, otherwise in the token base units.
     */
    minFromAmount: U128 | undefined;
    /**
     * The minimum amount to be received from the conversion.
     * Denominated in satoshis if converting to Bitcoin, otherwise in the token base units.
     */
    minToAmount: U128 | undefined;
};
/**
 * Generated factory for {@link FetchConversionLimitsResponse} record objects.
 */
export declare const FetchConversionLimitsResponse: Readonly<{
    /**
     * Create a frozen instance of {@link FetchConversionLimitsResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<FetchConversionLimitsResponse> & Required<Omit<FetchConversionLimitsResponse, never>>) => FetchConversionLimitsResponse;
    /**
     * Create a frozen instance of {@link FetchConversionLimitsResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<FetchConversionLimitsResponse> & Required<Omit<FetchConversionLimitsResponse, never>>) => FetchConversionLimitsResponse;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<FetchConversionLimitsResponse>;
}>;
/**
 * Wrapper around the [`CurrencyInfo`] of a fiat currency
 */
export type FiatCurrency = {
    id: string;
    info: CurrencyInfo;
};
/**
 * Generated factory for {@link FiatCurrency} record objects.
 */
export declare const FiatCurrency: Readonly<{
    /**
     * Create a frozen instance of {@link FiatCurrency}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<FiatCurrency> & Required<Omit<FiatCurrency, never>>) => FiatCurrency;
    /**
     * Create a frozen instance of {@link FiatCurrency}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<FiatCurrency> & Required<Omit<FiatCurrency, never>>) => FiatCurrency;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<FiatCurrency>;
}>;
export type FreezeIssuerTokenRequest = {
    address: string;
};
/**
 * Generated factory for {@link FreezeIssuerTokenRequest} record objects.
 */
export declare const FreezeIssuerTokenRequest: Readonly<{
    /**
     * Create a frozen instance of {@link FreezeIssuerTokenRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<FreezeIssuerTokenRequest> & Required<Omit<FreezeIssuerTokenRequest, never>>) => FreezeIssuerTokenRequest;
    /**
     * Create a frozen instance of {@link FreezeIssuerTokenRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<FreezeIssuerTokenRequest> & Required<Omit<FreezeIssuerTokenRequest, never>>) => FreezeIssuerTokenRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<FreezeIssuerTokenRequest>;
}>;
export type FreezeIssuerTokenResponse = {
    impactedOutputIds: Array<string>;
    impactedTokenAmount: U128;
};
/**
 * Generated factory for {@link FreezeIssuerTokenResponse} record objects.
 */
export declare const FreezeIssuerTokenResponse: Readonly<{
    /**
     * Create a frozen instance of {@link FreezeIssuerTokenResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<FreezeIssuerTokenResponse> & Required<Omit<FreezeIssuerTokenResponse, never>>) => FreezeIssuerTokenResponse;
    /**
     * Create a frozen instance of {@link FreezeIssuerTokenResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<FreezeIssuerTokenResponse> & Required<Omit<FreezeIssuerTokenResponse, never>>) => FreezeIssuerTokenResponse;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<FreezeIssuerTokenResponse>;
}>;
/**
 * Request to get the balance of the wallet
 */
export type GetInfoRequest = {
    /**
     * When `Some(true)`, and `background_tasks_enabled` is `true`, the call
     * waits for the initial Full sync to complete before returning.
     *
     * When `background_tasks_enabled` is `false`, setting this to `Some(true)`
     * is rejected with an invalid-input error. There is no background sync to
     * wait on; call `sync_wallet` explicitly first if you need fresh state.
     */
    ensureSynced: boolean | undefined;
};
/**
 * Generated factory for {@link GetInfoRequest} record objects.
 */
export declare const GetInfoRequest: Readonly<{
    /**
     * Create a frozen instance of {@link GetInfoRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<GetInfoRequest> & Required<Omit<GetInfoRequest, never>>) => GetInfoRequest;
    /**
     * Create a frozen instance of {@link GetInfoRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<GetInfoRequest> & Required<Omit<GetInfoRequest, never>>) => GetInfoRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<GetInfoRequest>;
}>;
/**
 * Response containing the balance of the wallet
 */
export type GetInfoResponse = {
    /**
     * The identity public key of the wallet as a hex string
     */
    identityPubkey: string;
    /**
     * The balance in satoshis
     */
    balanceSats: bigint;
    /**
     * The balances of the tokens in the wallet keyed by the token identifier
     */
    tokenBalances: Map<string, TokenBalance>;
};
/**
 * Generated factory for {@link GetInfoResponse} record objects.
 */
export declare const GetInfoResponse: Readonly<{
    /**
     * Create a frozen instance of {@link GetInfoResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<GetInfoResponse> & Required<Omit<GetInfoResponse, never>>) => GetInfoResponse;
    /**
     * Create a frozen instance of {@link GetInfoResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<GetInfoResponse> & Required<Omit<GetInfoResponse, never>>) => GetInfoResponse;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<GetInfoResponse>;
}>;
export type GetPaymentRequest = {
    paymentId: string;
};
/**
 * Generated factory for {@link GetPaymentRequest} record objects.
 */
export declare const GetPaymentRequest: Readonly<{
    /**
     * Create a frozen instance of {@link GetPaymentRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<GetPaymentRequest> & Required<Omit<GetPaymentRequest, never>>) => GetPaymentRequest;
    /**
     * Create a frozen instance of {@link GetPaymentRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<GetPaymentRequest> & Required<Omit<GetPaymentRequest, never>>) => GetPaymentRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<GetPaymentRequest>;
}>;
export type GetPaymentResponse = {
    payment: Payment;
};
/**
 * Generated factory for {@link GetPaymentResponse} record objects.
 */
export declare const GetPaymentResponse: Readonly<{
    /**
     * Create a frozen instance of {@link GetPaymentResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<GetPaymentResponse> & Required<Omit<GetPaymentResponse, never>>) => GetPaymentResponse;
    /**
     * Create a frozen instance of {@link GetPaymentResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<GetPaymentResponse> & Required<Omit<GetPaymentResponse, never>>) => GetPaymentResponse;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<GetPaymentResponse>;
}>;
export type GetTokensMetadataRequest = {
    tokenIdentifiers: Array<string>;
};
/**
 * Generated factory for {@link GetTokensMetadataRequest} record objects.
 */
export declare const GetTokensMetadataRequest: Readonly<{
    /**
     * Create a frozen instance of {@link GetTokensMetadataRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<GetTokensMetadataRequest> & Required<Omit<GetTokensMetadataRequest, never>>) => GetTokensMetadataRequest;
    /**
     * Create a frozen instance of {@link GetTokensMetadataRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<GetTokensMetadataRequest> & Required<Omit<GetTokensMetadataRequest, never>>) => GetTokensMetadataRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<GetTokensMetadataRequest>;
}>;
export type GetTokensMetadataResponse = {
    tokensMetadata: Array<TokenMetadata>;
};
/**
 * Generated factory for {@link GetTokensMetadataResponse} record objects.
 */
export declare const GetTokensMetadataResponse: Readonly<{
    /**
     * Create a frozen instance of {@link GetTokensMetadataResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<GetTokensMetadataResponse> & Required<Omit<GetTokensMetadataResponse, never>>) => GetTokensMetadataResponse;
    /**
     * Create a frozen instance of {@link GetTokensMetadataResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<GetTokensMetadataResponse> & Required<Omit<GetTokensMetadataResponse, never>>) => GetTokensMetadataResponse;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<GetTokensMetadataResponse>;
}>;
export type HashedMessageBytes = {
    bytes: ArrayBuffer;
};
/**
 * Generated factory for {@link HashedMessageBytes} record objects.
 */
export declare const HashedMessageBytes: Readonly<{
    /**
     * Create a frozen instance of {@link HashedMessageBytes}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<HashedMessageBytes> & Required<Omit<HashedMessageBytes, never>>) => HashedMessageBytes;
    /**
     * Create a frozen instance of {@link HashedMessageBytes}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<HashedMessageBytes> & Required<Omit<HashedMessageBytes, never>>) => HashedMessageBytes;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<HashedMessageBytes>;
}>;
/**
 * FFI-safe wrapper for (Identifier, `SigningCommitments`) pair
 */
export type IdentifierCommitmentPair = {
    identifier: ExternalIdentifier;
    commitment: ExternalSigningCommitments;
};
/**
 * Generated factory for {@link IdentifierCommitmentPair} record objects.
 */
export declare const IdentifierCommitmentPair: Readonly<{
    /**
     * Create a frozen instance of {@link IdentifierCommitmentPair}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<IdentifierCommitmentPair> & Required<Omit<IdentifierCommitmentPair, never>>) => IdentifierCommitmentPair;
    /**
     * Create a frozen instance of {@link IdentifierCommitmentPair}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<IdentifierCommitmentPair> & Required<Omit<IdentifierCommitmentPair, never>>) => IdentifierCommitmentPair;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<IdentifierCommitmentPair>;
}>;
/**
 * FFI-safe wrapper for (Identifier, `PublicKey`) pair
 */
export type IdentifierPublicKeyPair = {
    identifier: ExternalIdentifier;
    publicKey: ArrayBuffer;
};
/**
 * Generated factory for {@link IdentifierPublicKeyPair} record objects.
 */
export declare const IdentifierPublicKeyPair: Readonly<{
    /**
     * Create a frozen instance of {@link IdentifierPublicKeyPair}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<IdentifierPublicKeyPair> & Required<Omit<IdentifierPublicKeyPair, never>>) => IdentifierPublicKeyPair;
    /**
     * Create a frozen instance of {@link IdentifierPublicKeyPair}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<IdentifierPublicKeyPair> & Required<Omit<IdentifierPublicKeyPair, never>>) => IdentifierPublicKeyPair;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<IdentifierPublicKeyPair>;
}>;
/**
 * FFI-safe wrapper for (Identifier, `SignatureShare`) pair
 */
export type IdentifierSignaturePair = {
    identifier: ExternalIdentifier;
    signature: ExternalFrostSignatureShare;
};
/**
 * Generated factory for {@link IdentifierSignaturePair} record objects.
 */
export declare const IdentifierSignaturePair: Readonly<{
    /**
     * Create a frozen instance of {@link IdentifierSignaturePair}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<IdentifierSignaturePair> & Required<Omit<IdentifierSignaturePair, never>>) => IdentifierSignaturePair;
    /**
     * Create a frozen instance of {@link IdentifierSignaturePair}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<IdentifierSignaturePair> & Required<Omit<IdentifierSignaturePair, never>>) => IdentifierSignaturePair;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<IdentifierSignaturePair>;
}>;
export type IncomingChange = {
    newState: Record;
    oldState: Record | undefined;
};
/**
 * Generated factory for {@link IncomingChange} record objects.
 */
export declare const IncomingChange: Readonly<{
    /**
     * Create a frozen instance of {@link IncomingChange}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<IncomingChange> & Required<Omit<IncomingChange, never>>) => IncomingChange;
    /**
     * Create a frozen instance of {@link IncomingChange}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<IncomingChange> & Required<Omit<IncomingChange, never>>) => IncomingChange;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<IncomingChange>;
}>;
/**
 * Configuration for leaf optimization.
 */
export type LeafOptimizationConfig = {
    /**
     * Whether automatic leaf optimization is enabled.
     *
     * If set to true, the SDK will automatically optimize the leaf set when it changes.
     * Otherwise, the manual optimization API must be used to optimize the leaf set.
     *
     * Default value is true.
     */
    autoEnabled: boolean;
    /**
     * The desired multiplicity for the leaf set.
     *
     * Setting this to 0 will optimize for maximizing unilateral exit.
     * Higher values will optimize for minimizing transfer swaps, with higher values
     * being more aggressive and allowing better TPS rates.
     *
     * For end-user wallets, values of 1-5 are recommended. Values above 5 are
     * intended for high-throughput server environments and are not recommended
     * for end-user wallets due to significantly higher unilateral exit costs.
     *
     * Default value is 1.
     */
    multiplicity: number;
};
/**
 * Generated factory for {@link LeafOptimizationConfig} record objects.
 */
export declare const LeafOptimizationConfig: Readonly<{
    /**
     * Create a frozen instance of {@link LeafOptimizationConfig}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<LeafOptimizationConfig> & Required<Omit<LeafOptimizationConfig, never>>) => LeafOptimizationConfig;
    /**
     * Create a frozen instance of {@link LeafOptimizationConfig}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<LeafOptimizationConfig> & Required<Omit<LeafOptimizationConfig, never>>) => LeafOptimizationConfig;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<LeafOptimizationConfig>;
}>;
export type LightningAddressDetails = {
    address: string;
    payRequest: LnurlPayRequestDetails;
};
/**
 * Generated factory for {@link LightningAddressDetails} record objects.
 */
export declare const LightningAddressDetails: Readonly<{
    /**
     * Create a frozen instance of {@link LightningAddressDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<LightningAddressDetails> & Required<Omit<LightningAddressDetails, never>>) => LightningAddressDetails;
    /**
     * Create a frozen instance of {@link LightningAddressDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<LightningAddressDetails> & Required<Omit<LightningAddressDetails, never>>) => LightningAddressDetails;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<LightningAddressDetails>;
}>;
export type LightningAddressInfo = {
    description: string;
    lightningAddress: string;
    lnurl: LnurlInfo;
    username: string;
};
/**
 * Generated factory for {@link LightningAddressInfo} record objects.
 */
export declare const LightningAddressInfo: Readonly<{
    /**
     * Create a frozen instance of {@link LightningAddressInfo}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<LightningAddressInfo> & Required<Omit<LightningAddressInfo, never>>) => LightningAddressInfo;
    /**
     * Create a frozen instance of {@link LightningAddressInfo}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<LightningAddressInfo> & Required<Omit<LightningAddressInfo, never>>) => LightningAddressInfo;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<LightningAddressInfo>;
}>;
/**
 * Request to list contacts with optional pagination.
 */
export type ListContactsRequest = {
    offset: /*u32*/ number | undefined;
    limit: /*u32*/ number | undefined;
};
/**
 * Generated factory for {@link ListContactsRequest} record objects.
 */
export declare const ListContactsRequest: Readonly<{
    /**
     * Create a frozen instance of {@link ListContactsRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ListContactsRequest> & Required<Omit<ListContactsRequest, "offset" | "limit">>) => ListContactsRequest;
    /**
     * Create a frozen instance of {@link ListContactsRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ListContactsRequest> & Required<Omit<ListContactsRequest, "offset" | "limit">>) => ListContactsRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ListContactsRequest>;
}>;
/**
 * Response from listing fiat currencies
 */
export type ListFiatCurrenciesResponse = {
    /**
     * The list of fiat currencies
     */
    currencies: Array<FiatCurrency>;
};
/**
 * Generated factory for {@link ListFiatCurrenciesResponse} record objects.
 */
export declare const ListFiatCurrenciesResponse: Readonly<{
    /**
     * Create a frozen instance of {@link ListFiatCurrenciesResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ListFiatCurrenciesResponse> & Required<Omit<ListFiatCurrenciesResponse, never>>) => ListFiatCurrenciesResponse;
    /**
     * Create a frozen instance of {@link ListFiatCurrenciesResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ListFiatCurrenciesResponse> & Required<Omit<ListFiatCurrenciesResponse, never>>) => ListFiatCurrenciesResponse;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ListFiatCurrenciesResponse>;
}>;
/**
 * Response from listing fiat rates
 */
export type ListFiatRatesResponse = {
    /**
     * The list of fiat rates
     */
    rates: Array<Rate>;
};
/**
 * Generated factory for {@link ListFiatRatesResponse} record objects.
 */
export declare const ListFiatRatesResponse: Readonly<{
    /**
     * Create a frozen instance of {@link ListFiatRatesResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ListFiatRatesResponse> & Required<Omit<ListFiatRatesResponse, never>>) => ListFiatRatesResponse;
    /**
     * Create a frozen instance of {@link ListFiatRatesResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ListFiatRatesResponse> & Required<Omit<ListFiatRatesResponse, never>>) => ListFiatRatesResponse;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ListFiatRatesResponse>;
}>;
/**
 * Request to list payments with optional filters and pagination
 */
export type ListPaymentsRequest = {
    typeFilter: Array<PaymentType> | undefined;
    statusFilter: Array<PaymentStatus> | undefined;
    assetFilter: AssetFilter | undefined;
    /**
     * Only include payments matching at least one of these payment details filters
     */
    paymentDetailsFilter: Array<PaymentDetailsFilter> | undefined;
    /**
     * Only include payments created after this timestamp (inclusive)
     */
    fromTimestamp: /*u64*/ bigint | undefined;
    /**
     * Only include payments created before this timestamp (exclusive)
     */
    toTimestamp: /*u64*/ bigint | undefined;
    /**
     * Number of records to skip
     */
    offset: /*u32*/ number | undefined;
    /**
     * Maximum number of records to return
     */
    limit: /*u32*/ number | undefined;
    sortAscending: boolean | undefined;
};
/**
 * Generated factory for {@link ListPaymentsRequest} record objects.
 */
export declare const ListPaymentsRequest: Readonly<{
    /**
     * Create a frozen instance of {@link ListPaymentsRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ListPaymentsRequest> & Required<Omit<ListPaymentsRequest, "offset" | "limit" | "typeFilter" | "statusFilter" | "assetFilter" | "paymentDetailsFilter" | "fromTimestamp" | "toTimestamp" | "sortAscending">>) => ListPaymentsRequest;
    /**
     * Create a frozen instance of {@link ListPaymentsRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ListPaymentsRequest> & Required<Omit<ListPaymentsRequest, "offset" | "limit" | "typeFilter" | "statusFilter" | "assetFilter" | "paymentDetailsFilter" | "fromTimestamp" | "toTimestamp" | "sortAscending">>) => ListPaymentsRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ListPaymentsRequest>;
}>;
/**
 * Response from listing payments
 */
export type ListPaymentsResponse = {
    /**
     * The list of payments
     */
    payments: Array<Payment>;
};
/**
 * Generated factory for {@link ListPaymentsResponse} record objects.
 */
export declare const ListPaymentsResponse: Readonly<{
    /**
     * Create a frozen instance of {@link ListPaymentsResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ListPaymentsResponse> & Required<Omit<ListPaymentsResponse, never>>) => ListPaymentsResponse;
    /**
     * Create a frozen instance of {@link ListPaymentsResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ListPaymentsResponse> & Required<Omit<ListPaymentsResponse, never>>) => ListPaymentsResponse;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ListPaymentsResponse>;
}>;
export type ListUnclaimedDepositsRequest = {};
/**
 * Generated factory for {@link ListUnclaimedDepositsRequest} record objects.
 */
export declare const ListUnclaimedDepositsRequest: Readonly<{
    /**
     * Create a frozen instance of {@link ListUnclaimedDepositsRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ListUnclaimedDepositsRequest> & Required<Omit<ListUnclaimedDepositsRequest, never>>) => ListUnclaimedDepositsRequest;
    /**
     * Create a frozen instance of {@link ListUnclaimedDepositsRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ListUnclaimedDepositsRequest> & Required<Omit<ListUnclaimedDepositsRequest, never>>) => ListUnclaimedDepositsRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ListUnclaimedDepositsRequest>;
}>;
export type ListUnclaimedDepositsResponse = {
    deposits: Array<DepositInfo>;
};
/**
 * Generated factory for {@link ListUnclaimedDepositsResponse} record objects.
 */
export declare const ListUnclaimedDepositsResponse: Readonly<{
    /**
     * Create a frozen instance of {@link ListUnclaimedDepositsResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ListUnclaimedDepositsResponse> & Required<Omit<ListUnclaimedDepositsResponse, never>>) => ListUnclaimedDepositsResponse;
    /**
     * Create a frozen instance of {@link ListUnclaimedDepositsResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ListUnclaimedDepositsResponse> & Required<Omit<ListUnclaimedDepositsResponse, never>>) => ListUnclaimedDepositsResponse;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ListUnclaimedDepositsResponse>;
}>;
/**
 * Wrapped in a [`InputType::LnurlAuth`], this is the result of [`parse`](breez_sdk_common::input::parse) when given a LNURL-auth endpoint.
 *
 * It represents the endpoint's parameters for the LNURL workflow.
 *
 * See <https://github.com/lnurl/luds/blob/luds/04.md>
 */
export type LnurlAuthRequestDetails = {
    /**
     * Hex encoded 32 bytes of challenge
     */
    k1: string;
    /**
     * When available, one of: register, login, link, auth
     */
    action: string | undefined;
    /**
     * Indicates the domain of the LNURL-auth service, to be shown to the user when asking for
     * auth confirmation, as per LUD-04 spec.
     */
    domain: string;
    /**
     * Indicates the URL of the LNURL-auth service, including the query arguments. This will be
     * extended with the signed challenge and the linking key, then called in the second step of the workflow.
     */
    url: string;
};
/**
 * Generated factory for {@link LnurlAuthRequestDetails} record objects.
 */
export declare const LnurlAuthRequestDetails: Readonly<{
    /**
     * Create a frozen instance of {@link LnurlAuthRequestDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<LnurlAuthRequestDetails> & Required<Omit<LnurlAuthRequestDetails, never>>) => LnurlAuthRequestDetails;
    /**
     * Create a frozen instance of {@link LnurlAuthRequestDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<LnurlAuthRequestDetails> & Required<Omit<LnurlAuthRequestDetails, never>>) => LnurlAuthRequestDetails;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<LnurlAuthRequestDetails>;
}>;
/**
 * LNURL error details
 */
export type LnurlErrorDetails = {
    reason: string;
};
/**
 * Generated factory for {@link LnurlErrorDetails} record objects.
 */
export declare const LnurlErrorDetails: Readonly<{
    /**
     * Create a frozen instance of {@link LnurlErrorDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<LnurlErrorDetails> & Required<Omit<LnurlErrorDetails, never>>) => LnurlErrorDetails;
    /**
     * Create a frozen instance of {@link LnurlErrorDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<LnurlErrorDetails> & Required<Omit<LnurlErrorDetails, never>>) => LnurlErrorDetails;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<LnurlErrorDetails>;
}>;
export type LnurlInfo = {
    url: string;
    bech32: string;
};
/**
 * Generated factory for {@link LnurlInfo} record objects.
 */
export declare const LnurlInfo: Readonly<{
    /**
     * Create a frozen instance of {@link LnurlInfo}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<LnurlInfo> & Required<Omit<LnurlInfo, never>>) => LnurlInfo;
    /**
     * Create a frozen instance of {@link LnurlInfo}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<LnurlInfo> & Required<Omit<LnurlInfo, never>>) => LnurlInfo;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<LnurlInfo>;
}>;
/**
 * Represents the payment LNURL info
 */
export type LnurlPayInfo = {
    lnAddress: string | undefined;
    comment: string | undefined;
    domain: string | undefined;
    metadata: string | undefined;
    processedSuccessAction: SuccessActionProcessed | undefined;
    rawSuccessAction: SuccessAction | undefined;
};
/**
 * Generated factory for {@link LnurlPayInfo} record objects.
 */
export declare const LnurlPayInfo: Readonly<{
    /**
     * Create a frozen instance of {@link LnurlPayInfo}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<LnurlPayInfo> & Required<Omit<LnurlPayInfo, never>>) => LnurlPayInfo;
    /**
     * Create a frozen instance of {@link LnurlPayInfo}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<LnurlPayInfo> & Required<Omit<LnurlPayInfo, never>>) => LnurlPayInfo;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<LnurlPayInfo>;
}>;
export type LnurlPayRequest = {
    prepareResponse: PrepareLnurlPayResponse;
    /**
     * If set, providing the same idempotency key for multiple requests will ensure that only one
     * payment is made. If an idempotency key is re-used, the same payment will be returned.
     * The idempotency key must be a valid UUID.
     */
    idempotencyKey: string | undefined;
};
/**
 * Generated factory for {@link LnurlPayRequest} record objects.
 */
export declare const LnurlPayRequest: Readonly<{
    /**
     * Create a frozen instance of {@link LnurlPayRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<LnurlPayRequest> & Required<Omit<LnurlPayRequest, "idempotencyKey">>) => LnurlPayRequest;
    /**
     * Create a frozen instance of {@link LnurlPayRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<LnurlPayRequest> & Required<Omit<LnurlPayRequest, "idempotencyKey">>) => LnurlPayRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<LnurlPayRequest>;
}>;
export type LnurlPayRequestDetails = {
    callback: string;
    /**
     * The minimum amount, in millisats, that this LNURL-pay endpoint accepts
     */
    minSendable: bigint;
    /**
     * The maximum amount, in millisats, that this LNURL-pay endpoint accepts
     */
    maxSendable: bigint;
    /**
     * As per LUD-06, `metadata` is a raw string (e.g. a json representation of the inner map).
     * Use `metadata_vec()` to get the parsed items.
     */
    metadataStr: string;
    /**
     * The comment length accepted by this endpoint
     *
     * See <https://github.com/lnurl/luds/blob/luds/12.md>
     */
    commentAllowed: number;
    /**
     * Indicates the domain of the LNURL-pay service, to be shown to the user when asking for
     * payment input, as per LUD-06 spec.
     *
     * Note: this is not the domain of the callback, but the domain of the LNURL-pay endpoint.
     */
    domain: string;
    url: string;
    /**
     * Optional lightning address if that was used to resolve the lnurl.
     */
    address: string | undefined;
    /**
     * Value indicating whether the recipient supports Nostr Zaps through NIP-57.
     *
     * See <https://github.com/nostr-protocol/nips/blob/master/57.md>
     */
    allowsNostr: boolean | undefined;
    /**
     * Optional recipient's lnurl provider's Nostr pubkey for NIP-57. If it exists it should be a
     * valid BIP 340 public key in hex.
     *
     * See <https://github.com/nostr-protocol/nips/blob/master/57.md>
     * See <https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki>
     */
    nostrPubkey: string | undefined;
};
/**
 * Generated factory for {@link LnurlPayRequestDetails} record objects.
 */
export declare const LnurlPayRequestDetails: Readonly<{
    /**
     * Create a frozen instance of {@link LnurlPayRequestDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<LnurlPayRequestDetails> & Required<Omit<LnurlPayRequestDetails, never>>) => LnurlPayRequestDetails;
    /**
     * Create a frozen instance of {@link LnurlPayRequestDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<LnurlPayRequestDetails> & Required<Omit<LnurlPayRequestDetails, never>>) => LnurlPayRequestDetails;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<LnurlPayRequestDetails>;
}>;
export type LnurlPayResponse = {
    payment: Payment;
    successAction: SuccessActionProcessed | undefined;
};
/**
 * Generated factory for {@link LnurlPayResponse} record objects.
 */
export declare const LnurlPayResponse: Readonly<{
    /**
     * Create a frozen instance of {@link LnurlPayResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<LnurlPayResponse> & Required<Omit<LnurlPayResponse, never>>) => LnurlPayResponse;
    /**
     * Create a frozen instance of {@link LnurlPayResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<LnurlPayResponse> & Required<Omit<LnurlPayResponse, never>>) => LnurlPayResponse;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<LnurlPayResponse>;
}>;
export type LnurlReceiveMetadata = {
    nostrZapRequest: string | undefined;
    nostrZapReceipt: string | undefined;
    senderComment: string | undefined;
};
/**
 * Generated factory for {@link LnurlReceiveMetadata} record objects.
 */
export declare const LnurlReceiveMetadata: Readonly<{
    /**
     * Create a frozen instance of {@link LnurlReceiveMetadata}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<LnurlReceiveMetadata> & Required<Omit<LnurlReceiveMetadata, never>>) => LnurlReceiveMetadata;
    /**
     * Create a frozen instance of {@link LnurlReceiveMetadata}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<LnurlReceiveMetadata> & Required<Omit<LnurlReceiveMetadata, never>>) => LnurlReceiveMetadata;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<LnurlReceiveMetadata>;
}>;
/**
 * Represents the withdraw LNURL info
 */
export type LnurlWithdrawInfo = {
    withdrawUrl: string;
};
/**
 * Generated factory for {@link LnurlWithdrawInfo} record objects.
 */
export declare const LnurlWithdrawInfo: Readonly<{
    /**
     * Create a frozen instance of {@link LnurlWithdrawInfo}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<LnurlWithdrawInfo> & Required<Omit<LnurlWithdrawInfo, never>>) => LnurlWithdrawInfo;
    /**
     * Create a frozen instance of {@link LnurlWithdrawInfo}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<LnurlWithdrawInfo> & Required<Omit<LnurlWithdrawInfo, never>>) => LnurlWithdrawInfo;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<LnurlWithdrawInfo>;
}>;
export type LnurlWithdrawRequest = {
    /**
     * The amount to withdraw in satoshis
     * Must be within the min and max withdrawable limits
     */
    amountSats: bigint;
    withdrawRequest: LnurlWithdrawRequestDetails;
    /**
     * If set, the function will return the payment if it is still pending after this
     * number of seconds. If unset, the function will return immediately after
     * initiating the LNURL withdraw.
     */
    completionTimeoutSecs: /*u32*/ number | undefined;
};
/**
 * Generated factory for {@link LnurlWithdrawRequest} record objects.
 */
export declare const LnurlWithdrawRequest: Readonly<{
    /**
     * Create a frozen instance of {@link LnurlWithdrawRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<LnurlWithdrawRequest> & Required<Omit<LnurlWithdrawRequest, "completionTimeoutSecs">>) => LnurlWithdrawRequest;
    /**
     * Create a frozen instance of {@link LnurlWithdrawRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<LnurlWithdrawRequest> & Required<Omit<LnurlWithdrawRequest, "completionTimeoutSecs">>) => LnurlWithdrawRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<LnurlWithdrawRequest>;
}>;
export type LnurlWithdrawRequestDetails = {
    callback: string;
    k1: string;
    defaultDescription: string;
    /**
     * The minimum amount, in millisats, that this LNURL-withdraw endpoint accepts
     */
    minWithdrawable: bigint;
    /**
     * The maximum amount, in millisats, that this LNURL-withdraw endpoint accepts
     */
    maxWithdrawable: bigint;
};
/**
 * Generated factory for {@link LnurlWithdrawRequestDetails} record objects.
 */
export declare const LnurlWithdrawRequestDetails: Readonly<{
    /**
     * Create a frozen instance of {@link LnurlWithdrawRequestDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<LnurlWithdrawRequestDetails> & Required<Omit<LnurlWithdrawRequestDetails, never>>) => LnurlWithdrawRequestDetails;
    /**
     * Create a frozen instance of {@link LnurlWithdrawRequestDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<LnurlWithdrawRequestDetails> & Required<Omit<LnurlWithdrawRequestDetails, never>>) => LnurlWithdrawRequestDetails;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<LnurlWithdrawRequestDetails>;
}>;
export type LnurlWithdrawResponse = {
    /**
     * The Lightning invoice generated for the LNURL withdraw
     */
    paymentRequest: string;
    payment: Payment | undefined;
};
/**
 * Generated factory for {@link LnurlWithdrawResponse} record objects.
 */
export declare const LnurlWithdrawResponse: Readonly<{
    /**
     * Create a frozen instance of {@link LnurlWithdrawResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<LnurlWithdrawResponse> & Required<Omit<LnurlWithdrawResponse, never>>) => LnurlWithdrawResponse;
    /**
     * Create a frozen instance of {@link LnurlWithdrawResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<LnurlWithdrawResponse> & Required<Omit<LnurlWithdrawResponse, never>>) => LnurlWithdrawResponse;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<LnurlWithdrawResponse>;
}>;
/**
 * Locale-specific settings for the representation of a currency
 */
export type LocaleOverrides = {
    locale: string;
    spacing: /*u32*/ number | undefined;
    symbol: Symbol;
};
/**
 * Generated factory for {@link LocaleOverrides} record objects.
 */
export declare const LocaleOverrides: Readonly<{
    /**
     * Create a frozen instance of {@link LocaleOverrides}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<LocaleOverrides> & Required<Omit<LocaleOverrides, never>>) => LocaleOverrides;
    /**
     * Create a frozen instance of {@link LocaleOverrides}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<LocaleOverrides> & Required<Omit<LocaleOverrides, never>>) => LocaleOverrides;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<LocaleOverrides>;
}>;
/**
 * Localized name of a currency
 */
export type LocalizedName = {
    locale: string;
    name: string;
};
/**
 * Generated factory for {@link LocalizedName} record objects.
 */
export declare const LocalizedName: Readonly<{
    /**
     * Create a frozen instance of {@link LocalizedName}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<LocalizedName> & Required<Omit<LocalizedName, never>>) => LocalizedName;
    /**
     * Create a frozen instance of {@link LocalizedName}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<LocalizedName> & Required<Omit<LocalizedName, never>>) => LocalizedName;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<LocalizedName>;
}>;
export type LogEntry = {
    line: string;
    level: string;
};
/**
 * Generated factory for {@link LogEntry} record objects.
 */
export declare const LogEntry: Readonly<{
    /**
     * Create a frozen instance of {@link LogEntry}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<LogEntry> & Required<Omit<LogEntry, never>>) => LogEntry;
    /**
     * Create a frozen instance of {@link LogEntry}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<LogEntry> & Required<Omit<LogEntry, never>>) => LogEntry;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<LogEntry>;
}>;
/**
 * FFI-safe representation of a 32-byte message digest for ECDSA signing
 */
export type MessageBytes = {
    bytes: ArrayBuffer;
};
/**
 * Generated factory for {@link MessageBytes} record objects.
 */
export declare const MessageBytes: Readonly<{
    /**
     * Create a frozen instance of {@link MessageBytes}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<MessageBytes> & Required<Omit<MessageBytes, never>>) => MessageBytes;
    /**
     * Create a frozen instance of {@link MessageBytes}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<MessageBytes> & Required<Omit<MessageBytes, never>>) => MessageBytes;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<MessageBytes>;
}>;
export type MessageSuccessActionData = {
    message: string;
};
/**
 * Generated factory for {@link MessageSuccessActionData} record objects.
 */
export declare const MessageSuccessActionData: Readonly<{
    /**
     * Create a frozen instance of {@link MessageSuccessActionData}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<MessageSuccessActionData> & Required<Omit<MessageSuccessActionData, never>>) => MessageSuccessActionData;
    /**
     * Create a frozen instance of {@link MessageSuccessActionData}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<MessageSuccessActionData> & Required<Omit<MessageSuccessActionData, never>>) => MessageSuccessActionData;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<MessageSuccessActionData>;
}>;
export type MintIssuerTokenRequest = {
    amount: U128;
};
/**
 * Generated factory for {@link MintIssuerTokenRequest} record objects.
 */
export declare const MintIssuerTokenRequest: Readonly<{
    /**
     * Create a frozen instance of {@link MintIssuerTokenRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<MintIssuerTokenRequest> & Required<Omit<MintIssuerTokenRequest, never>>) => MintIssuerTokenRequest;
    /**
     * Create a frozen instance of {@link MintIssuerTokenRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<MintIssuerTokenRequest> & Required<Omit<MintIssuerTokenRequest, never>>) => MintIssuerTokenRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<MintIssuerTokenRequest>;
}>;
/**
 * Request for [`BreezSdk::optimize_leaves`]. Defaults to
 * [`OptimizationMode::Full`].
 */
export type OptimizeLeavesRequest = {
    /**
     * Controls how much work the call performs before returning.
     */
    mode: OptimizationMode;
};
/**
 * Generated factory for {@link OptimizeLeavesRequest} record objects.
 */
export declare const OptimizeLeavesRequest: Readonly<{
    /**
     * Create a frozen instance of {@link OptimizeLeavesRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<OptimizeLeavesRequest> & Required<Omit<OptimizeLeavesRequest, never>>) => OptimizeLeavesRequest;
    /**
     * Create a frozen instance of {@link OptimizeLeavesRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<OptimizeLeavesRequest> & Required<Omit<OptimizeLeavesRequest, never>>) => OptimizeLeavesRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<OptimizeLeavesRequest>;
}>;
/**
 * Response from a [`BreezSdk::optimize_leaves`] call.
 */
export type OptimizeLeavesResponse = {
    /**
     * The outcome of the optimization run.
     */
    outcome: OptimizationOutcome;
};
/**
 * Generated factory for {@link OptimizeLeavesResponse} record objects.
 */
export declare const OptimizeLeavesResponse: Readonly<{
    /**
     * Create a frozen instance of {@link OptimizeLeavesResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<OptimizeLeavesResponse> & Required<Omit<OptimizeLeavesResponse, never>>) => OptimizeLeavesResponse;
    /**
     * Create a frozen instance of {@link OptimizeLeavesResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<OptimizeLeavesResponse> & Required<Omit<OptimizeLeavesResponse, never>>) => OptimizeLeavesResponse;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<OptimizeLeavesResponse>;
}>;
export type OutgoingChange = {
    change: RecordChange;
    parent: Record | undefined;
};
/**
 * Generated factory for {@link OutgoingChange} record objects.
 */
export declare const OutgoingChange: Readonly<{
    /**
     * Create a frozen instance of {@link OutgoingChange}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<OutgoingChange> & Required<Omit<OutgoingChange, never>>) => OutgoingChange;
    /**
     * Create a frozen instance of {@link OutgoingChange}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<OutgoingChange> & Required<Omit<OutgoingChange, never>>) => OutgoingChange;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<OutgoingChange>;
}>;
/**
 * Configuration for the passkey client.
 */
export type PasskeyConfig = {
    /**
     * Default wallet label when a call provides none. Unset uses
     * `"Default"`.
     */
    defaultLabel: string | undefined;
    /**
     * Relying Party and user identity for the built-in provider, used
     * on the zero-config path. Ignored when you inject your own
     * provider.
     */
    providerOptions: PasskeyProviderOptions | undefined;
};
/**
 * Generated factory for {@link PasskeyConfig} record objects.
 */
export declare const PasskeyConfig: Readonly<{
    /**
     * Create a frozen instance of {@link PasskeyConfig}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<PasskeyConfig> & Required<Omit<PasskeyConfig, "defaultLabel" | "providerOptions">>) => PasskeyConfig;
    /**
     * Create a frozen instance of {@link PasskeyConfig}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<PasskeyConfig> & Required<Omit<PasskeyConfig, "defaultLabel" | "providerOptions">>) => PasskeyConfig;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<PasskeyConfig>;
}>;
/**
 * A passkey credential from a register or sign-in ceremony.
 * `credential_id` is always set; the attestation fields are
 * populated on registration and absent on sign-in (an assertion
 * carries no attestation). Persist `credential_id` to drive
 * `exclude_credentials` / `allow_credentials` on later calls.
 */
export type PasskeyCredential = {
    /**
     * The credential used on sign-in or created on registration.
     */
    credentialId: ArrayBuffer;
    /**
     * `WebAuthn` user handle, provider-minted at registration.
     * Absent on sign-in.
     */
    userId: ArrayBuffer | undefined;
    /**
     * Authenticator AAGUID. A display hint only: the attestation is
     * unverified. Absent on sign-in.
     */
    aaguid: ArrayBuffer | undefined;
    /**
     * Whether the credential is eligible for cloud backup / sync.
     * Absent on sign-in.
     */
    backupEligible: boolean | undefined;
};
/**
 * Generated factory for {@link PasskeyCredential} record objects.
 */
export declare const PasskeyCredential: Readonly<{
    /**
     * Create a frozen instance of {@link PasskeyCredential}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<PasskeyCredential> & Required<Omit<PasskeyCredential, never>>) => PasskeyCredential;
    /**
     * Create a frozen instance of {@link PasskeyCredential}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<PasskeyCredential> & Required<Omit<PasskeyCredential, never>>) => PasskeyCredential;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<PasskeyCredential>;
}>;
/**
 * Relying Party and user identity for the built-in passkey provider.
 * Applies only when a binding builds the provider for you (the
 * zero-config path); a provider you construct yourself owns these and
 * ignores them.
 */
export type PasskeyProviderOptions = {
    /**
     * Relying Party ID. Unset uses the Breez shared RP
     * (`keys.breez.technology`).
     */
    rpId: string | undefined;
    /**
     * Relying Party name. Unset uses `"Breez"`.
     */
    rpName: string | undefined;
    /**
     * `WebAuthn` `user.name`: the account identifier the OS sign-in
     * picker shows beneath the display name, typically an email or
     * handle (e.g. `john@doe.com`). Set a stable per-user
     * value to keep each registration a distinct entry. Unset uses
     * `rp_name`.
     */
    userName: string | undefined;
    /**
     * `WebAuthn` `user.display_name`: the human-friendly name the
     * picker shows most prominently (e.g. `John Doe`). Unset uses
     * `user_name`.
     */
    userDisplayName: string | undefined;
};
/**
 * Generated factory for {@link PasskeyProviderOptions} record objects.
 */
export declare const PasskeyProviderOptions: Readonly<{
    /**
     * Create a frozen instance of {@link PasskeyProviderOptions}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<PasskeyProviderOptions> & Required<Omit<PasskeyProviderOptions, "rpId" | "rpName" | "userName" | "userDisplayName">>) => PasskeyProviderOptions;
    /**
     * Create a frozen instance of {@link PasskeyProviderOptions}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<PasskeyProviderOptions> & Required<Omit<PasskeyProviderOptions, "rpId" | "rpName" | "userName" | "userDisplayName">>) => PasskeyProviderOptions;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<PasskeyProviderOptions>;
}>;
/**
 * Represents a payment (sent or received)
 */
export type Payment = {
    /**
     * Unique identifier for the payment
     */
    id: string;
    /**
     * Type of payment (send or receive)
     */
    paymentType: PaymentType;
    /**
     * Status of the payment
     */
    status: PaymentStatus;
    /**
     * Amount in satoshis or token base units
     */
    amount: U128;
    /**
     * Fee paid in satoshis or token base units
     */
    fees: U128;
    /**
     * Timestamp of when the payment was created
     */
    timestamp: bigint;
    /**
     * Method of payment. Sometimes the payment details is empty so this field
     * is used to determine the payment method.
     */
    method: PaymentMethod;
    /**
     * Details of the payment
     */
    details: PaymentDetails | undefined;
    /**
     * If set, this payment involved a conversion before the payment
     */
    conversionDetails: ConversionDetails | undefined;
};
/**
 * Generated factory for {@link Payment} record objects.
 */
export declare const Payment: Readonly<{
    /**
     * Create a frozen instance of {@link Payment}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<Payment> & Required<Omit<Payment, never>>) => Payment;
    /**
     * Create a frozen instance of {@link Payment}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<Payment> & Required<Omit<Payment, never>>) => Payment;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<Payment>;
}>;
export type PaymentIdUpdate = {
    /**
     * Provisional payment id reported by `before_send`, in the form `{partial_tx_id}:{index}`
     */
    provisionalPaymentId: string;
    /**
     * Final payment id once the transaction is broadcast, in the form `{final_tx_id}:{vout}`
     */
    finalPaymentId: string;
};
/**
 * Generated factory for {@link PaymentIdUpdate} record objects.
 */
export declare const PaymentIdUpdate: Readonly<{
    /**
     * Create a frozen instance of {@link PaymentIdUpdate}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<PaymentIdUpdate> & Required<Omit<PaymentIdUpdate, never>>) => PaymentIdUpdate;
    /**
     * Create a frozen instance of {@link PaymentIdUpdate}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<PaymentIdUpdate> & Required<Omit<PaymentIdUpdate, never>>) => PaymentIdUpdate;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<PaymentIdUpdate>;
}>;
/**
 * Metadata associated with a payment that cannot be extracted from the Spark operator.
 */
export type PaymentMetadata = {
    parentPaymentId: string | undefined;
    lnurlPayInfo: LnurlPayInfo | undefined;
    lnurlWithdrawInfo: LnurlWithdrawInfo | undefined;
    lnurlDescription: string | undefined;
    /**
     * Conversion info for this payment. Defaults `"type"` to `"amm"` when the
     * tag is missing (pre-migration sync records).
     */
    conversionInfo: ConversionInfo | undefined;
    conversionStatus: ConversionStatus | undefined;
};
/**
 * Generated factory for {@link PaymentMetadata} record objects.
 */
export declare const PaymentMetadata: Readonly<{
    /**
     * Create a frozen instance of {@link PaymentMetadata}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<PaymentMetadata> & Required<Omit<PaymentMetadata, never>>) => PaymentMetadata;
    /**
     * Create a frozen instance of {@link PaymentMetadata}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<PaymentMetadata> & Required<Omit<PaymentMetadata, never>>) => PaymentMetadata;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<PaymentMetadata>;
}>;
export type PaymentRequestSource = {
    bip21Uri: string | undefined;
    bip353Address: string | undefined;
};
/**
 * Generated factory for {@link PaymentRequestSource} record objects.
 */
export declare const PaymentRequestSource: Readonly<{
    /**
     * Create a frozen instance of {@link PaymentRequestSource}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<PaymentRequestSource> & Required<Omit<PaymentRequestSource, never>>) => PaymentRequestSource;
    /**
     * Create a frozen instance of {@link PaymentRequestSource}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<PaymentRequestSource> & Required<Omit<PaymentRequestSource, never>>) => PaymentRequestSource;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<PaymentRequestSource>;
}>;
export type PrepareLnurlPayRequest = {
    /**
     * The amount to send. Denominated in satoshis, or in token base units
     * when `token_identifier` is set.
     */
    amount: U128;
    payRequest: LnurlPayRequestDetails;
    comment: string | undefined;
    validateSuccessActionUrl: boolean | undefined;
    /**
     * The token identifier when sending a token amount with conversion.
     */
    tokenIdentifier: string | undefined;
    /**
     * If provided, the payment will include a token conversion step before sending the payment
     */
    conversionOptions: ConversionOptions | undefined;
    /**
     * How fees are handled. See [`FeePolicy`]. Defaults to `FeesExcluded`.
     */
    feePolicy: FeePolicy | undefined;
};
/**
 * Generated factory for {@link PrepareLnurlPayRequest} record objects.
 */
export declare const PrepareLnurlPayRequest: Readonly<{
    /**
     * Create a frozen instance of {@link PrepareLnurlPayRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<PrepareLnurlPayRequest> & Required<Omit<PrepareLnurlPayRequest, "tokenIdentifier" | "comment" | "validateSuccessActionUrl" | "conversionOptions" | "feePolicy">>) => PrepareLnurlPayRequest;
    /**
     * Create a frozen instance of {@link PrepareLnurlPayRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<PrepareLnurlPayRequest> & Required<Omit<PrepareLnurlPayRequest, "tokenIdentifier" | "comment" | "validateSuccessActionUrl" | "conversionOptions" | "feePolicy">>) => PrepareLnurlPayRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<PrepareLnurlPayRequest>;
}>;
export type PrepareLnurlPayResponse = {
    /**
     * The amount for the payment, always denominated in sats, even when a
     * `token_identifier` and conversion are present.
     * When a conversion is present, the token input amount is available in
     * `conversion_estimate.amount_in`.
     */
    amountSats: bigint;
    comment: string | undefined;
    payRequest: LnurlPayRequestDetails;
    /**
     * The fee in satoshis. For `FeesIncluded` operations, this represents the total fee
     * (including potential overpayment).
     */
    feeSats: bigint;
    invoiceDetails: Bolt11InvoiceDetails;
    successAction: SuccessAction | undefined;
    /**
     * When set, the payment will include a token conversion step before sending the payment
     */
    conversionEstimate: ConversionEstimate | undefined;
    /**
     * The fee policy actually applied. May differ from the request — e.g.,
     * LNURL sends with `token_identifier` set + conversion are always
     * `FeesIncluded` (explicit `FeesExcluded` is rejected).
     */
    feePolicy: FeePolicy;
};
/**
 * Generated factory for {@link PrepareLnurlPayResponse} record objects.
 */
export declare const PrepareLnurlPayResponse: Readonly<{
    /**
     * Create a frozen instance of {@link PrepareLnurlPayResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<PrepareLnurlPayResponse> & Required<Omit<PrepareLnurlPayResponse, never>>) => PrepareLnurlPayResponse;
    /**
     * Create a frozen instance of {@link PrepareLnurlPayResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<PrepareLnurlPayResponse> & Required<Omit<PrepareLnurlPayResponse, never>>) => PrepareLnurlPayResponse;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<PrepareLnurlPayResponse>;
}>;
export type PrepareSendPaymentRequest = {
    paymentRequest: PaymentRequest;
    /**
     * The amount to send.
     * Optional for payment requests with embedded amounts (e.g., Spark/Bolt11 invoices with amounts).
     * Required for Spark addresses, Bitcoin addresses, and amountless invoices.
     * Denominated in satoshis for Bitcoin payments, or token base units for token payments.
     */
    amount: U128 | undefined;
    /**
     * Optional token identifier for token payments.
     * Absence indicates that the payment is a Bitcoin payment.
     */
    tokenIdentifier: string | undefined;
    /**
     * If provided, the payment will include a conversion step before sending the payment
     */
    conversionOptions: ConversionOptions | undefined;
    /**
     * How fees are handled. See [`FeePolicy`]. Defaults to `FeesExcluded`.
     *
     * Ignored on cross-chain AMM-conversion sends (whether the conversion was
     * explicitly requested or auto-injected by stable balance) — fees come
     * out of the converted sats. Bolt11 and Bitcoin AMM-conversion sends
     * still respect this field by sizing the conversion to cover fees. The
     * prepare response's `fee_policy` reflects what was actually applied.
     */
    feePolicy: FeePolicy | undefined;
};
/**
 * Generated factory for {@link PrepareSendPaymentRequest} record objects.
 */
export declare const PrepareSendPaymentRequest: Readonly<{
    /**
     * Create a frozen instance of {@link PrepareSendPaymentRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<PrepareSendPaymentRequest> & Required<Omit<PrepareSendPaymentRequest, "amount" | "tokenIdentifier" | "conversionOptions" | "feePolicy">>) => PrepareSendPaymentRequest;
    /**
     * Create a frozen instance of {@link PrepareSendPaymentRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<PrepareSendPaymentRequest> & Required<Omit<PrepareSendPaymentRequest, "amount" | "tokenIdentifier" | "conversionOptions" | "feePolicy">>) => PrepareSendPaymentRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<PrepareSendPaymentRequest>;
}>;
export type PrepareSendPaymentResponse = {
    paymentMethod: SendPaymentMethod;
    /**
     * The amount to be sent, denominated in satoshis for Bitcoin payments
     * (including token-to-Bitcoin conversions), or token base units for token payments.
     * When a conversion is present, the input amount is in
     * `conversion_estimate.amount_in`.
     */
    amount: U128;
    /**
     * Optional token identifier for token payments.
     * Absence indicates that the payment is a Bitcoin payment.
     */
    tokenIdentifier: string | undefined;
    /**
     * When set, the payment will include a conversion step before sending the payment
     */
    conversionEstimate: ConversionEstimate | undefined;
    /**
     * The fee policy actually applied. May differ from the request — e.g.,
     * cross-chain AMM-conversion sends are always `FeesIncluded`.
     */
    feePolicy: FeePolicy;
};
/**
 * Generated factory for {@link PrepareSendPaymentResponse} record objects.
 */
export declare const PrepareSendPaymentResponse: Readonly<{
    /**
     * Create a frozen instance of {@link PrepareSendPaymentResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<PrepareSendPaymentResponse> & Required<Omit<PrepareSendPaymentResponse, never>>) => PrepareSendPaymentResponse;
    /**
     * Create a frozen instance of {@link PrepareSendPaymentResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<PrepareSendPaymentResponse> & Required<Omit<PrepareSendPaymentResponse, never>>) => PrepareSendPaymentResponse;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<PrepareSendPaymentResponse>;
}>;
export type ProvisionalPayment = {
    /**
     * Unique identifier for the payment
     */
    paymentId: string;
    /**
     * Amount in satoshis or token base units
     */
    amount: U128;
    /**
     * Details of the payment
     */
    details: ProvisionalPaymentDetails;
};
/**
 * Generated factory for {@link ProvisionalPayment} record objects.
 */
export declare const ProvisionalPayment: Readonly<{
    /**
     * Create a frozen instance of {@link ProvisionalPayment}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ProvisionalPayment> & Required<Omit<ProvisionalPayment, never>>) => ProvisionalPayment;
    /**
     * Create a frozen instance of {@link ProvisionalPayment}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ProvisionalPayment> & Required<Omit<ProvisionalPayment, never>>) => ProvisionalPayment;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ProvisionalPayment>;
}>;
/**
 * FFI-safe representation of a secp256k1 public key (33 bytes compressed)
 */
export type PublicKeyBytes = {
    bytes: ArrayBuffer;
};
/**
 * Generated factory for {@link PublicKeyBytes} record objects.
 */
export declare const PublicKeyBytes: Readonly<{
    /**
     * Create a frozen instance of {@link PublicKeyBytes}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<PublicKeyBytes> & Required<Omit<PublicKeyBytes, never>>) => PublicKeyBytes;
    /**
     * Create a frozen instance of {@link PublicKeyBytes}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<PublicKeyBytes> & Required<Omit<PublicKeyBytes, never>>) => PublicKeyBytes;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<PublicKeyBytes>;
}>;
/**
 * Denominator in an exchange rate
 */
export type Rate = {
    coin: string;
    value: number;
};
/**
 * Generated factory for {@link Rate} record objects.
 */
export declare const Rate: Readonly<{
    /**
     * Create a frozen instance of {@link Rate}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<Rate> & Required<Omit<Rate, never>>) => Rate;
    /**
     * Create a frozen instance of {@link Rate}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<Rate> & Required<Omit<Rate, never>>) => Rate;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<Rate>;
}>;
export type ReceivePaymentRequest = {
    paymentMethod: ReceivePaymentMethod;
};
/**
 * Generated factory for {@link ReceivePaymentRequest} record objects.
 */
export declare const ReceivePaymentRequest: Readonly<{
    /**
     * Create a frozen instance of {@link ReceivePaymentRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ReceivePaymentRequest> & Required<Omit<ReceivePaymentRequest, never>>) => ReceivePaymentRequest;
    /**
     * Create a frozen instance of {@link ReceivePaymentRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ReceivePaymentRequest> & Required<Omit<ReceivePaymentRequest, never>>) => ReceivePaymentRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ReceivePaymentRequest>;
}>;
export type ReceivePaymentResponse = {
    paymentRequest: string;
    /**
     * Fee to pay to receive the payment
     * Denominated in sats or token base units
     */
    fee: U128;
};
/**
 * Generated factory for {@link ReceivePaymentResponse} record objects.
 */
export declare const ReceivePaymentResponse: Readonly<{
    /**
     * Create a frozen instance of {@link ReceivePaymentResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ReceivePaymentResponse> & Required<Omit<ReceivePaymentResponse, never>>) => ReceivePaymentResponse;
    /**
     * Create a frozen instance of {@link ReceivePaymentResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ReceivePaymentResponse> & Required<Omit<ReceivePaymentResponse, never>>) => ReceivePaymentResponse;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ReceivePaymentResponse>;
}>;
export type RecommendedFees = {
    fastestFee: bigint;
    halfHourFee: bigint;
    hourFee: bigint;
    economyFee: bigint;
    minimumFee: bigint;
};
/**
 * Generated factory for {@link RecommendedFees} record objects.
 */
export declare const RecommendedFees: Readonly<{
    /**
     * Create a frozen instance of {@link RecommendedFees}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<RecommendedFees> & Required<Omit<RecommendedFees, never>>) => RecommendedFees;
    /**
     * Create a frozen instance of {@link RecommendedFees}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<RecommendedFees> & Required<Omit<RecommendedFees, never>>) => RecommendedFees;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<RecommendedFees>;
}>;
export type Record = {
    id: RecordId;
    revision: bigint;
    schemaVersion: string;
    data: Map<string, string>;
};
/**
 * Generated factory for {@link Record} record objects.
 */
export declare const Record: Readonly<{
    /**
     * Create a frozen instance of {@link Record}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<Record> & Required<Omit<Record, never>>) => Record;
    /**
     * Create a frozen instance of {@link Record}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<Record> & Required<Omit<Record, never>>) => Record;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<Record>;
}>;
export type RecordChange = {
    id: RecordId;
    schemaVersion: string;
    updatedFields: Map<string, string>;
    localRevision: bigint;
};
/**
 * Generated factory for {@link RecordChange} record objects.
 */
export declare const RecordChange: Readonly<{
    /**
     * Create a frozen instance of {@link RecordChange}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<RecordChange> & Required<Omit<RecordChange, never>>) => RecordChange;
    /**
     * Create a frozen instance of {@link RecordChange}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<RecordChange> & Required<Omit<RecordChange, never>>) => RecordChange;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<RecordChange>;
}>;
export type RecordId = {
    type: string;
    dataId: string;
};
/**
 * Generated factory for {@link RecordId} record objects.
 */
export declare const RecordId: Readonly<{
    /**
     * Create a frozen instance of {@link RecordId}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<RecordId> & Required<Omit<RecordId, never>>) => RecordId;
    /**
     * Create a frozen instance of {@link RecordId}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<RecordId> & Required<Omit<RecordId, never>>) => RecordId;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<RecordId>;
}>;
/**
 * FFI-safe representation of a recoverable ECDSA signature (65 bytes: 1 recovery byte + 64 signature bytes)
 */
export type RecoverableEcdsaSignatureBytes = {
    bytes: ArrayBuffer;
};
/**
 * Generated factory for {@link RecoverableEcdsaSignatureBytes} record objects.
 */
export declare const RecoverableEcdsaSignatureBytes: Readonly<{
    /**
     * Create a frozen instance of {@link RecoverableEcdsaSignatureBytes}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<RecoverableEcdsaSignatureBytes> & Required<Omit<RecoverableEcdsaSignatureBytes, never>>) => RecoverableEcdsaSignatureBytes;
    /**
     * Create a frozen instance of {@link RecoverableEcdsaSignatureBytes}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<RecoverableEcdsaSignatureBytes> & Required<Omit<RecoverableEcdsaSignatureBytes, never>>) => RecoverableEcdsaSignatureBytes;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<RecoverableEcdsaSignatureBytes>;
}>;
export type RefundDepositRequest = {
    txid: string;
    vout: number;
    destinationAddress: string;
    fee: Fee;
};
/**
 * Generated factory for {@link RefundDepositRequest} record objects.
 */
export declare const RefundDepositRequest: Readonly<{
    /**
     * Create a frozen instance of {@link RefundDepositRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<RefundDepositRequest> & Required<Omit<RefundDepositRequest, never>>) => RefundDepositRequest;
    /**
     * Create a frozen instance of {@link RefundDepositRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<RefundDepositRequest> & Required<Omit<RefundDepositRequest, never>>) => RefundDepositRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<RefundDepositRequest>;
}>;
export type RefundDepositResponse = {
    txId: string;
    txHex: string;
};
/**
 * Generated factory for {@link RefundDepositResponse} record objects.
 */
export declare const RefundDepositResponse: Readonly<{
    /**
     * Create a frozen instance of {@link RefundDepositResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<RefundDepositResponse> & Required<Omit<RefundDepositResponse, never>>) => RefundDepositResponse;
    /**
     * Create a frozen instance of {@link RefundDepositResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<RefundDepositResponse> & Required<Omit<RefundDepositResponse, never>>) => RefundDepositResponse;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<RefundDepositResponse>;
}>;
export type RegisterLightningAddressRequest = {
    username: string;
    description: string | undefined;
};
/**
 * Generated factory for {@link RegisterLightningAddressRequest} record objects.
 */
export declare const RegisterLightningAddressRequest: Readonly<{
    /**
     * Create a frozen instance of {@link RegisterLightningAddressRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<RegisterLightningAddressRequest> & Required<Omit<RegisterLightningAddressRequest, "description">>) => RegisterLightningAddressRequest;
    /**
     * Create a frozen instance of {@link RegisterLightningAddressRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<RegisterLightningAddressRequest> & Required<Omit<RegisterLightningAddressRequest, "description">>) => RegisterLightningAddressRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<RegisterLightningAddressRequest>;
}>;
/**
 * Request shape for [`PasskeyClient::register`].
 */
export type RegisterRequest = {
    /**
     * User-chosen label for the new wallet. Defaults to the configured
     * default label when `None`. Always published to the label
     * store as part of registration.
     */
    label: string | undefined;
    /**
     * Optional list of already-registered credential IDs. Prevents
     * registering the same device twice: when any entry matches a
     * credential already on the device, the platform raises
     * [`crate::passkey::PrfProviderError::CredentialAlreadyExists`]
     * so the host can flip the user to the sign-in path. Unset is
     * treated as empty. Forwarded to [`PrfProvider::create_passkey`].
     */
    excludeCredentials: Array<ArrayBuffer> | undefined;
};
/**
 * Generated factory for {@link RegisterRequest} record objects.
 */
export declare const RegisterRequest: Readonly<{
    /**
     * Create a frozen instance of {@link RegisterRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<RegisterRequest> & Required<Omit<RegisterRequest, "label" | "excludeCredentials">>) => RegisterRequest;
    /**
     * Create a frozen instance of {@link RegisterRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<RegisterRequest> & Required<Omit<RegisterRequest, "label" | "excludeCredentials">>) => RegisterRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<RegisterRequest>;
}>;
/**
 * Response from [`PasskeyClient::register`].
 */
export type RegisterResponse = {
    /**
     * The newly-derived wallet for [`RegisterRequest::label`].
     */
    wallet: Wallet;
    /**
     * The credential the platform just registered. Persist
     * [`PasskeyCredential::credential_id`] to populate
     * `exclude_credentials` on future [`PasskeyClient::register`]
     * calls. Always set on the register path.
     */
    credential: PasskeyCredential | undefined;
};
/**
 * Generated factory for {@link RegisterResponse} record objects.
 */
export declare const RegisterResponse: Readonly<{
    /**
     * Create a frozen instance of {@link RegisterResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<RegisterResponse> & Required<Omit<RegisterResponse, never>>) => RegisterResponse;
    /**
     * Create a frozen instance of {@link RegisterResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<RegisterResponse> & Required<Omit<RegisterResponse, never>>) => RegisterResponse;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<RegisterResponse>;
}>;
/**
 * Request to register a new webhook.
 */
export type RegisterWebhookRequest = {
    /**
     * The URL that will receive webhook notifications.
     */
    url: string;
    /**
     * A secret used for HMAC-SHA256 signature verification of webhook payloads.
     */
    secret: string;
    /**
     * The event types to subscribe to.
     */
    eventTypes: Array<WebhookEventType>;
};
/**
 * Generated factory for {@link RegisterWebhookRequest} record objects.
 */
export declare const RegisterWebhookRequest: Readonly<{
    /**
     * Create a frozen instance of {@link RegisterWebhookRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<RegisterWebhookRequest> & Required<Omit<RegisterWebhookRequest, never>>) => RegisterWebhookRequest;
    /**
     * Create a frozen instance of {@link RegisterWebhookRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<RegisterWebhookRequest> & Required<Omit<RegisterWebhookRequest, never>>) => RegisterWebhookRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<RegisterWebhookRequest>;
}>;
/**
 * Response from registering a webhook.
 */
export type RegisterWebhookResponse = {
    /**
     * The unique identifier of the newly registered webhook.
     */
    webhookId: string;
};
/**
 * Generated factory for {@link RegisterWebhookResponse} record objects.
 */
export declare const RegisterWebhookResponse: Readonly<{
    /**
     * Create a frozen instance of {@link RegisterWebhookResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<RegisterWebhookResponse> & Required<Omit<RegisterWebhookResponse, never>>) => RegisterWebhookResponse;
    /**
     * Create a frozen instance of {@link RegisterWebhookResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<RegisterWebhookResponse> & Required<Omit<RegisterWebhookResponse, never>>) => RegisterWebhookResponse;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<RegisterWebhookResponse>;
}>;
export type RestResponse = {
    status: number;
    body: string;
};
/**
 * Generated factory for {@link RestResponse} record objects.
 */
export declare const RestResponse: Readonly<{
    /**
     * Create a frozen instance of {@link RestResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<RestResponse> & Required<Omit<RestResponse, never>>) => RestResponse;
    /**
     * Create a frozen instance of {@link RestResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<RestResponse> & Required<Omit<RestResponse, never>>) => RestResponse;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<RestResponse>;
}>;
/**
 * FFI-safe representation of a Schnorr signature (64 bytes)
 */
export type SchnorrSignatureBytes = {
    bytes: ArrayBuffer;
};
/**
 * Generated factory for {@link SchnorrSignatureBytes} record objects.
 */
export declare const SchnorrSignatureBytes: Readonly<{
    /**
     * Create a frozen instance of {@link SchnorrSignatureBytes}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<SchnorrSignatureBytes> & Required<Omit<SchnorrSignatureBytes, never>>) => SchnorrSignatureBytes;
    /**
     * Create a frozen instance of {@link SchnorrSignatureBytes}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<SchnorrSignatureBytes> & Required<Omit<SchnorrSignatureBytes, never>>) => SchnorrSignatureBytes;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<SchnorrSignatureBytes>;
}>;
/**
 * Settings for [`new_shared_sdk_context`]. All fields are optional; the defaults
 * match the single-SDK happy path.
 */
export type SdkContextConfig = {
    /**
     * Network the shared resources target. Defaults to [`Network::Mainnet`].
     * Used to gate the partner JWT header provider — only constructed on
     * Mainnet, since Regtest has no JWT-issuing Breez endpoint.
     */
    network: Network;
    /**
     * Breez API key. When set together with `network == Mainnet`, the
     * context constructs a shared partner JWT header provider that all
     * SDKs built from this context will attach to their SO requests.
     */
    apiKey: string | undefined;
    /**
     * Number of gRPC connections per Spark operator. `None` (or `Some(1)`)
     * keeps a single connection per operator (the right choice for most
     * deployments); `Some(n)` opens `n` channels per operator and balances
     * requests across them.
     */
    connectionsPerOperator: /*u32*/ number | undefined;
    /**
     * Shared storage backend for SDKs built from this context. When set,
     * every SDK built from the context reuses it (and its database
     * connection pool). Construct via
     * [`default_storage`](crate::default_storage),
     * [`postgres_storage`](crate::postgres_storage),
     * [`mysql_storage`](crate::mysql_storage) or
     * [`custom_storage`](crate::custom_storage).
     */
    storage: StorageBackend | undefined;
};
/**
 * Generated factory for {@link SdkContextConfig} record objects.
 */
export declare const SdkContextConfig: Readonly<{
    /**
     * Create a frozen instance of {@link SdkContextConfig}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<SdkContextConfig> & Required<Omit<SdkContextConfig, "apiKey" | "connectionsPerOperator" | "storage">>) => SdkContextConfig;
    /**
     * Create a frozen instance of {@link SdkContextConfig}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<SdkContextConfig> & Required<Omit<SdkContextConfig, "apiKey" | "connectionsPerOperator" | "storage">>) => SdkContextConfig;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<SdkContextConfig>;
}>;
/**
 * FFI-safe representation of a private key (32 bytes)
 */
export type SecretBytes = {
    bytes: ArrayBuffer;
};
/**
 * Generated factory for {@link SecretBytes} record objects.
 */
export declare const SecretBytes: Readonly<{
    /**
     * Create a frozen instance of {@link SecretBytes}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<SecretBytes> & Required<Omit<SecretBytes, never>>) => SecretBytes;
    /**
     * Create a frozen instance of {@link SecretBytes}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<SecretBytes> & Required<Omit<SecretBytes, never>>) => SecretBytes;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<SecretBytes>;
}>;
export type SendOnchainFeeQuote = {
    id: string;
    expiresAt: bigint;
    speedFast: SendOnchainSpeedFeeQuote;
    speedMedium: SendOnchainSpeedFeeQuote;
    speedSlow: SendOnchainSpeedFeeQuote;
};
/**
 * Generated factory for {@link SendOnchainFeeQuote} record objects.
 */
export declare const SendOnchainFeeQuote: Readonly<{
    /**
     * Create a frozen instance of {@link SendOnchainFeeQuote}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<SendOnchainFeeQuote> & Required<Omit<SendOnchainFeeQuote, never>>) => SendOnchainFeeQuote;
    /**
     * Create a frozen instance of {@link SendOnchainFeeQuote}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<SendOnchainFeeQuote> & Required<Omit<SendOnchainFeeQuote, never>>) => SendOnchainFeeQuote;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<SendOnchainFeeQuote>;
}>;
export type SendOnchainSpeedFeeQuote = {
    userFeeSat: bigint;
    l1BroadcastFeeSat: bigint;
};
/**
 * Generated factory for {@link SendOnchainSpeedFeeQuote} record objects.
 */
export declare const SendOnchainSpeedFeeQuote: Readonly<{
    /**
     * Create a frozen instance of {@link SendOnchainSpeedFeeQuote}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<SendOnchainSpeedFeeQuote> & Required<Omit<SendOnchainSpeedFeeQuote, never>>) => SendOnchainSpeedFeeQuote;
    /**
     * Create a frozen instance of {@link SendOnchainSpeedFeeQuote}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<SendOnchainSpeedFeeQuote> & Required<Omit<SendOnchainSpeedFeeQuote, never>>) => SendOnchainSpeedFeeQuote;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<SendOnchainSpeedFeeQuote>;
}>;
export type SendPaymentRequest = {
    prepareResponse: PrepareSendPaymentResponse;
    options: SendPaymentOptions | undefined;
    /**
     * The optional idempotency key for all Spark based transfers (excludes token payments
     * and cross-chain sends).
     * If set, providing the same idempotency key for multiple requests will ensure that only one
     * payment is made. If an idempotency key is re-used, the same payment will be returned.
     * The idempotency key must be a valid UUID.
     */
    idempotencyKey: string | undefined;
};
/**
 * Generated factory for {@link SendPaymentRequest} record objects.
 */
export declare const SendPaymentRequest: Readonly<{
    /**
     * Create a frozen instance of {@link SendPaymentRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<SendPaymentRequest> & Required<Omit<SendPaymentRequest, "options" | "idempotencyKey">>) => SendPaymentRequest;
    /**
     * Create a frozen instance of {@link SendPaymentRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<SendPaymentRequest> & Required<Omit<SendPaymentRequest, "options" | "idempotencyKey">>) => SendPaymentRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<SendPaymentRequest>;
}>;
export type SendPaymentResponse = {
    payment: Payment;
};
/**
 * Generated factory for {@link SendPaymentResponse} record objects.
 */
export declare const SendPaymentResponse: Readonly<{
    /**
     * Create a frozen instance of {@link SendPaymentResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<SendPaymentResponse> & Required<Omit<SendPaymentResponse, never>>) => SendPaymentResponse;
    /**
     * Create a frozen instance of {@link SendPaymentResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<SendPaymentResponse> & Required<Omit<SendPaymentResponse, never>>) => SendPaymentResponse;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<SendPaymentResponse>;
}>;
/**
 * Cached authentication session for a single backend service identity.
 */
export type Session = {
    token: string;
    expiration: bigint;
};
/**
 * Generated factory for {@link Session} record objects.
 */
export declare const Session: Readonly<{
    /**
     * Create a frozen instance of {@link Session}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<Session> & Required<Omit<Session, never>>) => Session;
    /**
     * Create a frozen instance of {@link Session}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<Session> & Required<Omit<Session, never>>) => Session;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<Session>;
}>;
export type SetLnurlMetadataItem = {
    paymentHash: string;
    senderComment: string | undefined;
    nostrZapRequest: string | undefined;
    nostrZapReceipt: string | undefined;
};
/**
 * Generated factory for {@link SetLnurlMetadataItem} record objects.
 */
export declare const SetLnurlMetadataItem: Readonly<{
    /**
     * Create a frozen instance of {@link SetLnurlMetadataItem}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<SetLnurlMetadataItem> & Required<Omit<SetLnurlMetadataItem, never>>) => SetLnurlMetadataItem;
    /**
     * Create a frozen instance of {@link SetLnurlMetadataItem}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<SetLnurlMetadataItem> & Required<Omit<SetLnurlMetadataItem, never>>) => SetLnurlMetadataItem;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<SetLnurlMetadataItem>;
}>;
/**
 * Request for [`crate::passkey::Passkey::setup_wallet`].
 */
export type SetupWalletRequest = {
    /**
     * Wallet label. Unset uses the configured default label.
     */
    label: string | undefined;
    /**
     * Publish the label to Nostr after deriving. Leave false for
     * speculative derivations (cold restore).
     */
    publishLabel: boolean;
    /**
     * Restrict the assertion to these credential IDs. Useful for
     * server-driven flows that resolve the credential set out-of-band.
     */
    allowCredentials: Array<ArrayBuffer>;
    /**
     * Prefer credentials already on this device over the cross-device
     * picker. Unset uses the platform default.
     */
    preferImmediatelyAvailableCredentials: boolean | undefined;
};
/**
 * Generated factory for {@link SetupWalletRequest} record objects.
 */
export declare const SetupWalletRequest: Readonly<{
    /**
     * Create a frozen instance of {@link SetupWalletRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<SetupWalletRequest> & Required<Omit<SetupWalletRequest, "label" | "allowCredentials" | "preferImmediatelyAvailableCredentials" | "publishLabel">>) => SetupWalletRequest;
    /**
     * Create a frozen instance of {@link SetupWalletRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<SetupWalletRequest> & Required<Omit<SetupWalletRequest, "label" | "allowCredentials" | "preferImmediatelyAvailableCredentials" | "publishLabel">>) => SetupWalletRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<SetupWalletRequest>;
}>;
/**
 * Request shape for [`PasskeyClient::sign_in`].
 */
export type SignInRequest = {
    /**
     * When present, the fast path: one ceremony, no label-store
     * query. When absent, triggers discovery: derives the configured
     * default label and also returns the user's full label set in
     * [`SignInResponse::labels`].
     */
    label: string | undefined;
    /**
     * Optional credential IDs the assertion is restricted to
     * (reauthentication of a known user). Unset or empty lets the OS
     * pick any matching credential for this RP. Forwarded to
     * [`crate::passkey::DeriveSeedsRequest::allow_credentials`].
     */
    allowCredentials: Array<ArrayBuffer> | undefined;
    /**
     * Forwarded to
     * [`crate::passkey::DeriveSeedsRequest::prefer_immediately_available_credentials`].
     */
    preferImmediatelyAvailableCredentials: boolean | undefined;
};
/**
 * Generated factory for {@link SignInRequest} record objects.
 */
export declare const SignInRequest: Readonly<{
    /**
     * Create a frozen instance of {@link SignInRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<SignInRequest> & Required<Omit<SignInRequest, "label" | "allowCredentials" | "preferImmediatelyAvailableCredentials">>) => SignInRequest;
    /**
     * Create a frozen instance of {@link SignInRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<SignInRequest> & Required<Omit<SignInRequest, "label" | "allowCredentials" | "preferImmediatelyAvailableCredentials">>) => SignInRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<SignInRequest>;
}>;
/**
 * Response from [`PasskeyClient::sign_in`].
 */
export type SignInResponse = {
    wallet: Wallet;
    /**
     * Empty on the fast path. Populated on discovery (or empty if
     * the label store was unreachable).
     */
    labels: Array<string>;
    /**
     * The credential the user signed in with, when the underlying
     * [`PrfProvider`] surfaces it. `None` for providers that don't
     * expose this signal (CLI / file-backed / hardware). Only
     * `credential_id` is set: a sign-in assertion carries no
     * attestation.
     */
    credential: PasskeyCredential | undefined;
};
/**
 * Generated factory for {@link SignInResponse} record objects.
 */
export declare const SignInResponse: Readonly<{
    /**
     * Create a frozen instance of {@link SignInResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<SignInResponse> & Required<Omit<SignInResponse, never>>) => SignInResponse;
    /**
     * Create a frozen instance of {@link SignInResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<SignInResponse> & Required<Omit<SignInResponse, never>>) => SignInResponse;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<SignInResponse>;
}>;
export type SignMessageRequest = {
    message: string;
    /**
     * If true, the signature will be encoded in compact format instead of DER format
     */
    compact: boolean;
};
/**
 * Generated factory for {@link SignMessageRequest} record objects.
 */
export declare const SignMessageRequest: Readonly<{
    /**
     * Create a frozen instance of {@link SignMessageRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<SignMessageRequest> & Required<Omit<SignMessageRequest, never>>) => SignMessageRequest;
    /**
     * Create a frozen instance of {@link SignMessageRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<SignMessageRequest> & Required<Omit<SignMessageRequest, never>>) => SignMessageRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<SignMessageRequest>;
}>;
export type SignMessageResponse = {
    pubkey: string;
    /**
     * The DER or compact hex encoded signature
     */
    signature: string;
};
/**
 * Generated factory for {@link SignMessageResponse} record objects.
 */
export declare const SignMessageResponse: Readonly<{
    /**
     * Create a frozen instance of {@link SignMessageResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<SignMessageResponse> & Required<Omit<SignMessageResponse, never>>) => SignMessageResponse;
    /**
     * Create a frozen instance of {@link SignMessageResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<SignMessageResponse> & Required<Omit<SignMessageResponse, never>>) => SignMessageResponse;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<SignMessageResponse>;
}>;
export type SilentPaymentAddressDetails = {
    address: string;
    network: BitcoinNetwork;
    source: PaymentRequestSource;
};
/**
 * Generated factory for {@link SilentPaymentAddressDetails} record objects.
 */
export declare const SilentPaymentAddressDetails: Readonly<{
    /**
     * Create a frozen instance of {@link SilentPaymentAddressDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<SilentPaymentAddressDetails> & Required<Omit<SilentPaymentAddressDetails, never>>) => SilentPaymentAddressDetails;
    /**
     * Create a frozen instance of {@link SilentPaymentAddressDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<SilentPaymentAddressDetails> & Required<Omit<SilentPaymentAddressDetails, never>>) => SilentPaymentAddressDetails;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<SilentPaymentAddressDetails>;
}>;
export type SparkAddressDetails = {
    /**
     * The raw address string
     */
    address: string;
    /**
     * The identity public key of the address owner
     */
    identityPublicKey: string;
    network: BitcoinNetwork;
    source: PaymentRequestSource;
};
/**
 * Generated factory for {@link SparkAddressDetails} record objects.
 */
export declare const SparkAddressDetails: Readonly<{
    /**
     * Create a frozen instance of {@link SparkAddressDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<SparkAddressDetails> & Required<Omit<SparkAddressDetails, never>>) => SparkAddressDetails;
    /**
     * Create a frozen instance of {@link SparkAddressDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<SparkAddressDetails> & Required<Omit<SparkAddressDetails, never>>) => SparkAddressDetails;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<SparkAddressDetails>;
}>;
/**
 * Configuration for a custom Spark environment.
 *
 * When set on [`Config`], overrides the default Spark operator pool,
 * service provider, threshold, and token settings. This allows connecting
 * to alternative Spark deployments (e.g. dev/staging environments).
 */
export type SparkConfig = {
    /**
     * Hex-encoded identifier of the coordinator operator.
     */
    coordinatorIdentifier: string;
    /**
     * The FROST signing threshold (e.g. 2 of 3).
     */
    threshold: number;
    /**
     * The set of signing operators.
     */
    signingOperators: Array<SparkSigningOperator>;
    /**
     * Service provider (SSP) configuration.
     */
    sspConfig: SparkSspConfig;
    /**
     * Expected bond amount in sats for token withdrawals.
     */
    expectedWithdrawBondSats: bigint;
    /**
     * Expected relative block locktime for token withdrawals.
     */
    expectedWithdrawRelativeBlockLocktime: bigint;
};
/**
 * Generated factory for {@link SparkConfig} record objects.
 */
export declare const SparkConfig: Readonly<{
    /**
     * Create a frozen instance of {@link SparkConfig}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<SparkConfig> & Required<Omit<SparkConfig, never>>) => SparkConfig;
    /**
     * Create a frozen instance of {@link SparkConfig}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<SparkConfig> & Required<Omit<SparkConfig, never>>) => SparkConfig;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<SparkConfig>;
}>;
export type SparkHtlcDetails = {
    /**
     * The payment hash of the HTLC
     */
    paymentHash: string;
    /**
     * The preimage of the HTLC. Empty until receiver has released it.
     */
    preimage: string | undefined;
    /**
     * The expiry time of the HTLC as a unix timestamp in seconds
     */
    expiryTime: bigint;
    /**
     * The HTLC status
     */
    status: SparkHtlcStatus;
};
/**
 * Generated factory for {@link SparkHtlcDetails} record objects.
 */
export declare const SparkHtlcDetails: Readonly<{
    /**
     * Create a frozen instance of {@link SparkHtlcDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<SparkHtlcDetails> & Required<Omit<SparkHtlcDetails, never>>) => SparkHtlcDetails;
    /**
     * Create a frozen instance of {@link SparkHtlcDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<SparkHtlcDetails> & Required<Omit<SparkHtlcDetails, never>>) => SparkHtlcDetails;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<SparkHtlcDetails>;
}>;
export type SparkHtlcOptions = {
    /**
     * The payment hash of the HTLC. The receiver will need to provide the associated preimage to claim it.
     */
    paymentHash: string;
    /**
     * The duration of the HTLC in seconds.
     * After this time, the HTLC will be returned.
     */
    expiryDurationSecs: bigint;
};
/**
 * Generated factory for {@link SparkHtlcOptions} record objects.
 */
export declare const SparkHtlcOptions: Readonly<{
    /**
     * Create a frozen instance of {@link SparkHtlcOptions}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<SparkHtlcOptions> & Required<Omit<SparkHtlcOptions, never>>) => SparkHtlcOptions;
    /**
     * Create a frozen instance of {@link SparkHtlcOptions}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<SparkHtlcOptions> & Required<Omit<SparkHtlcOptions, never>>) => SparkHtlcOptions;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<SparkHtlcOptions>;
}>;
export type SparkInvoiceDetails = {
    /**
     * The raw invoice string
     */
    invoice: string;
    /**
     * The identity public key of the invoice issuer
     */
    identityPublicKey: string;
    network: BitcoinNetwork;
    /**
     * Optional amount denominated in sats if `token_identifier` is absent, otherwise in the token base units
     */
    amount: U128 | undefined;
    /**
     * The token identifier of the token payment. Absence indicates a Bitcoin payment.
     */
    tokenIdentifier: string | undefined;
    /**
     * Optional expiry time as a unix timestamp in seconds. If not provided, the invoice will never expire.
     */
    expiryTime: /*u64*/ bigint | undefined;
    /**
     * Optional description.
     */
    description: string | undefined;
    /**
     * If set, the invoice may only be fulfilled by a payer with this public key.
     */
    senderPublicKey: string | undefined;
};
/**
 * Generated factory for {@link SparkInvoiceDetails} record objects.
 */
export declare const SparkInvoiceDetails: Readonly<{
    /**
     * Create a frozen instance of {@link SparkInvoiceDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<SparkInvoiceDetails> & Required<Omit<SparkInvoiceDetails, never>>) => SparkInvoiceDetails;
    /**
     * Create a frozen instance of {@link SparkInvoiceDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<SparkInvoiceDetails> & Required<Omit<SparkInvoiceDetails, never>>) => SparkInvoiceDetails;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<SparkInvoiceDetails>;
}>;
export type SparkInvoicePaymentDetails = {
    /**
     * Represents the spark invoice description
     */
    description: string | undefined;
    /**
     * The raw spark invoice string
     */
    invoice: string;
};
/**
 * Generated factory for {@link SparkInvoicePaymentDetails} record objects.
 */
export declare const SparkInvoicePaymentDetails: Readonly<{
    /**
     * Create a frozen instance of {@link SparkInvoicePaymentDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<SparkInvoicePaymentDetails> & Required<Omit<SparkInvoicePaymentDetails, never>>) => SparkInvoicePaymentDetails;
    /**
     * Create a frozen instance of {@link SparkInvoicePaymentDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<SparkInvoicePaymentDetails> & Required<Omit<SparkInvoicePaymentDetails, never>>) => SparkInvoicePaymentDetails;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<SparkInvoicePaymentDetails>;
}>;
/**
 * A Spark signing operator.
 */
export type SparkSigningOperator = {
    /**
     * Sequential operator ID (0-indexed).
     */
    id: number;
    /**
     * Hex-encoded 32-byte FROST identifier.
     */
    identifier: string;
    /**
     * gRPC address of the operator (e.g. `https://0.spark.lightspark.com`).
     */
    address: string;
    /**
     * Hex-encoded compressed public key of the operator.
     */
    identityPublicKey: string;
    /**
     * Optional PEM-encoded CA certificate for TLS verification.
     * When set, the SDK uses this CA to verify the operator's TLS certificate
     * instead of the system/default roots. Useful for local development with
     * self-signed certificates.
     */
    caCertPem: string | undefined;
};
/**
 * Generated factory for {@link SparkSigningOperator} record objects.
 */
export declare const SparkSigningOperator: Readonly<{
    /**
     * Create a frozen instance of {@link SparkSigningOperator}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<SparkSigningOperator> & Required<Omit<SparkSigningOperator, never>>) => SparkSigningOperator;
    /**
     * Create a frozen instance of {@link SparkSigningOperator}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<SparkSigningOperator> & Required<Omit<SparkSigningOperator, never>>) => SparkSigningOperator;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<SparkSigningOperator>;
}>;
/**
 * Configuration for the Spark Service Provider (SSP).
 */
export type SparkSspConfig = {
    /**
     * Base URL of the SSP GraphQL API.
     */
    baseUrl: string;
    /**
     * Hex-encoded compressed public key of the SSP.
     */
    identityPublicKey: string;
    /**
     * Optional GraphQL schema endpoint path (e.g. "graphql/spark/rc").
     * Defaults to the hardcoded schema endpoint if not set.
     */
    schemaEndpoint: string | undefined;
};
/**
 * Generated factory for {@link SparkSspConfig} record objects.
 */
export declare const SparkSspConfig: Readonly<{
    /**
     * Create a frozen instance of {@link SparkSspConfig}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<SparkSspConfig> & Required<Omit<SparkSspConfig, never>>) => SparkSspConfig;
    /**
     * Create a frozen instance of {@link SparkSspConfig}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<SparkSspConfig> & Required<Omit<SparkSspConfig, never>>) => SparkSspConfig;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<SparkSspConfig>;
}>;
/**
 * The status of the Spark network services relevant to the SDK.
 */
export type SparkStatus = {
    /**
     * The worst status across all relevant services.
     */
    status: ServiceStatus;
    /**
     * The last time the status was updated, as a unix timestamp in seconds.
     */
    lastUpdated: bigint;
};
/**
 * Generated factory for {@link SparkStatus} record objects.
 */
export declare const SparkStatus: Readonly<{
    /**
     * Create a frozen instance of {@link SparkStatus}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<SparkStatus> & Required<Omit<SparkStatus, never>>) => SparkStatus;
    /**
     * Create a frozen instance of {@link SparkStatus}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<SparkStatus> & Required<Omit<SparkStatus, never>>) => SparkStatus;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<SparkStatus>;
}>;
/**
 * Configuration for automatic conversion of Bitcoin to stable tokens.
 *
 * When configured, the SDK automatically monitors the Bitcoin balance after each
 * wallet sync. When the balance exceeds the configured threshold plus the reserved
 * amount, the SDK automatically converts the excess balance (above the reserve)
 * to the active stable token.
 *
 * When the balance is held in a stable token, Bitcoin payments can still be sent.
 * The SDK automatically detects when there's not enough Bitcoin balance to cover a
 * payment and auto-populates the token-to-Bitcoin conversion options to facilitate
 * the payment.
 *
 * The active token can be changed at runtime via [`UpdateUserSettingsRequest`].
 */
export type StableBalanceConfig = {
    /**
     * Available tokens that can be used for stable balance.
     */
    tokens: Array<StableBalanceToken>;
    /**
     * The label of the token to activate by default.
     *
     * If `None`, stable balance starts deactivated. The user can activate it
     * at runtime via [`UpdateUserSettingsRequest`]. If a user setting is cached
     * locally, it takes precedence over this default.
     */
    defaultActiveLabel: string | undefined;
    /**
     * The minimum sats balance that triggers auto-conversion.
     *
     * If not provided, uses the minimum from conversion limits.
     * If provided but less than the conversion limit minimum, the limit minimum is used.
     */
    thresholdSats: /*u64*/ bigint | undefined;
    /**
     * Maximum slippage in basis points (1/100 of a percent).
     *
     * Defaults to 10 bps (0.1%) if not set.
     */
    maxSlippageBps: /*u32*/ number | undefined;
};
/**
 * Generated factory for {@link StableBalanceConfig} record objects.
 */
export declare const StableBalanceConfig: Readonly<{
    /**
     * Create a frozen instance of {@link StableBalanceConfig}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<StableBalanceConfig> & Required<Omit<StableBalanceConfig, "maxSlippageBps" | "defaultActiveLabel" | "thresholdSats">>) => StableBalanceConfig;
    /**
     * Create a frozen instance of {@link StableBalanceConfig}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<StableBalanceConfig> & Required<Omit<StableBalanceConfig, "maxSlippageBps" | "defaultActiveLabel" | "thresholdSats">>) => StableBalanceConfig;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<StableBalanceConfig>;
}>;
/**
 * A stable token that can be used for automatic balance conversion.
 */
export type StableBalanceToken = {
    /**
     * Integrator-defined display label for the token, e.g. "USD".
     *
     * This is a short, human-readable name set by the integrator for display purposes.
     * It is **not** a canonical Spark token ticker — it has no protocol-level meaning.
     * Labels must be unique within the [`StableBalanceConfig::tokens`] list.
     */
    label: string;
    /**
     * The full token identifier string used for conversions.
     */
    tokenIdentifier: string;
};
/**
 * Generated factory for {@link StableBalanceToken} record objects.
 */
export declare const StableBalanceToken: Readonly<{
    /**
     * Create a frozen instance of {@link StableBalanceToken}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<StableBalanceToken> & Required<Omit<StableBalanceToken, never>>) => StableBalanceToken;
    /**
     * Create a frozen instance of {@link StableBalanceToken}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<StableBalanceToken> & Required<Omit<StableBalanceToken, never>>) => StableBalanceToken;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<StableBalanceToken>;
}>;
/**
 * Storage-internal variant of [`ListPaymentsRequest`] that uses
 * [`StoragePaymentDetailsFilter`] instead of the public [`PaymentDetailsFilter`].
 */
export type StorageListPaymentsRequest = {
    typeFilter: Array<PaymentType> | undefined;
    statusFilter: Array<PaymentStatus> | undefined;
    assetFilter: AssetFilter | undefined;
    paymentDetailsFilter: Array<StoragePaymentDetailsFilter> | undefined;
    fromTimestamp: /*u64*/ bigint | undefined;
    toTimestamp: /*u64*/ bigint | undefined;
    offset: /*u32*/ number | undefined;
    limit: /*u32*/ number | undefined;
    sortAscending: boolean | undefined;
};
/**
 * Generated factory for {@link StorageListPaymentsRequest} record objects.
 */
export declare const StorageListPaymentsRequest: Readonly<{
    /**
     * Create a frozen instance of {@link StorageListPaymentsRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<StorageListPaymentsRequest> & Required<Omit<StorageListPaymentsRequest, "offset" | "limit" | "typeFilter" | "statusFilter" | "assetFilter" | "paymentDetailsFilter" | "fromTimestamp" | "toTimestamp" | "sortAscending">>) => StorageListPaymentsRequest;
    /**
     * Create a frozen instance of {@link StorageListPaymentsRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<StorageListPaymentsRequest> & Required<Omit<StorageListPaymentsRequest, "offset" | "limit" | "typeFilter" | "statusFilter" | "assetFilter" | "paymentDetailsFilter" | "fromTimestamp" | "toTimestamp" | "sortAscending">>) => StorageListPaymentsRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<StorageListPaymentsRequest>;
}>;
/**
 * A cross-chain swap row as persisted and synced. Shared across providers
 * (Boltz, Orchestra, future) so each provider's adapter writes opaque
 * JSON into `data` and (optionally) opaque ciphertext into `secrets`.
 *
 * For providers with money-critical secrets, the adapter lifts them out of
 * the swap JSON, ECIES-encrypts them, and carries only the ciphertext in
 * `secrets`. The storage layer treats both fields as opaque, so it needs
 * no signer.
 */
export type StoredCrossChainSwap = {
    /**
     * Provider tag (e.g. `"boltz"`, `"orchestra"`).
     */
    provider: string;
    /**
     * Provider-scoped swap id (boltz swap id, orchestra quote-or-order id).
     */
    id: string;
    /**
     * Lifted from the underlying swap's terminal flag into an indexed column
     * so `list_active_cross_chain_swaps` filters without parsing `data`.
     */
    isTerminal: boolean;
    /**
     * Lifted from the underlying swap's `updated_at` into a column so the
     * row's freshness is inspectable without parsing `data`.
     */
    updatedAt: bigint;
    /**
     * Serialized JSON owned by the cross-chain provider's storage adapter.
     */
    data: string;
    /**
     * Base64 of the ECIES ciphertext of the provider's lifted secrets.
     * Empty for providers with no money-critical secrets to protect at rest.
     */
    secrets: string;
};
/**
 * Generated factory for {@link StoredCrossChainSwap} record objects.
 */
export declare const StoredCrossChainSwap: Readonly<{
    /**
     * Create a frozen instance of {@link StoredCrossChainSwap}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<StoredCrossChainSwap> & Required<Omit<StoredCrossChainSwap, never>>) => StoredCrossChainSwap;
    /**
     * Create a frozen instance of {@link StoredCrossChainSwap}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<StoredCrossChainSwap> & Required<Omit<StoredCrossChainSwap, never>>) => StoredCrossChainSwap;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<StoredCrossChainSwap>;
}>;
/**
 * Settings for the symbol representation of a currency
 */
export type Symbol = {
    grapheme: string | undefined;
    template: string | undefined;
    rtl: boolean | undefined;
    position: /*u32*/ number | undefined;
};
/**
 * Generated factory for {@link Symbol} record objects.
 */
export declare const Symbol: Readonly<{
    /**
     * Create a frozen instance of {@link Symbol}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<Symbol> & Required<Omit<Symbol, never>>) => Symbol;
    /**
     * Create a frozen instance of {@link Symbol}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<Symbol> & Required<Omit<Symbol, never>>) => Symbol;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<Symbol>;
}>;
/**
 * Request to sync the wallet with the Spark network
 */
export type SyncWalletRequest = {};
/**
 * Generated factory for {@link SyncWalletRequest} record objects.
 */
export declare const SyncWalletRequest: Readonly<{
    /**
     * Create a frozen instance of {@link SyncWalletRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<SyncWalletRequest> & Required<Omit<SyncWalletRequest, never>>) => SyncWalletRequest;
    /**
     * Create a frozen instance of {@link SyncWalletRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<SyncWalletRequest> & Required<Omit<SyncWalletRequest, never>>) => SyncWalletRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<SyncWalletRequest>;
}>;
/**
 * Response from synchronizing the wallet
 */
export type SyncWalletResponse = {};
/**
 * Generated factory for {@link SyncWalletResponse} record objects.
 */
export declare const SyncWalletResponse: Readonly<{
    /**
     * Create a frozen instance of {@link SyncWalletResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<SyncWalletResponse> & Required<Omit<SyncWalletResponse, never>>) => SyncWalletResponse;
    /**
     * Create a frozen instance of {@link SyncWalletResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<SyncWalletResponse> & Required<Omit<SyncWalletResponse, never>>) => SyncWalletResponse;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<SyncWalletResponse>;
}>;
export type TokenBalance = {
    balance: U128;
    tokenMetadata: TokenMetadata;
};
/**
 * Generated factory for {@link TokenBalance} record objects.
 */
export declare const TokenBalance: Readonly<{
    /**
     * Create a frozen instance of {@link TokenBalance}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<TokenBalance> & Required<Omit<TokenBalance, never>>) => TokenBalance;
    /**
     * Create a frozen instance of {@link TokenBalance}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<TokenBalance> & Required<Omit<TokenBalance, never>>) => TokenBalance;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<TokenBalance>;
}>;
export type TokenMetadata = {
    identifier: string;
    /**
     * Hex representation of the issuer public key
     */
    issuerPublicKey: string;
    name: string;
    ticker: string;
    /**
     * Number of decimals the token uses
     */
    decimals: number;
    maxSupply: U128;
    isFreezable: boolean;
};
/**
 * Generated factory for {@link TokenMetadata} record objects.
 */
export declare const TokenMetadata: Readonly<{
    /**
     * Create a frozen instance of {@link TokenMetadata}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<TokenMetadata> & Required<Omit<TokenMetadata, never>>) => TokenMetadata;
    /**
     * Create a frozen instance of {@link TokenMetadata}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<TokenMetadata> & Required<Omit<TokenMetadata, never>>) => TokenMetadata;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<TokenMetadata>;
}>;
/**
 * Configuration for token-output optimization.
 */
export type TokenOptimizationConfig = {
    /**
     * Whether automatic token-output consolidation is enabled.
     *
     * If set to true, the SDK will periodically consolidate a token's outputs
     * once their count exceeds [`Self::min_outputs_threshold`]. Otherwise, no
     * automatic consolidation is performed.
     *
     * Default value is true.
     */
    autoEnabled: boolean;
    /**
     * Number of token outputs to produce when token-output auto-consolidation
     * fires.
     *
     * Instead of collapsing a token's outputs into a single output (which
     * serializes subsequent payments), the SDK splits the consolidated balance
     * across this many outputs of roughly equal value. Higher values preserve
     * concurrency for parallel sends at the cost of a slightly larger output
     * set.
     *
     * Must be >= 1 and strictly less than [`Self::min_outputs_threshold`].
     *
     * Default value is 5.
     */
    targetOutputCount: number;
    /**
     * Output count that triggers per-token auto-consolidation.
     *
     * Auto-consolidation triggers for a token when its available output count
     * strictly exceeds this threshold.
     *
     * Must be greater than 1.
     *
     * Default value is 50.
     */
    minOutputsThreshold: number;
};
/**
 * Generated factory for {@link TokenOptimizationConfig} record objects.
 */
export declare const TokenOptimizationConfig: Readonly<{
    /**
     * Create a frozen instance of {@link TokenOptimizationConfig}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<TokenOptimizationConfig> & Required<Omit<TokenOptimizationConfig, never>>) => TokenOptimizationConfig;
    /**
     * Create a frozen instance of {@link TokenOptimizationConfig}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<TokenOptimizationConfig> & Required<Omit<TokenOptimizationConfig, never>>) => TokenOptimizationConfig;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<TokenOptimizationConfig>;
}>;
/**
 * Authorization from the current owner granting a specific new owner the
 * right to take over a username. Produced by
 * [`BreezSdk::authorize_lightning_address_transfer`] and handed to the new
 * owner, who passes it to [`BreezSdk::claim_lightning_address_transfer`]. It
 * fully describes the transfer, so the new owner needs nothing else to claim.
 */
export type TransferAuthorization = {
    /**
     * The username being handed over.
     */
    username: string;
    /**
     * The current owner's public key.
     */
    pubkey: string;
    /**
     * The current owner's signature authorizing the transfer.
     */
    signature: string;
};
/**
 * Generated factory for {@link TransferAuthorization} record objects.
 */
export declare const TransferAuthorization: Readonly<{
    /**
     * Create a frozen instance of {@link TransferAuthorization}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<TransferAuthorization> & Required<Omit<TransferAuthorization, never>>) => TransferAuthorization;
    /**
     * Create a frozen instance of {@link TransferAuthorization}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<TransferAuthorization> & Required<Omit<TransferAuthorization, never>>) => TransferAuthorization;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<TransferAuthorization>;
}>;
export type TurnkeyConfig = {
    /**
     * Turnkey API base URL. Unset uses `https://api.turnkey.com`.
     */
    baseUrl: string | undefined;
    /**
     * Organization (or sub-organization) id that owns the wallet.
     */
    organizationId: string;
    /**
     * API public key (compressed, hex), registered with the organization.
     */
    apiPublicKey: string;
    /**
     * API private key (hex) used to stamp requests.
     */
    apiPrivateKey: string;
    /**
     * Id of the Spark wallet to sign with.
     */
    walletId: string;
    /**
     * Network the wallet operates on; selects the Spark address format
     * (mainnet or regtest) used for Spark-protocol and Schnorr signing.
     */
    network: Network;
    /**
     * Spark account number: the `{account}` in every derivation path
     * (`m/8797555'/{account}'/...`). Unset uses the network default, matching
     * the seed-based signer, so the same wallet seed derives the same keys on
     * either backend.
     */
    accountNumber: /*u32*/ number | undefined;
    /**
     * Retry policy for Turnkey requests. Unset uses the default policy.
     */
    retry: TurnkeyRetryConfig | undefined;
};
/**
 * Generated factory for {@link TurnkeyConfig} record objects.
 */
export declare const TurnkeyConfig: Readonly<{
    /**
     * Create a frozen instance of {@link TurnkeyConfig}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<TurnkeyConfig> & Required<Omit<TurnkeyConfig, never>>) => TurnkeyConfig;
    /**
     * Create a frozen instance of {@link TurnkeyConfig}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<TurnkeyConfig> & Required<Omit<TurnkeyConfig, never>>) => TurnkeyConfig;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<TurnkeyConfig>;
}>;
/**
 * Retry policy for Turnkey API requests (used while polling a pending
 * activity). Mirrors `turnkey_client`'s `RetryConfig` with FFI-friendly
 * millisecond fields.
 */
export type TurnkeyRetryConfig = {
    /**
     * Delay before the first retry, in milliseconds.
     */
    initialDelayMs: bigint;
    /**
     * Multiplier applied to the delay after each attempt.
     */
    multiplier: number;
    /**
     * Upper bound on the delay between retries, in milliseconds.
     */
    maxDelayMs: bigint;
    /**
     * Maximum number of retries (0 disables retrying).
     */
    maxRetries: number;
    /**
     * Total time budget for one API request including its retries and waits,
     * in milliseconds. No retry begins past this deadline: when the next wait
     * (server-requested or backoff) would end after it, the request fails with
     * the last error instead of stalling.
     */
    requestTimeoutMs: bigint;
};
/**
 * Generated factory for {@link TurnkeyRetryConfig} record objects.
 */
export declare const TurnkeyRetryConfig: Readonly<{
    /**
     * Create a frozen instance of {@link TurnkeyRetryConfig}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<TurnkeyRetryConfig> & Required<Omit<TurnkeyRetryConfig, never>>) => TurnkeyRetryConfig;
    /**
     * Create a frozen instance of {@link TurnkeyRetryConfig}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<TurnkeyRetryConfig> & Required<Omit<TurnkeyRetryConfig, never>>) => TurnkeyRetryConfig;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<TurnkeyRetryConfig>;
}>;
export type TxStatus = {
    confirmed: boolean;
    blockHeight: /*u32*/ number | undefined;
    blockTime: /*u64*/ bigint | undefined;
};
/**
 * Generated factory for {@link TxStatus} record objects.
 */
export declare const TxStatus: Readonly<{
    /**
     * Create a frozen instance of {@link TxStatus}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<TxStatus> & Required<Omit<TxStatus, never>>) => TxStatus;
    /**
     * Create a frozen instance of {@link TxStatus}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<TxStatus> & Required<Omit<TxStatus, never>>) => TxStatus;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<TxStatus>;
}>;
export type UnfreezeIssuerTokenRequest = {
    address: string;
};
/**
 * Generated factory for {@link UnfreezeIssuerTokenRequest} record objects.
 */
export declare const UnfreezeIssuerTokenRequest: Readonly<{
    /**
     * Create a frozen instance of {@link UnfreezeIssuerTokenRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<UnfreezeIssuerTokenRequest> & Required<Omit<UnfreezeIssuerTokenRequest, never>>) => UnfreezeIssuerTokenRequest;
    /**
     * Create a frozen instance of {@link UnfreezeIssuerTokenRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<UnfreezeIssuerTokenRequest> & Required<Omit<UnfreezeIssuerTokenRequest, never>>) => UnfreezeIssuerTokenRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<UnfreezeIssuerTokenRequest>;
}>;
export type UnfreezeIssuerTokenResponse = {
    impactedOutputIds: Array<string>;
    impactedTokenAmount: U128;
};
/**
 * Generated factory for {@link UnfreezeIssuerTokenResponse} record objects.
 */
export declare const UnfreezeIssuerTokenResponse: Readonly<{
    /**
     * Create a frozen instance of {@link UnfreezeIssuerTokenResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<UnfreezeIssuerTokenResponse> & Required<Omit<UnfreezeIssuerTokenResponse, never>>) => UnfreezeIssuerTokenResponse;
    /**
     * Create a frozen instance of {@link UnfreezeIssuerTokenResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<UnfreezeIssuerTokenResponse> & Required<Omit<UnfreezeIssuerTokenResponse, never>>) => UnfreezeIssuerTokenResponse;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<UnfreezeIssuerTokenResponse>;
}>;
/**
 * Request to unregister an existing webhook.
 */
export type UnregisterWebhookRequest = {
    /**
     * The unique identifier of the webhook to unregister.
     */
    webhookId: string;
};
/**
 * Generated factory for {@link UnregisterWebhookRequest} record objects.
 */
export declare const UnregisterWebhookRequest: Readonly<{
    /**
     * Create a frozen instance of {@link UnregisterWebhookRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<UnregisterWebhookRequest> & Required<Omit<UnregisterWebhookRequest, never>>) => UnregisterWebhookRequest;
    /**
     * Create a frozen instance of {@link UnregisterWebhookRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<UnregisterWebhookRequest> & Required<Omit<UnregisterWebhookRequest, never>>) => UnregisterWebhookRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<UnregisterWebhookRequest>;
}>;
export type UnversionedRecordChange = {
    id: RecordId;
    schemaVersion: string;
    updatedFields: Map<string, string>;
};
/**
 * Generated factory for {@link UnversionedRecordChange} record objects.
 */
export declare const UnversionedRecordChange: Readonly<{
    /**
     * Create a frozen instance of {@link UnversionedRecordChange}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<UnversionedRecordChange> & Required<Omit<UnversionedRecordChange, never>>) => UnversionedRecordChange;
    /**
     * Create a frozen instance of {@link UnversionedRecordChange}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<UnversionedRecordChange> & Required<Omit<UnversionedRecordChange, never>>) => UnversionedRecordChange;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<UnversionedRecordChange>;
}>;
/**
 * Request to update an existing contact.
 */
export type UpdateContactRequest = {
    id: string;
    name: string;
    /**
     * A Lightning address (user@domain).
     */
    paymentIdentifier: string;
};
/**
 * Generated factory for {@link UpdateContactRequest} record objects.
 */
export declare const UpdateContactRequest: Readonly<{
    /**
     * Create a frozen instance of {@link UpdateContactRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<UpdateContactRequest> & Required<Omit<UpdateContactRequest, never>>) => UpdateContactRequest;
    /**
     * Create a frozen instance of {@link UpdateContactRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<UpdateContactRequest> & Required<Omit<UpdateContactRequest, never>>) => UpdateContactRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<UpdateContactRequest>;
}>;
export type UpdateUserSettingsRequest = {
    sparkPrivateModeEnabled: boolean | undefined;
    /**
     * Update the active stable balance token. `None` means no change.
     */
    stableBalanceActiveLabel: StableBalanceActiveLabel | undefined;
};
/**
 * Generated factory for {@link UpdateUserSettingsRequest} record objects.
 */
export declare const UpdateUserSettingsRequest: Readonly<{
    /**
     * Create a frozen instance of {@link UpdateUserSettingsRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<UpdateUserSettingsRequest> & Required<Omit<UpdateUserSettingsRequest, "stableBalanceActiveLabel">>) => UpdateUserSettingsRequest;
    /**
     * Create a frozen instance of {@link UpdateUserSettingsRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<UpdateUserSettingsRequest> & Required<Omit<UpdateUserSettingsRequest, "stableBalanceActiveLabel">>) => UpdateUserSettingsRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<UpdateUserSettingsRequest>;
}>;
export type UrlSuccessActionData = {
    /**
     * Contents description, up to 144 characters
     */
    description: string;
    /**
     * URL of the success action
     */
    url: string;
    /**
     * Indicates the success URL domain matches the LNURL callback domain.
     *
     * See <https://github.com/lnurl/luds/blob/luds/09.md>
     */
    matchesCallbackDomain: boolean;
};
/**
 * Generated factory for {@link UrlSuccessActionData} record objects.
 */
export declare const UrlSuccessActionData: Readonly<{
    /**
     * Create a frozen instance of {@link UrlSuccessActionData}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<UrlSuccessActionData> & Required<Omit<UrlSuccessActionData, never>>) => UrlSuccessActionData;
    /**
     * Create a frozen instance of {@link UrlSuccessActionData}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<UrlSuccessActionData> & Required<Omit<UrlSuccessActionData, never>>) => UrlSuccessActionData;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<UrlSuccessActionData>;
}>;
export type UserSettings = {
    sparkPrivateModeEnabled: boolean;
    /**
     * The label of the currently active stable balance token, or `None` if deactivated.
     */
    stableBalanceActiveLabel: string | undefined;
};
/**
 * Generated factory for {@link UserSettings} record objects.
 */
export declare const UserSettings: Readonly<{
    /**
     * Create a frozen instance of {@link UserSettings}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<UserSettings> & Required<Omit<UserSettings, never>>) => UserSettings;
    /**
     * Create a frozen instance of {@link UserSettings}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<UserSettings> & Required<Omit<UserSettings, never>>) => UserSettings;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<UserSettings>;
}>;
export type Utxo = {
    txid: string;
    vout: number;
    value: bigint;
    status: TxStatus;
};
/**
 * Generated factory for {@link Utxo} record objects.
 */
export declare const Utxo: Readonly<{
    /**
     * Create a frozen instance of {@link Utxo}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<Utxo> & Required<Omit<Utxo, never>>) => Utxo;
    /**
     * Create a frozen instance of {@link Utxo}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<Utxo> & Required<Omit<Utxo, never>>) => Utxo;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<Utxo>;
}>;
/**
 * A wallet derived from a passkey.
 */
export type Wallet = {
    seed: Seed;
    /**
     * Label used for derivation: user-provided or the default.
     */
    label: string;
};
/**
 * Generated factory for {@link Wallet} record objects.
 */
export declare const Wallet: Readonly<{
    /**
     * Create a frozen instance of {@link Wallet}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<Wallet> & Required<Omit<Wallet, never>>) => Wallet;
    /**
     * Create a frozen instance of {@link Wallet}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<Wallet> & Required<Omit<Wallet, never>>) => Wallet;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<Wallet>;
}>;
/**
 * Response from [`crate::passkey::Passkey::setup_wallet`].
 */
export type WalletSetup = {
    wallet: Wallet;
    /**
     * Credential that derived this wallet. Absent when the provider
     * does not surface it.
     */
    credentialId: ArrayBuffer | undefined;
};
/**
 * Generated factory for {@link WalletSetup} record objects.
 */
export declare const WalletSetup: Readonly<{
    /**
     * Create a frozen instance of {@link WalletSetup}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<WalletSetup> & Required<Omit<WalletSetup, never>>) => WalletSetup;
    /**
     * Create a frozen instance of {@link WalletSetup}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<WalletSetup> & Required<Omit<WalletSetup, never>>) => WalletSetup;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<WalletSetup>;
}>;
/**
 * A registered webhook entry.
 */
export type Webhook = {
    /**
     * Unique identifier for this webhook.
     */
    id: string;
    /**
     * The URL that receives webhook notifications.
     */
    url: string;
    /**
     * The event types this webhook is subscribed to.
     */
    eventTypes: Array<WebhookEventType>;
};
/**
 * Generated factory for {@link Webhook} record objects.
 */
export declare const Webhook: Readonly<{
    /**
     * Create a frozen instance of {@link Webhook}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<Webhook> & Required<Omit<Webhook, never>>) => Webhook;
    /**
     * Create a frozen instance of {@link Webhook}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<Webhook> & Required<Omit<Webhook, never>>) => Webhook;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<Webhook>;
}>;
/**
 * Typealias from the type name used in the UDL file to the builtin type.  This
 * is needed because the UDL type name is used in function/method signatures.
 */
export type PublicKey = string;
/**
 * Typealias from the type name used in the UDL file to the custom type.  This
 * is needed because the UDL type name is used in function/method signatures.
 */
export type U128 = bigint;
export declare enum AesSuccessActionDataResult_Tags {
    Decrypted = "Decrypted",
    ErrorStatus = "ErrorStatus"
}
/**
 * Result of decryption of [`AesSuccessActionData`] payload
 */
export declare const AesSuccessActionDataResult: Readonly<{
    instanceOf: (obj: any) => obj is AesSuccessActionDataResult;
    Decrypted: {
        new (inner: {
            data: AesSuccessActionDataDecrypted;
        }): {
            readonly tag: AesSuccessActionDataResult_Tags.Decrypted;
            readonly inner: Readonly<{
                data: AesSuccessActionDataDecrypted;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "AesSuccessActionDataResult";
        };
        "new"(inner: {
            data: AesSuccessActionDataDecrypted;
        }): {
            readonly tag: AesSuccessActionDataResult_Tags.Decrypted;
            readonly inner: Readonly<{
                data: AesSuccessActionDataDecrypted;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "AesSuccessActionDataResult";
        };
        instanceOf(obj: any): obj is {
            readonly tag: AesSuccessActionDataResult_Tags.Decrypted;
            readonly inner: Readonly<{
                data: AesSuccessActionDataDecrypted;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "AesSuccessActionDataResult";
        };
    };
    ErrorStatus: {
        new (inner: {
            reason: string;
        }): {
            readonly tag: AesSuccessActionDataResult_Tags.ErrorStatus;
            readonly inner: Readonly<{
                reason: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "AesSuccessActionDataResult";
        };
        "new"(inner: {
            reason: string;
        }): {
            readonly tag: AesSuccessActionDataResult_Tags.ErrorStatus;
            readonly inner: Readonly<{
                reason: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "AesSuccessActionDataResult";
        };
        instanceOf(obj: any): obj is {
            readonly tag: AesSuccessActionDataResult_Tags.ErrorStatus;
            readonly inner: Readonly<{
                reason: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "AesSuccessActionDataResult";
        };
    };
}>;
/**
 * Result of decryption of [`AesSuccessActionData`] payload
 */
export type AesSuccessActionDataResult = InstanceType<(typeof AesSuccessActionDataResult)[keyof Omit<typeof AesSuccessActionDataResult, 'instanceOf'>]>;
export declare enum Amount_Tags {
    Bitcoin = "Bitcoin",
    Currency = "Currency"
}
export declare const Amount: Readonly<{
    instanceOf: (obj: any) => obj is Amount;
    Bitcoin: {
        new (inner: {
            amountMsat: bigint;
        }): {
            readonly tag: Amount_Tags.Bitcoin;
            readonly inner: Readonly<{
                amountMsat: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "Amount";
        };
        "new"(inner: {
            amountMsat: bigint;
        }): {
            readonly tag: Amount_Tags.Bitcoin;
            readonly inner: Readonly<{
                amountMsat: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "Amount";
        };
        instanceOf(obj: any): obj is {
            readonly tag: Amount_Tags.Bitcoin;
            readonly inner: Readonly<{
                amountMsat: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "Amount";
        };
    };
    Currency: {
        new (inner: {
            /**
             * The currency that the amount is denominated in.
             */ iso4217Code: string;
            /**
             * The amount in the currency unit adjusted by the ISO 4712 exponent (e.g., USD cents).
             */ fractionalAmount: bigint;
        }): {
            readonly tag: Amount_Tags.Currency;
            readonly inner: Readonly<{
                iso4217Code: string;
                fractionalAmount: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "Amount";
        };
        "new"(inner: {
            /**
             * The currency that the amount is denominated in.
             */ iso4217Code: string;
            /**
             * The amount in the currency unit adjusted by the ISO 4712 exponent (e.g., USD cents).
             */ fractionalAmount: bigint;
        }): {
            readonly tag: Amount_Tags.Currency;
            readonly inner: Readonly<{
                iso4217Code: string;
                fractionalAmount: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "Amount";
        };
        instanceOf(obj: any): obj is {
            readonly tag: Amount_Tags.Currency;
            readonly inner: Readonly<{
                iso4217Code: string;
                fractionalAmount: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "Amount";
        };
    };
}>;
export type Amount = InstanceType<(typeof Amount)[keyof Omit<typeof Amount, 'instanceOf'>]>;
/**
 * The reason why a conversion amount was adjusted from the originally requested value.
 */
export declare enum AmountAdjustmentReason {
    /**
     * The amount was increased to meet the minimum conversion limit.
     */
    FlooredToMinLimit = 0,
    /**
     * The amount was increased to convert the full token balance,
     * avoiding a remaining balance below the minimum conversion limit (token dust).
     */
    IncreasedToAvoidDust = 1
}
export declare enum AssetFilter_Tags {
    Bitcoin = "Bitcoin",
    Token = "Token"
}
/**
 * A field of [`ListPaymentsRequest`] when listing payments filtered by asset
 */
export declare const AssetFilter: Readonly<{
    instanceOf: (obj: any) => obj is AssetFilter;
    Bitcoin: {
        new (): {
            readonly tag: AssetFilter_Tags.Bitcoin;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "AssetFilter";
        };
        "new"(): {
            readonly tag: AssetFilter_Tags.Bitcoin;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "AssetFilter";
        };
        instanceOf(obj: any): obj is {
            readonly tag: AssetFilter_Tags.Bitcoin;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "AssetFilter";
        };
    };
    Token: {
        new (inner: {
            /**
             * Optional token identifier to filter by
             */ tokenIdentifier: string | undefined;
        }): {
            readonly tag: AssetFilter_Tags.Token;
            readonly inner: Readonly<{
                tokenIdentifier: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "AssetFilter";
        };
        "new"(inner: {
            /**
             * Optional token identifier to filter by
             */ tokenIdentifier: string | undefined;
        }): {
            readonly tag: AssetFilter_Tags.Token;
            readonly inner: Readonly<{
                tokenIdentifier: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "AssetFilter";
        };
        instanceOf(obj: any): obj is {
            readonly tag: AssetFilter_Tags.Token;
            readonly inner: Readonly<{
                tokenIdentifier: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "AssetFilter";
        };
    };
}>;
/**
 * A field of [`ListPaymentsRequest`] when listing payments filtered by asset
 */
export type AssetFilter = InstanceType<(typeof AssetFilter)[keyof Omit<typeof AssetFilter, 'instanceOf'>]>;
export declare enum AutoOptimizationEvent_Tags {
    Started = "Started",
    RoundCompleted = "RoundCompleted",
    Completed = "Completed",
    Cancelled = "Cancelled",
    Failed = "Failed",
    Skipped = "Skipped"
}
export declare const AutoOptimizationEvent: Readonly<{
    instanceOf: (obj: any) => obj is AutoOptimizationEvent;
    Started: {
        new (inner: {
            totalRounds: number;
        }): {
            readonly tag: AutoOptimizationEvent_Tags.Started;
            readonly inner: Readonly<{
                totalRounds: number;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "AutoOptimizationEvent";
        };
        "new"(inner: {
            totalRounds: number;
        }): {
            readonly tag: AutoOptimizationEvent_Tags.Started;
            readonly inner: Readonly<{
                totalRounds: number;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "AutoOptimizationEvent";
        };
        instanceOf(obj: any): obj is {
            readonly tag: AutoOptimizationEvent_Tags.Started;
            readonly inner: Readonly<{
                totalRounds: number;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "AutoOptimizationEvent";
        };
    };
    RoundCompleted: {
        new (inner: {
            currentRound: number;
            totalRounds: number;
        }): {
            readonly tag: AutoOptimizationEvent_Tags.RoundCompleted;
            readonly inner: Readonly<{
                currentRound: number;
                totalRounds: number;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "AutoOptimizationEvent";
        };
        "new"(inner: {
            currentRound: number;
            totalRounds: number;
        }): {
            readonly tag: AutoOptimizationEvent_Tags.RoundCompleted;
            readonly inner: Readonly<{
                currentRound: number;
                totalRounds: number;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "AutoOptimizationEvent";
        };
        instanceOf(obj: any): obj is {
            readonly tag: AutoOptimizationEvent_Tags.RoundCompleted;
            readonly inner: Readonly<{
                currentRound: number;
                totalRounds: number;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "AutoOptimizationEvent";
        };
    };
    Completed: {
        new (): {
            readonly tag: AutoOptimizationEvent_Tags.Completed;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "AutoOptimizationEvent";
        };
        "new"(): {
            readonly tag: AutoOptimizationEvent_Tags.Completed;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "AutoOptimizationEvent";
        };
        instanceOf(obj: any): obj is {
            readonly tag: AutoOptimizationEvent_Tags.Completed;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "AutoOptimizationEvent";
        };
    };
    Cancelled: {
        new (): {
            readonly tag: AutoOptimizationEvent_Tags.Cancelled;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "AutoOptimizationEvent";
        };
        "new"(): {
            readonly tag: AutoOptimizationEvent_Tags.Cancelled;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "AutoOptimizationEvent";
        };
        instanceOf(obj: any): obj is {
            readonly tag: AutoOptimizationEvent_Tags.Cancelled;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "AutoOptimizationEvent";
        };
    };
    Failed: {
        new (inner: {
            error: string;
        }): {
            readonly tag: AutoOptimizationEvent_Tags.Failed;
            readonly inner: Readonly<{
                error: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "AutoOptimizationEvent";
        };
        "new"(inner: {
            error: string;
        }): {
            readonly tag: AutoOptimizationEvent_Tags.Failed;
            readonly inner: Readonly<{
                error: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "AutoOptimizationEvent";
        };
        instanceOf(obj: any): obj is {
            readonly tag: AutoOptimizationEvent_Tags.Failed;
            readonly inner: Readonly<{
                error: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "AutoOptimizationEvent";
        };
    };
    Skipped: {
        new (): {
            readonly tag: AutoOptimizationEvent_Tags.Skipped;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "AutoOptimizationEvent";
        };
        "new"(): {
            readonly tag: AutoOptimizationEvent_Tags.Skipped;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "AutoOptimizationEvent";
        };
        instanceOf(obj: any): obj is {
            readonly tag: AutoOptimizationEvent_Tags.Skipped;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "AutoOptimizationEvent";
        };
    };
}>;
export type AutoOptimizationEvent = InstanceType<(typeof AutoOptimizationEvent)[keyof Omit<typeof AutoOptimizationEvent, 'instanceOf'>]>;
export declare enum BitcoinNetwork {
    /**
     * Mainnet
     */
    Bitcoin = 0,
    Testnet3 = 1,
    Testnet4 = 2,
    Signet = 3,
    Regtest = 4
}
export declare enum BuyBitcoinRequest_Tags {
    Moonpay = "Moonpay",
    CashApp = "CashApp"
}
/**
 * The available providers for buying Bitcoin
 * Request to buy Bitcoin using an external provider.
 *
 * Each variant carries only the parameters relevant to that provider.
 */
export declare const BuyBitcoinRequest: Readonly<{
    instanceOf: (obj: any) => obj is BuyBitcoinRequest;
    Moonpay: {
        new (inner: {
            /**
             * Lock the purchase to a specific amount in satoshis.
             */ lockedAmountSat: /*u64*/ bigint | undefined;
            /**
             * Custom redirect URL after purchase completion.
             */ redirectUrl: string | undefined;
        }): {
            readonly tag: BuyBitcoinRequest_Tags.Moonpay;
            readonly inner: Readonly<{
                lockedAmountSat: /*u64*/ bigint | undefined;
                redirectUrl: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "BuyBitcoinRequest";
        };
        "new"(inner: {
            /**
             * Lock the purchase to a specific amount in satoshis.
             */ lockedAmountSat: /*u64*/ bigint | undefined;
            /**
             * Custom redirect URL after purchase completion.
             */ redirectUrl: string | undefined;
        }): {
            readonly tag: BuyBitcoinRequest_Tags.Moonpay;
            readonly inner: Readonly<{
                lockedAmountSat: /*u64*/ bigint | undefined;
                redirectUrl: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "BuyBitcoinRequest";
        };
        instanceOf(obj: any): obj is {
            readonly tag: BuyBitcoinRequest_Tags.Moonpay;
            readonly inner: Readonly<{
                lockedAmountSat: /*u64*/ bigint | undefined;
                redirectUrl: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "BuyBitcoinRequest";
        };
    };
    CashApp: {
        new (inner: {
            /**
             * Amount in satoshis for the Lightning invoice. Must be non-zero.
             */ amountSats: bigint;
        }): {
            readonly tag: BuyBitcoinRequest_Tags.CashApp;
            readonly inner: Readonly<{
                amountSats: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "BuyBitcoinRequest";
        };
        "new"(inner: {
            /**
             * Amount in satoshis for the Lightning invoice. Must be non-zero.
             */ amountSats: bigint;
        }): {
            readonly tag: BuyBitcoinRequest_Tags.CashApp;
            readonly inner: Readonly<{
                amountSats: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "BuyBitcoinRequest";
        };
        instanceOf(obj: any): obj is {
            readonly tag: BuyBitcoinRequest_Tags.CashApp;
            readonly inner: Readonly<{
                amountSats: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "BuyBitcoinRequest";
        };
    };
}>;
/**
 * The available providers for buying Bitcoin
 * Request to buy Bitcoin using an external provider.
 *
 * Each variant carries only the parameters relevant to that provider.
 */
export type BuyBitcoinRequest = InstanceType<(typeof BuyBitcoinRequest)[keyof Omit<typeof BuyBitcoinRequest, 'instanceOf'>]>;
export declare enum ChainApiType {
    Esplora = 0,
    MempoolSpace = 1
}
export declare enum ChainServiceError_Tags {
    InvalidAddress = "InvalidAddress",
    ServiceConnectivity = "ServiceConnectivity",
    Generic = "Generic"
}
export declare const ChainServiceError: Readonly<{
    instanceOf: (obj: any) => obj is ChainServiceError;
    InvalidAddress: {
        new (v0: string): {
            readonly tag: ChainServiceError_Tags.InvalidAddress;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ChainServiceError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: ChainServiceError_Tags.InvalidAddress;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ChainServiceError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: ChainServiceError_Tags.InvalidAddress;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ChainServiceError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: ChainServiceError_Tags.InvalidAddress;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ChainServiceError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: ChainServiceError_Tags.InvalidAddress;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ChainServiceError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    ServiceConnectivity: {
        new (v0: string): {
            readonly tag: ChainServiceError_Tags.ServiceConnectivity;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ChainServiceError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: ChainServiceError_Tags.ServiceConnectivity;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ChainServiceError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: ChainServiceError_Tags.ServiceConnectivity;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ChainServiceError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: ChainServiceError_Tags.ServiceConnectivity;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ChainServiceError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: ChainServiceError_Tags.ServiceConnectivity;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ChainServiceError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    Generic: {
        new (v0: string): {
            readonly tag: ChainServiceError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ChainServiceError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: ChainServiceError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ChainServiceError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: ChainServiceError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ChainServiceError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: ChainServiceError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ChainServiceError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: ChainServiceError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ChainServiceError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
}>;
export type ChainServiceError = InstanceType<(typeof ChainServiceError)[keyof Omit<typeof ChainServiceError, 'instanceOf'>]>;
export declare enum ConversionChain_Tags {
    Spark = "Spark",
    Lightning = "Lightning",
    External = "External"
}
/**
 * The chain or network that a [`ConversionSide`] lives on.
 */
export declare const ConversionChain: Readonly<{
    instanceOf: (obj: any) => obj is ConversionChain;
    Spark: {
        new (): {
            readonly tag: ConversionChain_Tags.Spark;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionChain";
        };
        "new"(): {
            readonly tag: ConversionChain_Tags.Spark;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionChain";
        };
        instanceOf(obj: any): obj is {
            readonly tag: ConversionChain_Tags.Spark;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionChain";
        };
    };
    Lightning: {
        new (): {
            readonly tag: ConversionChain_Tags.Lightning;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionChain";
        };
        "new"(): {
            readonly tag: ConversionChain_Tags.Lightning;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionChain";
        };
        instanceOf(obj: any): obj is {
            readonly tag: ConversionChain_Tags.Lightning;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionChain";
        };
    };
    External: {
        new (inner: {
            /**
             * Human-readable chain name (e.g. `"base"`, `"solana"`, `"arbitrum"`).
             */ name: string;
            /**
             * Stable chain identifier (e.g. EVM `chainId` as a decimal string,
             * or a chain-native identifier). `None` when the provider does not
             * expose one for this route.
             */ chainId: string | undefined;
        }): {
            readonly tag: ConversionChain_Tags.External;
            readonly inner: Readonly<{
                name: string;
                chainId: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionChain";
        };
        "new"(inner: {
            /**
             * Human-readable chain name (e.g. `"base"`, `"solana"`, `"arbitrum"`).
             */ name: string;
            /**
             * Stable chain identifier (e.g. EVM `chainId` as a decimal string,
             * or a chain-native identifier). `None` when the provider does not
             * expose one for this route.
             */ chainId: string | undefined;
        }): {
            readonly tag: ConversionChain_Tags.External;
            readonly inner: Readonly<{
                name: string;
                chainId: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionChain";
        };
        instanceOf(obj: any): obj is {
            readonly tag: ConversionChain_Tags.External;
            readonly inner: Readonly<{
                name: string;
                chainId: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionChain";
        };
    };
}>;
/**
 * The chain or network that a [`ConversionSide`] lives on.
 */
export type ConversionChain = InstanceType<(typeof ConversionChain)[keyof Omit<typeof ConversionChain, 'instanceOf'>]>;
/**
 * Selects payments by conversion type + status for background tasks.
 */
export declare enum ConversionFilter {
    /**
     * AMM conversions that need a refund (clawback).
     */
    AmmRefundNeeded = 0,
    /**
     * Orchestra orders that have not yet reached a terminal state.
     */
    OrchestraPending = 1,
    /**
     * Boltz reverse swaps that have not yet reached a terminal state. Lives on
     * the Lightning leg (the hold-invoice pay), so it is selected via the
     * [`StoragePaymentDetailsFilter::Lightning`] filter.
     */
    BoltzPending = 2
}
export declare enum ConversionInfo_Tags {
    Amm = "Amm",
    Orchestra = "Orchestra",
    Boltz = "Boltz"
}
/**
 * Details of the asset conversion attached to a payment, when the payment
 * involves a swap or cross-chain bridge in addition to the on-Spark transfer.
 *
 * The variant identifies which provider handled the conversion:
 * - [`ConversionInfo::Amm`] for Spark token swaps via Flashnet AMM pools.
 * - [`ConversionInfo::Orchestra`] for cross-chain sends via Flashnet
 * Orchestra (Spark → external chain).
 * - [`ConversionInfo::Boltz`] for sats → stable-coin reverse swaps via Boltz.
 */
export declare const ConversionInfo: Readonly<{
    instanceOf: (obj: any) => obj is ConversionInfo;
    Amm: {
        new (inner: {
            /**
             * The pool id associated with the conversion
             */ poolId: string;
            /**
             * The conversion id shared by both sides of the conversion
             */ conversionId: string;
            /**
             * The status of the conversion
             */ status: ConversionStatus;
            /**
             * The fee paid for the conversion.
             * Denominated in satoshis if converting from Bitcoin, otherwise in the token base units.
             */ fee: U128 | undefined;
            /**
             * The purpose of the conversion
             */ purpose: ConversionPurpose | undefined;
            /**
             * The reason the conversion amount was adjusted, if applicable.
             */ amountAdjustment: AmountAdjustmentReason | undefined;
        }): {
            readonly tag: ConversionInfo_Tags.Amm;
            readonly inner: Readonly<{
                poolId: string;
                conversionId: string;
                status: ConversionStatus;
                fee: U128 | undefined;
                purpose: ConversionPurpose | undefined;
                amountAdjustment: AmountAdjustmentReason | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionInfo";
        };
        "new"(inner: {
            /**
             * The pool id associated with the conversion
             */ poolId: string;
            /**
             * The conversion id shared by both sides of the conversion
             */ conversionId: string;
            /**
             * The status of the conversion
             */ status: ConversionStatus;
            /**
             * The fee paid for the conversion.
             * Denominated in satoshis if converting from Bitcoin, otherwise in the token base units.
             */ fee: U128 | undefined;
            /**
             * The purpose of the conversion
             */ purpose: ConversionPurpose | undefined;
            /**
             * The reason the conversion amount was adjusted, if applicable.
             */ amountAdjustment: AmountAdjustmentReason | undefined;
        }): {
            readonly tag: ConversionInfo_Tags.Amm;
            readonly inner: Readonly<{
                poolId: string;
                conversionId: string;
                status: ConversionStatus;
                fee: U128 | undefined;
                purpose: ConversionPurpose | undefined;
                amountAdjustment: AmountAdjustmentReason | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionInfo";
        };
        instanceOf(obj: any): obj is {
            readonly tag: ConversionInfo_Tags.Amm;
            readonly inner: Readonly<{
                poolId: string;
                conversionId: string;
                status: ConversionStatus;
                fee: U128 | undefined;
                purpose: ConversionPurpose | undefined;
                amountAdjustment: AmountAdjustmentReason | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionInfo";
        };
    };
    Orchestra: {
        new (inner: {
            /**
             * The Orchestra order id returned by `/v1/orchestration/submit`.
             */ orderId: string;
            /**
             * The Orchestra quote id used to create this order.
             */ quoteId: string;
            /**
             * Opaque token required for querying order status.
             */ readToken: string | undefined;
            /**
             * Chain name (e.g. `"base"`, `"solana"`, `"tron"`).
             */ chain: string;
            /**
             * Stable chain identifier (e.g. EVM `chainId` decimal string `"8453"`
             * for Base, SLIP-44 or similar for other chains). `None` if the
             * provider doesn't expose one for this route.
             */ chainId: string | undefined;
            /**
             * Asset ticker (e.g. `"USDC"`, `"USDT"`).
             */ asset: string;
            /**
             * Recipient address on the target chain.
             */ recipientAddress: string;
            /**
             * Amount in expressed in the cross-chain asset's base units, via
             * the rate the SDK used at prepare time.
             */ assetAmountIn: U128 | undefined;
            /**
             * Estimated recipient amount, frozen at prepare time.
             */ estimatedOut: U128;
            /**
             * Actual delivered amount, Unset until the order reaches a terminal state.
             */ deliveredAmount: U128 | undefined;
            status: ConversionStatus;
            /**
             * Best-available total fee in destination asset base units.
             * Prepare-time estimate while pending, realized fee when Completed.
             */ feeAmount: U128 | undefined;
            /**
             * Orchestra service fee.
             */ serviceFeeAmount: U128 | undefined;
            /**
             * Asset the service fee is denominated in. Unset means BTC sats.
             */ serviceFeeAsset: string | undefined;
            /**
             * Asset decimals (e.g. 6 for USDC).
             */ assetDecimals: number;
            /**
             * Token contract / mint address. Unset for native-asset destinations.
             */ assetContract: string | undefined;
        }): {
            readonly tag: ConversionInfo_Tags.Orchestra;
            readonly inner: Readonly<{
                orderId: string;
                quoteId: string;
                readToken: string | undefined;
                chain: string;
                chainId: string | undefined;
                asset: string;
                recipientAddress: string;
                assetAmountIn: U128 | undefined;
                estimatedOut: U128;
                deliveredAmount: U128 | undefined;
                status: ConversionStatus;
                feeAmount: U128 | undefined;
                serviceFeeAmount: U128 | undefined;
                serviceFeeAsset: string | undefined;
                assetDecimals: number;
                assetContract: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionInfo";
        };
        "new"(inner: {
            /**
             * The Orchestra order id returned by `/v1/orchestration/submit`.
             */ orderId: string;
            /**
             * The Orchestra quote id used to create this order.
             */ quoteId: string;
            /**
             * Opaque token required for querying order status.
             */ readToken: string | undefined;
            /**
             * Chain name (e.g. `"base"`, `"solana"`, `"tron"`).
             */ chain: string;
            /**
             * Stable chain identifier (e.g. EVM `chainId` decimal string `"8453"`
             * for Base, SLIP-44 or similar for other chains). `None` if the
             * provider doesn't expose one for this route.
             */ chainId: string | undefined;
            /**
             * Asset ticker (e.g. `"USDC"`, `"USDT"`).
             */ asset: string;
            /**
             * Recipient address on the target chain.
             */ recipientAddress: string;
            /**
             * Amount in expressed in the cross-chain asset's base units, via
             * the rate the SDK used at prepare time.
             */ assetAmountIn: U128 | undefined;
            /**
             * Estimated recipient amount, frozen at prepare time.
             */ estimatedOut: U128;
            /**
             * Actual delivered amount, Unset until the order reaches a terminal state.
             */ deliveredAmount: U128 | undefined;
            status: ConversionStatus;
            /**
             * Best-available total fee in destination asset base units.
             * Prepare-time estimate while pending, realized fee when Completed.
             */ feeAmount: U128 | undefined;
            /**
             * Orchestra service fee.
             */ serviceFeeAmount: U128 | undefined;
            /**
             * Asset the service fee is denominated in. Unset means BTC sats.
             */ serviceFeeAsset: string | undefined;
            /**
             * Asset decimals (e.g. 6 for USDC).
             */ assetDecimals: number;
            /**
             * Token contract / mint address. Unset for native-asset destinations.
             */ assetContract: string | undefined;
        }): {
            readonly tag: ConversionInfo_Tags.Orchestra;
            readonly inner: Readonly<{
                orderId: string;
                quoteId: string;
                readToken: string | undefined;
                chain: string;
                chainId: string | undefined;
                asset: string;
                recipientAddress: string;
                assetAmountIn: U128 | undefined;
                estimatedOut: U128;
                deliveredAmount: U128 | undefined;
                status: ConversionStatus;
                feeAmount: U128 | undefined;
                serviceFeeAmount: U128 | undefined;
                serviceFeeAsset: string | undefined;
                assetDecimals: number;
                assetContract: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionInfo";
        };
        instanceOf(obj: any): obj is {
            readonly tag: ConversionInfo_Tags.Orchestra;
            readonly inner: Readonly<{
                orderId: string;
                quoteId: string;
                readToken: string | undefined;
                chain: string;
                chainId: string | undefined;
                asset: string;
                recipientAddress: string;
                assetAmountIn: U128 | undefined;
                estimatedOut: U128;
                deliveredAmount: U128 | undefined;
                status: ConversionStatus;
                feeAmount: U128 | undefined;
                serviceFeeAmount: U128 | undefined;
                serviceFeeAsset: string | undefined;
                assetDecimals: number;
                assetContract: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionInfo";
        };
    };
    Boltz: {
        new (inner: {
            /**
             * The Boltz swap id returned by `POST /swap/reverse`.
             */ swapId: string;
            /**
             * The BOLT11 hold invoice paid on the Spark/Lightning side.
             */ invoice: string;
            /**
             * Amount of the hold invoice in sats.
             */ invoiceAmountSats: bigint;
            /**
             * Cross-chain bridge tracking handle for bridged swaps: a `LayerZero`
             * message GUID for OFT (USDT0) routes, or a CCTP reference for USDC
             * routes. `None` for same-chain (Arbitrum-direct) delivery.
             */ bridgeRef: string | undefined;
            /**
             * DEX slippage tolerance (basis points) committed at prepare time.
             */ maxSlippageBps: number;
            /**
             * Whether the claim-time DEX quote drifted beyond `max_slippage_bps`.
             */ quoteDegraded: boolean;
            /**
             * Chain name (e.g. `"arbitrum"`, `"solana"`, `"tron"`).
             */ chain: string;
            /**
             * Stable chain identifier (e.g. EVM `chainId` decimal string `"42161"`
             * for Arbitrum). `None` if the provider doesn't expose one for this
             * route.
             */ chainId: string | undefined;
            /**
             * Asset ticker (e.g. `"USDT"`, `"USDT0"`).
             */ asset: string;
            /**
             * Recipient address on the target chain.
             */ recipientAddress: string;
            /**
             * Estimated amount in the asset's base units, frozen at prepare time.
             */ estimatedOut: U128;
            /**
             * Actual amount delivered. `None` until the claim receipt is processed.
             */ deliveredAmount: U128 | undefined;
            /**
             * Current status of the reverse swap.
             */ status: ConversionStatus;
            /**
             * Amount in expressed in the cross-chain asset's base units, via the
             * BTC/USD rate the SDK used at prepare time.
             */ assetAmountIn: U128 | undefined;
            /**
             * Best-available total fee in destination asset base units.
             * Prepare-time estimate while pending, realized fee on Completed.
             */ feeAmount: U128 | undefined;
            /**
             * Boltz spread in sats.
             */ serviceFeeAmount: U128 | undefined;
            /**
             * Asset service fee is denominated in. Unset means BTC sats.
             */ serviceFeeAsset: string | undefined;
            /**
             * Asset decimals (e.g. 6 for USDT).
             */ assetDecimals: number;
            /**
             * Token contract / mint address. Unset for native-asset destinations.
             */ assetContract: string | undefined;
        }): {
            readonly tag: ConversionInfo_Tags.Boltz;
            readonly inner: Readonly<{
                swapId: string;
                invoice: string;
                invoiceAmountSats: bigint;
                bridgeRef: string | undefined;
                maxSlippageBps: number;
                quoteDegraded: boolean;
                chain: string;
                chainId: string | undefined;
                asset: string;
                recipientAddress: string;
                estimatedOut: U128;
                deliveredAmount: U128 | undefined;
                status: ConversionStatus;
                assetAmountIn: U128 | undefined;
                feeAmount: U128 | undefined;
                serviceFeeAmount: U128 | undefined;
                serviceFeeAsset: string | undefined;
                assetDecimals: number;
                assetContract: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionInfo";
        };
        "new"(inner: {
            /**
             * The Boltz swap id returned by `POST /swap/reverse`.
             */ swapId: string;
            /**
             * The BOLT11 hold invoice paid on the Spark/Lightning side.
             */ invoice: string;
            /**
             * Amount of the hold invoice in sats.
             */ invoiceAmountSats: bigint;
            /**
             * Cross-chain bridge tracking handle for bridged swaps: a `LayerZero`
             * message GUID for OFT (USDT0) routes, or a CCTP reference for USDC
             * routes. `None` for same-chain (Arbitrum-direct) delivery.
             */ bridgeRef: string | undefined;
            /**
             * DEX slippage tolerance (basis points) committed at prepare time.
             */ maxSlippageBps: number;
            /**
             * Whether the claim-time DEX quote drifted beyond `max_slippage_bps`.
             */ quoteDegraded: boolean;
            /**
             * Chain name (e.g. `"arbitrum"`, `"solana"`, `"tron"`).
             */ chain: string;
            /**
             * Stable chain identifier (e.g. EVM `chainId` decimal string `"42161"`
             * for Arbitrum). `None` if the provider doesn't expose one for this
             * route.
             */ chainId: string | undefined;
            /**
             * Asset ticker (e.g. `"USDT"`, `"USDT0"`).
             */ asset: string;
            /**
             * Recipient address on the target chain.
             */ recipientAddress: string;
            /**
             * Estimated amount in the asset's base units, frozen at prepare time.
             */ estimatedOut: U128;
            /**
             * Actual amount delivered. `None` until the claim receipt is processed.
             */ deliveredAmount: U128 | undefined;
            /**
             * Current status of the reverse swap.
             */ status: ConversionStatus;
            /**
             * Amount in expressed in the cross-chain asset's base units, via the
             * BTC/USD rate the SDK used at prepare time.
             */ assetAmountIn: U128 | undefined;
            /**
             * Best-available total fee in destination asset base units.
             * Prepare-time estimate while pending, realized fee on Completed.
             */ feeAmount: U128 | undefined;
            /**
             * Boltz spread in sats.
             */ serviceFeeAmount: U128 | undefined;
            /**
             * Asset service fee is denominated in. Unset means BTC sats.
             */ serviceFeeAsset: string | undefined;
            /**
             * Asset decimals (e.g. 6 for USDT).
             */ assetDecimals: number;
            /**
             * Token contract / mint address. Unset for native-asset destinations.
             */ assetContract: string | undefined;
        }): {
            readonly tag: ConversionInfo_Tags.Boltz;
            readonly inner: Readonly<{
                swapId: string;
                invoice: string;
                invoiceAmountSats: bigint;
                bridgeRef: string | undefined;
                maxSlippageBps: number;
                quoteDegraded: boolean;
                chain: string;
                chainId: string | undefined;
                asset: string;
                recipientAddress: string;
                estimatedOut: U128;
                deliveredAmount: U128 | undefined;
                status: ConversionStatus;
                assetAmountIn: U128 | undefined;
                feeAmount: U128 | undefined;
                serviceFeeAmount: U128 | undefined;
                serviceFeeAsset: string | undefined;
                assetDecimals: number;
                assetContract: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionInfo";
        };
        instanceOf(obj: any): obj is {
            readonly tag: ConversionInfo_Tags.Boltz;
            readonly inner: Readonly<{
                swapId: string;
                invoice: string;
                invoiceAmountSats: bigint;
                bridgeRef: string | undefined;
                maxSlippageBps: number;
                quoteDegraded: boolean;
                chain: string;
                chainId: string | undefined;
                asset: string;
                recipientAddress: string;
                estimatedOut: U128;
                deliveredAmount: U128 | undefined;
                status: ConversionStatus;
                assetAmountIn: U128 | undefined;
                feeAmount: U128 | undefined;
                serviceFeeAmount: U128 | undefined;
                serviceFeeAsset: string | undefined;
                assetDecimals: number;
                assetContract: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionInfo";
        };
    };
}>;
/**
 * Details of the asset conversion attached to a payment, when the payment
 * involves a swap or cross-chain bridge in addition to the on-Spark transfer.
 *
 * The variant identifies which provider handled the conversion:
 * - [`ConversionInfo::Amm`] for Spark token swaps via Flashnet AMM pools.
 * - [`ConversionInfo::Orchestra`] for cross-chain sends via Flashnet
 * Orchestra (Spark → external chain).
 * - [`ConversionInfo::Boltz`] for sats → stable-coin reverse swaps via Boltz.
 */
export type ConversionInfo = InstanceType<(typeof ConversionInfo)[keyof Omit<typeof ConversionInfo, 'instanceOf'>]>;
/**
 * The provider that performed a conversion.
 */
export declare enum ConversionProvider {
    /**
     * AMM (Flashnet pool) conversion between token and BTC on Spark
     */
    Amm = 0,
    /**
     * Orchestra cross-chain conversion
     */
    Orchestra = 1,
    /**
     * Boltz reverse-swap cross-chain conversion
     */
    Boltz = 2
}
export declare enum ConversionPurpose_Tags {
    OngoingPayment = "OngoingPayment",
    SelfTransfer = "SelfTransfer",
    AutoConversion = "AutoConversion"
}
/**
 * The purpose of the conversion, which is used to provide context for the conversion
 * if its related to an ongoing payment or a self-transfer.
 */
export declare const ConversionPurpose: Readonly<{
    instanceOf: (obj: any) => obj is ConversionPurpose;
    OngoingPayment: {
        new (inner: {
            /**
             * The payment request of the ongoing payment
             */ paymentRequest: string;
        }): {
            readonly tag: ConversionPurpose_Tags.OngoingPayment;
            readonly inner: Readonly<{
                paymentRequest: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionPurpose";
        };
        "new"(inner: {
            /**
             * The payment request of the ongoing payment
             */ paymentRequest: string;
        }): {
            readonly tag: ConversionPurpose_Tags.OngoingPayment;
            readonly inner: Readonly<{
                paymentRequest: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionPurpose";
        };
        instanceOf(obj: any): obj is {
            readonly tag: ConversionPurpose_Tags.OngoingPayment;
            readonly inner: Readonly<{
                paymentRequest: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionPurpose";
        };
    };
    SelfTransfer: {
        new (): {
            readonly tag: ConversionPurpose_Tags.SelfTransfer;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionPurpose";
        };
        "new"(): {
            readonly tag: ConversionPurpose_Tags.SelfTransfer;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionPurpose";
        };
        instanceOf(obj: any): obj is {
            readonly tag: ConversionPurpose_Tags.SelfTransfer;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionPurpose";
        };
    };
    AutoConversion: {
        new (): {
            readonly tag: ConversionPurpose_Tags.AutoConversion;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionPurpose";
        };
        "new"(): {
            readonly tag: ConversionPurpose_Tags.AutoConversion;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionPurpose";
        };
        instanceOf(obj: any): obj is {
            readonly tag: ConversionPurpose_Tags.AutoConversion;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionPurpose";
        };
    };
}>;
/**
 * The purpose of the conversion, which is used to provide context for the conversion
 * if its related to an ongoing payment or a self-transfer.
 */
export type ConversionPurpose = InstanceType<(typeof ConversionPurpose)[keyof Omit<typeof ConversionPurpose, 'instanceOf'>]>;
/**
 * The status of the conversion
 */
export declare enum ConversionStatus {
    /**
     * Conversion is in-flight (queued or started, not yet completed)
     */
    Pending = 0,
    /**
     * The conversion was successful
     */
    Completed = 1,
    /**
     * The conversion failed (e.g., the initial send payment failed)
     */
    Failed = 2,
    /**
     * The conversion failed and no refund was made yet, which requires action by the SDK to
     * perform the refund. This can happen if there was a failure during the conversion process.
     */
    RefundNeeded = 3,
    /**
     * The conversion failed and a refund was made
     */
    Refunded = 4
}
export declare enum ConversionType_Tags {
    FromBitcoin = "FromBitcoin",
    ToBitcoin = "ToBitcoin"
}
export declare const ConversionType: Readonly<{
    instanceOf: (obj: any) => obj is ConversionType;
    FromBitcoin: {
        new (): {
            readonly tag: ConversionType_Tags.FromBitcoin;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionType";
        };
        "new"(): {
            readonly tag: ConversionType_Tags.FromBitcoin;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionType";
        };
        instanceOf(obj: any): obj is {
            readonly tag: ConversionType_Tags.FromBitcoin;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionType";
        };
    };
    ToBitcoin: {
        new (inner: {
            fromTokenIdentifier: string;
        }): {
            readonly tag: ConversionType_Tags.ToBitcoin;
            readonly inner: Readonly<{
                fromTokenIdentifier: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionType";
        };
        "new"(inner: {
            fromTokenIdentifier: string;
        }): {
            readonly tag: ConversionType_Tags.ToBitcoin;
            readonly inner: Readonly<{
                fromTokenIdentifier: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionType";
        };
        instanceOf(obj: any): obj is {
            readonly tag: ConversionType_Tags.ToBitcoin;
            readonly inner: Readonly<{
                fromTokenIdentifier: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ConversionType";
        };
    };
}>;
export type ConversionType = InstanceType<(typeof ConversionType)[keyof Omit<typeof ConversionType, 'instanceOf'>]>;
export declare enum CrossChainAddressFamily {
    Evm = 0,
    Solana = 1,
    Tron = 2
}
/**
 * How the caller wants fees handled against the request `amount`.
 *
 * - `FeesExcluded`: `amount` is the provider invoice/deposit target; the
 * wallet pays `amount + source_transfer_fee_sats` in total.
 * - `FeesIncluded`: `amount` is the wallet's total sats budget; the provider
 * leg is sized so `amount_in + source_transfer_fee_sats <= amount`.
 */
export declare enum CrossChainFeeMode {
    FeesExcluded = 0,
    FeesIncluded = 1
}
export declare enum CrossChainProvider {
    Orchestra = 0,
    Boltz = 1
}
export declare enum CrossChainProviderContext_Tags {
    Orchestra = "Orchestra",
    Boltz = "Boltz"
}
/**
 * Provider-internal state produced by `prepare` and consumed by `send`.
 * Typed per provider so the send stage can resume without re-quoting and
 * without a serde round-trip. Callers should round-trip this value as-is.
 */
export declare const CrossChainProviderContext: Readonly<{
    instanceOf: (obj: any) => obj is CrossChainProviderContext;
    Orchestra: {
        new (inner: {
            /**
             * Orchestra quote id, passed back on `/submit`.
             */ quoteId: string;
            /**
             * Spark address Orchestra expects the deposit transfer to land on.
             */ depositAddress: string;
            /**
             * Spark-side deposit amount in the route's source-asset base units.
             */ depositAmount: U128;
        }): {
            readonly tag: CrossChainProviderContext_Tags.Orchestra;
            readonly inner: Readonly<{
                quoteId: string;
                depositAddress: string;
                depositAmount: U128;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "CrossChainProviderContext";
        };
        "new"(inner: {
            /**
             * Orchestra quote id, passed back on `/submit`.
             */ quoteId: string;
            /**
             * Spark address Orchestra expects the deposit transfer to land on.
             */ depositAddress: string;
            /**
             * Spark-side deposit amount in the route's source-asset base units.
             */ depositAmount: U128;
        }): {
            readonly tag: CrossChainProviderContext_Tags.Orchestra;
            readonly inner: Readonly<{
                quoteId: string;
                depositAddress: string;
                depositAmount: U128;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "CrossChainProviderContext";
        };
        instanceOf(obj: any): obj is {
            readonly tag: CrossChainProviderContext_Tags.Orchestra;
            readonly inner: Readonly<{
                quoteId: string;
                depositAddress: string;
                depositAmount: U128;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "CrossChainProviderContext";
        };
    };
    Boltz: {
        new (inner: {
            /**
             * Boltz swap id.
             */ swapId: string;
            /**
             * Hold invoice to pay.
             */ invoice: string;
            /**
             * Hold invoice amount in sats.
             */ invoiceAmountSats: bigint;
            /**
             * Slippage tolerance in basis points.
             */ maxSlippageBps: number;
        }): {
            readonly tag: CrossChainProviderContext_Tags.Boltz;
            readonly inner: Readonly<{
                swapId: string;
                invoice: string;
                invoiceAmountSats: bigint;
                maxSlippageBps: number;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "CrossChainProviderContext";
        };
        "new"(inner: {
            /**
             * Boltz swap id.
             */ swapId: string;
            /**
             * Hold invoice to pay.
             */ invoice: string;
            /**
             * Hold invoice amount in sats.
             */ invoiceAmountSats: bigint;
            /**
             * Slippage tolerance in basis points.
             */ maxSlippageBps: number;
        }): {
            readonly tag: CrossChainProviderContext_Tags.Boltz;
            readonly inner: Readonly<{
                swapId: string;
                invoice: string;
                invoiceAmountSats: bigint;
                maxSlippageBps: number;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "CrossChainProviderContext";
        };
        instanceOf(obj: any): obj is {
            readonly tag: CrossChainProviderContext_Tags.Boltz;
            readonly inner: Readonly<{
                swapId: string;
                invoice: string;
                invoiceAmountSats: bigint;
                maxSlippageBps: number;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "CrossChainProviderContext";
        };
    };
}>;
/**
 * Provider-internal state produced by `prepare` and consumed by `send`.
 * Typed per provider so the send stage can resume without re-quoting and
 * without a serde round-trip. Callers should round-trip this value as-is.
 */
export type CrossChainProviderContext = InstanceType<(typeof CrossChainProviderContext)[keyof Omit<typeof CrossChainProviderContext, 'instanceOf'>]>;
export declare enum CrossChainRouteFilter_Tags {
    Send = "Send",
    Receive = "Receive"
}
/**
 * Filter for [`CrossChainService::get_routes`] and the public
 * `get_cross_chain_routes()` API.
 */
export declare const CrossChainRouteFilter: Readonly<{
    instanceOf: (obj: any) => obj is CrossChainRouteFilter;
    Send: {
        new (inner: {
            addressDetails: CrossChainAddressDetails;
        }): {
            readonly tag: CrossChainRouteFilter_Tags.Send;
            readonly inner: Readonly<{
                addressDetails: CrossChainAddressDetails;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "CrossChainRouteFilter";
        };
        "new"(inner: {
            addressDetails: CrossChainAddressDetails;
        }): {
            readonly tag: CrossChainRouteFilter_Tags.Send;
            readonly inner: Readonly<{
                addressDetails: CrossChainAddressDetails;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "CrossChainRouteFilter";
        };
        instanceOf(obj: any): obj is {
            readonly tag: CrossChainRouteFilter_Tags.Send;
            readonly inner: Readonly<{
                addressDetails: CrossChainAddressDetails;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "CrossChainRouteFilter";
        };
    };
    Receive: {
        new (inner: {
            contractAddress: string | undefined;
        }): {
            readonly tag: CrossChainRouteFilter_Tags.Receive;
            readonly inner: Readonly<{
                contractAddress: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "CrossChainRouteFilter";
        };
        "new"(inner: {
            contractAddress: string | undefined;
        }): {
            readonly tag: CrossChainRouteFilter_Tags.Receive;
            readonly inner: Readonly<{
                contractAddress: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "CrossChainRouteFilter";
        };
        instanceOf(obj: any): obj is {
            readonly tag: CrossChainRouteFilter_Tags.Receive;
            readonly inner: Readonly<{
                contractAddress: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "CrossChainRouteFilter";
        };
    };
}>;
/**
 * Filter for [`CrossChainService::get_routes`] and the public
 * `get_cross_chain_routes()` API.
 */
export type CrossChainRouteFilter = InstanceType<(typeof CrossChainRouteFilter)[keyof Omit<typeof CrossChainRouteFilter, 'instanceOf'>]>;
export declare enum DepositClaimError_Tags {
    MaxDepositClaimFeeExceeded = "MaxDepositClaimFeeExceeded",
    MissingUtxo = "MissingUtxo",
    Generic = "Generic"
}
export declare const DepositClaimError: Readonly<{
    instanceOf: (obj: any) => obj is DepositClaimError;
    MaxDepositClaimFeeExceeded: {
        new (inner: {
            tx: string;
            vout: number;
            maxFee: Fee | undefined;
            requiredFeeSats: bigint;
            requiredFeeRateSatPerVbyte: bigint;
        }): {
            readonly tag: DepositClaimError_Tags.MaxDepositClaimFeeExceeded;
            readonly inner: Readonly<{
                tx: string;
                vout: number;
                maxFee: Fee | undefined;
                requiredFeeSats: bigint;
                requiredFeeRateSatPerVbyte: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "DepositClaimError";
        };
        "new"(inner: {
            tx: string;
            vout: number;
            maxFee: Fee | undefined;
            requiredFeeSats: bigint;
            requiredFeeRateSatPerVbyte: bigint;
        }): {
            readonly tag: DepositClaimError_Tags.MaxDepositClaimFeeExceeded;
            readonly inner: Readonly<{
                tx: string;
                vout: number;
                maxFee: Fee | undefined;
                requiredFeeSats: bigint;
                requiredFeeRateSatPerVbyte: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "DepositClaimError";
        };
        instanceOf(obj: any): obj is {
            readonly tag: DepositClaimError_Tags.MaxDepositClaimFeeExceeded;
            readonly inner: Readonly<{
                tx: string;
                vout: number;
                maxFee: Fee | undefined;
                requiredFeeSats: bigint;
                requiredFeeRateSatPerVbyte: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "DepositClaimError";
        };
    };
    MissingUtxo: {
        new (inner: {
            tx: string;
            vout: number;
        }): {
            readonly tag: DepositClaimError_Tags.MissingUtxo;
            readonly inner: Readonly<{
                tx: string;
                vout: number;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "DepositClaimError";
        };
        "new"(inner: {
            tx: string;
            vout: number;
        }): {
            readonly tag: DepositClaimError_Tags.MissingUtxo;
            readonly inner: Readonly<{
                tx: string;
                vout: number;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "DepositClaimError";
        };
        instanceOf(obj: any): obj is {
            readonly tag: DepositClaimError_Tags.MissingUtxo;
            readonly inner: Readonly<{
                tx: string;
                vout: number;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "DepositClaimError";
        };
    };
    Generic: {
        new (inner: {
            message: string;
        }): {
            readonly tag: DepositClaimError_Tags.Generic;
            readonly inner: Readonly<{
                message: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "DepositClaimError";
        };
        "new"(inner: {
            message: string;
        }): {
            readonly tag: DepositClaimError_Tags.Generic;
            readonly inner: Readonly<{
                message: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "DepositClaimError";
        };
        instanceOf(obj: any): obj is {
            readonly tag: DepositClaimError_Tags.Generic;
            readonly inner: Readonly<{
                message: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "DepositClaimError";
        };
    };
}>;
export type DepositClaimError = InstanceType<(typeof DepositClaimError)[keyof Omit<typeof DepositClaimError, 'instanceOf'>]>;
export declare enum DomainAssociation_Tags {
    Associated = "Associated",
    NotAssociated = "NotAssociated",
    Skipped = "Skipped"
}
/**
 * Result of [`PrfProvider::check_domain_association`]. The platform's
 * out-of-band verification (AASA / assetlinks) gates passkey
 * ceremonies but its failures collapse into opaque platform errors;
 * this gives callers a definitive signal they can gate UX on.
 */
export declare const DomainAssociation: Readonly<{
    instanceOf: (obj: any) => obj is DomainAssociation;
    Associated: {
        new (): {
            readonly tag: DomainAssociation_Tags.Associated;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "DomainAssociation";
        };
        "new"(): {
            readonly tag: DomainAssociation_Tags.Associated;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "DomainAssociation";
        };
        instanceOf(obj: any): obj is {
            readonly tag: DomainAssociation_Tags.Associated;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "DomainAssociation";
        };
    };
    NotAssociated: {
        new (inner: {
            source: string;
            reason: string;
        }): {
            readonly tag: DomainAssociation_Tags.NotAssociated;
            readonly inner: Readonly<{
                source: string;
                reason: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "DomainAssociation";
        };
        "new"(inner: {
            source: string;
            reason: string;
        }): {
            readonly tag: DomainAssociation_Tags.NotAssociated;
            readonly inner: Readonly<{
                source: string;
                reason: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "DomainAssociation";
        };
        instanceOf(obj: any): obj is {
            readonly tag: DomainAssociation_Tags.NotAssociated;
            readonly inner: Readonly<{
                source: string;
                reason: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "DomainAssociation";
        };
    };
    Skipped: {
        new (inner: {
            reason: string;
        }): {
            readonly tag: DomainAssociation_Tags.Skipped;
            readonly inner: Readonly<{
                reason: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "DomainAssociation";
        };
        "new"(inner: {
            reason: string;
        }): {
            readonly tag: DomainAssociation_Tags.Skipped;
            readonly inner: Readonly<{
                reason: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "DomainAssociation";
        };
        instanceOf(obj: any): obj is {
            readonly tag: DomainAssociation_Tags.Skipped;
            readonly inner: Readonly<{
                reason: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "DomainAssociation";
        };
    };
}>;
/**
 * Result of [`PrfProvider::check_domain_association`]. The platform's
 * out-of-band verification (AASA / assetlinks) gates passkey
 * ceremonies but its failures collapse into opaque platform errors;
 * this gives callers a definitive signal they can gate UX on.
 */
export type DomainAssociation = InstanceType<(typeof DomainAssociation)[keyof Omit<typeof DomainAssociation, 'instanceOf'>]>;
/**
 * Coarse classification of a passkey error by the UX reaction it
 * warrants. The variant names the action to take, not the cause.
 */
export declare enum ErrorKind {
    /**
     * User dismissed the prompt. Do not auto-retry.
     */
    Cancel = 0,
    /**
     * No matching credential on this device. Offer to register one.
     */
    NoCredential = 1,
    /**
     * Authenticator lacks the PRF extension. Fall back to a non-passkey
     * flow or guide the user to another credential provider.
     */
    PrfUnsupported = 2,
    /**
     * PRF is supported but evaluation failed. Often transient: retrying
     * the ceremony may succeed.
     */
    PrfFailed = 3,
    /**
     * Platform / app setup is wrong (entitlement, assetlinks, rpId
     * scope). Not retryable until the integrator fixes it.
     */
    Configuration = 4,
    /**
     * An existing credential matched. Route the user to sign-in.
     */
    AlreadyExists = 5,
    /**
     * The prompt closed on the platform inactivity timeout with no user
     * action. Unlike `Cancel`, safe to auto-retry or re-prompt.
     */
    Timeout = 6,
    /**
     * The ceremony failed for a security or state reason. Offer a retry;
     * if it persists, the credential or RP setup may be at fault.
     */
    AuthFailure = 7,
    /**
     * Failure the caller can't act on. Show a generic "try again".
     */
    Internal = 8
}
export declare enum ExternalFrostDerivation_Tags {
    SigningLeaf = "SigningLeaf",
    StaticDeposit = "StaticDeposit",
    HtlcPreimage = "HtlcPreimage",
    Identity = "Identity"
}
/**
 * FFI-safe representation of `spark_wallet::FrostDerivation`.
 */
export declare const ExternalFrostDerivation: Readonly<{
    instanceOf: (obj: any) => obj is ExternalFrostDerivation;
    SigningLeaf: {
        new (inner: {
            leafId: ExternalTreeNodeId;
        }): {
            readonly tag: ExternalFrostDerivation_Tags.SigningLeaf;
            readonly inner: Readonly<{
                leafId: ExternalTreeNodeId;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ExternalFrostDerivation";
        };
        "new"(inner: {
            leafId: ExternalTreeNodeId;
        }): {
            readonly tag: ExternalFrostDerivation_Tags.SigningLeaf;
            readonly inner: Readonly<{
                leafId: ExternalTreeNodeId;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ExternalFrostDerivation";
        };
        instanceOf(obj: any): obj is {
            readonly tag: ExternalFrostDerivation_Tags.SigningLeaf;
            readonly inner: Readonly<{
                leafId: ExternalTreeNodeId;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ExternalFrostDerivation";
        };
    };
    StaticDeposit: {
        new (inner: {
            index: number;
        }): {
            readonly tag: ExternalFrostDerivation_Tags.StaticDeposit;
            readonly inner: Readonly<{
                index: number;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ExternalFrostDerivation";
        };
        "new"(inner: {
            index: number;
        }): {
            readonly tag: ExternalFrostDerivation_Tags.StaticDeposit;
            readonly inner: Readonly<{
                index: number;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ExternalFrostDerivation";
        };
        instanceOf(obj: any): obj is {
            readonly tag: ExternalFrostDerivation_Tags.StaticDeposit;
            readonly inner: Readonly<{
                index: number;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ExternalFrostDerivation";
        };
    };
    HtlcPreimage: {
        new (): {
            readonly tag: ExternalFrostDerivation_Tags.HtlcPreimage;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ExternalFrostDerivation";
        };
        "new"(): {
            readonly tag: ExternalFrostDerivation_Tags.HtlcPreimage;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ExternalFrostDerivation";
        };
        instanceOf(obj: any): obj is {
            readonly tag: ExternalFrostDerivation_Tags.HtlcPreimage;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ExternalFrostDerivation";
        };
    };
    Identity: {
        new (): {
            readonly tag: ExternalFrostDerivation_Tags.Identity;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ExternalFrostDerivation";
        };
        "new"(): {
            readonly tag: ExternalFrostDerivation_Tags.Identity;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ExternalFrostDerivation";
        };
        instanceOf(obj: any): obj is {
            readonly tag: ExternalFrostDerivation_Tags.Identity;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ExternalFrostDerivation";
        };
    };
}>;
/**
 * FFI-safe representation of `spark_wallet::FrostDerivation`.
 */
export type ExternalFrostDerivation = InstanceType<(typeof ExternalFrostDerivation)[keyof Omit<typeof ExternalFrostDerivation, 'instanceOf'>]>;
/**
 * FFI-safe representation of `spark_wallet::SparkInvoiceKind`.
 */
export declare enum ExternalSparkInvoiceKind {
    Sats = 0,
    Tokens = 1
}
/**
 * FFI-safe representation of `spark_wallet::TokenTransactionKind`.
 */
export declare enum ExternalTokenTransactionKind {
    Freeze = 0,
    Partial = 1,
    Final = 2
}
export declare enum Fee_Tags {
    Fixed = "Fixed",
    Rate = "Rate"
}
export declare const Fee: Readonly<{
    instanceOf: (obj: any) => obj is Fee;
    Fixed: {
        new (inner: {
            amount: bigint;
        }): {
            readonly tag: Fee_Tags.Fixed;
            readonly inner: Readonly<{
                amount: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "Fee";
        };
        "new"(inner: {
            amount: bigint;
        }): {
            readonly tag: Fee_Tags.Fixed;
            readonly inner: Readonly<{
                amount: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "Fee";
        };
        instanceOf(obj: any): obj is {
            readonly tag: Fee_Tags.Fixed;
            readonly inner: Readonly<{
                amount: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "Fee";
        };
    };
    Rate: {
        new (inner: {
            satPerVbyte: bigint;
        }): {
            readonly tag: Fee_Tags.Rate;
            readonly inner: Readonly<{
                satPerVbyte: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "Fee";
        };
        "new"(inner: {
            satPerVbyte: bigint;
        }): {
            readonly tag: Fee_Tags.Rate;
            readonly inner: Readonly<{
                satPerVbyte: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "Fee";
        };
        instanceOf(obj: any): obj is {
            readonly tag: Fee_Tags.Rate;
            readonly inner: Readonly<{
                satPerVbyte: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "Fee";
        };
    };
}>;
export type Fee = InstanceType<(typeof Fee)[keyof Omit<typeof Fee, 'instanceOf'>]>;
/**
 * Specifies how fees are handled in a payment.
 *
 * "Fees" are the wallet's sender-paid fees (Lightning routing, on-chain,
 * Spark transfer). They do not include provider spreads or destination-chain
 * costs on cross-chain routes; those are reported separately via
 * `estimated_out` on the prepare response and are not deterministic.
 * `FeePolicy` only controls the wallet's spend accounting.
 */
export declare enum FeePolicy {
    /**
     * Fees are added on top of `amount`. Wallet's total spend is
     * `amount + fees`. For direct sat sends, the recipient receives exactly
     * `amount`. Default.
     */
    FeesExcluded = 0,
    /**
     * Fees are deducted from `amount`. Wallet's total spend is `amount`.
     * Use this to drain a balance — pass `amount = balance` and the wallet
     * spends exactly that.
     */
    FeesIncluded = 1
}
export declare enum InputType_Tags {
    BitcoinAddress = "BitcoinAddress",
    Bolt11Invoice = "Bolt11Invoice",
    Bolt12Invoice = "Bolt12Invoice",
    Bolt12Offer = "Bolt12Offer",
    LightningAddress = "LightningAddress",
    LnurlPay = "LnurlPay",
    SilentPaymentAddress = "SilentPaymentAddress",
    LnurlAuth = "LnurlAuth",
    Url = "Url",
    Bip21 = "Bip21",
    Bolt12InvoiceRequest = "Bolt12InvoiceRequest",
    LnurlWithdraw = "LnurlWithdraw",
    SparkAddress = "SparkAddress",
    SparkInvoice = "SparkInvoice",
    CrossChainAddress = "CrossChainAddress"
}
export declare const InputType: Readonly<{
    instanceOf: (obj: any) => obj is InputType;
    BitcoinAddress: {
        new (v0: BitcoinAddressDetails): {
            readonly tag: InputType_Tags.BitcoinAddress;
            readonly inner: Readonly<[BitcoinAddressDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
        "new"(v0: BitcoinAddressDetails): {
            readonly tag: InputType_Tags.BitcoinAddress;
            readonly inner: Readonly<[BitcoinAddressDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
        instanceOf(obj: any): obj is {
            readonly tag: InputType_Tags.BitcoinAddress;
            readonly inner: Readonly<[BitcoinAddressDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
    };
    Bolt11Invoice: {
        new (v0: Bolt11InvoiceDetails): {
            readonly tag: InputType_Tags.Bolt11Invoice;
            readonly inner: Readonly<[Bolt11InvoiceDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
        "new"(v0: Bolt11InvoiceDetails): {
            readonly tag: InputType_Tags.Bolt11Invoice;
            readonly inner: Readonly<[Bolt11InvoiceDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
        instanceOf(obj: any): obj is {
            readonly tag: InputType_Tags.Bolt11Invoice;
            readonly inner: Readonly<[Bolt11InvoiceDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
    };
    Bolt12Invoice: {
        new (v0: Bolt12InvoiceDetails): {
            readonly tag: InputType_Tags.Bolt12Invoice;
            readonly inner: Readonly<[Bolt12InvoiceDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
        "new"(v0: Bolt12InvoiceDetails): {
            readonly tag: InputType_Tags.Bolt12Invoice;
            readonly inner: Readonly<[Bolt12InvoiceDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
        instanceOf(obj: any): obj is {
            readonly tag: InputType_Tags.Bolt12Invoice;
            readonly inner: Readonly<[Bolt12InvoiceDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
    };
    Bolt12Offer: {
        new (v0: Bolt12OfferDetails): {
            readonly tag: InputType_Tags.Bolt12Offer;
            readonly inner: Readonly<[Bolt12OfferDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
        "new"(v0: Bolt12OfferDetails): {
            readonly tag: InputType_Tags.Bolt12Offer;
            readonly inner: Readonly<[Bolt12OfferDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
        instanceOf(obj: any): obj is {
            readonly tag: InputType_Tags.Bolt12Offer;
            readonly inner: Readonly<[Bolt12OfferDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
    };
    LightningAddress: {
        new (v0: LightningAddressDetails): {
            readonly tag: InputType_Tags.LightningAddress;
            readonly inner: Readonly<[LightningAddressDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
        "new"(v0: LightningAddressDetails): {
            readonly tag: InputType_Tags.LightningAddress;
            readonly inner: Readonly<[LightningAddressDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
        instanceOf(obj: any): obj is {
            readonly tag: InputType_Tags.LightningAddress;
            readonly inner: Readonly<[LightningAddressDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
    };
    LnurlPay: {
        new (v0: LnurlPayRequestDetails): {
            readonly tag: InputType_Tags.LnurlPay;
            readonly inner: Readonly<[LnurlPayRequestDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
        "new"(v0: LnurlPayRequestDetails): {
            readonly tag: InputType_Tags.LnurlPay;
            readonly inner: Readonly<[LnurlPayRequestDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
        instanceOf(obj: any): obj is {
            readonly tag: InputType_Tags.LnurlPay;
            readonly inner: Readonly<[LnurlPayRequestDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
    };
    SilentPaymentAddress: {
        new (v0: SilentPaymentAddressDetails): {
            readonly tag: InputType_Tags.SilentPaymentAddress;
            readonly inner: Readonly<[SilentPaymentAddressDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
        "new"(v0: SilentPaymentAddressDetails): {
            readonly tag: InputType_Tags.SilentPaymentAddress;
            readonly inner: Readonly<[SilentPaymentAddressDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
        instanceOf(obj: any): obj is {
            readonly tag: InputType_Tags.SilentPaymentAddress;
            readonly inner: Readonly<[SilentPaymentAddressDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
    };
    LnurlAuth: {
        new (v0: LnurlAuthRequestDetails): {
            readonly tag: InputType_Tags.LnurlAuth;
            readonly inner: Readonly<[LnurlAuthRequestDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
        "new"(v0: LnurlAuthRequestDetails): {
            readonly tag: InputType_Tags.LnurlAuth;
            readonly inner: Readonly<[LnurlAuthRequestDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
        instanceOf(obj: any): obj is {
            readonly tag: InputType_Tags.LnurlAuth;
            readonly inner: Readonly<[LnurlAuthRequestDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
    };
    Url: {
        new (v0: string): {
            readonly tag: InputType_Tags.Url;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
        "new"(v0: string): {
            readonly tag: InputType_Tags.Url;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
        instanceOf(obj: any): obj is {
            readonly tag: InputType_Tags.Url;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
    };
    Bip21: {
        new (v0: Bip21Details): {
            readonly tag: InputType_Tags.Bip21;
            readonly inner: Readonly<[Bip21Details]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
        "new"(v0: Bip21Details): {
            readonly tag: InputType_Tags.Bip21;
            readonly inner: Readonly<[Bip21Details]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
        instanceOf(obj: any): obj is {
            readonly tag: InputType_Tags.Bip21;
            readonly inner: Readonly<[Bip21Details]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
    };
    Bolt12InvoiceRequest: {
        new (v0: Bolt12InvoiceRequestDetails): {
            readonly tag: InputType_Tags.Bolt12InvoiceRequest;
            readonly inner: Readonly<[Bolt12InvoiceRequestDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
        "new"(v0: Bolt12InvoiceRequestDetails): {
            readonly tag: InputType_Tags.Bolt12InvoiceRequest;
            readonly inner: Readonly<[Bolt12InvoiceRequestDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
        instanceOf(obj: any): obj is {
            readonly tag: InputType_Tags.Bolt12InvoiceRequest;
            readonly inner: Readonly<[Bolt12InvoiceRequestDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
    };
    LnurlWithdraw: {
        new (v0: LnurlWithdrawRequestDetails): {
            readonly tag: InputType_Tags.LnurlWithdraw;
            readonly inner: Readonly<[LnurlWithdrawRequestDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
        "new"(v0: LnurlWithdrawRequestDetails): {
            readonly tag: InputType_Tags.LnurlWithdraw;
            readonly inner: Readonly<[LnurlWithdrawRequestDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
        instanceOf(obj: any): obj is {
            readonly tag: InputType_Tags.LnurlWithdraw;
            readonly inner: Readonly<[LnurlWithdrawRequestDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
    };
    SparkAddress: {
        new (v0: SparkAddressDetails): {
            readonly tag: InputType_Tags.SparkAddress;
            readonly inner: Readonly<[SparkAddressDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
        "new"(v0: SparkAddressDetails): {
            readonly tag: InputType_Tags.SparkAddress;
            readonly inner: Readonly<[SparkAddressDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
        instanceOf(obj: any): obj is {
            readonly tag: InputType_Tags.SparkAddress;
            readonly inner: Readonly<[SparkAddressDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
    };
    SparkInvoice: {
        new (v0: SparkInvoiceDetails): {
            readonly tag: InputType_Tags.SparkInvoice;
            readonly inner: Readonly<[SparkInvoiceDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
        "new"(v0: SparkInvoiceDetails): {
            readonly tag: InputType_Tags.SparkInvoice;
            readonly inner: Readonly<[SparkInvoiceDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
        instanceOf(obj: any): obj is {
            readonly tag: InputType_Tags.SparkInvoice;
            readonly inner: Readonly<[SparkInvoiceDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
    };
    CrossChainAddress: {
        new (v0: CrossChainAddressDetails): {
            readonly tag: InputType_Tags.CrossChainAddress;
            readonly inner: Readonly<[CrossChainAddressDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
        "new"(v0: CrossChainAddressDetails): {
            readonly tag: InputType_Tags.CrossChainAddress;
            readonly inner: Readonly<[CrossChainAddressDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
        instanceOf(obj: any): obj is {
            readonly tag: InputType_Tags.CrossChainAddress;
            readonly inner: Readonly<[CrossChainAddressDetails]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "InputType";
        };
    };
}>;
export type InputType = InstanceType<(typeof InputType)[keyof Omit<typeof InputType, 'instanceOf'>]>;
export declare enum LnurlCallbackStatus_Tags {
    Ok = "Ok",
    ErrorStatus = "ErrorStatus"
}
/**
 * The response from a LNURL-auth callback, indicating success or failure.
 */
export declare const LnurlCallbackStatus: Readonly<{
    instanceOf: (obj: any) => obj is LnurlCallbackStatus;
    Ok: {
        new (): {
            readonly tag: LnurlCallbackStatus_Tags.Ok;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "LnurlCallbackStatus";
        };
        "new"(): {
            readonly tag: LnurlCallbackStatus_Tags.Ok;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "LnurlCallbackStatus";
        };
        instanceOf(obj: any): obj is {
            readonly tag: LnurlCallbackStatus_Tags.Ok;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "LnurlCallbackStatus";
        };
    };
    ErrorStatus: {
        new (inner: {
            errorDetails: LnurlErrorDetails;
        }): {
            readonly tag: LnurlCallbackStatus_Tags.ErrorStatus;
            readonly inner: Readonly<{
                errorDetails: LnurlErrorDetails;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "LnurlCallbackStatus";
        };
        "new"(inner: {
            errorDetails: LnurlErrorDetails;
        }): {
            readonly tag: LnurlCallbackStatus_Tags.ErrorStatus;
            readonly inner: Readonly<{
                errorDetails: LnurlErrorDetails;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "LnurlCallbackStatus";
        };
        instanceOf(obj: any): obj is {
            readonly tag: LnurlCallbackStatus_Tags.ErrorStatus;
            readonly inner: Readonly<{
                errorDetails: LnurlErrorDetails;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "LnurlCallbackStatus";
        };
    };
}>;
/**
 * The response from a LNURL-auth callback, indicating success or failure.
 */
export type LnurlCallbackStatus = InstanceType<(typeof LnurlCallbackStatus)[keyof Omit<typeof LnurlCallbackStatus, 'instanceOf'>]>;
export declare enum MaxFee_Tags {
    Fixed = "Fixed",
    Rate = "Rate",
    NetworkRecommended = "NetworkRecommended"
}
export declare const MaxFee: Readonly<{
    instanceOf: (obj: any) => obj is MaxFee;
    Fixed: {
        new (inner: {
            amount: bigint;
        }): {
            readonly tag: MaxFee_Tags.Fixed;
            readonly inner: Readonly<{
                amount: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "MaxFee";
        };
        "new"(inner: {
            amount: bigint;
        }): {
            readonly tag: MaxFee_Tags.Fixed;
            readonly inner: Readonly<{
                amount: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "MaxFee";
        };
        instanceOf(obj: any): obj is {
            readonly tag: MaxFee_Tags.Fixed;
            readonly inner: Readonly<{
                amount: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "MaxFee";
        };
    };
    Rate: {
        new (inner: {
            satPerVbyte: bigint;
        }): {
            readonly tag: MaxFee_Tags.Rate;
            readonly inner: Readonly<{
                satPerVbyte: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "MaxFee";
        };
        "new"(inner: {
            satPerVbyte: bigint;
        }): {
            readonly tag: MaxFee_Tags.Rate;
            readonly inner: Readonly<{
                satPerVbyte: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "MaxFee";
        };
        instanceOf(obj: any): obj is {
            readonly tag: MaxFee_Tags.Rate;
            readonly inner: Readonly<{
                satPerVbyte: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "MaxFee";
        };
    };
    NetworkRecommended: {
        new (inner: {
            leewaySatPerVbyte: bigint;
        }): {
            readonly tag: MaxFee_Tags.NetworkRecommended;
            readonly inner: Readonly<{
                leewaySatPerVbyte: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "MaxFee";
        };
        "new"(inner: {
            leewaySatPerVbyte: bigint;
        }): {
            readonly tag: MaxFee_Tags.NetworkRecommended;
            readonly inner: Readonly<{
                leewaySatPerVbyte: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "MaxFee";
        };
        instanceOf(obj: any): obj is {
            readonly tag: MaxFee_Tags.NetworkRecommended;
            readonly inner: Readonly<{
                leewaySatPerVbyte: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "MaxFee";
        };
    };
}>;
export type MaxFee = InstanceType<(typeof MaxFee)[keyof Omit<typeof MaxFee, 'instanceOf'>]>;
export declare enum Network {
    Mainnet = 0,
    Regtest = 1
}
export declare enum OnchainConfirmationSpeed {
    Fast = 0,
    Medium = 1,
    Slow = 2
}
/**
 * Mode of a manually-triggered optimization run.
 */
export declare enum OptimizationMode {
    /**
     * Run until no further optimization is productive.
     */
    Full = 0,
    /**
     * Execute a single round and return so the caller can drive progress.
     */
    SingleRound = 1
}
export declare enum OptimizationOutcome_Tags {
    Completed = "Completed",
    InProgress = "InProgress"
}
/**
 * Outcome of a [`BreezSdk::optimize_leaves`] call.
 *
 * `rounds_executed` on `Completed` refers to rounds run by *this call*.
 * The SDK holds no cross-call state — callers driving a `SingleRound`
 * loop maintain their own cumulative counter if they need one.
 *
 * A `Completed { rounds_executed: 0 }` outcome means the wallet was
 * already optimal at call time (no swap was needed).
 *
 * **`SingleRound` loop pattern**: terminate on anything that isn't
 * `InProgress`. `Completed` covers both the final swap of a productive
 * run and the "already optimal" no-op case (the latter as
 * `rounds_executed: 0`).
 *
 * ```ignore
 * loop {
 * let request = OptimizeLeavesRequest { mode: OptimizationMode::SingleRound };
 * match sdk.optimize_leaves(request).await?.outcome {
 * OptimizationOutcome::InProgress => continue,
 * OptimizationOutcome::Completed { .. } => break,
 * }
 * }
 * ```
 */
export declare const OptimizationOutcome: Readonly<{
    instanceOf: (obj: any) => obj is OptimizationOutcome;
    Completed: {
        new (inner: {
            roundsExecuted: number;
        }): {
            readonly tag: OptimizationOutcome_Tags.Completed;
            readonly inner: Readonly<{
                roundsExecuted: number;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "OptimizationOutcome";
        };
        "new"(inner: {
            roundsExecuted: number;
        }): {
            readonly tag: OptimizationOutcome_Tags.Completed;
            readonly inner: Readonly<{
                roundsExecuted: number;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "OptimizationOutcome";
        };
        instanceOf(obj: any): obj is {
            readonly tag: OptimizationOutcome_Tags.Completed;
            readonly inner: Readonly<{
                roundsExecuted: number;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "OptimizationOutcome";
        };
    };
    InProgress: {
        new (): {
            readonly tag: OptimizationOutcome_Tags.InProgress;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "OptimizationOutcome";
        };
        "new"(): {
            readonly tag: OptimizationOutcome_Tags.InProgress;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "OptimizationOutcome";
        };
        instanceOf(obj: any): obj is {
            readonly tag: OptimizationOutcome_Tags.InProgress;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "OptimizationOutcome";
        };
    };
}>;
/**
 * Outcome of a [`BreezSdk::optimize_leaves`] call.
 *
 * `rounds_executed` on `Completed` refers to rounds run by *this call*.
 * The SDK holds no cross-call state — callers driving a `SingleRound`
 * loop maintain their own cumulative counter if they need one.
 *
 * A `Completed { rounds_executed: 0 }` outcome means the wallet was
 * already optimal at call time (no swap was needed).
 *
 * **`SingleRound` loop pattern**: terminate on anything that isn't
 * `InProgress`. `Completed` covers both the final swap of a productive
 * run and the "already optimal" no-op case (the latter as
 * `rounds_executed: 0`).
 *
 * ```ignore
 * loop {
 * let request = OptimizeLeavesRequest { mode: OptimizationMode::SingleRound };
 * match sdk.optimize_leaves(request).await?.outcome {
 * OptimizationOutcome::InProgress => continue,
 * OptimizationOutcome::Completed { .. } => break,
 * }
 * }
 * ```
 */
export type OptimizationOutcome = InstanceType<(typeof OptimizationOutcome)[keyof Omit<typeof OptimizationOutcome, 'instanceOf'>]>;
export declare enum PasskeyAvailability_Tags {
    Available = "Available",
    PrfUnsupported = "PrfUnsupported",
    NotAssociated = "NotAssociated",
    Skipped = "Skipped"
}
/**
 * Single-value result of [`PasskeyClient::check_availability`].
 * Collapses [`PrfProvider::is_supported`] +
 * [`PrfProvider::check_domain_association`] into one variant per
 * distinct host UX reaction.
 */
export declare const PasskeyAvailability: Readonly<{
    instanceOf: (obj: any) => obj is PasskeyAvailability;
    Available: {
        new (): {
            readonly tag: PasskeyAvailability_Tags.Available;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyAvailability";
        };
        "new"(): {
            readonly tag: PasskeyAvailability_Tags.Available;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyAvailability";
        };
        instanceOf(obj: any): obj is {
            readonly tag: PasskeyAvailability_Tags.Available;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyAvailability";
        };
    };
    PrfUnsupported: {
        new (): {
            readonly tag: PasskeyAvailability_Tags.PrfUnsupported;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyAvailability";
        };
        "new"(): {
            readonly tag: PasskeyAvailability_Tags.PrfUnsupported;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyAvailability";
        };
        instanceOf(obj: any): obj is {
            readonly tag: PasskeyAvailability_Tags.PrfUnsupported;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyAvailability";
        };
    };
    NotAssociated: {
        new (inner: {
            source: string;
            reason: string;
        }): {
            readonly tag: PasskeyAvailability_Tags.NotAssociated;
            readonly inner: Readonly<{
                source: string;
                reason: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyAvailability";
        };
        "new"(inner: {
            source: string;
            reason: string;
        }): {
            readonly tag: PasskeyAvailability_Tags.NotAssociated;
            readonly inner: Readonly<{
                source: string;
                reason: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyAvailability";
        };
        instanceOf(obj: any): obj is {
            readonly tag: PasskeyAvailability_Tags.NotAssociated;
            readonly inner: Readonly<{
                source: string;
                reason: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyAvailability";
        };
    };
    Skipped: {
        new (inner: {
            reason: string;
        }): {
            readonly tag: PasskeyAvailability_Tags.Skipped;
            readonly inner: Readonly<{
                reason: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyAvailability";
        };
        "new"(inner: {
            reason: string;
        }): {
            readonly tag: PasskeyAvailability_Tags.Skipped;
            readonly inner: Readonly<{
                reason: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyAvailability";
        };
        instanceOf(obj: any): obj is {
            readonly tag: PasskeyAvailability_Tags.Skipped;
            readonly inner: Readonly<{
                reason: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyAvailability";
        };
    };
}>;
/**
 * Single-value result of [`PasskeyClient::check_availability`].
 * Collapses [`PrfProvider::is_supported`] +
 * [`PrfProvider::check_domain_association`] into one variant per
 * distinct host UX reaction.
 */
export type PasskeyAvailability = InstanceType<(typeof PasskeyAvailability)[keyof Omit<typeof PasskeyAvailability, 'instanceOf'>]>;
export declare enum PasskeyError_Tags {
    Prf = "Prf",
    RelayConnectionFailed = "RelayConnectionFailed",
    NostrWriteFailed = "NostrWriteFailed",
    NostrReadFailed = "NostrReadFailed",
    KeyDerivationError = "KeyDerivationError",
    InvalidPrfOutput = "InvalidPrfOutput",
    MnemonicError = "MnemonicError",
    InvalidSalt = "InvalidSalt",
    Generic = "Generic"
}
/**
 * Error type for passkey operations.
 */
export declare const PasskeyError: Readonly<{
    instanceOf: (obj: any) => obj is PasskeyError;
    Prf: {
        new (v0: PrfProviderError): {
            readonly tag: PasskeyError_Tags.Prf;
            readonly inner: Readonly<[PrfProviderError]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: PrfProviderError): {
            readonly tag: PasskeyError_Tags.Prf;
            readonly inner: Readonly<[PrfProviderError]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: PasskeyError_Tags.Prf;
            readonly inner: Readonly<[PrfProviderError]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: PasskeyError_Tags.Prf;
            readonly inner: Readonly<[PrfProviderError]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: PasskeyError_Tags.Prf;
            readonly inner: Readonly<[PrfProviderError]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[PrfProviderError]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    RelayConnectionFailed: {
        new (v0: string): {
            readonly tag: PasskeyError_Tags.RelayConnectionFailed;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: PasskeyError_Tags.RelayConnectionFailed;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: PasskeyError_Tags.RelayConnectionFailed;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: PasskeyError_Tags.RelayConnectionFailed;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: PasskeyError_Tags.RelayConnectionFailed;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    NostrWriteFailed: {
        new (v0: string): {
            readonly tag: PasskeyError_Tags.NostrWriteFailed;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: PasskeyError_Tags.NostrWriteFailed;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: PasskeyError_Tags.NostrWriteFailed;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: PasskeyError_Tags.NostrWriteFailed;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: PasskeyError_Tags.NostrWriteFailed;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    NostrReadFailed: {
        new (v0: string): {
            readonly tag: PasskeyError_Tags.NostrReadFailed;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: PasskeyError_Tags.NostrReadFailed;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: PasskeyError_Tags.NostrReadFailed;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: PasskeyError_Tags.NostrReadFailed;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: PasskeyError_Tags.NostrReadFailed;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    KeyDerivationError: {
        new (v0: string): {
            readonly tag: PasskeyError_Tags.KeyDerivationError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: PasskeyError_Tags.KeyDerivationError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: PasskeyError_Tags.KeyDerivationError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: PasskeyError_Tags.KeyDerivationError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: PasskeyError_Tags.KeyDerivationError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    InvalidPrfOutput: {
        new (v0: string): {
            readonly tag: PasskeyError_Tags.InvalidPrfOutput;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: PasskeyError_Tags.InvalidPrfOutput;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: PasskeyError_Tags.InvalidPrfOutput;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: PasskeyError_Tags.InvalidPrfOutput;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: PasskeyError_Tags.InvalidPrfOutput;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    MnemonicError: {
        new (v0: string): {
            readonly tag: PasskeyError_Tags.MnemonicError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: PasskeyError_Tags.MnemonicError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: PasskeyError_Tags.MnemonicError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: PasskeyError_Tags.MnemonicError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: PasskeyError_Tags.MnemonicError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    InvalidSalt: {
        new (v0: string): {
            readonly tag: PasskeyError_Tags.InvalidSalt;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: PasskeyError_Tags.InvalidSalt;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: PasskeyError_Tags.InvalidSalt;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: PasskeyError_Tags.InvalidSalt;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: PasskeyError_Tags.InvalidSalt;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    Generic: {
        new (v0: string): {
            readonly tag: PasskeyError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: PasskeyError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: PasskeyError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: PasskeyError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: PasskeyError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PasskeyError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
}>;
/**
 * Error type for passkey operations.
 */
export type PasskeyError = InstanceType<(typeof PasskeyError)[keyof Omit<typeof PasskeyError, 'instanceOf'>]>;
export declare enum PaymentDetails_Tags {
    Spark = "Spark",
    Token = "Token",
    Lightning = "Lightning",
    Withdraw = "Withdraw",
    Deposit = "Deposit"
}
export declare const PaymentDetails: Readonly<{
    instanceOf: (obj: any) => obj is PaymentDetails;
    Spark: {
        new (inner: {
            /**
             * The invoice details if the payment fulfilled a spark invoice
             */ invoiceDetails: SparkInvoicePaymentDetails | undefined;
            /**
             * The HTLC transfer details if the payment fulfilled an HTLC transfer
             */ htlcDetails: SparkHtlcDetails | undefined;
            /**
             * The information for a conversion
             */ conversionInfo: ConversionInfo | undefined;
        }): {
            readonly tag: PaymentDetails_Tags.Spark;
            readonly inner: Readonly<{
                invoiceDetails: SparkInvoicePaymentDetails | undefined;
                htlcDetails: SparkHtlcDetails | undefined;
                conversionInfo: ConversionInfo | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentDetails";
        };
        "new"(inner: {
            /**
             * The invoice details if the payment fulfilled a spark invoice
             */ invoiceDetails: SparkInvoicePaymentDetails | undefined;
            /**
             * The HTLC transfer details if the payment fulfilled an HTLC transfer
             */ htlcDetails: SparkHtlcDetails | undefined;
            /**
             * The information for a conversion
             */ conversionInfo: ConversionInfo | undefined;
        }): {
            readonly tag: PaymentDetails_Tags.Spark;
            readonly inner: Readonly<{
                invoiceDetails: SparkInvoicePaymentDetails | undefined;
                htlcDetails: SparkHtlcDetails | undefined;
                conversionInfo: ConversionInfo | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentDetails";
        };
        instanceOf(obj: any): obj is {
            readonly tag: PaymentDetails_Tags.Spark;
            readonly inner: Readonly<{
                invoiceDetails: SparkInvoicePaymentDetails | undefined;
                htlcDetails: SparkHtlcDetails | undefined;
                conversionInfo: ConversionInfo | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentDetails";
        };
    };
    Token: {
        new (inner: {
            metadata: TokenMetadata;
            txHash: string;
            txType: TokenTransactionType;
            /**
             * The invoice details if the payment fulfilled a spark invoice
             */ invoiceDetails: SparkInvoicePaymentDetails | undefined;
            /**
             * The information for a conversion
             */ conversionInfo: ConversionInfo | undefined;
        }): {
            readonly tag: PaymentDetails_Tags.Token;
            readonly inner: Readonly<{
                metadata: TokenMetadata;
                txHash: string;
                txType: TokenTransactionType;
                invoiceDetails: SparkInvoicePaymentDetails | undefined;
                conversionInfo: ConversionInfo | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentDetails";
        };
        "new"(inner: {
            metadata: TokenMetadata;
            txHash: string;
            txType: TokenTransactionType;
            /**
             * The invoice details if the payment fulfilled a spark invoice
             */ invoiceDetails: SparkInvoicePaymentDetails | undefined;
            /**
             * The information for a conversion
             */ conversionInfo: ConversionInfo | undefined;
        }): {
            readonly tag: PaymentDetails_Tags.Token;
            readonly inner: Readonly<{
                metadata: TokenMetadata;
                txHash: string;
                txType: TokenTransactionType;
                invoiceDetails: SparkInvoicePaymentDetails | undefined;
                conversionInfo: ConversionInfo | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentDetails";
        };
        instanceOf(obj: any): obj is {
            readonly tag: PaymentDetails_Tags.Token;
            readonly inner: Readonly<{
                metadata: TokenMetadata;
                txHash: string;
                txType: TokenTransactionType;
                invoiceDetails: SparkInvoicePaymentDetails | undefined;
                conversionInfo: ConversionInfo | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentDetails";
        };
    };
    Lightning: {
        new (inner: {
            /**
             * Represents the invoice description
             */ description: string | undefined;
            /**
             * Represents the Bolt11/Bolt12 invoice associated with a payment
             * In the case of a Send payment, this is the invoice paid by the user
             * In the case of a Receive payment, this is the invoice paid to the user
             */ invoice: string;
            /**
             * The invoice destination/payee pubkey
             */ destinationPubkey: string;
            /**
             * The HTLC transfer details
             */ htlcDetails: SparkHtlcDetails;
            /**
             * Lnurl payment information if this was an lnurl payment.
             */ lnurlPayInfo: LnurlPayInfo | undefined;
            /**
             * Lnurl withdrawal information if this was an lnurl payment.
             */ lnurlWithdrawInfo: LnurlWithdrawInfo | undefined;
            /**
             * Lnurl receive information if this was a received lnurl payment.
             */ lnurlReceiveMetadata: LnurlReceiveMetadata | undefined;
            /**
             * The information for a conversion — populated when this Lightning
             * payment is the source leg of a cross-chain conversion (e.g. a
             * Boltz reverse swap paying a hold invoice).
             */ conversionInfo: ConversionInfo | undefined;
        }): {
            readonly tag: PaymentDetails_Tags.Lightning;
            readonly inner: Readonly<{
                description: string | undefined;
                invoice: string;
                destinationPubkey: string;
                htlcDetails: SparkHtlcDetails;
                lnurlPayInfo: LnurlPayInfo | undefined;
                lnurlWithdrawInfo: LnurlWithdrawInfo | undefined;
                lnurlReceiveMetadata: LnurlReceiveMetadata | undefined;
                conversionInfo: ConversionInfo | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentDetails";
        };
        "new"(inner: {
            /**
             * Represents the invoice description
             */ description: string | undefined;
            /**
             * Represents the Bolt11/Bolt12 invoice associated with a payment
             * In the case of a Send payment, this is the invoice paid by the user
             * In the case of a Receive payment, this is the invoice paid to the user
             */ invoice: string;
            /**
             * The invoice destination/payee pubkey
             */ destinationPubkey: string;
            /**
             * The HTLC transfer details
             */ htlcDetails: SparkHtlcDetails;
            /**
             * Lnurl payment information if this was an lnurl payment.
             */ lnurlPayInfo: LnurlPayInfo | undefined;
            /**
             * Lnurl withdrawal information if this was an lnurl payment.
             */ lnurlWithdrawInfo: LnurlWithdrawInfo | undefined;
            /**
             * Lnurl receive information if this was a received lnurl payment.
             */ lnurlReceiveMetadata: LnurlReceiveMetadata | undefined;
            /**
             * The information for a conversion — populated when this Lightning
             * payment is the source leg of a cross-chain conversion (e.g. a
             * Boltz reverse swap paying a hold invoice).
             */ conversionInfo: ConversionInfo | undefined;
        }): {
            readonly tag: PaymentDetails_Tags.Lightning;
            readonly inner: Readonly<{
                description: string | undefined;
                invoice: string;
                destinationPubkey: string;
                htlcDetails: SparkHtlcDetails;
                lnurlPayInfo: LnurlPayInfo | undefined;
                lnurlWithdrawInfo: LnurlWithdrawInfo | undefined;
                lnurlReceiveMetadata: LnurlReceiveMetadata | undefined;
                conversionInfo: ConversionInfo | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentDetails";
        };
        instanceOf(obj: any): obj is {
            readonly tag: PaymentDetails_Tags.Lightning;
            readonly inner: Readonly<{
                description: string | undefined;
                invoice: string;
                destinationPubkey: string;
                htlcDetails: SparkHtlcDetails;
                lnurlPayInfo: LnurlPayInfo | undefined;
                lnurlWithdrawInfo: LnurlWithdrawInfo | undefined;
                lnurlReceiveMetadata: LnurlReceiveMetadata | undefined;
                conversionInfo: ConversionInfo | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentDetails";
        };
    };
    Withdraw: {
        new (inner: {
            txId: string;
        }): {
            readonly tag: PaymentDetails_Tags.Withdraw;
            readonly inner: Readonly<{
                txId: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentDetails";
        };
        "new"(inner: {
            txId: string;
        }): {
            readonly tag: PaymentDetails_Tags.Withdraw;
            readonly inner: Readonly<{
                txId: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentDetails";
        };
        instanceOf(obj: any): obj is {
            readonly tag: PaymentDetails_Tags.Withdraw;
            readonly inner: Readonly<{
                txId: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentDetails";
        };
    };
    Deposit: {
        new (inner: {
            txId: string;
            vout: number;
        }): {
            readonly tag: PaymentDetails_Tags.Deposit;
            readonly inner: Readonly<{
                txId: string;
                vout: number;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentDetails";
        };
        "new"(inner: {
            txId: string;
            vout: number;
        }): {
            readonly tag: PaymentDetails_Tags.Deposit;
            readonly inner: Readonly<{
                txId: string;
                vout: number;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentDetails";
        };
        instanceOf(obj: any): obj is {
            readonly tag: PaymentDetails_Tags.Deposit;
            readonly inner: Readonly<{
                txId: string;
                vout: number;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentDetails";
        };
    };
}>;
export type PaymentDetails = InstanceType<(typeof PaymentDetails)[keyof Omit<typeof PaymentDetails, 'instanceOf'>]>;
export declare enum PaymentDetailsFilter_Tags {
    Spark = "Spark",
    Token = "Token",
    Lightning = "Lightning"
}
export declare const PaymentDetailsFilter: Readonly<{
    instanceOf: (obj: any) => obj is PaymentDetailsFilter;
    Spark: {
        new (inner: {
            /**
             * Filter specific Spark HTLC statuses
             */ htlcStatus: Array<SparkHtlcStatus> | undefined;
            /**
             * Filter conversion payments with refund information
             */ conversionRefundNeeded: boolean | undefined;
        }): {
            readonly tag: PaymentDetailsFilter_Tags.Spark;
            readonly inner: Readonly<{
                htlcStatus: Array<SparkHtlcStatus> | undefined;
                conversionRefundNeeded: boolean | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentDetailsFilter";
        };
        "new"(inner: {
            /**
             * Filter specific Spark HTLC statuses
             */ htlcStatus: Array<SparkHtlcStatus> | undefined;
            /**
             * Filter conversion payments with refund information
             */ conversionRefundNeeded: boolean | undefined;
        }): {
            readonly tag: PaymentDetailsFilter_Tags.Spark;
            readonly inner: Readonly<{
                htlcStatus: Array<SparkHtlcStatus> | undefined;
                conversionRefundNeeded: boolean | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentDetailsFilter";
        };
        instanceOf(obj: any): obj is {
            readonly tag: PaymentDetailsFilter_Tags.Spark;
            readonly inner: Readonly<{
                htlcStatus: Array<SparkHtlcStatus> | undefined;
                conversionRefundNeeded: boolean | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentDetailsFilter";
        };
    };
    Token: {
        new (inner: {
            /**
             * Filter conversion payments with refund information
             */ conversionRefundNeeded: boolean | undefined;
            /**
             * Filter by transaction hash
             */ txHash: string | undefined;
            /**
             * Filter by transaction type
             */ txType: TokenTransactionType | undefined;
        }): {
            readonly tag: PaymentDetailsFilter_Tags.Token;
            readonly inner: Readonly<{
                conversionRefundNeeded: boolean | undefined;
                txHash: string | undefined;
                txType: TokenTransactionType | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentDetailsFilter";
        };
        "new"(inner: {
            /**
             * Filter conversion payments with refund information
             */ conversionRefundNeeded: boolean | undefined;
            /**
             * Filter by transaction hash
             */ txHash: string | undefined;
            /**
             * Filter by transaction type
             */ txType: TokenTransactionType | undefined;
        }): {
            readonly tag: PaymentDetailsFilter_Tags.Token;
            readonly inner: Readonly<{
                conversionRefundNeeded: boolean | undefined;
                txHash: string | undefined;
                txType: TokenTransactionType | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentDetailsFilter";
        };
        instanceOf(obj: any): obj is {
            readonly tag: PaymentDetailsFilter_Tags.Token;
            readonly inner: Readonly<{
                conversionRefundNeeded: boolean | undefined;
                txHash: string | undefined;
                txType: TokenTransactionType | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentDetailsFilter";
        };
    };
    Lightning: {
        new (inner: {
            /**
             * Filter specific Spark HTLC statuses
             */ htlcStatus: Array<SparkHtlcStatus> | undefined;
        }): {
            readonly tag: PaymentDetailsFilter_Tags.Lightning;
            readonly inner: Readonly<{
                htlcStatus: Array<SparkHtlcStatus> | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentDetailsFilter";
        };
        "new"(inner: {
            /**
             * Filter specific Spark HTLC statuses
             */ htlcStatus: Array<SparkHtlcStatus> | undefined;
        }): {
            readonly tag: PaymentDetailsFilter_Tags.Lightning;
            readonly inner: Readonly<{
                htlcStatus: Array<SparkHtlcStatus> | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentDetailsFilter";
        };
        instanceOf(obj: any): obj is {
            readonly tag: PaymentDetailsFilter_Tags.Lightning;
            readonly inner: Readonly<{
                htlcStatus: Array<SparkHtlcStatus> | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentDetailsFilter";
        };
    };
}>;
export type PaymentDetailsFilter = InstanceType<(typeof PaymentDetailsFilter)[keyof Omit<typeof PaymentDetailsFilter, 'instanceOf'>]>;
export declare enum PaymentMethod {
    Lightning = 0,
    Spark = 1,
    Token = 2,
    Deposit = 3,
    Withdraw = 4,
    Unknown = 5
}
export declare enum PaymentObserverError_Tags {
    ServiceConnectivity = "ServiceConnectivity",
    Generic = "Generic"
}
export declare const PaymentObserverError: Readonly<{
    instanceOf: (obj: any) => obj is PaymentObserverError;
    ServiceConnectivity: {
        new (v0: string): {
            readonly tag: PaymentObserverError_Tags.ServiceConnectivity;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentObserverError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: PaymentObserverError_Tags.ServiceConnectivity;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentObserverError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: PaymentObserverError_Tags.ServiceConnectivity;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentObserverError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: PaymentObserverError_Tags.ServiceConnectivity;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentObserverError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: PaymentObserverError_Tags.ServiceConnectivity;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentObserverError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    Generic: {
        new (v0: string): {
            readonly tag: PaymentObserverError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentObserverError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: PaymentObserverError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentObserverError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: PaymentObserverError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentObserverError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: PaymentObserverError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentObserverError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: PaymentObserverError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentObserverError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
}>;
export type PaymentObserverError = InstanceType<(typeof PaymentObserverError)[keyof Omit<typeof PaymentObserverError, 'instanceOf'>]>;
export declare enum PaymentRequest_Tags {
    Input = "Input",
    CrossChain = "CrossChain"
}
/**
 * The payment destination. Either a raw string (bolt11, spark address, BIP-21,
 * cross-chain URI, etc.) that is parsed internally, or a structured
 * cross-chain destination with explicit chain + asset selection.
 */
export declare const PaymentRequest: Readonly<{
    instanceOf: (obj: any) => obj is PaymentRequest;
    Input: {
        new (inner: {
            input: string;
        }): {
            readonly tag: PaymentRequest_Tags.Input;
            readonly inner: Readonly<{
                input: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentRequest";
        };
        "new"(inner: {
            input: string;
        }): {
            readonly tag: PaymentRequest_Tags.Input;
            readonly inner: Readonly<{
                input: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentRequest";
        };
        instanceOf(obj: any): obj is {
            readonly tag: PaymentRequest_Tags.Input;
            readonly inner: Readonly<{
                input: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentRequest";
        };
    };
    CrossChain: {
        new (inner: {
            address: string;
            route: CrossChainRoutePair;
            /**
             * Maximum slippage tolerance in basis points (1/100 of a percent)
             * for the cross-chain quote. Must be in `10..=500`. Falls back to
             * [`Config::default_slippage_bps`] when `None`, which itself
             * defaults to 100 bps (1%) when unset.
             */ maxSlippageBps: /*u32*/ number | undefined;
            /**
             * Target-overpay pad in basis points applied on `FeesExcluded`
             * conversion sends. Inflates the destination target before quoting
             * so the recipient lands at or above the user's requested amount
             * despite provider slippage. Must be in `0..=500`. Falls back to
             * [`CrossChainConfig::default_target_overpay_bps`] when `None`,
             * which itself defaults to 15 bps.
             */ targetOverpayBps: /*u32*/ number | undefined;
        }): {
            readonly tag: PaymentRequest_Tags.CrossChain;
            readonly inner: Readonly<{
                address: string;
                route: CrossChainRoutePair;
                maxSlippageBps: /*u32*/ number | undefined;
                targetOverpayBps: /*u32*/ number | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentRequest";
        };
        "new"(inner: {
            address: string;
            route: CrossChainRoutePair;
            /**
             * Maximum slippage tolerance in basis points (1/100 of a percent)
             * for the cross-chain quote. Must be in `10..=500`. Falls back to
             * [`Config::default_slippage_bps`] when `None`, which itself
             * defaults to 100 bps (1%) when unset.
             */ maxSlippageBps: /*u32*/ number | undefined;
            /**
             * Target-overpay pad in basis points applied on `FeesExcluded`
             * conversion sends. Inflates the destination target before quoting
             * so the recipient lands at or above the user's requested amount
             * despite provider slippage. Must be in `0..=500`. Falls back to
             * [`CrossChainConfig::default_target_overpay_bps`] when `None`,
             * which itself defaults to 15 bps.
             */ targetOverpayBps: /*u32*/ number | undefined;
        }): {
            readonly tag: PaymentRequest_Tags.CrossChain;
            readonly inner: Readonly<{
                address: string;
                route: CrossChainRoutePair;
                maxSlippageBps: /*u32*/ number | undefined;
                targetOverpayBps: /*u32*/ number | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentRequest";
        };
        instanceOf(obj: any): obj is {
            readonly tag: PaymentRequest_Tags.CrossChain;
            readonly inner: Readonly<{
                address: string;
                route: CrossChainRoutePair;
                maxSlippageBps: /*u32*/ number | undefined;
                targetOverpayBps: /*u32*/ number | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentRequest";
        };
    };
}>;
/**
 * The payment destination. Either a raw string (bolt11, spark address, BIP-21,
 * cross-chain URI, etc.) that is parsed internally, or a structured
 * cross-chain destination with explicit chain + asset selection.
 */
export type PaymentRequest = InstanceType<(typeof PaymentRequest)[keyof Omit<typeof PaymentRequest, 'instanceOf'>]>;
/**
 * The status of a payment
 */
export declare enum PaymentStatus {
    /**
     * Payment is completed successfully
     */
    Completed = 0,
    /**
     * Payment is in progress
     */
    Pending = 1,
    /**
     * Payment has failed
     */
    Failed = 2
}
/**
 * The type of payment
 */
export declare enum PaymentType {
    /**
     * Payment sent from this wallet
     */
    Send = 0,
    /**
     * Payment received to this wallet
     */
    Receive = 1
}
export declare enum PrfProviderError_Tags {
    PrfNotSupported = "PrfNotSupported",
    UserCancelled = "UserCancelled",
    UserTimedOut = "UserTimedOut",
    CredentialNotFound = "CredentialNotFound",
    AuthenticationFailed = "AuthenticationFailed",
    PrfEvaluationFailed = "PrfEvaluationFailed",
    Configuration = "Configuration",
    CredentialAlreadyExists = "CredentialAlreadyExists",
    Generic = "Generic"
}
/**
 * Failures from a passkey PRF operation. Each platform normalizes its
 * native errors into these variants so callers match one taxonomy
 * everywhere; anything unclassifiable becomes [`Generic`](Self::Generic).
 */
export declare const PrfProviderError: Readonly<{
    instanceOf: (obj: any) => obj is PrfProviderError;
    PrfNotSupported: {
        new (): {
            readonly tag: PrfProviderError_Tags.PrfNotSupported;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(): {
            readonly tag: PrfProviderError_Tags.PrfNotSupported;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: PrfProviderError_Tags.PrfNotSupported;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: PrfProviderError_Tags.PrfNotSupported;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    UserCancelled: {
        new (): {
            readonly tag: PrfProviderError_Tags.UserCancelled;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(): {
            readonly tag: PrfProviderError_Tags.UserCancelled;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: PrfProviderError_Tags.UserCancelled;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: PrfProviderError_Tags.UserCancelled;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    UserTimedOut: {
        new (): {
            readonly tag: PrfProviderError_Tags.UserTimedOut;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(): {
            readonly tag: PrfProviderError_Tags.UserTimedOut;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: PrfProviderError_Tags.UserTimedOut;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: PrfProviderError_Tags.UserTimedOut;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    CredentialNotFound: {
        new (v0: string): {
            readonly tag: PrfProviderError_Tags.CredentialNotFound;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: PrfProviderError_Tags.CredentialNotFound;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: PrfProviderError_Tags.CredentialNotFound;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: PrfProviderError_Tags.CredentialNotFound;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: PrfProviderError_Tags.CredentialNotFound;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    AuthenticationFailed: {
        new (v0: string): {
            readonly tag: PrfProviderError_Tags.AuthenticationFailed;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: PrfProviderError_Tags.AuthenticationFailed;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: PrfProviderError_Tags.AuthenticationFailed;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: PrfProviderError_Tags.AuthenticationFailed;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: PrfProviderError_Tags.AuthenticationFailed;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    PrfEvaluationFailed: {
        new (v0: string): {
            readonly tag: PrfProviderError_Tags.PrfEvaluationFailed;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: PrfProviderError_Tags.PrfEvaluationFailed;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: PrfProviderError_Tags.PrfEvaluationFailed;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: PrfProviderError_Tags.PrfEvaluationFailed;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: PrfProviderError_Tags.PrfEvaluationFailed;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    Configuration: {
        new (v0: string): {
            readonly tag: PrfProviderError_Tags.Configuration;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: PrfProviderError_Tags.Configuration;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: PrfProviderError_Tags.Configuration;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: PrfProviderError_Tags.Configuration;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: PrfProviderError_Tags.Configuration;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    CredentialAlreadyExists: {
        new (v0: string): {
            readonly tag: PrfProviderError_Tags.CredentialAlreadyExists;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: PrfProviderError_Tags.CredentialAlreadyExists;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: PrfProviderError_Tags.CredentialAlreadyExists;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: PrfProviderError_Tags.CredentialAlreadyExists;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: PrfProviderError_Tags.CredentialAlreadyExists;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    Generic: {
        new (v0: string): {
            readonly tag: PrfProviderError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: PrfProviderError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: PrfProviderError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: PrfProviderError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: PrfProviderError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PrfProviderError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
}>;
/**
 * Failures from a passkey PRF operation. Each platform normalizes its
 * native errors into these variants so callers match one taxonomy
 * everywhere; anything unclassifiable becomes [`Generic`](Self::Generic).
 */
export type PrfProviderError = InstanceType<(typeof PrfProviderError)[keyof Omit<typeof PrfProviderError, 'instanceOf'>]>;
export declare enum ProvisionalPaymentDetails_Tags {
    Bitcoin = "Bitcoin",
    Lightning = "Lightning",
    Spark = "Spark",
    Token = "Token"
}
export declare const ProvisionalPaymentDetails: Readonly<{
    instanceOf: (obj: any) => obj is ProvisionalPaymentDetails;
    Bitcoin: {
        new (inner: {
            /**
             * Onchain Bitcoin address
             */ withdrawalAddress: string;
        }): {
            readonly tag: ProvisionalPaymentDetails_Tags.Bitcoin;
            readonly inner: Readonly<{
                withdrawalAddress: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ProvisionalPaymentDetails";
        };
        "new"(inner: {
            /**
             * Onchain Bitcoin address
             */ withdrawalAddress: string;
        }): {
            readonly tag: ProvisionalPaymentDetails_Tags.Bitcoin;
            readonly inner: Readonly<{
                withdrawalAddress: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ProvisionalPaymentDetails";
        };
        instanceOf(obj: any): obj is {
            readonly tag: ProvisionalPaymentDetails_Tags.Bitcoin;
            readonly inner: Readonly<{
                withdrawalAddress: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ProvisionalPaymentDetails";
        };
    };
    Lightning: {
        new (inner: {
            /**
             * BOLT11 invoice
             */ invoice: string;
        }): {
            readonly tag: ProvisionalPaymentDetails_Tags.Lightning;
            readonly inner: Readonly<{
                invoice: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ProvisionalPaymentDetails";
        };
        "new"(inner: {
            /**
             * BOLT11 invoice
             */ invoice: string;
        }): {
            readonly tag: ProvisionalPaymentDetails_Tags.Lightning;
            readonly inner: Readonly<{
                invoice: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ProvisionalPaymentDetails";
        };
        instanceOf(obj: any): obj is {
            readonly tag: ProvisionalPaymentDetails_Tags.Lightning;
            readonly inner: Readonly<{
                invoice: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ProvisionalPaymentDetails";
        };
    };
    Spark: {
        new (inner: {
            /**
             * Spark pay request being paid (either a Spark address or a Spark invoice)
             */ payRequest: string;
        }): {
            readonly tag: ProvisionalPaymentDetails_Tags.Spark;
            readonly inner: Readonly<{
                payRequest: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ProvisionalPaymentDetails";
        };
        "new"(inner: {
            /**
             * Spark pay request being paid (either a Spark address or a Spark invoice)
             */ payRequest: string;
        }): {
            readonly tag: ProvisionalPaymentDetails_Tags.Spark;
            readonly inner: Readonly<{
                payRequest: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ProvisionalPaymentDetails";
        };
        instanceOf(obj: any): obj is {
            readonly tag: ProvisionalPaymentDetails_Tags.Spark;
            readonly inner: Readonly<{
                payRequest: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ProvisionalPaymentDetails";
        };
    };
    Token: {
        new (inner: {
            /**
             * Token identifier
             */ tokenId: string;
            /**
             * Spark pay request being paid (either a Spark address or a Spark invoice)
             */ payRequest: string;
        }): {
            readonly tag: ProvisionalPaymentDetails_Tags.Token;
            readonly inner: Readonly<{
                tokenId: string;
                payRequest: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ProvisionalPaymentDetails";
        };
        "new"(inner: {
            /**
             * Token identifier
             */ tokenId: string;
            /**
             * Spark pay request being paid (either a Spark address or a Spark invoice)
             */ payRequest: string;
        }): {
            readonly tag: ProvisionalPaymentDetails_Tags.Token;
            readonly inner: Readonly<{
                tokenId: string;
                payRequest: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ProvisionalPaymentDetails";
        };
        instanceOf(obj: any): obj is {
            readonly tag: ProvisionalPaymentDetails_Tags.Token;
            readonly inner: Readonly<{
                tokenId: string;
                payRequest: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ProvisionalPaymentDetails";
        };
    };
}>;
export type ProvisionalPaymentDetails = InstanceType<(typeof ProvisionalPaymentDetails)[keyof Omit<typeof ProvisionalPaymentDetails, 'instanceOf'>]>;
export declare enum ReceivePaymentMethod_Tags {
    SparkAddress = "SparkAddress",
    SparkInvoice = "SparkInvoice",
    BitcoinAddress = "BitcoinAddress",
    Bolt11Invoice = "Bolt11Invoice"
}
export declare const ReceivePaymentMethod: Readonly<{
    instanceOf: (obj: any) => obj is ReceivePaymentMethod;
    SparkAddress: {
        new (): {
            readonly tag: ReceivePaymentMethod_Tags.SparkAddress;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ReceivePaymentMethod";
        };
        "new"(): {
            readonly tag: ReceivePaymentMethod_Tags.SparkAddress;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ReceivePaymentMethod";
        };
        instanceOf(obj: any): obj is {
            readonly tag: ReceivePaymentMethod_Tags.SparkAddress;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ReceivePaymentMethod";
        };
    };
    SparkInvoice: {
        new (inner: {
            /**
             * Amount to receive. Denominated in sats if token identifier is empty, otherwise in the token base units
             */ amount: U128 | undefined;
            /**
             * The presence of this field indicates that the payment is for a token
             * If empty, it is a Bitcoin payment
             */ tokenIdentifier: string | undefined;
            /**
             * The expiry time of the invoice as a unix timestamp in seconds
             */ expiryTime: /*u64*/ bigint | undefined;
            /**
             * A description to embed in the invoice.
             */ description: string | undefined;
            /**
             * If set, the invoice may only be fulfilled by a payer with this public key
             */ senderPublicKey: string | undefined;
        }): {
            readonly tag: ReceivePaymentMethod_Tags.SparkInvoice;
            readonly inner: Readonly<{
                amount: U128 | undefined;
                tokenIdentifier: string | undefined;
                expiryTime: /*u64*/ bigint | undefined;
                description: string | undefined;
                senderPublicKey: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ReceivePaymentMethod";
        };
        "new"(inner: {
            /**
             * Amount to receive. Denominated in sats if token identifier is empty, otherwise in the token base units
             */ amount: U128 | undefined;
            /**
             * The presence of this field indicates that the payment is for a token
             * If empty, it is a Bitcoin payment
             */ tokenIdentifier: string | undefined;
            /**
             * The expiry time of the invoice as a unix timestamp in seconds
             */ expiryTime: /*u64*/ bigint | undefined;
            /**
             * A description to embed in the invoice.
             */ description: string | undefined;
            /**
             * If set, the invoice may only be fulfilled by a payer with this public key
             */ senderPublicKey: string | undefined;
        }): {
            readonly tag: ReceivePaymentMethod_Tags.SparkInvoice;
            readonly inner: Readonly<{
                amount: U128 | undefined;
                tokenIdentifier: string | undefined;
                expiryTime: /*u64*/ bigint | undefined;
                description: string | undefined;
                senderPublicKey: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ReceivePaymentMethod";
        };
        instanceOf(obj: any): obj is {
            readonly tag: ReceivePaymentMethod_Tags.SparkInvoice;
            readonly inner: Readonly<{
                amount: U128 | undefined;
                tokenIdentifier: string | undefined;
                expiryTime: /*u64*/ bigint | undefined;
                description: string | undefined;
                senderPublicKey: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ReceivePaymentMethod";
        };
    };
    BitcoinAddress: {
        new (inner: {
            /**
             * If true, rotate to a new deposit address. Previous ones remain valid.
             * If false or absent, return the existing address (creating one if none
             * exists yet).
             */ newAddress: boolean | undefined;
        }): {
            readonly tag: ReceivePaymentMethod_Tags.BitcoinAddress;
            readonly inner: Readonly<{
                newAddress: boolean | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ReceivePaymentMethod";
        };
        "new"(inner: {
            /**
             * If true, rotate to a new deposit address. Previous ones remain valid.
             * If false or absent, return the existing address (creating one if none
             * exists yet).
             */ newAddress: boolean | undefined;
        }): {
            readonly tag: ReceivePaymentMethod_Tags.BitcoinAddress;
            readonly inner: Readonly<{
                newAddress: boolean | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ReceivePaymentMethod";
        };
        instanceOf(obj: any): obj is {
            readonly tag: ReceivePaymentMethod_Tags.BitcoinAddress;
            readonly inner: Readonly<{
                newAddress: boolean | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ReceivePaymentMethod";
        };
    };
    Bolt11Invoice: {
        new (inner: {
            description: string;
            amountSats: /*u64*/ bigint | undefined;
            /**
             * The expiry of the invoice as a duration in seconds
             */ expirySecs: /*u32*/ number | undefined;
            /**
             * If set, creates a HODL invoice with this payment hash (hex-encoded).
             * The payer's HTLC will be held until the preimage is provided via
             * `claim_htlc_payment` or the HTLC expires.
             */ paymentHash: string | undefined;
        }): {
            readonly tag: ReceivePaymentMethod_Tags.Bolt11Invoice;
            readonly inner: Readonly<{
                description: string;
                amountSats: /*u64*/ bigint | undefined;
                expirySecs: /*u32*/ number | undefined;
                paymentHash: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ReceivePaymentMethod";
        };
        "new"(inner: {
            description: string;
            amountSats: /*u64*/ bigint | undefined;
            /**
             * The expiry of the invoice as a duration in seconds
             */ expirySecs: /*u32*/ number | undefined;
            /**
             * If set, creates a HODL invoice with this payment hash (hex-encoded).
             * The payer's HTLC will be held until the preimage is provided via
             * `claim_htlc_payment` or the HTLC expires.
             */ paymentHash: string | undefined;
        }): {
            readonly tag: ReceivePaymentMethod_Tags.Bolt11Invoice;
            readonly inner: Readonly<{
                description: string;
                amountSats: /*u64*/ bigint | undefined;
                expirySecs: /*u32*/ number | undefined;
                paymentHash: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ReceivePaymentMethod";
        };
        instanceOf(obj: any): obj is {
            readonly tag: ReceivePaymentMethod_Tags.Bolt11Invoice;
            readonly inner: Readonly<{
                description: string;
                amountSats: /*u64*/ bigint | undefined;
                expirySecs: /*u32*/ number | undefined;
                paymentHash: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ReceivePaymentMethod";
        };
    };
}>;
export type ReceivePaymentMethod = InstanceType<(typeof ReceivePaymentMethod)[keyof Omit<typeof ReceivePaymentMethod, 'instanceOf'>]>;
export declare enum SdkError_Tags {
    SparkError = "SparkError",
    InsufficientFunds = "InsufficientFunds",
    InvalidUuid = "InvalidUuid",
    InvalidInput = "InvalidInput",
    NetworkError = "NetworkError",
    StorageError = "StorageError",
    ChainServiceError = "ChainServiceError",
    MaxDepositClaimFeeExceeded = "MaxDepositClaimFeeExceeded",
    MissingUtxo = "MissingUtxo",
    LnurlError = "LnurlError",
    Signer = "Signer",
    OptimizationAlreadyRunning = "OptimizationAlreadyRunning",
    OptimizationCancelled = "OptimizationCancelled",
    Generic = "Generic"
}
/**
 * Error type for the `BreezSdk`
 */
export declare const SdkError: Readonly<{
    instanceOf: (obj: any) => obj is SdkError;
    SparkError: {
        new (v0: string): {
            readonly tag: SdkError_Tags.SparkError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: SdkError_Tags.SparkError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: SdkError_Tags.SparkError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: SdkError_Tags.SparkError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: SdkError_Tags.SparkError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    InsufficientFunds: {
        new (): {
            readonly tag: SdkError_Tags.InsufficientFunds;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(): {
            readonly tag: SdkError_Tags.InsufficientFunds;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: SdkError_Tags.InsufficientFunds;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: SdkError_Tags.InsufficientFunds;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    InvalidUuid: {
        new (v0: string): {
            readonly tag: SdkError_Tags.InvalidUuid;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: SdkError_Tags.InvalidUuid;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: SdkError_Tags.InvalidUuid;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: SdkError_Tags.InvalidUuid;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: SdkError_Tags.InvalidUuid;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    InvalidInput: {
        new (v0: string): {
            readonly tag: SdkError_Tags.InvalidInput;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: SdkError_Tags.InvalidInput;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: SdkError_Tags.InvalidInput;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: SdkError_Tags.InvalidInput;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: SdkError_Tags.InvalidInput;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    NetworkError: {
        new (v0: string): {
            readonly tag: SdkError_Tags.NetworkError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: SdkError_Tags.NetworkError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: SdkError_Tags.NetworkError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: SdkError_Tags.NetworkError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: SdkError_Tags.NetworkError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    StorageError: {
        new (v0: string): {
            readonly tag: SdkError_Tags.StorageError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: SdkError_Tags.StorageError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: SdkError_Tags.StorageError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: SdkError_Tags.StorageError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: SdkError_Tags.StorageError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    ChainServiceError: {
        new (v0: string): {
            readonly tag: SdkError_Tags.ChainServiceError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: SdkError_Tags.ChainServiceError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: SdkError_Tags.ChainServiceError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: SdkError_Tags.ChainServiceError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: SdkError_Tags.ChainServiceError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    MaxDepositClaimFeeExceeded: {
        new (inner: {
            tx: string;
            vout: number;
            maxFee: Fee | undefined;
            requiredFeeSats: bigint;
            requiredFeeRateSatPerVbyte: bigint;
        }): {
            readonly tag: SdkError_Tags.MaxDepositClaimFeeExceeded;
            readonly inner: Readonly<{
                tx: string;
                vout: number;
                maxFee: Fee | undefined;
                requiredFeeSats: bigint;
                requiredFeeRateSatPerVbyte: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(inner: {
            tx: string;
            vout: number;
            maxFee: Fee | undefined;
            requiredFeeSats: bigint;
            requiredFeeRateSatPerVbyte: bigint;
        }): {
            readonly tag: SdkError_Tags.MaxDepositClaimFeeExceeded;
            readonly inner: Readonly<{
                tx: string;
                vout: number;
                maxFee: Fee | undefined;
                requiredFeeSats: bigint;
                requiredFeeRateSatPerVbyte: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: SdkError_Tags.MaxDepositClaimFeeExceeded;
            readonly inner: Readonly<{
                tx: string;
                vout: number;
                maxFee: Fee | undefined;
                requiredFeeSats: bigint;
                requiredFeeRateSatPerVbyte: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: SdkError_Tags.MaxDepositClaimFeeExceeded;
            readonly inner: Readonly<{
                tx: string;
                vout: number;
                maxFee: Fee | undefined;
                requiredFeeSats: bigint;
                requiredFeeRateSatPerVbyte: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: SdkError_Tags.MaxDepositClaimFeeExceeded;
            readonly inner: Readonly<{
                tx: string;
                vout: number;
                maxFee: Fee | undefined;
                requiredFeeSats: bigint;
                requiredFeeRateSatPerVbyte: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<{
            tx: string;
            vout: number;
            maxFee: Fee | undefined;
            requiredFeeSats: bigint;
            requiredFeeRateSatPerVbyte: bigint;
        }>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    MissingUtxo: {
        new (inner: {
            tx: string;
            vout: number;
        }): {
            readonly tag: SdkError_Tags.MissingUtxo;
            readonly inner: Readonly<{
                tx: string;
                vout: number;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(inner: {
            tx: string;
            vout: number;
        }): {
            readonly tag: SdkError_Tags.MissingUtxo;
            readonly inner: Readonly<{
                tx: string;
                vout: number;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: SdkError_Tags.MissingUtxo;
            readonly inner: Readonly<{
                tx: string;
                vout: number;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: SdkError_Tags.MissingUtxo;
            readonly inner: Readonly<{
                tx: string;
                vout: number;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: SdkError_Tags.MissingUtxo;
            readonly inner: Readonly<{
                tx: string;
                vout: number;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<{
            tx: string;
            vout: number;
        }>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    LnurlError: {
        new (v0: string): {
            readonly tag: SdkError_Tags.LnurlError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: SdkError_Tags.LnurlError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: SdkError_Tags.LnurlError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: SdkError_Tags.LnurlError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: SdkError_Tags.LnurlError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    Signer: {
        new (v0: string): {
            readonly tag: SdkError_Tags.Signer;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: SdkError_Tags.Signer;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: SdkError_Tags.Signer;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: SdkError_Tags.Signer;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: SdkError_Tags.Signer;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    OptimizationAlreadyRunning: {
        new (): {
            readonly tag: SdkError_Tags.OptimizationAlreadyRunning;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(): {
            readonly tag: SdkError_Tags.OptimizationAlreadyRunning;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: SdkError_Tags.OptimizationAlreadyRunning;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: SdkError_Tags.OptimizationAlreadyRunning;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    OptimizationCancelled: {
        new (): {
            readonly tag: SdkError_Tags.OptimizationCancelled;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(): {
            readonly tag: SdkError_Tags.OptimizationCancelled;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: SdkError_Tags.OptimizationCancelled;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: SdkError_Tags.OptimizationCancelled;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    Generic: {
        new (v0: string): {
            readonly tag: SdkError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: SdkError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: SdkError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: SdkError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: SdkError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
}>;
/**
 * Error type for the `BreezSdk`
 */
export type SdkError = InstanceType<(typeof SdkError)[keyof Omit<typeof SdkError, 'instanceOf'>]>;
export declare enum SdkEvent_Tags {
    Synced = "Synced",
    UnclaimedDeposits = "UnclaimedDeposits",
    ClaimedDeposits = "ClaimedDeposits",
    PaymentSucceeded = "PaymentSucceeded",
    PaymentPending = "PaymentPending",
    PaymentFailed = "PaymentFailed",
    AutoOptimization = "AutoOptimization",
    LightningAddressChanged = "LightningAddressChanged",
    NewDeposits = "NewDeposits"
}
/**
 * Events emitted by the SDK
 */
export declare const SdkEvent: Readonly<{
    instanceOf: (obj: any) => obj is SdkEvent;
    Synced: {
        new (): {
            readonly tag: SdkEvent_Tags.Synced;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkEvent";
        };
        "new"(): {
            readonly tag: SdkEvent_Tags.Synced;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkEvent";
        };
        instanceOf(obj: any): obj is {
            readonly tag: SdkEvent_Tags.Synced;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkEvent";
        };
    };
    UnclaimedDeposits: {
        new (inner: {
            unclaimedDeposits: Array<DepositInfo>;
        }): {
            readonly tag: SdkEvent_Tags.UnclaimedDeposits;
            readonly inner: Readonly<{
                unclaimedDeposits: Array<DepositInfo>;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkEvent";
        };
        "new"(inner: {
            unclaimedDeposits: Array<DepositInfo>;
        }): {
            readonly tag: SdkEvent_Tags.UnclaimedDeposits;
            readonly inner: Readonly<{
                unclaimedDeposits: Array<DepositInfo>;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkEvent";
        };
        instanceOf(obj: any): obj is {
            readonly tag: SdkEvent_Tags.UnclaimedDeposits;
            readonly inner: Readonly<{
                unclaimedDeposits: Array<DepositInfo>;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkEvent";
        };
    };
    ClaimedDeposits: {
        new (inner: {
            claimedDeposits: Array<DepositInfo>;
        }): {
            readonly tag: SdkEvent_Tags.ClaimedDeposits;
            readonly inner: Readonly<{
                claimedDeposits: Array<DepositInfo>;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkEvent";
        };
        "new"(inner: {
            claimedDeposits: Array<DepositInfo>;
        }): {
            readonly tag: SdkEvent_Tags.ClaimedDeposits;
            readonly inner: Readonly<{
                claimedDeposits: Array<DepositInfo>;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkEvent";
        };
        instanceOf(obj: any): obj is {
            readonly tag: SdkEvent_Tags.ClaimedDeposits;
            readonly inner: Readonly<{
                claimedDeposits: Array<DepositInfo>;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkEvent";
        };
    };
    PaymentSucceeded: {
        new (inner: {
            payment: Payment;
        }): {
            readonly tag: SdkEvent_Tags.PaymentSucceeded;
            readonly inner: Readonly<{
                payment: Payment;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkEvent";
        };
        "new"(inner: {
            payment: Payment;
        }): {
            readonly tag: SdkEvent_Tags.PaymentSucceeded;
            readonly inner: Readonly<{
                payment: Payment;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkEvent";
        };
        instanceOf(obj: any): obj is {
            readonly tag: SdkEvent_Tags.PaymentSucceeded;
            readonly inner: Readonly<{
                payment: Payment;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkEvent";
        };
    };
    PaymentPending: {
        new (inner: {
            payment: Payment;
        }): {
            readonly tag: SdkEvent_Tags.PaymentPending;
            readonly inner: Readonly<{
                payment: Payment;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkEvent";
        };
        "new"(inner: {
            payment: Payment;
        }): {
            readonly tag: SdkEvent_Tags.PaymentPending;
            readonly inner: Readonly<{
                payment: Payment;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkEvent";
        };
        instanceOf(obj: any): obj is {
            readonly tag: SdkEvent_Tags.PaymentPending;
            readonly inner: Readonly<{
                payment: Payment;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkEvent";
        };
    };
    PaymentFailed: {
        new (inner: {
            payment: Payment;
        }): {
            readonly tag: SdkEvent_Tags.PaymentFailed;
            readonly inner: Readonly<{
                payment: Payment;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkEvent";
        };
        "new"(inner: {
            payment: Payment;
        }): {
            readonly tag: SdkEvent_Tags.PaymentFailed;
            readonly inner: Readonly<{
                payment: Payment;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkEvent";
        };
        instanceOf(obj: any): obj is {
            readonly tag: SdkEvent_Tags.PaymentFailed;
            readonly inner: Readonly<{
                payment: Payment;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkEvent";
        };
    };
    AutoOptimization: {
        new (inner: {
            optimizationEvent: AutoOptimizationEvent;
        }): {
            readonly tag: SdkEvent_Tags.AutoOptimization;
            readonly inner: Readonly<{
                optimizationEvent: AutoOptimizationEvent;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkEvent";
        };
        "new"(inner: {
            optimizationEvent: AutoOptimizationEvent;
        }): {
            readonly tag: SdkEvent_Tags.AutoOptimization;
            readonly inner: Readonly<{
                optimizationEvent: AutoOptimizationEvent;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkEvent";
        };
        instanceOf(obj: any): obj is {
            readonly tag: SdkEvent_Tags.AutoOptimization;
            readonly inner: Readonly<{
                optimizationEvent: AutoOptimizationEvent;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkEvent";
        };
    };
    LightningAddressChanged: {
        new (inner: {
            lightningAddress: LightningAddressInfo | undefined;
        }): {
            readonly tag: SdkEvent_Tags.LightningAddressChanged;
            readonly inner: Readonly<{
                lightningAddress: LightningAddressInfo | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkEvent";
        };
        "new"(inner: {
            lightningAddress: LightningAddressInfo | undefined;
        }): {
            readonly tag: SdkEvent_Tags.LightningAddressChanged;
            readonly inner: Readonly<{
                lightningAddress: LightningAddressInfo | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkEvent";
        };
        instanceOf(obj: any): obj is {
            readonly tag: SdkEvent_Tags.LightningAddressChanged;
            readonly inner: Readonly<{
                lightningAddress: LightningAddressInfo | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkEvent";
        };
    };
    NewDeposits: {
        new (inner: {
            newDeposits: Array<DepositInfo>;
        }): {
            readonly tag: SdkEvent_Tags.NewDeposits;
            readonly inner: Readonly<{
                newDeposits: Array<DepositInfo>;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkEvent";
        };
        "new"(inner: {
            newDeposits: Array<DepositInfo>;
        }): {
            readonly tag: SdkEvent_Tags.NewDeposits;
            readonly inner: Readonly<{
                newDeposits: Array<DepositInfo>;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkEvent";
        };
        instanceOf(obj: any): obj is {
            readonly tag: SdkEvent_Tags.NewDeposits;
            readonly inner: Readonly<{
                newDeposits: Array<DepositInfo>;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkEvent";
        };
    };
}>;
/**
 * Events emitted by the SDK
 */
export type SdkEvent = InstanceType<(typeof SdkEvent)[keyof Omit<typeof SdkEvent, 'instanceOf'>]>;
export declare enum Seed_Tags {
    Mnemonic = "Mnemonic",
    Entropy = "Entropy"
}
/**
 * Represents the seed for wallet generation, either as a mnemonic phrase with an optional
 * passphrase or as raw entropy bytes.
 */
export declare const Seed: Readonly<{
    instanceOf: (obj: any) => obj is Seed;
    Mnemonic: {
        new (inner: {
            /**
             * The mnemonic phrase. 12 or 24 words.
             */ mnemonic: string;
            /**
             * An optional passphrase for the mnemonic.
             */ passphrase: string | undefined;
        }): {
            readonly tag: Seed_Tags.Mnemonic;
            readonly inner: Readonly<{
                mnemonic: string;
                passphrase: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "Seed";
        };
        "new"(inner: {
            /**
             * The mnemonic phrase. 12 or 24 words.
             */ mnemonic: string;
            /**
             * An optional passphrase for the mnemonic.
             */ passphrase: string | undefined;
        }): {
            readonly tag: Seed_Tags.Mnemonic;
            readonly inner: Readonly<{
                mnemonic: string;
                passphrase: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "Seed";
        };
        instanceOf(obj: any): obj is {
            readonly tag: Seed_Tags.Mnemonic;
            readonly inner: Readonly<{
                mnemonic: string;
                passphrase: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "Seed";
        };
    };
    Entropy: {
        new (v0: ArrayBuffer): {
            readonly tag: Seed_Tags.Entropy;
            readonly inner: Readonly<[ArrayBuffer]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "Seed";
        };
        "new"(v0: ArrayBuffer): {
            readonly tag: Seed_Tags.Entropy;
            readonly inner: Readonly<[ArrayBuffer]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "Seed";
        };
        instanceOf(obj: any): obj is {
            readonly tag: Seed_Tags.Entropy;
            readonly inner: Readonly<[ArrayBuffer]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "Seed";
        };
    };
}>;
/**
 * Represents the seed for wallet generation, either as a mnemonic phrase with an optional
 * passphrase or as raw entropy bytes.
 */
export type Seed = InstanceType<(typeof Seed)[keyof Omit<typeof Seed, 'instanceOf'>]>;
export declare enum SendPaymentMethod_Tags {
    BitcoinAddress = "BitcoinAddress",
    Bolt11Invoice = "Bolt11Invoice",
    SparkAddress = "SparkAddress",
    SparkInvoice = "SparkInvoice",
    CrossChainAddress = "CrossChainAddress"
}
export declare const SendPaymentMethod: Readonly<{
    instanceOf: (obj: any) => obj is SendPaymentMethod;
    BitcoinAddress: {
        new (inner: {
            address: BitcoinAddressDetails;
            feeQuote: SendOnchainFeeQuote;
        }): {
            readonly tag: SendPaymentMethod_Tags.BitcoinAddress;
            readonly inner: Readonly<{
                address: BitcoinAddressDetails;
                feeQuote: SendOnchainFeeQuote;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SendPaymentMethod";
        };
        "new"(inner: {
            address: BitcoinAddressDetails;
            feeQuote: SendOnchainFeeQuote;
        }): {
            readonly tag: SendPaymentMethod_Tags.BitcoinAddress;
            readonly inner: Readonly<{
                address: BitcoinAddressDetails;
                feeQuote: SendOnchainFeeQuote;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SendPaymentMethod";
        };
        instanceOf(obj: any): obj is {
            readonly tag: SendPaymentMethod_Tags.BitcoinAddress;
            readonly inner: Readonly<{
                address: BitcoinAddressDetails;
                feeQuote: SendOnchainFeeQuote;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SendPaymentMethod";
        };
    };
    Bolt11Invoice: {
        new (inner: {
            invoiceDetails: Bolt11InvoiceDetails;
            sparkTransferFeeSats: /*u64*/ bigint | undefined;
            lightningFeeSats: bigint;
        }): {
            readonly tag: SendPaymentMethod_Tags.Bolt11Invoice;
            readonly inner: Readonly<{
                invoiceDetails: Bolt11InvoiceDetails;
                sparkTransferFeeSats: /*u64*/ bigint | undefined;
                lightningFeeSats: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SendPaymentMethod";
        };
        "new"(inner: {
            invoiceDetails: Bolt11InvoiceDetails;
            sparkTransferFeeSats: /*u64*/ bigint | undefined;
            lightningFeeSats: bigint;
        }): {
            readonly tag: SendPaymentMethod_Tags.Bolt11Invoice;
            readonly inner: Readonly<{
                invoiceDetails: Bolt11InvoiceDetails;
                sparkTransferFeeSats: /*u64*/ bigint | undefined;
                lightningFeeSats: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SendPaymentMethod";
        };
        instanceOf(obj: any): obj is {
            readonly tag: SendPaymentMethod_Tags.Bolt11Invoice;
            readonly inner: Readonly<{
                invoiceDetails: Bolt11InvoiceDetails;
                sparkTransferFeeSats: /*u64*/ bigint | undefined;
                lightningFeeSats: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SendPaymentMethod";
        };
    };
    SparkAddress: {
        new (inner: {
            address: string;
            /**
             * Fee to pay for the transaction
             * Denominated in sats if token identifier is empty, otherwise in the token base units
             */ fee: U128;
            /**
             * The presence of this field indicates that the payment is for a token
             * If empty, it is a Bitcoin payment
             */ tokenIdentifier: string | undefined;
        }): {
            readonly tag: SendPaymentMethod_Tags.SparkAddress;
            readonly inner: Readonly<{
                address: string;
                fee: U128;
                tokenIdentifier: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SendPaymentMethod";
        };
        "new"(inner: {
            address: string;
            /**
             * Fee to pay for the transaction
             * Denominated in sats if token identifier is empty, otherwise in the token base units
             */ fee: U128;
            /**
             * The presence of this field indicates that the payment is for a token
             * If empty, it is a Bitcoin payment
             */ tokenIdentifier: string | undefined;
        }): {
            readonly tag: SendPaymentMethod_Tags.SparkAddress;
            readonly inner: Readonly<{
                address: string;
                fee: U128;
                tokenIdentifier: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SendPaymentMethod";
        };
        instanceOf(obj: any): obj is {
            readonly tag: SendPaymentMethod_Tags.SparkAddress;
            readonly inner: Readonly<{
                address: string;
                fee: U128;
                tokenIdentifier: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SendPaymentMethod";
        };
    };
    SparkInvoice: {
        new (inner: {
            sparkInvoiceDetails: SparkInvoiceDetails;
            /**
             * Fee to pay for the transaction
             * Denominated in sats if token identifier is empty, otherwise in the token base units
             */ fee: U128;
            /**
             * The presence of this field indicates that the payment is for a token
             * If empty, it is a Bitcoin payment
             */ tokenIdentifier: string | undefined;
        }): {
            readonly tag: SendPaymentMethod_Tags.SparkInvoice;
            readonly inner: Readonly<{
                sparkInvoiceDetails: SparkInvoiceDetails;
                fee: U128;
                tokenIdentifier: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SendPaymentMethod";
        };
        "new"(inner: {
            sparkInvoiceDetails: SparkInvoiceDetails;
            /**
             * Fee to pay for the transaction
             * Denominated in sats if token identifier is empty, otherwise in the token base units
             */ fee: U128;
            /**
             * The presence of this field indicates that the payment is for a token
             * If empty, it is a Bitcoin payment
             */ tokenIdentifier: string | undefined;
        }): {
            readonly tag: SendPaymentMethod_Tags.SparkInvoice;
            readonly inner: Readonly<{
                sparkInvoiceDetails: SparkInvoiceDetails;
                fee: U128;
                tokenIdentifier: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SendPaymentMethod";
        };
        instanceOf(obj: any): obj is {
            readonly tag: SendPaymentMethod_Tags.SparkInvoice;
            readonly inner: Readonly<{
                sparkInvoiceDetails: SparkInvoiceDetails;
                fee: U128;
                tokenIdentifier: string | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SendPaymentMethod";
        };
    };
    CrossChainAddress: {
        new (inner: {
            /**
             * The route selected for this cross-chain send (includes provider, chain, asset).
             */ route: CrossChainRoutePair;
            /**
             * Raw destination address (e.g. `0xabc...`).
             */ recipientAddress: string;
            /**
             * Amount routed to the provider, in the route's source-asset units
             * (Boltz invoice sats; Orchestra deposit sats/token). On the
             * token-conversion path (both `FeesIncluded` and `FeesExcluded`)
             * the dispatcher overrides this with the wallet-side token debit
             * when the source token and destination asset form a USD-stable pair.
             */ amountIn: U128;
            /**
             * `amount_in` expressed in the cross-chain (destination) asset's
             * base units, via the same rate the SDK used at prepare time.
             */ assetAmountIn: U128;
            /**
             * Estimated recipient amount in cross-chain asset base units.
             */ estimatedOut: U128;
            /**
             * Prepare-time total user-visible fee in cross-chain asset base units.
             * Covers provider spread + bridge/gas + DEX slippage. On the
             * token-conversion path it also rolls in the LN routing budget; on
             * the direct path that budget lives separately in
             * `source_transfer_fee_sats`.
             */ feeAmount: U128;
            /**
             * Provider's own service fee/spread in its native denomination.
             */ serviceFeeAmount: U128;
            /**
             * Asset which service fee is denominated in. Unset means BTC sats.
             */ serviceFeeAsset: string | undefined;
            /**
             * Sats budget for moving the amount in from the wallet to the provider.
             */ sourceTransferFeeSats: bigint;
            /**
             * Fee mode the prepare ran under; the send stage matches.
             */ feeMode: CrossChainFeeMode;
            /**
             * ISO8601 timestamp after which the quote is no longer valid.
             */ expiresAt: string;
            /**
             * Provider-internal state, produced when preparing and consumed
             * when sending.
             */ providerContext: CrossChainProviderContext;
        }): {
            readonly tag: SendPaymentMethod_Tags.CrossChainAddress;
            readonly inner: Readonly<{
                route: CrossChainRoutePair;
                recipientAddress: string;
                amountIn: U128;
                assetAmountIn: U128;
                estimatedOut: U128;
                feeAmount: U128;
                serviceFeeAmount: U128;
                serviceFeeAsset: string | undefined;
                sourceTransferFeeSats: bigint;
                feeMode: CrossChainFeeMode;
                expiresAt: string;
                providerContext: CrossChainProviderContext;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SendPaymentMethod";
        };
        "new"(inner: {
            /**
             * The route selected for this cross-chain send (includes provider, chain, asset).
             */ route: CrossChainRoutePair;
            /**
             * Raw destination address (e.g. `0xabc...`).
             */ recipientAddress: string;
            /**
             * Amount routed to the provider, in the route's source-asset units
             * (Boltz invoice sats; Orchestra deposit sats/token). On the
             * token-conversion path (both `FeesIncluded` and `FeesExcluded`)
             * the dispatcher overrides this with the wallet-side token debit
             * when the source token and destination asset form a USD-stable pair.
             */ amountIn: U128;
            /**
             * `amount_in` expressed in the cross-chain (destination) asset's
             * base units, via the same rate the SDK used at prepare time.
             */ assetAmountIn: U128;
            /**
             * Estimated recipient amount in cross-chain asset base units.
             */ estimatedOut: U128;
            /**
             * Prepare-time total user-visible fee in cross-chain asset base units.
             * Covers provider spread + bridge/gas + DEX slippage. On the
             * token-conversion path it also rolls in the LN routing budget; on
             * the direct path that budget lives separately in
             * `source_transfer_fee_sats`.
             */ feeAmount: U128;
            /**
             * Provider's own service fee/spread in its native denomination.
             */ serviceFeeAmount: U128;
            /**
             * Asset which service fee is denominated in. Unset means BTC sats.
             */ serviceFeeAsset: string | undefined;
            /**
             * Sats budget for moving the amount in from the wallet to the provider.
             */ sourceTransferFeeSats: bigint;
            /**
             * Fee mode the prepare ran under; the send stage matches.
             */ feeMode: CrossChainFeeMode;
            /**
             * ISO8601 timestamp after which the quote is no longer valid.
             */ expiresAt: string;
            /**
             * Provider-internal state, produced when preparing and consumed
             * when sending.
             */ providerContext: CrossChainProviderContext;
        }): {
            readonly tag: SendPaymentMethod_Tags.CrossChainAddress;
            readonly inner: Readonly<{
                route: CrossChainRoutePair;
                recipientAddress: string;
                amountIn: U128;
                assetAmountIn: U128;
                estimatedOut: U128;
                feeAmount: U128;
                serviceFeeAmount: U128;
                serviceFeeAsset: string | undefined;
                sourceTransferFeeSats: bigint;
                feeMode: CrossChainFeeMode;
                expiresAt: string;
                providerContext: CrossChainProviderContext;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SendPaymentMethod";
        };
        instanceOf(obj: any): obj is {
            readonly tag: SendPaymentMethod_Tags.CrossChainAddress;
            readonly inner: Readonly<{
                route: CrossChainRoutePair;
                recipientAddress: string;
                amountIn: U128;
                assetAmountIn: U128;
                estimatedOut: U128;
                feeAmount: U128;
                serviceFeeAmount: U128;
                serviceFeeAsset: string | undefined;
                sourceTransferFeeSats: bigint;
                feeMode: CrossChainFeeMode;
                expiresAt: string;
                providerContext: CrossChainProviderContext;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SendPaymentMethod";
        };
    };
}>;
export type SendPaymentMethod = InstanceType<(typeof SendPaymentMethod)[keyof Omit<typeof SendPaymentMethod, 'instanceOf'>]>;
export declare enum SendPaymentOptions_Tags {
    BitcoinAddress = "BitcoinAddress",
    Bolt11Invoice = "Bolt11Invoice",
    SparkAddress = "SparkAddress"
}
export declare const SendPaymentOptions: Readonly<{
    instanceOf: (obj: any) => obj is SendPaymentOptions;
    BitcoinAddress: {
        new (inner: {
            /**
             * Confirmation speed for the on-chain transaction.
             */ confirmationSpeed: OnchainConfirmationSpeed;
        }): {
            readonly tag: SendPaymentOptions_Tags.BitcoinAddress;
            readonly inner: Readonly<{
                confirmationSpeed: OnchainConfirmationSpeed;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SendPaymentOptions";
        };
        "new"(inner: {
            /**
             * Confirmation speed for the on-chain transaction.
             */ confirmationSpeed: OnchainConfirmationSpeed;
        }): {
            readonly tag: SendPaymentOptions_Tags.BitcoinAddress;
            readonly inner: Readonly<{
                confirmationSpeed: OnchainConfirmationSpeed;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SendPaymentOptions";
        };
        instanceOf(obj: any): obj is {
            readonly tag: SendPaymentOptions_Tags.BitcoinAddress;
            readonly inner: Readonly<{
                confirmationSpeed: OnchainConfirmationSpeed;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SendPaymentOptions";
        };
    };
    Bolt11Invoice: {
        new (inner: {
            preferSpark: boolean;
            /**
             * If set, the function will return the payment if it is still pending after this
             * number of seconds. If unset, the function will return immediately after initiating the payment.
             */ completionTimeoutSecs: /*u32*/ number | undefined;
        }): {
            readonly tag: SendPaymentOptions_Tags.Bolt11Invoice;
            readonly inner: Readonly<{
                preferSpark: boolean;
                completionTimeoutSecs: /*u32*/ number | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SendPaymentOptions";
        };
        "new"(inner: {
            preferSpark: boolean;
            /**
             * If set, the function will return the payment if it is still pending after this
             * number of seconds. If unset, the function will return immediately after initiating the payment.
             */ completionTimeoutSecs: /*u32*/ number | undefined;
        }): {
            readonly tag: SendPaymentOptions_Tags.Bolt11Invoice;
            readonly inner: Readonly<{
                preferSpark: boolean;
                completionTimeoutSecs: /*u32*/ number | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SendPaymentOptions";
        };
        instanceOf(obj: any): obj is {
            readonly tag: SendPaymentOptions_Tags.Bolt11Invoice;
            readonly inner: Readonly<{
                preferSpark: boolean;
                completionTimeoutSecs: /*u32*/ number | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SendPaymentOptions";
        };
    };
    SparkAddress: {
        new (inner: {
            /**
             * Can only be provided for Bitcoin payments. If set, a Spark HTLC transfer will be created.
             * The receiver will need to provide the preimage to claim it.
             */ htlcOptions: SparkHtlcOptions | undefined;
        }): {
            readonly tag: SendPaymentOptions_Tags.SparkAddress;
            readonly inner: Readonly<{
                htlcOptions: SparkHtlcOptions | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SendPaymentOptions";
        };
        "new"(inner: {
            /**
             * Can only be provided for Bitcoin payments. If set, a Spark HTLC transfer will be created.
             * The receiver will need to provide the preimage to claim it.
             */ htlcOptions: SparkHtlcOptions | undefined;
        }): {
            readonly tag: SendPaymentOptions_Tags.SparkAddress;
            readonly inner: Readonly<{
                htlcOptions: SparkHtlcOptions | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SendPaymentOptions";
        };
        instanceOf(obj: any): obj is {
            readonly tag: SendPaymentOptions_Tags.SparkAddress;
            readonly inner: Readonly<{
                htlcOptions: SparkHtlcOptions | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SendPaymentOptions";
        };
    };
}>;
export type SendPaymentOptions = InstanceType<(typeof SendPaymentOptions)[keyof Omit<typeof SendPaymentOptions, 'instanceOf'>]>;
export declare enum ServiceConnectivityError_Tags {
    Builder = "Builder",
    Redirect = "Redirect",
    Status = "Status",
    Timeout = "Timeout",
    Request = "Request",
    Connect = "Connect",
    Body = "Body",
    Decode = "Decode",
    Json = "Json",
    Other = "Other"
}
export declare const ServiceConnectivityError: Readonly<{
    instanceOf: (obj: any) => obj is ServiceConnectivityError;
    Builder: {
        new (v0: string): {
            readonly tag: ServiceConnectivityError_Tags.Builder;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: ServiceConnectivityError_Tags.Builder;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: ServiceConnectivityError_Tags.Builder;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: ServiceConnectivityError_Tags.Builder;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: ServiceConnectivityError_Tags.Builder;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    Redirect: {
        new (v0: string): {
            readonly tag: ServiceConnectivityError_Tags.Redirect;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: ServiceConnectivityError_Tags.Redirect;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: ServiceConnectivityError_Tags.Redirect;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: ServiceConnectivityError_Tags.Redirect;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: ServiceConnectivityError_Tags.Redirect;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    Status: {
        new (inner: {
            status: number;
            body: string;
        }): {
            readonly tag: ServiceConnectivityError_Tags.Status;
            readonly inner: Readonly<{
                status: number;
                body: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(inner: {
            status: number;
            body: string;
        }): {
            readonly tag: ServiceConnectivityError_Tags.Status;
            readonly inner: Readonly<{
                status: number;
                body: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: ServiceConnectivityError_Tags.Status;
            readonly inner: Readonly<{
                status: number;
                body: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: ServiceConnectivityError_Tags.Status;
            readonly inner: Readonly<{
                status: number;
                body: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: ServiceConnectivityError_Tags.Status;
            readonly inner: Readonly<{
                status: number;
                body: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<{
            status: number;
            body: string;
        }>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    Timeout: {
        new (v0: string): {
            readonly tag: ServiceConnectivityError_Tags.Timeout;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: ServiceConnectivityError_Tags.Timeout;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: ServiceConnectivityError_Tags.Timeout;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: ServiceConnectivityError_Tags.Timeout;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: ServiceConnectivityError_Tags.Timeout;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    Request: {
        new (v0: string): {
            readonly tag: ServiceConnectivityError_Tags.Request;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: ServiceConnectivityError_Tags.Request;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: ServiceConnectivityError_Tags.Request;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: ServiceConnectivityError_Tags.Request;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: ServiceConnectivityError_Tags.Request;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    Connect: {
        new (v0: string): {
            readonly tag: ServiceConnectivityError_Tags.Connect;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: ServiceConnectivityError_Tags.Connect;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: ServiceConnectivityError_Tags.Connect;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: ServiceConnectivityError_Tags.Connect;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: ServiceConnectivityError_Tags.Connect;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    Body: {
        new (v0: string): {
            readonly tag: ServiceConnectivityError_Tags.Body;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: ServiceConnectivityError_Tags.Body;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: ServiceConnectivityError_Tags.Body;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: ServiceConnectivityError_Tags.Body;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: ServiceConnectivityError_Tags.Body;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    Decode: {
        new (v0: string): {
            readonly tag: ServiceConnectivityError_Tags.Decode;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: ServiceConnectivityError_Tags.Decode;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: ServiceConnectivityError_Tags.Decode;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: ServiceConnectivityError_Tags.Decode;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: ServiceConnectivityError_Tags.Decode;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    Json: {
        new (v0: string): {
            readonly tag: ServiceConnectivityError_Tags.Json;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: ServiceConnectivityError_Tags.Json;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: ServiceConnectivityError_Tags.Json;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: ServiceConnectivityError_Tags.Json;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: ServiceConnectivityError_Tags.Json;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    Other: {
        new (v0: string): {
            readonly tag: ServiceConnectivityError_Tags.Other;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: ServiceConnectivityError_Tags.Other;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: ServiceConnectivityError_Tags.Other;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: ServiceConnectivityError_Tags.Other;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: ServiceConnectivityError_Tags.Other;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ServiceConnectivityError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
}>;
export type ServiceConnectivityError = InstanceType<(typeof ServiceConnectivityError)[keyof Omit<typeof ServiceConnectivityError, 'instanceOf'>]>;
/**
 * The operational status of a Spark service.
 */
export declare enum ServiceStatus {
    /**
     * Service is fully operational.
     */
    Operational = 0,
    /**
     * Service is experiencing degraded performance.
     */
    Degraded = 1,
    /**
     * Service is partially unavailable.
     */
    Partial = 2,
    /**
     * Service status is unknown.
     */
    Unknown = 3,
    /**
     * Service is experiencing a major outage.
     */
    Major = 4
}
export declare enum SessionStoreError_Tags {
    NotFound = "NotFound",
    Generic = "Generic"
}
export declare const SessionStoreError: Readonly<{
    instanceOf: (obj: any) => obj is SessionStoreError;
    NotFound: {
        new (): {
            readonly tag: SessionStoreError_Tags.NotFound;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SessionStoreError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(): {
            readonly tag: SessionStoreError_Tags.NotFound;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SessionStoreError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: SessionStoreError_Tags.NotFound;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SessionStoreError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: SessionStoreError_Tags.NotFound;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SessionStoreError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    Generic: {
        new (v0: string): {
            readonly tag: SessionStoreError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SessionStoreError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: SessionStoreError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SessionStoreError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: SessionStoreError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SessionStoreError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: SessionStoreError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SessionStoreError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: SessionStoreError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SessionStoreError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
}>;
export type SessionStoreError = InstanceType<(typeof SessionStoreError)[keyof Omit<typeof SessionStoreError, 'instanceOf'>]>;
export declare enum SignerError_Tags {
    KeyDerivation = "KeyDerivation",
    Signing = "Signing",
    Encryption = "Encryption",
    Decryption = "Decryption",
    Frost = "Frost",
    InvalidInput = "InvalidInput",
    Generic = "Generic"
}
/**
 * Error type for signer operations
 */
export declare const SignerError: Readonly<{
    instanceOf: (obj: any) => obj is SignerError;
    KeyDerivation: {
        new (v0: string): {
            readonly tag: SignerError_Tags.KeyDerivation;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: SignerError_Tags.KeyDerivation;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: SignerError_Tags.KeyDerivation;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: SignerError_Tags.KeyDerivation;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: SignerError_Tags.KeyDerivation;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    Signing: {
        new (v0: string): {
            readonly tag: SignerError_Tags.Signing;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: SignerError_Tags.Signing;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: SignerError_Tags.Signing;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: SignerError_Tags.Signing;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: SignerError_Tags.Signing;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    Encryption: {
        new (v0: string): {
            readonly tag: SignerError_Tags.Encryption;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: SignerError_Tags.Encryption;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: SignerError_Tags.Encryption;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: SignerError_Tags.Encryption;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: SignerError_Tags.Encryption;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    Decryption: {
        new (v0: string): {
            readonly tag: SignerError_Tags.Decryption;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: SignerError_Tags.Decryption;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: SignerError_Tags.Decryption;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: SignerError_Tags.Decryption;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: SignerError_Tags.Decryption;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    Frost: {
        new (v0: string): {
            readonly tag: SignerError_Tags.Frost;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: SignerError_Tags.Frost;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: SignerError_Tags.Frost;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: SignerError_Tags.Frost;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: SignerError_Tags.Frost;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    InvalidInput: {
        new (v0: string): {
            readonly tag: SignerError_Tags.InvalidInput;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: SignerError_Tags.InvalidInput;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: SignerError_Tags.InvalidInput;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: SignerError_Tags.InvalidInput;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: SignerError_Tags.InvalidInput;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    Generic: {
        new (v0: string): {
            readonly tag: SignerError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: SignerError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: SignerError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: SignerError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: SignerError_Tags.Generic;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SignerError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
}>;
/**
 * Error type for signer operations
 */
export type SignerError = InstanceType<(typeof SignerError)[keyof Omit<typeof SignerError, 'instanceOf'>]>;
export declare enum SourceAsset_Tags {
    Bitcoin = "Bitcoin",
    Token = "Token"
}
/**
 * The source asset a cross-chain route accepts as input on the Spark side.
 */
export declare const SourceAsset: Readonly<{
    instanceOf: (obj: any) => obj is SourceAsset;
    Bitcoin: {
        new (): {
            readonly tag: SourceAsset_Tags.Bitcoin;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SourceAsset";
        };
        "new"(): {
            readonly tag: SourceAsset_Tags.Bitcoin;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SourceAsset";
        };
        instanceOf(obj: any): obj is {
            readonly tag: SourceAsset_Tags.Bitcoin;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SourceAsset";
        };
    };
    Token: {
        new (inner: {
            tokenIdentifier: string;
        }): {
            readonly tag: SourceAsset_Tags.Token;
            readonly inner: Readonly<{
                tokenIdentifier: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SourceAsset";
        };
        "new"(inner: {
            tokenIdentifier: string;
        }): {
            readonly tag: SourceAsset_Tags.Token;
            readonly inner: Readonly<{
                tokenIdentifier: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SourceAsset";
        };
        instanceOf(obj: any): obj is {
            readonly tag: SourceAsset_Tags.Token;
            readonly inner: Readonly<{
                tokenIdentifier: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SourceAsset";
        };
    };
}>;
/**
 * The source asset a cross-chain route accepts as input on the Spark side.
 */
export type SourceAsset = InstanceType<(typeof SourceAsset)[keyof Omit<typeof SourceAsset, 'instanceOf'>]>;
export declare enum SparkHtlcStatus {
    /**
     * The HTLC is waiting for the preimage to be shared by the receiver
     */
    WaitingForPreimage = 0,
    /**
     * The HTLC preimage has been shared and the transfer can be or has been claimed by the receiver
     */
    PreimageShared = 1,
    /**
     * The HTLC has been returned to the sender due to expiry
     */
    Returned = 2
}
export declare enum StableBalanceActiveLabel_Tags {
    Set = "Set",
    Unset = "Unset"
}
/**
 * Specifies how to update the active stable balance token.
 */
export declare const StableBalanceActiveLabel: Readonly<{
    instanceOf: (obj: any) => obj is StableBalanceActiveLabel;
    Set: {
        new (inner: {
            label: string;
        }): {
            readonly tag: StableBalanceActiveLabel_Tags.Set;
            readonly inner: Readonly<{
                label: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StableBalanceActiveLabel";
        };
        "new"(inner: {
            label: string;
        }): {
            readonly tag: StableBalanceActiveLabel_Tags.Set;
            readonly inner: Readonly<{
                label: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StableBalanceActiveLabel";
        };
        instanceOf(obj: any): obj is {
            readonly tag: StableBalanceActiveLabel_Tags.Set;
            readonly inner: Readonly<{
                label: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StableBalanceActiveLabel";
        };
    };
    Unset: {
        new (): {
            readonly tag: StableBalanceActiveLabel_Tags.Unset;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StableBalanceActiveLabel";
        };
        "new"(): {
            readonly tag: StableBalanceActiveLabel_Tags.Unset;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StableBalanceActiveLabel";
        };
        instanceOf(obj: any): obj is {
            readonly tag: StableBalanceActiveLabel_Tags.Unset;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StableBalanceActiveLabel";
        };
    };
}>;
/**
 * Specifies how to update the active stable balance token.
 */
export type StableBalanceActiveLabel = InstanceType<(typeof StableBalanceActiveLabel)[keyof Omit<typeof StableBalanceActiveLabel, 'instanceOf'>]>;
export declare enum StorageError_Tags {
    Connection = "Connection",
    Implementation = "Implementation",
    InitializationError = "InitializationError",
    Serialization = "Serialization",
    NotFound = "NotFound"
}
/**
 * Errors that can occur during storage operations
 */
export declare const StorageError: Readonly<{
    instanceOf: (obj: any) => obj is StorageError;
    Connection: {
        new (v0: string): {
            readonly tag: StorageError_Tags.Connection;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: StorageError_Tags.Connection;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: StorageError_Tags.Connection;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: StorageError_Tags.Connection;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: StorageError_Tags.Connection;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    Implementation: {
        new (v0: string): {
            readonly tag: StorageError_Tags.Implementation;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: StorageError_Tags.Implementation;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: StorageError_Tags.Implementation;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: StorageError_Tags.Implementation;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: StorageError_Tags.Implementation;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    InitializationError: {
        new (v0: string): {
            readonly tag: StorageError_Tags.InitializationError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: StorageError_Tags.InitializationError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: StorageError_Tags.InitializationError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: StorageError_Tags.InitializationError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: StorageError_Tags.InitializationError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    Serialization: {
        new (v0: string): {
            readonly tag: StorageError_Tags.Serialization;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: StorageError_Tags.Serialization;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: StorageError_Tags.Serialization;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: StorageError_Tags.Serialization;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: StorageError_Tags.Serialization;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        }): Readonly<[string]>;
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    NotFound: {
        new (): {
            readonly tag: StorageError_Tags.NotFound;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(): {
            readonly tag: StorageError_Tags.NotFound;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: StorageError_Tags.NotFound;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: StorageError_Tags.NotFound;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        isError(error: unknown): error is Error;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
}>;
/**
 * Errors that can occur during storage operations
 */
export type StorageError = InstanceType<(typeof StorageError)[keyof Omit<typeof StorageError, 'instanceOf'>]>;
export declare enum StoragePaymentDetailsFilter_Tags {
    Spark = "Spark",
    Token = "Token",
    Lightning = "Lightning"
}
/**
 * Storage-internal variant of [`PaymentDetailsFilter`].
 */
export declare const StoragePaymentDetailsFilter: Readonly<{
    instanceOf: (obj: any) => obj is StoragePaymentDetailsFilter;
    Spark: {
        new (inner: {
            htlcStatus: Array<SparkHtlcStatus> | undefined;
            conversionFilter: ConversionFilter | undefined;
        }): {
            readonly tag: StoragePaymentDetailsFilter_Tags.Spark;
            readonly inner: Readonly<{
                htlcStatus: Array<SparkHtlcStatus> | undefined;
                conversionFilter: ConversionFilter | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StoragePaymentDetailsFilter";
        };
        "new"(inner: {
            htlcStatus: Array<SparkHtlcStatus> | undefined;
            conversionFilter: ConversionFilter | undefined;
        }): {
            readonly tag: StoragePaymentDetailsFilter_Tags.Spark;
            readonly inner: Readonly<{
                htlcStatus: Array<SparkHtlcStatus> | undefined;
                conversionFilter: ConversionFilter | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StoragePaymentDetailsFilter";
        };
        instanceOf(obj: any): obj is {
            readonly tag: StoragePaymentDetailsFilter_Tags.Spark;
            readonly inner: Readonly<{
                htlcStatus: Array<SparkHtlcStatus> | undefined;
                conversionFilter: ConversionFilter | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StoragePaymentDetailsFilter";
        };
    };
    Token: {
        new (inner: {
            conversionFilter: ConversionFilter | undefined;
            txHash: string | undefined;
            txType: TokenTransactionType | undefined;
        }): {
            readonly tag: StoragePaymentDetailsFilter_Tags.Token;
            readonly inner: Readonly<{
                conversionFilter: ConversionFilter | undefined;
                txHash: string | undefined;
                txType: TokenTransactionType | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StoragePaymentDetailsFilter";
        };
        "new"(inner: {
            conversionFilter: ConversionFilter | undefined;
            txHash: string | undefined;
            txType: TokenTransactionType | undefined;
        }): {
            readonly tag: StoragePaymentDetailsFilter_Tags.Token;
            readonly inner: Readonly<{
                conversionFilter: ConversionFilter | undefined;
                txHash: string | undefined;
                txType: TokenTransactionType | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StoragePaymentDetailsFilter";
        };
        instanceOf(obj: any): obj is {
            readonly tag: StoragePaymentDetailsFilter_Tags.Token;
            readonly inner: Readonly<{
                conversionFilter: ConversionFilter | undefined;
                txHash: string | undefined;
                txType: TokenTransactionType | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StoragePaymentDetailsFilter";
        };
    };
    Lightning: {
        new (inner: {
            htlcStatus: Array<SparkHtlcStatus> | undefined;
            conversionFilter: ConversionFilter | undefined;
        }): {
            readonly tag: StoragePaymentDetailsFilter_Tags.Lightning;
            readonly inner: Readonly<{
                htlcStatus: Array<SparkHtlcStatus> | undefined;
                conversionFilter: ConversionFilter | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StoragePaymentDetailsFilter";
        };
        "new"(inner: {
            htlcStatus: Array<SparkHtlcStatus> | undefined;
            conversionFilter: ConversionFilter | undefined;
        }): {
            readonly tag: StoragePaymentDetailsFilter_Tags.Lightning;
            readonly inner: Readonly<{
                htlcStatus: Array<SparkHtlcStatus> | undefined;
                conversionFilter: ConversionFilter | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StoragePaymentDetailsFilter";
        };
        instanceOf(obj: any): obj is {
            readonly tag: StoragePaymentDetailsFilter_Tags.Lightning;
            readonly inner: Readonly<{
                htlcStatus: Array<SparkHtlcStatus> | undefined;
                conversionFilter: ConversionFilter | undefined;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "StoragePaymentDetailsFilter";
        };
    };
}>;
/**
 * Storage-internal variant of [`PaymentDetailsFilter`].
 */
export type StoragePaymentDetailsFilter = InstanceType<(typeof StoragePaymentDetailsFilter)[keyof Omit<typeof StoragePaymentDetailsFilter, 'instanceOf'>]>;
export declare enum SuccessAction_Tags {
    Aes = "Aes",
    Message = "Message",
    Url = "Url"
}
/**
 * Supported success action types
 *
 * Receiving any other (unsupported) success action type will result in a failed parsing,
 * which will abort the LNURL-pay workflow, as per LUD-09.
 */
export declare const SuccessAction: Readonly<{
    instanceOf: (obj: any) => obj is SuccessAction;
    Aes: {
        new (inner: {
            data: AesSuccessActionData;
        }): {
            readonly tag: SuccessAction_Tags.Aes;
            readonly inner: Readonly<{
                data: AesSuccessActionData;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SuccessAction";
        };
        "new"(inner: {
            data: AesSuccessActionData;
        }): {
            readonly tag: SuccessAction_Tags.Aes;
            readonly inner: Readonly<{
                data: AesSuccessActionData;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SuccessAction";
        };
        instanceOf(obj: any): obj is {
            readonly tag: SuccessAction_Tags.Aes;
            readonly inner: Readonly<{
                data: AesSuccessActionData;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SuccessAction";
        };
    };
    Message: {
        new (inner: {
            data: MessageSuccessActionData;
        }): {
            readonly tag: SuccessAction_Tags.Message;
            readonly inner: Readonly<{
                data: MessageSuccessActionData;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SuccessAction";
        };
        "new"(inner: {
            data: MessageSuccessActionData;
        }): {
            readonly tag: SuccessAction_Tags.Message;
            readonly inner: Readonly<{
                data: MessageSuccessActionData;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SuccessAction";
        };
        instanceOf(obj: any): obj is {
            readonly tag: SuccessAction_Tags.Message;
            readonly inner: Readonly<{
                data: MessageSuccessActionData;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SuccessAction";
        };
    };
    Url: {
        new (inner: {
            data: UrlSuccessActionData;
        }): {
            readonly tag: SuccessAction_Tags.Url;
            readonly inner: Readonly<{
                data: UrlSuccessActionData;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SuccessAction";
        };
        "new"(inner: {
            data: UrlSuccessActionData;
        }): {
            readonly tag: SuccessAction_Tags.Url;
            readonly inner: Readonly<{
                data: UrlSuccessActionData;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SuccessAction";
        };
        instanceOf(obj: any): obj is {
            readonly tag: SuccessAction_Tags.Url;
            readonly inner: Readonly<{
                data: UrlSuccessActionData;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SuccessAction";
        };
    };
}>;
/**
 * Supported success action types
 *
 * Receiving any other (unsupported) success action type will result in a failed parsing,
 * which will abort the LNURL-pay workflow, as per LUD-09.
 */
export type SuccessAction = InstanceType<(typeof SuccessAction)[keyof Omit<typeof SuccessAction, 'instanceOf'>]>;
export declare enum SuccessActionProcessed_Tags {
    Aes = "Aes",
    Message = "Message",
    Url = "Url"
}
/**
 * [`SuccessAction`] where contents are ready to be consumed by the caller
 *
 * Contents are identical to [`SuccessAction`], except for AES where the ciphertext is decrypted.
 */
export declare const SuccessActionProcessed: Readonly<{
    instanceOf: (obj: any) => obj is SuccessActionProcessed;
    Aes: {
        new (inner: {
            result: AesSuccessActionDataResult;
        }): {
            readonly tag: SuccessActionProcessed_Tags.Aes;
            readonly inner: Readonly<{
                result: AesSuccessActionDataResult;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SuccessActionProcessed";
        };
        "new"(inner: {
            result: AesSuccessActionDataResult;
        }): {
            readonly tag: SuccessActionProcessed_Tags.Aes;
            readonly inner: Readonly<{
                result: AesSuccessActionDataResult;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SuccessActionProcessed";
        };
        instanceOf(obj: any): obj is {
            readonly tag: SuccessActionProcessed_Tags.Aes;
            readonly inner: Readonly<{
                result: AesSuccessActionDataResult;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SuccessActionProcessed";
        };
    };
    Message: {
        new (inner: {
            data: MessageSuccessActionData;
        }): {
            readonly tag: SuccessActionProcessed_Tags.Message;
            readonly inner: Readonly<{
                data: MessageSuccessActionData;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SuccessActionProcessed";
        };
        "new"(inner: {
            data: MessageSuccessActionData;
        }): {
            readonly tag: SuccessActionProcessed_Tags.Message;
            readonly inner: Readonly<{
                data: MessageSuccessActionData;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SuccessActionProcessed";
        };
        instanceOf(obj: any): obj is {
            readonly tag: SuccessActionProcessed_Tags.Message;
            readonly inner: Readonly<{
                data: MessageSuccessActionData;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SuccessActionProcessed";
        };
    };
    Url: {
        new (inner: {
            data: UrlSuccessActionData;
        }): {
            readonly tag: SuccessActionProcessed_Tags.Url;
            readonly inner: Readonly<{
                data: UrlSuccessActionData;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SuccessActionProcessed";
        };
        "new"(inner: {
            data: UrlSuccessActionData;
        }): {
            readonly tag: SuccessActionProcessed_Tags.Url;
            readonly inner: Readonly<{
                data: UrlSuccessActionData;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SuccessActionProcessed";
        };
        instanceOf(obj: any): obj is {
            readonly tag: SuccessActionProcessed_Tags.Url;
            readonly inner: Readonly<{
                data: UrlSuccessActionData;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SuccessActionProcessed";
        };
    };
}>;
/**
 * [`SuccessAction`] where contents are ready to be consumed by the caller
 *
 * Contents are identical to [`SuccessAction`], except for AES where the ciphertext is decrypted.
 */
export type SuccessActionProcessed = InstanceType<(typeof SuccessActionProcessed)[keyof Omit<typeof SuccessActionProcessed, 'instanceOf'>]>;
export declare enum TokenTransactionType {
    Transfer = 0,
    Mint = 1,
    Burn = 2
}
export declare enum UpdateDepositPayload_Tags {
    ClaimError = "ClaimError",
    Refund = "Refund"
}
export declare const UpdateDepositPayload: Readonly<{
    instanceOf: (obj: any) => obj is UpdateDepositPayload;
    ClaimError: {
        new (inner: {
            error: DepositClaimError;
        }): {
            readonly tag: UpdateDepositPayload_Tags.ClaimError;
            readonly inner: Readonly<{
                error: DepositClaimError;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "UpdateDepositPayload";
        };
        "new"(inner: {
            error: DepositClaimError;
        }): {
            readonly tag: UpdateDepositPayload_Tags.ClaimError;
            readonly inner: Readonly<{
                error: DepositClaimError;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "UpdateDepositPayload";
        };
        instanceOf(obj: any): obj is {
            readonly tag: UpdateDepositPayload_Tags.ClaimError;
            readonly inner: Readonly<{
                error: DepositClaimError;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "UpdateDepositPayload";
        };
    };
    Refund: {
        new (inner: {
            refundTxid: string;
            refundTx: string;
        }): {
            readonly tag: UpdateDepositPayload_Tags.Refund;
            readonly inner: Readonly<{
                refundTxid: string;
                refundTx: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "UpdateDepositPayload";
        };
        "new"(inner: {
            refundTxid: string;
            refundTx: string;
        }): {
            readonly tag: UpdateDepositPayload_Tags.Refund;
            readonly inner: Readonly<{
                refundTxid: string;
                refundTx: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "UpdateDepositPayload";
        };
        instanceOf(obj: any): obj is {
            readonly tag: UpdateDepositPayload_Tags.Refund;
            readonly inner: Readonly<{
                refundTxid: string;
                refundTx: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "UpdateDepositPayload";
        };
    };
}>;
export type UpdateDepositPayload = InstanceType<(typeof UpdateDepositPayload)[keyof Omit<typeof UpdateDepositPayload, 'instanceOf'>]>;
export declare enum WebhookEventType_Tags {
    LightningReceiveFinished = "LightningReceiveFinished",
    LightningSendFinished = "LightningSendFinished",
    CoopExitFinished = "CoopExitFinished",
    StaticDepositFinished = "StaticDepositFinished",
    Unknown = "Unknown"
}
/**
 * The type of event that triggers a webhook notification.
 */
export declare const WebhookEventType: Readonly<{
    instanceOf: (obj: any) => obj is WebhookEventType;
    LightningReceiveFinished: {
        new (): {
            readonly tag: WebhookEventType_Tags.LightningReceiveFinished;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "WebhookEventType";
        };
        "new"(): {
            readonly tag: WebhookEventType_Tags.LightningReceiveFinished;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "WebhookEventType";
        };
        instanceOf(obj: any): obj is {
            readonly tag: WebhookEventType_Tags.LightningReceiveFinished;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "WebhookEventType";
        };
    };
    LightningSendFinished: {
        new (): {
            readonly tag: WebhookEventType_Tags.LightningSendFinished;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "WebhookEventType";
        };
        "new"(): {
            readonly tag: WebhookEventType_Tags.LightningSendFinished;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "WebhookEventType";
        };
        instanceOf(obj: any): obj is {
            readonly tag: WebhookEventType_Tags.LightningSendFinished;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "WebhookEventType";
        };
    };
    CoopExitFinished: {
        new (): {
            readonly tag: WebhookEventType_Tags.CoopExitFinished;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "WebhookEventType";
        };
        "new"(): {
            readonly tag: WebhookEventType_Tags.CoopExitFinished;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "WebhookEventType";
        };
        instanceOf(obj: any): obj is {
            readonly tag: WebhookEventType_Tags.CoopExitFinished;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "WebhookEventType";
        };
    };
    StaticDepositFinished: {
        new (): {
            readonly tag: WebhookEventType_Tags.StaticDepositFinished;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "WebhookEventType";
        };
        "new"(): {
            readonly tag: WebhookEventType_Tags.StaticDepositFinished;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "WebhookEventType";
        };
        instanceOf(obj: any): obj is {
            readonly tag: WebhookEventType_Tags.StaticDepositFinished;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "WebhookEventType";
        };
    };
    Unknown: {
        new (v0: string): {
            readonly tag: WebhookEventType_Tags.Unknown;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "WebhookEventType";
        };
        "new"(v0: string): {
            readonly tag: WebhookEventType_Tags.Unknown;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "WebhookEventType";
        };
        instanceOf(obj: any): obj is {
            readonly tag: WebhookEventType_Tags.Unknown;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "WebhookEventType";
        };
    };
}>;
/**
 * The type of event that triggers a webhook notification.
 */
export type WebhookEventType = InstanceType<(typeof WebhookEventType)[keyof Omit<typeof WebhookEventType, 'instanceOf'>]>;
export interface BitcoinChainService {
    getAddressUtxos(address: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<Utxo>>;
    getTransactionStatus(txid: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<TxStatus>;
    getTransactionHex(txid: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<string>;
    broadcastTransaction(tx: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    recommendedFees(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<RecommendedFees>;
}
export declare class BitcoinChainServiceImpl extends UniffiAbstractObject implements BitcoinChainService {
    readonly [uniffiTypeNameSymbol] = "BitcoinChainServiceImpl";
    readonly [destructorGuardSymbol]: UniffiRustArcPtr;
    readonly [pointerLiteralSymbol]: UnsafeMutableRawPointer;
    private constructor();
    getAddressUtxos(address: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<Utxo>>;
    getTransactionStatus(txid: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<TxStatus>;
    getTransactionHex(txid: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<string>;
    broadcastTransaction(tx: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    recommendedFees(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<RecommendedFees>;
    /**
     * {@inheritDoc uniffi-bindgen-react-native#UniffiAbstractObject.uniffiDestroy}
     */
    uniffiDestroy(): void;
    static instanceOf(obj: any): obj is BitcoinChainServiceImpl;
}
/**
 * `BreezSDK` is a wrapper around `SparkSDK` that provides a more structured API
 * with request/response objects and comprehensive error handling.
 */
export interface BreezSdkInterface {
    /**
     * Adds a new contact.
     *
     * # Arguments
     *
     * * `request` - The request containing the contact details
     *
     * # Returns
     *
     * The created contact or an error
     */
    addContact(request: AddContactRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Contact>;
    /**
     * Registers a listener to receive SDK events
     *
     * The SDK holds the listener until it is removed with
     * `remove_event_listener` or until `disconnect` unregisters all
     * listeners. A held listener that references the SDK instance keeps
     * that instance alive.
     *
     * # Arguments
     *
     * * `listener` - An implementation of the `EventListener` trait
     *
     * # Returns
     *
     * A unique identifier for the listener, which can be used to remove it later
     */
    addEventListener(listener: EventListener, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<string>;
    /**
     * Authorize transferring the current owner's registered lightning address
     * username to `request.transferee_pubkey`. Returns a
     * [`TransferAuthorization`] to hand to the new owner, who
     * claims it via [`BreezSdk::claim_lightning_address_transfer`].
     * Errors if the current owner has no lightning address registered.
     */
    authorizeLightningAddressTransfer(request: AuthorizeTransferRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<TransferAuthorization>;
    /**
     * Initiates a Bitcoin purchase flow via an external provider.
     *
     * Returns a URL the user should open to complete the purchase.
     * The request variant determines the provider and its parameters:
     *
     * - [`BuyBitcoinRequest::Moonpay`]: Fiat-to-Bitcoin via on-chain deposit.
     * - [`BuyBitcoinRequest::CashApp`]: Lightning invoice + `cash.app` deep link (mainnet only).
     */
    buyBitcoin(request: BuyBitcoinRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<BuyBitcoinResponse>;
    checkLightningAddressAvailable(req: CheckLightningAddressRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<boolean>;
    /**
     * Verifies a message signature against the provided public key. The message
     * is SHA256 hashed before verification. The signature can be hex encoded
     * in either DER or compact format.
     */
    checkMessage(request: CheckMessageRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<CheckMessageResponse>;
    claimDeposit(request: ClaimDepositRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ClaimDepositResponse>;
    claimHtlcPayment(request: ClaimHtlcPaymentRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ClaimHtlcPaymentResponse>;
    /**
     * Claim a lightning address username handed over by its current owner,
     * using the [`TransferAuthorization`] from
     * [`BreezSdk::authorize_lightning_address_transfer`]. Completes the
     * takeover and returns the newly-owned address.
     */
    claimLightningAddressTransfer(request: ClaimTransferRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<LightningAddressInfo>;
    /**
     * Deletes a contact by its ID.
     *
     * # Arguments
     *
     * * `id` - The ID of the contact to delete
     *
     * # Returns
     *
     * Success or an error
     */
    deleteContact(id: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    deleteLightningAddress(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Stops the SDK's background tasks
     *
     * This method stops the background tasks started by the `start()` method.
     * It should be called before your application terminates to ensure proper cleanup.
     *
     * It also unregisters all event listeners, so listeners that reference
     * the SDK no longer keep it alive after this call.
     *
     * # Returns
     *
     * Result containing either success or an `SdkError` if the background task couldn't be stopped
     */
    disconnect(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    fetchConversionLimits(request: FetchConversionLimitsRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<FetchConversionLimitsResponse>;
    /**
     * Returns the available cross-chain routes.
     *
     * Use [`CrossChainRouteFilter::Send`] to get routes for sending from Spark
     * (filtered by the parsed recipient address), or
     * [`CrossChainRouteFilter::Receive`] to get routes for receiving into Spark
     * (optionally filtered by a source contract address).
     */
    getCrossChainRoutes(filter: CrossChainRouteFilter, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<CrossChainRoutePair>>;
    /**
     * Returns the balance of the wallet in satoshis
     */
    getInfo(request: GetInfoRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<GetInfoResponse>;
    getLightningAddress(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<LightningAddressInfo | undefined>;
    getPayment(request: GetPaymentRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<GetPaymentResponse>;
    /**
     * Returns an instance of the [`TokenIssuer`] for managing token issuance.
     */
    getTokenIssuer(): TokenIssuerInterface;
    /**
     * Returns the metadata for the given token identifiers.
     *
     * Results are not guaranteed to be in the same order as the input token identifiers.
     *
     * If the metadata is not found locally in cache, it will be queried from
     * the Spark network and then cached.
     */
    getTokensMetadata(request: GetTokensMetadataRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<GetTokensMetadataResponse>;
    /**
     * Returns the user settings for the wallet.
     *
     * Some settings are fetched from the Spark network so network requests are performed.
     */
    getUserSettings(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<UserSettings>;
    /**
     * Lists contacts with optional pagination.
     *
     * # Arguments
     *
     * * `request` - The request containing optional pagination parameters
     *
     * # Returns
     *
     * A list of contacts or an error
     */
    listContacts(request: ListContactsRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<Contact>>;
    /**
     * List fiat currencies for which there is a known exchange rate,
     * sorted by the canonical name of the currency.
     */
    listFiatCurrencies(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ListFiatCurrenciesResponse>;
    /**
     * List the latest rates of fiat currencies, sorted by name.
     */
    listFiatRates(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ListFiatRatesResponse>;
    /**
     * Lists payments from the storage with pagination
     *
     * This method provides direct access to the payment history stored in the database.
     * It returns payments in reverse chronological order (newest first).
     *
     * # Arguments
     *
     * * `request` - Contains pagination parameters (offset and limit)
     *
     * # Returns
     *
     * * `Ok(ListPaymentsResponse)` - Contains the list of payments if successful
     * * `Err(SdkError)` - If there was an error accessing the storage
     */
    listPayments(request: ListPaymentsRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ListPaymentsResponse>;
    listUnclaimedDeposits(request: ListUnclaimedDepositsRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ListUnclaimedDepositsResponse>;
    /**
     * Lists all webhooks currently registered for this wallet.
     *
     * # Returns
     *
     * A list of registered webhooks with their IDs, URLs, and subscribed event types
     */
    listWebhooks(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<Webhook>>;
    /**
     * Performs LNURL-auth with the service.
     *
     * This method implements the LNURL-auth protocol as specified in LUD-04 and LUD-05.
     * It derives a domain-specific linking key, signs the challenge, and sends the
     * authentication request to the service.
     */
    lnurlAuth(requestData: LnurlAuthRequestDetails, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<LnurlCallbackStatus>;
    lnurlPay(request: LnurlPayRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<LnurlPayResponse>;
    /**
     * Performs an LNURL withdraw operation for the amount of satoshis to
     * withdraw and the LNURL withdraw request details. The LNURL withdraw request
     * details can be obtained from calling [`BreezSdk::parse`].
     *
     * The method generates a Lightning invoice for the withdraw amount, stores
     * the LNURL withdraw metadata, and performs the LNURL withdraw using  the generated
     * invoice.
     *
     * If the `completion_timeout_secs` parameter is provided and greater than 0, the
     * method will wait for the payment to be completed within that period. If the
     * withdraw is completed within the timeout, the `payment` field in the response
     * will be set with the payment details. If the `completion_timeout_secs`
     * parameter is not provided or set to 0, the method will not wait for the payment
     * to be completed. If the withdraw is not completed within the
     * timeout, the `payment` field will be empty.
     *
     * # Arguments
     *
     * * `request` - The LNURL withdraw request
     *
     * # Returns
     *
     * Result containing either:
     * * `LnurlWithdrawResponse` - The payment details if the withdraw request was successful
     * * `SdkError` - If there was an error during the withdraw process
     */
    lnurlWithdraw(request: LnurlWithdrawRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<LnurlWithdrawResponse>;
    /**
     * Manually drives leaf optimization, blocking until the requested work
     * is done.
     *
     * With [`OptimizationMode::Full`] (the default) the call runs the entire
     * optimization in a single invocation. With
     * [`OptimizationMode::SingleRound`] it executes one round and returns —
     * the caller drives the loop by inspecting the
     * [`OptimizeLeavesResponse::outcome`] and calling again until
     * `InProgress` no longer appears.
     *
     * Returns an error if another optimization run (auto or manual) is
     * already in flight ([`SdkError::OptimizationAlreadyRunning`]), or if
     * the SDK preempted this run to free leaves for a payment
     * ([`SdkError::OptimizationCancelled`]).
     *
     * Manual runs do not emit events; events ([`SdkEvent::AutoOptimization`])
     * are reserved for the background auto-optimizer.
     */
    optimizeLeaves(request: OptimizeLeavesRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<OptimizeLeavesResponse>;
    parse(input: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<InputType>;
    prepareLnurlPay(request: PrepareLnurlPayRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<PrepareLnurlPayResponse>;
    prepareSendPayment(request: PrepareSendPaymentRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<PrepareSendPaymentResponse>;
    receivePayment(request: ReceivePaymentRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ReceivePaymentResponse>;
    /**
     * Get the recommended BTC fees based on the configured chain service.
     */
    recommendedFees(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<RecommendedFees>;
    refundDeposit(request: RefundDepositRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<RefundDepositResponse>;
    /**
     * Runs one pass of the pending-conversion refunder.
     *
     * Iterates over payments whose conversions failed and have a refund
     * pending, then attempts to refund each one. This is the same logic the
     * SDK runs internally on a periodic schedule when
     * `background_tasks_enabled` is `true`. When background tasks are
     * disabled the periodic refunder does not run, and this method is the
     * explicit entry point for driving the pass; when background tasks are
     * enabled, it can be called to force an immediate refund pass.
     */
    refundPendingConversions(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    registerLightningAddress(request: RegisterLightningAddressRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<LightningAddressInfo>;
    /**
     * Registers a webhook to receive notifications for wallet events.
     *
     * When registered events occur (e.g., a Lightning payment is received),
     * the Spark service provider will send an HTTP POST to the specified URL
     * with a payload signed using HMAC-SHA256 with the provided secret.
     *
     * # Arguments
     *
     * * `request` - The webhook registration details including URL, secret, and event types
     *
     * # Returns
     *
     * A response containing the unique identifier of the registered webhook
     */
    registerWebhook(request: RegisterWebhookRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<RegisterWebhookResponse>;
    /**
     * Removes a previously registered event listener
     *
     * # Arguments
     *
     * * `id` - The listener ID returned from `add_event_listener`
     *
     * # Returns
     *
     * `true` if the listener was found and removed, `false` otherwise
     */
    removeEventListener(id: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<boolean>;
    sendPayment(request: SendPaymentRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<SendPaymentResponse>;
    /**
     * Signs a message with the wallet's identity key. The message is SHA256
     * hashed before signing. The returned signature will be hex encoded in
     * DER format by default, or compact format if specified.
     */
    signMessage(request: SignMessageRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<SignMessageResponse>;
    /**
     * Synchronizes the wallet with the Spark network
     */
    syncWallet(request: SyncWalletRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<SyncWalletResponse>;
    /**
     * Unregisters a previously registered webhook.
     *
     * After unregistering, the Spark service provider will no longer send
     * notifications to the webhook URL.
     *
     * # Arguments
     *
     * * `request` - The unregister request containing the webhook ID
     */
    unregisterWebhook(request: UnregisterWebhookRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Updates an existing contact.
     *
     * # Arguments
     *
     * * `request` - The request containing the updated contact details
     *
     * # Returns
     *
     * The updated contact or an error
     */
    updateContact(request: UpdateContactRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Contact>;
    /**
     * Updates the user settings for the wallet.
     *
     * Some settings are updated on the Spark network so network requests may be performed.
     */
    updateUserSettings(request: UpdateUserSettingsRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
}
/**
 * `BreezSDK` is a wrapper around `SparkSDK` that provides a more structured API
 * with request/response objects and comprehensive error handling.
 */
export declare class BreezSdk extends UniffiAbstractObject implements BreezSdkInterface {
    readonly [uniffiTypeNameSymbol] = "BreezSdk";
    readonly [destructorGuardSymbol]: UniffiRustArcPtr;
    readonly [pointerLiteralSymbol]: UnsafeMutableRawPointer;
    private constructor();
    /**
     * Adds a new contact.
     *
     * # Arguments
     *
     * * `request` - The request containing the contact details
     *
     * # Returns
     *
     * The created contact or an error
     */
    addContact(request: AddContactRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Contact>;
    /**
     * Registers a listener to receive SDK events
     *
     * The SDK holds the listener until it is removed with
     * `remove_event_listener` or until `disconnect` unregisters all
     * listeners. A held listener that references the SDK instance keeps
     * that instance alive.
     *
     * # Arguments
     *
     * * `listener` - An implementation of the `EventListener` trait
     *
     * # Returns
     *
     * A unique identifier for the listener, which can be used to remove it later
     */
    addEventListener(listener: EventListener, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<string>;
    /**
     * Authorize transferring the current owner's registered lightning address
     * username to `request.transferee_pubkey`. Returns a
     * [`TransferAuthorization`] to hand to the new owner, who
     * claims it via [`BreezSdk::claim_lightning_address_transfer`].
     * Errors if the current owner has no lightning address registered.
     */
    authorizeLightningAddressTransfer(request: AuthorizeTransferRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<TransferAuthorization>;
    /**
     * Initiates a Bitcoin purchase flow via an external provider.
     *
     * Returns a URL the user should open to complete the purchase.
     * The request variant determines the provider and its parameters:
     *
     * - [`BuyBitcoinRequest::Moonpay`]: Fiat-to-Bitcoin via on-chain deposit.
     * - [`BuyBitcoinRequest::CashApp`]: Lightning invoice + `cash.app` deep link (mainnet only).
     */
    buyBitcoin(request: BuyBitcoinRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<BuyBitcoinResponse>;
    checkLightningAddressAvailable(req: CheckLightningAddressRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<boolean>;
    /**
     * Verifies a message signature against the provided public key. The message
     * is SHA256 hashed before verification. The signature can be hex encoded
     * in either DER or compact format.
     */
    checkMessage(request: CheckMessageRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<CheckMessageResponse>;
    claimDeposit(request: ClaimDepositRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ClaimDepositResponse>;
    claimHtlcPayment(request: ClaimHtlcPaymentRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ClaimHtlcPaymentResponse>;
    /**
     * Claim a lightning address username handed over by its current owner,
     * using the [`TransferAuthorization`] from
     * [`BreezSdk::authorize_lightning_address_transfer`]. Completes the
     * takeover and returns the newly-owned address.
     */
    claimLightningAddressTransfer(request: ClaimTransferRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<LightningAddressInfo>;
    /**
     * Deletes a contact by its ID.
     *
     * # Arguments
     *
     * * `id` - The ID of the contact to delete
     *
     * # Returns
     *
     * Success or an error
     */
    deleteContact(id: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    deleteLightningAddress(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Stops the SDK's background tasks
     *
     * This method stops the background tasks started by the `start()` method.
     * It should be called before your application terminates to ensure proper cleanup.
     *
     * It also unregisters all event listeners, so listeners that reference
     * the SDK no longer keep it alive after this call.
     *
     * # Returns
     *
     * Result containing either success or an `SdkError` if the background task couldn't be stopped
     */
    disconnect(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    fetchConversionLimits(request: FetchConversionLimitsRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<FetchConversionLimitsResponse>;
    /**
     * Returns the available cross-chain routes.
     *
     * Use [`CrossChainRouteFilter::Send`] to get routes for sending from Spark
     * (filtered by the parsed recipient address), or
     * [`CrossChainRouteFilter::Receive`] to get routes for receiving into Spark
     * (optionally filtered by a source contract address).
     */
    getCrossChainRoutes(filter: CrossChainRouteFilter, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<CrossChainRoutePair>>;
    /**
     * Returns the balance of the wallet in satoshis
     */
    getInfo(request: GetInfoRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<GetInfoResponse>;
    getLightningAddress(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<LightningAddressInfo | undefined>;
    getPayment(request: GetPaymentRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<GetPaymentResponse>;
    /**
     * Returns an instance of the [`TokenIssuer`] for managing token issuance.
     */
    getTokenIssuer(): TokenIssuerInterface;
    /**
     * Returns the metadata for the given token identifiers.
     *
     * Results are not guaranteed to be in the same order as the input token identifiers.
     *
     * If the metadata is not found locally in cache, it will be queried from
     * the Spark network and then cached.
     */
    getTokensMetadata(request: GetTokensMetadataRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<GetTokensMetadataResponse>;
    /**
     * Returns the user settings for the wallet.
     *
     * Some settings are fetched from the Spark network so network requests are performed.
     */
    getUserSettings(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<UserSettings>;
    /**
     * Lists contacts with optional pagination.
     *
     * # Arguments
     *
     * * `request` - The request containing optional pagination parameters
     *
     * # Returns
     *
     * A list of contacts or an error
     */
    listContacts(request: ListContactsRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<Contact>>;
    /**
     * List fiat currencies for which there is a known exchange rate,
     * sorted by the canonical name of the currency.
     */
    listFiatCurrencies(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ListFiatCurrenciesResponse>;
    /**
     * List the latest rates of fiat currencies, sorted by name.
     */
    listFiatRates(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ListFiatRatesResponse>;
    /**
     * Lists payments from the storage with pagination
     *
     * This method provides direct access to the payment history stored in the database.
     * It returns payments in reverse chronological order (newest first).
     *
     * # Arguments
     *
     * * `request` - Contains pagination parameters (offset and limit)
     *
     * # Returns
     *
     * * `Ok(ListPaymentsResponse)` - Contains the list of payments if successful
     * * `Err(SdkError)` - If there was an error accessing the storage
     */
    listPayments(request: ListPaymentsRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ListPaymentsResponse>;
    listUnclaimedDeposits(request: ListUnclaimedDepositsRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ListUnclaimedDepositsResponse>;
    /**
     * Lists all webhooks currently registered for this wallet.
     *
     * # Returns
     *
     * A list of registered webhooks with their IDs, URLs, and subscribed event types
     */
    listWebhooks(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<Webhook>>;
    /**
     * Performs LNURL-auth with the service.
     *
     * This method implements the LNURL-auth protocol as specified in LUD-04 and LUD-05.
     * It derives a domain-specific linking key, signs the challenge, and sends the
     * authentication request to the service.
     */
    lnurlAuth(requestData: LnurlAuthRequestDetails, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<LnurlCallbackStatus>;
    lnurlPay(request: LnurlPayRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<LnurlPayResponse>;
    /**
     * Performs an LNURL withdraw operation for the amount of satoshis to
     * withdraw and the LNURL withdraw request details. The LNURL withdraw request
     * details can be obtained from calling [`BreezSdk::parse`].
     *
     * The method generates a Lightning invoice for the withdraw amount, stores
     * the LNURL withdraw metadata, and performs the LNURL withdraw using  the generated
     * invoice.
     *
     * If the `completion_timeout_secs` parameter is provided and greater than 0, the
     * method will wait for the payment to be completed within that period. If the
     * withdraw is completed within the timeout, the `payment` field in the response
     * will be set with the payment details. If the `completion_timeout_secs`
     * parameter is not provided or set to 0, the method will not wait for the payment
     * to be completed. If the withdraw is not completed within the
     * timeout, the `payment` field will be empty.
     *
     * # Arguments
     *
     * * `request` - The LNURL withdraw request
     *
     * # Returns
     *
     * Result containing either:
     * * `LnurlWithdrawResponse` - The payment details if the withdraw request was successful
     * * `SdkError` - If there was an error during the withdraw process
     */
    lnurlWithdraw(request: LnurlWithdrawRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<LnurlWithdrawResponse>;
    /**
     * Manually drives leaf optimization, blocking until the requested work
     * is done.
     *
     * With [`OptimizationMode::Full`] (the default) the call runs the entire
     * optimization in a single invocation. With
     * [`OptimizationMode::SingleRound`] it executes one round and returns —
     * the caller drives the loop by inspecting the
     * [`OptimizeLeavesResponse::outcome`] and calling again until
     * `InProgress` no longer appears.
     *
     * Returns an error if another optimization run (auto or manual) is
     * already in flight ([`SdkError::OptimizationAlreadyRunning`]), or if
     * the SDK preempted this run to free leaves for a payment
     * ([`SdkError::OptimizationCancelled`]).
     *
     * Manual runs do not emit events; events ([`SdkEvent::AutoOptimization`])
     * are reserved for the background auto-optimizer.
     */
    optimizeLeaves(request: OptimizeLeavesRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<OptimizeLeavesResponse>;
    parse(input: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<InputType>;
    prepareLnurlPay(request: PrepareLnurlPayRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<PrepareLnurlPayResponse>;
    prepareSendPayment(request: PrepareSendPaymentRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<PrepareSendPaymentResponse>;
    receivePayment(request: ReceivePaymentRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ReceivePaymentResponse>;
    /**
     * Get the recommended BTC fees based on the configured chain service.
     */
    recommendedFees(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<RecommendedFees>;
    refundDeposit(request: RefundDepositRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<RefundDepositResponse>;
    /**
     * Runs one pass of the pending-conversion refunder.
     *
     * Iterates over payments whose conversions failed and have a refund
     * pending, then attempts to refund each one. This is the same logic the
     * SDK runs internally on a periodic schedule when
     * `background_tasks_enabled` is `true`. When background tasks are
     * disabled the periodic refunder does not run, and this method is the
     * explicit entry point for driving the pass; when background tasks are
     * enabled, it can be called to force an immediate refund pass.
     */
    refundPendingConversions(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    registerLightningAddress(request: RegisterLightningAddressRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<LightningAddressInfo>;
    /**
     * Registers a webhook to receive notifications for wallet events.
     *
     * When registered events occur (e.g., a Lightning payment is received),
     * the Spark service provider will send an HTTP POST to the specified URL
     * with a payload signed using HMAC-SHA256 with the provided secret.
     *
     * # Arguments
     *
     * * `request` - The webhook registration details including URL, secret, and event types
     *
     * # Returns
     *
     * A response containing the unique identifier of the registered webhook
     */
    registerWebhook(request: RegisterWebhookRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<RegisterWebhookResponse>;
    /**
     * Removes a previously registered event listener
     *
     * # Arguments
     *
     * * `id` - The listener ID returned from `add_event_listener`
     *
     * # Returns
     *
     * `true` if the listener was found and removed, `false` otherwise
     */
    removeEventListener(id: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<boolean>;
    sendPayment(request: SendPaymentRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<SendPaymentResponse>;
    /**
     * Signs a message with the wallet's identity key. The message is SHA256
     * hashed before signing. The returned signature will be hex encoded in
     * DER format by default, or compact format if specified.
     */
    signMessage(request: SignMessageRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<SignMessageResponse>;
    /**
     * Synchronizes the wallet with the Spark network
     */
    syncWallet(request: SyncWalletRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<SyncWalletResponse>;
    /**
     * Unregisters a previously registered webhook.
     *
     * After unregistering, the Spark service provider will no longer send
     * notifications to the webhook URL.
     *
     * # Arguments
     *
     * * `request` - The unregister request containing the webhook ID
     */
    unregisterWebhook(request: UnregisterWebhookRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Updates an existing contact.
     *
     * # Arguments
     *
     * * `request` - The request containing the updated contact details
     *
     * # Returns
     *
     * The updated contact or an error
     */
    updateContact(request: UpdateContactRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Contact>;
    /**
     * Updates the user settings for the wallet.
     *
     * Some settings are updated on the Spark network so network requests may be performed.
     */
    updateUserSettings(request: UpdateUserSettingsRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * {@inheritDoc uniffi-bindgen-react-native#UniffiAbstractObject.uniffiDestroy}
     */
    uniffiDestroy(): void;
    static instanceOf(obj: any): obj is BreezSdk;
}
/**
 * External signer trait that can be implemented by users and passed to the SDK.
 *
 * This trait mirrors the `BreezSigner` trait but uses FFI-compatible types (bytes, strings)
 * instead of Rust-specific types. This allows it to be exposed through FFI and WASM bindings.
 *
 * All methods accept and return simple types:
 * - Derivation paths as strings (e.g., "m/44'/0'/0'")
 * - Public keys, signatures, and other crypto primitives as Vec<u8>
 * - Spark-specific types as serialized representations
 *
 * Errors are returned as `SignerError` for FFI compatibility.
 */
export interface ExternalBreezSigner {
    /**
     * Derives a public key for the given BIP32 derivation path.
     *
     * # Arguments
     * * `path` - BIP32 derivation path as a string (e.g., "m/44'/0'/0'/0/0")
     *
     * # Returns
     * The derived public key as 33 bytes, or a `SignerError`
     *
     * See also: [JavaScript `getPublicKeyFromDerivation`](https://docs.spark.money/wallets/spark-signer#get-public-key-from-derivation)
     */
    derivePublicKey(path: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<PublicKeyBytes>;
    /**
     * Signs a message using ECDSA at the given derivation path.
     *
     * The message should be a 32-byte digest (typically a hash of the original data).
     *
     * # Arguments
     * * `message` - The 32-byte message digest to sign
     * * `path` - BIP32 derivation path as a string
     *
     * # Returns
     * 64-byte compact ECDSA signature, or a `SignerError`
     */
    signEcdsa(message: MessageBytes, path: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<EcdsaSignatureBytes>;
    /**
     * Signs a message using recoverable ECDSA at the given derivation path.
     *
     * The message should be a 32-byte digest (typically a hash of the original data).
     *
     * # Arguments
     * * `message` - The 32-byte message digest to sign
     * * `path` - BIP32 derivation path as a string
     *
     * # Returns
     * 65 bytes: recovery ID (31 + `recovery_id`) + 64-byte signature, or a `SignerError`
     */
    signEcdsaRecoverable(message: MessageBytes, path: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<RecoverableEcdsaSignatureBytes>;
    /**
     * Encrypts a message using ECIES at the given derivation path.
     *
     * # Arguments
     * * `message` - The message to encrypt
     * * `path` - BIP32 derivation path for the encryption key
     *
     * # Returns
     * Encrypted data, or a `SignerError`
     */
    encryptEcies(message: ArrayBuffer, path: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ArrayBuffer>;
    /**
     * Decrypts a message using ECIES at the given derivation path.
     *
     * # Arguments
     * * `message` - The encrypted message
     * * `path` - BIP32 derivation path for the decryption key
     *
     * # Returns
     * Decrypted data, or a `SignerError`
     *
     * See also: [JavaScript `decryptEcies`](https://docs.spark.money/wallets/spark-signer#decrypt-ecies)
     */
    decryptEcies(message: ArrayBuffer, path: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ArrayBuffer>;
    /**
     * Signs a hash using Schnorr signature at the given derivation path.
     *
     * # Arguments
     * * `hash` - The 32-byte hash to sign (must be 32 bytes)
     * * `path` - BIP32 derivation path as a string
     *
     * # Returns
     * 64-byte Schnorr signature, or a `SignerError`
     */
    signHashSchnorr(hash: ArrayBuffer, path: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<SchnorrSignatureBytes>;
    /**
     * HMAC-SHA256 of a message at the given derivation path.
     *
     * # Arguments
     * * `message` - The message to hash
     * * `path` - BIP32 derivation path as a string
     *
     * # Returns
     * 32-byte HMAC-SHA256, or a `SignerError`
     *
     * See also: [JavaScript `htlcHMAC`](https://docs.spark.money/wallets/spark-signer#generate-htlc-hmac)
     */
    hmacSha256(message: ArrayBuffer, path: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<HashedMessageBytes>;
}
/**
 * External signer trait that can be implemented by users and passed to the SDK.
 *
 * This trait mirrors the `BreezSigner` trait but uses FFI-compatible types (bytes, strings)
 * instead of Rust-specific types. This allows it to be exposed through FFI and WASM bindings.
 *
 * All methods accept and return simple types:
 * - Derivation paths as strings (e.g., "m/44'/0'/0'")
 * - Public keys, signatures, and other crypto primitives as Vec<u8>
 * - Spark-specific types as serialized representations
 *
 * Errors are returned as `SignerError` for FFI compatibility.
 */
export declare class ExternalBreezSignerImpl extends UniffiAbstractObject implements ExternalBreezSigner {
    readonly [uniffiTypeNameSymbol] = "ExternalBreezSignerImpl";
    readonly [destructorGuardSymbol]: UniffiRustArcPtr;
    readonly [pointerLiteralSymbol]: UnsafeMutableRawPointer;
    private constructor();
    /**
     * Derives a public key for the given BIP32 derivation path.
     *
     * # Arguments
     * * `path` - BIP32 derivation path as a string (e.g., "m/44'/0'/0'/0/0")
     *
     * # Returns
     * The derived public key as 33 bytes, or a `SignerError`
     *
     * See also: [JavaScript `getPublicKeyFromDerivation`](https://docs.spark.money/wallets/spark-signer#get-public-key-from-derivation)
     */
    derivePublicKey(path: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<PublicKeyBytes>;
    /**
     * Signs a message using ECDSA at the given derivation path.
     *
     * The message should be a 32-byte digest (typically a hash of the original data).
     *
     * # Arguments
     * * `message` - The 32-byte message digest to sign
     * * `path` - BIP32 derivation path as a string
     *
     * # Returns
     * 64-byte compact ECDSA signature, or a `SignerError`
     */
    signEcdsa(message: MessageBytes, path: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<EcdsaSignatureBytes>;
    /**
     * Signs a message using recoverable ECDSA at the given derivation path.
     *
     * The message should be a 32-byte digest (typically a hash of the original data).
     *
     * # Arguments
     * * `message` - The 32-byte message digest to sign
     * * `path` - BIP32 derivation path as a string
     *
     * # Returns
     * 65 bytes: recovery ID (31 + `recovery_id`) + 64-byte signature, or a `SignerError`
     */
    signEcdsaRecoverable(message: MessageBytes, path: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<RecoverableEcdsaSignatureBytes>;
    /**
     * Encrypts a message using ECIES at the given derivation path.
     *
     * # Arguments
     * * `message` - The message to encrypt
     * * `path` - BIP32 derivation path for the encryption key
     *
     * # Returns
     * Encrypted data, or a `SignerError`
     */
    encryptEcies(message: ArrayBuffer, path: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ArrayBuffer>;
    /**
     * Decrypts a message using ECIES at the given derivation path.
     *
     * # Arguments
     * * `message` - The encrypted message
     * * `path` - BIP32 derivation path for the decryption key
     *
     * # Returns
     * Decrypted data, or a `SignerError`
     *
     * See also: [JavaScript `decryptEcies`](https://docs.spark.money/wallets/spark-signer#decrypt-ecies)
     */
    decryptEcies(message: ArrayBuffer, path: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ArrayBuffer>;
    /**
     * Signs a hash using Schnorr signature at the given derivation path.
     *
     * # Arguments
     * * `hash` - The 32-byte hash to sign (must be 32 bytes)
     * * `path` - BIP32 derivation path as a string
     *
     * # Returns
     * 64-byte Schnorr signature, or a `SignerError`
     */
    signHashSchnorr(hash: ArrayBuffer, path: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<SchnorrSignatureBytes>;
    /**
     * HMAC-SHA256 of a message at the given derivation path.
     *
     * # Arguments
     * * `message` - The message to hash
     * * `path` - BIP32 derivation path as a string
     *
     * # Returns
     * 32-byte HMAC-SHA256, or a `SignerError`
     *
     * See also: [JavaScript `htlcHMAC`](https://docs.spark.money/wallets/spark-signer#generate-htlc-hmac)
     */
    hmacSha256(message: ArrayBuffer, path: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<HashedMessageBytes>;
    /**
     * {@inheritDoc uniffi-bindgen-react-native#UniffiAbstractObject.uniffiDestroy}
     */
    uniffiDestroy(): void;
    static instanceOf(obj: any): obj is ExternalBreezSignerImpl;
}
/**
 * FFI-compatible mirror of `spark_wallet::SparkSigner`.
 */
export interface ExternalSparkSigner {
    /**
     * The wallet identity public key (33 bytes compressed).
     */
    getIdentityPublicKey(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<PublicKeyBytes>;
    /**
     * The signing public key for a tree leaf.
     */
    getPublicKeyForLeaf(leafId: ExternalTreeNodeId, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<PublicKeyBytes>;
    /**
     * The static-deposit signing public key at `index`.
     */
    getStaticDepositPublicKey(index: number, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<PublicKeyBytes>;
    /**
     * ECDSA-sign a server authentication challenge with the identity key.
     */
    signAuthenticationChallenge(challenge: ArrayBuffer, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<EcdsaSignatureBytes>;
    /**
     * ECDSA-sign an arbitrary user message with the identity key.
     */
    signMessage(message: ArrayBuffer, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<EcdsaSignatureBytes>;
    /**
     * Produce FROST shares for a batch of jobs.
     */
    signFrost(jobs: Array<ExternalFrostJob>, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<ExternalFrostShareResult>>;
    /**
     * Prepare an outbound transfer (key-tweak + packages + payload signature).
     */
    prepareTransfer(request: ExternalPrepareTransferRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ExternalPreparedTransfer>;
    /**
     * Claim an inbound transfer (key-tweak step).
     */
    prepareClaim(request: ExternalPrepareClaimRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ExternalPreparedClaim>;
    /**
     * Prepare a Lightning receive (in-enclave preimage + Feldman split).
     */
    prepareLightningReceive(request: ExternalPrepareLightningReceiveRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ExternalPreparedLightningReceive>;
    /**
     * Prepare a static deposit (export secret to SSP + FROST-sign tree txs).
     */
    prepareStaticDeposit(request: ExternalPrepareStaticDepositRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ExternalPreparedStaticDeposit>;
    /**
     * Begin a static-deposit refund (user-commits-first).
     */
    startStaticDepositRefund(request: ExternalStartStaticDepositRefundRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ExternalStartedStaticDepositRefund>;
    /**
     * Finish a static-deposit refund (aggregate into the final signature).
     */
    signStaticDepositRefund(request: ExternalSignStaticDepositRefundRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ExternalFrostSignature>;
    /**
     * Schnorr-sign a Spark invoice (sats or tokens) with the identity key.
     */
    signSparkInvoice(request: ExternalSignSparkInvoiceRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ExternalSignedSparkInvoice>;
    /**
     * Schnorr-sign a token-transaction digest with the identity key.
     */
    prepareTokenTransaction(request: ExternalPrepareTokenTransactionRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ExternalPreparedTokenTransaction>;
    /**
     * Prepare a static-deposit claim (export secret in the clear + sign).
     */
    prepareStaticDepositClaim(request: ExternalPrepareStaticDepositClaimRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ExternalPreparedStaticDepositClaim>;
}
/**
 * FFI-compatible mirror of `spark_wallet::SparkSigner`.
 */
export declare class ExternalSparkSignerImpl extends UniffiAbstractObject implements ExternalSparkSigner {
    readonly [uniffiTypeNameSymbol] = "ExternalSparkSignerImpl";
    readonly [destructorGuardSymbol]: UniffiRustArcPtr;
    readonly [pointerLiteralSymbol]: UnsafeMutableRawPointer;
    private constructor();
    /**
     * The wallet identity public key (33 bytes compressed).
     */
    getIdentityPublicKey(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<PublicKeyBytes>;
    /**
     * The signing public key for a tree leaf.
     */
    getPublicKeyForLeaf(leafId: ExternalTreeNodeId, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<PublicKeyBytes>;
    /**
     * The static-deposit signing public key at `index`.
     */
    getStaticDepositPublicKey(index: number, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<PublicKeyBytes>;
    /**
     * ECDSA-sign a server authentication challenge with the identity key.
     */
    signAuthenticationChallenge(challenge: ArrayBuffer, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<EcdsaSignatureBytes>;
    /**
     * ECDSA-sign an arbitrary user message with the identity key.
     */
    signMessage(message: ArrayBuffer, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<EcdsaSignatureBytes>;
    /**
     * Produce FROST shares for a batch of jobs.
     */
    signFrost(jobs: Array<ExternalFrostJob>, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<ExternalFrostShareResult>>;
    /**
     * Prepare an outbound transfer (key-tweak + packages + payload signature).
     */
    prepareTransfer(request: ExternalPrepareTransferRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ExternalPreparedTransfer>;
    /**
     * Claim an inbound transfer (key-tweak step).
     */
    prepareClaim(request: ExternalPrepareClaimRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ExternalPreparedClaim>;
    /**
     * Prepare a Lightning receive (in-enclave preimage + Feldman split).
     */
    prepareLightningReceive(request: ExternalPrepareLightningReceiveRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ExternalPreparedLightningReceive>;
    /**
     * Prepare a static deposit (export secret to SSP + FROST-sign tree txs).
     */
    prepareStaticDeposit(request: ExternalPrepareStaticDepositRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ExternalPreparedStaticDeposit>;
    /**
     * Begin a static-deposit refund (user-commits-first).
     */
    startStaticDepositRefund(request: ExternalStartStaticDepositRefundRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ExternalStartedStaticDepositRefund>;
    /**
     * Finish a static-deposit refund (aggregate into the final signature).
     */
    signStaticDepositRefund(request: ExternalSignStaticDepositRefundRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ExternalFrostSignature>;
    /**
     * Schnorr-sign a Spark invoice (sats or tokens) with the identity key.
     */
    signSparkInvoice(request: ExternalSignSparkInvoiceRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ExternalSignedSparkInvoice>;
    /**
     * Schnorr-sign a token-transaction digest with the identity key.
     */
    prepareTokenTransaction(request: ExternalPrepareTokenTransactionRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ExternalPreparedTokenTransaction>;
    /**
     * Prepare a static-deposit claim (export secret in the clear + sign).
     */
    prepareStaticDepositClaim(request: ExternalPrepareStaticDepositClaimRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ExternalPreparedStaticDepositClaim>;
    /**
     * {@inheritDoc uniffi-bindgen-react-native#UniffiAbstractObject.uniffiDestroy}
     */
    uniffiDestroy(): void;
    static instanceOf(obj: any): obj is ExternalSparkSignerImpl;
}
/**
 * Trait covering fiat-related functionality
 */
export interface FiatService {
    /**
     * List all supported fiat currencies for which there is a known exchange rate.
     */
    fetchFiatCurrencies(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<FiatCurrency>>;
    /**
     * Get the live rates from the server.
     */
    fetchFiatRates(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<Rate>>;
}
/**
 * Trait covering fiat-related functionality
 */
export declare class FiatServiceImpl extends UniffiAbstractObject implements FiatService {
    readonly [uniffiTypeNameSymbol] = "FiatServiceImpl";
    readonly [destructorGuardSymbol]: UniffiRustArcPtr;
    readonly [pointerLiteralSymbol]: UnsafeMutableRawPointer;
    private constructor();
    /**
     * List all supported fiat currencies for which there is a known exchange rate.
     */
    fetchFiatCurrencies(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<FiatCurrency>>;
    /**
     * Get the live rates from the server.
     */
    fetchFiatRates(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<Rate>>;
    /**
     * {@inheritDoc uniffi-bindgen-react-native#UniffiAbstractObject.uniffiDestroy}
     */
    uniffiDestroy(): void;
    static instanceOf(obj: any): obj is FiatServiceImpl;
}
/**
 * High-level orchestration over a [`PrfProvider`] and the internal
 * Nostr-backed label store. Two named flows match the real onboarding
 * states:
 *
 * - [`Self::register`]: first-time setup (create credential + derive
 * wallet + publish label) in one ceremony where the platform
 * supports dual-salt PRF.
 * - [`Self::sign_in`]: returning user. Fast path when the host has
 * the label cached locally; cold-restore-with-discovery when not.
 *
 * Label management hangs off the [`Self::labels`] sub-object.
 *
 * The `breez_api_key` is the Breez relay key used for authenticated
 * (NIP-42) label storage. Hosts that already construct the SDK
 * [`crate::Config`] can use [`Self::from_config`] to forward it.
 */
export interface PasskeyClientInterface {
    /**
     * One-shot capability + configuration probe. Collapses
     * [`PrfProvider::is_supported`] and
     * [`PrfProvider::check_domain_association`] into a single value
     * hosts can branch on.
     */
    checkAvailability(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<PasskeyAvailability>;
    /**
     * Single-CTA onboarding: silent sign-in, falling through to
     * registration when no credential exists on the device. The returned
     * [`ConnectFlow`] tells the caller which path ran.
     *
     * The silent sign-in pins `prefer_immediately_available_credentials =
     * true` regardless of [`SignInRequest`]: the fallback depends on the OS
     * fast-failing with [`PrfProviderError::CredentialNotFound`] when no
     * local credential exists. Only `CredentialNotFound` flips to the
     * register path; every other error (`Cancel`, `Timeout`, ...) propagates
     * unchanged.
     *
     * Mobile-only: meant for iOS 18+ / Android 9+ where
     * `preferImmediatelyAvailableCredentials` is honored. The web
     * equivalent (`mediation: 'immediate'`) is not yet stable
     * cross-browser, so this is not surfaced on WASM; web hosts call
     * [`Self::sign_in`] and catch `CredentialNotFound` themselves.
     */
    connectWithPasskey(request: ConnectWithPasskeyRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ConnectWithPasskeyResponse>;
    /**
     * Label sub-object. List or publish labels for this passkey's
     * identity.
     */
    labels(): PasskeyLabelsInterface;
    /**
     * First-time setup. Drives [`PrfProvider::create_passkey`] (one
     * ceremony) followed by the wallet-derivation flow that backs
     * [`Passkey::setup_wallet`] (one ceremony, dual-salt where
     * supported). The label is always published on success.
     */
    register(request: RegisterRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<RegisterResponse>;
    /**
     * Returning-user sign-in. Fast path (`label` set) skips the
     * label-store query; discovery path (`label = None`) derives
     * the configured default label and lists the user's labels in
     * the same ceremony. Never re-publishes the label.
     */
    signIn(request: SignInRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<SignInResponse>;
}
/**
 * High-level orchestration over a [`PrfProvider`] and the internal
 * Nostr-backed label store. Two named flows match the real onboarding
 * states:
 *
 * - [`Self::register`]: first-time setup (create credential + derive
 * wallet + publish label) in one ceremony where the platform
 * supports dual-salt PRF.
 * - [`Self::sign_in`]: returning user. Fast path when the host has
 * the label cached locally; cold-restore-with-discovery when not.
 *
 * Label management hangs off the [`Self::labels`] sub-object.
 *
 * The `breez_api_key` is the Breez relay key used for authenticated
 * (NIP-42) label storage. Hosts that already construct the SDK
 * [`crate::Config`] can use [`Self::from_config`] to forward it.
 */
export declare class PasskeyClient extends UniffiAbstractObject implements PasskeyClientInterface {
    readonly [uniffiTypeNameSymbol] = "PasskeyClient";
    readonly [destructorGuardSymbol]: UniffiRustArcPtr;
    readonly [pointerLiteralSymbol]: UnsafeMutableRawPointer;
    /**
     * Construct with the default Nostr-backed label store.
     */
    constructor(prfProvider: PrfProvider, breezApiKey: string | undefined, config: PasskeyConfig | undefined);
    /**
     * One-shot capability + configuration probe. Collapses
     * [`PrfProvider::is_supported`] and
     * [`PrfProvider::check_domain_association`] into a single value
     * hosts can branch on.
     */
    checkAvailability(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<PasskeyAvailability>;
    /**
     * Single-CTA onboarding: silent sign-in, falling through to
     * registration when no credential exists on the device. The returned
     * [`ConnectFlow`] tells the caller which path ran.
     *
     * The silent sign-in pins `prefer_immediately_available_credentials =
     * true` regardless of [`SignInRequest`]: the fallback depends on the OS
     * fast-failing with [`PrfProviderError::CredentialNotFound`] when no
     * local credential exists. Only `CredentialNotFound` flips to the
     * register path; every other error (`Cancel`, `Timeout`, ...) propagates
     * unchanged.
     *
     * Mobile-only: meant for iOS 18+ / Android 9+ where
     * `preferImmediatelyAvailableCredentials` is honored. The web
     * equivalent (`mediation: 'immediate'`) is not yet stable
     * cross-browser, so this is not surfaced on WASM; web hosts call
     * [`Self::sign_in`] and catch `CredentialNotFound` themselves.
     */
    connectWithPasskey(request: ConnectWithPasskeyRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ConnectWithPasskeyResponse>;
    /**
     * Label sub-object. List or publish labels for this passkey's
     * identity.
     */
    labels(): PasskeyLabelsInterface;
    /**
     * First-time setup. Drives [`PrfProvider::create_passkey`] (one
     * ceremony) followed by the wallet-derivation flow that backs
     * [`Passkey::setup_wallet`] (one ceremony, dual-salt where
     * supported). The label is always published on success.
     */
    register(request: RegisterRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<RegisterResponse>;
    /**
     * Returning-user sign-in. Fast path (`label` set) skips the
     * label-store query; discovery path (`label = None`) derives
     * the configured default label and lists the user's labels in
     * the same ceremony. Never re-publishes the label.
     */
    signIn(request: SignInRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<SignInResponse>;
    /**
     * {@inheritDoc uniffi-bindgen-react-native#UniffiAbstractObject.uniffiDestroy}
     */
    uniffiDestroy(): void;
    static instanceOf(obj: any): obj is PasskeyClient;
}
/**
 * Label sub-object surfaced from [`PasskeyClient::labels`]. Holds a
 * clone of the parent [`Passkey`] so calls re-use its cached identity.
 */
export interface PasskeyLabelsInterface {
    /**
     * List labels published for this passkey's identity.
     */
    list(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<string>>;
    /**
     * Idempotently publish `label` for this passkey's identity.
     */
    store(label: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
}
/**
 * Label sub-object surfaced from [`PasskeyClient::labels`]. Holds a
 * clone of the parent [`Passkey`] so calls re-use its cached identity.
 */
export declare class PasskeyLabels extends UniffiAbstractObject implements PasskeyLabelsInterface {
    readonly [uniffiTypeNameSymbol] = "PasskeyLabels";
    readonly [destructorGuardSymbol]: UniffiRustArcPtr;
    readonly [pointerLiteralSymbol]: UnsafeMutableRawPointer;
    private constructor();
    /**
     * List labels published for this passkey's identity.
     */
    list(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<string>>;
    /**
     * Idempotently publish `label` for this passkey's identity.
     */
    store(label: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * {@inheritDoc uniffi-bindgen-react-native#UniffiAbstractObject.uniffiDestroy}
     */
    uniffiDestroy(): void;
    static instanceOf(obj: any): obj is PasskeyLabels;
}
/**
 * This interface is used to observe outgoing Lightning, Spark, onchain Bitcoin and token payments.
 *
 * `before_send` is called before a payment is made; if the implementation returns an error the
 * payment is cancelled. `after_send` is called after a token payment has been broadcast to report
 * its final payment id; it cannot cancel the payment and any error it returns is ignored.
 */
export interface PaymentObserver {
    /**
     * Called before Lightning, Spark, onchain Bitcoin or token payments are made
     */
    beforeSend(payments: Array<ProvisionalPayment>, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Called after a token payment has been broadcast, mapping each provisional payment id
     * reported by `before_send` to its final payment id
     */
    afterSend(updates: Array<PaymentIdUpdate>, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
}
/**
 * This interface is used to observe outgoing Lightning, Spark, onchain Bitcoin and token payments.
 *
 * `before_send` is called before a payment is made; if the implementation returns an error the
 * payment is cancelled. `after_send` is called after a token payment has been broadcast to report
 * its final payment id; it cannot cancel the payment and any error it returns is ignored.
 */
export declare class PaymentObserverImpl extends UniffiAbstractObject implements PaymentObserver {
    readonly [uniffiTypeNameSymbol] = "PaymentObserverImpl";
    readonly [destructorGuardSymbol]: UniffiRustArcPtr;
    readonly [pointerLiteralSymbol]: UnsafeMutableRawPointer;
    private constructor();
    /**
     * Called before Lightning, Spark, onchain Bitcoin or token payments are made
     */
    beforeSend(payments: Array<ProvisionalPayment>, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Called after a token payment has been broadcast, mapping each provisional payment id
     * reported by `before_send` to its final payment id
     */
    afterSend(updates: Array<PaymentIdUpdate>, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * {@inheritDoc uniffi-bindgen-react-native#UniffiAbstractObject.uniffiDestroy}
     */
    uniffiDestroy(): void;
    static instanceOf(obj: any): obj is PaymentObserverImpl;
}
/**
 * Trait for PRF (Pseudo-Random Function) operations backing a
 * passkey-derived wallet seed.
 *
 * Each platform's built-in `PasskeyProvider` implements this by
 * authenticating with a platform passkey and evaluating the `WebAuthn`
 * PRF extension. Custom providers (CLI tools backed by `YubiKey`, FIDO2
 * hmac-secret, on-disk key material, HSMs) implement the same contract:
 * anything that deterministically derives 32 bytes from a salt qualifies.
 */
export interface PrfProvider {
    /**
     * Derive 32-byte PRF outputs for `request.salts` in as few
     * authenticator ceremonies as the platform supports, preserving input
     * order. Empty `salts` returns an empty vec without prompting. Built-in
     * providers pair salts via `WebAuthn`'s `prf.eval.first` + `.second`
     * (halving prompts); custom providers without bulk support loop.
     *
     * `request.allow_credentials` and
     * `request.prefer_immediately_available_credentials` shape this single
     * ceremony; providers that don't model them (file-backed, `YubiKey`)
     * ignore them. Returns the seeds plus the credential ID observed in the
     * same assertion, absent when the provider does not surface it.
     */
    deriveSeeds(request: DeriveSeedsRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<DeriveSeedsOutput>;
    /**
     * Whether this provider can produce PRF outputs on the current
     * device. Hosts gate UX on the result.
     */
    isSupported(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<boolean>;
    /**
     * Explicit registration. Platform passkey providers override this to
     * drive the OS create ceremony and surface the credential metadata
     * hosts need for `exclude_credentials` bookkeeping. CLI / hardware
     * providers register lazily in [`Self::derive_seeds`] and inherit the
     * default `PrfNotSupported`.
     *
     * `exclude_credentials` lists already-registered IDs and surfaces
     * duplicates as `CredentialAlreadyExists`. The `user.id` is always
     * provider-minted and returned on `PasskeyCredential.user_id`.
     */
    createPasskey(excludeCredentials: Array<ArrayBuffer>, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<PasskeyCredential>;
    /**
     * Advisory check against the platform's out-of-band verification
     * source (iOS AASA / Android assetlinks / browser rpId scope).
     * The SDK never gates internally; hosts pick their own policy.
     *
     * Built-in providers override:
     * - **iOS/macOS**: AASA `webcredentials.apps` lookup. May be stale.
     * - **Android**: Digital Asset Links query. Degrades `NotAssociated`
     * to `Skipped` because `CredentialManager` runs its own check.
     * - **Browser**: `rpId` is a registrable suffix of `window.location.hostname`.
     *
     * Custom providers without a verification source inherit the
     * `Skipped` default.
     */
    checkDomainAssociation(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<DomainAssociation>;
}
/**
 * Trait for PRF (Pseudo-Random Function) operations backing a
 * passkey-derived wallet seed.
 *
 * Each platform's built-in `PasskeyProvider` implements this by
 * authenticating with a platform passkey and evaluating the `WebAuthn`
 * PRF extension. Custom providers (CLI tools backed by `YubiKey`, FIDO2
 * hmac-secret, on-disk key material, HSMs) implement the same contract:
 * anything that deterministically derives 32 bytes from a salt qualifies.
 */
export declare class PrfProviderImpl extends UniffiAbstractObject implements PrfProvider {
    readonly [uniffiTypeNameSymbol] = "PrfProviderImpl";
    readonly [destructorGuardSymbol]: UniffiRustArcPtr;
    readonly [pointerLiteralSymbol]: UnsafeMutableRawPointer;
    private constructor();
    /**
     * Derive 32-byte PRF outputs for `request.salts` in as few
     * authenticator ceremonies as the platform supports, preserving input
     * order. Empty `salts` returns an empty vec without prompting. Built-in
     * providers pair salts via `WebAuthn`'s `prf.eval.first` + `.second`
     * (halving prompts); custom providers without bulk support loop.
     *
     * `request.allow_credentials` and
     * `request.prefer_immediately_available_credentials` shape this single
     * ceremony; providers that don't model them (file-backed, `YubiKey`)
     * ignore them. Returns the seeds plus the credential ID observed in the
     * same assertion, absent when the provider does not surface it.
     */
    deriveSeeds(request: DeriveSeedsRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<DeriveSeedsOutput>;
    /**
     * Whether this provider can produce PRF outputs on the current
     * device. Hosts gate UX on the result.
     */
    isSupported(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<boolean>;
    /**
     * Explicit registration. Platform passkey providers override this to
     * drive the OS create ceremony and surface the credential metadata
     * hosts need for `exclude_credentials` bookkeeping. CLI / hardware
     * providers register lazily in [`Self::derive_seeds`] and inherit the
     * default `PrfNotSupported`.
     *
     * `exclude_credentials` lists already-registered IDs and surfaces
     * duplicates as `CredentialAlreadyExists`. The `user.id` is always
     * provider-minted and returned on `PasskeyCredential.user_id`.
     */
    createPasskey(excludeCredentials: Array<ArrayBuffer>, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<PasskeyCredential>;
    /**
     * Advisory check against the platform's out-of-band verification
     * source (iOS AASA / Android assetlinks / browser rpId scope).
     * The SDK never gates internally; hosts pick their own policy.
     *
     * Built-in providers override:
     * - **iOS/macOS**: AASA `webcredentials.apps` lookup. May be stale.
     * - **Android**: Digital Asset Links query. Degrades `NotAssociated`
     * to `Skipped` because `CredentialManager` runs its own check.
     * - **Browser**: `rpId` is a registrable suffix of `window.location.hostname`.
     *
     * Custom providers without a verification source inherit the
     * `Skipped` default.
     */
    checkDomainAssociation(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<DomainAssociation>;
    /**
     * {@inheritDoc uniffi-bindgen-react-native#UniffiAbstractObject.uniffiDestroy}
     */
    uniffiDestroy(): void;
    static instanceOf(obj: any): obj is PrfProviderImpl;
}
/**
 * The four per-tenant stores produced by a [`StorageBackend`].
 *
 * An opaque handle: the SDK reads its stores internally; the fields never
 * cross the FFI boundary.
 */
export interface ResolvedStoresInterface {
}
/**
 * The four per-tenant stores produced by a [`StorageBackend`].
 *
 * An opaque handle: the SDK reads its stores internally; the fields never
 * cross the FFI boundary.
 */
export declare class ResolvedStores extends UniffiAbstractObject implements ResolvedStoresInterface {
    readonly [uniffiTypeNameSymbol] = "ResolvedStores";
    readonly [destructorGuardSymbol]: UniffiRustArcPtr;
    readonly [pointerLiteralSymbol]: UnsafeMutableRawPointer;
    private constructor();
    /**
     * {@inheritDoc uniffi-bindgen-react-native#UniffiAbstractObject.uniffiDestroy}
     */
    uniffiDestroy(): void;
    static instanceOf(obj: any): obj is ResolvedStores;
}
/**
 * REST client trait for making HTTP requests.
 *
 * This trait provides a way for users to supply their own HTTP client implementation
 * for use with the SDK. The SDK will use this client for all HTTP operations including
 * LNURL flows and chain service requests.
 */
export interface RestClient {
    /**
     * Makes a GET request and logs on DEBUG.
     * ### Arguments
     * - `url`: the URL on which GET will be called
     * - `headers`: optional headers that will be set on the request
     */
    getRequest(url: string, headers: Map<string, string> | undefined, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<RestResponse>;
    /**
     * Makes a POST request, and logs on DEBUG.
     * ### Arguments
     * - `url`: the URL on which POST will be called
     * - `headers`: the optional POST headers
     * - `body`: the optional POST body
     */
    postRequest(url: string, headers: Map<string, string> | undefined, body: string | undefined, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<RestResponse>;
    /**
     * Makes a DELETE request, and logs on DEBUG.
     * ### Arguments
     * - `url`: the URL on which DELETE will be called
     * - `headers`: the optional DELETE headers
     * - `body`: the optional DELETE body
     */
    deleteRequest(url: string, headers: Map<string, string> | undefined, body: string | undefined, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<RestResponse>;
}
/**
 * REST client trait for making HTTP requests.
 *
 * This trait provides a way for users to supply their own HTTP client implementation
 * for use with the SDK. The SDK will use this client for all HTTP operations including
 * LNURL flows and chain service requests.
 */
export declare class RestClientImpl extends UniffiAbstractObject implements RestClient {
    readonly [uniffiTypeNameSymbol] = "RestClientImpl";
    readonly [destructorGuardSymbol]: UniffiRustArcPtr;
    readonly [pointerLiteralSymbol]: UnsafeMutableRawPointer;
    private constructor();
    /**
     * Makes a GET request and logs on DEBUG.
     * ### Arguments
     * - `url`: the URL on which GET will be called
     * - `headers`: optional headers that will be set on the request
     */
    getRequest(url: string, headers: Map<string, string> | undefined, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<RestResponse>;
    /**
     * Makes a POST request, and logs on DEBUG.
     * ### Arguments
     * - `url`: the URL on which POST will be called
     * - `headers`: the optional POST headers
     * - `body`: the optional POST body
     */
    postRequest(url: string, headers: Map<string, string> | undefined, body: string | undefined, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<RestResponse>;
    /**
     * Makes a DELETE request, and logs on DEBUG.
     * ### Arguments
     * - `url`: the URL on which DELETE will be called
     * - `headers`: the optional DELETE headers
     * - `body`: the optional DELETE body
     */
    deleteRequest(url: string, headers: Map<string, string> | undefined, body: string | undefined, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<RestResponse>;
    /**
     * {@inheritDoc uniffi-bindgen-react-native#UniffiAbstractObject.uniffiDestroy}
     */
    uniffiDestroy(): void;
    static instanceOf(obj: any): obj is RestClientImpl;
}
/**
 * Builder for creating `BreezSdk` instances with customizable components.
 */
export interface SdkBuilderInterface {
    /**
     * Builds the `BreezSdk` instance with the configured components.
     */
    build(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<BreezSdkInterface>;
    /**
     * Sets the account number for key derivation. All wallet keys derive from
     * the seed at `m/8797555'/<account number>'`, so each account number
     * yields an independent wallet from the same seed. Defaults to 0 on
     * Regtest and 1 on all other networks when unset.
     * Arguments:
     * - `account_number`: The account number in the derivation path.
     */
    withAccountNumber(accountNumber: number, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Sets the chain service to be used by the SDK.
     * Arguments:
     * - `chain_service`: The chain service to be used.
     */
    withChainService(chainService: BitcoinChainService, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Sets the root storage directory to initialize the default storage with.
     * This initializes both storage and real-time sync storage with the
     * default implementations.
     * Arguments:
     * - `storage_dir`: The data directory for storage.
     */
    withDefaultStorage(storageDir: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Sets the fiat service to be used by the SDK.
     * Arguments:
     * - `fiat_service`: The fiat service to be used.
     */
    withFiatService(fiatService: FiatService, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    withLnurlClient(lnurlClient: RestClient, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Sets the payment observer to be used by the SDK.
     * Arguments:
     * - `payment_observer`: The payment observer to be used.
     */
    withPaymentObserver(paymentObserver: PaymentObserver, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Sets the REST chain service to be used by the SDK.
     * Arguments:
     * - `url`: The base URL of the REST API.
     * - `api_type`: The API type to be used.
     * - `credentials`: Optional credentials for basic authentication.
     */
    withRestChainService(url: string, apiType: ChainApiType, credentials: Credentials | undefined, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Threads a shared [`SdkContext`](crate::SdkContext) into the builder.
     *
     * Construct the context once via
     * [`new_shared_sdk_context`](crate::new_shared_sdk_context) and pass the
     * same `Arc` to every `SdkBuilder` whose SDKs should share its resources
     * (operator gRPC channels, SSP HTTP client, database pool).
     */
    withSharedContext(context: SdkContextInterface, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * **Deprecated.** Use
     * [`with_storage_backend`](SdkBuilder::with_storage_backend) with
     * [`custom_storage`](crate::custom_storage).
     * Arguments:
     * - `storage`: The storage implementation to be used.
     */
    withStorage(storage: Storage, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Sets the storage backend to be used by the SDK.
     *
     * Build the [`StorageBackend`](crate::StorageBackend) via
     * [`default_storage`](crate::default_storage),
     * [`postgres_storage`](crate::postgres_storage),
     * [`mysql_storage`](crate::mysql_storage) or
     * [`custom_storage`](crate::custom_storage).
     * Arguments:
     * - `storage`: The storage backend to be used.
     */
    withStorageBackend(storage: StorageBackend, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
}
/**
 * Builder for creating `BreezSdk` instances with customizable components.
 */
export declare class SdkBuilder extends UniffiAbstractObject implements SdkBuilderInterface {
    readonly [uniffiTypeNameSymbol] = "SdkBuilder";
    readonly [destructorGuardSymbol]: UniffiRustArcPtr;
    readonly [pointerLiteralSymbol]: UnsafeMutableRawPointer;
    /**
     * Creates a new `SdkBuilder` with the provided configuration.
     * Arguments:
     * - `config`: The configuration to be used.
     * - `seed`: The seed for wallet generation.
     */
    constructor(config: Config, seed: Seed);
    /**
     * Creates a new `SdkBuilder` with the provided configuration and external
     * signers (e.g. from `create_turnkey_signer`), so signer-based SDKs can be
     * composed with any storage backend or shared context, unlike
     * `connect_with_signer` which is fixed to the default storage.
     * Arguments:
     * - `config`: The configuration to be used.
     * - `breez_signer`: External signer for non-Spark SDK signing (LNURL-auth,
     * sync, message signing, ECIES).
     * - `spark_signer`: External high-level Spark signer for the Spark wallet.
     */
    static newWithSigner(config: Config, breezSigner: ExternalBreezSigner, sparkSigner: ExternalSparkSigner): SdkBuilderInterface;
    /**
     * Builds the `BreezSdk` instance with the configured components.
     */
    build(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<BreezSdkInterface>;
    /**
     * Sets the account number for key derivation. All wallet keys derive from
     * the seed at `m/8797555'/<account number>'`, so each account number
     * yields an independent wallet from the same seed. Defaults to 0 on
     * Regtest and 1 on all other networks when unset.
     * Arguments:
     * - `account_number`: The account number in the derivation path.
     */
    withAccountNumber(accountNumber: number, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Sets the chain service to be used by the SDK.
     * Arguments:
     * - `chain_service`: The chain service to be used.
     */
    withChainService(chainService: BitcoinChainService, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Sets the root storage directory to initialize the default storage with.
     * This initializes both storage and real-time sync storage with the
     * default implementations.
     * Arguments:
     * - `storage_dir`: The data directory for storage.
     */
    withDefaultStorage(storageDir: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Sets the fiat service to be used by the SDK.
     * Arguments:
     * - `fiat_service`: The fiat service to be used.
     */
    withFiatService(fiatService: FiatService, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    withLnurlClient(lnurlClient: RestClient, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Sets the payment observer to be used by the SDK.
     * Arguments:
     * - `payment_observer`: The payment observer to be used.
     */
    withPaymentObserver(paymentObserver: PaymentObserver, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Sets the REST chain service to be used by the SDK.
     * Arguments:
     * - `url`: The base URL of the REST API.
     * - `api_type`: The API type to be used.
     * - `credentials`: Optional credentials for basic authentication.
     */
    withRestChainService(url: string, apiType: ChainApiType, credentials: Credentials | undefined, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Threads a shared [`SdkContext`](crate::SdkContext) into the builder.
     *
     * Construct the context once via
     * [`new_shared_sdk_context`](crate::new_shared_sdk_context) and pass the
     * same `Arc` to every `SdkBuilder` whose SDKs should share its resources
     * (operator gRPC channels, SSP HTTP client, database pool).
     */
    withSharedContext(context: SdkContextInterface, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * **Deprecated.** Use
     * [`with_storage_backend`](SdkBuilder::with_storage_backend) with
     * [`custom_storage`](crate::custom_storage).
     * Arguments:
     * - `storage`: The storage implementation to be used.
     */
    withStorage(storage: Storage, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Sets the storage backend to be used by the SDK.
     *
     * Build the [`StorageBackend`](crate::StorageBackend) via
     * [`default_storage`](crate::default_storage),
     * [`postgres_storage`](crate::postgres_storage),
     * [`mysql_storage`](crate::mysql_storage) or
     * [`custom_storage`](crate::custom_storage).
     * Arguments:
     * - `storage`: The storage backend to be used.
     */
    withStorageBackend(storage: StorageBackend, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * {@inheritDoc uniffi-bindgen-react-native#UniffiAbstractObject.uniffiDestroy}
     */
    uniffiDestroy(): void;
    static instanceOf(obj: any): obj is SdkBuilder;
}
/**
 * Process-shared resources that can back many `BreezSdk` instances.
 *
 * Construct one with [`new_shared_sdk_context`] and pass the same `Arc` to every
 * [`SdkBuilder`](crate::SdkBuilder) whose SDKs should share those resources
 * (a single HTTP client across SSP / chain / LNURL / JWT / etc., a gRPC
 * channel pool to the Spark operators, the Breez backend gRPC client, …).
 * Useful for multi-tenant servers that load many wallets in one process.
 *
 * To share a database connection pool across SDKs, pass a
 * [`StorageBackend`](crate::StorageBackend) as
 * [`SdkContextConfig::storage`]: every SDK built from the context reuses it.
 *
 * The struct is intentionally opaque — all fields are crate-private. There
 * is no way to inject pre-built sub-components: the factory builds them
 * from settings so callers don't need to know about session stores or
 * connection-manager wiring.
 */
export interface SdkContextInterface {
}
/**
 * Process-shared resources that can back many `BreezSdk` instances.
 *
 * Construct one with [`new_shared_sdk_context`] and pass the same `Arc` to every
 * [`SdkBuilder`](crate::SdkBuilder) whose SDKs should share those resources
 * (a single HTTP client across SSP / chain / LNURL / JWT / etc., a gRPC
 * channel pool to the Spark operators, the Breez backend gRPC client, …).
 * Useful for multi-tenant servers that load many wallets in one process.
 *
 * To share a database connection pool across SDKs, pass a
 * [`StorageBackend`](crate::StorageBackend) as
 * [`SdkContextConfig::storage`]: every SDK built from the context reuses it.
 *
 * The struct is intentionally opaque — all fields are crate-private. There
 * is no way to inject pre-built sub-components: the factory builds them
 * from settings so callers don't need to know about session stores or
 * connection-manager wiring.
 */
export declare class SdkContext extends UniffiAbstractObject implements SdkContextInterface {
    readonly [uniffiTypeNameSymbol] = "SdkContext";
    readonly [destructorGuardSymbol]: UniffiRustArcPtr;
    readonly [pointerLiteralSymbol]: UnsafeMutableRawPointer;
    private constructor();
    /**
     * {@inheritDoc uniffi-bindgen-react-native#UniffiAbstractObject.uniffiDestroy}
     */
    uniffiDestroy(): void;
    static instanceOf(obj: any): obj is SdkContext;
}
/**
 * Persistent storage for authentication sessions, keyed by the service's
 * identity public key. Implementations should be thread-safe and may be
 * backed by an in-memory map (default) or a shared database for cross-pod
 * auth sharing.
 */
export interface SessionStore {
    getSession(serviceIdentityKey: PublicKey, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Session>;
    setSession(serviceIdentityKey: PublicKey, session: Session, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
}
/**
 * Persistent storage for authentication sessions, keyed by the service's
 * identity public key. Implementations should be thread-safe and may be
 * backed by an in-memory map (default) or a shared database for cross-pod
 * auth sharing.
 */
export declare class SessionStoreImpl extends UniffiAbstractObject implements SessionStore {
    readonly [uniffiTypeNameSymbol] = "SessionStoreImpl";
    readonly [destructorGuardSymbol]: UniffiRustArcPtr;
    readonly [pointerLiteralSymbol]: UnsafeMutableRawPointer;
    private constructor();
    getSession(serviceIdentityKey: PublicKey, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Session>;
    setSession(serviceIdentityKey: PublicKey, session: Session, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * {@inheritDoc uniffi-bindgen-react-native#UniffiAbstractObject.uniffiDestroy}
     */
    uniffiDestroy(): void;
    static instanceOf(obj: any): obj is SessionStoreImpl;
}
/**
 * Trait for persistent storage
 */
export interface Storage {
    deleteCachedItem(key: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    getCachedItem(key: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<string | undefined>;
    setCachedItem(key: string, value: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Lists payments with optional filters and pagination
     *
     * # Arguments
     *
     * * `list_payments_request` - The request to list payments
     *
     * # Returns
     *
     * A vector of payments or a `StorageError`
     */
    listPayments(request: StorageListPaymentsRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<Payment>>;
    /**
     * Inserts or updates a payment unless it would replace a terminal status.
     *
     * Same-status updates are still persisted so details can be enriched.
     *
     * Returns `true` if the caller should emit a payment event (new payment was
     * inserted, or status transitioned). Returns `false` for redundant
     * same-status updates and for rejected updates against a terminal stored
     * status
     */
    applyPaymentUpdate(payment: Payment, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<boolean>;
    /**
     * Inserts payment metadata into storage
     *
     * # Arguments
     *
     * * `payment_id` - The ID of the payment
     * * `metadata` - The metadata to insert
     *
     * # Returns
     *
     * Success or a `StorageError`
     */
    insertPaymentMetadata(paymentId: string, metadata: PaymentMetadata, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Gets a payment by its ID
     * # Arguments
     *
     * * `id` - The ID of the payment to retrieve
     *
     * # Returns
     *
     * The payment if found or None if not found
     */
    getPaymentById(id: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Payment>;
    /**
     * Gets a payment by its invoice
     * # Arguments
     *
     * * `invoice` - The invoice of the payment to retrieve
     * # Returns
     *
     * The payment if found or None if not found
     */
    getPaymentByInvoice(invoice: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Payment | undefined>;
    /**
     * Gets payments that have any of the specified parent payment IDs.
     * Used to load related payments for a set of parent payments.
     *
     * # Arguments
     *
     * * `parent_payment_ids` - The IDs of the parent payments
     *
     * # Returns
     *
     * A map of `parent_payment_id` -> Vec<Payment> or a `StorageError`
     */
    getPaymentsByParentIds(parentPaymentIds: Array<string>, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Map<string, Array<Payment>>>;
    /**
     * Add a deposit to storage (upsert: updates `is_mature` and `amount_sats` on conflict)
     * # Arguments
     *
     * * `txid` - The transaction ID of the deposit
     * * `vout` - The output index of the deposit
     * * `amount_sats` - The amount of the deposit in sats
     * * `is_mature` - Whether the deposit UTXO has enough confirmations to be claimable
     *
     * # Returns
     *
     * Success or a `StorageError`
     */
    addDeposit(txid: string, vout: number, amountSats: bigint, isMature: boolean, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Removes an unclaimed deposit from storage
     * # Arguments
     *
     * * `txid` - The transaction ID of the deposit
     * * `vout` - The output index of the deposit
     *
     * # Returns
     *
     * Success or a `StorageError`
     */
    deleteDeposit(txid: string, vout: number, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Lists all unclaimed deposits from storage
     * # Returns
     *
     * A vector of `DepositInfo` or a `StorageError`
     */
    listDeposits(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<DepositInfo>>;
    /**
     * Updates or inserts unclaimed deposit details
     * # Arguments
     *
     * * `txid` - The transaction ID of the deposit
     * * `vout` - The output index of the deposit
     * * `payload` - The payload for the update
     *
     * # Returns
     *
     * Success or a `StorageError`
     */
    updateDeposit(txid: string, vout: number, payload: UpdateDepositPayload, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    setLnurlMetadata(metadata: Array<SetLnurlMetadataItem>, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Lists contacts from storage with optional pagination
     */
    listContacts(request: ListContactsRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<Contact>>;
    /**
     * Gets a single contact by its ID
     */
    getContact(id: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Contact>;
    /**
     * Inserts or updates a contact in storage (upsert by id).
     * Preserves `created_at` on update.
     */
    insertContact(contact: Contact, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Deletes a contact by its ID
     */
    deleteContact(id: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Inserts or overwrites a cross-chain swap row (upsert by `(provider, id)`).
     */
    setCrossChainSwap(swap: StoredCrossChainSwap, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Gets a single cross-chain swap row by its `(provider, id)`, or `None` if absent.
     */
    getCrossChainSwap(provider: string, id: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<StoredCrossChainSwap | undefined>;
    /**
     * Lists all non-terminal cross-chain swap rows for a single provider
     * (`provider = ? AND is_terminal = false`).
     */
    listActiveCrossChainSwaps(provider: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<StoredCrossChainSwap>>;
    addOutgoingChange(record: UnversionedRecordChange, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise</*u64*/ bigint>;
    completeOutgoingSync(record: Record, localRevision: bigint, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    getPendingOutgoingChanges(limit: number, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<OutgoingChange>>;
    /**
     * Get the last committed sync revision.
     *
     * The `sync_revision` table tracks the highest revision that has been committed
     * (i.e. acknowledged by the server or received from it). It does NOT include
     * pending outgoing queue ids. This value is used by the sync protocol to
     * request changes from the server.
     */
    getLastRevision(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise</*u64*/ bigint>;
    /**
     * Insert incoming records from remote sync
     */
    insertIncomingRecords(records: Array<Record>, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Delete an incoming record after it has been processed
     */
    deleteIncomingRecord(record: Record, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Get incoming records that need to be processed, up to the specified limit
     */
    getIncomingRecords(limit: number, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<IncomingChange>>;
    /**
     * Get the latest outgoing record if any exists
     */
    getLatestOutgoingChange(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<OutgoingChange | undefined>;
    /**
     * Update the sync state record from an incoming record
     */
    updateRecordFromIncoming(record: Record, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
}
/**
 * Trait for persistent storage
 */
export declare class StorageImpl extends UniffiAbstractObject implements Storage {
    readonly [uniffiTypeNameSymbol] = "StorageImpl";
    readonly [destructorGuardSymbol]: UniffiRustArcPtr;
    readonly [pointerLiteralSymbol]: UnsafeMutableRawPointer;
    private constructor();
    deleteCachedItem(key: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    getCachedItem(key: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<string | undefined>;
    setCachedItem(key: string, value: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Lists payments with optional filters and pagination
     *
     * # Arguments
     *
     * * `list_payments_request` - The request to list payments
     *
     * # Returns
     *
     * A vector of payments or a `StorageError`
     */
    listPayments(request: StorageListPaymentsRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<Payment>>;
    /**
     * Inserts or updates a payment unless it would replace a terminal status.
     *
     * Same-status updates are still persisted so details can be enriched.
     *
     * Returns `true` if the caller should emit a payment event (new payment was
     * inserted, or status transitioned). Returns `false` for redundant
     * same-status updates and for rejected updates against a terminal stored
     * status
     */
    applyPaymentUpdate(payment: Payment, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<boolean>;
    /**
     * Inserts payment metadata into storage
     *
     * # Arguments
     *
     * * `payment_id` - The ID of the payment
     * * `metadata` - The metadata to insert
     *
     * # Returns
     *
     * Success or a `StorageError`
     */
    insertPaymentMetadata(paymentId: string, metadata: PaymentMetadata, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Gets a payment by its ID
     * # Arguments
     *
     * * `id` - The ID of the payment to retrieve
     *
     * # Returns
     *
     * The payment if found or None if not found
     */
    getPaymentById(id: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Payment>;
    /**
     * Gets a payment by its invoice
     * # Arguments
     *
     * * `invoice` - The invoice of the payment to retrieve
     * # Returns
     *
     * The payment if found or None if not found
     */
    getPaymentByInvoice(invoice: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Payment | undefined>;
    /**
     * Gets payments that have any of the specified parent payment IDs.
     * Used to load related payments for a set of parent payments.
     *
     * # Arguments
     *
     * * `parent_payment_ids` - The IDs of the parent payments
     *
     * # Returns
     *
     * A map of `parent_payment_id` -> Vec<Payment> or a `StorageError`
     */
    getPaymentsByParentIds(parentPaymentIds: Array<string>, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Map<string, Array<Payment>>>;
    /**
     * Add a deposit to storage (upsert: updates `is_mature` and `amount_sats` on conflict)
     * # Arguments
     *
     * * `txid` - The transaction ID of the deposit
     * * `vout` - The output index of the deposit
     * * `amount_sats` - The amount of the deposit in sats
     * * `is_mature` - Whether the deposit UTXO has enough confirmations to be claimable
     *
     * # Returns
     *
     * Success or a `StorageError`
     */
    addDeposit(txid: string, vout: number, amountSats: bigint, isMature: boolean, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Removes an unclaimed deposit from storage
     * # Arguments
     *
     * * `txid` - The transaction ID of the deposit
     * * `vout` - The output index of the deposit
     *
     * # Returns
     *
     * Success or a `StorageError`
     */
    deleteDeposit(txid: string, vout: number, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Lists all unclaimed deposits from storage
     * # Returns
     *
     * A vector of `DepositInfo` or a `StorageError`
     */
    listDeposits(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<DepositInfo>>;
    /**
     * Updates or inserts unclaimed deposit details
     * # Arguments
     *
     * * `txid` - The transaction ID of the deposit
     * * `vout` - The output index of the deposit
     * * `payload` - The payload for the update
     *
     * # Returns
     *
     * Success or a `StorageError`
     */
    updateDeposit(txid: string, vout: number, payload: UpdateDepositPayload, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    setLnurlMetadata(metadata: Array<SetLnurlMetadataItem>, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Lists contacts from storage with optional pagination
     */
    listContacts(request: ListContactsRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<Contact>>;
    /**
     * Gets a single contact by its ID
     */
    getContact(id: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Contact>;
    /**
     * Inserts or updates a contact in storage (upsert by id).
     * Preserves `created_at` on update.
     */
    insertContact(contact: Contact, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Deletes a contact by its ID
     */
    deleteContact(id: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Inserts or overwrites a cross-chain swap row (upsert by `(provider, id)`).
     */
    setCrossChainSwap(swap: StoredCrossChainSwap, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Gets a single cross-chain swap row by its `(provider, id)`, or `None` if absent.
     */
    getCrossChainSwap(provider: string, id: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<StoredCrossChainSwap | undefined>;
    /**
     * Lists all non-terminal cross-chain swap rows for a single provider
     * (`provider = ? AND is_terminal = false`).
     */
    listActiveCrossChainSwaps(provider: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<StoredCrossChainSwap>>;
    addOutgoingChange(record: UnversionedRecordChange, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise</*u64*/ bigint>;
    completeOutgoingSync(record: Record, localRevision: bigint, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    getPendingOutgoingChanges(limit: number, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<OutgoingChange>>;
    /**
     * Get the last committed sync revision.
     *
     * The `sync_revision` table tracks the highest revision that has been committed
     * (i.e. acknowledged by the server or received from it). It does NOT include
     * pending outgoing queue ids. This value is used by the sync protocol to
     * request changes from the server.
     */
    getLastRevision(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise</*u64*/ bigint>;
    /**
     * Insert incoming records from remote sync
     */
    insertIncomingRecords(records: Array<Record>, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Delete an incoming record after it has been processed
     */
    deleteIncomingRecord(record: Record, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Get incoming records that need to be processed, up to the specified limit
     */
    getIncomingRecords(limit: number, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<IncomingChange>>;
    /**
     * Get the latest outgoing record if any exists
     */
    getLatestOutgoingChange(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<OutgoingChange | undefined>;
    /**
     * Update the sync state record from an incoming record
     */
    updateRecordFromIncoming(record: Record, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * {@inheritDoc uniffi-bindgen-react-native#UniffiAbstractObject.uniffiDestroy}
     */
    uniffiDestroy(): void;
    static instanceOf(obj: any): obj is StorageImpl;
}
/**
 * A factory for a tenant's storage.
 *
 * A single backend may back many SDK instances; each
 * [`create_stores`](Self::create_stores) call yields the store set scoped to
 * one tenant `identity` (a serialized public key). `network` lets file-based
 * backends segregate tenants by network; database backends ignore it.
 */
export interface StorageBackend {
    createStores(network: Network, identity: ArrayBuffer, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ResolvedStoresInterface>;
}
/**
 * A factory for a tenant's storage.
 *
 * A single backend may back many SDK instances; each
 * [`create_stores`](Self::create_stores) call yields the store set scoped to
 * one tenant `identity` (a serialized public key). `network` lets file-based
 * backends segregate tenants by network; database backends ignore it.
 */
export declare class StorageBackendImpl extends UniffiAbstractObject implements StorageBackend {
    readonly [uniffiTypeNameSymbol] = "StorageBackendImpl";
    readonly [destructorGuardSymbol]: UniffiRustArcPtr;
    readonly [pointerLiteralSymbol]: UnsafeMutableRawPointer;
    private constructor();
    createStores(network: Network, identity: ArrayBuffer, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ResolvedStoresInterface>;
    /**
     * {@inheritDoc uniffi-bindgen-react-native#UniffiAbstractObject.uniffiDestroy}
     */
    uniffiDestroy(): void;
    static instanceOf(obj: any): obj is StorageBackendImpl;
}
export interface TokenIssuerInterface {
    /**
     * Burns supply of the issuer token
     *
     * # Arguments
     *
     * * `request`: The request containing the amount of the supply to burn
     *
     * # Returns
     *
     * Result containing either:
     * * `Payment` - The payment representing the burn transaction
     * * `SdkError` - If there was an error during the burn process
     */
    burnIssuerToken(request: BurnIssuerTokenRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Payment>;
    /**
     * Creates a new issuer token
     *
     * # Arguments
     *
     * * `request`: The request containing the token parameters
     *
     * # Returns
     *
     * Result containing either:
     * * `TokenMetadata` - The metadata of the created token
     * * `SdkError` - If there was an error during the token creation
     */
    createIssuerToken(request: CreateIssuerTokenRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<TokenMetadata>;
    /**
     * Freezes tokens held at the specified address
     *
     * # Arguments
     *
     * * `request`: The request containing the spark address where the tokens to be frozen are held
     *
     * # Returns
     *
     * Result containing either:
     * * `FreezeIssuerTokenResponse` - The response containing details of the freeze operation
     * * `SdkError` - If there was an error during the freeze process
     */
    freezeIssuerToken(request: FreezeIssuerTokenRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<FreezeIssuerTokenResponse>;
    /**
     * Gets the issuer token balance
     *
     * # Returns
     *
     * Result containing either:
     * * `TokenBalance` - The balance of the issuer token
     * * `SdkError` - If there was an error during the retrieval or no issuer token exists
     */
    getIssuerTokenBalance(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<TokenBalance>;
    /**
     * Gets the issuer token metadata
     *
     * # Returns
     *
     * Result containing either:
     * * `TokenMetadata` - The metadata of the issuer token
     * * `SdkError` - If there was an error during the retrieval or no issuer token exists
     */
    getIssuerTokenMetadata(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<TokenMetadata>;
    /**
     * Mints supply for the issuer token
     *
     * # Arguments
     *
     * * `request`: The request contiaining the amount of the supply to mint
     *
     * # Returns
     *
     * Result containing either:
     * * `Payment` - The payment representing the minting transaction
     * * `SdkError` - If there was an error during the minting process
     */
    mintIssuerToken(request: MintIssuerTokenRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Payment>;
    /**
     * Unfreezes tokens held at the specified address
     *
     * # Arguments
     *
     * * `request`: The request containing the spark address where the tokens to be unfrozen are held
     *
     * # Returns
     *
     * Result containing either:
     * * `UnfreezeIssuerTokenResponse` - The response containing details of the unfreeze operation
     * * `SdkError` - If there was an error during the unfreeze process
     */
    unfreezeIssuerToken(request: UnfreezeIssuerTokenRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<UnfreezeIssuerTokenResponse>;
}
export declare class TokenIssuer extends UniffiAbstractObject implements TokenIssuerInterface {
    readonly [uniffiTypeNameSymbol] = "TokenIssuer";
    readonly [destructorGuardSymbol]: UniffiRustArcPtr;
    readonly [pointerLiteralSymbol]: UnsafeMutableRawPointer;
    private constructor();
    /**
     * Burns supply of the issuer token
     *
     * # Arguments
     *
     * * `request`: The request containing the amount of the supply to burn
     *
     * # Returns
     *
     * Result containing either:
     * * `Payment` - The payment representing the burn transaction
     * * `SdkError` - If there was an error during the burn process
     */
    burnIssuerToken(request: BurnIssuerTokenRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Payment>;
    /**
     * Creates a new issuer token
     *
     * # Arguments
     *
     * * `request`: The request containing the token parameters
     *
     * # Returns
     *
     * Result containing either:
     * * `TokenMetadata` - The metadata of the created token
     * * `SdkError` - If there was an error during the token creation
     */
    createIssuerToken(request: CreateIssuerTokenRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<TokenMetadata>;
    /**
     * Freezes tokens held at the specified address
     *
     * # Arguments
     *
     * * `request`: The request containing the spark address where the tokens to be frozen are held
     *
     * # Returns
     *
     * Result containing either:
     * * `FreezeIssuerTokenResponse` - The response containing details of the freeze operation
     * * `SdkError` - If there was an error during the freeze process
     */
    freezeIssuerToken(request: FreezeIssuerTokenRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<FreezeIssuerTokenResponse>;
    /**
     * Gets the issuer token balance
     *
     * # Returns
     *
     * Result containing either:
     * * `TokenBalance` - The balance of the issuer token
     * * `SdkError` - If there was an error during the retrieval or no issuer token exists
     */
    getIssuerTokenBalance(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<TokenBalance>;
    /**
     * Gets the issuer token metadata
     *
     * # Returns
     *
     * Result containing either:
     * * `TokenMetadata` - The metadata of the issuer token
     * * `SdkError` - If there was an error during the retrieval or no issuer token exists
     */
    getIssuerTokenMetadata(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<TokenMetadata>;
    /**
     * Mints supply for the issuer token
     *
     * # Arguments
     *
     * * `request`: The request contiaining the amount of the supply to mint
     *
     * # Returns
     *
     * Result containing either:
     * * `Payment` - The payment representing the minting transaction
     * * `SdkError` - If there was an error during the minting process
     */
    mintIssuerToken(request: MintIssuerTokenRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Payment>;
    /**
     * Unfreezes tokens held at the specified address
     *
     * # Arguments
     *
     * * `request`: The request containing the spark address where the tokens to be unfrozen are held
     *
     * # Returns
     *
     * Result containing either:
     * * `UnfreezeIssuerTokenResponse` - The response containing details of the unfreeze operation
     * * `SdkError` - If there was an error during the unfreeze process
     */
    unfreezeIssuerToken(request: UnfreezeIssuerTokenRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<UnfreezeIssuerTokenResponse>;
    /**
     * {@inheritDoc uniffi-bindgen-react-native#UniffiAbstractObject.uniffiDestroy}
     */
    uniffiDestroy(): void;
    static instanceOf(obj: any): obj is TokenIssuer;
}
/**
 * This should be called before anything else.
 *
 * It is likely that this is being done for you by the library's `index.ts`.
 *
 * It checks versions of uniffi between when the Rust scaffolding was generated
 * and when the bindings were generated.
 *
 * It also initializes the machinery to enable Rust to talk back to Javascript.
 */
declare function uniffiEnsureInitialized(): void;
declare const _default: Readonly<{
    initialize: typeof uniffiEnsureInitialized;
    converters: {
        FfiConverterTypeAddContactRequest: {
            read(from: RustBuffer): AddContactRequest;
            write(value: AddContactRequest, into: RustBuffer): void;
            allocationSize(value: AddContactRequest): number;
            lift(value: UniffiByteArray): AddContactRequest;
            lower(value: AddContactRequest): UniffiByteArray;
        };
        FfiConverterTypeAesSuccessActionData: {
            read(from: RustBuffer): AesSuccessActionData;
            write(value: AesSuccessActionData, into: RustBuffer): void;
            allocationSize(value: AesSuccessActionData): number;
            lift(value: UniffiByteArray): AesSuccessActionData;
            lower(value: AesSuccessActionData): UniffiByteArray;
        };
        FfiConverterTypeAesSuccessActionDataDecrypted: {
            read(from: RustBuffer): AesSuccessActionDataDecrypted;
            write(value: AesSuccessActionDataDecrypted, into: RustBuffer): void;
            allocationSize(value: AesSuccessActionDataDecrypted): number;
            lift(value: UniffiByteArray): AesSuccessActionDataDecrypted;
            lower(value: AesSuccessActionDataDecrypted): UniffiByteArray;
        };
        FfiConverterTypeAesSuccessActionDataResult: {
            read(from: RustBuffer): AesSuccessActionDataResult;
            write(value: AesSuccessActionDataResult, into: RustBuffer): void;
            allocationSize(value: AesSuccessActionDataResult): number;
            lift(value: UniffiByteArray): AesSuccessActionDataResult;
            lower(value: AesSuccessActionDataResult): UniffiByteArray;
        };
        FfiConverterTypeAmount: {
            read(from: RustBuffer): Amount;
            write(value: Amount, into: RustBuffer): void;
            allocationSize(value: Amount): number;
            lift(value: UniffiByteArray): Amount;
            lower(value: Amount): UniffiByteArray;
        };
        FfiConverterTypeAmountAdjustmentReason: {
            read(from: RustBuffer): AmountAdjustmentReason;
            write(value: AmountAdjustmentReason, into: RustBuffer): void;
            allocationSize(value: AmountAdjustmentReason): number;
            lift(value: UniffiByteArray): AmountAdjustmentReason;
            lower(value: AmountAdjustmentReason): UniffiByteArray;
        };
        FfiConverterTypeAssetFilter: {
            read(from: RustBuffer): AssetFilter;
            write(value: AssetFilter, into: RustBuffer): void;
            allocationSize(value: AssetFilter): number;
            lift(value: UniffiByteArray): AssetFilter;
            lower(value: AssetFilter): UniffiByteArray;
        };
        FfiConverterTypeAuthorizeTransferRequest: {
            read(from: RustBuffer): AuthorizeTransferRequest;
            write(value: AuthorizeTransferRequest, into: RustBuffer): void;
            allocationSize(value: AuthorizeTransferRequest): number;
            lift(value: UniffiByteArray): AuthorizeTransferRequest;
            lower(value: AuthorizeTransferRequest): UniffiByteArray;
        };
        FfiConverterTypeAutoOptimizationEvent: {
            read(from: RustBuffer): AutoOptimizationEvent;
            write(value: AutoOptimizationEvent, into: RustBuffer): void;
            allocationSize(value: AutoOptimizationEvent): number;
            lift(value: UniffiByteArray): AutoOptimizationEvent;
            lower(value: AutoOptimizationEvent): UniffiByteArray;
        };
        FfiConverterTypeBip21Details: {
            read(from: RustBuffer): Bip21Details;
            write(value: Bip21Details, into: RustBuffer): void;
            allocationSize(value: Bip21Details): number;
            lift(value: UniffiByteArray): Bip21Details;
            lower(value: Bip21Details): UniffiByteArray;
        };
        FfiConverterTypeBip21Extra: {
            read(from: RustBuffer): Bip21Extra;
            write(value: Bip21Extra, into: RustBuffer): void;
            allocationSize(value: Bip21Extra): number;
            lift(value: UniffiByteArray): Bip21Extra;
            lower(value: Bip21Extra): UniffiByteArray;
        };
        FfiConverterTypeBitcoinAddressDetails: {
            read(from: RustBuffer): BitcoinAddressDetails;
            write(value: BitcoinAddressDetails, into: RustBuffer): void;
            allocationSize(value: BitcoinAddressDetails): number;
            lift(value: UniffiByteArray): BitcoinAddressDetails;
            lower(value: BitcoinAddressDetails): UniffiByteArray;
        };
        FfiConverterTypeBitcoinChainService: FfiConverterObjectWithCallbacks<BitcoinChainService>;
        FfiConverterTypeBitcoinNetwork: {
            read(from: RustBuffer): BitcoinNetwork;
            write(value: BitcoinNetwork, into: RustBuffer): void;
            allocationSize(value: BitcoinNetwork): number;
            lift(value: UniffiByteArray): BitcoinNetwork;
            lower(value: BitcoinNetwork): UniffiByteArray;
        };
        FfiConverterTypeBolt11Invoice: {
            read(from: RustBuffer): Bolt11Invoice;
            write(value: Bolt11Invoice, into: RustBuffer): void;
            allocationSize(value: Bolt11Invoice): number;
            lift(value: UniffiByteArray): Bolt11Invoice;
            lower(value: Bolt11Invoice): UniffiByteArray;
        };
        FfiConverterTypeBolt11InvoiceDetails: {
            read(from: RustBuffer): Bolt11InvoiceDetails;
            write(value: Bolt11InvoiceDetails, into: RustBuffer): void;
            allocationSize(value: Bolt11InvoiceDetails): number;
            lift(value: UniffiByteArray): Bolt11InvoiceDetails;
            lower(value: Bolt11InvoiceDetails): UniffiByteArray;
        };
        FfiConverterTypeBolt11RouteHint: {
            read(from: RustBuffer): Bolt11RouteHint;
            write(value: Bolt11RouteHint, into: RustBuffer): void;
            allocationSize(value: Bolt11RouteHint): number;
            lift(value: UniffiByteArray): Bolt11RouteHint;
            lower(value: Bolt11RouteHint): UniffiByteArray;
        };
        FfiConverterTypeBolt11RouteHintHop: {
            read(from: RustBuffer): Bolt11RouteHintHop;
            write(value: Bolt11RouteHintHop, into: RustBuffer): void;
            allocationSize(value: Bolt11RouteHintHop): number;
            lift(value: UniffiByteArray): Bolt11RouteHintHop;
            lower(value: Bolt11RouteHintHop): UniffiByteArray;
        };
        FfiConverterTypeBolt12Invoice: {
            read(from: RustBuffer): Bolt12Invoice;
            write(value: Bolt12Invoice, into: RustBuffer): void;
            allocationSize(value: Bolt12Invoice): number;
            lift(value: UniffiByteArray): Bolt12Invoice;
            lower(value: Bolt12Invoice): UniffiByteArray;
        };
        FfiConverterTypeBolt12InvoiceDetails: {
            read(from: RustBuffer): Bolt12InvoiceDetails;
            write(value: Bolt12InvoiceDetails, into: RustBuffer): void;
            allocationSize(value: Bolt12InvoiceDetails): number;
            lift(value: UniffiByteArray): Bolt12InvoiceDetails;
            lower(value: Bolt12InvoiceDetails): UniffiByteArray;
        };
        FfiConverterTypeBolt12InvoiceRequestDetails: {
            read(from: RustBuffer): Bolt12InvoiceRequestDetails;
            write(value: Bolt12InvoiceRequestDetails, into: RustBuffer): void;
            allocationSize(value: Bolt12InvoiceRequestDetails): number;
            lift(value: UniffiByteArray): Bolt12InvoiceRequestDetails;
            lower(value: Bolt12InvoiceRequestDetails): UniffiByteArray;
        };
        FfiConverterTypeBolt12Offer: {
            read(from: RustBuffer): Bolt12Offer;
            write(value: Bolt12Offer, into: RustBuffer): void;
            allocationSize(value: Bolt12Offer): number;
            lift(value: UniffiByteArray): Bolt12Offer;
            lower(value: Bolt12Offer): UniffiByteArray;
        };
        FfiConverterTypeBolt12OfferBlindedPath: {
            read(from: RustBuffer): Bolt12OfferBlindedPath;
            write(value: Bolt12OfferBlindedPath, into: RustBuffer): void;
            allocationSize(value: Bolt12OfferBlindedPath): number;
            lift(value: UniffiByteArray): Bolt12OfferBlindedPath;
            lower(value: Bolt12OfferBlindedPath): UniffiByteArray;
        };
        FfiConverterTypeBolt12OfferDetails: {
            read(from: RustBuffer): Bolt12OfferDetails;
            write(value: Bolt12OfferDetails, into: RustBuffer): void;
            allocationSize(value: Bolt12OfferDetails): number;
            lift(value: UniffiByteArray): Bolt12OfferDetails;
            lower(value: Bolt12OfferDetails): UniffiByteArray;
        };
        FfiConverterTypeBreezSdk: FfiConverterObject<BreezSdkInterface>;
        FfiConverterTypeBurnIssuerTokenRequest: {
            read(from: RustBuffer): BurnIssuerTokenRequest;
            write(value: BurnIssuerTokenRequest, into: RustBuffer): void;
            allocationSize(value: BurnIssuerTokenRequest): number;
            lift(value: UniffiByteArray): BurnIssuerTokenRequest;
            lower(value: BurnIssuerTokenRequest): UniffiByteArray;
        };
        FfiConverterTypeBuyBitcoinRequest: {
            read(from: RustBuffer): BuyBitcoinRequest;
            write(value: BuyBitcoinRequest, into: RustBuffer): void;
            allocationSize(value: BuyBitcoinRequest): number;
            lift(value: UniffiByteArray): BuyBitcoinRequest;
            lower(value: BuyBitcoinRequest): UniffiByteArray;
        };
        FfiConverterTypeBuyBitcoinResponse: {
            read(from: RustBuffer): BuyBitcoinResponse;
            write(value: BuyBitcoinResponse, into: RustBuffer): void;
            allocationSize(value: BuyBitcoinResponse): number;
            lift(value: UniffiByteArray): BuyBitcoinResponse;
            lower(value: BuyBitcoinResponse): UniffiByteArray;
        };
        FfiConverterTypeChainApiType: {
            read(from: RustBuffer): ChainApiType;
            write(value: ChainApiType, into: RustBuffer): void;
            allocationSize(value: ChainApiType): number;
            lift(value: UniffiByteArray): ChainApiType;
            lower(value: ChainApiType): UniffiByteArray;
        };
        FfiConverterTypeChainServiceError: {
            read(from: RustBuffer): ChainServiceError;
            write(value: ChainServiceError, into: RustBuffer): void;
            allocationSize(value: ChainServiceError): number;
            lift(value: UniffiByteArray): ChainServiceError;
            lower(value: ChainServiceError): UniffiByteArray;
        };
        FfiConverterTypeCheckLightningAddressRequest: {
            read(from: RustBuffer): CheckLightningAddressRequest;
            write(value: CheckLightningAddressRequest, into: RustBuffer): void;
            allocationSize(value: CheckLightningAddressRequest): number;
            lift(value: UniffiByteArray): CheckLightningAddressRequest;
            lower(value: CheckLightningAddressRequest): UniffiByteArray;
        };
        FfiConverterTypeCheckMessageRequest: {
            read(from: RustBuffer): CheckMessageRequest;
            write(value: CheckMessageRequest, into: RustBuffer): void;
            allocationSize(value: CheckMessageRequest): number;
            lift(value: UniffiByteArray): CheckMessageRequest;
            lower(value: CheckMessageRequest): UniffiByteArray;
        };
        FfiConverterTypeCheckMessageResponse: {
            read(from: RustBuffer): CheckMessageResponse;
            write(value: CheckMessageResponse, into: RustBuffer): void;
            allocationSize(value: CheckMessageResponse): number;
            lift(value: UniffiByteArray): CheckMessageResponse;
            lower(value: CheckMessageResponse): UniffiByteArray;
        };
        FfiConverterTypeClaimDepositRequest: {
            read(from: RustBuffer): ClaimDepositRequest;
            write(value: ClaimDepositRequest, into: RustBuffer): void;
            allocationSize(value: ClaimDepositRequest): number;
            lift(value: UniffiByteArray): ClaimDepositRequest;
            lower(value: ClaimDepositRequest): UniffiByteArray;
        };
        FfiConverterTypeClaimDepositResponse: {
            read(from: RustBuffer): ClaimDepositResponse;
            write(value: ClaimDepositResponse, into: RustBuffer): void;
            allocationSize(value: ClaimDepositResponse): number;
            lift(value: UniffiByteArray): ClaimDepositResponse;
            lower(value: ClaimDepositResponse): UniffiByteArray;
        };
        FfiConverterTypeClaimHtlcPaymentRequest: {
            read(from: RustBuffer): ClaimHtlcPaymentRequest;
            write(value: ClaimHtlcPaymentRequest, into: RustBuffer): void;
            allocationSize(value: ClaimHtlcPaymentRequest): number;
            lift(value: UniffiByteArray): ClaimHtlcPaymentRequest;
            lower(value: ClaimHtlcPaymentRequest): UniffiByteArray;
        };
        FfiConverterTypeClaimHtlcPaymentResponse: {
            read(from: RustBuffer): ClaimHtlcPaymentResponse;
            write(value: ClaimHtlcPaymentResponse, into: RustBuffer): void;
            allocationSize(value: ClaimHtlcPaymentResponse): number;
            lift(value: UniffiByteArray): ClaimHtlcPaymentResponse;
            lower(value: ClaimHtlcPaymentResponse): UniffiByteArray;
        };
        FfiConverterTypeClaimTransferRequest: {
            read(from: RustBuffer): ClaimTransferRequest;
            write(value: ClaimTransferRequest, into: RustBuffer): void;
            allocationSize(value: ClaimTransferRequest): number;
            lift(value: UniffiByteArray): ClaimTransferRequest;
            lower(value: ClaimTransferRequest): UniffiByteArray;
        };
        FfiConverterTypeConfig: {
            read(from: RustBuffer): Config;
            write(value: Config, into: RustBuffer): void;
            allocationSize(value: Config): number;
            lift(value: UniffiByteArray): Config;
            lower(value: Config): UniffiByteArray;
        };
        FfiConverterTypeConnectRequest: {
            read(from: RustBuffer): ConnectRequest;
            write(value: ConnectRequest, into: RustBuffer): void;
            allocationSize(value: ConnectRequest): number;
            lift(value: UniffiByteArray): ConnectRequest;
            lower(value: ConnectRequest): UniffiByteArray;
        };
        FfiConverterTypeConnectWithPasskeyRequest: {
            read(from: RustBuffer): ConnectWithPasskeyRequest;
            write(value: ConnectWithPasskeyRequest, into: RustBuffer): void;
            allocationSize(value: ConnectWithPasskeyRequest): number;
            lift(value: UniffiByteArray): ConnectWithPasskeyRequest;
            lower(value: ConnectWithPasskeyRequest): UniffiByteArray;
        };
        FfiConverterTypeConnectWithPasskeyResponse: {
            read(from: RustBuffer): ConnectWithPasskeyResponse;
            write(value: ConnectWithPasskeyResponse, into: RustBuffer): void;
            allocationSize(value: ConnectWithPasskeyResponse): number;
            lift(value: UniffiByteArray): ConnectWithPasskeyResponse;
            lower(value: ConnectWithPasskeyResponse): UniffiByteArray;
        };
        FfiConverterTypeConnectWithSignerRequest: {
            read(from: RustBuffer): ConnectWithSignerRequest;
            write(value: ConnectWithSignerRequest, into: RustBuffer): void;
            allocationSize(value: ConnectWithSignerRequest): number;
            lift(value: UniffiByteArray): ConnectWithSignerRequest;
            lower(value: ConnectWithSignerRequest): UniffiByteArray;
        };
        FfiConverterTypeContact: {
            read(from: RustBuffer): Contact;
            write(value: Contact, into: RustBuffer): void;
            allocationSize(value: Contact): number;
            lift(value: UniffiByteArray): Contact;
            lower(value: Contact): UniffiByteArray;
        };
        FfiConverterTypeConversion: {
            read(from: RustBuffer): Conversion;
            write(value: Conversion, into: RustBuffer): void;
            allocationSize(value: Conversion): number;
            lift(value: UniffiByteArray): Conversion;
            lower(value: Conversion): UniffiByteArray;
        };
        FfiConverterTypeConversionAsset: {
            read(from: RustBuffer): ConversionAsset;
            write(value: ConversionAsset, into: RustBuffer): void;
            allocationSize(value: ConversionAsset): number;
            lift(value: UniffiByteArray): ConversionAsset;
            lower(value: ConversionAsset): UniffiByteArray;
        };
        FfiConverterTypeConversionChain: {
            read(from: RustBuffer): ConversionChain;
            write(value: ConversionChain, into: RustBuffer): void;
            allocationSize(value: ConversionChain): number;
            lift(value: UniffiByteArray): ConversionChain;
            lower(value: ConversionChain): UniffiByteArray;
        };
        FfiConverterTypeConversionDetails: {
            read(from: RustBuffer): ConversionDetails;
            write(value: ConversionDetails, into: RustBuffer): void;
            allocationSize(value: ConversionDetails): number;
            lift(value: UniffiByteArray): ConversionDetails;
            lower(value: ConversionDetails): UniffiByteArray;
        };
        FfiConverterTypeConversionEstimate: {
            read(from: RustBuffer): ConversionEstimate;
            write(value: ConversionEstimate, into: RustBuffer): void;
            allocationSize(value: ConversionEstimate): number;
            lift(value: UniffiByteArray): ConversionEstimate;
            lower(value: ConversionEstimate): UniffiByteArray;
        };
        FfiConverterTypeConversionFilter: {
            read(from: RustBuffer): ConversionFilter;
            write(value: ConversionFilter, into: RustBuffer): void;
            allocationSize(value: ConversionFilter): number;
            lift(value: UniffiByteArray): ConversionFilter;
            lower(value: ConversionFilter): UniffiByteArray;
        };
        FfiConverterTypeConversionInfo: {
            read(from: RustBuffer): ConversionInfo;
            write(value: ConversionInfo, into: RustBuffer): void;
            allocationSize(value: ConversionInfo): number;
            lift(value: UniffiByteArray): ConversionInfo;
            lower(value: ConversionInfo): UniffiByteArray;
        };
        FfiConverterTypeConversionOptions: {
            read(from: RustBuffer): ConversionOptions;
            write(value: ConversionOptions, into: RustBuffer): void;
            allocationSize(value: ConversionOptions): number;
            lift(value: UniffiByteArray): ConversionOptions;
            lower(value: ConversionOptions): UniffiByteArray;
        };
        FfiConverterTypeConversionProvider: {
            read(from: RustBuffer): ConversionProvider;
            write(value: ConversionProvider, into: RustBuffer): void;
            allocationSize(value: ConversionProvider): number;
            lift(value: UniffiByteArray): ConversionProvider;
            lower(value: ConversionProvider): UniffiByteArray;
        };
        FfiConverterTypeConversionPurpose: {
            read(from: RustBuffer): ConversionPurpose;
            write(value: ConversionPurpose, into: RustBuffer): void;
            allocationSize(value: ConversionPurpose): number;
            lift(value: UniffiByteArray): ConversionPurpose;
            lower(value: ConversionPurpose): UniffiByteArray;
        };
        FfiConverterTypeConversionSide: {
            read(from: RustBuffer): ConversionSide;
            write(value: ConversionSide, into: RustBuffer): void;
            allocationSize(value: ConversionSide): number;
            lift(value: UniffiByteArray): ConversionSide;
            lower(value: ConversionSide): UniffiByteArray;
        };
        FfiConverterTypeConversionStatus: {
            read(from: RustBuffer): ConversionStatus;
            write(value: ConversionStatus, into: RustBuffer): void;
            allocationSize(value: ConversionStatus): number;
            lift(value: UniffiByteArray): ConversionStatus;
            lower(value: ConversionStatus): UniffiByteArray;
        };
        FfiConverterTypeConversionType: {
            read(from: RustBuffer): ConversionType;
            write(value: ConversionType, into: RustBuffer): void;
            allocationSize(value: ConversionType): number;
            lift(value: UniffiByteArray): ConversionType;
            lower(value: ConversionType): UniffiByteArray;
        };
        FfiConverterTypeCreateIssuerTokenRequest: {
            read(from: RustBuffer): CreateIssuerTokenRequest;
            write(value: CreateIssuerTokenRequest, into: RustBuffer): void;
            allocationSize(value: CreateIssuerTokenRequest): number;
            lift(value: UniffiByteArray): CreateIssuerTokenRequest;
            lower(value: CreateIssuerTokenRequest): UniffiByteArray;
        };
        FfiConverterTypeCredentials: {
            read(from: RustBuffer): Credentials;
            write(value: Credentials, into: RustBuffer): void;
            allocationSize(value: Credentials): number;
            lift(value: UniffiByteArray): Credentials;
            lower(value: Credentials): UniffiByteArray;
        };
        FfiConverterTypeCrossChainAddressDetails: {
            read(from: RustBuffer): CrossChainAddressDetails;
            write(value: CrossChainAddressDetails, into: RustBuffer): void;
            allocationSize(value: CrossChainAddressDetails): number;
            lift(value: UniffiByteArray): CrossChainAddressDetails;
            lower(value: CrossChainAddressDetails): UniffiByteArray;
        };
        FfiConverterTypeCrossChainAddressFamily: {
            read(from: RustBuffer): CrossChainAddressFamily;
            write(value: CrossChainAddressFamily, into: RustBuffer): void;
            allocationSize(value: CrossChainAddressFamily): number;
            lift(value: UniffiByteArray): CrossChainAddressFamily;
            lower(value: CrossChainAddressFamily): UniffiByteArray;
        };
        FfiConverterTypeCrossChainConfig: {
            read(from: RustBuffer): CrossChainConfig;
            write(value: CrossChainConfig, into: RustBuffer): void;
            allocationSize(value: CrossChainConfig): number;
            lift(value: UniffiByteArray): CrossChainConfig;
            lower(value: CrossChainConfig): UniffiByteArray;
        };
        FfiConverterTypeCrossChainFeeMode: {
            read(from: RustBuffer): CrossChainFeeMode;
            write(value: CrossChainFeeMode, into: RustBuffer): void;
            allocationSize(value: CrossChainFeeMode): number;
            lift(value: UniffiByteArray): CrossChainFeeMode;
            lower(value: CrossChainFeeMode): UniffiByteArray;
        };
        FfiConverterTypeCrossChainProvider: {
            read(from: RustBuffer): CrossChainProvider;
            write(value: CrossChainProvider, into: RustBuffer): void;
            allocationSize(value: CrossChainProvider): number;
            lift(value: UniffiByteArray): CrossChainProvider;
            lower(value: CrossChainProvider): UniffiByteArray;
        };
        FfiConverterTypeCrossChainProviderContext: {
            read(from: RustBuffer): CrossChainProviderContext;
            write(value: CrossChainProviderContext, into: RustBuffer): void;
            allocationSize(value: CrossChainProviderContext): number;
            lift(value: UniffiByteArray): CrossChainProviderContext;
            lower(value: CrossChainProviderContext): UniffiByteArray;
        };
        FfiConverterTypeCrossChainRouteFilter: {
            read(from: RustBuffer): CrossChainRouteFilter;
            write(value: CrossChainRouteFilter, into: RustBuffer): void;
            allocationSize(value: CrossChainRouteFilter): number;
            lift(value: UniffiByteArray): CrossChainRouteFilter;
            lower(value: CrossChainRouteFilter): UniffiByteArray;
        };
        FfiConverterTypeCrossChainRoutePair: {
            read(from: RustBuffer): CrossChainRoutePair;
            write(value: CrossChainRoutePair, into: RustBuffer): void;
            allocationSize(value: CrossChainRoutePair): number;
            lift(value: UniffiByteArray): CrossChainRoutePair;
            lower(value: CrossChainRoutePair): UniffiByteArray;
        };
        FfiConverterTypeCurrencyInfo: {
            read(from: RustBuffer): CurrencyInfo;
            write(value: CurrencyInfo, into: RustBuffer): void;
            allocationSize(value: CurrencyInfo): number;
            lift(value: UniffiByteArray): CurrencyInfo;
            lower(value: CurrencyInfo): UniffiByteArray;
        };
        FfiConverterTypeDepositClaimError: {
            read(from: RustBuffer): DepositClaimError;
            write(value: DepositClaimError, into: RustBuffer): void;
            allocationSize(value: DepositClaimError): number;
            lift(value: UniffiByteArray): DepositClaimError;
            lower(value: DepositClaimError): UniffiByteArray;
        };
        FfiConverterTypeDepositInfo: {
            read(from: RustBuffer): DepositInfo;
            write(value: DepositInfo, into: RustBuffer): void;
            allocationSize(value: DepositInfo): number;
            lift(value: UniffiByteArray): DepositInfo;
            lower(value: DepositInfo): UniffiByteArray;
        };
        FfiConverterTypeDeriveSeedsOutput: {
            read(from: RustBuffer): DeriveSeedsOutput;
            write(value: DeriveSeedsOutput, into: RustBuffer): void;
            allocationSize(value: DeriveSeedsOutput): number;
            lift(value: UniffiByteArray): DeriveSeedsOutput;
            lower(value: DeriveSeedsOutput): UniffiByteArray;
        };
        FfiConverterTypeDeriveSeedsRequest: {
            read(from: RustBuffer): DeriveSeedsRequest;
            write(value: DeriveSeedsRequest, into: RustBuffer): void;
            allocationSize(value: DeriveSeedsRequest): number;
            lift(value: UniffiByteArray): DeriveSeedsRequest;
            lower(value: DeriveSeedsRequest): UniffiByteArray;
        };
        FfiConverterTypeDomainAssociation: {
            read(from: RustBuffer): DomainAssociation;
            write(value: DomainAssociation, into: RustBuffer): void;
            allocationSize(value: DomainAssociation): number;
            lift(value: UniffiByteArray): DomainAssociation;
            lower(value: DomainAssociation): UniffiByteArray;
        };
        FfiConverterTypeEcdsaSignatureBytes: {
            read(from: RustBuffer): EcdsaSignatureBytes;
            write(value: EcdsaSignatureBytes, into: RustBuffer): void;
            allocationSize(value: EcdsaSignatureBytes): number;
            lift(value: UniffiByteArray): EcdsaSignatureBytes;
            lower(value: EcdsaSignatureBytes): UniffiByteArray;
        };
        FfiConverterTypeErrorKind: {
            read(from: RustBuffer): ErrorKind;
            write(value: ErrorKind, into: RustBuffer): void;
            allocationSize(value: ErrorKind): number;
            lift(value: UniffiByteArray): ErrorKind;
            lower(value: ErrorKind): UniffiByteArray;
        };
        FfiConverterTypeExternalBreezSigner: FfiConverterObjectWithCallbacks<ExternalBreezSigner>;
        FfiConverterTypeExternalClaimLeafInput: {
            read(from: RustBuffer): ExternalClaimLeafInput;
            write(value: ExternalClaimLeafInput, into: RustBuffer): void;
            allocationSize(value: ExternalClaimLeafInput): number;
            lift(value: UniffiByteArray): ExternalClaimLeafInput;
            lower(value: ExternalClaimLeafInput): UniffiByteArray;
        };
        FfiConverterTypeExternalFrostCommitments: {
            read(from: RustBuffer): ExternalFrostCommitments;
            write(value: ExternalFrostCommitments, into: RustBuffer): void;
            allocationSize(value: ExternalFrostCommitments): number;
            lift(value: UniffiByteArray): ExternalFrostCommitments;
            lower(value: ExternalFrostCommitments): UniffiByteArray;
        };
        FfiConverterTypeExternalFrostDerivation: {
            read(from: RustBuffer): ExternalFrostDerivation;
            write(value: ExternalFrostDerivation, into: RustBuffer): void;
            allocationSize(value: ExternalFrostDerivation): number;
            lift(value: UniffiByteArray): ExternalFrostDerivation;
            lower(value: ExternalFrostDerivation): UniffiByteArray;
        };
        FfiConverterTypeExternalFrostJob: {
            read(from: RustBuffer): ExternalFrostJob;
            write(value: ExternalFrostJob, into: RustBuffer): void;
            allocationSize(value: ExternalFrostJob): number;
            lift(value: UniffiByteArray): ExternalFrostJob;
            lower(value: ExternalFrostJob): UniffiByteArray;
        };
        FfiConverterTypeExternalFrostShareResult: {
            read(from: RustBuffer): ExternalFrostShareResult;
            write(value: ExternalFrostShareResult, into: RustBuffer): void;
            allocationSize(value: ExternalFrostShareResult): number;
            lift(value: UniffiByteArray): ExternalFrostShareResult;
            lower(value: ExternalFrostShareResult): UniffiByteArray;
        };
        FfiConverterTypeExternalFrostSignature: {
            read(from: RustBuffer): ExternalFrostSignature;
            write(value: ExternalFrostSignature, into: RustBuffer): void;
            allocationSize(value: ExternalFrostSignature): number;
            lift(value: UniffiByteArray): ExternalFrostSignature;
            lower(value: ExternalFrostSignature): UniffiByteArray;
        };
        FfiConverterTypeExternalFrostSignatureShare: {
            read(from: RustBuffer): ExternalFrostSignatureShare;
            write(value: ExternalFrostSignatureShare, into: RustBuffer): void;
            allocationSize(value: ExternalFrostSignatureShare): number;
            lift(value: UniffiByteArray): ExternalFrostSignatureShare;
            lower(value: ExternalFrostSignatureShare): UniffiByteArray;
        };
        FfiConverterTypeExternalIdentifier: {
            read(from: RustBuffer): ExternalIdentifier;
            write(value: ExternalIdentifier, into: RustBuffer): void;
            allocationSize(value: ExternalIdentifier): number;
            lift(value: UniffiByteArray): ExternalIdentifier;
            lower(value: ExternalIdentifier): UniffiByteArray;
        };
        FfiConverterTypeExternalInputParser: {
            read(from: RustBuffer): ExternalInputParser;
            write(value: ExternalInputParser, into: RustBuffer): void;
            allocationSize(value: ExternalInputParser): number;
            lift(value: UniffiByteArray): ExternalInputParser;
            lower(value: ExternalInputParser): UniffiByteArray;
        };
        FfiConverterTypeExternalNewLeafKey: {
            read(from: RustBuffer): ExternalNewLeafKey;
            write(value: ExternalNewLeafKey, into: RustBuffer): void;
            allocationSize(value: ExternalNewLeafKey): number;
            lift(value: UniffiByteArray): ExternalNewLeafKey;
            lower(value: ExternalNewLeafKey): UniffiByteArray;
        };
        FfiConverterTypeExternalOperatorPackage: {
            read(from: RustBuffer): ExternalOperatorPackage;
            write(value: ExternalOperatorPackage, into: RustBuffer): void;
            allocationSize(value: ExternalOperatorPackage): number;
            lift(value: UniffiByteArray): ExternalOperatorPackage;
            lower(value: ExternalOperatorPackage): UniffiByteArray;
        };
        FfiConverterTypeExternalOperatorRecipient: {
            read(from: RustBuffer): ExternalOperatorRecipient;
            write(value: ExternalOperatorRecipient, into: RustBuffer): void;
            allocationSize(value: ExternalOperatorRecipient): number;
            lift(value: UniffiByteArray): ExternalOperatorRecipient;
            lower(value: ExternalOperatorRecipient): UniffiByteArray;
        };
        FfiConverterTypeExternalPrepareClaimRequest: {
            read(from: RustBuffer): ExternalPrepareClaimRequest;
            write(value: ExternalPrepareClaimRequest, into: RustBuffer): void;
            allocationSize(value: ExternalPrepareClaimRequest): number;
            lift(value: UniffiByteArray): ExternalPrepareClaimRequest;
            lower(value: ExternalPrepareClaimRequest): UniffiByteArray;
        };
        FfiConverterTypeExternalPrepareLightningReceiveRequest: {
            read(from: RustBuffer): ExternalPrepareLightningReceiveRequest;
            write(value: ExternalPrepareLightningReceiveRequest, into: RustBuffer): void;
            allocationSize(value: ExternalPrepareLightningReceiveRequest): number;
            lift(value: UniffiByteArray): ExternalPrepareLightningReceiveRequest;
            lower(value: ExternalPrepareLightningReceiveRequest): UniffiByteArray;
        };
        FfiConverterTypeExternalPrepareStaticDepositClaimRequest: {
            read(from: RustBuffer): ExternalPrepareStaticDepositClaimRequest;
            write(value: ExternalPrepareStaticDepositClaimRequest, into: RustBuffer): void;
            allocationSize(value: ExternalPrepareStaticDepositClaimRequest): number;
            lift(value: UniffiByteArray): ExternalPrepareStaticDepositClaimRequest;
            lower(value: ExternalPrepareStaticDepositClaimRequest): UniffiByteArray;
        };
        FfiConverterTypeExternalPrepareStaticDepositRequest: {
            read(from: RustBuffer): ExternalPrepareStaticDepositRequest;
            write(value: ExternalPrepareStaticDepositRequest, into: RustBuffer): void;
            allocationSize(value: ExternalPrepareStaticDepositRequest): number;
            lift(value: UniffiByteArray): ExternalPrepareStaticDepositRequest;
            lower(value: ExternalPrepareStaticDepositRequest): UniffiByteArray;
        };
        FfiConverterTypeExternalPrepareTokenTransactionRequest: {
            read(from: RustBuffer): ExternalPrepareTokenTransactionRequest;
            write(value: ExternalPrepareTokenTransactionRequest, into: RustBuffer): void;
            allocationSize(value: ExternalPrepareTokenTransactionRequest): number;
            lift(value: UniffiByteArray): ExternalPrepareTokenTransactionRequest;
            lower(value: ExternalPrepareTokenTransactionRequest): UniffiByteArray;
        };
        FfiConverterTypeExternalPrepareTransferRequest: {
            read(from: RustBuffer): ExternalPrepareTransferRequest;
            write(value: ExternalPrepareTransferRequest, into: RustBuffer): void;
            allocationSize(value: ExternalPrepareTransferRequest): number;
            lift(value: UniffiByteArray): ExternalPrepareTransferRequest;
            lower(value: ExternalPrepareTransferRequest): UniffiByteArray;
        };
        FfiConverterTypeExternalPreparedClaim: {
            read(from: RustBuffer): ExternalPreparedClaim;
            write(value: ExternalPreparedClaim, into: RustBuffer): void;
            allocationSize(value: ExternalPreparedClaim): number;
            lift(value: UniffiByteArray): ExternalPreparedClaim;
            lower(value: ExternalPreparedClaim): UniffiByteArray;
        };
        FfiConverterTypeExternalPreparedLightningReceive: {
            read(from: RustBuffer): ExternalPreparedLightningReceive;
            write(value: ExternalPreparedLightningReceive, into: RustBuffer): void;
            allocationSize(value: ExternalPreparedLightningReceive): number;
            lift(value: UniffiByteArray): ExternalPreparedLightningReceive;
            lower(value: ExternalPreparedLightningReceive): UniffiByteArray;
        };
        FfiConverterTypeExternalPreparedStaticDeposit: {
            read(from: RustBuffer): ExternalPreparedStaticDeposit;
            write(value: ExternalPreparedStaticDeposit, into: RustBuffer): void;
            allocationSize(value: ExternalPreparedStaticDeposit): number;
            lift(value: UniffiByteArray): ExternalPreparedStaticDeposit;
            lower(value: ExternalPreparedStaticDeposit): UniffiByteArray;
        };
        FfiConverterTypeExternalPreparedStaticDepositClaim: {
            read(from: RustBuffer): ExternalPreparedStaticDepositClaim;
            write(value: ExternalPreparedStaticDepositClaim, into: RustBuffer): void;
            allocationSize(value: ExternalPreparedStaticDepositClaim): number;
            lift(value: UniffiByteArray): ExternalPreparedStaticDepositClaim;
            lower(value: ExternalPreparedStaticDepositClaim): UniffiByteArray;
        };
        FfiConverterTypeExternalPreparedTokenTransaction: {
            read(from: RustBuffer): ExternalPreparedTokenTransaction;
            write(value: ExternalPreparedTokenTransaction, into: RustBuffer): void;
            allocationSize(value: ExternalPreparedTokenTransaction): number;
            lift(value: UniffiByteArray): ExternalPreparedTokenTransaction;
            lower(value: ExternalPreparedTokenTransaction): UniffiByteArray;
        };
        FfiConverterTypeExternalPreparedTransfer: {
            read(from: RustBuffer): ExternalPreparedTransfer;
            write(value: ExternalPreparedTransfer, into: RustBuffer): void;
            allocationSize(value: ExternalPreparedTransfer): number;
            lift(value: UniffiByteArray): ExternalPreparedTransfer;
            lower(value: ExternalPreparedTransfer): UniffiByteArray;
        };
        FfiConverterTypeExternalSignSparkInvoiceRequest: {
            read(from: RustBuffer): ExternalSignSparkInvoiceRequest;
            write(value: ExternalSignSparkInvoiceRequest, into: RustBuffer): void;
            allocationSize(value: ExternalSignSparkInvoiceRequest): number;
            lift(value: UniffiByteArray): ExternalSignSparkInvoiceRequest;
            lower(value: ExternalSignSparkInvoiceRequest): UniffiByteArray;
        };
        FfiConverterTypeExternalSignStaticDepositRefundRequest: {
            read(from: RustBuffer): ExternalSignStaticDepositRefundRequest;
            write(value: ExternalSignStaticDepositRefundRequest, into: RustBuffer): void;
            allocationSize(value: ExternalSignStaticDepositRefundRequest): number;
            lift(value: UniffiByteArray): ExternalSignStaticDepositRefundRequest;
            lower(value: ExternalSignStaticDepositRefundRequest): UniffiByteArray;
        };
        FfiConverterTypeExternalSignedSparkInvoice: {
            read(from: RustBuffer): ExternalSignedSparkInvoice;
            write(value: ExternalSignedSparkInvoice, into: RustBuffer): void;
            allocationSize(value: ExternalSignedSparkInvoice): number;
            lift(value: UniffiByteArray): ExternalSignedSparkInvoice;
            lower(value: ExternalSignedSparkInvoice): UniffiByteArray;
        };
        FfiConverterTypeExternalSigners: {
            read(from: RustBuffer): ExternalSigners;
            write(value: ExternalSigners, into: RustBuffer): void;
            allocationSize(value: ExternalSigners): number;
            lift(value: UniffiByteArray): ExternalSigners;
            lower(value: ExternalSigners): UniffiByteArray;
        };
        FfiConverterTypeExternalSigningCommitments: {
            read(from: RustBuffer): ExternalSigningCommitments;
            write(value: ExternalSigningCommitments, into: RustBuffer): void;
            allocationSize(value: ExternalSigningCommitments): number;
            lift(value: UniffiByteArray): ExternalSigningCommitments;
            lower(value: ExternalSigningCommitments): UniffiByteArray;
        };
        FfiConverterTypeExternalSparkInvoiceKind: {
            read(from: RustBuffer): ExternalSparkInvoiceKind;
            write(value: ExternalSparkInvoiceKind, into: RustBuffer): void;
            allocationSize(value: ExternalSparkInvoiceKind): number;
            lift(value: UniffiByteArray): ExternalSparkInvoiceKind;
            lower(value: ExternalSparkInvoiceKind): UniffiByteArray;
        };
        FfiConverterTypeExternalSparkSigner: FfiConverterObjectWithCallbacks<ExternalSparkSigner>;
        FfiConverterTypeExternalStartStaticDepositRefundRequest: {
            read(from: RustBuffer): ExternalStartStaticDepositRefundRequest;
            write(value: ExternalStartStaticDepositRefundRequest, into: RustBuffer): void;
            allocationSize(value: ExternalStartStaticDepositRefundRequest): number;
            lift(value: UniffiByteArray): ExternalStartStaticDepositRefundRequest;
            lower(value: ExternalStartStaticDepositRefundRequest): UniffiByteArray;
        };
        FfiConverterTypeExternalStartedStaticDepositRefund: {
            read(from: RustBuffer): ExternalStartedStaticDepositRefund;
            write(value: ExternalStartedStaticDepositRefund, into: RustBuffer): void;
            allocationSize(value: ExternalStartedStaticDepositRefund): number;
            lift(value: UniffiByteArray): ExternalStartedStaticDepositRefund;
            lower(value: ExternalStartedStaticDepositRefund): UniffiByteArray;
        };
        FfiConverterTypeExternalTokenTransactionKind: {
            read(from: RustBuffer): ExternalTokenTransactionKind;
            write(value: ExternalTokenTransactionKind, into: RustBuffer): void;
            allocationSize(value: ExternalTokenTransactionKind): number;
            lift(value: UniffiByteArray): ExternalTokenTransactionKind;
            lower(value: ExternalTokenTransactionKind): UniffiByteArray;
        };
        FfiConverterTypeExternalTransferLeafInput: {
            read(from: RustBuffer): ExternalTransferLeafInput;
            write(value: ExternalTransferLeafInput, into: RustBuffer): void;
            allocationSize(value: ExternalTransferLeafInput): number;
            lift(value: UniffiByteArray): ExternalTransferLeafInput;
            lower(value: ExternalTransferLeafInput): UniffiByteArray;
        };
        FfiConverterTypeExternalTreeNodeId: {
            read(from: RustBuffer): ExternalTreeNodeId;
            write(value: ExternalTreeNodeId, into: RustBuffer): void;
            allocationSize(value: ExternalTreeNodeId): number;
            lift(value: UniffiByteArray): ExternalTreeNodeId;
            lower(value: ExternalTreeNodeId): UniffiByteArray;
        };
        FfiConverterTypeFee: {
            read(from: RustBuffer): Fee;
            write(value: Fee, into: RustBuffer): void;
            allocationSize(value: Fee): number;
            lift(value: UniffiByteArray): Fee;
            lower(value: Fee): UniffiByteArray;
        };
        FfiConverterTypeFeePolicy: {
            read(from: RustBuffer): FeePolicy;
            write(value: FeePolicy, into: RustBuffer): void;
            allocationSize(value: FeePolicy): number;
            lift(value: UniffiByteArray): FeePolicy;
            lower(value: FeePolicy): UniffiByteArray;
        };
        FfiConverterTypeFetchConversionLimitsRequest: {
            read(from: RustBuffer): FetchConversionLimitsRequest;
            write(value: FetchConversionLimitsRequest, into: RustBuffer): void;
            allocationSize(value: FetchConversionLimitsRequest): number;
            lift(value: UniffiByteArray): FetchConversionLimitsRequest;
            lower(value: FetchConversionLimitsRequest): UniffiByteArray;
        };
        FfiConverterTypeFetchConversionLimitsResponse: {
            read(from: RustBuffer): FetchConversionLimitsResponse;
            write(value: FetchConversionLimitsResponse, into: RustBuffer): void;
            allocationSize(value: FetchConversionLimitsResponse): number;
            lift(value: UniffiByteArray): FetchConversionLimitsResponse;
            lower(value: FetchConversionLimitsResponse): UniffiByteArray;
        };
        FfiConverterTypeFiatCurrency: {
            read(from: RustBuffer): FiatCurrency;
            write(value: FiatCurrency, into: RustBuffer): void;
            allocationSize(value: FiatCurrency): number;
            lift(value: UniffiByteArray): FiatCurrency;
            lower(value: FiatCurrency): UniffiByteArray;
        };
        FfiConverterTypeFiatService: FfiConverterObjectWithCallbacks<FiatService>;
        FfiConverterTypeFreezeIssuerTokenRequest: {
            read(from: RustBuffer): FreezeIssuerTokenRequest;
            write(value: FreezeIssuerTokenRequest, into: RustBuffer): void;
            allocationSize(value: FreezeIssuerTokenRequest): number;
            lift(value: UniffiByteArray): FreezeIssuerTokenRequest;
            lower(value: FreezeIssuerTokenRequest): UniffiByteArray;
        };
        FfiConverterTypeFreezeIssuerTokenResponse: {
            read(from: RustBuffer): FreezeIssuerTokenResponse;
            write(value: FreezeIssuerTokenResponse, into: RustBuffer): void;
            allocationSize(value: FreezeIssuerTokenResponse): number;
            lift(value: UniffiByteArray): FreezeIssuerTokenResponse;
            lower(value: FreezeIssuerTokenResponse): UniffiByteArray;
        };
        FfiConverterTypeGetInfoRequest: {
            read(from: RustBuffer): GetInfoRequest;
            write(value: GetInfoRequest, into: RustBuffer): void;
            allocationSize(value: GetInfoRequest): number;
            lift(value: UniffiByteArray): GetInfoRequest;
            lower(value: GetInfoRequest): UniffiByteArray;
        };
        FfiConverterTypeGetInfoResponse: {
            read(from: RustBuffer): GetInfoResponse;
            write(value: GetInfoResponse, into: RustBuffer): void;
            allocationSize(value: GetInfoResponse): number;
            lift(value: UniffiByteArray): GetInfoResponse;
            lower(value: GetInfoResponse): UniffiByteArray;
        };
        FfiConverterTypeGetPaymentRequest: {
            read(from: RustBuffer): GetPaymentRequest;
            write(value: GetPaymentRequest, into: RustBuffer): void;
            allocationSize(value: GetPaymentRequest): number;
            lift(value: UniffiByteArray): GetPaymentRequest;
            lower(value: GetPaymentRequest): UniffiByteArray;
        };
        FfiConverterTypeGetPaymentResponse: {
            read(from: RustBuffer): GetPaymentResponse;
            write(value: GetPaymentResponse, into: RustBuffer): void;
            allocationSize(value: GetPaymentResponse): number;
            lift(value: UniffiByteArray): GetPaymentResponse;
            lower(value: GetPaymentResponse): UniffiByteArray;
        };
        FfiConverterTypeGetTokensMetadataRequest: {
            read(from: RustBuffer): GetTokensMetadataRequest;
            write(value: GetTokensMetadataRequest, into: RustBuffer): void;
            allocationSize(value: GetTokensMetadataRequest): number;
            lift(value: UniffiByteArray): GetTokensMetadataRequest;
            lower(value: GetTokensMetadataRequest): UniffiByteArray;
        };
        FfiConverterTypeGetTokensMetadataResponse: {
            read(from: RustBuffer): GetTokensMetadataResponse;
            write(value: GetTokensMetadataResponse, into: RustBuffer): void;
            allocationSize(value: GetTokensMetadataResponse): number;
            lift(value: UniffiByteArray): GetTokensMetadataResponse;
            lower(value: GetTokensMetadataResponse): UniffiByteArray;
        };
        FfiConverterTypeHashedMessageBytes: {
            read(from: RustBuffer): HashedMessageBytes;
            write(value: HashedMessageBytes, into: RustBuffer): void;
            allocationSize(value: HashedMessageBytes): number;
            lift(value: UniffiByteArray): HashedMessageBytes;
            lower(value: HashedMessageBytes): UniffiByteArray;
        };
        FfiConverterTypeIdentifierCommitmentPair: {
            read(from: RustBuffer): IdentifierCommitmentPair;
            write(value: IdentifierCommitmentPair, into: RustBuffer): void;
            allocationSize(value: IdentifierCommitmentPair): number;
            lift(value: UniffiByteArray): IdentifierCommitmentPair;
            lower(value: IdentifierCommitmentPair): UniffiByteArray;
        };
        FfiConverterTypeIdentifierPublicKeyPair: {
            read(from: RustBuffer): IdentifierPublicKeyPair;
            write(value: IdentifierPublicKeyPair, into: RustBuffer): void;
            allocationSize(value: IdentifierPublicKeyPair): number;
            lift(value: UniffiByteArray): IdentifierPublicKeyPair;
            lower(value: IdentifierPublicKeyPair): UniffiByteArray;
        };
        FfiConverterTypeIdentifierSignaturePair: {
            read(from: RustBuffer): IdentifierSignaturePair;
            write(value: IdentifierSignaturePair, into: RustBuffer): void;
            allocationSize(value: IdentifierSignaturePair): number;
            lift(value: UniffiByteArray): IdentifierSignaturePair;
            lower(value: IdentifierSignaturePair): UniffiByteArray;
        };
        FfiConverterTypeIncomingChange: {
            read(from: RustBuffer): IncomingChange;
            write(value: IncomingChange, into: RustBuffer): void;
            allocationSize(value: IncomingChange): number;
            lift(value: UniffiByteArray): IncomingChange;
            lower(value: IncomingChange): UniffiByteArray;
        };
        FfiConverterTypeInputType: {
            read(from: RustBuffer): InputType;
            write(value: InputType, into: RustBuffer): void;
            allocationSize(value: InputType): number;
            lift(value: UniffiByteArray): InputType;
            lower(value: InputType): UniffiByteArray;
        };
        FfiConverterTypeLeafOptimizationConfig: {
            read(from: RustBuffer): LeafOptimizationConfig;
            write(value: LeafOptimizationConfig, into: RustBuffer): void;
            allocationSize(value: LeafOptimizationConfig): number;
            lift(value: UniffiByteArray): LeafOptimizationConfig;
            lower(value: LeafOptimizationConfig): UniffiByteArray;
        };
        FfiConverterTypeLightningAddressDetails: {
            read(from: RustBuffer): LightningAddressDetails;
            write(value: LightningAddressDetails, into: RustBuffer): void;
            allocationSize(value: LightningAddressDetails): number;
            lift(value: UniffiByteArray): LightningAddressDetails;
            lower(value: LightningAddressDetails): UniffiByteArray;
        };
        FfiConverterTypeLightningAddressInfo: {
            read(from: RustBuffer): LightningAddressInfo;
            write(value: LightningAddressInfo, into: RustBuffer): void;
            allocationSize(value: LightningAddressInfo): number;
            lift(value: UniffiByteArray): LightningAddressInfo;
            lower(value: LightningAddressInfo): UniffiByteArray;
        };
        FfiConverterTypeListContactsRequest: {
            read(from: RustBuffer): ListContactsRequest;
            write(value: ListContactsRequest, into: RustBuffer): void;
            allocationSize(value: ListContactsRequest): number;
            lift(value: UniffiByteArray): ListContactsRequest;
            lower(value: ListContactsRequest): UniffiByteArray;
        };
        FfiConverterTypeListFiatCurrenciesResponse: {
            read(from: RustBuffer): ListFiatCurrenciesResponse;
            write(value: ListFiatCurrenciesResponse, into: RustBuffer): void;
            allocationSize(value: ListFiatCurrenciesResponse): number;
            lift(value: UniffiByteArray): ListFiatCurrenciesResponse;
            lower(value: ListFiatCurrenciesResponse): UniffiByteArray;
        };
        FfiConverterTypeListFiatRatesResponse: {
            read(from: RustBuffer): ListFiatRatesResponse;
            write(value: ListFiatRatesResponse, into: RustBuffer): void;
            allocationSize(value: ListFiatRatesResponse): number;
            lift(value: UniffiByteArray): ListFiatRatesResponse;
            lower(value: ListFiatRatesResponse): UniffiByteArray;
        };
        FfiConverterTypeListPaymentsRequest: {
            read(from: RustBuffer): ListPaymentsRequest;
            write(value: ListPaymentsRequest, into: RustBuffer): void;
            allocationSize(value: ListPaymentsRequest): number;
            lift(value: UniffiByteArray): ListPaymentsRequest;
            lower(value: ListPaymentsRequest): UniffiByteArray;
        };
        FfiConverterTypeListPaymentsResponse: {
            read(from: RustBuffer): ListPaymentsResponse;
            write(value: ListPaymentsResponse, into: RustBuffer): void;
            allocationSize(value: ListPaymentsResponse): number;
            lift(value: UniffiByteArray): ListPaymentsResponse;
            lower(value: ListPaymentsResponse): UniffiByteArray;
        };
        FfiConverterTypeListUnclaimedDepositsRequest: {
            read(from: RustBuffer): ListUnclaimedDepositsRequest;
            write(value: ListUnclaimedDepositsRequest, into: RustBuffer): void;
            allocationSize(value: ListUnclaimedDepositsRequest): number;
            lift(value: UniffiByteArray): ListUnclaimedDepositsRequest;
            lower(value: ListUnclaimedDepositsRequest): UniffiByteArray;
        };
        FfiConverterTypeListUnclaimedDepositsResponse: {
            read(from: RustBuffer): ListUnclaimedDepositsResponse;
            write(value: ListUnclaimedDepositsResponse, into: RustBuffer): void;
            allocationSize(value: ListUnclaimedDepositsResponse): number;
            lift(value: UniffiByteArray): ListUnclaimedDepositsResponse;
            lower(value: ListUnclaimedDepositsResponse): UniffiByteArray;
        };
        FfiConverterTypeLnurlAuthRequestDetails: {
            read(from: RustBuffer): LnurlAuthRequestDetails;
            write(value: LnurlAuthRequestDetails, into: RustBuffer): void;
            allocationSize(value: LnurlAuthRequestDetails): number;
            lift(value: UniffiByteArray): LnurlAuthRequestDetails;
            lower(value: LnurlAuthRequestDetails): UniffiByteArray;
        };
        FfiConverterTypeLnurlCallbackStatus: {
            read(from: RustBuffer): LnurlCallbackStatus;
            write(value: LnurlCallbackStatus, into: RustBuffer): void;
            allocationSize(value: LnurlCallbackStatus): number;
            lift(value: UniffiByteArray): LnurlCallbackStatus;
            lower(value: LnurlCallbackStatus): UniffiByteArray;
        };
        FfiConverterTypeLnurlErrorDetails: {
            read(from: RustBuffer): LnurlErrorDetails;
            write(value: LnurlErrorDetails, into: RustBuffer): void;
            allocationSize(value: LnurlErrorDetails): number;
            lift(value: UniffiByteArray): LnurlErrorDetails;
            lower(value: LnurlErrorDetails): UniffiByteArray;
        };
        FfiConverterTypeLnurlInfo: {
            read(from: RustBuffer): LnurlInfo;
            write(value: LnurlInfo, into: RustBuffer): void;
            allocationSize(value: LnurlInfo): number;
            lift(value: UniffiByteArray): LnurlInfo;
            lower(value: LnurlInfo): UniffiByteArray;
        };
        FfiConverterTypeLnurlPayInfo: {
            read(from: RustBuffer): LnurlPayInfo;
            write(value: LnurlPayInfo, into: RustBuffer): void;
            allocationSize(value: LnurlPayInfo): number;
            lift(value: UniffiByteArray): LnurlPayInfo;
            lower(value: LnurlPayInfo): UniffiByteArray;
        };
        FfiConverterTypeLnurlPayRequest: {
            read(from: RustBuffer): LnurlPayRequest;
            write(value: LnurlPayRequest, into: RustBuffer): void;
            allocationSize(value: LnurlPayRequest): number;
            lift(value: UniffiByteArray): LnurlPayRequest;
            lower(value: LnurlPayRequest): UniffiByteArray;
        };
        FfiConverterTypeLnurlPayRequestDetails: {
            read(from: RustBuffer): LnurlPayRequestDetails;
            write(value: LnurlPayRequestDetails, into: RustBuffer): void;
            allocationSize(value: LnurlPayRequestDetails): number;
            lift(value: UniffiByteArray): LnurlPayRequestDetails;
            lower(value: LnurlPayRequestDetails): UniffiByteArray;
        };
        FfiConverterTypeLnurlPayResponse: {
            read(from: RustBuffer): LnurlPayResponse;
            write(value: LnurlPayResponse, into: RustBuffer): void;
            allocationSize(value: LnurlPayResponse): number;
            lift(value: UniffiByteArray): LnurlPayResponse;
            lower(value: LnurlPayResponse): UniffiByteArray;
        };
        FfiConverterTypeLnurlReceiveMetadata: {
            read(from: RustBuffer): LnurlReceiveMetadata;
            write(value: LnurlReceiveMetadata, into: RustBuffer): void;
            allocationSize(value: LnurlReceiveMetadata): number;
            lift(value: UniffiByteArray): LnurlReceiveMetadata;
            lower(value: LnurlReceiveMetadata): UniffiByteArray;
        };
        FfiConverterTypeLnurlWithdrawInfo: {
            read(from: RustBuffer): LnurlWithdrawInfo;
            write(value: LnurlWithdrawInfo, into: RustBuffer): void;
            allocationSize(value: LnurlWithdrawInfo): number;
            lift(value: UniffiByteArray): LnurlWithdrawInfo;
            lower(value: LnurlWithdrawInfo): UniffiByteArray;
        };
        FfiConverterTypeLnurlWithdrawRequest: {
            read(from: RustBuffer): LnurlWithdrawRequest;
            write(value: LnurlWithdrawRequest, into: RustBuffer): void;
            allocationSize(value: LnurlWithdrawRequest): number;
            lift(value: UniffiByteArray): LnurlWithdrawRequest;
            lower(value: LnurlWithdrawRequest): UniffiByteArray;
        };
        FfiConverterTypeLnurlWithdrawRequestDetails: {
            read(from: RustBuffer): LnurlWithdrawRequestDetails;
            write(value: LnurlWithdrawRequestDetails, into: RustBuffer): void;
            allocationSize(value: LnurlWithdrawRequestDetails): number;
            lift(value: UniffiByteArray): LnurlWithdrawRequestDetails;
            lower(value: LnurlWithdrawRequestDetails): UniffiByteArray;
        };
        FfiConverterTypeLnurlWithdrawResponse: {
            read(from: RustBuffer): LnurlWithdrawResponse;
            write(value: LnurlWithdrawResponse, into: RustBuffer): void;
            allocationSize(value: LnurlWithdrawResponse): number;
            lift(value: UniffiByteArray): LnurlWithdrawResponse;
            lower(value: LnurlWithdrawResponse): UniffiByteArray;
        };
        FfiConverterTypeLocaleOverrides: {
            read(from: RustBuffer): LocaleOverrides;
            write(value: LocaleOverrides, into: RustBuffer): void;
            allocationSize(value: LocaleOverrides): number;
            lift(value: UniffiByteArray): LocaleOverrides;
            lower(value: LocaleOverrides): UniffiByteArray;
        };
        FfiConverterTypeLocalizedName: {
            read(from: RustBuffer): LocalizedName;
            write(value: LocalizedName, into: RustBuffer): void;
            allocationSize(value: LocalizedName): number;
            lift(value: UniffiByteArray): LocalizedName;
            lower(value: LocalizedName): UniffiByteArray;
        };
        FfiConverterTypeLogEntry: {
            read(from: RustBuffer): LogEntry;
            write(value: LogEntry, into: RustBuffer): void;
            allocationSize(value: LogEntry): number;
            lift(value: UniffiByteArray): LogEntry;
            lower(value: LogEntry): UniffiByteArray;
        };
        FfiConverterTypeMaxFee: {
            read(from: RustBuffer): MaxFee;
            write(value: MaxFee, into: RustBuffer): void;
            allocationSize(value: MaxFee): number;
            lift(value: UniffiByteArray): MaxFee;
            lower(value: MaxFee): UniffiByteArray;
        };
        FfiConverterTypeMessageBytes: {
            read(from: RustBuffer): MessageBytes;
            write(value: MessageBytes, into: RustBuffer): void;
            allocationSize(value: MessageBytes): number;
            lift(value: UniffiByteArray): MessageBytes;
            lower(value: MessageBytes): UniffiByteArray;
        };
        FfiConverterTypeMessageSuccessActionData: {
            read(from: RustBuffer): MessageSuccessActionData;
            write(value: MessageSuccessActionData, into: RustBuffer): void;
            allocationSize(value: MessageSuccessActionData): number;
            lift(value: UniffiByteArray): MessageSuccessActionData;
            lower(value: MessageSuccessActionData): UniffiByteArray;
        };
        FfiConverterTypeMintIssuerTokenRequest: {
            read(from: RustBuffer): MintIssuerTokenRequest;
            write(value: MintIssuerTokenRequest, into: RustBuffer): void;
            allocationSize(value: MintIssuerTokenRequest): number;
            lift(value: UniffiByteArray): MintIssuerTokenRequest;
            lower(value: MintIssuerTokenRequest): UniffiByteArray;
        };
        FfiConverterTypeNetwork: {
            read(from: RustBuffer): Network;
            write(value: Network, into: RustBuffer): void;
            allocationSize(value: Network): number;
            lift(value: UniffiByteArray): Network;
            lower(value: Network): UniffiByteArray;
        };
        FfiConverterTypeOnchainConfirmationSpeed: {
            read(from: RustBuffer): OnchainConfirmationSpeed;
            write(value: OnchainConfirmationSpeed, into: RustBuffer): void;
            allocationSize(value: OnchainConfirmationSpeed): number;
            lift(value: UniffiByteArray): OnchainConfirmationSpeed;
            lower(value: OnchainConfirmationSpeed): UniffiByteArray;
        };
        FfiConverterTypeOptimizationMode: {
            read(from: RustBuffer): OptimizationMode;
            write(value: OptimizationMode, into: RustBuffer): void;
            allocationSize(value: OptimizationMode): number;
            lift(value: UniffiByteArray): OptimizationMode;
            lower(value: OptimizationMode): UniffiByteArray;
        };
        FfiConverterTypeOptimizationOutcome: {
            read(from: RustBuffer): OptimizationOutcome;
            write(value: OptimizationOutcome, into: RustBuffer): void;
            allocationSize(value: OptimizationOutcome): number;
            lift(value: UniffiByteArray): OptimizationOutcome;
            lower(value: OptimizationOutcome): UniffiByteArray;
        };
        FfiConverterTypeOptimizeLeavesRequest: {
            read(from: RustBuffer): OptimizeLeavesRequest;
            write(value: OptimizeLeavesRequest, into: RustBuffer): void;
            allocationSize(value: OptimizeLeavesRequest): number;
            lift(value: UniffiByteArray): OptimizeLeavesRequest;
            lower(value: OptimizeLeavesRequest): UniffiByteArray;
        };
        FfiConverterTypeOptimizeLeavesResponse: {
            read(from: RustBuffer): OptimizeLeavesResponse;
            write(value: OptimizeLeavesResponse, into: RustBuffer): void;
            allocationSize(value: OptimizeLeavesResponse): number;
            lift(value: UniffiByteArray): OptimizeLeavesResponse;
            lower(value: OptimizeLeavesResponse): UniffiByteArray;
        };
        FfiConverterTypeOutgoingChange: {
            read(from: RustBuffer): OutgoingChange;
            write(value: OutgoingChange, into: RustBuffer): void;
            allocationSize(value: OutgoingChange): number;
            lift(value: UniffiByteArray): OutgoingChange;
            lower(value: OutgoingChange): UniffiByteArray;
        };
        FfiConverterTypePasskeyAvailability: {
            read(from: RustBuffer): PasskeyAvailability;
            write(value: PasskeyAvailability, into: RustBuffer): void;
            allocationSize(value: PasskeyAvailability): number;
            lift(value: UniffiByteArray): PasskeyAvailability;
            lower(value: PasskeyAvailability): UniffiByteArray;
        };
        FfiConverterTypePasskeyClient: FfiConverterObject<PasskeyClientInterface>;
        FfiConverterTypePasskeyConfig: {
            read(from: RustBuffer): PasskeyConfig;
            write(value: PasskeyConfig, into: RustBuffer): void;
            allocationSize(value: PasskeyConfig): number;
            lift(value: UniffiByteArray): PasskeyConfig;
            lower(value: PasskeyConfig): UniffiByteArray;
        };
        FfiConverterTypePasskeyCredential: {
            read(from: RustBuffer): PasskeyCredential;
            write(value: PasskeyCredential, into: RustBuffer): void;
            allocationSize(value: PasskeyCredential): number;
            lift(value: UniffiByteArray): PasskeyCredential;
            lower(value: PasskeyCredential): UniffiByteArray;
        };
        FfiConverterTypePasskeyError: {
            read(from: RustBuffer): PasskeyError;
            write(value: PasskeyError, into: RustBuffer): void;
            allocationSize(value: PasskeyError): number;
            lift(value: UniffiByteArray): PasskeyError;
            lower(value: PasskeyError): UniffiByteArray;
        };
        FfiConverterTypePasskeyLabels: FfiConverterObject<PasskeyLabelsInterface>;
        FfiConverterTypePasskeyProviderOptions: {
            read(from: RustBuffer): PasskeyProviderOptions;
            write(value: PasskeyProviderOptions, into: RustBuffer): void;
            allocationSize(value: PasskeyProviderOptions): number;
            lift(value: UniffiByteArray): PasskeyProviderOptions;
            lower(value: PasskeyProviderOptions): UniffiByteArray;
        };
        FfiConverterTypePayment: {
            read(from: RustBuffer): Payment;
            write(value: Payment, into: RustBuffer): void;
            allocationSize(value: Payment): number;
            lift(value: UniffiByteArray): Payment;
            lower(value: Payment): UniffiByteArray;
        };
        FfiConverterTypePaymentDetails: {
            read(from: RustBuffer): PaymentDetails;
            write(value: PaymentDetails, into: RustBuffer): void;
            allocationSize(value: PaymentDetails): number;
            lift(value: UniffiByteArray): PaymentDetails;
            lower(value: PaymentDetails): UniffiByteArray;
        };
        FfiConverterTypePaymentDetailsFilter: {
            read(from: RustBuffer): PaymentDetailsFilter;
            write(value: PaymentDetailsFilter, into: RustBuffer): void;
            allocationSize(value: PaymentDetailsFilter): number;
            lift(value: UniffiByteArray): PaymentDetailsFilter;
            lower(value: PaymentDetailsFilter): UniffiByteArray;
        };
        FfiConverterTypePaymentIdUpdate: {
            read(from: RustBuffer): PaymentIdUpdate;
            write(value: PaymentIdUpdate, into: RustBuffer): void;
            allocationSize(value: PaymentIdUpdate): number;
            lift(value: UniffiByteArray): PaymentIdUpdate;
            lower(value: PaymentIdUpdate): UniffiByteArray;
        };
        FfiConverterTypePaymentMetadata: {
            read(from: RustBuffer): PaymentMetadata;
            write(value: PaymentMetadata, into: RustBuffer): void;
            allocationSize(value: PaymentMetadata): number;
            lift(value: UniffiByteArray): PaymentMetadata;
            lower(value: PaymentMetadata): UniffiByteArray;
        };
        FfiConverterTypePaymentMethod: {
            read(from: RustBuffer): PaymentMethod;
            write(value: PaymentMethod, into: RustBuffer): void;
            allocationSize(value: PaymentMethod): number;
            lift(value: UniffiByteArray): PaymentMethod;
            lower(value: PaymentMethod): UniffiByteArray;
        };
        FfiConverterTypePaymentObserver: FfiConverterObjectWithCallbacks<PaymentObserver>;
        FfiConverterTypePaymentObserverError: {
            read(from: RustBuffer): PaymentObserverError;
            write(value: PaymentObserverError, into: RustBuffer): void;
            allocationSize(value: PaymentObserverError): number;
            lift(value: UniffiByteArray): PaymentObserverError;
            lower(value: PaymentObserverError): UniffiByteArray;
        };
        FfiConverterTypePaymentRequest: {
            read(from: RustBuffer): PaymentRequest;
            write(value: PaymentRequest, into: RustBuffer): void;
            allocationSize(value: PaymentRequest): number;
            lift(value: UniffiByteArray): PaymentRequest;
            lower(value: PaymentRequest): UniffiByteArray;
        };
        FfiConverterTypePaymentRequestSource: {
            read(from: RustBuffer): PaymentRequestSource;
            write(value: PaymentRequestSource, into: RustBuffer): void;
            allocationSize(value: PaymentRequestSource): number;
            lift(value: UniffiByteArray): PaymentRequestSource;
            lower(value: PaymentRequestSource): UniffiByteArray;
        };
        FfiConverterTypePaymentStatus: {
            read(from: RustBuffer): PaymentStatus;
            write(value: PaymentStatus, into: RustBuffer): void;
            allocationSize(value: PaymentStatus): number;
            lift(value: UniffiByteArray): PaymentStatus;
            lower(value: PaymentStatus): UniffiByteArray;
        };
        FfiConverterTypePaymentType: {
            read(from: RustBuffer): PaymentType;
            write(value: PaymentType, into: RustBuffer): void;
            allocationSize(value: PaymentType): number;
            lift(value: UniffiByteArray): PaymentType;
            lower(value: PaymentType): UniffiByteArray;
        };
        FfiConverterTypePrepareLnurlPayRequest: {
            read(from: RustBuffer): PrepareLnurlPayRequest;
            write(value: PrepareLnurlPayRequest, into: RustBuffer): void;
            allocationSize(value: PrepareLnurlPayRequest): number;
            lift(value: UniffiByteArray): PrepareLnurlPayRequest;
            lower(value: PrepareLnurlPayRequest): UniffiByteArray;
        };
        FfiConverterTypePrepareLnurlPayResponse: {
            read(from: RustBuffer): PrepareLnurlPayResponse;
            write(value: PrepareLnurlPayResponse, into: RustBuffer): void;
            allocationSize(value: PrepareLnurlPayResponse): number;
            lift(value: UniffiByteArray): PrepareLnurlPayResponse;
            lower(value: PrepareLnurlPayResponse): UniffiByteArray;
        };
        FfiConverterTypePrepareSendPaymentRequest: {
            read(from: RustBuffer): PrepareSendPaymentRequest;
            write(value: PrepareSendPaymentRequest, into: RustBuffer): void;
            allocationSize(value: PrepareSendPaymentRequest): number;
            lift(value: UniffiByteArray): PrepareSendPaymentRequest;
            lower(value: PrepareSendPaymentRequest): UniffiByteArray;
        };
        FfiConverterTypePrepareSendPaymentResponse: {
            read(from: RustBuffer): PrepareSendPaymentResponse;
            write(value: PrepareSendPaymentResponse, into: RustBuffer): void;
            allocationSize(value: PrepareSendPaymentResponse): number;
            lift(value: UniffiByteArray): PrepareSendPaymentResponse;
            lower(value: PrepareSendPaymentResponse): UniffiByteArray;
        };
        FfiConverterTypePrfProvider: FfiConverterObjectWithCallbacks<PrfProvider>;
        FfiConverterTypePrfProviderError: {
            read(from: RustBuffer): PrfProviderError;
            write(value: PrfProviderError, into: RustBuffer): void;
            allocationSize(value: PrfProviderError): number;
            lift(value: UniffiByteArray): PrfProviderError;
            lower(value: PrfProviderError): UniffiByteArray;
        };
        FfiConverterTypeProvisionalPayment: {
            read(from: RustBuffer): ProvisionalPayment;
            write(value: ProvisionalPayment, into: RustBuffer): void;
            allocationSize(value: ProvisionalPayment): number;
            lift(value: UniffiByteArray): ProvisionalPayment;
            lower(value: ProvisionalPayment): UniffiByteArray;
        };
        FfiConverterTypeProvisionalPaymentDetails: {
            read(from: RustBuffer): ProvisionalPaymentDetails;
            write(value: ProvisionalPaymentDetails, into: RustBuffer): void;
            allocationSize(value: ProvisionalPaymentDetails): number;
            lift(value: UniffiByteArray): ProvisionalPaymentDetails;
            lower(value: ProvisionalPaymentDetails): UniffiByteArray;
        };
        FfiConverterTypePublicKey: FfiConverter<UniffiByteArray, string>;
        FfiConverterTypePublicKeyBytes: {
            read(from: RustBuffer): PublicKeyBytes;
            write(value: PublicKeyBytes, into: RustBuffer): void;
            allocationSize(value: PublicKeyBytes): number;
            lift(value: UniffiByteArray): PublicKeyBytes;
            lower(value: PublicKeyBytes): UniffiByteArray;
        };
        FfiConverterTypeRate: {
            read(from: RustBuffer): Rate;
            write(value: Rate, into: RustBuffer): void;
            allocationSize(value: Rate): number;
            lift(value: UniffiByteArray): Rate;
            lower(value: Rate): UniffiByteArray;
        };
        FfiConverterTypeReceivePaymentMethod: {
            read(from: RustBuffer): ReceivePaymentMethod;
            write(value: ReceivePaymentMethod, into: RustBuffer): void;
            allocationSize(value: ReceivePaymentMethod): number;
            lift(value: UniffiByteArray): ReceivePaymentMethod;
            lower(value: ReceivePaymentMethod): UniffiByteArray;
        };
        FfiConverterTypeReceivePaymentRequest: {
            read(from: RustBuffer): ReceivePaymentRequest;
            write(value: ReceivePaymentRequest, into: RustBuffer): void;
            allocationSize(value: ReceivePaymentRequest): number;
            lift(value: UniffiByteArray): ReceivePaymentRequest;
            lower(value: ReceivePaymentRequest): UniffiByteArray;
        };
        FfiConverterTypeReceivePaymentResponse: {
            read(from: RustBuffer): ReceivePaymentResponse;
            write(value: ReceivePaymentResponse, into: RustBuffer): void;
            allocationSize(value: ReceivePaymentResponse): number;
            lift(value: UniffiByteArray): ReceivePaymentResponse;
            lower(value: ReceivePaymentResponse): UniffiByteArray;
        };
        FfiConverterTypeRecommendedFees: {
            read(from: RustBuffer): RecommendedFees;
            write(value: RecommendedFees, into: RustBuffer): void;
            allocationSize(value: RecommendedFees): number;
            lift(value: UniffiByteArray): RecommendedFees;
            lower(value: RecommendedFees): UniffiByteArray;
        };
        FfiConverterTypeRecord: {
            read(from: RustBuffer): Record;
            write(value: Record, into: RustBuffer): void;
            allocationSize(value: Record): number;
            lift(value: UniffiByteArray): Record;
            lower(value: Record): UniffiByteArray;
        };
        FfiConverterTypeRecordChange: {
            read(from: RustBuffer): RecordChange;
            write(value: RecordChange, into: RustBuffer): void;
            allocationSize(value: RecordChange): number;
            lift(value: UniffiByteArray): RecordChange;
            lower(value: RecordChange): UniffiByteArray;
        };
        FfiConverterTypeRecordId: {
            read(from: RustBuffer): RecordId;
            write(value: RecordId, into: RustBuffer): void;
            allocationSize(value: RecordId): number;
            lift(value: UniffiByteArray): RecordId;
            lower(value: RecordId): UniffiByteArray;
        };
        FfiConverterTypeRecoverableEcdsaSignatureBytes: {
            read(from: RustBuffer): RecoverableEcdsaSignatureBytes;
            write(value: RecoverableEcdsaSignatureBytes, into: RustBuffer): void;
            allocationSize(value: RecoverableEcdsaSignatureBytes): number;
            lift(value: UniffiByteArray): RecoverableEcdsaSignatureBytes;
            lower(value: RecoverableEcdsaSignatureBytes): UniffiByteArray;
        };
        FfiConverterTypeRefundDepositRequest: {
            read(from: RustBuffer): RefundDepositRequest;
            write(value: RefundDepositRequest, into: RustBuffer): void;
            allocationSize(value: RefundDepositRequest): number;
            lift(value: UniffiByteArray): RefundDepositRequest;
            lower(value: RefundDepositRequest): UniffiByteArray;
        };
        FfiConverterTypeRefundDepositResponse: {
            read(from: RustBuffer): RefundDepositResponse;
            write(value: RefundDepositResponse, into: RustBuffer): void;
            allocationSize(value: RefundDepositResponse): number;
            lift(value: UniffiByteArray): RefundDepositResponse;
            lower(value: RefundDepositResponse): UniffiByteArray;
        };
        FfiConverterTypeRegisterLightningAddressRequest: {
            read(from: RustBuffer): RegisterLightningAddressRequest;
            write(value: RegisterLightningAddressRequest, into: RustBuffer): void;
            allocationSize(value: RegisterLightningAddressRequest): number;
            lift(value: UniffiByteArray): RegisterLightningAddressRequest;
            lower(value: RegisterLightningAddressRequest): UniffiByteArray;
        };
        FfiConverterTypeRegisterRequest: {
            read(from: RustBuffer): RegisterRequest;
            write(value: RegisterRequest, into: RustBuffer): void;
            allocationSize(value: RegisterRequest): number;
            lift(value: UniffiByteArray): RegisterRequest;
            lower(value: RegisterRequest): UniffiByteArray;
        };
        FfiConverterTypeRegisterResponse: {
            read(from: RustBuffer): RegisterResponse;
            write(value: RegisterResponse, into: RustBuffer): void;
            allocationSize(value: RegisterResponse): number;
            lift(value: UniffiByteArray): RegisterResponse;
            lower(value: RegisterResponse): UniffiByteArray;
        };
        FfiConverterTypeRegisterWebhookRequest: {
            read(from: RustBuffer): RegisterWebhookRequest;
            write(value: RegisterWebhookRequest, into: RustBuffer): void;
            allocationSize(value: RegisterWebhookRequest): number;
            lift(value: UniffiByteArray): RegisterWebhookRequest;
            lower(value: RegisterWebhookRequest): UniffiByteArray;
        };
        FfiConverterTypeRegisterWebhookResponse: {
            read(from: RustBuffer): RegisterWebhookResponse;
            write(value: RegisterWebhookResponse, into: RustBuffer): void;
            allocationSize(value: RegisterWebhookResponse): number;
            lift(value: UniffiByteArray): RegisterWebhookResponse;
            lower(value: RegisterWebhookResponse): UniffiByteArray;
        };
        FfiConverterTypeResolvedStores: FfiConverterObject<ResolvedStoresInterface>;
        FfiConverterTypeRestClient: FfiConverterObjectWithCallbacks<RestClient>;
        FfiConverterTypeRestResponse: {
            read(from: RustBuffer): RestResponse;
            write(value: RestResponse, into: RustBuffer): void;
            allocationSize(value: RestResponse): number;
            lift(value: UniffiByteArray): RestResponse;
            lower(value: RestResponse): UniffiByteArray;
        };
        FfiConverterTypeSchnorrSignatureBytes: {
            read(from: RustBuffer): SchnorrSignatureBytes;
            write(value: SchnorrSignatureBytes, into: RustBuffer): void;
            allocationSize(value: SchnorrSignatureBytes): number;
            lift(value: UniffiByteArray): SchnorrSignatureBytes;
            lower(value: SchnorrSignatureBytes): UniffiByteArray;
        };
        FfiConverterTypeSdkBuilder: FfiConverterObject<SdkBuilderInterface>;
        FfiConverterTypeSdkContext: FfiConverterObject<SdkContextInterface>;
        FfiConverterTypeSdkContextConfig: {
            read(from: RustBuffer): SdkContextConfig;
            write(value: SdkContextConfig, into: RustBuffer): void;
            allocationSize(value: SdkContextConfig): number;
            lift(value: UniffiByteArray): SdkContextConfig;
            lower(value: SdkContextConfig): UniffiByteArray;
        };
        FfiConverterTypeSdkError: {
            read(from: RustBuffer): SdkError;
            write(value: SdkError, into: RustBuffer): void;
            allocationSize(value: SdkError): number;
            lift(value: UniffiByteArray): SdkError;
            lower(value: SdkError): UniffiByteArray;
        };
        FfiConverterTypeSdkEvent: {
            read(from: RustBuffer): SdkEvent;
            write(value: SdkEvent, into: RustBuffer): void;
            allocationSize(value: SdkEvent): number;
            lift(value: UniffiByteArray): SdkEvent;
            lower(value: SdkEvent): UniffiByteArray;
        };
        FfiConverterTypeSecretBytes: {
            read(from: RustBuffer): SecretBytes;
            write(value: SecretBytes, into: RustBuffer): void;
            allocationSize(value: SecretBytes): number;
            lift(value: UniffiByteArray): SecretBytes;
            lower(value: SecretBytes): UniffiByteArray;
        };
        FfiConverterTypeSeed: {
            read(from: RustBuffer): Seed;
            write(value: Seed, into: RustBuffer): void;
            allocationSize(value: Seed): number;
            lift(value: UniffiByteArray): Seed;
            lower(value: Seed): UniffiByteArray;
        };
        FfiConverterTypeSendOnchainFeeQuote: {
            read(from: RustBuffer): SendOnchainFeeQuote;
            write(value: SendOnchainFeeQuote, into: RustBuffer): void;
            allocationSize(value: SendOnchainFeeQuote): number;
            lift(value: UniffiByteArray): SendOnchainFeeQuote;
            lower(value: SendOnchainFeeQuote): UniffiByteArray;
        };
        FfiConverterTypeSendOnchainSpeedFeeQuote: {
            read(from: RustBuffer): SendOnchainSpeedFeeQuote;
            write(value: SendOnchainSpeedFeeQuote, into: RustBuffer): void;
            allocationSize(value: SendOnchainSpeedFeeQuote): number;
            lift(value: UniffiByteArray): SendOnchainSpeedFeeQuote;
            lower(value: SendOnchainSpeedFeeQuote): UniffiByteArray;
        };
        FfiConverterTypeSendPaymentMethod: {
            read(from: RustBuffer): SendPaymentMethod;
            write(value: SendPaymentMethod, into: RustBuffer): void;
            allocationSize(value: SendPaymentMethod): number;
            lift(value: UniffiByteArray): SendPaymentMethod;
            lower(value: SendPaymentMethod): UniffiByteArray;
        };
        FfiConverterTypeSendPaymentOptions: {
            read(from: RustBuffer): SendPaymentOptions;
            write(value: SendPaymentOptions, into: RustBuffer): void;
            allocationSize(value: SendPaymentOptions): number;
            lift(value: UniffiByteArray): SendPaymentOptions;
            lower(value: SendPaymentOptions): UniffiByteArray;
        };
        FfiConverterTypeSendPaymentRequest: {
            read(from: RustBuffer): SendPaymentRequest;
            write(value: SendPaymentRequest, into: RustBuffer): void;
            allocationSize(value: SendPaymentRequest): number;
            lift(value: UniffiByteArray): SendPaymentRequest;
            lower(value: SendPaymentRequest): UniffiByteArray;
        };
        FfiConverterTypeSendPaymentResponse: {
            read(from: RustBuffer): SendPaymentResponse;
            write(value: SendPaymentResponse, into: RustBuffer): void;
            allocationSize(value: SendPaymentResponse): number;
            lift(value: UniffiByteArray): SendPaymentResponse;
            lower(value: SendPaymentResponse): UniffiByteArray;
        };
        FfiConverterTypeServiceConnectivityError: {
            read(from: RustBuffer): ServiceConnectivityError;
            write(value: ServiceConnectivityError, into: RustBuffer): void;
            allocationSize(value: ServiceConnectivityError): number;
            lift(value: UniffiByteArray): ServiceConnectivityError;
            lower(value: ServiceConnectivityError): UniffiByteArray;
        };
        FfiConverterTypeServiceStatus: {
            read(from: RustBuffer): ServiceStatus;
            write(value: ServiceStatus, into: RustBuffer): void;
            allocationSize(value: ServiceStatus): number;
            lift(value: UniffiByteArray): ServiceStatus;
            lower(value: ServiceStatus): UniffiByteArray;
        };
        FfiConverterTypeSession: {
            read(from: RustBuffer): Session;
            write(value: Session, into: RustBuffer): void;
            allocationSize(value: Session): number;
            lift(value: UniffiByteArray): Session;
            lower(value: Session): UniffiByteArray;
        };
        FfiConverterTypeSessionStore: FfiConverterObjectWithCallbacks<SessionStore>;
        FfiConverterTypeSessionStoreError: {
            read(from: RustBuffer): SessionStoreError;
            write(value: SessionStoreError, into: RustBuffer): void;
            allocationSize(value: SessionStoreError): number;
            lift(value: UniffiByteArray): SessionStoreError;
            lower(value: SessionStoreError): UniffiByteArray;
        };
        FfiConverterTypeSetLnurlMetadataItem: {
            read(from: RustBuffer): SetLnurlMetadataItem;
            write(value: SetLnurlMetadataItem, into: RustBuffer): void;
            allocationSize(value: SetLnurlMetadataItem): number;
            lift(value: UniffiByteArray): SetLnurlMetadataItem;
            lower(value: SetLnurlMetadataItem): UniffiByteArray;
        };
        FfiConverterTypeSetupWalletRequest: {
            read(from: RustBuffer): SetupWalletRequest;
            write(value: SetupWalletRequest, into: RustBuffer): void;
            allocationSize(value: SetupWalletRequest): number;
            lift(value: UniffiByteArray): SetupWalletRequest;
            lower(value: SetupWalletRequest): UniffiByteArray;
        };
        FfiConverterTypeSignInRequest: {
            read(from: RustBuffer): SignInRequest;
            write(value: SignInRequest, into: RustBuffer): void;
            allocationSize(value: SignInRequest): number;
            lift(value: UniffiByteArray): SignInRequest;
            lower(value: SignInRequest): UniffiByteArray;
        };
        FfiConverterTypeSignInResponse: {
            read(from: RustBuffer): SignInResponse;
            write(value: SignInResponse, into: RustBuffer): void;
            allocationSize(value: SignInResponse): number;
            lift(value: UniffiByteArray): SignInResponse;
            lower(value: SignInResponse): UniffiByteArray;
        };
        FfiConverterTypeSignMessageRequest: {
            read(from: RustBuffer): SignMessageRequest;
            write(value: SignMessageRequest, into: RustBuffer): void;
            allocationSize(value: SignMessageRequest): number;
            lift(value: UniffiByteArray): SignMessageRequest;
            lower(value: SignMessageRequest): UniffiByteArray;
        };
        FfiConverterTypeSignMessageResponse: {
            read(from: RustBuffer): SignMessageResponse;
            write(value: SignMessageResponse, into: RustBuffer): void;
            allocationSize(value: SignMessageResponse): number;
            lift(value: UniffiByteArray): SignMessageResponse;
            lower(value: SignMessageResponse): UniffiByteArray;
        };
        FfiConverterTypeSignerError: {
            read(from: RustBuffer): SignerError;
            write(value: SignerError, into: RustBuffer): void;
            allocationSize(value: SignerError): number;
            lift(value: UniffiByteArray): SignerError;
            lower(value: SignerError): UniffiByteArray;
        };
        FfiConverterTypeSilentPaymentAddressDetails: {
            read(from: RustBuffer): SilentPaymentAddressDetails;
            write(value: SilentPaymentAddressDetails, into: RustBuffer): void;
            allocationSize(value: SilentPaymentAddressDetails): number;
            lift(value: UniffiByteArray): SilentPaymentAddressDetails;
            lower(value: SilentPaymentAddressDetails): UniffiByteArray;
        };
        FfiConverterTypeSourceAsset: {
            read(from: RustBuffer): SourceAsset;
            write(value: SourceAsset, into: RustBuffer): void;
            allocationSize(value: SourceAsset): number;
            lift(value: UniffiByteArray): SourceAsset;
            lower(value: SourceAsset): UniffiByteArray;
        };
        FfiConverterTypeSparkAddressDetails: {
            read(from: RustBuffer): SparkAddressDetails;
            write(value: SparkAddressDetails, into: RustBuffer): void;
            allocationSize(value: SparkAddressDetails): number;
            lift(value: UniffiByteArray): SparkAddressDetails;
            lower(value: SparkAddressDetails): UniffiByteArray;
        };
        FfiConverterTypeSparkConfig: {
            read(from: RustBuffer): SparkConfig;
            write(value: SparkConfig, into: RustBuffer): void;
            allocationSize(value: SparkConfig): number;
            lift(value: UniffiByteArray): SparkConfig;
            lower(value: SparkConfig): UniffiByteArray;
        };
        FfiConverterTypeSparkHtlcDetails: {
            read(from: RustBuffer): SparkHtlcDetails;
            write(value: SparkHtlcDetails, into: RustBuffer): void;
            allocationSize(value: SparkHtlcDetails): number;
            lift(value: UniffiByteArray): SparkHtlcDetails;
            lower(value: SparkHtlcDetails): UniffiByteArray;
        };
        FfiConverterTypeSparkHtlcOptions: {
            read(from: RustBuffer): SparkHtlcOptions;
            write(value: SparkHtlcOptions, into: RustBuffer): void;
            allocationSize(value: SparkHtlcOptions): number;
            lift(value: UniffiByteArray): SparkHtlcOptions;
            lower(value: SparkHtlcOptions): UniffiByteArray;
        };
        FfiConverterTypeSparkHtlcStatus: {
            read(from: RustBuffer): SparkHtlcStatus;
            write(value: SparkHtlcStatus, into: RustBuffer): void;
            allocationSize(value: SparkHtlcStatus): number;
            lift(value: UniffiByteArray): SparkHtlcStatus;
            lower(value: SparkHtlcStatus): UniffiByteArray;
        };
        FfiConverterTypeSparkInvoiceDetails: {
            read(from: RustBuffer): SparkInvoiceDetails;
            write(value: SparkInvoiceDetails, into: RustBuffer): void;
            allocationSize(value: SparkInvoiceDetails): number;
            lift(value: UniffiByteArray): SparkInvoiceDetails;
            lower(value: SparkInvoiceDetails): UniffiByteArray;
        };
        FfiConverterTypeSparkInvoicePaymentDetails: {
            read(from: RustBuffer): SparkInvoicePaymentDetails;
            write(value: SparkInvoicePaymentDetails, into: RustBuffer): void;
            allocationSize(value: SparkInvoicePaymentDetails): number;
            lift(value: UniffiByteArray): SparkInvoicePaymentDetails;
            lower(value: SparkInvoicePaymentDetails): UniffiByteArray;
        };
        FfiConverterTypeSparkSigningOperator: {
            read(from: RustBuffer): SparkSigningOperator;
            write(value: SparkSigningOperator, into: RustBuffer): void;
            allocationSize(value: SparkSigningOperator): number;
            lift(value: UniffiByteArray): SparkSigningOperator;
            lower(value: SparkSigningOperator): UniffiByteArray;
        };
        FfiConverterTypeSparkSspConfig: {
            read(from: RustBuffer): SparkSspConfig;
            write(value: SparkSspConfig, into: RustBuffer): void;
            allocationSize(value: SparkSspConfig): number;
            lift(value: UniffiByteArray): SparkSspConfig;
            lower(value: SparkSspConfig): UniffiByteArray;
        };
        FfiConverterTypeSparkStatus: {
            read(from: RustBuffer): SparkStatus;
            write(value: SparkStatus, into: RustBuffer): void;
            allocationSize(value: SparkStatus): number;
            lift(value: UniffiByteArray): SparkStatus;
            lower(value: SparkStatus): UniffiByteArray;
        };
        FfiConverterTypeStableBalanceActiveLabel: {
            read(from: RustBuffer): StableBalanceActiveLabel;
            write(value: StableBalanceActiveLabel, into: RustBuffer): void;
            allocationSize(value: StableBalanceActiveLabel): number;
            lift(value: UniffiByteArray): StableBalanceActiveLabel;
            lower(value: StableBalanceActiveLabel): UniffiByteArray;
        };
        FfiConverterTypeStableBalanceConfig: {
            read(from: RustBuffer): StableBalanceConfig;
            write(value: StableBalanceConfig, into: RustBuffer): void;
            allocationSize(value: StableBalanceConfig): number;
            lift(value: UniffiByteArray): StableBalanceConfig;
            lower(value: StableBalanceConfig): UniffiByteArray;
        };
        FfiConverterTypeStableBalanceToken: {
            read(from: RustBuffer): StableBalanceToken;
            write(value: StableBalanceToken, into: RustBuffer): void;
            allocationSize(value: StableBalanceToken): number;
            lift(value: UniffiByteArray): StableBalanceToken;
            lower(value: StableBalanceToken): UniffiByteArray;
        };
        FfiConverterTypeStorage: FfiConverterObjectWithCallbacks<Storage>;
        FfiConverterTypeStorageBackend: FfiConverterObject<StorageBackend>;
        FfiConverterTypeStorageError: {
            read(from: RustBuffer): StorageError;
            write(value: StorageError, into: RustBuffer): void;
            allocationSize(value: StorageError): number;
            lift(value: UniffiByteArray): StorageError;
            lower(value: StorageError): UniffiByteArray;
        };
        FfiConverterTypeStorageListPaymentsRequest: {
            read(from: RustBuffer): StorageListPaymentsRequest;
            write(value: StorageListPaymentsRequest, into: RustBuffer): void;
            allocationSize(value: StorageListPaymentsRequest): number;
            lift(value: UniffiByteArray): StorageListPaymentsRequest;
            lower(value: StorageListPaymentsRequest): UniffiByteArray;
        };
        FfiConverterTypeStoragePaymentDetailsFilter: {
            read(from: RustBuffer): StoragePaymentDetailsFilter;
            write(value: StoragePaymentDetailsFilter, into: RustBuffer): void;
            allocationSize(value: StoragePaymentDetailsFilter): number;
            lift(value: UniffiByteArray): StoragePaymentDetailsFilter;
            lower(value: StoragePaymentDetailsFilter): UniffiByteArray;
        };
        FfiConverterTypeStoredCrossChainSwap: {
            read(from: RustBuffer): StoredCrossChainSwap;
            write(value: StoredCrossChainSwap, into: RustBuffer): void;
            allocationSize(value: StoredCrossChainSwap): number;
            lift(value: UniffiByteArray): StoredCrossChainSwap;
            lower(value: StoredCrossChainSwap): UniffiByteArray;
        };
        FfiConverterTypeSuccessAction: {
            read(from: RustBuffer): SuccessAction;
            write(value: SuccessAction, into: RustBuffer): void;
            allocationSize(value: SuccessAction): number;
            lift(value: UniffiByteArray): SuccessAction;
            lower(value: SuccessAction): UniffiByteArray;
        };
        FfiConverterTypeSuccessActionProcessed: {
            read(from: RustBuffer): SuccessActionProcessed;
            write(value: SuccessActionProcessed, into: RustBuffer): void;
            allocationSize(value: SuccessActionProcessed): number;
            lift(value: UniffiByteArray): SuccessActionProcessed;
            lower(value: SuccessActionProcessed): UniffiByteArray;
        };
        FfiConverterTypeSymbol: {
            read(from: RustBuffer): Symbol;
            write(value: Symbol, into: RustBuffer): void;
            allocationSize(value: Symbol): number;
            lift(value: UniffiByteArray): Symbol;
            lower(value: Symbol): UniffiByteArray;
        };
        FfiConverterTypeSyncWalletRequest: {
            read(from: RustBuffer): SyncWalletRequest;
            write(value: SyncWalletRequest, into: RustBuffer): void;
            allocationSize(value: SyncWalletRequest): number;
            lift(value: UniffiByteArray): SyncWalletRequest;
            lower(value: SyncWalletRequest): UniffiByteArray;
        };
        FfiConverterTypeSyncWalletResponse: {
            read(from: RustBuffer): SyncWalletResponse;
            write(value: SyncWalletResponse, into: RustBuffer): void;
            allocationSize(value: SyncWalletResponse): number;
            lift(value: UniffiByteArray): SyncWalletResponse;
            lower(value: SyncWalletResponse): UniffiByteArray;
        };
        FfiConverterTypeTokenBalance: {
            read(from: RustBuffer): TokenBalance;
            write(value: TokenBalance, into: RustBuffer): void;
            allocationSize(value: TokenBalance): number;
            lift(value: UniffiByteArray): TokenBalance;
            lower(value: TokenBalance): UniffiByteArray;
        };
        FfiConverterTypeTokenIssuer: FfiConverterObject<TokenIssuerInterface>;
        FfiConverterTypeTokenMetadata: {
            read(from: RustBuffer): TokenMetadata;
            write(value: TokenMetadata, into: RustBuffer): void;
            allocationSize(value: TokenMetadata): number;
            lift(value: UniffiByteArray): TokenMetadata;
            lower(value: TokenMetadata): UniffiByteArray;
        };
        FfiConverterTypeTokenOptimizationConfig: {
            read(from: RustBuffer): TokenOptimizationConfig;
            write(value: TokenOptimizationConfig, into: RustBuffer): void;
            allocationSize(value: TokenOptimizationConfig): number;
            lift(value: UniffiByteArray): TokenOptimizationConfig;
            lower(value: TokenOptimizationConfig): UniffiByteArray;
        };
        FfiConverterTypeTokenTransactionType: {
            read(from: RustBuffer): TokenTransactionType;
            write(value: TokenTransactionType, into: RustBuffer): void;
            allocationSize(value: TokenTransactionType): number;
            lift(value: UniffiByteArray): TokenTransactionType;
            lower(value: TokenTransactionType): UniffiByteArray;
        };
        FfiConverterTypeTransferAuthorization: {
            read(from: RustBuffer): TransferAuthorization;
            write(value: TransferAuthorization, into: RustBuffer): void;
            allocationSize(value: TransferAuthorization): number;
            lift(value: UniffiByteArray): TransferAuthorization;
            lower(value: TransferAuthorization): UniffiByteArray;
        };
        FfiConverterTypeTurnkeyConfig: {
            read(from: RustBuffer): TurnkeyConfig;
            write(value: TurnkeyConfig, into: RustBuffer): void;
            allocationSize(value: TurnkeyConfig): number;
            lift(value: UniffiByteArray): TurnkeyConfig;
            lower(value: TurnkeyConfig): UniffiByteArray;
        };
        FfiConverterTypeTurnkeyRetryConfig: {
            read(from: RustBuffer): TurnkeyRetryConfig;
            write(value: TurnkeyRetryConfig, into: RustBuffer): void;
            allocationSize(value: TurnkeyRetryConfig): number;
            lift(value: UniffiByteArray): TurnkeyRetryConfig;
            lower(value: TurnkeyRetryConfig): UniffiByteArray;
        };
        FfiConverterTypeTxStatus: {
            read(from: RustBuffer): TxStatus;
            write(value: TxStatus, into: RustBuffer): void;
            allocationSize(value: TxStatus): number;
            lift(value: UniffiByteArray): TxStatus;
            lower(value: TxStatus): UniffiByteArray;
        };
        FfiConverterTypeUnfreezeIssuerTokenRequest: {
            read(from: RustBuffer): UnfreezeIssuerTokenRequest;
            write(value: UnfreezeIssuerTokenRequest, into: RustBuffer): void;
            allocationSize(value: UnfreezeIssuerTokenRequest): number;
            lift(value: UniffiByteArray): UnfreezeIssuerTokenRequest;
            lower(value: UnfreezeIssuerTokenRequest): UniffiByteArray;
        };
        FfiConverterTypeUnfreezeIssuerTokenResponse: {
            read(from: RustBuffer): UnfreezeIssuerTokenResponse;
            write(value: UnfreezeIssuerTokenResponse, into: RustBuffer): void;
            allocationSize(value: UnfreezeIssuerTokenResponse): number;
            lift(value: UniffiByteArray): UnfreezeIssuerTokenResponse;
            lower(value: UnfreezeIssuerTokenResponse): UniffiByteArray;
        };
        FfiConverterTypeUnregisterWebhookRequest: {
            read(from: RustBuffer): UnregisterWebhookRequest;
            write(value: UnregisterWebhookRequest, into: RustBuffer): void;
            allocationSize(value: UnregisterWebhookRequest): number;
            lift(value: UniffiByteArray): UnregisterWebhookRequest;
            lower(value: UnregisterWebhookRequest): UniffiByteArray;
        };
        FfiConverterTypeUnversionedRecordChange: {
            read(from: RustBuffer): UnversionedRecordChange;
            write(value: UnversionedRecordChange, into: RustBuffer): void;
            allocationSize(value: UnversionedRecordChange): number;
            lift(value: UniffiByteArray): UnversionedRecordChange;
            lower(value: UnversionedRecordChange): UniffiByteArray;
        };
        FfiConverterTypeUpdateContactRequest: {
            read(from: RustBuffer): UpdateContactRequest;
            write(value: UpdateContactRequest, into: RustBuffer): void;
            allocationSize(value: UpdateContactRequest): number;
            lift(value: UniffiByteArray): UpdateContactRequest;
            lower(value: UpdateContactRequest): UniffiByteArray;
        };
        FfiConverterTypeUpdateDepositPayload: {
            read(from: RustBuffer): UpdateDepositPayload;
            write(value: UpdateDepositPayload, into: RustBuffer): void;
            allocationSize(value: UpdateDepositPayload): number;
            lift(value: UniffiByteArray): UpdateDepositPayload;
            lower(value: UpdateDepositPayload): UniffiByteArray;
        };
        FfiConverterTypeUpdateUserSettingsRequest: {
            read(from: RustBuffer): UpdateUserSettingsRequest;
            write(value: UpdateUserSettingsRequest, into: RustBuffer): void;
            allocationSize(value: UpdateUserSettingsRequest): number;
            lift(value: UniffiByteArray): UpdateUserSettingsRequest;
            lower(value: UpdateUserSettingsRequest): UniffiByteArray;
        };
        FfiConverterTypeUrlSuccessActionData: {
            read(from: RustBuffer): UrlSuccessActionData;
            write(value: UrlSuccessActionData, into: RustBuffer): void;
            allocationSize(value: UrlSuccessActionData): number;
            lift(value: UniffiByteArray): UrlSuccessActionData;
            lower(value: UrlSuccessActionData): UniffiByteArray;
        };
        FfiConverterTypeUserSettings: {
            read(from: RustBuffer): UserSettings;
            write(value: UserSettings, into: RustBuffer): void;
            allocationSize(value: UserSettings): number;
            lift(value: UniffiByteArray): UserSettings;
            lower(value: UserSettings): UniffiByteArray;
        };
        FfiConverterTypeUtxo: {
            read(from: RustBuffer): Utxo;
            write(value: Utxo, into: RustBuffer): void;
            allocationSize(value: Utxo): number;
            lift(value: UniffiByteArray): Utxo;
            lower(value: Utxo): UniffiByteArray;
        };
        FfiConverterTypeWallet: {
            read(from: RustBuffer): Wallet;
            write(value: Wallet, into: RustBuffer): void;
            allocationSize(value: Wallet): number;
            lift(value: UniffiByteArray): Wallet;
            lower(value: Wallet): UniffiByteArray;
        };
        FfiConverterTypeWalletSetup: {
            read(from: RustBuffer): WalletSetup;
            write(value: WalletSetup, into: RustBuffer): void;
            allocationSize(value: WalletSetup): number;
            lift(value: UniffiByteArray): WalletSetup;
            lower(value: WalletSetup): UniffiByteArray;
        };
        FfiConverterTypeWebhook: {
            read(from: RustBuffer): Webhook;
            write(value: Webhook, into: RustBuffer): void;
            allocationSize(value: Webhook): number;
            lift(value: UniffiByteArray): Webhook;
            lower(value: Webhook): UniffiByteArray;
        };
        FfiConverterTypeWebhookEventType: {
            read(from: RustBuffer): WebhookEventType;
            write(value: WebhookEventType, into: RustBuffer): void;
            allocationSize(value: WebhookEventType): number;
            lift(value: UniffiByteArray): WebhookEventType;
            lower(value: WebhookEventType): UniffiByteArray;
        };
        FfiConverterTypeu128: {
            lift(value: Uint8Array<ArrayBufferLike>): bigint;
            lower(value: bigint): Uint8Array<ArrayBufferLike>;
            read(from: RustBuffer): bigint;
            write(value: bigint, into: RustBuffer): void;
            allocationSize(value: bigint): number;
        };
    };
}>;
export default _default;
//# sourceMappingURL=breez_sdk_spark.d.ts.map