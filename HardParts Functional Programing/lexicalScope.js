const outerFunction =()=>{
    if(true){
        var a=10;
        // console.log("here b =>",b);
    }
    var nestedFunc = ()=>{
        if(true){
            var b =7;
            console.log('here a =>',a);
        }
        if(true){
            console.log("here b =>",b);
        }

    }
    return nestedFunc;
}

var call = outerFunction();
call.nestedFunc();