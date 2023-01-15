const isLeap=require('./isLeap')
test('check leap year',()=>{
    expect(isLeap(2000)).toBe(true)
})