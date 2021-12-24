export const STRONGPASSWORD = new RegExp(
  '((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))',
);
export const MEDIUMPASSWORD = new RegExp(
  '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})',
);
export const TAXCODE = '^[0-9]{10}$';
export const SIXNUMS = '^[0-9]{6}$';
export const FOURNUMS = '^[0-9]{4}$';
