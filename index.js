const { Heads, Tails} = require("./Database/imageFlipConfig.json");




function LBtoKG(Value) {
  var poundstoKG = Number(Value) / 2.2;
  return poundstoKG;
}


module.exports.LBtoKG = LBtoKG;

// -------------------------------------- //

function KGtoLB(Value) {
  var KGtoPounds = Number(Value) * 2.2;
  return KGtoPounds;
}


module.exports.KGtoLB = KGtoLB;

// -------------------------------------- //

function Recipes(Occ, Type) {
  if(Occ == "") {
    console.log("Occ Not Set!");
  }else{
    if(Occ == "18+*") {
      if(Type == "Food") {
        console.log("18+ Food Found!");
      }else{
        if(Type == "Drink") {
          console.log("18+ Drinks Found!")
        }
      }
    }
  }
}


module.exports.Recipes = Recipes;

// -------------------------------------- //

function createUUID() {
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}


module.exports.createUUID = createUUID;

// -------------------------------------- //

function generatePassword(length) {
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}


module.exports.generatePassword = generatePassword;

// -------------------------------------- //

function NSFW(Type, Special) {
  if(Type == "ChanelUzi") {
    if(Special == true) {
      var MinUZI = 1;
      var MaxUZI = 30;
      var RanNum = Math.floor(Math.random() * (MaxUZI - MinUZI + 1)) + MinUZI;
      var URL_ChanelUZI = "https://raw.githubusercontent.com/DJ-JR30/MainDB/main/images/ChanelUzi/OnlyFans/";
      var File_Extension = ".jpg";
      var Combine = URL_ChanelUZI + RanNum + File_Extension;
      
      return Combine;
      
    }else{
      var MinUZI = 1;
      var MaxUZI = 14;
      var RanNum = Math.floor(Math.random() * (MaxUZI - MinUZI + 1)) + MinUZI;
      var URL_ChanelUZI = "https://raw.githubusercontent.com/DJ-JR30/MainDB/main/images/ChanelUzi/";
      var File_Extension = ".jpg";
      
      var Combine = URL_ChanelUZI + RanNum + File_Extension;
      
      return Combine;
    }
  }else{
    console.log("NSFW Function having a bad day!");
    console.log("Make sure the type is usable.");
  };
}


module.exports.NSFW = NSFW;

// -------------------------------------- //

function NSFWCoin(type) {
  if (type === 'Normal') {
    let FrontCoin = Heads;
    let BackCoin = Tails;

    if (Math.random() < 0.50) {
      return FrontCoin;
    } else {
      return BackCoin;
    }

    return console.log('Version = Normal');
  }
}



module.exports = {
  NSFWCoin
}


// ---------------------  //


function RndNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports.RndNumber = RndNumber; 
