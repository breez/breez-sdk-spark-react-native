import { type UniffiByteArray, type UniffiRustArcPtr, type UnsafeMutableRawPointer, FfiConverterObjectWithCallbacks, RustBuffer, UniffiAbstractObject, destructorGuardSymbol, pointerLiteralSymbol, uniffiTypeNameSymbol } from 'uniffi-bindgen-react-native';
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<AesSuccessActionData> & Required<Omit<AesSuccessActionData, never>>) => AesSuccessActionData;
    /**
     * Create a frozen instance of {@link AesSuccessActionData}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<AesSuccessActionData> & Required<Omit<AesSuccessActionData, never>>) => AesSuccessActionData;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<AesSuccessActionDataDecrypted> & Required<Omit<AesSuccessActionDataDecrypted, never>>) => AesSuccessActionDataDecrypted;
    /**
     * Create a frozen instance of {@link AesSuccessActionDataDecrypted}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<AesSuccessActionDataDecrypted> & Required<Omit<AesSuccessActionDataDecrypted, never>>) => AesSuccessActionDataDecrypted;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<Bip21Details> & Required<Omit<Bip21Details, never>>) => Bip21Details;
    /**
     * Create a frozen instance of {@link Bip21Details}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<Bip21Details> & Required<Omit<Bip21Details, never>>) => Bip21Details;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<Bip21Extra> & Required<Omit<Bip21Extra, never>>) => Bip21Extra;
    /**
     * Create a frozen instance of {@link Bip21Extra}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<Bip21Extra> & Required<Omit<Bip21Extra, never>>) => Bip21Extra;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<BitcoinAddressDetails> & Required<Omit<BitcoinAddressDetails, never>>) => BitcoinAddressDetails;
    /**
     * Create a frozen instance of {@link BitcoinAddressDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<BitcoinAddressDetails> & Required<Omit<BitcoinAddressDetails, never>>) => BitcoinAddressDetails;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<Bolt11Invoice> & Required<Omit<Bolt11Invoice, never>>) => Bolt11Invoice;
    /**
     * Create a frozen instance of {@link Bolt11Invoice}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<Bolt11Invoice> & Required<Omit<Bolt11Invoice, never>>) => Bolt11Invoice;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<Bolt11InvoiceDetails> & Required<Omit<Bolt11InvoiceDetails, never>>) => Bolt11InvoiceDetails;
    /**
     * Create a frozen instance of {@link Bolt11InvoiceDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<Bolt11InvoiceDetails> & Required<Omit<Bolt11InvoiceDetails, never>>) => Bolt11InvoiceDetails;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<Bolt11RouteHint> & Required<Omit<Bolt11RouteHint, never>>) => Bolt11RouteHint;
    /**
     * Create a frozen instance of {@link Bolt11RouteHint}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<Bolt11RouteHint> & Required<Omit<Bolt11RouteHint, never>>) => Bolt11RouteHint;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<Bolt11RouteHintHop> & Required<Omit<Bolt11RouteHintHop, never>>) => Bolt11RouteHintHop;
    /**
     * Create a frozen instance of {@link Bolt11RouteHintHop}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<Bolt11RouteHintHop> & Required<Omit<Bolt11RouteHintHop, never>>) => Bolt11RouteHintHop;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<Bolt12Invoice> & Required<Omit<Bolt12Invoice, never>>) => Bolt12Invoice;
    /**
     * Create a frozen instance of {@link Bolt12Invoice}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<Bolt12Invoice> & Required<Omit<Bolt12Invoice, never>>) => Bolt12Invoice;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<Bolt12InvoiceDetails> & Required<Omit<Bolt12InvoiceDetails, never>>) => Bolt12InvoiceDetails;
    /**
     * Create a frozen instance of {@link Bolt12InvoiceDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<Bolt12InvoiceDetails> & Required<Omit<Bolt12InvoiceDetails, never>>) => Bolt12InvoiceDetails;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<Bolt12InvoiceRequestDetails> & Required<Omit<Bolt12InvoiceRequestDetails, never>>) => Bolt12InvoiceRequestDetails;
    /**
     * Create a frozen instance of {@link Bolt12InvoiceRequestDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<Bolt12InvoiceRequestDetails> & Required<Omit<Bolt12InvoiceRequestDetails, never>>) => Bolt12InvoiceRequestDetails;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<Bolt12Offer> & Required<Omit<Bolt12Offer, never>>) => Bolt12Offer;
    /**
     * Create a frozen instance of {@link Bolt12Offer}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<Bolt12Offer> & Required<Omit<Bolt12Offer, never>>) => Bolt12Offer;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<Bolt12OfferBlindedPath> & Required<Omit<Bolt12OfferBlindedPath, never>>) => Bolt12OfferBlindedPath;
    /**
     * Create a frozen instance of {@link Bolt12OfferBlindedPath}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<Bolt12OfferBlindedPath> & Required<Omit<Bolt12OfferBlindedPath, never>>) => Bolt12OfferBlindedPath;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<Bolt12OfferDetails> & Required<Omit<Bolt12OfferDetails, never>>) => Bolt12OfferDetails;
    /**
     * Create a frozen instance of {@link Bolt12OfferDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<Bolt12OfferDetails> & Required<Omit<Bolt12OfferDetails, never>>) => Bolt12OfferDetails;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
     */
    defaults: () => Partial<Bolt12OfferDetails>;
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<CurrencyInfo> & Required<Omit<CurrencyInfo, never>>) => CurrencyInfo;
    /**
     * Create a frozen instance of {@link CurrencyInfo}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<CurrencyInfo> & Required<Omit<CurrencyInfo, never>>) => CurrencyInfo;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
     */
    defaults: () => Partial<CurrencyInfo>;
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<ExternalInputParser> & Required<Omit<ExternalInputParser, never>>) => ExternalInputParser;
    /**
     * Create a frozen instance of {@link ExternalInputParser}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<ExternalInputParser> & Required<Omit<ExternalInputParser, never>>) => ExternalInputParser;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
     */
    defaults: () => Partial<ExternalInputParser>;
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<FiatCurrency> & Required<Omit<FiatCurrency, never>>) => FiatCurrency;
    /**
     * Create a frozen instance of {@link FiatCurrency}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<FiatCurrency> & Required<Omit<FiatCurrency, never>>) => FiatCurrency;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
     */
    defaults: () => Partial<FiatCurrency>;
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<IncomingChange> & Required<Omit<IncomingChange, never>>) => IncomingChange;
    /**
     * Create a frozen instance of {@link IncomingChange}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<IncomingChange> & Required<Omit<IncomingChange, never>>) => IncomingChange;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
     */
    defaults: () => Partial<IncomingChange>;
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<LightningAddressDetails> & Required<Omit<LightningAddressDetails, never>>) => LightningAddressDetails;
    /**
     * Create a frozen instance of {@link LightningAddressDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<LightningAddressDetails> & Required<Omit<LightningAddressDetails, never>>) => LightningAddressDetails;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
     */
    defaults: () => Partial<LightningAddressDetails>;
}>;
/**
 * Wrapped in a [`LnurlAuth`], this is the result of [`parse`] when given a LNURL-auth endpoint.
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<LnurlAuthRequestDetails> & Required<Omit<LnurlAuthRequestDetails, never>>) => LnurlAuthRequestDetails;
    /**
     * Create a frozen instance of {@link LnurlAuthRequestDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<LnurlAuthRequestDetails> & Required<Omit<LnurlAuthRequestDetails, never>>) => LnurlAuthRequestDetails;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
     */
    defaults: () => Partial<LnurlAuthRequestDetails>;
}>;
/**
 * Wrapped in a [`LnUrlError`], this represents a LNURL-endpoint error.
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<LnurlErrorDetails> & Required<Omit<LnurlErrorDetails, never>>) => LnurlErrorDetails;
    /**
     * Create a frozen instance of {@link LnurlErrorDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<LnurlErrorDetails> & Required<Omit<LnurlErrorDetails, never>>) => LnurlErrorDetails;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
     */
    defaults: () => Partial<LnurlErrorDetails>;
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<LnurlPayRequestDetails> & Required<Omit<LnurlPayRequestDetails, never>>) => LnurlPayRequestDetails;
    /**
     * Create a frozen instance of {@link LnurlPayRequestDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<LnurlPayRequestDetails> & Required<Omit<LnurlPayRequestDetails, never>>) => LnurlPayRequestDetails;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
     */
    defaults: () => Partial<LnurlPayRequestDetails>;
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<LnurlWithdrawRequestDetails> & Required<Omit<LnurlWithdrawRequestDetails, never>>) => LnurlWithdrawRequestDetails;
    /**
     * Create a frozen instance of {@link LnurlWithdrawRequestDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<LnurlWithdrawRequestDetails> & Required<Omit<LnurlWithdrawRequestDetails, never>>) => LnurlWithdrawRequestDetails;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
     */
    defaults: () => Partial<LnurlWithdrawRequestDetails>;
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<LocaleOverrides> & Required<Omit<LocaleOverrides, never>>) => LocaleOverrides;
    /**
     * Create a frozen instance of {@link LocaleOverrides}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<LocaleOverrides> & Required<Omit<LocaleOverrides, never>>) => LocaleOverrides;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<LocalizedName> & Required<Omit<LocalizedName, never>>) => LocalizedName;
    /**
     * Create a frozen instance of {@link LocalizedName}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<LocalizedName> & Required<Omit<LocalizedName, never>>) => LocalizedName;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
     */
    defaults: () => Partial<LocalizedName>;
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<MessageSuccessActionData> & Required<Omit<MessageSuccessActionData, never>>) => MessageSuccessActionData;
    /**
     * Create a frozen instance of {@link MessageSuccessActionData}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<MessageSuccessActionData> & Required<Omit<MessageSuccessActionData, never>>) => MessageSuccessActionData;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
     */
    defaults: () => Partial<MessageSuccessActionData>;
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<OutgoingChange> & Required<Omit<OutgoingChange, never>>) => OutgoingChange;
    /**
     * Create a frozen instance of {@link OutgoingChange}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<OutgoingChange> & Required<Omit<OutgoingChange, never>>) => OutgoingChange;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
     */
    defaults: () => Partial<OutgoingChange>;
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<PaymentRequestSource> & Required<Omit<PaymentRequestSource, never>>) => PaymentRequestSource;
    /**
     * Create a frozen instance of {@link PaymentRequestSource}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<PaymentRequestSource> & Required<Omit<PaymentRequestSource, never>>) => PaymentRequestSource;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
     */
    defaults: () => Partial<PaymentRequestSource>;
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<Rate> & Required<Omit<Rate, never>>) => Rate;
    /**
     * Create a frozen instance of {@link Rate}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<Rate> & Required<Omit<Rate, never>>) => Rate;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
     */
    defaults: () => Partial<Rate>;
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<Record> & Required<Omit<Record, never>>) => Record;
    /**
     * Create a frozen instance of {@link Record}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<Record> & Required<Omit<Record, never>>) => Record;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<RecordChange> & Required<Omit<RecordChange, never>>) => RecordChange;
    /**
     * Create a frozen instance of {@link RecordChange}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<RecordChange> & Required<Omit<RecordChange, never>>) => RecordChange;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<RecordId> & Required<Omit<RecordId, never>>) => RecordId;
    /**
     * Create a frozen instance of {@link RecordId}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<RecordId> & Required<Omit<RecordId, never>>) => RecordId;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
     */
    defaults: () => Partial<RecordId>;
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<RestResponse> & Required<Omit<RestResponse, never>>) => RestResponse;
    /**
     * Create a frozen instance of {@link RestResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<RestResponse> & Required<Omit<RestResponse, never>>) => RestResponse;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
     */
    defaults: () => Partial<RestResponse>;
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<SilentPaymentAddressDetails> & Required<Omit<SilentPaymentAddressDetails, never>>) => SilentPaymentAddressDetails;
    /**
     * Create a frozen instance of {@link SilentPaymentAddressDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<SilentPaymentAddressDetails> & Required<Omit<SilentPaymentAddressDetails, never>>) => SilentPaymentAddressDetails;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<SparkAddressDetails> & Required<Omit<SparkAddressDetails, never>>) => SparkAddressDetails;
    /**
     * Create a frozen instance of {@link SparkAddressDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<SparkAddressDetails> & Required<Omit<SparkAddressDetails, never>>) => SparkAddressDetails;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
     */
    defaults: () => Partial<SparkAddressDetails>;
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
    amount: CommonU128 | undefined;
    /**
     * The token identifier of the token payment. Absence indicates a Bitcoin payment.
     */
    tokenIdentifier: string | undefined;
    /**
     * Optional expiry time. If not provided, the invoice will never expire.
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<SparkInvoiceDetails> & Required<Omit<SparkInvoiceDetails, never>>) => SparkInvoiceDetails;
    /**
     * Create a frozen instance of {@link SparkInvoiceDetails}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<SparkInvoiceDetails> & Required<Omit<SparkInvoiceDetails, never>>) => SparkInvoiceDetails;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
     */
    defaults: () => Partial<SparkInvoiceDetails>;
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<Symbol> & Required<Omit<Symbol, never>>) => Symbol;
    /**
     * Create a frozen instance of {@link Symbol}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<Symbol> & Required<Omit<Symbol, never>>) => Symbol;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
     */
    defaults: () => Partial<Symbol>;
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<UnversionedRecordChange> & Required<Omit<UnversionedRecordChange, never>>) => UnversionedRecordChange;
    /**
     * Create a frozen instance of {@link UnversionedRecordChange}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<UnversionedRecordChange> & Required<Omit<UnversionedRecordChange, never>>) => UnversionedRecordChange;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
     */
    defaults: () => Partial<UnversionedRecordChange>;
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
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    create: (partial: Partial<UrlSuccessActionData> & Required<Omit<UrlSuccessActionData, never>>) => UrlSuccessActionData;
    /**
     * Create a frozen instance of {@link UrlSuccessActionData}, with defaults specified
     * in Rust, in the {@link breez_sdk_common} crate.
     */
    new: (partial: Partial<UrlSuccessActionData> & Required<Omit<UrlSuccessActionData, never>>) => UrlSuccessActionData;
    /**
     * Defaults specified in the {@link breez_sdk_common} crate.
     */
    defaults: () => Partial<UrlSuccessActionData>;
}>;
/**
 * Typealias from the type name used in the UDL file to the custom type.  This
 * is needed because the UDL type name is used in function/method signatures.
 */
