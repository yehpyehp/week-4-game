$(document).ready(function(){
var pikachu = {
	name: "pikachu",
	atk: 10,
	catk:20,
	attack: function(defender){
            defender.hp = defender.hp - pikachu.atk;
    },
	counterattack: function(attacker){
		attacker.hp = attacker.hp - 20;
	},
	hp: 100,
}
var charizard = {
	name: "charizard",
	atk: 20,
	catk: 30,
	attack: function(defender){
            defender.hp = defender.hp - charizard.atk;
        },
	counterattack: function(attacker){
		attacker.hp = attacker.hp - 30;
	},
	hp: 200,
}
var snorlax = {
	name: "snorlax",
	atk: 5,
	catk: 10,
	attack: function(defender){
            defender.hp = defender.hp - snorlax.atk;
        },
	counterattack: function(attacker){
		attacker.hp = attacker.hp - 10;
	},
	hp: 1000,
}
var rayquaza = {
	name: "rayquaza",
	atk: 50,
	catk: 80,
	attack: function(defender){
			
            defender.hp = defender.hp - rayquaza.atk;
    },
	counterattack: function(attacker){
		attacker.hp = attacker.hp - 80;
	},
	hp: 400,
}


    $("#pikachu").click(function(){
    	$("#pikachu").appendTo("#row4")
    	$("#charizard").appendTo("#row6").click(function(){
    		$("#charizard").appendTo("#row10")
    		$("#pikachu").appendTo("#row4")
    		$("#atkbutton").click(function(){
    			pikachu.attack(charizard);
    			charizard.counterattack(pikachu);
    			$("#pikachuhp").html(pikachu.hp);
    			$("#charizardhp").html(charizard.hp);
    			pikachu.atk = pikachu.atk + 10;
    			$("#row11").html(" you attacked " + charizard.name + " for " + pikachu.atk + " damage!!!" + charizard.name + " attacked you back " + " for " + charizard.catk + " damage!");
    				if (pikachu.hp <=0){
    					$("#row11").html("You Lose!");
    				}
    				else if (charizard.hp <=0){
    					$("#row11").html("You Win!");
    					$("#charizard").remove();
    				}
    				
    		})
    	})
    	$("#snorlax").appendTo("#row6").click(function(){
    		$("#snorlax").appendTo("#row10")
    		$("#pikachu").appendTo("#row4")
    		$("#atkbutton").click(function(){
    			pikachu.attack(snorlax);
    			snorlax.counterattack(pikachu);
    			$("#pikachuhp").html(pikachu.hp);
    			$("#snorlaxhp").html(snorlax.hp);
    			pikachu.atk = pikachu.atk + 10;
    			$("#row11").html(" you attacked " + snorlax.name + " for " + pikachu.atk + " damage!!!" + snorlax.name + " attacked you back " + " for " + snorlax.catk + " damage!");
    				if (pikachu.hp <=0){
    					$("#row11").html("You Lose!");
    				}
    				else if (snorlax.hp <=0){
    					$("#row11").html("You Win!");
    					$("#snorlax").remove();
    				}
    		})
    	})
    	$("#rayquaza").appendTo("#row6").click(function(){
    		$("#rayquaza").appendTo("#row10")
    		$("#pikachu").appendTo("#row4")
    		$("#atkbutton").click(function(){
    			pikachu.attack(charizard);
    			rayquaza.counterattack(pikachu);
    			$("#pikachuhp").html(pikachu.hp);
    			$("#rayquazahp").html(rayquaza.hp);
    			pikachu.atk = pikachu.atk + 10;
    			$("#row11").html(" you attacked " + rayquaza.name + " for " + pikachu.atk + " damage!!!" + rayquaza.name + " attacked you back " + " for " + rayquaza.catk + " damage!");
    				if (pikachu.hp <=0){
    					$("#row11").html("You Lose!");
    				}
    				else if (rayquaza.hp <=0){
    					$("#row11").html("You Win!");
    					$("#rayquaza").remove();
    				}
    		})
    	})
    });
    $("#charizard").click(function(){
    	$("#charizard").appendTo("#row4")
    	$("#pikachu").appendTo("#row6").click(function(){
    		$("#pikachu").appendTo("#row10")
    		$("#charizard").appendTo("#row4")
    		$("#atkbutton").click(function(){
    			charizard.attack(pikachu);
    			pikachu.counterattack(charizard);
    			$("#charizardhp").html(charizard.hp);
    			$("#pikachuhp").html(pikachu.hp);
    			charizard.atk = charizard.atk + 20;
    			$("#row11").html(" you attacked " + pikachu.name + " for " + charizard.atk + " damage!!!" + pikachu.name + " attacked you back " + " for " + pikachu.catk + " damage!");
    				if (charizard.hp <=0){
    					$("#row11").html("You Lose!");
    				}
    				else if (pikachu.hp <=0){
    					$("#row11").html("You Win!");
    					$("#pikachu").remove();
    				}
    		})
    	})
    	$("#snorlax").appendTo("#row6").click(function(){
    		$("#snorlax").appendTo("#row10")
    		$("#charizard").appendTo("#row4")
    		$("#atkbutton").click(function(){
    			charizard.attack(snorlax);
    			snorlax.counterattack(charizard);
    			$("#charizardhp").html(charizard.hp);
    			$("#snorlaxhp").html(snorlax.hp);
    			charizard.atk = charizard.atk + 20;
    			$("#row11").html(" you attacked " + snorlax.name + " for " + charizard.atk + " damage!!!" + snorlax.name + " attacked you back " + " for " + snorlax.catk + " damage!");
    				if (charizard.hp <=0){
    					$("#row11").html("You Lose!");
    				}
    				else if (snorlax.hp <=0){
    					$("#row11").html("You Win!");
    					$("#snorlax").remove();
    				}
    		})
    	})
    	$("#rayquaza").appendTo("#row6").click(function(){
    		$("#rayquaza").appendTo("#row10")
    		$("#charizard").appendTo("#row4")
    		$("#atkbutton").click(function(){
    			charizard.attack(rayquaza);
    			rayquaza.counterattack(charizard);
    			$("#charizardhp").html(charizard.hp);
    			$("#rayquazahp").html(rayquaza.hp);
    			charizard.atk = charizard.atk + 20;
    			$("#row11").html(" you attacked " + rayquaza.name + " for " + charizard.atk + " damage!!!" + rayquaza.name + " attacked you back " + " for " + rayquaza.catk + " damage!");
    				if (charizard.hp <=0){
    					$("#row11").html("You Lose!");
    				}
    				else if (rayquaza.hp <=0){
    					$("#row11").html("You Win!");
    					$("#rayquaza").remove();
    				}
    		})
    	})
    });
    $("#snorlax").click(function(){
    	$("#snorlax").appendTo("#row4")
    	$("#charizard").appendTo("#row6").click(function(){
    		$("#charizard").appendTo("#row10")
    		$("#snorlax").appendTo("#row4")
    		$("#atkbutton").click(function(){
    			snorlax.attack(charizard);
    			charizard.counterattack(snorlax);
    			$("#snorlaxhp").html(snorlax.hp);
    			$("#charizardhp").html(charizard.hp);
    			snorlax.atk = snorlax.atk + 2;
    			$("#row11").html(" you attacked " + charizard.name + " for " + snorlax.atk + " damage!!!" + charizard.name + " attacked you back " + " for " + charizard.catk + " damage!");
    				if (snorlax.hp <=0){
    					$("#row11").html("You Lose!");
    				}
    				else if (charizard.hp <=0){
    					$("#row11").html("You Win!");
    					$("#charizard").remove();
    				}
    		})
    	})
    	$("#pikachu").appendTo("#row6").click(function(){
    		$("#pikachu").appendTo("#row10")
    		$("#snorlax").appendTo("#row4")
    		$("#atkbutton").click(function(){
    			snorlax.attack(pikachu);
    			pikachu.counterattack(snorlax);
    			$("#snorlaxhp").html(snorlax.hp);
    			$("#pikachuhp").html(pikachu.hp);
    			snorlax.atk = snorlax.atk + 2;
    			$("#row11").html(" you attacked " + pikachu.name + " for " + snorlax.atk + " damage!!!" + pikachu.name + " attacked you back " + " for " + pikachu.catk + " damage!");
    				if (snorlax.hp <=0){
    					$("#row11").html("You Lose!");
    				}
    				else if (pikachu.hp <=0){
    					$("#row11").html("You Win!");
    					$("#pikachu").remove();
    				}
    		})
    	})
    	$("#rayquaza").appendTo("#row6").click(function(){
    		$("#rayquaza").appendTo("#row10")
    		$("#snorlax").appendTo("#row4")
    		$("#atkbutton").click(function(){
    			snorlax.attack(rayquaza);
    			rayquaza.counterattack(snorlax);
    			$("#snorlaxhp").html(snorlax.hp);
    			$("#rayquazahp").html(rayquaza.hp);
    			snorlax.atk = snorlax.atk + 2;
    			$("#row11").html(" you attacked " + rayquaza.name + " for " + snorlax.atk + " damage!!!" + rayquaza.name + " attacked you back " + " for " + rayquaza.catk + " damage!");
    				if (snorlax.hp <=0){
    					$("#row11").html("You Lose!");
    				}
    				else if (rayquaza.hp <=0){
    					$("#row11").html("You Win!");
    					$("#rayquaza").remove();
    				}
    		})
    	})
    });
    $("#rayquaza").click(function(){
    	$("rayquaza").appendTo("#row4")
    	$("#charizard").appendTo("#row6").click(function(){
    		$("#charizard").appendTo("#row10")
    		$("#rayquaza").appendTo("#row4")
    		$("#atkbutton").click(function(){
    			rayquaza.attack(charizard);
    			charizard.counterattack(rayquaza);
    			$("#rayquazahp").html(rayquaza.hp);
    			$("#charizardhp").html(charizard.hp);
    			rayquaza.atk = rayquaza.atk + 5;
    			$("#row11").html(" you attacked " + charizard.name + " for " + rayquaza.atk + " damage!!!" + charizard.name + " attacked you back " + " for " + charizard.catk + " damage!");
    				if (rayquaza.hp <=0){
    					$("#row11").html("You Lose!");
    				}
    				else if (charizard.hp <=0){
    					$("#row11").html("You Win!");
    					$("#charizard").remove();
    				}
    		})
    	})
    	$("#snorlax").appendTo("#row6").click(function(){
    		$("#snorlax").appendTo("#row10")
    		$("rayquaza").appendTo("#row4")
    		$("#atkbutton").click(function(){
    			rayquaza.attack(snorlax);
    			snorlax.counterattack(rayquaza);
    			$("#rayquazahp").html(rayquaza.hp);
    			$("#snorlaxhp").html(snorlax.hp);
    			rayquaza.atk = rayquaza.atk + 5;
    			$("#row11").html(" you attacked " + snorlax.name + " for " + rayquaza.atk + " damage!!!" + snorlax.name + " attacked you back " + " for " + snorlax.catk + " damage!");
    				if (rayquaza.hp <=0){
    					$("#row11").html("You Lose!");
    				}
    				else if (snorlax.hp <=0){
    					$("#row11").html("You Win!");
    					$("#snorlax").remove();
    				}
    		})
    	})
    	$("#pikachu").appendTo("#row6").click(function(){
    		$("#pikachu").appendTo("#row10")
    		$("#rayquaza").appendTo("#row4")
    		$("#atkbutton").click(function(){
    			rayquaza.attack(pikachu);
    			pikachu.counterattack(rayquaza);
    			$("#rayquazahp").html(rayquaza.hp);
    			$("#pikachuhp").html(pikachu.hp);
    			rayquaza.atk = rayquaza.atk + 5;
    			$("#row11").html(" you attacked " + pikachu.name + " for " + rayquaza.atk + " damage!!!" + pikachu.name + " attacked you back " + " for " + pikachu.catk + " damage!");
    				if (rayquaza.hp <=0){
    					$("#row11").html("You Lose!");
    				}
    				else if (pikachu.hp <=0){
    					$("#row11").html("You Win!");
    					$("#pikachu").remove();
    				}
    		})
    	})
    });
   
});


