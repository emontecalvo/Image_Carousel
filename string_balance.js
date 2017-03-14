 // Given a string consists of different types of brackets,
 //  write a function to determine the string is balanced.
 //   For example, " ([])" and "[]{}" are balanced but "([)]" and "](){" are not.
 //    You can assume these are the only characters in the string: ()[]{}


var balancer = function(string) {
	var stringArr = string.split("");
	var bracketList = ["{", "}", "[", "]", "(", ")"];
	var open = ["{", "[", "("];
	var close = ["}", "]", ")"];
	var bracketArr = [];
	for (var i = 0; i < stringArr.length; i++) {
		if (bracketList.indexOf(stringArr[i]) !== -1 ) {
			bracketArr.push(stringArr[i]);
		}
	}

	for (var j = 0; j < bracketArr.length; j++) {
		if (open.indexOf(bracketArr[j]) !== -1) {
			var frontInd = open.indexOf(bracketArr[j]);
			var end = bracketArr.pop();
			var endInd = close.indexOf(end);
			if (frontInd !== endInd) {
				return false;
			}
		} else {
			return false;
		}
	}
	return true;
}

var test1 = "nothing";
var test2 = "{cat}";
var test3 = "{test[test(more)]food}";
var test4 = "}test[]{";
var test5 = "food{is[great]";
var test6 = "this{is[a(((commplicated))x)]}test";
var test7 = "this{is[a(((commplicated)x)]}test";


balancer(test1);
// should return true

balancer(test2);
// should return true

balancer(test3);
// shoulder return true

balancer(test4);
// should return false

balancer(test5);
// should return false

balancer(test6);
// should return true

balancer(test7);
// should return false






