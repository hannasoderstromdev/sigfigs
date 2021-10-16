import DecimalNumber from "./DecimalNumber";

describe("DecimalNumber", () => {
  it("has a number", () => {
    const myDecimalNumber = new DecimalNumber("1.00", 3);
    expect(myDecimalNumber.number).toEqual("1.00");
  });

  it("has a precision", () => {
    const myDecimalNumber = new DecimalNumber("1.00", 3);
    expect(myDecimalNumber.precision).toEqual(3);
  });

  it("sets number to precision given, leading zeros", () => {
    const myDecimalNumber1 = new DecimalNumber("0.0010", 1);
    expect(myDecimalNumber1.number).toEqual("0.001");
    const myDecimalNumber2 = new DecimalNumber("0.0010", 2);
    expect(myDecimalNumber2.number).toEqual("0.0010");
  });

  it("sets number to precision given, trailing zeros", () => {
    const myDecimalNumber = new DecimalNumber("100.", 1);
    expect(myDecimalNumber.number).toEqual("1e+2");
  });

  it("throws if num is NaN", () => {
    expect(() => {
      const myDecimalNumber = new DecimalNumber("a", 4);
    }).toThrow("num must be a valid number");
  });

  it("throws if prec is NaN", () => {
    expect(() => {
      // @ts-ignore
      const myDecimalNumber = new DecimalNumber("1");
    }).toThrow("prec must be a valid number");
  });

  it("does not allow greater precision than input", () => {
    expect(() => {
      const myDecimalNumber = new DecimalNumber("1.00", 4);
    }).toThrow("Precision must be same or lower than in the number given");
  });
});
