import { type BitcoinAddressDetails, type Bolt11InvoiceDetails, type ExternalInputParser, type FiatCurrency, type FiatService, type LnurlPayRequestDetails, type LnurlWithdrawRequestDetails, type Rate, type RestClient, type SparkInvoiceDetails, type SyncStorage, InputType, SuccessAction, SuccessActionProcessed } from './breez_sdk_common';
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
export declare function defaultConfig(network: Network): Config;
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
    maxFee: Fee | undefined;
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
export type Config = {
    apiKey: string | undefined;
    network: Network;
    syncIntervalSecs: number;
    maxDepositClaimFee: Fee | undefined;
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
    create: (partial: Partial<ListPaymentsRequest> & Required<Omit<ListPaymentsRequest, "typeFilter" | "statusFilter" | "assetFilter" | "fromTimestamp" | "toTimestamp" | "offset" | "limit" | "sortAscending">>) => ListPaymentsRequest;
    /**
     * Create a frozen instance of {@link ListPaymentsRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ListPaymentsRequest> & Required<Omit<ListPaymentsRequest, "typeFilter" | "statusFilter" | "assetFilter" | "fromTimestamp" | "toTimestamp" | "offset" | "limit" | "sortAscending">>) => ListPaymentsRequest;
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
};
/**
 * Generated factory for {@link LnurlPayRequest} record objects.
 */
export declare const LnurlPayRequest: Readonly<{
    /**
     * Create a frozen instance of {@link LnurlPayRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<LnurlPayRequest> & Required<Omit<LnurlPayRequest, never>>) => LnurlPayRequest;
    /**
     * Create a frozen instance of {@link LnurlPayRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<LnurlPayRequest> & Required<Omit<LnurlPayRequest, never>>) => LnurlPayRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<LnurlPayRequest>;
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
    lnurlPayInfo: LnurlPayInfo | undefined;
    lnurlWithdrawInfo: LnurlWithdrawInfo | undefined;
    lnurlDescription: string | undefined;
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
     * If provided, the payment will be for a token
     * May only be provided if the payment request is a spark address
     */
    tokenIdentifier: string | undefined;
};
/**
 * Generated factory for {@link PrepareSendPaymentRequest} record objects.
 */
export declare const PrepareSendPaymentRequest: Readonly<{
    /**
     * Create a frozen instance of {@link PrepareSendPaymentRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<PrepareSendPaymentRequest> & Required<Omit<PrepareSendPaymentRequest, "amount" | "tokenIdentifier">>) => PrepareSendPaymentRequest;
    /**
     * Create a frozen instance of {@link PrepareSendPaymentRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<PrepareSendPaymentRequest> & Required<Omit<PrepareSendPaymentRequest, "amount" | "tokenIdentifier">>) => PrepareSendPaymentRequest;
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
     * The presence of this field indicates that the payment is for a token
     * If empty, it is a Bitcoin payment
     */
    tokenIdentifier: string | undefined;
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
};
/**
 * Generated factory for {@link SendPaymentRequest} record objects.
 */
export declare const SendPaymentRequest: Readonly<{
    /**
     * Create a frozen instance of {@link SendPaymentRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<SendPaymentRequest> & Required<Omit<SendPaymentRequest, "options">>) => SendPaymentRequest;
    /**
     * Create a frozen instance of {@link SendPaymentRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<SendPaymentRequest> & Required<Omit<SendPaymentRequest, "options">>) => SendPaymentRequest;
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
export type WaitForPaymentRequest = {
    identifier: WaitForPaymentIdentifier;
};
/**
 * Generated factory for {@link WaitForPaymentRequest} record objects.
 */
export declare const WaitForPaymentRequest: Readonly<{
    /**
     * Create a frozen instance of {@link WaitForPaymentRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<WaitForPaymentRequest> & Required<Omit<WaitForPaymentRequest, never>>) => WaitForPaymentRequest;
    /**
     * Create a frozen instance of {@link WaitForPaymentRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<WaitForPaymentRequest> & Required<Omit<WaitForPaymentRequest, never>>) => WaitForPaymentRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<WaitForPaymentRequest>;
}>;
export type WaitForPaymentResponse = {
    payment: Payment;
};
/**
 * Generated factory for {@link WaitForPaymentResponse} record objects.
 */
export declare const WaitForPaymentResponse: Readonly<{
    /**
     * Create a frozen instance of {@link WaitForPaymentResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<WaitForPaymentResponse> & Required<Omit<WaitForPaymentResponse, never>>) => WaitForPaymentResponse;
    /**
     * Create a frozen instance of {@link WaitForPaymentResponse}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<WaitForPaymentResponse> & Required<Omit<WaitForPaymentResponse, never>>) => WaitForPaymentResponse;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<WaitForPaymentResponse>;
}>;
/**
 * Typealias from the type name used in the UDL file to the custom type.  This
 * is needed because the UDL type name is used in function/method signatures.
 */
export type U128 = bigint;
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
export declare enum DepositClaimError_Tags {
    DepositClaimFeeExceeded = "DepositClaimFeeExceeded",
    MissingUtxo = "MissingUtxo",
    Generic = "Generic"
}
export declare const DepositClaimError: Readonly<{
    instanceOf: (obj: any) => obj is DepositClaimError;
    DepositClaimFeeExceeded: {
        new (inner: {
            tx: string;
            vout: number;
            maxFee: Fee | undefined;
            actualFee: bigint;
        }): {
            readonly tag: DepositClaimError_Tags.DepositClaimFeeExceeded;
            readonly inner: Readonly<{
                tx: string;
                vout: number;
                maxFee: Fee | undefined;
                actualFee: bigint;
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
            actualFee: bigint;
        }): {
            readonly tag: DepositClaimError_Tags.DepositClaimFeeExceeded;
            readonly inner: Readonly<{
                tx: string;
                vout: number;
                maxFee: Fee | undefined;
                actualFee: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "DepositClaimError";
        };
        instanceOf(obj: any): obj is {
            readonly tag: DepositClaimError_Tags.DepositClaimFeeExceeded;
            readonly inner: Readonly<{
                tx: string;
                vout: number;
                maxFee: Fee | undefined;
                actualFee: bigint;
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
export declare enum KeySetType {
    Default = 0,
    Taproot = 1,
    NativeSegwit = 2,
    WrappedSegwit = 3,
    Legacy = 4
}
export declare enum Network {
    Mainnet = 0,
    Regtest = 1
}
export declare enum OnchainConfirmationSpeed {
    Fast = 0,
    Medium = 1,
    Slow = 2
}
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
        }): {
            readonly tag: PaymentDetails_Tags.Spark;
            readonly inner: Readonly<{
                invoiceDetails: SparkInvoicePaymentDetails | undefined;
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
        }): {
            readonly tag: PaymentDetails_Tags.Spark;
            readonly inner: Readonly<{
                invoiceDetails: SparkInvoicePaymentDetails | undefined;
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
        }): {
            readonly tag: PaymentDetails_Tags.Token;
            readonly inner: Readonly<{
                metadata: TokenMetadata;
                txHash: string;
                invoiceDetails: SparkInvoicePaymentDetails | undefined;
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
        }): {
            readonly tag: PaymentDetails_Tags.Token;
            readonly inner: Readonly<{
                metadata: TokenMetadata;
                txHash: string;
                invoiceDetails: SparkInvoicePaymentDetails | undefined;
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
             * The expiry time of the invoice in seconds since the Unix epoch
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
             * The expiry time of the invoice in seconds since the Unix epoch
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
        }): {
            readonly tag: ReceivePaymentMethod_Tags.Bolt11Invoice;
            readonly inner: Readonly<{
                description: string;
                amountSats: /*u64*/ bigint | undefined;
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
        }): {
            readonly tag: ReceivePaymentMethod_Tags.Bolt11Invoice;
            readonly inner: Readonly<{
                description: string;
                amountSats: /*u64*/ bigint | undefined;
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
    InvalidUuid = "InvalidUuid",
    InvalidInput = "InvalidInput",
    NetworkError = "NetworkError",
    StorageError = "StorageError",
    ChainServiceError = "ChainServiceError",
    DepositClaimFeeExceeded = "DepositClaimFeeExceeded",
    MissingUtxo = "MissingUtxo",
    LnurlError = "LnurlError",
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
    DepositClaimFeeExceeded: {
        new (inner: {
            tx: string;
            vout: number;
            maxFee: Fee | undefined;
            actualFee: bigint;
        }): {
            readonly tag: SdkError_Tags.DepositClaimFeeExceeded;
            readonly inner: Readonly<{
                tx: string;
                vout: number;
                maxFee: Fee | undefined;
                actualFee: bigint;
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
            actualFee: bigint;
        }): {
            readonly tag: SdkError_Tags.DepositClaimFeeExceeded;
            readonly inner: Readonly<{
                tx: string;
                vout: number;
                maxFee: Fee | undefined;
                actualFee: bigint;
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
            readonly tag: SdkError_Tags.DepositClaimFeeExceeded;
            readonly inner: Readonly<{
                tx: string;
                vout: number;
                maxFee: Fee | undefined;
                actualFee: bigint;
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
            readonly tag: SdkError_Tags.DepositClaimFeeExceeded;
            readonly inner: Readonly<{
                tx: string;
                vout: number;
                maxFee: Fee | undefined;
                actualFee: bigint;
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
            readonly tag: SdkError_Tags.DepositClaimFeeExceeded;
            readonly inner: Readonly<{
                tx: string;
                vout: number;
                maxFee: Fee | undefined;
                actualFee: bigint;
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
            actualFee: bigint;
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
    DataSynced = "DataSynced",
    UnclaimedDeposits = "UnclaimedDeposits",
    ClaimedDeposits = "ClaimedDeposits",
    PaymentSucceeded = "PaymentSucceeded",
    PaymentFailed = "PaymentFailed"
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
    DataSynced: {
        new (inner: {
            /**
             * Value indicating whether new data was pulled through real-time sync.
             */ didPullNewRecords: boolean;
        }): {
            readonly tag: SdkEvent_Tags.DataSynced;
            readonly inner: Readonly<{
                didPullNewRecords: boolean;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkEvent";
        };
        "new"(inner: {
            /**
             * Value indicating whether new data was pulled through real-time sync.
             */ didPullNewRecords: boolean;
        }): {
            readonly tag: SdkEvent_Tags.DataSynced;
            readonly inner: Readonly<{
                didPullNewRecords: boolean;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SdkEvent";
        };
        instanceOf(obj: any): obj is {
            readonly tag: SdkEvent_Tags.DataSynced;
            readonly inner: Readonly<{
                didPullNewRecords: boolean;
            }>;
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
    Bolt11Invoice = "Bolt11Invoice"
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
}>;
export type SendPaymentOptions = InstanceType<(typeof SendPaymentOptions)[keyof Omit<typeof SendPaymentOptions, 'instanceOf'>]>;
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
export declare enum WaitForPaymentIdentifier_Tags {
    PaymentId = "PaymentId",
    PaymentRequest = "PaymentRequest"
}
export declare const WaitForPaymentIdentifier: Readonly<{
    instanceOf: (obj: any) => obj is WaitForPaymentIdentifier;
    PaymentId: {
        new (v0: string): {
            readonly tag: WaitForPaymentIdentifier_Tags.PaymentId;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "WaitForPaymentIdentifier";
        };
        "new"(v0: string): {
            readonly tag: WaitForPaymentIdentifier_Tags.PaymentId;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "WaitForPaymentIdentifier";
        };
        instanceOf(obj: any): obj is {
            readonly tag: WaitForPaymentIdentifier_Tags.PaymentId;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "WaitForPaymentIdentifier";
        };
    };
    PaymentRequest: {
        new (v0: string): {
            readonly tag: WaitForPaymentIdentifier_Tags.PaymentRequest;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "WaitForPaymentIdentifier";
        };
        "new"(v0: string): {
            readonly tag: WaitForPaymentIdentifier_Tags.PaymentRequest;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "WaitForPaymentIdentifier";
        };
        instanceOf(obj: any): obj is {
            readonly tag: WaitForPaymentIdentifier_Tags.PaymentRequest;
            readonly inner: Readonly<[string]>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "WaitForPaymentIdentifier";
        };
    };
}>;
export type WaitForPaymentIdentifier = InstanceType<(typeof WaitForPaymentIdentifier)[keyof Omit<typeof WaitForPaymentIdentifier, 'instanceOf'>]>;
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
    waitForPayment(request: WaitForPaymentRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<WaitForPaymentResponse>;
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
    waitForPayment(request: WaitForPaymentRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<WaitForPaymentResponse>;
    /**
     * {@inheritDoc uniffi-bindgen-react-native#UniffiAbstractObject.uniffiDestroy}
     */
    uniffiDestroy(): void;
    static instanceOf(obj: any): obj is BreezSdk;
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
     * - `key_set_type`: The key set type which determines the derivation path.
     * - `use_address_index`: Controls the structure of the BIP derivation path.
     */
    withKeySet(keySetType: KeySetType, useAddressIndex: boolean, accountNumber: /*u32*/ number | undefined, asyncOpts_?: {
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
     * - `credentials`: Optional credentials for basic authentication.
     */
    withRestChainService(url: string, credentials: Credentials | undefined, asyncOpts_?: {
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
     * - `key_set_type`: The key set type which determines the derivation path.
     * - `use_address_index`: Controls the structure of the BIP derivation path.
     */
    withKeySet(keySetType: KeySetType, useAddressIndex: boolean, accountNumber: /*u32*/ number | undefined, asyncOpts_?: {
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
     * - `credentials`: Optional credentials for basic authentication.
     */
    withRestChainService(url: string, credentials: Credentials | undefined, asyncOpts_?: {
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
    /**
     * {@inheritDoc uniffi-bindgen-react-native#UniffiAbstractObject.uniffiDestroy}
     */
    uniffiDestroy(): void;
    static instanceOf(obj: any): obj is StorageImpl;
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
        FfiConverterTypeAssetFilter: {
            read(from: RustBuffer): AssetFilter;
            write(value: AssetFilter, into: RustBuffer): void;
            allocationSize(value: AssetFilter): number;
            lift(value: UniffiByteArray): AssetFilter;
            lower(value: AssetFilter): UniffiByteArray;
        };
        FfiConverterTypeBitcoinChainService: FfiConverterObjectWithCallbacks<BitcoinChainService>;
        FfiConverterTypeBreezSdk: FfiConverterObject<BreezSdkInterface>;
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
        FfiConverterTypeCredentials: {
            read(from: RustBuffer): Credentials;
            write(value: Credentials, into: RustBuffer): void;
            allocationSize(value: Credentials): number;
            lift(value: UniffiByteArray): Credentials;
            lower(value: Credentials): UniffiByteArray;
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
        FfiConverterTypeFee: {
            read(from: RustBuffer): Fee;
            write(value: Fee, into: RustBuffer): void;
            allocationSize(value: Fee): number;
            lift(value: UniffiByteArray): Fee;
            lower(value: Fee): UniffiByteArray;
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
        FfiConverterTypeKeySetType: {
            read(from: RustBuffer): KeySetType;
            write(value: KeySetType, into: RustBuffer): void;
            allocationSize(value: KeySetType): number;
            lift(value: UniffiByteArray): KeySetType;
            lower(value: KeySetType): UniffiByteArray;
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
        FfiConverterTypeLnurlPayResponse: {
            read(from: RustBuffer): LnurlPayResponse;
            write(value: LnurlPayResponse, into: RustBuffer): void;
            allocationSize(value: LnurlPayResponse): number;
            lift(value: UniffiByteArray): LnurlPayResponse;
            lower(value: LnurlPayResponse): UniffiByteArray;
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
        FfiConverterTypeLnurlWithdrawResponse: {
            read(from: RustBuffer): LnurlWithdrawResponse;
            write(value: LnurlWithdrawResponse, into: RustBuffer): void;
            allocationSize(value: LnurlWithdrawResponse): number;
            lift(value: UniffiByteArray): LnurlWithdrawResponse;
            lower(value: LnurlWithdrawResponse): UniffiByteArray;
        };
        FfiConverterTypeLogEntry: {
            read(from: RustBuffer): LogEntry;
            write(value: LogEntry, into: RustBuffer): void;
            allocationSize(value: LogEntry): number;
            lift(value: UniffiByteArray): LogEntry;
            lower(value: LogEntry): UniffiByteArray;
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
        FfiConverterTypeSparkInvoicePaymentDetails: {
            read(from: RustBuffer): SparkInvoicePaymentDetails;
            write(value: SparkInvoicePaymentDetails, into: RustBuffer): void;
            allocationSize(value: SparkInvoicePaymentDetails): number;
            lift(value: UniffiByteArray): SparkInvoicePaymentDetails;
            lower(value: SparkInvoicePaymentDetails): UniffiByteArray;
        };
        FfiConverterTypeStorage: FfiConverterObjectWithCallbacks<Storage>;
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
        FfiConverterTypeWaitForPaymentIdentifier: {
            read(from: RustBuffer): WaitForPaymentIdentifier;
            write(value: WaitForPaymentIdentifier, into: RustBuffer): void;
            allocationSize(value: WaitForPaymentIdentifier): number;
            lift(value: UniffiByteArray): WaitForPaymentIdentifier;
            lower(value: WaitForPaymentIdentifier): UniffiByteArray;
        };
        FfiConverterTypeWaitForPaymentRequest: {
            read(from: RustBuffer): WaitForPaymentRequest;
            write(value: WaitForPaymentRequest, into: RustBuffer): void;
            allocationSize(value: WaitForPaymentRequest): number;
            lift(value: UniffiByteArray): WaitForPaymentRequest;
            lower(value: WaitForPaymentRequest): UniffiByteArray;
        };
        FfiConverterTypeWaitForPaymentResponse: {
            read(from: RustBuffer): WaitForPaymentResponse;
            write(value: WaitForPaymentResponse, into: RustBuffer): void;
            allocationSize(value: WaitForPaymentResponse): number;
            lift(value: UniffiByteArray): WaitForPaymentResponse;
            lower(value: WaitForPaymentResponse): UniffiByteArray;
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