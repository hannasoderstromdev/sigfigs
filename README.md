# SigFigs

Significant Figures, or "sigfigs" are used to determine how exact a number is. This is relevant when rounding decimal numbers. JavaScript, as many programming languages, struggle with rounding decimal numbers (floats).

Typically, JavaScript will reduce the precision of a number of any trailing zeros: `1.00` will be equal to `1`. Intuitively, this might make sense. But in real life, any number representing a measurement will always be imprecise. It can only be exact to the degree the precision of the measurement was exact. This information is easily lost.

An example: A scale that only show kg might determine that a letter weighs 0 kg. You will intuitively think this must be incorrect, as nothing you can put on a scale weights absolutely nothing. But if the scale showed 1kg you would be equally concerned, as a piece of paper shouldn't weigh 1kg. This is the result of lacking precision of the scale.

A scale for letters will measure 5g (0.05kg). This will make more sense, but is also not the absolute truth. An even more precise scale will give you more decimals and be more exact. It will be closer to the absolute truth due to higher precision.

Why does this matter?

If you were to measure 100 letters individually they would all measure 5g and you would conclude that the total weight of all those letters must then be 500g. But then as you weigh them all together, it might turn out their actual total weight is more (or less) than 500g, as the precision was limited and that lack of precision adds up over time.

This also means that introducing additional decimal points when calculating from inexact measurements, will add a level of exactness that is not measured, but rather made up.

Therefore, it's important to keep decimals in measurements, as they will tell you how exact the measurement was. `1.00` is not the same as `1`. `1` can in fact represent anything from `0.50` to `1.49`. _And you don't know_.

This library is an attempt of solving this issue, storing objects of floats with details about their precision, to keep that measurement precision intact and allow for calculations without ruining the precision, or adding precision where none exists.

For more on this topic, search online for "significant figures".

Note: I am not by any means an expert in math. This library is created for learning purposes and should not be trusted for calculations in real world applications without a serious review by someone with greater math skills than mine.
