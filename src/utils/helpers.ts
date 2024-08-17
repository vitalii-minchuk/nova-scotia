export const shuffleTwoArrays = (arr1: any, arr2: any) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return [];

  return [...arr1, ...arr2].sort(() => Math.random() - 0.5);
};
