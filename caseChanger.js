// function caseChanger(str){
//     var newstr= '';
//     let len=str.length;
//     for(let index=0; index<len;index++){
//         if(str.charCodeAt(index)>=97&&str.charCodeAt(index)<=122){
//             newstr+=str[index].toUpperCase();
//         }
//         else if(str.charCodeAt(index)>=65&&str.charCodeAt(index)<=90){
//             newstr+=str[index].toLowerCase();
//         }
//             else
//                 newstr+=str[index];
//     }
//     return newstr;

// }

const caseChanger =(str)=>{
    var newstr= '';
    let len=str.length;
    for(let index=0; index<len;index++){
        if(str.charCodeAt(index)>=97&&str.charCodeAt(index)<=122){
            newstr+=str[index].toUpperCase();
        }
        else if(str.charCodeAt(index)>=65&&str.charCodeAt(index)<=90){
            newstr+=str[index].toLowerCase();
        }
            else
                newstr+=str[index];
    }
    return newstr;

}
module.exports =caseChanger;