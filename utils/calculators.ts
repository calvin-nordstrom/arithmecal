export const calculators = [
  // Conversion
  { title: 'ASCII to Binary', category: 'Conversion', url: '/conversion/ascii-to-binary' },
  { title: 'ASCII to Decimal', category: 'Conversion', url: '/conversion/ascii-to-decimal' },
  { title: 'ASCII to Hex', category: 'Conversion', url: '/conversion/ascii-to-hex' },
  { title: 'ASCII to Octal', category: 'Conversion', url: '/conversion/ascii-to-octal' },
  { title: 'Binary to ASCII', category: 'Conversion', url: '/conversion/binary-to-ascii' },
  { title: 'Binary to Decimal', category: 'Conversion', url: '/conversion/binary-to-decimal' },
  { title: 'Binary to Hex', category: 'Conversion', url: '/conversion/binary-to-hex' },
  { title: 'Binary to Octal', category: 'Conversion', url: '/conversion/binary-to-octal' },
  { title: 'Decimal to ASCII', category: 'Conversion', url: '/conversion/decimal-to-ascii' },
  { title: 'Decimal to Binary', category: 'Conversion', url: '/conversion/decimal-to-binary' },
  { title: 'Decimal to Hex', category: 'Conversion', url: '/conversion/decimal-to-hex' },
  { title: 'Decimal to Octal', category: 'Conversion', url: '/conversion/decimal-to-octal' },
  { title: 'Hex to ASCII', category: 'Conversion', url: '/conversion/hex-to-ascii' },
  { title: 'Hex to Binary', category: 'Conversion', url: '/conversion/hex-to-binary' },
  { title: 'Hex to Decimal', category: 'Conversion', url: '/conversion/hex-to-decimal' },
  { title: 'Hex to Octal', category: 'Conversion', url: '/conversion/hex-to-octal' },
  { title: 'Octal to ASCII', category: 'Conversion', url: '/conversion/octal-to-ascii' },
  { title: 'Octal to Binary', category: 'Conversion', url: '/conversion/octal-to-binary' },
  { title: 'Octal to Decimal', category: 'Conversion', url: '/conversion/octal-to-decimal' },
  { title: 'Octal to Hex', category: 'Conversion', url: '/conversion/octal-to-hex' },
  { title: 'Unit Conversion', category: 'Conversion', url: '/conversion/unit-conversion' },

  // Math
  { title: 'Circumscribed Circle Calculator', category: 'Math', url: '/math/circumscribed-circle' },
  { title: 'FOIL Calculator', category: 'Math', url: '/math/foil' },
  { title: 'Percent Change Calculator', category: 'Math', url: '/math/percent-change' },
  { title: 'Quadratic Formula Calculator', category: 'Math', url: '/math/quadratic-formula' },
  { title: '30 60 90 Triangle Calculator', category: 'Math', url: '/math/triangle-30-60-90' },
  { title: '45 45 90 Triangle Calculator', category: 'Math', url: '/math/triangle-45-45-90' },
  { title: 'Trinomial Factoring Calculator', category: 'Math', url: '/math/trinomial-factoring' },

  // Physics
  { title: 'Acceleration Calculator', category: 'Physics ', url: '/physics/acceleration' },
  { title: 'Density Calculator', category: 'Physics ', url: '/physics/density' },
  { title: 'Free Fall Calculator', category: 'Physics ', url: '/physics/free-fall' },
  { title: 'Ideal Gas Law Calculator', category: 'Physics', url: '/physics/ideal-gas-law' },
  { title: 'Kinetic Energy Calculator', category: 'Physics ', url: '/physics/kinetic-energy' },
  { title: 'Potential Energy Calculator', category: 'Physics ', url: '/physics/potential-energy' },
  { title: 'Velocity Calculator', category: 'Physics ', url: '/physics/velocity' },

  // Reference
  { title: 'ASCII Table', category: 'Reference', url: '/reference/ascii-table' },
  { title: 'Table of Derivatives', category: 'Reference', url: '/reference/derivatives' },
  { title: 'Trigonometric Identities', category: 'Reference', url: '/reference/trig-identities' },
];

export type Calculator = typeof calculators[number];
