const { Heads, Tails} = require("./Database/imageFlipConfig.json");
const colors = require('colors');




function LBtoKG(Value) {
  var poundstoKG = Number(Value) / 2.2;
  return poundstoKG;
}


module.exports.LBtoKG = LBtoKG;

// ------------------------------------ //

function KGtoLB(Value) {
  var KGtoPounds = Number(Value) * 2.2;
  return KGtoPounds;
}


module.exports.KGtoLB = KGtoLB;

// ------------------------------------ //

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
        }else{
          console.log("");
        }
      }
    }
  }
}


module.exports.Recipes = Recipes;

// ------------------------------------ //

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

// ------------------------------------ //

function generatePassword(length, EndingNumbers) {
  if(EndingNumbers == true) {
    var minPass = 10;
    var maxPass = 9999999;
    
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
    var Ending = Math.floor(Math.random() * (maxPass - minPass + 1)) + minPass;
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
      let Output = retVal + Ending;
      return Output;
  }else{
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
    var Ending = Math.floor(Math.random() * (max - min + 1)) + min;
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    
    return retVal;
  }
}


module.exports.generatePassword = generatePassword;

// ------------------------------------ //

function Encryption(Text, Method, Password) {
  let InputText = Text;
  let MethodSeletor = Method;
  let PasswordToLock = Password;
  
  
  if(MethodSeletor == "Rogue") {
    
    
  }
}

module.exports.Encryption = Encryption;

// ------------------------------------ //

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
      if(Special == false) {
        var MinUZI = 1;
        var MaxUZI = 16;
        var RanNum = Math.floor(Math.random() * (MaxUZI - MinUZI + 1)) + MinUZI;
        var URL_ChanelUZI = "https://raw.githubusercontent.com/DJ-JR30/MainDB/main/images/ChanelUzi/";
        var File_Extension = ".jpg";
        
        var Combine = URL_ChanelUZI + RanNum + File_Extension;
        
        return Combine;
      }else{
        Log('[NSFW Fumction]', 'Sepcial can only be set to "true" or "false" please fix it to work.', 'normal', true)
      }
    }
  }else{
    if(Type == 'Mollyrot') {
      if(Special == true) {
        var MinRot = 1;
        var MaxRot = 9;
        var RanNum = Math.floor(Math.random() * (MaxRot - MinRot + 1)) + MinRot; 
        
        var URL_Mollyrot = "https://raw.githubusercontent.com/DJ-JR30/MainDB/main/images/Mollyrot/OnlyFans/";
        var File_Extension = ".jpg";
        
        var Combine = URL_Mollyrot + RanNum + File_Extension;
        
        return Combine;
      }else{
        if(Special == false) {
          Log('[NSFW Functon] ', 'Not finding Mollyrot images under not special.', 'normal',false)
        }else{
          Log('[NSFW Fumction]', 'Sepcial can only be set to "true" or "false" please fix it to work.', 'normal', true)
        }
      }
    }else{
      Log('[NSFW Function] ' ,'Error Finding: ' + Type, 'normal', false);
      console.log("Make sure the type is usable.");
    }
  };
}


module.exports.NSFW = NSFW;

// ------------------------------------ //

function CoinNSFW(type) {
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



module.exports.CoinNSFW = CoinNSFW;

// ------------------------------------ //

function Log(By, Message, Type, Timestamp) {
  let LogBeginCreator = "[Royal Dev] ";
  if(By == "") {
    console.log('Please set a "by".');
    console.log('You can set it to a Project nane too.');
    console.log('Log(By, Message, Type, Timestamp)');
    console.log("   ");
  }
  if(Message == "") {
    console.log('Please set a "Message".');
    console.log('You can set it to a Project nane too.');
    console.log('Log(By, Message, Type, Timestamp)');
    console.log("   ");
  }
  if(Type == "") {
    console.log('Please set a "Type".');
    console.log('You can set it to a Project nane too.');
    console.log('Log(By, Message, Type, Timestamp)');
    console.log("   ");
  }
  if(Timestamp == null) {
    console.log('Please set a "Timestamp".');
    console.log('You can set it to true or false.');
    console.log('Log(By, Message, Type, Timestamp)');
    console.log("   ");
  }
  
  
  if(By != "") {
    if(Message != ""){
      if(Type != "") {
        if(Type == "normal") {
          if(Timestamp == true) {
            let DateNew = new Date();
            let Month = Date["month"] + 1;
            let Day = Date["day"];
            let Year = Date["year"];
            let Date_Full = Month + Day + Year;
            
            let Combine = By + Message + ' ; ' + Date_Full;
            
            console.log(Combine);
          }
        }else{
          console.log('Log() Type Error');
        }
      }else{
        console.log(LogBeginCreator + 'No Type set!');
      }
  }else{
      console.log(LogBeginCreator + 'No Message Set!');
    }
  }else{
    console.log(LogBeginCreator + 'No By set!');
  }
  
  
  
}


module.exports.Log = Log;

// ------------------------------------ //

function SimpleLog(Type, SignelBy, Message) {
  let SentBy = "[" + SignelBy + "]";
  let Combine = SentBy + ' ' + Message;
  
  if(Type == "Log_Norm") {
    console.log(Combine.green)
  }else{
    if(Type == "Log_ERROR") {
      console.log(Combine.red)
    }else{
      if(Type == "Log_Warn") {
        console.log(Combine.yellow);
      }else{
        console.log('Your Type in SimpleLog is not use able!');
      }
    }
  }
}

module.exports.SimpleLog = SimpleLog;

// ------------------------------------ //


function RndNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports.RndNumber = RndNumber; 
