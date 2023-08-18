export const estaBienFormadoElIban = (value: string): boolean => {
  const patron = /^ES\d{2}(\s|-)?\d{4}(\s|-)?\d{4}(\s|-)?\d{2}(\s|-)?\d{10}$/gm;
  return patron.test(value);
};
