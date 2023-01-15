const endWithScript=require('./endWithScript')
test ('ends with script',()=>{
    expect(endWithScript("javaScript")).toBe(true)
})