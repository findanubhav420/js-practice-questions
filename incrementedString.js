
function incrementedString(input){
    let updatedString=''
    for(let index=0;index<input.length;index++){
        if(input[index]=='z')
        updatedString+='a'
        else if(input[index]=='Z')
        updatedString+='A'
        else
        updatedString=updatedString.concat(String.fromCharCode(input[index].charCodeAt(index) + 1))
    }
    
    return updatedString;
}


module.exports=incrementedString