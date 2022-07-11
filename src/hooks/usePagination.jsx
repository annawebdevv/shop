export function getArray(arg) {
  let arr = [];
  for (let i = 1; i <= arg; i++) {
    if (i <= arg) arr.push(i);
  }
  return arr;
}

export const usePagination = (num) => {
  const pages = getArray(num);
  return pages
};
