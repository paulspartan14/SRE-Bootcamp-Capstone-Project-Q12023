/**
 * Convierte un valor CIDR en una máscara de red.
 *
 * @param {number|string} value El valor CIDR a convertir.
 * @returns {string} La máscara de red correspondiente al valor CIDR.
 *
 * @example
 *
 * cidrToMaskFunction(24); // "255.255.255.0"
 */
export const cidrToMaskFunction = (value) => {
  const cidr = parseInt(value);
  const bits = "1".repeat(cidr).padEnd(32, "0");
  const octets = [0, 0, 0, 0];
  for (let i = 0; i < 32; i += 8) {
    octets[i / 8] = parseInt(bits.substr(i, 8), 2); 
  }
  const mask = octets.join(".");

  return mask;
}

/**
 * Convierte una máscara de red en un valor CIDR.
 *
 * @param {string} value La máscara de red en formato de dirección IP.
 * @returns {number} El valor CIDR correspondiente a la máscara de red.
 *
 * @example
 *
 * maskToCidrFunction("255.255.255.0"); // 24
 */
export const maskToCidrFunction = (value) => {

  // Verificar si la dirección IP es válida antes de continuar
  if (!ipv4ValidationFunction(value)) {
    throw new Error("La dirección IP no es válida.");
  }

  const octets = value.split(".").map((octet) => parseInt(octet));
  let cidr = 0; 
  for (let i = 0; i < 4; i++) {
    const binary = octets[i].toString(2); 
    cidr += binary.split("1").length - 1;
  }

  return cidr;
}

/**
 * Valida si una dirección IP es válida en formato IPv4.
 *
 * @param {string} ip La dirección IP a validar.
 * @returns {boolean} `true` si la dirección IP es válida, `false` en caso contrario.
 *
 * @example
 *
 * ipv4ValidationFunction("192.168.1.1"); // true
 */
 export const ipv4ValidationFunction = (ip) => {
  const octets = ip.split("."); 
  if (octets.length !== 4) { 
    return false;
  }
  for (let i = 0; i < 4; i++) {
    const octet = parseInt(octets[i]); 
    if (isNaN(octet) || octet < 0 || octet > 255) { 
      return false;
    }
  }
  return true;
}
