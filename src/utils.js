export const keys = (obj) => Object.keys(obj);
export const union = (dataOne, dataTwo) => {
  const keysList = [...dataOne, ...dataTwo];
  const uniqueKeys = keysList.filter((key, i) => keysList.indexOf(key) === i);

  return uniqueKeys;
};
