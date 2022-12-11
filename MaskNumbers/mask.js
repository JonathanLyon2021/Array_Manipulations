const num = "759438729145541";

// Return the last 4 digits 5541 
const endNum = num.slice(-4);

//Mask all the numbers except the last 4 digits

const maskNum =
      endNum.padStart(num.length, '*');

      console.log(endNum);
      console.log(maskNum);

// Output : 
// endNum returns (***********5541)
// maskNum returns (5541)
