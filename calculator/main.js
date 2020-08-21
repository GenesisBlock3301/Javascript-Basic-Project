console.log("It's working");
clr = () =>{
    document.getElementById('display').value = "";
};

dis = (val) =>{
  document.getElementById('display').value += val;
};

solve = () =>{
  let x = document.getElementById('display').value;
  let ans = eval(x);
  document.getElementById('display').value = ans;
};