export type CommonU128 = bigint;
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
export declare enum LnurlCallbackStatus_Tags {
    Ok = "Ok",
    ErrorStatus = "ErrorStatus"
}
/**
 * Contains the result of the entire LNURL interaction, as reported by the LNURL endpoint.
 *
 * * `Ok` indicates the interaction with the endpoint was valid, and the endpoint
 * - started to pay the invoice asynchronously in the case of LNURL-withdraw,
 * - verified the client signature in the case of LNURL-auth
 * * `Error` indicates a generic issue the LNURL endpoint encountered, including a freetext
 * description of the reason.
 *
 * Both cases are described in LUD-03 <https://github.com/lnurl/luds/blob/luds/03.md> & LUD-04: <https://github.com/lnurl/luds/blob/luds/04.md>
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
 * Contains the result of the entire LNURL interaction, as reported by the LNURL endpoint.
 *
 * * `Ok` indicates the interaction with the endpoint was valid, and the endpoint
 * - started to pay the invoice asynchronously in the case of LNURL-withdraw,
 * - verified the client signature in the case of LNURL-auth
 * * `Error` indicates a generic issue the LNURL endpoint encountered, including a freetext
 * description of the reason.
 *
 * Both cases are described in LUD-03 <https://github.com/lnurl/luds/blob/luds/03.md> & LUD-04: <https://github.com/lnurl/luds/blob/luds/04.md>
 */
