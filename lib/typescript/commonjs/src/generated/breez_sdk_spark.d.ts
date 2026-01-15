import { type UniffiByteArray, type UniffiRustArcPtr, type UnsafeMutableRawPointer, FfiConverterObject, FfiConverterObjectWithCallbacks, RustBuffer, UniffiAbstractObject, destructorGuardSymbol, pointerLiteralSymbol, uniffiTypeNameSymbol } from 'uniffi-bindgen-react-native';
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
export declare function defaultConfig(network: Network): Config;
/**
 * Creates a default external signer from a mnemonic.
 *
 * This is a convenience factory method for creating a signer that can be used
 * with `connect_with_signer` or `SdkBuilder::new_with_signer`.
 *
 * # Arguments
 *
 * * `mnemonic` - BIP39 mnemonic phrase (12 or 24 words)
 * * `passphrase` - Optional passphrase for the mnemonic
 * * `network` - Network to use (Mainnet or Regtest)
 * * `key_set_config` - Optional key set configuration. If None, uses default configuration.
 *
 * # Returns
 *
 * Result containing the signer as `Arc<dyn ExternalSigner>`
 */
export declare function defaultExternalSigner(mnemonic: string, passphrase: string | undefined, network: Network, keySetConfig: KeySetConfig | undefined): ExternalSigner;
export declare function initLogging(logDir: string | undefined, appLogger: Logger | undefined, logFilter: string | undefined): void;
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
     * If set to true, the Spark private mode will be enabled on the first initialization of the SDK.
     * If set to false, no changes will be made to the Spark private mode.
     */
    privateEnabledDefault: boolean;
    /**
     * Configuration for leaf optimization.
     *
     * Leaf optimization controls the denominations of leaves that are held in the wallet.
     * Fewer, bigger leaves allow for more funds to be exited unilaterally.
     * More leaves allow payments to be made without needing a swap, reducing payment latency.
     */
    optimizationConfig: OptimizationConfig;
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
 * Request object for connecting to the Spark network using an external signer.
 *
 * This allows using a custom signer implementation instead of providing a seed directly.
 */
export type ConnectWithSignerRequest = {
    config: Config;
    signer: ExternalSigner;
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
 * Response from estimating a conversion, used when preparing a payment that requires conversion
 */
export type ConversionEstimate = {
    /**
     * The conversion options used for the estimate
     */
    options: ConversionOptions;
    /**
     * The estimated amount to be received from the conversion
     * Denominated in satoshis if converting from Bitcoin, otherwise in the token base units.
     */
    amount: U128;
    /**
     * The fee estimated for the conversion
     * Denominated in satoshis if converting from Bitcoin, otherwise in the token base units.
     */
    fee: U128;
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
export type ConversionInfo = {
    /**
     * The pool id associated with the conversion
     */
    poolId: string;
    /**
     * The conversion id shared by both sides of the conversion
     */
    conversionId: string;
    /**
     * The status of the conversion
     */
    status: ConversionStatus;
    /**
     * The fee paid for the conversion
     * Denominated in satoshis if converting from Bitcoin, otherwise in the token base units.
     */
    fee: U128 | undefined;
    /**
     * The purpose of the conversion
     */
    purpose: ConversionPurpose | undefined;
};
/**
 * Generated factory for {@link ConversionInfo} record objects.
 */
export declare const ConversionInfo: Readonly<{
    /**
     * Create a frozen instance of {@link ConversionInfo}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ConversionInfo> & Required<Omit<ConversionInfo, never>>) => ConversionInfo;
    /**
     * Create a frozen instance of {@link ConversionInfo}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ConversionInfo> & Required<Omit<ConversionInfo, never>>) => ConversionInfo;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ConversionInfo>;
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
     * a conversion is needed to fulfill the payment. Defaults to 50 bps (0.5%) if not set.
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
 * FFI-safe representation of `spark_wallet::AggregateFrostRequest`
 */
export type ExternalAggregateFrostRequest = {
    /**
     * The message that was signed
     */
    message: ArrayBuffer;
    /**
     * Statechain signatures as a list of identifier-signature pairs
     */
    statechainSignatures: Array<IdentifierSignaturePair>;
    /**
     * Statechain public keys as a list of identifier-publickey pairs
     */
    statechainPublicKeys: Array<IdentifierPublicKeyPair>;
    /**
     * The verifying key (33 bytes compressed)
     */
    verifyingKey: ArrayBuffer;
    /**
     * Statechain commitments as a list of identifier-commitment pairs
     */
    statechainCommitments: Array<IdentifierCommitmentPair>;
    /**
     * The self commitment
     */
    selfCommitment: ExternalSigningCommitments;
    /**
     * The public key (33 bytes compressed)
     */
    publicKey: ArrayBuffer;
    /**
     * The self signature share
     */
    selfSignature: ExternalFrostSignatureShare;
    /**
     * Optional adaptor public key (33 bytes compressed)
     */
    adaptorPublicKey: ArrayBuffer | undefined;
};
/**
 * Generated factory for {@link ExternalAggregateFrostRequest} record objects.
 */
export declare const ExternalAggregateFrostRequest: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalAggregateFrostRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalAggregateFrostRequest> & Required<Omit<ExternalAggregateFrostRequest, never>>) => ExternalAggregateFrostRequest;
    /**
     * Create a frozen instance of {@link ExternalAggregateFrostRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalAggregateFrostRequest> & Required<Omit<ExternalAggregateFrostRequest, never>>) => ExternalAggregateFrostRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalAggregateFrostRequest>;
}>;
/**
 * FFI-safe representation of `spark_wallet::EncryptedPrivateKey`
 */
export type ExternalEncryptedPrivateKey = {
    /**
     * The encrypted ciphertext
     */
    ciphertext: ArrayBuffer;
};
/**
 * Generated factory for {@link ExternalEncryptedPrivateKey} record objects.
 */
export declare const ExternalEncryptedPrivateKey: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalEncryptedPrivateKey}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalEncryptedPrivateKey> & Required<Omit<ExternalEncryptedPrivateKey, never>>) => ExternalEncryptedPrivateKey;
    /**
     * Create a frozen instance of {@link ExternalEncryptedPrivateKey}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalEncryptedPrivateKey> & Required<Omit<ExternalEncryptedPrivateKey, never>>) => ExternalEncryptedPrivateKey;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalEncryptedPrivateKey>;
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
 * FFI-safe representation of `k256::Scalar` (32 bytes)
 */
export type ExternalScalar = {
    /**
     * The 32-byte scalar value
     */
    bytes: ArrayBuffer;
};
/**
 * Generated factory for {@link ExternalScalar} record objects.
 */
export declare const ExternalScalar: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalScalar}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalScalar> & Required<Omit<ExternalScalar, never>>) => ExternalScalar;
    /**
     * Create a frozen instance of {@link ExternalScalar}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalScalar> & Required<Omit<ExternalScalar, never>>) => ExternalScalar;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalScalar>;
}>;
/**
 * FFI-safe representation of `spark_wallet::SecretShare`
 */
export type ExternalSecretShare = {
    /**
     * Number of shares required to recover the secret
     */
    threshold: number;
    /**
     * Index (x-coordinate) of the share as 32 bytes
     */
    index: ExternalScalar;
    /**
     * Share value (y-coordinate) as 32 bytes
     */
    share: ExternalScalar;
};
/**
 * Generated factory for {@link ExternalSecretShare} record objects.
 */
export declare const ExternalSecretShare: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalSecretShare}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalSecretShare> & Required<Omit<ExternalSecretShare, never>>) => ExternalSecretShare;
    /**
     * Create a frozen instance of {@link ExternalSecretShare}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalSecretShare> & Required<Omit<ExternalSecretShare, never>>) => ExternalSecretShare;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalSecretShare>;
}>;
/**
 * FFI-safe representation of `spark_wallet::SignFrostRequest`
 */
export type ExternalSignFrostRequest = {
    /**
     * The message to sign
     */
    message: ArrayBuffer;
    /**
     * The public key (33 bytes compressed)
     */
    publicKey: ArrayBuffer;
    /**
     * The private key source
     */
    privateKey: ExternalPrivateKeySource;
    /**
     * The verifying key (33 bytes compressed)
     */
    verifyingKey: ArrayBuffer;
    /**
     * The self nonce commitment
     */
    selfNonceCommitment: ExternalFrostCommitments;
    /**
     * Statechain commitments as a list of identifier-commitment pairs
     */
    statechainCommitments: Array<IdentifierCommitmentPair>;
    /**
     * Optional adaptor public key (33 bytes compressed)
     */
    adaptorPublicKey: ArrayBuffer | undefined;
};
/**
 * Generated factory for {@link ExternalSignFrostRequest} record objects.
 */
