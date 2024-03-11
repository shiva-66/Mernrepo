let getFactorial=(num)=>{
    let fact=1;
    for(let i=1;i<=num;i++){
        fact *=i;
    }
    return fact;
}

let product=(req,res)=>{
    let no1=req.params.num1;
    let no2=req.params.num2;
    let product=no1 * no2;

    res.send("<h1>The product of "+no1+" * "+no2+" is "+product+"</h1>")
}

let fibo=(req,res)=>{
    let a=req.params.maxNo
    let b=0;
	 let c=1;
     let str="";
				 
          for (i=0; i>=0; i++){
                                                                                                        
             d=b+c;
            str+=b+",";
             //document.getElementById("result").innerHTML+=(b+", ");	
             b=c;
             c=d;
             if (b>a){
             break
             }			
         }
         res.send("<h1>Fibonacci series till "+a+" is "+str+"</h1>")
}
module.exports={getFactorial,product,fibo}