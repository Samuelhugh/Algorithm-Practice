const hash = {"name":"Zaphod", "numheads":2}
function invertHash(assocArr) {
  // Grab The All keys in The Object 
  for(let key in assocArr) {
    // Storing The key:value pairs
    let temp = assocArr[key];
    let temp1 = key;
    // Deleting The key:value pairs 
    delete assocArr[key];
    // inverting/swapping The key:value pairs
    key = temp;
    assocArr[key] = temp1;
    }
  return assocArr;
  }

console.log(invertHash(hash));