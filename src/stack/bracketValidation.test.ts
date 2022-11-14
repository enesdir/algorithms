import { BracketValidation } from "./bracketValidation"
let validation = new BracketValidation()
beforeEach(() => {
  validation = new BracketValidation()
})

describe("check for multi bracket validation", () => {
  it("should sucessfully return true for balanced paranthesis", () => {
    //act
    let expression = validation.checkForValidation("(asdf)")
    expect(expression).toBe(true)
  })
  it("should sucessfully return false for unbalanced paranthesis", () => {
    //act
    let expression = validation.checkForValidation("(asdf)}")
    expect(expression).toBe(false)
  })
  it("should sucessfully return false for string started with closing paranthesis", () => {
    //act
    let expression = validation.checkForValidation("]hello")
    expect(expression).toBe(false)
  })
  it("should sucessfully return true for right multi nested paranthesis", () => {
    //act
    let expression = validation.checkForValidation(
      "asdf[assas{dsaf(fsdaf<sdaf>fasdad)sdfsd}sadf]adsf"
    )
    expect(expression).toBe(true)
  })
  it("should sucessfully return true no paranthesis", () => {
    //act
    let expression = validation.checkForValidation("xysz")
    expect(expression).toBe(true)
  })
})
