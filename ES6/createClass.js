class User{
    constructor(fname,lname){
        this.first = fname;
        this.last = lname;
    }
    getUserName(){
        return `${this.first} ${this.last}`;
    }
}
let user = new User('sandip','Ghane');
console.log(user.getUserName());