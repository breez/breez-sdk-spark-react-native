import { type BitcoinAddressDetails, type Bolt11InvoiceDetails, type LnurlPayRequestDetails, type RestClient, InputType, SuccessAction, SuccessActionProcessed } from './breez_sdk_common';
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
export declare function defaultStorage(dataDir: string, asyncOpts_?: {
    signal: AbortSignal;
}): Promise<Storage>;
export declare function initLogging(logDir: string | undefined, appLogger: Logger | undefined, logFilter: string | undefined): void;
export declare function parse(input: string, asyncOpts_?: {
    signal: AbortSignal;
}): Promise<InputType>;
/**
 * Trait for event listeners
 */
export interface EventListener {
    /**
     * Called when an event occurs
     */
    onEvent(event: SdkEvent): void;
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
    mnemonic: string;
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
export type GetInfoRequest = {};
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
 * Request to list payments with pagination
 */
export type ListPaymentsRequest = {
    /**
     * Number of records to skip
     */
    offset: /*u32*/ number | undefined;
    /**
     * Maximum number of records to return
     */
    limit: /*u32*/ number | undefined;
};
/**
 * Generated factory for {@link ListPaymentsRequest} record objects.
 */
export declare const ListPaymentsRequest: Readonly<{
    /**
     * Create a frozen instance of {@link ListPaymentsRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<ListPaymentsRequest> & Required<Omit<ListPaymentsRequest, "offset" | "limit">>) => ListPaymentsRequest;
    /**
     * Create a frozen instance of {@link ListPaymentsRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<ListPaymentsRequest> & Required<Omit<ListPaymentsRequest, "offset" | "limit">>) => ListPaymentsRequest;
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
     * Amount in satoshis
     */
    amount: bigint;
    /**
     * Fee paid in satoshis
     */
    fees: bigint;
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
    amountSats: /*u64*/ bigint | undefined;
};
/**
 * Generated factory for {@link PrepareSendPaymentRequest} record objects.
 */
export declare const PrepareSendPaymentRequest: Readonly<{
    /**
     * Create a frozen instance of {@link PrepareSendPaymentRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<PrepareSendPaymentRequest> & Required<Omit<PrepareSendPaymentRequest, "amountSats">>) => PrepareSendPaymentRequest;
    /**
     * Create a frozen instance of {@link PrepareSendPaymentRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<PrepareSendPaymentRequest> & Required<Omit<PrepareSendPaymentRequest, "amountSats">>) => PrepareSendPaymentRequest;
    /**
     * Defaults specified in the {@link breez_sdk_spark} crate.
     */
    defaults: () => Partial<PrepareSendPaymentRequest>;
}>;
export type PrepareSendPaymentResponse = {
    paymentMethod: SendPaymentMethod;
    amountSats: bigint;
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
    feeSats: bigint;
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
    description: string;
};
/**
 * Generated factory for {@link RegisterLightningAddressRequest} record objects.
 */
export declare const RegisterLightningAddressRequest: Readonly<{
    /**
     * Create a frozen instance of {@link RegisterLightningAddressRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    create: (partial: Partial<RegisterLightningAddressRequest> & Required<Omit<RegisterLightningAddressRequest, never>>) => RegisterLightningAddressRequest;
    /**
     * Create a frozen instance of {@link RegisterLightningAddressRequest}, with defaults specified
     * in Rust, in the {@link breez_sdk_spark} crate.
     */
    new: (partial: Partial<RegisterLightningAddressRequest> & Required<Omit<RegisterLightningAddressRequest, never>>) => RegisterLightningAddressRequest;
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
            maxFee: Fee;
            actualFee: bigint;
        }): {
            readonly tag: DepositClaimError_Tags.DepositClaimFeeExceeded;
            readonly inner: Readonly<{
                tx: string;
                vout: number;
                maxFee: Fee;
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
            maxFee: Fee;
            actualFee: bigint;
        }): {
            readonly tag: DepositClaimError_Tags.DepositClaimFeeExceeded;
            readonly inner: Readonly<{
                tx: string;
                vout: number;
                maxFee: Fee;
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
                maxFee: Fee;
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
    Lightning = "Lightning",
    Withdraw = "Withdraw",
    Deposit = "Deposit"
}
export declare const PaymentDetails: Readonly<{
    instanceOf: (obj: any) => obj is PaymentDetails;
    Spark: {
        new (): {
            readonly tag: PaymentDetails_Tags.Spark;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentDetails";
        };
        "new"(): {
            readonly tag: PaymentDetails_Tags.Spark;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "PaymentDetails";
        };
        instanceOf(obj: any): obj is {
            readonly tag: PaymentDetails_Tags.Spark;
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
        }): {
            readonly tag: PaymentDetails_Tags.Lightning;
            readonly inner: Readonly<{
                description: string | undefined;
                preimage: string | undefined;
                invoice: string;
                paymentHash: string;
                destinationPubkey: string;
                lnurlPayInfo: LnurlPayInfo | undefined;
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
        }): {
            readonly tag: PaymentDetails_Tags.Lightning;
            readonly inner: Readonly<{
                description: string | undefined;
                preimage: string | undefined;
                invoice: string;
                paymentHash: string;
                destinationPubkey: string;
                lnurlPayInfo: LnurlPayInfo | undefined;
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
    Deposit = 2,
    Withdraw = 3,
    Unknown = 4
}
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
export declare enum ReceivePaymentMethod_Tags {
    SparkAddress = "SparkAddress",
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
            maxFee: Fee;
            actualFee: bigint;
        }): {
            readonly tag: SdkError_Tags.DepositClaimFeeExceeded;
            readonly inner: Readonly<{
                tx: string;
                vout: number;
                maxFee: Fee;
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
            maxFee: Fee;
            actualFee: bigint;
        }): {
            readonly tag: SdkError_Tags.DepositClaimFeeExceeded;
            readonly inner: Readonly<{
                tx: string;
                vout: number;
                maxFee: Fee;
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
                maxFee: Fee;
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
                maxFee: Fee;
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
                maxFee: Fee;
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
            maxFee: Fee;
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
    ClaimDepositsFailed = "ClaimDepositsFailed",
    ClaimDepositsSucceeded = "ClaimDepositsSucceeded",
    PaymentSucceeded = "PaymentSucceeded"
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
    ClaimDepositsFailed: {
        new (inner: {
            unclaimedDeposits: Array<DepositInfo>;
        }): {
            readonly tag: SdkEvent_Tags.ClaimDepositsFailed;
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
            readonly tag: SdkEvent_Tags.ClaimDepositsFailed;
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
            readonly tag: SdkEvent_Tags.ClaimDepositsFailed;
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
    ClaimDepositsSucceeded: {
        new (inner: {
            claimedDeposits: Array<DepositInfo>;
        }): {
            readonly tag: SdkEvent_Tags.ClaimDepositsSucceeded;
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
            readonly tag: SdkEvent_Tags.ClaimDepositsSucceeded;
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
            readonly tag: SdkEvent_Tags.ClaimDepositsSucceeded;
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
}>;
/**
 * Events emitted by the SDK
 */
export type SdkEvent = InstanceType<(typeof SdkEvent)[keyof Omit<typeof SdkEvent, 'instanceOf'>]>;
export declare enum SendPaymentMethod_Tags {
    BitcoinAddress = "BitcoinAddress",
    Bolt11Invoice = "Bolt11Invoice",
    SparkAddress = "SparkAddress"
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
            feeSats: bigint;
        }): {
            readonly tag: SendPaymentMethod_Tags.SparkAddress;
            readonly inner: Readonly<{
                address: string;
                feeSats: bigint;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SendPaymentMethod";
        };
        "new"(inner: {
            address: string;
            feeSats: bigint;
        }): {
            readonly tag: SendPaymentMethod_Tags.SparkAddress;
            readonly inner: Readonly<{
                address: string;
                feeSats: bigint;
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
                feeSats: bigint;
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
            useSpark: boolean;
        }): {
            readonly tag: SendPaymentOptions_Tags.Bolt11Invoice;
            readonly inner: Readonly<{
                useSpark: boolean;
            }>;
            /**
             * @private
             * This field is private and should not be used, use `tag` instead.
             */
            readonly [uniffiTypeNameSymbol]: "SendPaymentOptions";
        };
        "new"(inner: {
            useSpark: boolean;
        }): {
            readonly tag: SendPaymentOptions_Tags.Bolt11Invoice;
            readonly inner: Readonly<{
                useSpark: boolean;
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
                useSpark: boolean;
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
export interface BitcoinChainService {
    getAddressUtxos(address: string, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<Array<Utxo>>;
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
    addEventListener(listener: EventListener): string;
    checkLightningAddressAvailable(req: CheckLightningAddressRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<boolean>;
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
    disconnect(): void;
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
    pollLightningSendPayment(paymentId: string): void;
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
     * Attempts to recover a lightning address from the lnurl server.
     */
    recoverLightningAddress(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<LightningAddressInfo | undefined>;
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
    removeEventListener(id: string): boolean;
    sendPayment(request: SendPaymentRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<SendPaymentResponse>;
    sendPaymentInternal(request: SendPaymentRequest, suppressPaymentEvent: boolean, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<SendPaymentResponse>;
    /**
     * Synchronizes the wallet with the Spark network
     */
    syncWallet(request: SyncWalletRequest): SyncWalletResponse;
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
    addEventListener(listener: EventListener): string;
    checkLightningAddressAvailable(req: CheckLightningAddressRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<boolean>;
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
    disconnect(): void;
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
    pollLightningSendPayment(paymentId: string): void;
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
     * Attempts to recover a lightning address from the lnurl server.
     */
    recoverLightningAddress(asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<LightningAddressInfo | undefined>;
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
    removeEventListener(id: string): boolean;
    sendPayment(request: SendPaymentRequest, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<SendPaymentResponse>;
    sendPaymentInternal(request: SendPaymentRequest, suppressPaymentEvent: boolean, asyncOpts_?: {
        signal: AbortSignal;
    }): Promise<SendPaymentResponse>;
    /**
     * Synchronizes the wallet with the Spark network
     */
    syncWallet(request: SyncWalletRequest): SyncWalletResponse;
    /**
     * {@inheritDoc uniffi-bindgen-react-native#UniffiAbstractObject.uniffiDestroy}
     */
    uniffiDestroy(): void;
    static instanceOf(obj: any): obj is BreezSdk;
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
    withLnurlClient(lnurlClient: RestClient, asyncOpts_?: {
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
     * - `mnemonic`: The mnemonic phrase for the wallet.
     * - `storage`: The storage backend to be used.
     */
    constructor(config: Config, mnemonic: string, storage: Storage);
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
    withLnurlClient(lnurlClient: RestClient, asyncOpts_?: {
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
     * Lists payments with pagination
     *
     * # Arguments
     *
     * * `offset` - Number of records to skip
     * * `limit` - Maximum number of records to return
     *
     * # Returns
     *
     * A vector of payments or a `StorageError`
     */
    listPayments(offset: /*u32*/ number | undefined, limit: /*u32*/ number | undefined, asyncOpts_?: {
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
     * Lists payments with pagination
     *
     * # Arguments
     *
     * * `offset` - Number of records to skip
     * * `limit` - Maximum number of records to return
     *
     * # Returns
     *
     * A vector of payments or a `StorageError`
     */
    listPayments(offset: /*u32*/ number | undefined, limit: /*u32*/ number | undefined, asyncOpts_?: {
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
        FfiConverterTypeBitcoinChainService: FfiConverterObjectWithCallbacks<BitcoinChainService>;
        FfiConverterTypeBreezSdk: FfiConverterObject<BreezSdkInterface>;
        FfiConverterTypeCheckLightningAddressRequest: {
            read(from: RustBuffer): CheckLightningAddressRequest;
            write(value: CheckLightningAddressRequest, into: RustBuffer): void;
            allocationSize(value: CheckLightningAddressRequest): number;
            lift(value: UniffiByteArray): CheckLightningAddressRequest;
            lower(value: CheckLightningAddressRequest): UniffiByteArray;
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
        FfiConverterTypeLightningAddressInfo: {
            read(from: RustBuffer): LightningAddressInfo;
            write(value: LightningAddressInfo, into: RustBuffer): void;
            allocationSize(value: LightningAddressInfo): number;
            lift(value: UniffiByteArray): LightningAddressInfo;
            lower(value: LightningAddressInfo): UniffiByteArray;
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
        FfiConverterTypeUtxo: {
            read(from: RustBuffer): Utxo;
            write(value: Utxo, into: RustBuffer): void;
            allocationSize(value: Utxo): number;
            lift(value: UniffiByteArray): Utxo;
            lower(value: Utxo): UniffiByteArray;
        };
    };
}>;
export default _default;
//# sourceMappingURL=breez_sdk_spark.d.ts.map