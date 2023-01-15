function vowelCount(str){
    let vowels='aeiouAEIOU'
    let count=0;
    for(let index=0;index<str.length;index++){
        if(vowels.indexOf(str[index])!=-1)
        count++;
    }
    return count;
}
const vowelCountarrow =(str)=>{
    let vowels='aeiouAEIOU'
    let count=0;
    for(let index=0;index<str.length;index++){
        if(vowels.indexOf(str[index])!=-1)
        count++;
    }
    return count;
}
module.exports=vowelCount;