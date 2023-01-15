function endWithScript(str){
    if(str.lenth<6)
    return false;

    let result= str.slice(str.length-6,str.length);
    if(result=='Script')
    return true;
    else return false;
}
const endWithScriptArrow = (str)=>{
    if(str.lenth<6)
    return false;

    let result= str.slice(str.length-6,str.length);
    if(result=='Script')
    return true;
    else return false;
}
module.exports=endWithScript;