export function ascendingNameSort(arr) {
  const sortedArray = [...arr].sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  return sortedArray;
}

export function descendingNameSort(arr) {
  const sortedArray = [...arr].sort(function (a, b) {
    if (b > a) return 1;
    if (b < a) return -1;
    return 0;
  });
  return sortedArray;
}

export function ascendingYearSort(arr) {
  const sortedArray = [...arr].sort(function (a, b) {
    const x = a[3].split("/").reverse().join("");
    const y = b[3].split("/").reverse().join("");
    if (x[3] > y[3]) return 1;
    if (x[3] < y[3]) return -1;
    return 0;
  });
  return sortedArray;
}

export function descendingYearSort(arr) {
  const sortedArray = [...arr].sort(function (a, b) {
    const x = a[3].split("/").reverse().join("");
    const y = b[3].split("/").reverse().join("");
    if (y[3] > x[3]) return 1;
    if (y[3] < x[3]) return -1;
    return 0;
  });
  return sortedArray;
}
