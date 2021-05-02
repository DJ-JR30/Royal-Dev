# Royal Dev

Royal Feeling to a Developer.


Not Finish updates daily.

When the package is ready for fully uses and bots I will change this README File.


## Basic use

```
const Royal = require('royal-dev');

var result = Royal.LBtoKG(5);

console.log(result);
```


## Functions

LBtoKG(#)

KGtoLB(#)

createUUID()

generatePassword(length, EndingNumbers)

SimpleLog(Type, SignalBy, Message)

RndNumber(min, max)


## Weight Functions Help

In weight the `#` is change to a number

LBtoKG(#)

like LBtoKG(5) = return will be 2.267


## Create UUID

This function is simple just set it as a varible and you can print, log, imput into a user id and more.


## Generators

In the generator the main one used is the `generatePassword()` because it fast password.

To use set as a varible and in the `()` it ask for the following the order: `length, EndingNumbers`. length is self said, but EndingNumbers is not. EndingNumbers is Random Generated Numbers between 1000 and 9999999 so it more harder to crack.


## Logging with Features

Normal Coding have logs but the logs is white and dark grey if errors. Soooo. Say hello to `SimpleLog()`. SimpleLog take the following to run `Type, SignalBy, Message`.
Type can talk the function what color you want your text.


With some rules though, to make it look high standards. Type can be set to `Log_Norm, Log_Warn, Log_ERROR`. Log\_Norm makes the text green. Log\_Warm makes the text yellow. And Log\_ERROR makes the text red.


## RndNumber

Self said too.

RndNumber(min, max)

Makes a random number somewhere between the min and max.
