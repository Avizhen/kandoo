import { base64encode, base64decode } from "./base64.ts";


// from string to base-64
export function toBase64(str: string): string {
    
    let encoder: TextEncoder = new TextEncoder();
    let uint8array: Uint8Array = encoder.encode(str);
    let base64: string = base64encode(uint8array);   

    return base64;
}

// from base-64 to string
export function toStr(base64: string): string {
    
    let decoder: TextDecoder = new TextDecoder();
    let arr: ArrayBuffer = base64decode(base64).split(',');
    let uint8array: Uint8Array = new Uint8Array(arr);
    let str: string = decoder.decode(uint8array);
    
    return str;
}

