function NSFW(Type) {
  if(Type == "ChanelUzi") {
    var MinUZI = 1;
    var MaxUZI = 14;
    var RanNum = Math.floor(Math.random() * (MaxUZI - MinUZI + 1)) + MinUZI;
    var URL_ChanelUZI = "https://raw.githubusercontent.com/DJ-JR30/MainDB/main/images/ChanelUzi/";
    var File_Extension = ".jpg";
    
    var Combine = URL_ChanelUZI + RanNum + File_Extension;
    
    return Combine;
    
  }else{
    console.log("NSFW Function having a bad day!");
    console.log("Make sure the type is usable.");
  };
}


module.exports.NSFW = NSFW;

// -------------------------------------- //

function RndNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports.RndNumber = RndNumber; 
