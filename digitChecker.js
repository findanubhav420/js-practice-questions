function digitChecker(number){
    let last_digit=number%10;
    
    while(number!=0){

        // number=number/10;
        
        let current_digit=number%10
        number=parseInt(number/10);
        if(last_digit!=current_digit)
        {
            return false;
        }

    }
    return true;
}

const digitCheckerArrow=(number)=>{
    let last_digit=number%10;
    
    while(number!=0){

        // number=number/10;
        
        let current_digit=number%10
        number=(number/10);
        if(last_digit!=current_digit)
        {
            return false;
        }

    }
    return true;
}

module.exports =digitChecker;