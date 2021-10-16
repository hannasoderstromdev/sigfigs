/**
 * Represents a decimal number
 * @class
 * @constructor
 * @param {string} num - The decimal number.
 * @param {number} prec - The precision of the decimal number.
 */

export default class DecimalNumber {
  private _number: string = "0";
  private _precision: number = 0;

  constructor(num: string, prec: number) {
    // Throw if num is NaN
    if (isNaN(parseFloat(num))) {
      throw Error("num must be a valid number");
    }

    // Throw if prec is NaN
    if (isNaN(prec)) {
      throw Error("prec must be a valid number");
    }

    // Throw if prec is larger than num
    const numWithPrecision = parseFloat(num).toPrecision(prec);

    if (numWithPrecision.length > num.length) {
      throw Error("Precision must be same or lower than in the number given");
    }

    this._getLeadingZeros(num);

    this._precision = prec;
    this._number = numWithPrecision;
  }

  get number(): string {
    return this._number;
  }

  set number(num: string) {
    this._number = parseFloat(num).toPrecision(this._precision);
  }

  get precision(): number {
    return this._precision;
  }

  set precision(prec: number) {
    this._precision = prec;
  }

  _numOfDecimals(num: string): number {
    const match = ("" + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    if (!match) {
      return 0;
    }
    return Math.max(
      0,
      // Number of digits right of decimal point.
      (match[1] ? match[1].length : 0) -
        // Adjust for scientific notation.
        (match[2] ? +match[2] : 0)
    );
  }

  _getLeadingZeros(num: string) {
    const match = num.match(/^-?(0+)\.(0*)/);
    const zerosBefore = match ? match[1].length : 0;
    const zerosAfter = match ? match[2].length : 0;
    const leadingZeros = zerosBefore + zerosAfter;
    return leadingZeros;
  }
}
