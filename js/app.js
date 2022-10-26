
var value = 787;
var num = 0;
while(value>0){
  
  var value2 = (value%10);
  value = ((value-value2)/10);
  num = num+value2
 
}
console.log(num);


