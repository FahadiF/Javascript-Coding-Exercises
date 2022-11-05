/* My code */
function fibonacciGenerator (n) {
    
    n = n-1;

    var input = [0];
    
    var length = input.length;

    if(n>0){
        input.push(1);
    }

    while (length<n){

        var length = input.length;

        var a = (input[length-2]);

        var b = (input[length-1]);

        var c = (a+b);
            
        input.push(c);
    }
    
    console.log(input);   
    
}


fibonacciGenerator (1);

/* My code End */
