const vowelCount=require('./vowelCount')
test('Counts of vowels',()=>{
    expect(vowelCount("codeacademy")).toBe(5);
})