function print(){
console.log(1);
   return new Promise((res,rej)=>{
       setTimeout(()=>{
            res(2);
       },2000)
   })
}
print().then((res)=>{
    console.log(res);
})