export type LnurlCallbackStatus = InstanceType<(typeof LnurlCallbackStatus)[keyof Omit<typeof LnurlCallbackStatus, 'instanceOf'>]>;
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
        FfiConverterTypeCurrencyInfo: {
            read(from: RustBuffer): CurrencyInfo;
            write(value: CurrencyInfo, into: RustBuffer): void;
            allocationSize(value: CurrencyInfo): number;
            lift(value: UniffiByteArray): CurrencyInfo;
            lower(value: CurrencyInfo): UniffiByteArray;
        };
        FfiConverterTypeExternalInputParser: {
            read(from: RustBuffer): ExternalInputParser;
            write(value: ExternalInputParser, into: RustBuffer): void;
            allocationSize(value: ExternalInputParser): number;
            lift(value: UniffiByteArray): ExternalInputParser;
            lower(value: ExternalInputParser): UniffiByteArray;
        };
        FfiConverterTypeFiatCurrency: {
            read(from: RustBuffer): FiatCurrency;
            write(value: FiatCurrency, into: RustBuffer): void;
            allocationSize(value: FiatCurrency): number;
            lift(value: UniffiByteArray): FiatCurrency;
            lower(value: FiatCurrency): UniffiByteArray;
        };
        FfiConverterTypeFiatService: FfiConverterObjectWithCallbacks<FiatService>;
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
        FfiConverterTypeLightningAddressDetails: {
            read(from: RustBuffer): LightningAddressDetails;
            write(value: LightningAddressDetails, into: RustBuffer): void;
            allocationSize(value: LightningAddressDetails): number;
            lift(value: UniffiByteArray): LightningAddressDetails;
            lower(value: LightningAddressDetails): UniffiByteArray;
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
        FfiConverterTypeLnurlPayRequestDetails: {
            read(from: RustBuffer): LnurlPayRequestDetails;
            write(value: LnurlPayRequestDetails, into: RustBuffer): void;
            allocationSize(value: LnurlPayRequestDetails): number;
            lift(value: UniffiByteArray): LnurlPayRequestDetails;
            lower(value: LnurlPayRequestDetails): UniffiByteArray;
        };
        FfiConverterTypeLnurlWithdrawRequestDetails: {
            read(from: RustBuffer): LnurlWithdrawRequestDetails;
            write(value: LnurlWithdrawRequestDetails, into: RustBuffer): void;
            allocationSize(value: LnurlWithdrawRequestDetails): number;
            lift(value: UniffiByteArray): LnurlWithdrawRequestDetails;
            lower(value: LnurlWithdrawRequestDetails): UniffiByteArray;
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
        FfiConverterTypeMessageSuccessActionData: {
            read(from: RustBuffer): MessageSuccessActionData;
            write(value: MessageSuccessActionData, into: RustBuffer): void;
            allocationSize(value: MessageSuccessActionData): number;
            lift(value: UniffiByteArray): MessageSuccessActionData;
            lower(value: MessageSuccessActionData): UniffiByteArray;
        };
        FfiConverterTypeOutgoingChange: {
            read(from: RustBuffer): OutgoingChange;
            write(value: OutgoingChange, into: RustBuffer): void;
            allocationSize(value: OutgoingChange): number;
            lift(value: UniffiByteArray): OutgoingChange;
            lower(value: OutgoingChange): UniffiByteArray;
        };
        FfiConverterTypePaymentRequestSource: {
            read(from: RustBuffer): PaymentRequestSource;
            write(value: PaymentRequestSource, into: RustBuffer): void;
            allocationSize(value: PaymentRequestSource): number;
            lift(value: UniffiByteArray): PaymentRequestSource;
            lower(value: PaymentRequestSource): UniffiByteArray;
        };
        FfiConverterTypeRate: {
            read(from: RustBuffer): Rate;
            write(value: Rate, into: RustBuffer): void;
            allocationSize(value: Rate): number;
            lift(value: UniffiByteArray): Rate;
            lower(value: Rate): UniffiByteArray;
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
        FfiConverterTypeRestClient: FfiConverterObjectWithCallbacks<RestClient>;
        FfiConverterTypeRestResponse: {
            read(from: RustBuffer): RestResponse;
            write(value: RestResponse, into: RustBuffer): void;
            allocationSize(value: RestResponse): number;
            lift(value: UniffiByteArray): RestResponse;
            lower(value: RestResponse): UniffiByteArray;
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
        FfiConverterTypeSparkInvoiceDetails: {
            read(from: RustBuffer): SparkInvoiceDetails;
            write(value: SparkInvoiceDetails, into: RustBuffer): void;
            allocationSize(value: SparkInvoiceDetails): number;
            lift(value: UniffiByteArray): SparkInvoiceDetails;
            lower(value: SparkInvoiceDetails): UniffiByteArray;
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
        FfiConverterTypeSyncStorage: FfiConverterObjectWithCallbacks<SyncStorage>;
        FfiConverterTypeUnversionedRecordChange: {
            read(from: RustBuffer): UnversionedRecordChange;
            write(value: UnversionedRecordChange, into: RustBuffer): void;
            allocationSize(value: UnversionedRecordChange): number;
            lift(value: UniffiByteArray): UnversionedRecordChange;
            lower(value: UnversionedRecordChange): UniffiByteArray;
        };
        FfiConverterTypeUrlSuccessActionData: {
            read(from: RustBuffer): UrlSuccessActionData;
            write(value: UrlSuccessActionData, into: RustBuffer): void;
            allocationSize(value: UrlSuccessActionData): number;
            lift(value: UniffiByteArray): UrlSuccessActionData;
            lower(value: UrlSuccessActionData): UniffiByteArray;
        };
        FfiConverterTypecommon_u128: {
            lift(value: Uint8Array<ArrayBufferLike>): bigint;
            lower(value: bigint): Uint8Array<ArrayBufferLike>;
            read(from: RustBuffer): bigint;
            write(value: bigint, into: RustBuffer): void;
            allocationSize(value: bigint): number;
        };
    };
}>;
export default _default;
//# sourceMappingURL=breez_sdk_common.d.ts.map