// $(document).ready(function(){
//     //The player will fight with a character of their choice against the computer.





//     var gato = {
//         name: "meowie",
//         hp: 100,
//         attack: function(enemyObj){
//             enemyObj.hp = enemyObj.hp - 10;
//         }
//     }


//     var perro = {
//         name: "woofie",
//         hp: 110,
//         attack: function(enemyObj){
//             enemyObj.hp = enemyObj.hp - 8;
//         }
//     }


//     $("#attack_button").click(function(){
//         gato.attack(perro);
//         console.log(perro);
//     })


//     location.reload


//     //At the start of the game the player will choose a character by clicking on the character's picture. The player will play as that character for the rest of the game.
//         // Need functionality to create characters. How to create/store characters? 
//             // Possible solutions: Maybe objects? Maybe arrays?
//         // Need functionality to then output those characters onto the screen as HTML. 
//         // Need way of tracking main character


//     // Every character that was not picked is now an enemy that the player must defeat. Enemies should be moved to a different area of the screen.
//         // Need functionality that tracks enemies and outputs them to other part of screen.
//             // Possibly need to use existing div. 
    
//     //The player chooses which enemy they will attack by clicking on that enemy's picture.
//         // Using jQuery, I can probably use some kind of event handling for clicks.
//         // Once that event is fired, there should be functionality to move that enemy to a defender area. Will likely need another area for this. 





