/*
  * ASCII converters
*/

// Convert ASCII to Binary
export function asciiToBinary(text: string): string {
  return text
    .split('')
    .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
    .join(' ');
}

// Convert ASCII to Decimal
export function asciiToDecimal(text: string): string {
  return text
    .split('')
    .map(char => char.charCodeAt(0).toString(10))
    .join(' ');
}

// Convert ASCII to Hexadecimal
export function asciiToHex(text: string): string {
  return text
    .split('')
    .map(char => char.charCodeAt(0).toString(16).padStart(2, '0'))
    .join(' ');
}

// Convert ASCII to Octal
export function asciiToOctal(text: string): string {
  return text
    .split('')
    .map(char => char.charCodeAt(0).toString(8))
    .join(' ');
}

/*
  * Binary converters
*/

// Convert Binary to ASCII
export function binaryToAscii(binary: string): string {
  return binary
    .trim()
    .split(/\s+/)
    .map(bin => {
      const charCode = parseInt(bin, 2);
      if (isNaN(charCode)) throw new Error('Invalid binary input');
      return String.fromCharCode(charCode);
    })
    .join('');
}

// Convert Binary to Decimal
export function binaryToDecimal(binary: string): string {
  return binary
    .trim()
    .split(/\s+/)
    .map(bin => {
      const num = parseInt(bin, 2);
      if (isNaN(num)) throw new Error('Invalid binary input');
      return num.toString(10);
    })
    .join(' ');
}

// Convert Binary to Hexadecimal
export function binaryToHex(binary: string): string {
  return binary
    .trim()
    .split(/\s+/)
    .map(bin => {
      const num = parseInt(bin, 2);
      if (isNaN(num)) throw new Error('Invalid binary input');
      return num.toString(16);
    })
    .join(' ');
}

// Convert Binary to Octal
export function binaryToOctal(binary: string): string {
  return binary
    .trim()
    .split(/\s+/)
    .map(bin => {
      const num = parseInt(bin, 2);
      if (isNaN(num)) throw new Error('Invalid binary input');
      return num.toString(8);
    })
    .join(' ');
}

/*
  * Decimal converters
*/

// Convert Decimal to ASCII
export function decimalToAscii(decimal: string): string {
  return decimal
    .trim()
    .split(/\s+/)
    .map(numStr => {
      const code = parseInt(numStr, 10);
      if (isNaN(code)) throw new Error('Invalid decimal input');
      return String.fromCharCode(code);
    })
    .join('');
}

// Convert Decimal to Binary
export function decimalToBinary(decimal: string): string {
  return decimal
    .trim()
    .split(/\s+/)
    .map(numStr => {
      const num = parseInt(numStr, 10);
      if (isNaN(num)) throw new Error('Invalid decimal input');
      return num.toString(2).padStart(8, '0');
    })
    .join(' ');
}

// Convert Decimal to Hexadecimal
export function decimalToHex(decimal: string): string {
  return decimal
    .trim()
    .split(/\s+/)
    .map(numStr => {
      const num = parseInt(numStr, 10);
      if (isNaN(num)) throw new Error('Invalid decimal input');
      return num.toString(16);
    })
    .join(' ');
}

// Convert Decimal to Octal
export function decimalToOctal(decimal: string): string {
  return decimal
    .trim()
    .split(/\s+/)
    .map(numStr => {
      const num = parseInt(numStr, 10);
      if (isNaN(num)) throw new Error('Invalid decimal input');
      return num.toString(8);
    })
    .join(' ');
}

/*
  * Hexadecimal converters
*/

// Convert Hexadecimal to ASCII
export function hexToAscii(hex: string): string {
  return hex
    .trim()
    .split(/\s+/)
    .map(h => {
      const num = parseInt(h, 16);
      if (isNaN(num)) throw new Error('Invalid hex input');
      return String.fromCharCode(num);
    })
    .join('');
}

// Convert Hexadecimal to Binary
export function hexToBinary(hex: string): string {
  return hex
    .trim()
    .split(/\s+/)
    .map(h => {
      const num = parseInt(h, 16);
      if (isNaN(num)) throw new Error('Invalid hex input');
      return num.toString(2).padStart(8, '0');
    })
    .join(' ');
}

// Convert Hexadecimal to Decimal
export function hexToDecimal(hex: string): string {
  return hex
    .trim()
    .split(/\s+/)
    .map(h => {
      const num = parseInt(h, 16);
      if (isNaN(num)) throw new Error('Invalid hex input');
      return num.toString(10);
    })
    .join(' ');
}

// Convert Hexadecimal to Octal
export function hexToOctal(hex: string): string {
  return hex
    .trim()
    .split(/\s+/)
    .map(h => {
      const num = parseInt(h, 16);
      if (isNaN(num)) throw new Error('Invalid hex input');
      return num.toString(8);
    })
    .join(' ');
}

/*
  * Octal converters
*/

// Convert Octal to ASCII
export function octalToAscii(octal: string): string {
  return octal
    .trim()
    .split(/\s+/)
    .map(o => {
      const num = parseInt(o, 8);
      if (isNaN(num)) throw new Error('Invalid octal input');
      return String.fromCharCode(num);
    })
    .join('');
}

// Convert Octal to Binary
export function octalToBinary(octal: string): string {
  return octal
    .trim()
    .split(/\s+/)
    .map(o => {
      const num = parseInt(o, 8);
      if (isNaN(num)) throw new Error('Invalid octal input');
      return num.toString(2).padStart(8, '0');
    })
    .join(' ');
}

// Convert Octal to Decimal
export function octalToDecimal(octal: string): string {
  return octal
    .trim()
    .split(/\s+/)
    .map(o => {
      const num = parseInt(o, 8);
      if (isNaN(num)) throw new Error('Invalid octal input');
      return num.toString(10);
    })
    .join(' ');
}

// Convert Octal to Hexadecimal
export function octalToHex(octal: string): string {
  return octal
    .trim()
    .split(/\s+/)
    .map(o => {
      const num = parseInt(o, 8);
      if (isNaN(num)) throw new Error('Invalid octal input');
      return num.toString(16);
    })
    .join(' ');
}
