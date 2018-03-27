function findUniq(arr) {
  // lowercase all letters
  const lcArr = arr.map(str => str.toLowerCase())
  // remove duplicates
  const ndArr = arr.map(str => [...str].filter((e, i, a) => i === a.lastIndexOf(e)))
  return ndArr
}
