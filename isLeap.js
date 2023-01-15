function isLeap(year){
    let res;
(year%400==0||(year%100!=0&&year%4==0))?res=true: res= false;
return  res;
}
const isLeapArrow =(year)=>{
    let res;
    (year%400==0||(year%100!=0&&year%4==0))?res=true: res= false;
    return  res;
}
module.exports=isLeap;