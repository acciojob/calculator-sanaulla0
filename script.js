//your code here
let input =document.getElementById("input");
let process = '';
function solve(item){

 if(item=='ans'){
  let result = eval(process);
  input.value=result;
  console.log(result);

 }

 else if(item=='clr'){
  process='';
   input.value='';

 }
 else{
  process+=item;
  console.log(process);
  input.value=process;

 }




}