// });


// $(document).ready(function() {
// 	var charSelected, firstDefender, secondDefender, thirdDefender, playerWin;

// 	var chars = {
// 			luke: {
// 				name: "Luke Skywalker",
// 				hp: 175,
// 				atk: function(enemy) {
// 					enemy.hp = enemy.hp - 10;
// 				},
// 				catk: 5
// 			},
// 			obi: {
// 				name: "Obi-Wan Kenobi",
// 				hp: 150,
// 				atk: function(enemy) {
// 					enemy.hp = enemy.hp - 10;
// 				},
// 				catk: 5
// 			},
// 			vader: {
// 				name: "Darth Vader",
// 				hp: 200,
// 				atk: function(enemy) {
// 					enemy.hp = enemy.hp - 10;
// 				},
// 				catk: 5
// 			},
// 			boba: {
// 				name: "Boba Fett",
// 				hp: 125,
// 				atk: function(enemy) {
// 					enemy.hp = enemy.hp - 10;
// 				},
// 				catk: 5
// 			},
// 		}
// 		//Play the game
// 	function play() {
// 		firstDefender = false;
// 		secondDefender = false;
// 		thirdDefender = false;
// 		charSelected = false;
// 		playerWin = false;
// 		$('.choice').html('Select Your Character: ')
// 		$('#luke, #obi-wan, #vader, #boba').attr('class', 'btn btn-lg char').appendTo('#characters');
// 		$('#luke, #obi-wan, #vader, #boba').off('click');

