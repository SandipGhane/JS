name = "sandip Ghane";//define global scope (window)
// console.log(name);
var object = {
    name: "Kiran Ghane",
}
greeting = function () {
    // if the greeting function has a defined this that is not window.(i.e - global)
    console.log((this != undefined && this !== window) ? this.name : window.name);
}

// invoke greeting , where the this for the greeting function is the global scope. 
greeting();
// logs Sandip Ghane because the value of the name is in the global scope.



//.bind() methods greeting function this value to object.
bindGreeting = greeting.bind(object);
bindGreeting(); //logs Kiran Ghane (this points to the object not window(global scope))


// All coding question of Level 1 , Level 2 interviews
// 1.Nearest prime for given number
// 2.Leap year
// 3. Second largest in array
// 4. String to Int
// 5. Stock price (maximum profit)  
// convert string to integer without using inbuilt
// combine two json into single json, questions related to ajax call and jquery.  
// write program for ip address  
// Programs 1) To find second largest element of array without sorting. 2) To find year is leap year or not. 3) Star diamond pattern.  
// Compressing a string. (eg. “aaaabbbc” will be compressed as “a4b3c1”)  
// Program for finding leap year.  
// Reversing a singly linked list.  

// Program for finding second maximum from an array of integers.  

// Program for reversing words of a given string (eg. “I love my country” will be reversed as “country my love I”)  