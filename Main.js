var move = false;
var hover;
var swap;
var p = true;
var q = true;
var r = true;
var active;
var canProceed = true;
var level = 0;
var mode = 1;
var homescreen = 0;
var sandbox = false;
var newval = "";
var edit = false;
var editSlot;
var shimAm = true;

var city = [[false, false, false, false],[false, false, false, false],[false, false, false, false],[false, false, false, false]];
var correct = ["Swell.", "Majestic.", "Marvelous.", "Pristine.", "Peachy.", "Novel.", "Luminescent.", "Flawless.", "Cool.", "Fabulous."];

var startSandbox = function() {
	level = 1;
	shimAm = false;
	$("#slot1").show();
	$("#slot2").show();
	$("#slot3").show();
	$("#slot4").show();
	$("#opening").hide();
	$("#skip").hide();
	$("#sandy").hide();
	$("#home").show();
	$("#slot1").html("p");
	$("#slot2").html("p");
	$("#slot3").html("p");
	$("#slot4").html("p");
	goSandbox();
}

var goSandbox = function() {
	sandbox = true;
	edit = false;
	active = true;
	$(".info").html("Follow your heart.");
	$("#build").attr('onclick', 'build()');
	$("#build").html("Build");
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			city[i][j] = false;
			$(".row" + (i + 1) + "col" + (j + 1)).css({backgroundColor:"rgb(0,0,64)"});
		}
	}
}

var skip = function() {
	shimAm = false;
	$("#slot1").show();
	$("#slot2").show();
	$("#slot3").show();
	$("#slot4").show();
	$("#opening").hide();
	$("#skip").hide();
	$("#home").show();
	$("#sandy").hide();
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			city[i][j] = false;
			$(".row" + (i + 1) + "col" + (j + 1)).css({backgroundColor:"rgb(0,0,64)"});
		}
	}
	level = 9;
	next();
}

var home = function() {
	//console.log("home");
	if (level == 0) {
		level = 1;
		$("#home").removeClass("small");
		next();
		active = true;
		$("#home").removeClass("open");
		$("#home").addClass("closed");
		$(".container").removeClass("hidden");
		homescreen = 0;
		$("#home").html("");
	}
	else {
		if (homescreen == 0) {
			active = false;
			$("#home").addClass("open");
			$("#home").removeClass("closed");
			$(".container").addClass("hidden");
			homescreen = 1;
			if (!sandbox) {
				$("#home").html("Fill the skyline. Blocks must be supported from below.<br/>"
								+  "<div class='homeButton' onclick='goSandbox()'>Sandbox</div>"
								+ "<div class='homeButton'>Back</div>");
			}
			else {
				$("#home").html("Do whatever you want.<br/><br/><br/>"
								+  "<div class='homeButton' onclick='next()'>Play mode</div>"
								+ "<div class='homeButton'>Back</div>");
			}
		}
		else {
			//console.log("should be closing");
			active = true;
			$("#home").removeClass("open");
			$("#home").addClass("closed");
			$(".container").removeClass("hidden");
			homescreen = 0;
			$("#home").html("");
		}
	}
}
	
var instruct = function() {
	shimAm = false;
	for (var i = 0; i < 4; i++) {
			for (var j = 0; j < 4; j++) {
				city[i][j] = false;
				$(".row" + (i + 1) + "col" + (j + 1)).css({backgroundColor:"rgb(0,0,64)"});
			}
		}
	$("#home").show();
	$("#home").addClass("open");
	$("#home").addClass("small");
	$(".container").addClass("hidden");
	$("#home").html("Statements will appear on the left. Clicking 'Build' will construct blocks, but only where the statements are true for the p and q values below. " + 
					"Pass each level by building a sustainable skyline with no floating blocks.  Click two statements to switch their positions. " +
					"There's also a sandbox mode if you're feeling saucy.  CLICK TO CONTINUE.");
}

var proceed = function() {
	if (canProceed) {
		next();
	}
}

