export const isFalsy = (value: unknown): boolean =>
  value === 0 ? false : !value;
export const cleanObject = (object: object) => {
  let result = { ...object };
  Object.keys(result).forEach((key) => {
    console.log("key", key);
    const value = result[key as keyof object];
    if (isFalsy(value)) {
      delete result[key as keyof object];
    }
  });
  return result;
};
