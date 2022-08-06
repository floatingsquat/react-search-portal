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
    if (new Date(a[3]) > new Date(b[3])) return 1;
    if (new Date(a[3]) < new Date(b[3])) return -1;
    return 0;
  });

  return sortedArray;
}

export function descendingYearSort(arr) {
  const sortedArray = [...arr].sort(function (a, b) {
    if (b[3] > a[3]) return 1;
    if (b[3] < a[3]) return -1;
    return 0;
  });
  return sortedArray;
}