var next = function() {
	sandbox = false;
	active = true;
	canProceed = true;
	$("#build").html("Build");
	$("#build").attr("onclick", "build()");
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			city[i][j] = false;
			$(".row" + (i + 1) + "col" + (j + 1)).css({backgroundColor:"rgb(0,0,64)"});
		}
	}
	if (level == 0) {
		$("#slot1").hide();
		$("#slot2").hide();
		$("#slot3").hide();
		$("#slot4").hide();
		$("#home").hide();
		$("#opening").show();
		$(".info").html("Boolean Skylines.");
		$("#build").html("Play");
		$("#build").attr("onclick", "instruct()");
		$(".row4col1").css({backgroundColor:"rgb(64,0,128)"});
		$(".row4col2").css({backgroundColor:"rgb(64,0,128)"});
		$(".row4col3").css({backgroundColor:"rgb(64,0,128)"});
		$(".row4col4").css({backgroundColor:"rgb(64,0,128)"});
		$(".row3col1").css({backgroundColor:"rgb(64,0,128)"});
		$(".row3col2").css({backgroundColor:"rgb(64,0,128)"});
		$(".row3col2").css({backgroundColor:"rgb(64,0,128)"});
		$(".row3col4").css({backgroundColor:"rgb(64,0,128)"});
		$(".row2col1").css({backgroundColor:"rgb(64,0,128)"});
		$(".row2col2").css({backgroundColor:"rgb(64,0,128)"});
		$(".row2col4").css({backgroundColor:"rgb(64,0,128)"});
		$(".row1col1").css({backgroundColor:"rgb(64,0,128)"});
		$(".row1col4").css({backgroundColor:"rgb(64,0,128)"});
		setTimeout(shimmer(), 1500);
	}
	else if (level == 1) {
		$("#skip").hide();
		$("#sandy").hide();
		$("#opening").hide();
		$("#slot1").show();
		$("#slot2").show();
		$("#slot3").show();
		$("#slot4").show();
		$("#slot1").html("p");
		$("#slot2").html("p");
		$("#slot3").html("p");
		$("#slot4").html("p");
		$(".info").html("Such an empty city.");
	}
	else if (level == 2) {
		$("#slot1").html("q");
		$("#slot2").html("q");
		$("#slot3").html("q");
		$("#slot4").html("q");
		$(".info").html("Such an empty city.");
	}
	else if (level == 3) {
		$("#slot1").html("p ^ q");
		$("#slot2").html("p ^ q");
		$("#slot3").html("p ^ q");
		$("#slot4").html("p ^ q");
		$(".info").html("Picky picky. (^ is an AND operator)");
	}
	else if (level == 4) {
		$("#slot1").html("p");
		$("#slot2").html("p");
		$("#slot3").html("p");
		$("#slot4").html("p ^ q");
		$(".info").html("Remember, blocks can't float.");
	}
	else if (level == 5) {
		$("#slot1").html("p");
		$("#slot2").html("p");
		$("#slot3").html("p v q");
		$("#slot4").html("p v q");
		$(".info").html("Either works. (v is an OR operator)");
	}
	else if (level == 6) {
		$("#slot1").html("q");
		$("#slot2").html("p v q");
		$("#slot3").html("q v p");
		$("#slot4").html("q");
		$(".info").html("Either works.");
	}
	else if (level == 7) {
		$("#slot1").html("~q");
		$("#slot2").html("~q");
		$("#slot3").html("~q");
		$("#slot4").html("~q");
		$(".info").html("Flip the bits. (~ is a NOT operator)");
	}
	else if (level == 8) {
		$("#slot1").html("q");
		$("#slot2").html("p v ~p");
		$("#slot3").html("q v ~q");
		$("#slot4").html("q");
		$(".info").html("Flip the bits.");
	}
	else if (level == 9) {
		$("#slot1").html("q");
		$("#slot2").html("p ^ q");
		$("#slot3").html("q ^ q");
		$("#slot4").html("q ^ p");
		$(".info").html("Prove yourself.");
	}
	else if (level == 10) {
		$("#slot1").html("q v q");
		$("#slot2").html("p v q");
		$("#slot3").html("q");
		$("#slot4").html("q ^ p");
		$(".info").html("Prove yourself.");
	}
	else if (level == 11) {
		$("#slot1").html("p v p");
		$("#slot2").html("q ^ p");
		$("#slot3").html("p v q");
		$("#slot4").html("p ^ q");
		$(".info").html("Prove yourself");
	}
	else if (level == 12) {
		$("#slot1").html("q v p");
		$("#slot2").html("~p v p");
		$("#slot3").html("p");
		$("#slot4").html("p ^ q");
		$(".info").html("Prove yourself.");
	}
	else if (level == 13) {
		$("#slot1").html("p v p");
		$("#slot2").html("~q ^ p");
		$("#slot3").html("p v q");
		$("#slot4").html("p ^ ~q");
		$(".info").html("Prove yourself.");
	}
	else if (level == 14) {
		$("#slot1").html("~p ^ ~q");
		$("#slot2").html("~q");
		$("#slot3").html("p v ~q");
		$("#slot4").html("~q ^ ~p");
		$(".info").html("Prove yourself.");
	}
	else if (level == 15) {
		$("#slot1").html("(p^q) v ~q");
		$("#slot2").html("~q");
		$("#slot3").html("p ^ ~q");
		$("#slot4").html("p v ~p");
		$(".info").html("Prove yourself.");
	}
	else {
		$(".info").html("Levels end here.");
	}
};

