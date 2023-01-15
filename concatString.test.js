const concatString =require('./concatString')
test('strings concatenated',()=>{
    let strings=["code", "academy"];
    expect(concatString(strings)).toBe("odecademy")
})