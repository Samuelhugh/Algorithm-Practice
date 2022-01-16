var myAssocArr = {};
var arr1 = ["abc", 3, "yo"];
var arr2 = [42, "wassup", true];

myAssocArr.abc = 42;
myAssocArr[3] = "wassup";
myAssocArr["yo"] = true;

console.log(myAssocArr);