$(document).ready(next);

var build = function() {
	if (!edit) {
	active = false;
	canProceed = false;
	$("#build").attr("onclick", "proceed()");
	var command;
	for (var i = 1; i < 5; i++) {
		command = $("#slot" + i).html();
		command = command.replace(/\s/g, '');
		for (var j = 0; j < 2; j++) {
			for (var k = 1; k < 3; k++) {
				var result = parse(command);
				//console.log("final: " + result);
				if (result) {
					$(".row" + i + "col" + (2 * j + k)).animate({backgroundColor:"rgb(64,0,128)"}, 1000);
					city[i - 1][(2 * j + k) - 1] = true;
				}
				else {
					$(".row" + i + "col" + (2 * j + k)).css({backgroundColor:"rgb(0,0,64)"});
					city[i - 1][(2 * j + k) - 1] = false;
				}
				
				q = !q;
			}
		p = !p;
		}
	}
	if (!sandbox) {
		setTimeout(function() {check();}, 1000);
	}
	else {
		//console.log("change over");
		$("#build").html("Reset");
		$("#build").attr("onclick", "goSandbox()");
	}
	}
};

var check = function() {
	var pass = true;
	//console.log("checking");
	for (var i = 3; i > 0; i--) {
		for (var j = 1; j < 5; j++) {
			//console.log(city[i][j - 1]);
			if (city[i - 1][j - 1] && !(city[i][j - 1])) {
				//console.log("destroy");
				$(".row" + i + "col" + j).animate({backgroundColor:"red"}, 1000);
				$(".row" + i + "col" + j).animate({backgroundColor:"rgb(0,0,64)"}, 1000);
				$(".row" + i + "col" + j).promise().done(function() {canProceed = true;});
				city[i - 1][j - 1] = false;
				pass = false;
			}
		}
	}
	//if (city[0][0] || city[0][1] || city[0][2] || city[0][3]) {
	if (pass) {
		var praise = Math.floor(Math.random() * 10);
		$(".info").html(correct[praise]);
		$("#build").html("Next");
		canProceed = true;
		level ++;
	}
	else {
		$(".info").html("No worries.");
		$("#build").html("Reset");
	}
}

var parse = function(str) {
	//console.log("parsing " + str);
	if (str.length == 1) {
		if (str.charAt(0) == 'p') {
			return p;
		}
		else if (str.charAt(0) == 'q') {
			return q;
		}
		else {
			console.log("it's not p or q, its " + str.charAt(0));
			return false;
		}
	}
	else if (str.charAt(0) == '(') {
		if (str.indexOf(')') == str.length - 1) {
			//console.log("parse it all");
			return parse(str.substring(1, str.indexOf(')')));
		}
		else {
			if (str.indexOf('^') > str.indexOf('v')) {
				return parse(str.substring(1, str.indexOf(')'))) && parse(str.substring(str.indexOf(')') + 2));
			}
			else if (str.indexOf('v') > str.indexOf('^')) {
				return parse(str.substring(1, str.indexOf(')'))) || parse(str.substring(str.indexOf('v') + 1));
			}
			else {
				console.log("parse failed");
				$(".info").html("Well that was just rude.");
				return false;
			}
		}
	}	
	else if ((str.indexOf('^') != -1) || (str.indexOf('v') != -1)){
		if (str.indexOf('^') != -1) {
			return parse(str.substring(0, str.indexOf('^'))) && parse(str.substring(str.indexOf('^') + 1));
		}
		else if (str.indexOf('v') != -1) {
			return parse(str.substring(0, str.indexOf('v'))) || parse(str.substring(str.indexOf('v') + 1));
		}
		else {
			console.log("parse failed");
			$(".info").html("Well that was just rude.");
			return false;
		}
	}
	else if (str.charAt(0) == '~') {
		return !(parse(str.substring(1)));
	}
	else {
		console.log("parse failed");
		$(".info").html("Well that was just rude.");
		return false;
	}
};

