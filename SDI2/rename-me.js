//alert("JavaScript works!");

//Coby Pilpel
//SDI 1408
//Project 2
//Making an omelette


//Variables

var numberOfOmlettes = 2;
var superHungry = true;
var stuffedOrCovered = "stuffed";
var panReady = "buttered and hot";
var timeCook = 5;
var addIns = ["ham","cheese","peppers","potatoes","onions"];
var addInsHandfulls = [.5, 1, 2, 3];
var numberOfEggs = 2;



//Boolean
var omlettesWanted = function(omlettes, hungry) {
	var starving = true
	if (starving === hungry) 
	{console.log("Well I could eat a cow right now but I will settle for " + omlettes + " instead.");
	return true;} 
	else {console.log("I think I will survive on just one omelette today.");
	return false;}
};
var	manyManyOmlettes = omlettesWanted(numberOfOmlettes,superHungry)

//String
var startCooking = function(coveredOrStuffed, readyPan, cookTime){
	var coveredOrStuffed = "stuffed";
	var readyCook = true;
	var cookTime = 5
	var readyPan = "buttered and hot"
	if (coveredOrStuffed === stuffedOrCovered && readyCook === true) 
	{console.log("Well I'm going to make myself a " + stuffedOrCovered + " omelette. The pan is hot and buttered and I have to watch the clock because this cooks in " +cookTime+ " minutes.")}
	else{console.log("Hmm I don't think my " + coveredOrStuffed + " omelette is ready to be cooked. Let me check to make sure the pan is " + readyPan + " first.")}
	return coveredOrStuffed;
};
var letsGetCooking = startCooking(stuffedOrCovered, timeCook)


//Array
var whatAddIns = function (omlettesWanted, stuff){
	for(addInsNumber = 1; addInsNumber < addIns.length; addInsNumber++){
	var addInsChoice = stuff[addInsNumber]
	var amountOfAddIns = addInsHandfulls[addInsNumber]
	var allAddIns = 2
	var perOmlette = 1 ;
	console.log("Time to toss in " + allAddIns + " handfulls of " + addInsChoice + " to the omelettes. " + perOmlette + " handfull per omlette.")}
	return stuff};
for (addInsNumber = 2; addInsNumber < addIns.length; addInsNumber ++){whatAddIns(omlettesWanted, addIns);
};



//procedure
var didIBurnIt = function (overCooked){
	var justCompletelyCooked = 5
	if (justCompletelyCooked === timeCook){
	console.log("Oh my god I actually haven't burned this one yet I better get this off the heat quick.");}
	else
	{console.log("Well darn time to start over I burned this one.");
	}
	};
var takeItOffTheHeat = didIBurnIt(timeCook)



//Numbers

var coolTime = function(timeOffHeat){
	var tryNotToBurnSelf = (timeOffHeat- 1);
	var testAgain = 2;
	while(timeOffHeat > 1);
	console.log("OW! That is hot I'll try again in " + testAgain + " minutes and hopefully it will have cooled down by then.");
	timeOffHeat-=4
	console.log("I think I can eat it now.");
	return timeOffHeat};




