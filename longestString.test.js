const longestString =require('./longestString')

test('longest String',()=>{
    let strings=["we", "love", "code", "academy"]
    expect(longestString(strings)).toBe("academy")
})