var row;
var col;
var shimmer = function() {
	if (!shimAm) {
		$(".row" + row + "col" + col).css({backgroundColor:"rgb(0, 0, 64)"});
	}
	row = 1 + Math.floor(Math.random() * 4);
	col = 1 + Math.floor(Math.random() * 4);
	if (shimAm) {
		if ($(".row" + row + "col" + col).css("background-color") == 'rgb(64, 0, 128)') {
			$(".row" + row + "col" + col).animate({backgroundColor:"rgb(0,0,64)"}, 1000);
		}
		else {
			$(".row" + row + "col" + col).animate({backgroundColor:"rgb(64,0,128)"}, 1000);
		}
		setTimeout(shimmer, 2000);
	}
}

var twinkle = function() {
	var newLeft = 10 + Math.floor(Math.random() * 448);
	var newTop = 10 + Math.floor(Math.random() * 180);
	//console.log(newLeft + " " + newTop);
	$("#star").css({"position":"absolute","top":newTop,"left":newLeft});
	$("#star").show();
	setTimeout(hideTwinkle, 375);
}

var hideTwinkle = function() {
	$("#star").hide();
	setTimeout(twinkle, 1500);
}

$(document).ready(function() {
	twinkle();
});

var press;

document.onkeydown = function(e) {
	//console.log(11);
	if (edit) {
		e = e || window.event;
		press = e.which || e.keyCode;
		if (press == 13) {
			$(editSlot).html(newval);
			$(editSlot).removeClass("slotEdit");
			$(editSlot).addClass("slot");
			edit = false;
		}
		if (press == 8) {
			newval = newval.substring(0, newval.length - 1);
		}
		if (newval.length < 9) {
			if (press == 32) {
				newval = newval + ' ';
			}	
			else if (press == 80) {
				newval = newval + 'p';
			}	
			else if (press == 81) {
				newval = newval + 'q';
			}	
			else if (press == 192) {
				newval = newval + '~';
			}
			else if (press == 54) {
				newval = newval +  '^';
			}
			else if (press == 86) {
				newval = newval + 'v';
			}
			else if (press == 57) {
				newval = newval + '(';
			}
			else if (press == 48) {
				newval = newval + ')';
			}
		}
		$(editSlot).html(newval);
	}
	else {
		//console.log("not editing");
	}
}

$(document).ready(function() {
	$(".slot").click(function() {
		//console.log("click");
		if (active) {
			//console.log(sandbox + ", " + edit);
			if (sandbox && !edit) {
				//console.log("time to edit");
				newval = $(this).html();
				edit  = true;
				editSlot = this;
				$(this).addClass("slotEdit");
				$(this).removeClass("slot");
			}
			else if (sandbox && editSlot == this) {
				$(editSlot).html(newval);
				$(editSlot).removeClass("slotEdit");
				$(editSlot).addClass("slot");
				edit = false;
			}
			else if (!sandbox) {
				//console.log("not edit");
				if (!move) {
					hover = $(this).clone(true);
					$(this).addClass("selected");
					$(hover).addClass("hover");
					$(hover).html($(this).html());
					$(".container").after(hover);
					move = true;
				}
				else {
					move = false;
					swap = $(this).html();
					$(this).html($(hover).html());
					$(".selected").html(swap);
					$(".selected").removeClass("selected");
					$(hover).remove();
				}
			}
		}
	})
});

$(document).on('mousemove', function(e) {
	if (move == true) {
		$(hover).css({top: e.pageY + 10, left:e.pageX + 10, position: 'absolute'});
	}
});