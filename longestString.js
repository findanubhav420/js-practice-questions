function longestString(strings){
    let res='';
    for(let index=0;index<strings.length;index++){
        if(strings[index].length>res.length)
        res=strings[index];
    }
    return res;
}
const longestStringArrow =(strings)=>{
    let res='';
    for(let index=0;index<strings.length;index++){
        if(strings[index].length>res.length)
        res=strings[index];
    }
    return res;
}
module.exports=longestString;