// 		selectChar();

// 		console.log('Is Character Selected: ' + charSelected);
// 		console.log('Is First Defender Selected: ' + firstDefender);
// 	}
// 	// Select character
// 	function selectChar() {
// 		$('.char').on('click', function() {
// 			$('.choice').html('Your Character: ');
// 			if (charSelected) return;
// 			charSelected = true;
// 			if ($(this).attr('id') == "luke") {
// 				$('#obi-wan, #vader, #boba').toggleClass('char enemy').appendTo('#enemies');
// 				$('#luke, #obi-wan, #vader, #boba').off('click');
// 			} else if ($(this).attr('id') == "obi-wan") {
// 				$('#luke, #vader, #boba').toggleClass('char enemy').appendTo('#enemies');
// 				$('#luke, #obi-wan, #vader, #boba').off('click');
// 			} else if ($(this).attr('id') == "vader") {
// 				$('#luke, #obi-wan, #boba').toggleClass('char enemy').appendTo('#enemies');
// 				$('#luke, #obi-wan, #vader, #boba').off('click');
// 			} else if ($(this).attr('id') == "boba") {
// 				$('#luke, #obi-wan, #vader').toggleClass('char enemy').appendTo('#enemies');
// 				$('#luke, #obi-wan, #vader, #boba').off('click');
// 			}
	
// 			selectFirst();
// 			console.log('Character Selected: ' + charSelected);
// 		});
// 	}

// 	// Select a defender
// 	function selectFirst() {
// 		$('.enemy').on('click', function() {
// 			if (firstDefender) return;
// 			firstDefender = true;
// 			if ($(this).attr('id') == "luke") {
// 				$('#luke').toggleClass('enemy defender').appendTo('#defender');
// 				$('#luke, #obi-wan, #vader, #boba').off('click');
// 			} else if ($(this).attr('id') == "obi-wan") {
// 				$('#obi-wan').toggleClass('enemy defender').appendTo('#defender');
// 				$('#luke, #obi-wan, #vader, #boba').off('click');
// 			} else if ($(this).attr('id') == "vader") {
// 				$('#vader').toggleClass('enemy defender').appendTo('#defender');
// 				$('#luke, #obi-wan, #vader, #boba').off('click');
// 			} else if ($(this).attr('id') == "boba") {
// 				$('#boba').toggleClass('enemy defender').appendTo('#defender');
// 				$('#luke, #obi-wan, #vader, #boba').off('click');
// 			}

// 			console.log('First Defender Selected: ' + firstDefender);
// 			fight();
// 		});
// 	}
// 	// BATTLE!
// 	function fight() {
// 		if (firstDefender) {
// 			$('#attack').on('click', function() {
// 				console.log('POW')
// 			});
// 		}
		
// 		console.log('Let\'s Get It On!!');
// 	}

// 	// Start New Game
// 	$('#reset').on('click', function() {
// 		play();
// 	});
// 	play();
// });











