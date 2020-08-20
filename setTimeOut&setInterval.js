// arrow function
sum = (a,b) =>{
    return a+b;
};

// setTimeout(function,time_interval)
Do_log = () =>{
    document.querySelector('.container').innerHTML = "<b> Query selector working inside setTimeout";
    console.log("Active setTimeout")
};
// setTimeout(Do_log,2000);

Do_log2 = () =>{
    document.querySelector('.container').innerHTML = "<b> Query selector working inside setInterval";
    console.log("Active setTimeInterval")
};
// after some time repeatedly show same function
clr = setInterval(Do_log2,2000);
clearInterval(clr);