const largestEvenNumber= require('./largestEvenNumber')

test('It is getting largest Even Number',()=>{
    let numbers=[1, 2, 3, 4, 5]
    expect(largestEvenNumber(numbers)).toBe(4)
})
test('It is getting largest Even Number',()=>{
    let numbers=[1, 3, 5, 7]
    expect(largestEvenNumber(numbers)).toBe(-1)
})