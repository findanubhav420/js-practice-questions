function largestEvenNumber(numbers){
    let res=-1;
    // numbers.forEach(LargestEvenNumber);

    // function LargestEvenNumber(number){
    //     if(number%2===0&& number>res ) res == number
    // }
    for (let index=0;index<numbers.length;index++)
    if(numbers[index]%2===0 && numbers[index]>res )
        res =numbers[index]
    return res;
}

const largestEvenNumberarrow= (numbers)=>{
    let res=-1;
    // numbers.forEach(LargestEvenNumber);

    // function LargestEvenNumber(number){
    //     if(number%2===0&& number>res ) res == number
    // }
    for (let index=0;index<numbers.length;index++)
    if(numbers[index]%2===0 && numbers[index]>res )
        res =numbers[index]
    return res;
}

module.exports= largestEvenNumber;