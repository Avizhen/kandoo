import { toBase64 } from './convert2base64.ts';
import { crc32 } from './crc32.ts';

// string -> base-64 -> crc32
export function fileName(input: string): string {

	let base64 = toBase64(input);
	return crc32(base64);
}