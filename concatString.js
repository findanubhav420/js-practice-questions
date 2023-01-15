function concatString(strings){
    return strings[0].slice(1,strings[0].length)+strings[1].slice(1,strings[1].length)
}
const concatStringArrow=(strings)=>{
    return strings[0].slice(1,strings[0].length)+strings[1].slice(1,strings[1].length)
}
module.exports= concatString;