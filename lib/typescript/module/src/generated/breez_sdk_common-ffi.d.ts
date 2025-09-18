import { type UniffiRustCallStatus, type UniffiRustArcPtr, type UniffiResult } from 'uniffi-bindgen-react-native';
interface NativeModuleInterface {
    ubrn_uniffi_internal_fn_func_ffi__string_to_byte_length(string: string, uniffi_out_err: UniffiRustCallStatus): number;
    ubrn_uniffi_internal_fn_func_ffi__string_to_arraybuffer(string: string, uniffi_out_err: UniffiRustCallStatus): Uint8Array;
    ubrn_uniffi_internal_fn_func_ffi__arraybuffer_to_string(buffer: Uint8Array, uniffi_out_err: UniffiRustCallStatus): string;
    ubrn_uniffi_breez_sdk_common_fn_clone_restclient(ptr: bigint, uniffi_out_err: UniffiRustCallStatus): bigint;
    ubrn_uniffi_breez_sdk_common_fn_free_restclient(ptr: bigint, uniffi_out_err: UniffiRustCallStatus): void;
    ubrn_uniffi_breez_sdk_common_fn_method_restclient_get_request(ptr: bigint, url: Uint8Array, headers: Uint8Array): bigint;
    ubrn_uniffi_breez_sdk_common_fn_method_restclient_post_request(ptr: bigint, url: Uint8Array, headers: Uint8Array, body: Uint8Array): bigint;
    ubrn_uniffi_breez_sdk_common_fn_method_restclient_delete_request(ptr: bigint, url: Uint8Array, headers: Uint8Array, body: Uint8Array): bigint;
    ubrn_ffi_breez_sdk_common_rust_future_poll_u8(handle: bigint, callback: UniffiRustFutureContinuationCallback, callbackData: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_cancel_u8(handle: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_free_u8(handle: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_complete_u8(handle: bigint, uniffi_out_err: UniffiRustCallStatus): number;
    ubrn_ffi_breez_sdk_common_rust_future_poll_i8(handle: bigint, callback: UniffiRustFutureContinuationCallback, callbackData: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_cancel_i8(handle: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_free_i8(handle: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_complete_i8(handle: bigint, uniffi_out_err: UniffiRustCallStatus): number;
    ubrn_ffi_breez_sdk_common_rust_future_poll_u16(handle: bigint, callback: UniffiRustFutureContinuationCallback, callbackData: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_cancel_u16(handle: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_free_u16(handle: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_complete_u16(handle: bigint, uniffi_out_err: UniffiRustCallStatus): number;
    ubrn_ffi_breez_sdk_common_rust_future_poll_i16(handle: bigint, callback: UniffiRustFutureContinuationCallback, callbackData: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_cancel_i16(handle: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_free_i16(handle: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_complete_i16(handle: bigint, uniffi_out_err: UniffiRustCallStatus): number;
    ubrn_ffi_breez_sdk_common_rust_future_poll_u32(handle: bigint, callback: UniffiRustFutureContinuationCallback, callbackData: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_cancel_u32(handle: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_free_u32(handle: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_complete_u32(handle: bigint, uniffi_out_err: UniffiRustCallStatus): number;
    ubrn_ffi_breez_sdk_common_rust_future_poll_i32(handle: bigint, callback: UniffiRustFutureContinuationCallback, callbackData: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_cancel_i32(handle: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_free_i32(handle: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_complete_i32(handle: bigint, uniffi_out_err: UniffiRustCallStatus): number;
    ubrn_ffi_breez_sdk_common_rust_future_poll_u64(handle: bigint, callback: UniffiRustFutureContinuationCallback, callbackData: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_cancel_u64(handle: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_free_u64(handle: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_complete_u64(handle: bigint, uniffi_out_err: UniffiRustCallStatus): bigint;
    ubrn_ffi_breez_sdk_common_rust_future_poll_i64(handle: bigint, callback: UniffiRustFutureContinuationCallback, callbackData: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_cancel_i64(handle: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_free_i64(handle: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_complete_i64(handle: bigint, uniffi_out_err: UniffiRustCallStatus): bigint;
    ubrn_ffi_breez_sdk_common_rust_future_poll_f32(handle: bigint, callback: UniffiRustFutureContinuationCallback, callbackData: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_cancel_f32(handle: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_free_f32(handle: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_complete_f32(handle: bigint, uniffi_out_err: UniffiRustCallStatus): number;
    ubrn_ffi_breez_sdk_common_rust_future_poll_f64(handle: bigint, callback: UniffiRustFutureContinuationCallback, callbackData: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_cancel_f64(handle: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_free_f64(handle: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_complete_f64(handle: bigint, uniffi_out_err: UniffiRustCallStatus): number;
    ubrn_ffi_breez_sdk_common_rust_future_poll_pointer(handle: bigint, callback: UniffiRustFutureContinuationCallback, callbackData: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_cancel_pointer(handle: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_free_pointer(handle: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_complete_pointer(handle: bigint, uniffi_out_err: UniffiRustCallStatus): bigint;
    ubrn_ffi_breez_sdk_common_rust_future_poll_rust_buffer(handle: bigint, callback: UniffiRustFutureContinuationCallback, callbackData: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_cancel_rust_buffer(handle: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_free_rust_buffer(handle: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_complete_rust_buffer(handle: bigint, uniffi_out_err: UniffiRustCallStatus): Uint8Array;
    ubrn_ffi_breez_sdk_common_rust_future_poll_void(handle: bigint, callback: UniffiRustFutureContinuationCallback, callbackData: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_cancel_void(handle: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_free_void(handle: bigint): void;
    ubrn_ffi_breez_sdk_common_rust_future_complete_void(handle: bigint, uniffi_out_err: UniffiRustCallStatus): void;
    ubrn_uniffi_breez_sdk_common_checksum_method_restclient_get_request(): number;
    ubrn_uniffi_breez_sdk_common_checksum_method_restclient_post_request(): number;
    ubrn_uniffi_breez_sdk_common_checksum_method_restclient_delete_request(): number;
    ubrn_ffi_breez_sdk_common_uniffi_contract_version(): number;
    ubrn_uniffi_breez_sdk_common_fn_init_callback_vtable_restclient(vtable: UniffiVTableCallbackInterfaceRestClient): void;
    ubrn_uniffi_internal_fn_method_restclient_ffi__bless_pointer(pointer: bigint, uniffi_out_err: UniffiRustCallStatus): UniffiRustArcPtr;
}
declare const getter: () => NativeModuleInterface;
export default getter;
export type UniffiRustFutureContinuationCallback = (data: bigint, pollResult: number) => void;
type UniffiForeignFutureFree = (handle: bigint) => void;
type UniffiCallbackInterfaceFree = (handle: bigint) => void;
export type UniffiForeignFuture = {
    handle: bigint;
    free: UniffiForeignFutureFree;
};
export type UniffiForeignFutureStructU8 = {
    returnValue: number;
    callStatus: UniffiRustCallStatus;
};
export type UniffiForeignFutureCompleteU8 = (callbackData: bigint, result: UniffiForeignFutureStructU8) => void;
export type UniffiForeignFutureStructI8 = {
    returnValue: number;
    callStatus: UniffiRustCallStatus;
};
export type UniffiForeignFutureCompleteI8 = (callbackData: bigint, result: UniffiForeignFutureStructI8) => void;
export type UniffiForeignFutureStructU16 = {
    returnValue: number;
    callStatus: UniffiRustCallStatus;
};
export type UniffiForeignFutureCompleteU16 = (callbackData: bigint, result: UniffiForeignFutureStructU16) => void;
export type UniffiForeignFutureStructI16 = {
    returnValue: number;
    callStatus: UniffiRustCallStatus;
};
export type UniffiForeignFutureCompleteI16 = (callbackData: bigint, result: UniffiForeignFutureStructI16) => void;
export type UniffiForeignFutureStructU32 = {
    returnValue: number;
    callStatus: UniffiRustCallStatus;
};
export type UniffiForeignFutureCompleteU32 = (callbackData: bigint, result: UniffiForeignFutureStructU32) => void;
export type UniffiForeignFutureStructI32 = {
    returnValue: number;
    callStatus: UniffiRustCallStatus;
};
export type UniffiForeignFutureCompleteI32 = (callbackData: bigint, result: UniffiForeignFutureStructI32) => void;
export type UniffiForeignFutureStructU64 = {
    returnValue: bigint;
    callStatus: UniffiRustCallStatus;
};
export type UniffiForeignFutureCompleteU64 = (callbackData: bigint, result: UniffiForeignFutureStructU64) => void;
export type UniffiForeignFutureStructI64 = {
    returnValue: bigint;
    callStatus: UniffiRustCallStatus;
};
export type UniffiForeignFutureCompleteI64 = (callbackData: bigint, result: UniffiForeignFutureStructI64) => void;
export type UniffiForeignFutureStructF32 = {
    returnValue: number;
    callStatus: UniffiRustCallStatus;
};
export type UniffiForeignFutureCompleteF32 = (callbackData: bigint, result: UniffiForeignFutureStructF32) => void;
export type UniffiForeignFutureStructF64 = {
    returnValue: number;
    callStatus: UniffiRustCallStatus;
};
export type UniffiForeignFutureCompleteF64 = (callbackData: bigint, result: UniffiForeignFutureStructF64) => void;
export type UniffiForeignFutureStructPointer = {
    returnValue: bigint;
    callStatus: UniffiRustCallStatus;
};
export type UniffiForeignFutureCompletePointer = (callbackData: bigint, result: UniffiForeignFutureStructPointer) => void;
export type UniffiForeignFutureStructRustBuffer = {
    returnValue: Uint8Array;
    callStatus: UniffiRustCallStatus;
};
export type UniffiForeignFutureCompleteRustBuffer = (callbackData: bigint, result: UniffiForeignFutureStructRustBuffer) => void;
export type UniffiForeignFutureStructVoid = {
    callStatus: UniffiRustCallStatus;
};
export type UniffiForeignFutureCompleteVoid = (callbackData: bigint, result: UniffiForeignFutureStructVoid) => void;
type UniffiCallbackInterfaceRestClientMethod0 = (uniffiHandle: bigint, url: Uint8Array, headers: Uint8Array, uniffiFutureCallback: UniffiForeignFutureCompleteRustBuffer, uniffiCallbackData: bigint) => UniffiResult<UniffiForeignFuture>;
type UniffiCallbackInterfaceRestClientMethod1 = (uniffiHandle: bigint, url: Uint8Array, headers: Uint8Array, body: Uint8Array, uniffiFutureCallback: UniffiForeignFutureCompleteRustBuffer, uniffiCallbackData: bigint) => UniffiResult<UniffiForeignFuture>;
type UniffiCallbackInterfaceRestClientMethod2 = (uniffiHandle: bigint, url: Uint8Array, headers: Uint8Array, body: Uint8Array, uniffiFutureCallback: UniffiForeignFutureCompleteRustBuffer, uniffiCallbackData: bigint) => UniffiResult<UniffiForeignFuture>;
export type UniffiVTableCallbackInterfaceRestClient = {
    getRequest: UniffiCallbackInterfaceRestClientMethod0;
    postRequest: UniffiCallbackInterfaceRestClientMethod1;
    deleteRequest: UniffiCallbackInterfaceRestClientMethod2;
    uniffiFree: UniffiCallbackInterfaceFree;
};
//# sourceMappingURL=breez_sdk_common-ffi.d.ts.map