export declare const ExternalSignFrostRequest: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalSignFrostRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalSignFrostRequest> & Required<Omit<ExternalSignFrostRequest, never>>) => ExternalSignFrostRequest;
    /**
     * Create a frozen instance of {@link ExternalSignFrostRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalSignFrostRequest> & Required<Omit<ExternalSignFrostRequest, never>>) => ExternalSignFrostRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalSignFrostRequest>;
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
/**
 * FFI-safe representation of `spark_wallet::VerifiableSecretShare`
 */
export type ExternalVerifiableSecretShare = {
    /**
     * Base secret share containing threshold, index, and share value
     */
    secretShare: ExternalSecretShare;
    /**
     * Cryptographic proofs for share verification (each proof is 33 bytes compressed public key)
     */
    proofs: Array<ArrayBuffer>;
};
/**
 * Generated factory for {@link ExternalVerifiableSecretShare} record objects.
 */
export declare const ExternalVerifiableSecretShare: Readonly<{
    /**
     * Create a frozen instance of {@link ExternalVerifiableSecretShare}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ExternalVerifiableSecretShare> & Required<Omit<ExternalVerifiableSecretShare, never>>) => ExternalVerifiableSecretShare;
    /**
     * Create a frozen instance of {@link ExternalVerifiableSecretShare}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ExternalVerifiableSecretShare> & Required<Omit<ExternalVerifiableSecretShare, never>>) => ExternalVerifiableSecretShare;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<ExternalVerifiableSecretShare>;
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
 * Configuration for key set derivation.
 *
 * This struct encapsulates the parameters needed for BIP32 key derivation.
 */
export type KeySetConfig = {
    /**
     * The key set type which determines the derivation path
     */
    keySetType: KeySetType;
    /**
     * Controls the structure of the BIP derivation path
     */
    useAddressIndex: boolean;
    /**
     * Optional account number for key derivation
     */
    accountNumber: /*u32*/ number | undefined;
};
/**
 * Generated factory for {@link KeySetConfig} record objects.
 */
export declare const KeySetConfig: Readonly<{
    /**
     * Create a frozen instance of {@link KeySetConfig}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<KeySetConfig> & Required<Omit<KeySetConfig, never>>) => KeySetConfig;
    /**
     * Create a frozen instance of {@link KeySetConfig}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<KeySetConfig> & Required<Omit<KeySetConfig, never>>) => KeySetConfig;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<KeySetConfig>;
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
    lnurl: string;
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
    create: (partial: Partial<ListPaymentsRequest> & Required<Omit<ListPaymentsRequest, "typeFilter" | "statusFilter" | "assetFilter" | "paymentDetailsFilter" | "fromTimestamp" | "toTimestamp" | "offset" | "limit" | "sortAscending">>) => ListPaymentsRequest;
    /**
     * Create a frozen instance of {@link ListPaymentsRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ListPaymentsRequest> & Required<Omit<ListPaymentsRequest, "typeFilter" | "statusFilter" | "assetFilter" | "paymentDetailsFilter" | "fromTimestamp" | "toTimestamp" | "offset" | "limit" | "sortAscending">>) => ListPaymentsRequest;
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
export type OptimizationConfig = {
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
     * The desired multiplicity for the leaf set. Acceptable values are 0-5.
     *
     * Setting this to 0 will optimize for maximizing unilateral exit.
     * Higher values will optimize for minimizing transfer swaps, with higher values
     * being more aggressive.
     *
     * Default value is 1.
     */
    multiplicity: number;
};
/**
 * Generated factory for {@link OptimizationConfig} record objects.
 */
export declare const OptimizationConfig: Readonly<{
    /**
     * Create a frozen instance of {@link OptimizationConfig}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<OptimizationConfig> & Required<Omit<OptimizationConfig, never>>) => OptimizationConfig;
    /**
     * Create a frozen instance of {@link OptimizationConfig}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<OptimizationConfig> & Required<Omit<OptimizationConfig, never>>) => OptimizationConfig;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<OptimizationConfig>;
}>;
export type OptimizationProgress = {
    isRunning: boolean;
    currentRound: number;
    totalRounds: number;
};
/**
 * Generated factory for {@link OptimizationProgress} record objects.
 */
export declare const OptimizationProgress: Readonly<{
    /**
     * Create a frozen instance of {@link OptimizationProgress}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<OptimizationProgress> & Required<Omit<OptimizationProgress, never>>) => OptimizationProgress;
    /**
     * Create a frozen instance of {@link OptimizationProgress}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<OptimizationProgress> & Required<Omit<OptimizationProgress, never>>) => OptimizationProgress;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<OptimizationProgress>;
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
/**
 * Metadata associated with a payment that cannot be extracted from the Spark operator.
 */
export type PaymentMetadata = {
    parentPaymentId: string | undefined;
    lnurlPayInfo: LnurlPayInfo | undefined;
    lnurlWithdrawInfo: LnurlWithdrawInfo | undefined;
    lnurlDescription: string | undefined;
    conversionInfo: ConversionInfo | undefined;
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
    amountSats: bigint;
    payRequest: LnurlPayRequestDetails;
    comment: string | undefined;
    validateSuccessActionUrl: boolean | undefined;
};
/**
 * Generated factory for {@link PrepareLnurlPayRequest} record objects.
 */
export declare const PrepareLnurlPayRequest: Readonly<{
    /**
     * Create a frozen instance of {@link PrepareLnurlPayRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<PrepareLnurlPayRequest> & Required<Omit<PrepareLnurlPayRequest, "comment" | "validateSuccessActionUrl">>) => PrepareLnurlPayRequest;
    /**
     * Create a frozen instance of {@link PrepareLnurlPayRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<PrepareLnurlPayRequest> & Required<Omit<PrepareLnurlPayRequest, "comment" | "validateSuccessActionUrl">>) => PrepareLnurlPayRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<PrepareLnurlPayRequest>;
}>;
export type PrepareLnurlPayResponse = {
    amountSats: bigint;
    comment: string | undefined;
    payRequest: LnurlPayRequestDetails;
    feeSats: bigint;
    invoiceDetails: Bolt11InvoiceDetails;
    successAction: SuccessAction | undefined;
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
    paymentRequest: string;
    /**
     * Amount to send. By default is denominated in sats.
     * If a token identifier is provided, the amount will be denominated in the token base units.
     */
    amount: U128 | undefined;
    /**
     * If provided, the payment will be for a token.
     * May only be provided if the payment request is a spark address.
     */
    tokenIdentifier: string | undefined;
    /**
     * If provided, the payment will include a conversion step before sending the payment
     */
    conversionOptions: ConversionOptions | undefined;
};
/**
 * Generated factory for {@link PrepareSendPaymentRequest} record objects.
 */
export declare const PrepareSendPaymentRequest: Readonly<{
    /**
     * Create a frozen instance of {@link PrepareSendPaymentRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<PrepareSendPaymentRequest> & Required<Omit<PrepareSendPaymentRequest, "amount" | "tokenIdentifier" | "conversionOptions">>) => PrepareSendPaymentRequest;
    /**
     * Create a frozen instance of {@link PrepareSendPaymentRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<PrepareSendPaymentRequest> & Required<Omit<PrepareSendPaymentRequest, "amount" | "tokenIdentifier" | "conversionOptions">>) => PrepareSendPaymentRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<PrepareSendPaymentRequest>;
}>;
export type PrepareSendPaymentResponse = {
    paymentMethod: SendPaymentMethod;
    /**
     * Amount to send. By default is denominated in sats.
     * If a token identifier is provided, the amount will be denominated in the token base units.
     */
    amount: U128;
    /**
     * The presence of this field indicates that the payment is for a token.
     * If empty, it is a Bitcoin payment.
     */
    tokenIdentifier: string | undefined;
    /**
     * When set, the payment will include a conversion step before sending the payment
     */
    conversionEstimate: ConversionEstimate | undefined;
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
/**
 * FFI-safe representation of a private key (32 bytes)
 */
export type PrivateKeyBytes = {
    bytes: ArrayBuffer;
};
/**
 * Generated factory for {@link PrivateKeyBytes} record objects.
 */
export declare const PrivateKeyBytes: Readonly<{
    /**
     * Create a frozen instance of {@link PrivateKeyBytes}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<PrivateKeyBytes> & Required<Omit<PrivateKeyBytes, never>>) => PrivateKeyBytes;
    /**
     * Create a frozen instance of {@link PrivateKeyBytes}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<PrivateKeyBytes> & Required<Omit<PrivateKeyBytes, never>>) => PrivateKeyBytes;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<PrivateKeyBytes>;
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
    revision: bigint;
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
     * The optional idempotency key for all Spark based transfers (excludes token payments).
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
export type UpdateUserSettingsRequest = {
    sparkPrivateModeEnabled: boolean | undefined;
};
/**
 * Generated factory for {@link UpdateUserSettingsRequest} record objects.
 */
export declare const UpdateUserSettingsRequest: Readonly<{
    /**
     * Create a frozen instance of {@link UpdateUserSettingsRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<UpdateUserSettingsRequest> & Required<Omit<UpdateUserSettingsRequest, never>>) => UpdateUserSettingsRequest;
    /**
     * Create a frozen instance of {@link UpdateUserSettingsRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<UpdateUserSettingsRequest> & Required<Omit<UpdateUserSettingsRequest, never>>) => UpdateUserSettingsRequest;
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
export declare enum ConversionPurpose_Tags {
    OngoingPayment = "OngoingPayment",
    SelfTransfer = "SelfTransfer"
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
     * The conversion was successful
     */
    Completed = 0,
    /**
     * The conversion failed and no refund was made yet, which requires action by the SDK to
     * perform the refund. This can happen if there was a failure during the conversion process.
     */
    RefundNeeded = 1,
    /**
     * The conversion failed and a refund was made
     */
    Refunded = 2
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
export declare enum ExternalPrivateKeySource_Tags {
    Derived = "Derived",
    Encrypted = "Encrypted"
}
/**
 * FFI-safe representation of `spark_wallet::PrivateKeySource`
 */
export declare const ExternalPrivateKeySource: Readonly<{
    instanceOf: (obj: any) => obj is ExternalPrivateKeySource;
    Derived: {
        new (inner: {
            nodeId: ExternalTreeNodeId;
        }): {
            readonly tag: ExternalPrivateKeySource_Tags.Derived;
            readonly inner: Readonly<{
                nodeId: ExternalTreeNodeId;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ExternalPrivateKeySource";
        };
        "new"(inner: {
            nodeId: ExternalTreeNodeId;
        }): {
            readonly tag: ExternalPrivateKeySource_Tags.Derived;
            readonly inner: Readonly<{
                nodeId: ExternalTreeNodeId;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ExternalPrivateKeySource";
        };
        instanceOf(obj: any): obj is {
            readonly tag: ExternalPrivateKeySource_Tags.Derived;
            readonly inner: Readonly<{
                nodeId: ExternalTreeNodeId;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ExternalPrivateKeySource";
        };
    };
    Encrypted: {
        new (inner: {
            key: ExternalEncryptedPrivateKey;
        }): {
            readonly tag: ExternalPrivateKeySource_Tags.Encrypted;
            readonly inner: Readonly<{
                key: ExternalEncryptedPrivateKey;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ExternalPrivateKeySource";
        };
        "new"(inner: {
            key: ExternalEncryptedPrivateKey;
        }): {
            readonly tag: ExternalPrivateKeySource_Tags.Encrypted;
            readonly inner: Readonly<{
                key: ExternalEncryptedPrivateKey;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ExternalPrivateKeySource";
        };
        instanceOf(obj: any): obj is {
            readonly tag: ExternalPrivateKeySource_Tags.Encrypted;
            readonly inner: Readonly<{
                key: ExternalEncryptedPrivateKey;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ExternalPrivateKeySource";
        };
    };
}>;
/**
 * FFI-safe representation of `spark_wallet::PrivateKeySource`
 */
export type ExternalPrivateKeySource = InstanceType<(typeof ExternalPrivateKeySource)[keyof Omit<typeof ExternalPrivateKeySource, 'instanceOf'>]>;
export declare enum ExternalSecretToSplit_Tags {
    PrivateKey = "PrivateKey",
    Preimage = "Preimage"
}
/**
 * FFI-safe representation of `spark_wallet::SecretToSplit`
 */
export declare const ExternalSecretToSplit: Readonly<{
    instanceOf: (obj: any) => obj is ExternalSecretToSplit;
    PrivateKey: {
        new (inner: {
            source: ExternalPrivateKeySource;
        }): {
            readonly tag: ExternalSecretToSplit_Tags.PrivateKey;
            readonly inner: Readonly<{
                source: ExternalPrivateKeySource;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ExternalSecretToSplit";
        };
        "new"(inner: {
            source: ExternalPrivateKeySource;
        }): {
            readonly tag: ExternalSecretToSplit_Tags.PrivateKey;
            readonly inner: Readonly<{
                source: ExternalPrivateKeySource;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ExternalSecretToSplit";
        };
        instanceOf(obj: any): obj is {
            readonly tag: ExternalSecretToSplit_Tags.PrivateKey;
            readonly inner: Readonly<{
                source: ExternalPrivateKeySource;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ExternalSecretToSplit";
        };
    };
    Preimage: {
        new (inner: {
            data: ArrayBuffer;
        }): {
            readonly tag: ExternalSecretToSplit_Tags.Preimage;
            readonly inner: Readonly<{
                data: ArrayBuffer;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ExternalSecretToSplit";
        };
        "new"(inner: {
            data: ArrayBuffer;
        }): {
            readonly tag: ExternalSecretToSplit_Tags.Preimage;
            readonly inner: Readonly<{
                data: ArrayBuffer;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ExternalSecretToSplit";
        };
        instanceOf(obj: any): obj is {
            readonly tag: ExternalSecretToSplit_Tags.Preimage;
            readonly inner: Readonly<{
                data: ArrayBuffer;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ExternalSecretToSplit";
        };
    };
}>;
/**
 * FFI-safe representation of `spark_wallet::SecretToSplit`
 */
export type ExternalSecretToSplit = InstanceType<(typeof ExternalSecretToSplit)[keyof Omit<typeof ExternalSecretToSplit, 'instanceOf'>]>;
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
    SparkInvoice = "SparkInvoice"
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
}>;
export type InputType = InstanceType<(typeof InputType)[keyof Omit<typeof InputType, 'instanceOf'>]>;
export declare enum KeySetType {
    Default = 0,
    Taproot = 1,
    NativeSegwit = 2,
    WrappedSegwit = 3,
    Legacy = 4
}
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
export declare enum OptimizationEvent_Tags {
    Started = "Started",
    RoundCompleted = "RoundCompleted",
    Completed = "Completed",
    Cancelled = "Cancelled",
    Failed = "Failed",
    Skipped = "Skipped"
}
export declare const OptimizationEvent: Readonly<{
    instanceOf: (obj: any) => obj is OptimizationEvent;
    Started: {
        new (inner: {
            totalRounds: number;
        }): {
            readonly tag: OptimizationEvent_Tags.Started;
            readonly inner: Readonly<{
                totalRounds: number;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "OptimizationEvent";
        };
        "new"(inner: {
            totalRounds: number;
        }): {
            readonly tag: OptimizationEvent_Tags.Started;
            readonly inner: Readonly<{
                totalRounds: number;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "OptimizationEvent";
        };
        instanceOf(obj: any): obj is {
            readonly tag: OptimizationEvent_Tags.Started;
            readonly inner: Readonly<{
                totalRounds: number;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "OptimizationEvent";
        };
    };
    RoundCompleted: {
        new (inner: {
            currentRound: number;
            totalRounds: number;
        }): {
            readonly tag: OptimizationEvent_Tags.RoundCompleted;
            readonly inner: Readonly<{
                currentRound: number;
                totalRounds: number;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "OptimizationEvent";
        };
        "new"(inner: {
            currentRound: number;
            totalRounds: number;
        }): {
            readonly tag: OptimizationEvent_Tags.RoundCompleted;
            readonly inner: Readonly<{
                currentRound: number;
                totalRounds: number;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "OptimizationEvent";
        };
        instanceOf(obj: any): obj is {
            readonly tag: OptimizationEvent_Tags.RoundCompleted;
            readonly inner: Readonly<{
                currentRound: number;
                totalRounds: number;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "OptimizationEvent";
        };
    };
    Completed: {
        new (): {
            readonly tag: OptimizationEvent_Tags.Completed;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "OptimizationEvent";
        };
        "new"(): {
            readonly tag: OptimizationEvent_Tags.Completed;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "OptimizationEvent";
        };
        instanceOf(obj: any): obj is {
            readonly tag: OptimizationEvent_Tags.Completed;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "OptimizationEvent";
        };
    };
    Cancelled: {
        new (): {
            readonly tag: OptimizationEvent_Tags.Cancelled;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "OptimizationEvent";
        };
        "new"(): {
            readonly tag: OptimizationEvent_Tags.Cancelled;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "OptimizationEvent";
        };
        instanceOf(obj: any): obj is {
            readonly tag: OptimizationEvent_Tags.Cancelled;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "OptimizationEvent";
        };
    };
    Failed: {
        new (inner: {
            error: string;
        }): {
            readonly tag: OptimizationEvent_Tags.Failed;
            readonly inner: Readonly<{
                error: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "OptimizationEvent";
        };
        "new"(inner: {
            error: string;
        }): {
            readonly tag: OptimizationEvent_Tags.Failed;
            readonly inner: Readonly<{
                error: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "OptimizationEvent";
        };
        instanceOf(obj: any): obj is {
            readonly tag: OptimizationEvent_Tags.Failed;
            readonly inner: Readonly<{
                error: string;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "OptimizationEvent";
        };
    };
    Skipped: {
        new (): {
            readonly tag: OptimizationEvent_Tags.Skipped;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "OptimizationEvent";
        };
        "new"(): {
            readonly tag: OptimizationEvent_Tags.Skipped;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "OptimizationEvent";
        };
        instanceOf(obj: any): obj is {
            readonly tag: OptimizationEvent_Tags.Skipped;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "OptimizationEvent";
        };
    };
}>;
export type OptimizationEvent = InstanceType<(typeof OptimizationEvent)[keyof Omit<typeof OptimizationEvent, 'instanceOf'>]>;
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
             * The preimage of the paid invoice (proof of payment).
             */ preimage: string | undefined;
            /**
             * Represents the Bolt11/Bolt12 invoice associated with a payment
             * In the case of a Send payment, this is the invoice paid by the user
             * In the case of a Receive payment, this is the invoice paid to the user
             */ invoice: string;
            /**
             * The payment hash of the invoice
             */ paymentHash: string;
            /**
             * The invoice destination/payee pubkey
             */ destinationPubkey: string;
            /**
             * Lnurl payment information if this was an lnurl payment.
             */ lnurlPayInfo: LnurlPayInfo | undefined;
            /**
             * Lnurl withdrawal information if this was an lnurl payment.
             */ lnurlWithdrawInfo: LnurlWithdrawInfo | undefined;
            /**
             * Lnurl receive information if this was a received lnurl payment.
             */ lnurlReceiveMetadata: LnurlReceiveMetadata | undefined;
        }): {
            readonly tag: PaymentDetails_Tags.Lightning;
            readonly inner: Readonly<{
                description: string | undefined;
                preimage: string | undefined;
                invoice: string;
                paymentHash: string;
                destinationPubkey: string;
                lnurlPayInfo: LnurlPayInfo | undefined;
                lnurlWithdrawInfo: LnurlWithdrawInfo | undefined;
                lnurlReceiveMetadata: LnurlReceiveMetadata | undefined;
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
             * The preimage of the paid invoice (proof of payment).
             */ preimage: string | undefined;
            /**
             * Represents the Bolt11/Bolt12 invoice associated with a payment
             * In the case of a Send payment, this is the invoice paid by the user
             * In the case of a Receive payment, this is the invoice paid to the user
             */ invoice: string;
            /**
             * The payment hash of the invoice
             */ paymentHash: string;
            /**
             * The invoice destination/payee pubkey
             */ destinationPubkey: string;
            /**
             * Lnurl payment information if this was an lnurl payment.
             */ lnurlPayInfo: LnurlPayInfo | undefined;
            /**
             * Lnurl withdrawal information if this was an lnurl payment.
             */ lnurlWithdrawInfo: LnurlWithdrawInfo | undefined;
            /**
             * Lnurl receive information if this was a received lnurl payment.
             */ lnurlReceiveMetadata: LnurlReceiveMetadata | undefined;
        }): {
            readonly tag: PaymentDetails_Tags.Lightning;
            readonly inner: Readonly<{
                description: string | undefined;
                preimage: string | undefined;
                invoice: string;
                paymentHash: string;
                destinationPubkey: string;
                lnurlPayInfo: LnurlPayInfo | undefined;
                lnurlWithdrawInfo: LnurlWithdrawInfo | undefined;
                lnurlReceiveMetadata: LnurlReceiveMetadata | undefined;
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
                preimage: string | undefined;
                invoice: string;
                paymentHash: string;
                destinationPubkey: string;
                lnurlPayInfo: LnurlPayInfo | undefined;
                lnurlWithdrawInfo: LnurlWithdrawInfo | undefined;
                lnurlReceiveMetadata: LnurlReceiveMetadata | undefined;
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
        }): {
            readonly tag: PaymentDetails_Tags.Deposit;
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
            readonly tag: PaymentDetails_Tags.Deposit;
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
            readonly tag: PaymentDetails_Tags.Deposit;
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
}>;
export type PaymentDetails = InstanceType<(typeof PaymentDetails)[keyof Omit<typeof PaymentDetails, 'instanceOf'>]>;
export declare enum PaymentDetailsFilter_Tags {
    Spark = "Spark",
    Token = "Token"
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
        }): {
            readonly tag: PaymentDetailsFilter_Tags.Token;
            readonly inner: Readonly<{
                conversionRefundNeeded: boolean | undefined;
                txHash: string | undefined;
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
        }): {
            readonly tag: PaymentDetailsFilter_Tags.Token;
            readonly inner: Readonly<{
                conversionRefundNeeded: boolean | undefined;
                txHash: string | undefined;
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
        new (): {
            readonly tag: ReceivePaymentMethod_Tags.BitcoinAddress;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ReceivePaymentMethod";
        };
        "new"(): {
            readonly tag: ReceivePaymentMethod_Tags.BitcoinAddress;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "ReceivePaymentMethod";
        };
        instanceOf(obj: any): obj is {
            readonly tag: ReceivePaymentMethod_Tags.BitcoinAddress;
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
        }): {
            readonly tag: ReceivePaymentMethod_Tags.Bolt11Invoice;
            readonly inner: Readonly<{
                description: string;
                amountSats: /*u64*/ bigint | undefined;
                expirySecs: /*u32*/ number | undefined;
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
        }): {
            readonly tag: ReceivePaymentMethod_Tags.Bolt11Invoice;
            readonly inner: Readonly<{
                description: string;
                amountSats: /*u64*/ bigint | undefined;
                expirySecs: /*u32*/ number | undefined;
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
    Optimization = "Optimization"
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
    Optimization: {
        new (inner: {
            optimizationEvent: OptimizationEvent;
        }): {
            readonly tag: SdkEvent_Tags.Optimization;
            readonly inner: Readonly<{
                optimizationEvent: OptimizationEvent;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkEvent";
        };
        "new"(inner: {
            optimizationEvent: OptimizationEvent;
        }): {
            readonly tag: SdkEvent_Tags.Optimization;
            readonly inner: Readonly<{
                optimizationEvent: OptimizationEvent;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkEvent";
        };
        instanceOf(obj: any): obj is {
            readonly tag: SdkEvent_Tags.Optimization;
            readonly inner: Readonly<{
                optimizationEvent: OptimizationEvent;
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
    SparkInvoice = "SparkInvoice"
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
            confirmationSpeed: OnchainConfirmationSpeed;
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
            confirmationSpeed: OnchainConfirmationSpeed;
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
export declare enum StorageError_Tags {
    Implementation = "Implementation",
    InitializationError = "InitializationError",
    Serialization = "Serialization"
}
/**
 * Errors that can occur during storage operations
 */
export declare const StorageError: Readonly<{
    instanceOf: (obj: any) => obj is StorageError;
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
}>;
/**
 * Errors that can occur during storage operations
 */
export type StorageError = InstanceType<(typeof StorageError)[keyof Omit<typeof StorageError, 'instanceOf'>]>;
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
export declare enum SyncStorageError_Tags {
    Implementation = "Implementation",
    InitializationError = "InitializationError",
    Serialization = "Serialization"
}
/**
 * Errors that can occur during storage operations
 */
export declare const SyncStorageError: Readonly<{
    instanceOf: (obj: any) => obj is SyncStorageError;
    Implementation: {
        new (v0: string): {
            readonly tag: SyncStorageError_Tags.Implementation;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SyncStorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: SyncStorageError_Tags.Implementation;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SyncStorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: SyncStorageError_Tags.Implementation;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SyncStorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: SyncStorageError_Tags.Implementation;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SyncStorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: SyncStorageError_Tags.Implementation;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SyncStorageError";
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
            readonly tag: SyncStorageError_Tags.InitializationError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SyncStorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: SyncStorageError_Tags.InitializationError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SyncStorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: SyncStorageError_Tags.InitializationError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SyncStorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: SyncStorageError_Tags.InitializationError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SyncStorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: SyncStorageError_Tags.InitializationError;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SyncStorageError";
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
            readonly tag: SyncStorageError_Tags.Serialization;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SyncStorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        "new"(v0: string): {
            readonly tag: SyncStorageError_Tags.Serialization;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SyncStorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        instanceOf(obj: any): obj is {
            readonly tag: SyncStorageError_Tags.Serialization;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SyncStorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        hasInner(obj: any): obj is {
            readonly tag: SyncStorageError_Tags.Serialization;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SyncStorageError";
            name: string;
            message: string;
            stack?: string;
            cause?: unknown;
        };
        getInner(obj: {
            readonly tag: SyncStorageError_Tags.Serialization;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SyncStorageError";
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
 * Errors that can occur during storage operations
 */
export type SyncStorageError = InstanceType<(typeof SyncStorageError)[keyof Omit<typeof SyncStorageError, 'instanceOf'>]>;
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
     * Registers a listener to receive SDK events
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
     * Cancels the ongoing leaf optimization.
     *
     * This method cancels the ongoing optimization and waits for it to fully stop.
     * The current round will complete before stopping. This method blocks
     * until the optimization has fully stopped and leaves reserved for optimization
     * are available again.
     *
     * If no optimization is running, this method returns immediately.
     */
    cancelLeafOptimization(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
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
    deleteLightningAddress(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Stops the SDK's background tasks
     *
     * This method stops the background tasks started by the `start()` method.
     * It should be called before your application terminates to ensure proper cleanup.
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
     * Returns the balance of the wallet in satoshis
     */
    getInfo(request: GetInfoRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<GetInfoResponse>;
    /**
     * Returns the current optimization progress snapshot.
     */
    getLeafOptimizationProgress(): OptimizationProgress;
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
     * Performs LNURL-auth with the service.
     *
     * This method implements the LNURL-auth protocol as specified in LUD-04 and LUD-05.
     * It derives a domain-specific linking key, signs the challenge, and sends the
     * authentication request to the service.
     *
     * # Arguments
     *
     * * `request_data` - The parsed LNURL-auth request details obtained from [`parse`]
     *
     * # Returns
     *
     * * `Ok(LnurlCallbackStatus::Ok)` - Authentication was successful
     * * `Ok(LnurlCallbackStatus::ErrorStatus{reason})` - Service returned an error
     * * `Err(SdkError)` - An error occurred during the authentication process
     *
     * # Example
     *
     * ```rust,no_run
     * # use breez_sdk_spark::{BreezSdk, InputType};
     * # async fn example(sdk: BreezSdk) -> Result<(), Box<dyn std::error::Error>> {
     * // 1. Parse the LNURL-auth string
     * let input = sdk.parse("lnurl1...").await?;
     * let auth_request = match input {
     * InputType::LnurlAuth(data) => data,
     * _ => return Err("Not an auth request".into()),
     * };
     *
     * // 2. Show user the domain and get confirmation
     * println!("Authenticate with {}?", auth_request.domain);
     *
     * // 3. Perform authentication
     * let status = sdk.lnurl_auth(auth_request).await?;
     * match status {
     * breez_sdk_spark::LnurlCallbackStatus::Ok => println!("Success!"),
     * breez_sdk_spark::LnurlCallbackStatus::ErrorStatus { error_details } => {
     * println!("Error: {}", error_details.reason)
     * }
     * }
     * # Ok(())
     * # }
     * ```
     *
     * # See Also
     *
     * * LUD-04: <https://github.com/lnurl/luds/blob/luds/04.md>
     * * LUD-05: <https://github.com/lnurl/luds/blob/luds/05.md>
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
    registerLightningAddress(request: RegisterLightningAddressRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<LightningAddressInfo>;
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
     * Starts leaf optimization in the background.
     *
     * This method spawns the optimization work in a background task and returns
     * immediately. Progress is reported via events.
     * If optimization is already running, no new task will be started.
     */
    startLeafOptimization(): void;
    /**
     * Synchronizes the wallet with the Spark network
     */
    syncWallet(request: SyncWalletRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<SyncWalletResponse>;
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
     * Registers a listener to receive SDK events
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
     * Cancels the ongoing leaf optimization.
     *
     * This method cancels the ongoing optimization and waits for it to fully stop.
     * The current round will complete before stopping. This method blocks
     * until the optimization has fully stopped and leaves reserved for optimization
     * are available again.
     *
     * If no optimization is running, this method returns immediately.
     */
    cancelLeafOptimization(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
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
    deleteLightningAddress(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * Stops the SDK's background tasks
     *
     * This method stops the background tasks started by the `start()` method.
     * It should be called before your application terminates to ensure proper cleanup.
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
     * Returns the balance of the wallet in satoshis
     */
    getInfo(request: GetInfoRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<GetInfoResponse>;
    /**
     * Returns the current optimization progress snapshot.
     */
    getLeafOptimizationProgress(): OptimizationProgress;
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
     * Performs LNURL-auth with the service.
     *
     * This method implements the LNURL-auth protocol as specified in LUD-04 and LUD-05.
     * It derives a domain-specific linking key, signs the challenge, and sends the
     * authentication request to the service.
     *
     * # Arguments
     *
     * * `request_data` - The parsed LNURL-auth request details obtained from [`parse`]
     *
     * # Returns
     *
     * * `Ok(LnurlCallbackStatus::Ok)` - Authentication was successful
     * * `Ok(LnurlCallbackStatus::ErrorStatus{reason})` - Service returned an error
     * * `Err(SdkError)` - An error occurred during the authentication process
     *
     * # Example
     *
     * ```rust,no_run
     * # use breez_sdk_spark::{BreezSdk, InputType};
     * # async fn example(sdk: BreezSdk) -> Result<(), Box<dyn std::error::Error>> {
     * // 1. Parse the LNURL-auth string
     * let input = sdk.parse("lnurl1...").await?;
     * let auth_request = match input {
     * InputType::LnurlAuth(data) => data,
     * _ => return Err("Not an auth request".into()),
     * };
     *
     * // 2. Show user the domain and get confirmation
     * println!("Authenticate with {}?", auth_request.domain);
     *
     * // 3. Perform authentication
     * let status = sdk.lnurl_auth(auth_request).await?;
     * match status {
     * breez_sdk_spark::LnurlCallbackStatus::Ok => println!("Success!"),
     * breez_sdk_spark::LnurlCallbackStatus::ErrorStatus { error_details } => {
     * println!("Error: {}", error_details.reason)
     * }
     * }
     * # Ok(())
     * # }
     * ```
     *
     * # See Also
     *
     * * LUD-04: <https://github.com/lnurl/luds/blob/luds/04.md>
     * * LUD-05: <https://github.com/lnurl/luds/blob/luds/05.md>
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
    registerLightningAddress(request: RegisterLightningAddressRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<LightningAddressInfo>;
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
     * Starts leaf optimization in the background.
     *
     * This method spawns the optimization work in a background task and returns
     * immediately. Progress is reported via events.
     * If optimization is already running, no new task will be started.
     */
    startLeafOptimization(): void;
    /**
     * Synchronizes the wallet with the Spark network
     */
    syncWallet(request: SyncWalletRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<SyncWalletResponse>;
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
export interface ExternalSigner {
    /**
     * Returns the identity public key as 33 bytes (compressed secp256k1 key).
     */
    identityPublicKey(): PublicKeyBytes;
    /**
     * Derives a public key for the given BIP32 derivation path.
     *
     * # Arguments
     * * `path` - BIP32 derivation path as a string (e.g., "m/44'/0'/0'/0/0")
     *
     * # Returns
     * The derived public key as 33 bytes, or a `SignerError`
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
    eciesEncrypt(message: ArrayBuffer, path: string, asyncOpts_?: {
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
     */
    eciesDecrypt(message: ArrayBuffer, path: string, asyncOpts_?: {
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
     */
    hmacSha256(message: ArrayBuffer, path: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<HashedMessageBytes>;
    /**
     * Generates Frost signing commitments for multi-party signing.
     *
     * # Returns
     * Frost commitments with nonces, or a `SignerError`
     */
    generateFrostSigningCommitments(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ExternalFrostCommitments>;
    /**
     * Gets the public key for a specific tree node in the Spark wallet.
     *
     * # Arguments
     * * `id` - The tree node identifier
     *
     * # Returns
     * The public key for the node, or an error string
     */
    getPublicKeyForNode(id: ExternalTreeNodeId, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<PublicKeyBytes>;
    /**
     * Generates a random private key.
     *
     * # Returns
     * A randomly generated private key source, or an error string
     */
    generateRandomKey(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ExternalPrivateKeySource>;
    /**
     * Gets a static deposit private key source by index.
     *
     * # Arguments
     * * `index` - The index of the static deposit key
     *
     * # Returns
     * The private key source, or an error string
     */
    getStaticDepositPrivateKeySource(index: number, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ExternalPrivateKeySource>;
    /**
     * Gets a static deposit private key by index.
     *
     * # Arguments
     * * `index` - The index of the static deposit key
     *
     * # Returns
     * The 32-byte private key, or an error string
     */
    getStaticDepositPrivateKey(index: number, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<PrivateKeyBytes>;
    /**
     * Gets a static deposit public key by index.
     *
     * # Arguments
     * * `index` - The index of the static deposit key
     *
     * # Returns
     * The 33-byte public key, or an error string
     */
    getStaticDepositPublicKey(index: number, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<PublicKeyBytes>;
    /**
     * Subtracts one private key from another.
     *
     * # Arguments
     * * `signing_key` - The first private key source
     * * `new_signing_key` - The second private key source to subtract
     *
     * # Returns
     * The resulting private key source, or an error string
     */
    subtractPrivateKeys(signingKey: ExternalPrivateKeySource, newSigningKey: ExternalPrivateKeySource, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ExternalPrivateKeySource>;
    /**
     * Splits a secret with proofs using Shamir's Secret Sharing.
     *
     * # Arguments
     * * `secret` - The secret to split
     * * `threshold` - Minimum number of shares needed to reconstruct
     * * `num_shares` - Total number of shares to create
     *
     * # Returns
     * Vector of verifiable secret shares, or an error string
     */
    splitSecret(secret: ExternalSecretToSplit, threshold: number, numShares: number, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<ExternalVerifiableSecretShare>>;
    /**
     * Encrypts a private key for a specific receiver's public key.
     *
     * # Arguments
     * * `private_key` - The encrypted private key to re-encrypt
     * * `receiver_public_key` - The receiver's 33-byte public key
     *
     * # Returns
     * Encrypted data for the receiver, or an error string
     */
    encryptPrivateKeyForReceiver(privateKey: ExternalEncryptedPrivateKey, receiverPublicKey: PublicKeyBytes, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ArrayBuffer>;
    /**
     * Gets the public key from a private key source.
     *
     * # Arguments
     * * `private_key` - The private key source
     *
     * # Returns
     * The corresponding 33-byte public key, or an error string
     */
    getPublicKeyFromPrivateKeySource(privateKey: ExternalPrivateKeySource, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<PublicKeyBytes>;
    /**
     * Signs using Frost protocol (multi-party signing).
     *
     * # Arguments
     * * `request` - The Frost signing request
     *
     * # Returns
     * A signature share, or an error string
     */
    signFrost(request: ExternalSignFrostRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ExternalFrostSignatureShare>;
    /**
     * Aggregates Frost signature shares into a final signature.
     *
     * # Arguments
     * * `request` - The Frost aggregation request
     *
     * # Returns
     * The aggregated Frost signature, or an error string
     */
    aggregateFrostSignatures(request: ExternalAggregateFrostRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ExternalFrostSignature>;
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
export declare class ExternalSignerImpl extends UniffiAbstractObject implements ExternalSigner {
    readonly [uniffiTypeNameSymbol] = "ExternalSignerImpl";
    readonly [destructorGuardSymbol]: UniffiRustArcPtr;
    readonly [pointerLiteralSymbol]: UnsafeMutableRawPointer;
    private constructor();
    /**
     * Returns the identity public key as 33 bytes (compressed secp256k1 key).
     */
    identityPublicKey(): PublicKeyBytes;
    /**
     * Derives a public key for the given BIP32 derivation path.
     *
     * # Arguments
     * * `path` - BIP32 derivation path as a string (e.g., "m/44'/0'/0'/0/0")
     *
     * # Returns
     * The derived public key as 33 bytes, or a `SignerError`
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
    eciesEncrypt(message: ArrayBuffer, path: string, asyncOpts_?: {
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
     */
    eciesDecrypt(message: ArrayBuffer, path: string, asyncOpts_?: {
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
     */
    hmacSha256(message: ArrayBuffer, path: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<HashedMessageBytes>;
    /**
     * Generates Frost signing commitments for multi-party signing.
     *
     * # Returns
     * Frost commitments with nonces, or a `SignerError`
     */
    generateFrostSigningCommitments(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ExternalFrostCommitments>;
    /**
     * Gets the public key for a specific tree node in the Spark wallet.
     *
     * # Arguments
     * * `id` - The tree node identifier
     *
     * # Returns
     * The public key for the node, or an error string
     */
    getPublicKeyForNode(id: ExternalTreeNodeId, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<PublicKeyBytes>;
    /**
     * Generates a random private key.
     *
     * # Returns
     * A randomly generated private key source, or an error string
     */
    generateRandomKey(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ExternalPrivateKeySource>;
    /**
     * Gets a static deposit private key source by index.
     *
     * # Arguments
     * * `index` - The index of the static deposit key
     *
     * # Returns
     * The private key source, or an error string
     */
    getStaticDepositPrivateKeySource(index: number, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ExternalPrivateKeySource>;
    /**
     * Gets a static deposit private key by index.
     *
     * # Arguments
     * * `index` - The index of the static deposit key
     *
     * # Returns
     * The 32-byte private key, or an error string
     */
    getStaticDepositPrivateKey(index: number, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<PrivateKeyBytes>;
    /**
     * Gets a static deposit public key by index.
     *
     * # Arguments
     * * `index` - The index of the static deposit key
     *
     * # Returns
     * The 33-byte public key, or an error string
     */
    getStaticDepositPublicKey(index: number, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<PublicKeyBytes>;
    /**
     * Subtracts one private key from another.
     *
     * # Arguments
     * * `signing_key` - The first private key source
     * * `new_signing_key` - The second private key source to subtract
     *
     * # Returns
     * The resulting private key source, or an error string
     */
    subtractPrivateKeys(signingKey: ExternalPrivateKeySource, newSigningKey: ExternalPrivateKeySource, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ExternalPrivateKeySource>;
    /**
     * Splits a secret with proofs using Shamir's Secret Sharing.
     *
     * # Arguments
     * * `secret` - The secret to split
     * * `threshold` - Minimum number of shares needed to reconstruct
     * * `num_shares` - Total number of shares to create
     *
     * # Returns
     * Vector of verifiable secret shares, or an error string
     */
    splitSecret(secret: ExternalSecretToSplit, threshold: number, numShares: number, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<ExternalVerifiableSecretShare>>;
    /**
     * Encrypts a private key for a specific receiver's public key.
     *
     * # Arguments
     * * `private_key` - The encrypted private key to re-encrypt
     * * `receiver_public_key` - The receiver's 33-byte public key
     *
     * # Returns
     * Encrypted data for the receiver, or an error string
     */
    encryptPrivateKeyForReceiver(privateKey: ExternalEncryptedPrivateKey, receiverPublicKey: PublicKeyBytes, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ArrayBuffer>;
    /**
     * Gets the public key from a private key source.
     *
     * # Arguments
     * * `private_key` - The private key source
     *
     * # Returns
     * The corresponding 33-byte public key, or an error string
     */
    getPublicKeyFromPrivateKeySource(privateKey: ExternalPrivateKeySource, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<PublicKeyBytes>;
    /**
     * Signs using Frost protocol (multi-party signing).
     *
     * # Arguments
     * * `request` - The Frost signing request
     *
     * # Returns
     * A signature share, or an error string
     */
    signFrost(request: ExternalSignFrostRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ExternalFrostSignatureShare>;
    /**
     * Aggregates Frost signature shares into a final signature.
     *
     * # Arguments
     * * `request` - The Frost aggregation request
     *
     * # Returns
     * The aggregated Frost signature, or an error string
     */
    aggregateFrostSignatures(request: ExternalAggregateFrostRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<ExternalFrostSignature>;
    /**
     * {@inheritDoc uniffi-bindgen-react-native#UniffiAbstractObject.uniffiDestroy}
     */
    uniffiDestroy(): void;
    static instanceOf(obj: any): obj is ExternalSignerImpl;
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
 * This interface is used to observe outgoing payments before Lightning, Spark and onchain Bitcoin payments.
 * If the implementation returns an error, the payment is cancelled.
 */
export interface PaymentObserver {
    /**
     * Called before Lightning, Spark or onchain Bitcoin payments are made
     */
    beforeSend(payments: Array<ProvisionalPayment>, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
}
/**
 * This interface is used to observe outgoing payments before Lightning, Spark and onchain Bitcoin payments.
 * If the implementation returns an error, the payment is cancelled.
 */
export declare class PaymentObserverImpl extends UniffiAbstractObject implements PaymentObserver {
    readonly [uniffiTypeNameSymbol] = "PaymentObserverImpl";
    readonly [destructorGuardSymbol]: UniffiRustArcPtr;
    readonly [pointerLiteralSymbol]: UnsafeMutableRawPointer;
    private constructor();
    /**
     * Called before Lightning, Spark or onchain Bitcoin payments are made
     */
    beforeSend(payments: Array<ProvisionalPayment>, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * {@inheritDoc uniffi-bindgen-react-native#UniffiAbstractObject.uniffiDestroy}
     */
    uniffiDestroy(): void;
    static instanceOf(obj: any): obj is PaymentObserverImpl;
}
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
    /**
     * Sets the key set type to be used by the SDK.
     * Arguments:
     * - `config`: Key set configuration containing the key set type, address index flag, and optional account number.
     */
    withKeySet(config: KeySetConfig, asyncOpts_?: {
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
     * Sets the real-time sync storage implementation to be used by the SDK.
     * Arguments:
     * - `storage`: The sync storage implementation to be used.
     */
    withRealTimeSyncStorage(storage: SyncStorage, asyncOpts_?: {
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
     * Sets the storage implementation to be used by the SDK.
     * Arguments:
     * - `storage`: The storage implementation to be used.
     */
    withStorage(storage: Storage, asyncOpts_?: {
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
     * Builds the `BreezSdk` instance with the configured components.
     */
    build(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<BreezSdkInterface>;
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
    /**
     * Sets the key set type to be used by the SDK.
     * Arguments:
     * - `config`: Key set configuration containing the key set type, address index flag, and optional account number.
     */
    withKeySet(config: KeySetConfig, asyncOpts_?: {
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
     * Sets the real-time sync storage implementation to be used by the SDK.
     * Arguments:
     * - `storage`: The sync storage implementation to be used.
     */
    withRealTimeSyncStorage(storage: SyncStorage, asyncOpts_?: {
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
     * Sets the storage implementation to be used by the SDK.
     * Arguments:
     * - `storage`: The storage implementation to be used.
     */
    withStorage(storage: Storage, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    /**
     * {@inheritDoc uniffi-bindgen-react-native#UniffiAbstractObject.uniffiDestroy}
     */
    uniffiDestroy(): void;
    static instanceOf(obj: any): obj is SdkBuilder;
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
    listPayments(request: ListPaymentsRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<Payment>>;
    /**
     * Inserts a payment into storage
     *
     * # Arguments
     *
     * * `payment` - The payment to insert
     *
     * # Returns
     *
     * Success or a `StorageError`
     */
    insertPayment(payment: Payment, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
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
    setPaymentMetadata(paymentId: string, metadata: PaymentMetadata, asyncOpts_?: {
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
     * Add a deposit to storage
     * # Arguments
     *
     * * `txid` - The transaction ID of the deposit
     * * `vout` - The output index of the deposit
     * * `amount_sats` - The amount of the deposit in sats
     *
     * # Returns
     *
     * Success or a `StorageError`
     */
    addDeposit(txid: string, vout: number, amountSats: bigint, asyncOpts_?: {
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
    listPayments(request: ListPaymentsRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<Payment>>;
    /**
     * Inserts a payment into storage
     *
     * # Arguments
     *
     * * `payment` - The payment to insert
     *
     * # Returns
     *
     * Success or a `StorageError`
     */
    insertPayment(payment: Payment, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
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
    setPaymentMetadata(paymentId: string, metadata: PaymentMetadata, asyncOpts_?: {
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
     * Add a deposit to storage
     * # Arguments
     *
     * * `txid` - The transaction ID of the deposit
     * * `vout` - The output index of the deposit
     * * `amount_sats` - The amount of the deposit in sats
     *
     * # Returns
     *
     * Success or a `StorageError`
     */
    addDeposit(txid: string, vout: number, amountSats: bigint, asyncOpts_?: {
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
     * {@inheritDoc uniffi-bindgen-react-native#UniffiAbstractObject.uniffiDestroy}
     */
    uniffiDestroy(): void;
    static instanceOf(obj: any): obj is StorageImpl;
}
export interface SyncStorage {
    addOutgoingChange(record: UnversionedRecordChange, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise</*u64*/ bigint>;
    completeOutgoingSync(record: Record, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    getPendingOutgoingChanges(limit: number, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<OutgoingChange>>;
    /**
     * Get the revision number of the last synchronized record
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
     * Update revision numbers of pending outgoing records to be higher than the given revision
     */
    rebasePendingOutgoingRecords(revision: bigint, asyncOpts_?: {
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
export declare class SyncStorageImpl extends UniffiAbstractObject implements SyncStorage {
    readonly [uniffiTypeNameSymbol] = "SyncStorageImpl";
    readonly [destructorGuardSymbol]: UniffiRustArcPtr;
    readonly [pointerLiteralSymbol]: UnsafeMutableRawPointer;
    private constructor();
    addOutgoingChange(record: UnversionedRecordChange, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise</*u64*/ bigint>;
    completeOutgoingSync(record: Record, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<void>;
    getPendingOutgoingChanges(limit: number, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<OutgoingChange>>;
    /**
     * Get the revision number of the last synchronized record
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
     * Update revision numbers of pending outgoing records to be higher than the given revision
     */
    rebasePendingOutgoingRecords(revision: bigint, asyncOpts_?: {
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
    static instanceOf(obj: any): obj is SyncStorageImpl;
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
        FfiConverterTypeAssetFilter: {
            read(from: RustBuffer): AssetFilter;
            write(value: AssetFilter, into: RustBuffer): void;
            allocationSize(value: AssetFilter): number;
            lift(value: UniffiByteArray): AssetFilter;
            lower(value: AssetFilter): UniffiByteArray;
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
        FfiConverterTypeChainApiType: {
            read(from: RustBuffer): ChainApiType;
            write(value: ChainApiType, into: RustBuffer): void;
            allocationSize(value: ChainApiType): number;
            lift(value: UniffiByteArray): ChainApiType;
            lower(value: ChainApiType): UniffiByteArray;
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
        FfiConverterTypeConnectWithSignerRequest: {
            read(from: RustBuffer): ConnectWithSignerRequest;
            write(value: ConnectWithSignerRequest, into: RustBuffer): void;
            allocationSize(value: ConnectWithSignerRequest): number;
            lift(value: UniffiByteArray): ConnectWithSignerRequest;
            lower(value: ConnectWithSignerRequest): UniffiByteArray;
        };
        FfiConverterTypeConversionEstimate: {
            read(from: RustBuffer): ConversionEstimate;
            write(value: ConversionEstimate, into: RustBuffer): void;
            allocationSize(value: ConversionEstimate): number;
            lift(value: UniffiByteArray): ConversionEstimate;
            lower(value: ConversionEstimate): UniffiByteArray;
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
        FfiConverterTypeConversionPurpose: {
            read(from: RustBuffer): ConversionPurpose;
            write(value: ConversionPurpose, into: RustBuffer): void;
            allocationSize(value: ConversionPurpose): number;
            lift(value: UniffiByteArray): ConversionPurpose;
            lower(value: ConversionPurpose): UniffiByteArray;
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
        FfiConverterTypeEcdsaSignatureBytes: {
            read(from: RustBuffer): EcdsaSignatureBytes;
            write(value: EcdsaSignatureBytes, into: RustBuffer): void;
            allocationSize(value: EcdsaSignatureBytes): number;
            lift(value: UniffiByteArray): EcdsaSignatureBytes;
            lower(value: EcdsaSignatureBytes): UniffiByteArray;
        };
        FfiConverterTypeExternalAggregateFrostRequest: {
            read(from: RustBuffer): ExternalAggregateFrostRequest;
            write(value: ExternalAggregateFrostRequest, into: RustBuffer): void;
            allocationSize(value: ExternalAggregateFrostRequest): number;
            lift(value: UniffiByteArray): ExternalAggregateFrostRequest;
            lower(value: ExternalAggregateFrostRequest): UniffiByteArray;
        };
        FfiConverterTypeExternalEncryptedPrivateKey: {
            read(from: RustBuffer): ExternalEncryptedPrivateKey;
            write(value: ExternalEncryptedPrivateKey, into: RustBuffer): void;
            allocationSize(value: ExternalEncryptedPrivateKey): number;
            lift(value: UniffiByteArray): ExternalEncryptedPrivateKey;
            lower(value: ExternalEncryptedPrivateKey): UniffiByteArray;
        };
        FfiConverterTypeExternalFrostCommitments: {
            read(from: RustBuffer): ExternalFrostCommitments;
            write(value: ExternalFrostCommitments, into: RustBuffer): void;
            allocationSize(value: ExternalFrostCommitments): number;
            lift(value: UniffiByteArray): ExternalFrostCommitments;
            lower(value: ExternalFrostCommitments): UniffiByteArray;
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
        FfiConverterTypeExternalPrivateKeySource: {
            read(from: RustBuffer): ExternalPrivateKeySource;
            write(value: ExternalPrivateKeySource, into: RustBuffer): void;
            allocationSize(value: ExternalPrivateKeySource): number;
            lift(value: UniffiByteArray): ExternalPrivateKeySource;
            lower(value: ExternalPrivateKeySource): UniffiByteArray;
        };
        FfiConverterTypeExternalScalar: {
            read(from: RustBuffer): ExternalScalar;
            write(value: ExternalScalar, into: RustBuffer): void;
            allocationSize(value: ExternalScalar): number;
            lift(value: UniffiByteArray): ExternalScalar;
            lower(value: ExternalScalar): UniffiByteArray;
        };
        FfiConverterTypeExternalSecretShare: {
            read(from: RustBuffer): ExternalSecretShare;
            write(value: ExternalSecretShare, into: RustBuffer): void;
            allocationSize(value: ExternalSecretShare): number;
            lift(value: UniffiByteArray): ExternalSecretShare;
            lower(value: ExternalSecretShare): UniffiByteArray;
        };
        FfiConverterTypeExternalSecretToSplit: {
            read(from: RustBuffer): ExternalSecretToSplit;
            write(value: ExternalSecretToSplit, into: RustBuffer): void;
            allocationSize(value: ExternalSecretToSplit): number;
            lift(value: UniffiByteArray): ExternalSecretToSplit;
            lower(value: ExternalSecretToSplit): UniffiByteArray;
        };
        FfiConverterTypeExternalSignFrostRequest: {
            read(from: RustBuffer): ExternalSignFrostRequest;
            write(value: ExternalSignFrostRequest, into: RustBuffer): void;
            allocationSize(value: ExternalSignFrostRequest): number;
            lift(value: UniffiByteArray): ExternalSignFrostRequest;
            lower(value: ExternalSignFrostRequest): UniffiByteArray;
        };
        FfiConverterTypeExternalSigner: FfiConverterObjectWithCallbacks<ExternalSigner>;
        FfiConverterTypeExternalSigningCommitments: {
            read(from: RustBuffer): ExternalSigningCommitments;
            write(value: ExternalSigningCommitments, into: RustBuffer): void;
            allocationSize(value: ExternalSigningCommitments): number;
            lift(value: UniffiByteArray): ExternalSigningCommitments;
            lower(value: ExternalSigningCommitments): UniffiByteArray;
        };
        FfiConverterTypeExternalTreeNodeId: {
            read(from: RustBuffer): ExternalTreeNodeId;
            write(value: ExternalTreeNodeId, into: RustBuffer): void;
            allocationSize(value: ExternalTreeNodeId): number;
            lift(value: UniffiByteArray): ExternalTreeNodeId;
            lower(value: ExternalTreeNodeId): UniffiByteArray;
        };
        FfiConverterTypeExternalVerifiableSecretShare: {
            read(from: RustBuffer): ExternalVerifiableSecretShare;
            write(value: ExternalVerifiableSecretShare, into: RustBuffer): void;
            allocationSize(value: ExternalVerifiableSecretShare): number;
            lift(value: UniffiByteArray): ExternalVerifiableSecretShare;
            lower(value: ExternalVerifiableSecretShare): UniffiByteArray;
        };
        FfiConverterTypeFee: {
            read(from: RustBuffer): Fee;
            write(value: Fee, into: RustBuffer): void;
            allocationSize(value: Fee): number;
            lift(value: UniffiByteArray): Fee;
            lower(value: Fee): UniffiByteArray;
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
        FfiConverterTypeKeySetConfig: {
            read(from: RustBuffer): KeySetConfig;
            write(value: KeySetConfig, into: RustBuffer): void;
            allocationSize(value: KeySetConfig): number;
            lift(value: UniffiByteArray): KeySetConfig;
            lower(value: KeySetConfig): UniffiByteArray;
        };
        FfiConverterTypeKeySetType: {
            read(from: RustBuffer): KeySetType;
            write(value: KeySetType, into: RustBuffer): void;
            allocationSize(value: KeySetType): number;
            lift(value: UniffiByteArray): KeySetType;
            lower(value: KeySetType): UniffiByteArray;
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
        FfiConverterTypeOptimizationConfig: {
            read(from: RustBuffer): OptimizationConfig;
            write(value: OptimizationConfig, into: RustBuffer): void;
            allocationSize(value: OptimizationConfig): number;
            lift(value: UniffiByteArray): OptimizationConfig;
            lower(value: OptimizationConfig): UniffiByteArray;
        };
        FfiConverterTypeOptimizationEvent: {
            read(from: RustBuffer): OptimizationEvent;
            write(value: OptimizationEvent, into: RustBuffer): void;
            allocationSize(value: OptimizationEvent): number;
            lift(value: UniffiByteArray): OptimizationEvent;
            lower(value: OptimizationEvent): UniffiByteArray;
        };
        FfiConverterTypeOptimizationProgress: {
            read(from: RustBuffer): OptimizationProgress;
            write(value: OptimizationProgress, into: RustBuffer): void;
            allocationSize(value: OptimizationProgress): number;
            lift(value: UniffiByteArray): OptimizationProgress;
            lower(value: OptimizationProgress): UniffiByteArray;
        };
        FfiConverterTypeOutgoingChange: {
            read(from: RustBuffer): OutgoingChange;
            write(value: OutgoingChange, into: RustBuffer): void;
            allocationSize(value: OutgoingChange): number;
            lift(value: UniffiByteArray): OutgoingChange;
            lower(value: OutgoingChange): UniffiByteArray;
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
        FfiConverterTypePrivateKeyBytes: {
            read(from: RustBuffer): PrivateKeyBytes;
            write(value: PrivateKeyBytes, into: RustBuffer): void;
            allocationSize(value: PrivateKeyBytes): number;
            lift(value: UniffiByteArray): PrivateKeyBytes;
            lower(value: PrivateKeyBytes): UniffiByteArray;
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
        FfiConverterTypeSdkEvent: {
            read(from: RustBuffer): SdkEvent;
            write(value: SdkEvent, into: RustBuffer): void;
            allocationSize(value: SdkEvent): number;
            lift(value: UniffiByteArray): SdkEvent;
            lower(value: SdkEvent): UniffiByteArray;
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
        FfiConverterTypeSetLnurlMetadataItem: {
            read(from: RustBuffer): SetLnurlMetadataItem;
            write(value: SetLnurlMetadataItem, into: RustBuffer): void;
            allocationSize(value: SetLnurlMetadataItem): number;
            lift(value: UniffiByteArray): SetLnurlMetadataItem;
            lower(value: SetLnurlMetadataItem): UniffiByteArray;
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
        FfiConverterTypeSilentPaymentAddressDetails: {
            read(from: RustBuffer): SilentPaymentAddressDetails;
            write(value: SilentPaymentAddressDetails, into: RustBuffer): void;
            allocationSize(value: SilentPaymentAddressDetails): number;
            lift(value: UniffiByteArray): SilentPaymentAddressDetails;
            lower(value: SilentPaymentAddressDetails): UniffiByteArray;
        };
        FfiConverterTypeSparkAddressDetails: {
            read(from: RustBuffer): SparkAddressDetails;
            write(value: SparkAddressDetails, into: RustBuffer): void;
            allocationSize(value: SparkAddressDetails): number;
            lift(value: UniffiByteArray): SparkAddressDetails;
            lower(value: SparkAddressDetails): UniffiByteArray;
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
        FfiConverterTypeStorage: FfiConverterObjectWithCallbacks<Storage>;
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
        FfiConverterTypeSyncStorage: FfiConverterObjectWithCallbacks<SyncStorage>;
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
        FfiConverterTypeUnversionedRecordChange: {
            read(from: RustBuffer): UnversionedRecordChange;
            write(value: UnversionedRecordChange, into: RustBuffer): void;
            allocationSize(value: UnversionedRecordChange): number;
            lift(value: UniffiByteArray): UnversionedRecordChange;
            lower(value: UnversionedRecordChange): UniffiByteArray;
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