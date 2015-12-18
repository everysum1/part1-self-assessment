console.log('Let\'s start Hacking!');

//1. 

console.log('Javascript is super duper awesome'[4]);

//2. 

for (var i = 0; i<'Javascript is super duper awesome'.length; i++) {
	console.log('Javascript is super duper awesome'[i]);
};

//3. 

i=0; 
while (i<'Javascript is super duper awesome'.length) {
	console.log('Javascript is super duper awesome'[i]);
	i++;
};



myProfileObject = {};
JavascriptArray = ['J', 'a', 'v', 'a'];

//4.

myProfileObject.school = 'Telegraph Prep';
myProfileObject.location = 'Berkeley, CA';
myProfileObject.name = 'Izzy Meto';

console.log(myProfileObject);

//5.

function profileMaker (obj, name) {
	return {
		name: name, 
		'place of birth': 'Bridgewater, CT', 
		hobby: 'guitar',
		namePrinter: function () {
			nameArr = name.split(' ');
			console.log('My first name is ' + nameArr[0] 
				+ ' and my last name is ' + nameArr[1]);
			// console.log( 'My first name is ' + nameArr[0] + ' and my 
			// 	last name is ' + nameArr[1] );
		}
	}
};

var exampleObj = profileMaker(myProfileObject, 'Izzy Meto');

console.log(exampleObj);

exampleObj.namePrinter();

//6.

function nameChecker (name) {
	if ( name === exampleObj['name']) {
		return true;
	}
};

nameChecker('Izzy Meto');

//7.

function lengthGetter (obj) {
	return obj.length;
};

//8. 

function splitify (string) {
	return string.split('');
};

//9. 

function jsArray (string) {
	return ['JavaScript'];
};


