// string.startsWith('args');
// boolean value returns . if args is find 1st position in string then return true otherwise returns false.

console.log('x-pre-funded'.startsWith('pre'));// logs false

// string.endsWith('args')
// simmilar as a startWith but its check string ends with args.
console.log('pre-funded-x'.endsWith('funded')); //logs false


// .includes()
// this method will check if a string contains a specific sub-string

console.log('pre-funded-course'.includes('re'));// logs true
console.log('can i used includes in array:', [1, 2, 3, 4, 5].includes(3));

// repeat()
// This method will take a string and returns same string repeayted as many times as provided in first argument.

console.log('SandipGhane'.repeat(4));
// logs - SandipGhaneSandipGhaneSandipGhaneSandipGhane

// padStart and padEnd
// this methods will pad the beggining or end of a string with repeating 
// non-breaking spaces (by default) or a specified string of characters

console.log('padStart'.padStart(20, 'o'));
// print o(20-'padStart.length') time at starting
// logs oooooooooooopadStart

console.log('padEnd'.padEnd(20, '!'));
// print !(20-padEnd.length) times at ending.