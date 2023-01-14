const digitChecker= require('./digitChecker')

test('Check Digits',()=>{
    expect(digitChecker(22)).toBe(true)
})