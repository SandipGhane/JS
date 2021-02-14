// // const arr = ['a', 'b', 'c', 'd'];
// // const str = "sandip";
// // // for (const item of str) {
// // //     console.log(item);
// // // }


// // for (const [index, value] of arr.entries()) {
// //     console.log('idx', index);
// //     console.log('value', value);
// // }

// // // for (const item in arr) {
// // //     console.log(arr[item]);
// // // }

// function Human(fname, lname) {
//     this.fname = fname;
//     this.lname = lname;
// }

// Human.prototype.fullName = function () {
//     return this.fname + " " + this.lname;
// }

// function Developer(fname, lname, type) {
//     Human.call(this, fname, lname);
//     this.type = type;
// }
// console.log('prototype', Human.prototype);
// //Have Developer inherit from Human , by creating an Object that inherits from Human prootype
// Developer.prototype = Object.create(Human.prototype);
// console.log('Developer protype', Developer.prototype);


// Developer.prototype.constructor = Developer;
// Developer.prototype.fullNameAndLanguage = function () {
//     return `${Human.prototype.fullName.call(this)} develops ${this.type}`;
// };

// // Add static helper function to Developer
// Developer.isJSdev = function (cody) {
//     return cody.language === 'javascript';
// };

// const cody = new Developer('Cody', 'Lindley', 'javascript');
// console.log('cody', cody);

// // Call fullNameAndLanguage() method
// console.log(cody.fullNameAndLanguage()); // logs "Cody Lindley develops JavaScript"

// // Call fullName() method
// console.log(cody.fullName()); // logs "Cody Lindley"

// // Call static type of Developer
// console.log(Developer.isJSdev(cody)); // logs true    



let stateOfLoading = 'Not Loading'; // this is the default state

// add async keyword to arrow function, now this function returns a promise and can use await operator
const getLastGitHubCommitAuthor = async (owner, repo) => {
    try {
        stateOfLoading = "Loading";
        // await pauses this function until the promise from fetch is fulfilled
        const commits = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits`);
        console.log('sandip');
        // await pauses this function until the promise from .json() is fulfilled
        const jsonCommits = await commits.json(); // json() returns a promise
        // await pauses this function until the promise from fetch is fulfilled
        const author = await fetch(`https://api.github.com/users/${jsonCommits[0].author.login}`);
        // await pauses this function until the promise from .json() is fulfilled
        const jsonAuthor = await author.json(); // json() returns a promise
        return jsonAuthor.name; // a string is returned, but it is wrapped in a Promise
    } catch (error) { // any and all errors from the try and caught here, sort of like .catch()
        stateOfLoading = 'Error Loading';
        throw new Error(error); // throw error so async function will return rejected promise.
    } finally { // can replace the .finally() method functional from a promise chain
        stateOfLoading = 'Not Loading';
    }
};

// Now consume the async function, which returns a promise, with promise methods.
getLastGitHubCommitAuthor('facebook', 'react')
    .then(name => console.log(name + ' is the last person to commit to the React repository'))
    .catch(error => console.log(error.toString()));