const caseChanger=require('./caseChanger')

test("case changed",()=>{
    expect(caseChanger('MeRRy hAD a LITTle lAMp')).toBe('mErrY Had A littLE LamP')
})