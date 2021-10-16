import DecimalNumber from "DecimalNumber";

/**
 *  Adds two or more numbers
 *  @param    numbers  an array of DecimalNumbers
 *  @returns           a DecimalNumber
 */
export function add(numbers: DecimalNumber[]): DecimalNumber {
  const Result: DecimalNumber = new DecimalNumber("0", 0);

  for (let index = 0; index < numbers.length; index++) {
    const current = numbers[index];
    if (current.precision < Result.precision) {
      Result.precision = current.precision;
    }
    Result.number = Result.number + current.number;
  }

  return Result;
}

export function subtract() {}

export function divide() {}
