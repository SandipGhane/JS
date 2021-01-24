let jane = {first : 'sandip',last:'ghane'};

let sayName=({first,last,middle = "Rangnath"})=>{
    console.log(`${first} ${middle} ${last}`);
}

sayName(jane);