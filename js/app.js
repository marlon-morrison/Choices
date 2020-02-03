//canvas
var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth - 3;
canvas.height = window.innerHeight - 9;
var c = canvas.getContext("2d");
var maxRadius = 40;

var colorArray = [
    "#FFE98F",
    "#FFDF60",
    "#FFE36F",
    "#FFE36F",
    "#FFEFAF",
];

window.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }
    this.update = function () {
        if (this.x + this.radius) {
            this.dx = -this.dx;
        }
        
        if (this.y + this.radius > innerHeight|| this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        
        this.x += this.dx;
        this.y += this.dy;
        
        this.draw();
    };
};

var circleArray = [];

for (let i = 0; i < 600; i++) {
    var radius = Math.random() * 3 + 1;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5);
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
        
    }
}
animate();

// key vari. 
let start = document.getElementById("start");
let title = document.getElementById("title");
let gameHud = document.getElementById("gameHud")
let parkP = document.getElementById("park");
let bedroomP = document.getElementById("bedroom");
let barP = document.getElementById("bar");
let busP = document.getElementById("bus");
let woodsP =  document.getElementById("woods");
let gravelP = document.getElementById("gravel");
let mapP = document.getElementById("map");
let diningP = document.getElementById("diningA");
let cabinsP = document.getElementById("cabinA");
let fieldP = document.getElementById("fieldA");
let amphitheaterP = document.getElementById("amphitheaterA");
let musicP = document.getElementById("musicA");
let lakeP = document.getElementById("lakeA");
let nuresP = document.getElementById("nuresA");
let libraryP = document.getElementById("libraryA");
let counselorP = document.getElementById("counselorA");
let cabinRoomP= document.getElementById("cabinRoom");
let guestRoomP = document.getElementById("guestRoom");
let counselorDisplay = document.getElementById("counselorO");
let ele = document.createElement("div");
let ele2 = document.createElement("h2");
let ele3 = document.createElement("input");
let ele4 = document.createElement("button");
let text = document.querySelectorAll("#text");
let next = document.querySelectorAll("#next");
let choiceDisplay = document.querySelectorAll("#choices");
let choices = document.querySelectorAll(".pChoices");
let mapLocation = document.querySelectorAll("#mapLocation");
let returnToMap = document.querySelectorAll(".map");
let spkBox = document.querySelectorAll("#person");
let barL = document.getElementById("progressBar");
let finish = false;
let names = "";
let injury = "";
let v = 0;
let t = 0;
let beenHereD = 1;
let beenHereC = 1;
let beenHereF = 1;
let beenHereA = 1;
let beenHereM = 1;
let beenHereLak = 1;
let beenHereN = 1;
let beenHereLib = 1;
let index = -1; 
let convIndex = 0;
let bear = true;
let disp;
let display;
// Type write effect
function typeWriter(text, i, fnCallback) {
    let texts = document.querySelectorAll("#text");
    if (i < (text.length)) {
    texts[t].innerHTML = text.substring(0, i+1);
    setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
    }, 70);
    } else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
    }
}
// ProgressBar
function progressBar () {
    barL.style.display = "block"


    let i = 0;
    if(i == 0) {
        i = 1;
        var bar = document.getElementById("Lbar");
        var width = 1;
        var id = setInterval(loadBar, 65);
    }
    function loadBar() {

        if (width >= 100) {
            clearInterval(id);
            i = 0;
            barL.style.display = "none"
            display.style.display = "block"
        } else {
            width++;
            bar.style.width = width + "%";
        }
    }
}
// Name select
function nameSel() {
    start.style.display = "none";
    ele.setAttribute("id","nameSel");
    ele4.setAttribute("id","name");
    gameHud.appendChild(ele);
    ele.appendChild(ele2);
    ele.appendChild(ele3);
    ele.appendChild(ele4);
    gameHud.style.background = "#222";
    gameHud.style.height = "754px";
    ele2.innerText = "Insert Name"
    ele4.innerText = "Start"
    ele4.onclick = park;
}
// Park
function park() {
    if (ele3.value == "") {
        alert("You must enter a name in order to continue.")
    } else {
        names = ele3.value;
        spkBox[t].innerText = names;
        gameHud.style.display = "none"
        display = parkP
        progressBar();
        let nextDis = next[t];

        text[t].innerHTML = "You know some things never change here."

        next[t].addEventListener("click",function () {
            nextDis.style.display = "none"
            StartTextAnimation(0)
        })
        function StartTextAnimation(i) {
            if (dataText[i] == undefined ) {
                choiceDisplay[0].style.display = "block"
            }
            if (i < dataText[i].length) {
                typeWriter(dataText[i], 0, function(){
                    StartTextAnimation(i + 1);
                });
            };
        }
        function StartTextAnimation2(i) {
            if (dataText[i] == undefined ) {
            bus()
            };
            if (i < dataText[i].length) {
                typeWriter(dataText[i], 0, function(){
                    StartTextAnimation2(i + 1);
                });
            };
        }
        let dataText = [
            "A peaceful park with little people around.",
            "You know I can always think here.",
            "It's strange seeing people who can smile in a place like this.",
            "My life is nothing but an endless cycle in this gray world.",
            "The world is a place full of corrupted ambition.",
            "Now of days I don't even know why I get up in the morning.",
            "Well, that's enough thinking for today what should I do next.",
            "Should I go home or stay here for a little longer maybe the bar is a good idea?"
        ];
        choices[0].onclick = home;
        choices[1].onclick = stayPark;
        choices[2].onclick = bar;

        function stayPark() {
            choiceDisplay[0].style.display = "none"
            dataText = [
                "Well, setting here is not that bad when you think about it.",
                "I can look up and stare at the stars to put my mind at ease.",
                "I'm just lost at how things turned out to be this way.",
                "I'll just set here until I'm ready...... to.... go..... hom....",
                ".............................."
            ];
            StartTextAnimation2(0);
        };
    };
    // document.getElementById('test1').id = 'test2';p
};
// Home
function home() {
    parkP.style.display = "none"
    bedroomP.style.display = "block";
    t = 1;
    let nextDis = next[t];
    spkBox[t].innerText = names;
    text[t].innerHTML = "Home sweet home, about time.";
    
    next[t].addEventListener("click",function () {
        nextDis.style.display = "none"
        StartTextAnimation(0);
    });
    let dataText = [
        "The bus took forever to get to my stop, at least I made it home",
        "Time to take a shower and get some rest.",
        "*Shower Noses*.......",
        "........*Water turns off*",
        "*Heavy Sigh*..... Tomorrow is another day of mindless work.",
        "Time to get some rest.........."
    ];
    function StartTextAnimation(i) {
        if (dataText[i] == undefined ) {
            bus()
          };
        if (i < dataText[i].length) {
            typeWriter(dataText[i], 0, function(){
                StartTextAnimation(i + 1);
            });
        };
    };
};
// Bar
function bar() {
    parkP.style.display = "none";
    barP.style.display = "block";
    t = 2;
    let nextDis = next[t];
    spkBox[t].innerText = names;
        
    text[t].innerHTML = "Time to drink the night away.";

    next[t].addEventListener("click",function () {
        nextDis.style.display = "none";
        StartTextAnimation(0);
    });
    let dataText = [
        "I don't really go to the bar unless some friends go with me.",
        "But I'm here.",
        "With all the other people who drink their problems away.",
        "At least im not the only one with a drinking problem.",
        "*Three glasses later*.......",
        "*Grunt noise*.... I hate my job, this is not how things should have gone.",
        "If only things can.... restart in my life.",
        "Anything is..... better than.... this."
    ];
    
    function StartTextAnimation(i) {
        console.log(dataText[i]);
        
        if (dataText[i] == undefined ) {
            bus();
          };
        if (i < dataText[i].length) {
            typeWriter(dataText[i], 0, function(){
                StartTextAnimation(i + 1);
            });
            };
    };
}
// Bus Area
function bus() {
    parkP.style.display = "none";
    bedroomP.style.display = "none";
    barP.style.display = "none";
    display = busP
    progressBar();
    t = 3;
    let nextDis = next[t];
    spkBox[t].innerText = names;
        
    text[t].innerHTML = `.................`;

    next[t].addEventListener("click",function () {
        nextDis.style.display = "none";
        StartTextAnimation(0);
    });
    function StartTextAnimation(i) {
        // console.log(dataText[i]);
        if (dataText[i] == undefined ) {
            choiceDisplay[1].style.display = "block"
        }
        if (i < dataText[i].length) {
            typeWriter(dataText[i], 0, function(){
                StartTextAnimation(i + 1);
            });
        };
    };
    function StartTextAnimation2(i) {
        if (dataText[i] == undefined ) {
          death();
        };
        if (i < dataText[i].length) {
            typeWriter(dataText[i], 0, function(){
                StartTextAnimation2(i + 1);
            });
        };
    }
    let dataText = [
        ".....*Noises*.......Wha...What the, where the hell an I.....*Looks Around*...",
        "On a bus,...why an i on a bus...*Looks outside* trees.",
        "*Walks outside bus*... A forest, why the hell i'm in a forest.",
        `OK ${names} think, think why are you here, how you got here and how to get home.`,
        "What did i do last night........",
        "Wait, why do i got a uniform on, WHAT IS GOING ON.",
        "*30 minutes of panic later*... I'm lost in the forest with nobody around.",
        "No way of communication, and the fact that I'm somehow in a school uniform.",
        "You know I could stay here and maybe somebody will find me.",
        "The woods don't look too dense maybe there's a road or highway nearby.",
        "Or take the gravel path to that sign over there what does that even say.",
        "'WELCOME TO CAMP SENTAKUSHI'"
    ];

    choices[3].onclick = staybus;
    choices[4].onclick = woods;
    choices[5].onclick = gravel;

    function staybus() {
        choiceDisplay[1].style.display = "none"
        dataText = [
            "You know staying at the bus is not all that bad.",
            "Maybe somebody will come and find me and I Can go home.",
            "*Walks back on bus*... Ok just sit here and wait for help.",
            "*Falls asleep on bus*..... OUCH!!, That hurt what was that.....",
            `A snake bite, no way I got to get some help shit follow the trail ${names}.`,
            "*The poison kicks in your body goes numb and collapse on the trail.*",
            "*Just before you die you look off to the side and see everything go gray.*",
            "*The last words to come out of your mouth were.* This.... really.. is the end."
        ];
        StartTextAnimation2(0);
    };
};
// Woods
function woods() {
    busP.style.display = "none"
    woodsP.style.display = "block";
    t = 4;
    let nextDis = next[t];
    spkBox[t].innerText = names;

    text[t].innerHTML = "Ok, the woods are actually not that bad.";
    
    next[t].addEventListener("click",function () {
        nextDis.style.display = "none"
        StartTextAnimation(0);
    });
    function StartTextAnimation(i) {
        if (dataText[i] == undefined ) {
            choiceDisplay[2].style.display = "block"
          };
          if (i < dataText[i].length) {
            typeWriter(dataText[i], 0, function(){
                StartTextAnimation(i + 1);
            });
        };
    };
    function StartTextAnimation2(i) {
        if (dataText[i] == undefined ) {
            map();
        };
        if (i < dataText[i].length) {
            typeWriter(dataText[i], 0, function(){
                StartTextAnimation2(i + 1);
            });
        };
    };
    function StartTextAnimation3(i) {
        if (i < dataText[i].length) {
            typeWriter(dataText[i], 0, function(){
                StartTextAnimation2(i + 1);
            });
        };
    };
    let dataText = [
        "Theres got to be a road nearby so I can leave this place.",
        "I can probably run into a gas station and use somebody phone.",
        "Maybe I can learn where i'm actually at in the and get some answers.",
        "*Bear noise*..... Was that a bear just now, where the hell am I.",
        "*The bear was eating berries and the family was not far behind*.",
        "*When little cub sees you he run towards the parents*.",
        "So the bears are over there, so that means only one thing."
    ];
    choices[6].onclick = Fgravel;
    choices[7].onclick = bears;
    function Fgravel() {
        choiceDisplay[2].style.display = "none"
        woodsP.style.background = "url(/media/gravel-path.jpg)"
        injury = "my ankle is sprain.";
        dataText = [
            "*As fast as your legs can run, you sprint full speed the other way of the bears.*",
            "*But you sprained your ankle on a slope and rolled down to the bottom.*",
            "*Luckily it seems you fell near the trail from earlier.*",
            "Well... that could have gone better, dang my ankle looks bad I need treatment.",
            "Wait is that a building, great I can get some help.",
            "*Sees small billboard with a map on it* Looks like a map of the area.",
            "Cool now I can find some medical place for my ankle."
        ];
        StartTextAnimation2(0);
    }
    function bears() {
        choiceDisplay[2].style.display = "none";
        woodsP.style.height = "0";
        dataText = [
            "*You decided to hide and the bears start to smell you*",
            "*The bears start to surround you as you sit there in fear.*",
            "No stop stay back, STAY BACK NOOOOO!!!!",
        ];
        death();
        StartTextAnimation3(0);
    }
}
// Gravel path
function gravel() {
    busP.style.display = "none"
    gravelP.style.display = "block";
    t = 5;
    let nextDis = next[t];
    spkBox[t].innerText = names;
    
    text[t].innerHTML = "I'm just going to take the trail from here.";
    
    next[t].addEventListener("click",function () {
        nextDis.style.display = "none"
        StartTextAnimation(0);
    });
    function StartTextAnimation(i) {
        if (dataText[i] == undefined ) {
            injury = "im fine for right now."
            map()
        };
        if (i < dataText[i].length) {
            typeWriter(dataText[i], 0, function(){
                StartTextAnimation(i + 1);
            });
        };
    };
    let dataText = [
        "Taking this trail seems like the safe way to go.",
        "Taking the woods would have been too dangerous for me.",
        "Then there's staying at the bus I'll be to board and probably fall asleep.",
        "You know this would be a nice trip if I wasn't stranded in the middle of nowhere.",
        "I hope there's people in this so-called Camp Sentakushi.",
        "I've been walking for a while now surly I'm close, starting to get tired.",
        "*Bear noise in the distance*",
        "Not tired anymore, ok lets keep moving.",
        "*Sees a building in the distance*",
        "Finally a sign of human life.",
        "*Sees small billboard with a map on it* Looks like a map of the area.",
        "It's time to ask for some help on how and why im here."
    ];
};
// Map
function map() {
    diningP.style.display = "none"
    cabinsP.style.display = "none"
    fieldP.style.display = "none"
    amphitheaterP.style.display = "none"
    musicP.style.display = "none"
    lakeP.style.display = "none"
    nuresP.style.display = "none"
    libraryP.style.display = "none"
    counselorP.style.display = "none"
    woodsP.style.display = "none";
    gravelP.style.display = "none";
    display = mapP
    progressBar();
    if (v == 8) {
        counselorDisplay.style.display = "block"
    }
    counselorDisplay.onclick = counselorO
}
// Dining hall
mapLocation[0].onclick = function diningH() {
    mapP.style.display = "none"
    diningP.style.display = "block"
    t = 6;
    spkBox[t].innerText = names;
    returnToMap[0].onclick = map
    if (beenHereD == 1) {
        v++;

        text[t].innerHTML = "Looks like theres little people in the dining hall.";
            
        next[t].addEventListener("click",function() {
            contConv()
        });

        var conversations = [
            {con:"*You see a girl eating a sandwich by herself.*", sp:names},
            {con:"I'll just ask her about this place.", sp:names},
            {con:"Hay can I ask you a question about this place?", sp:names},
            {con:"You mean me, sure what do you want to know.",sp:"Saria"},
            {con:"I don't really know that much just to let you know.",sp:"Saria"},
            {con:"This camp, where is the closest town or gas station? ",sp:names},
            {con:"I don't know exactly but if I had to say around a ten-hour drive.",sp:"Saria"},
            {con:"And even then it's just a little convenient store with a gas station.",sp:"Saria"},
            {con:"Ok, thanks that was helpful.",sp:names},
            {con:"But wait how do you not know that we all were on the bus at the gas station right?",sp:"Saria"},
            {con:"*I think it's best if I don't tell people I just showed up here.*",sp:names},
            {con:"*At least until I have more information about this place.*",sp:names},
            {con:"I fell asleep all the way here, so I missed it.",sp:names},
            {con:"Well, if you say so, if you don't have no more questions see you around.",sp:"Saria"},
            {con:"Sure *I should find someone else to talk to.*",sp:names}
        ]; 
        function contConv() {
            if(typeof disp != undefined) {
                if(index < conversations.length-1) { 
                    clearInterval(disp);
                    index+=1;
                    convIndex = 0;
                    nConv = conversations[index]["con"].split('');
                    createIntervals();
                    text[t].innerHTML = "";
                    spkBox[t].innerHTML = conversations[index]["sp"];
                } else {
                    beenHereD = 2;
                    index = -1
                    map();
                };
                if (conversations[index]["sp"] == "Saria") {
                    spkBox[t].style.color = "yellow"
                } else {
                    spkBox[t].style.color = "#fff"
                }
            };
        };
        var nConv = conversations[index]["con"].split('');
        function createIntervals() {
            disp = setInterval(function() {
                text[t].innerHTML += nConv[convIndex];
                convIndex+=1;
                
                if(convIndex == nConv.length) {
                    clearInterval(disp);
                }
            }, 60);
        };
        
    } else {
        text[t].innerHTML = "I already been here I should look somewhere else.";
        next[t].onclick = map;
    }
};
// Cabins
mapLocation[1].onclick = function cabins() {
    mapP.style.display = "none"
    cabinsP.style.display = "block"
    returnToMap[1].onclick = map
    t = 7;
    spkBox[t].innerText = names;;
    if (beenHereC == 1) {
        v++;
                
        text[t].innerHTML = "It's strange, why do I look like this?";
            
        next[t].addEventListener("click",function() {
            contConv()
        });

        var conversations = [
            {con:"This looks like the cabin area.", sp:names},
            {con:"Someone here may know something about this camp.", sp:names},
            {con:"Hay you over there can you give me a hand with this!",sp:"Marquez"},
            {con:"Sure let me get that side of the box.", sp:names},
            {con:"Thanks, I needed the help.",sp:"Marquez"},
            {con:"Names Marquez you?",sp:"Marquez"},
            {con:`${names}.`,sp:names}, 
            {con:`Nice to meet you ${names}.`,sp:"Marquez"},
            {con:"Same here.",sp:names},
            {con:"So what's in the box if you don't mind me asking?",sp:names},
            {con:"My console and some snacks I bought for this summer trip.",sp:"Marquez"}, 
            {con:"Ow ok, so what is this camp purpose anyway do you know?",sp:names},
            {con:"Wait what, dude this camp is a place where all trouble makers go.",sp:"Marquez"},
            {con:"Or your parents want nothing to do with you this summer.",sp:"Marquez"},
            {con:"You really didnt know that?",sp:"Marquez"},
            {con:"Well, I was kept in the dark about this camp.",sp:names},
            {con:"Thanks for the info but I should really get going.",sp:names},
            {con:"All right see you around then.",sp:"Marquez"},
            {con:"So this is a camp full of dangerous people, great for me.",sp:names}
        ]; 
        function contConv() {
            if(typeof disp != undefined) {
                if(index < conversations.length-1) { 
                    clearInterval(disp);
                    index+=1;
                    convIndex = 0;
                    nConv = conversations[index]["con"].split('');
                    createIntervals();
                    text[t].innerHTML = "";
                    spkBox[t].innerHTML = conversations[index]["sp"];
                    if (conversations[index]["sp"] == "Marquez") {
                        spkBox[t].style.color = "cadetblue";
                    } else {
                        spkBox[t].style.color = "#fff";
                    }
                } else {
                    map();
                    index = -1
                    beenHereC = 2;
                };
            };
        };
        var nConv = conversations[index]["con"].split('');
        function createIntervals() {
            disp = setInterval(function() {
                text[t].innerHTML += nConv[convIndex];
                convIndex+=1;
                if(convIndex == nConv.length) {
                    clearInterval(disp);
                };
            }, 100);
        };
    } else {
        text[t].innerHTML = "I already been here I should look somewhere else.";
        next[t].onclick = map;
    };
};
// Field area
mapLocation[2].onclick = function fieldA() {
    mapP.style.display = "none"
    fieldP.style.display = "block"
    t = 8;
    returnToMap[2].onclick = map;
    if (beenHereF == 1) {
        v++;
        spkBox[t].innerText = names;
                
        text[t].innerHTML = "Theres people playing the fields.";
            
        next[t].addEventListener("click",function() {
            contConv()
        });

        var conversations = [
            {con:"Maybe I should ask somewhere else.", sp:names},
            {con:"The whole sports thing was never my kind of thing to do.", sp:names},  
            {con:"WATCH OUT!!",sp:"Mike"},
            {con:"Wha...*You get hit in the face with a dodgeball.*", sp:names},   
            {con:"My bad, the ball went sideways are you ok, can you speak?",sp:"Mike"}, 
            {con:"Ya I'm ok it was just a hit to the face.",sp:names}, 
            {con:"Just let me sit down for a moment and I'll be fine.",sp:names}, 
            {con:"Let me help you to the bench over there.",sp:"Mike"}, 
            {con:"I'll get you something to drink give me a minute.",sp:"Mike"}, 
            {con:"Thanks for the drink man.",sp:names}, 
            {con:"It's ok I was the one in the wrong, by the way names mike.",sp:"Mike"},
            {con:`Cool i'm ${names}.`,sp:names},
            {con:"So why were you walking around you look lost?",sp:"Mike"}, 
            {con:"Well im trying to get more information about this camp and I got lost.",sp:names},
            {con:"If you're looking for someone with info then find the instructor over the camp.",sp:"Mike"},
            {con:"The main office is somewhere around here just keep looking.",sp:"Mike"},
            {con:"Ok thanks for the info, see you around.",sp:names},
        ]; 
        function contConv() {
            if(typeof disp != undefined) {
                if(index < conversations.length-1) { 
                    clearInterval(disp);
                    index+=1;
                    convIndex = 0;
                    nConv = conversations[index]["con"].split('');
                    createIntervals();
                    text[t].innerHTML = "";
                    spkBox[t].innerHTML = conversations[index]["sp"];
                    if (conversations[index]["sp"] == "Mike") {
                        spkBox[t].style.color = "grey"
                    } else {
                        spkBox[t].style.color = "#fff"
                    }
                } else {
                    map();
                    index = -1
                    beenHereF = 2;
                };
            };
        };
        var nConv = conversations[index]["con"].split('');
        function createIntervals() {
            disp = setInterval(function() {
                text[t].innerHTML += nConv[convIndex];
                convIndex+=1;
                if(convIndex == nConv.length) {
                    clearInterval(disp);
                };
            }, 60);
        };
    } else {
        text[t].innerHTML = "I already been here I should look somewhere else.";
        next[t].onclick = map;
    }
};
// Amphitheater
mapLocation[3].onclick = function amphitheater() {
    mapP.style.display = "none"
    amphitheaterP.style.display = "block"
    t = 9;
    spkBox[t].innerText = names;;
    returnToMap[3].onclick = map
    if (beenHereA == 1) {
        v++;
        
        text[t].innerHTML = "Wow this is a big area, I think this is a stage area.";
            
        next[t].addEventListener("click",function() {
            contConv()
        });

        var conversations = [            
            {con:"It's called an amphitheater you know.", sp:"Maria"},
            {con:"What the, where you came from?", sp:names},
            {con:"You walk right pass me.",sp:"Maria"},
            {con:"I did? *I'm sure she was not there.* ", sp:names},
            {con:"So why are you here?", sp:"Maria"},
            {con:"Nobody's around so get lost will ya.", sp:"Maria"},
            {con:"Well, you're here so somebody's here don't you think.", sp:names},
            {con:"You know people don't like a smart ass.", sp:"Maria"},
            {con:"So what do you want anyway, looking like a headless chicken?", sp:"Maria"},
            {con:"I'm just looking for some information on this place ok.", sp:names},
            {con:"This place is here so you can get away from your problems in your life.", sp:"Maria"},
            {con:"*The way she said that* What...", sp:names},
            {con:"That's what the counselor who spoke to me said, anyway.", sp:"Maria"},
            {con:"Now leave me be if you want to talk to someone go to the dining hall.", sp:"Maria"},
            {con:"You'll probably see my sister Saria stuffing her face with food, ask her stuff.", sp:"Maria"},
            {con:"Thanks, by the way what is even your name?", sp:names},
            {con:"Maria, yours?",sp:"Maria"},
            {con:`${names}, see you around.`,sp:names},
        ]; 
        function contConv() {
            if(typeof disp != undefined) {
                if(index < conversations.length-1) { 
                    clearInterval(disp);
                    index+=1;
                    convIndex = 0;
                    nConv = conversations[index]["con"].split('');
                    createIntervals();
                    text[t].innerHTML = "";
                    spkBox[t].innerHTML = conversations[index]["sp"];
                    if (conversations[index]["sp"] == "Maria") {
                        spkBox[t].style.color = "red"
                    } else {
                        spkBox[t].style.color = "#fff"
                    }
                } else {
                    map();
                    index = -1
                    beenHereA = 2;
                };
            };
        };
        var nConv = conversations[index]["con"].split('');
        function createIntervals() {
            disp = setInterval(function() {
                text[t].innerHTML += nConv[convIndex];
                convIndex+=1;
                if(convIndex == nConv.length) {
                    clearInterval(disp);
                };
            }, 60);
        };
    } else {
        text[t].innerHTML = "I already been here I should look somewhere else.";
        next[t].onclick = map;
    }
};
// Music room
mapLocation[4].onclick = function musicR() {
    mapP.style.display = "none"
    musicP.style.display = "block"
    t = 10;
    spkBox[t].innerText = names;
    returnToMap[4].onclick = map;
    if (beenHereM == 1) {
        v++;
                
        text[t].innerHTML = "*Hears piano music in the room*";
            
        next[t].addEventListener("click",function() {
            contConv();
        });

        var conversations = [
            {con:"This music sounds very peaceful to listen to.", sp:names}, 
            {con:"*You see, a girl playing the piano.*", sp:names}, 
            {con:"You're not going to say anything just watch?", sp:"Fiona"}, 
            {con:"Well, you were playing so well I didn't want to interrupt you.", sp:names},   
            {con:"It's ok I can talk and still play.", sp:"Fiona"},
            {con:"So what's up you want to sit here and hear me play all day.", sp:"Fiona"}, 
            {con:"No, I came in looking for help, do you know someone who can?", sp:names}, 
            {con:"Well actually, I do she is right next to this building.", sp:"Fiona"}, 
            {con:"She's a nurse over the camp her names Ms.Windy.", sp:"Fiona"},
            {con:"Thanks, that helps a lot.", sp:names}, 
            {con:"No problem, the names Fiona by the way.",sp:"Fiona"}, 
            {con:"Well, I got some things to do before the day ends so.", sp:"Fiona"},
            {con:`See you around ${names}.`, sp:"Fiona"},
            {con:"See ya, hold on how she know my name?", sp:names}
        ]; 
        function contConv() {
            if(typeof disp != undefined) {
                if(index < conversations.length-1) { 
                    clearInterval(disp);
                    index+=1;
                    convIndex = 0;
                    nConv = conversations[index]["con"].split('');
                    createIntervals();
                    text[t].innerHTML = "";
                    spkBox[t].innerHTML = conversations[index]["sp"];
                    if (conversations[index]["sp"] == "Fiona") {
                        spkBox[t].style.color = "silver"
                    } else {
                        spkBox[t].style.color = "#fff"
                    }
                } else {
                    map();
                    index = -1
                    beenHereM = 2;
                };
            };
        };
        var nConv = conversations[index]["con"].split('');
        function createIntervals() {
            disp = setInterval(function() {
                text[t].innerHTML += nConv[convIndex];
                convIndex+=1;
                if(convIndex == nConv.length) {
                    clearInterval(disp);
                };
            }, 60);
        };
    } else {
        text[t].innerHTML = "I already been here I should look somewhere else.";
        next[t].onclick = map;
    }
}
// Lake
mapLocation[5].onclick = function lake() {
    mapP.style.display = "none"
    lakeP.style.display = "block"
    t = 11;
    spkBox[t].innerText = names;
    returnToMap[5].onclick = map;
    if (beenHereLak == 1) {
        v++;
                
        text[t].innerHTML = "The docks here have a nice view of the lake.";
            
        next[t].addEventListener("click",function() {
            contConv()
        });

        var conversations = [
            {con:"This place looks amazeing to look at.", sp:names},
            {con:"People here are friendly enough to some degree.", sp:names},
            {con:"Why am I here at this camp with nothing but the clothes on my back?", sp:names},
            {con:"It feels like im in a whole different world or something.", sp:names},
            {con:"Could this all be just a bad dream, but it feels real?", sp:names},
            {con:"What if I can't go back home what will happen then?", sp:names},
            {con:"*You take your socks and shoes off then put your feet in the water.*", sp:names}, 
            {con:"This feels so nice when you take a breath in and relax.", sp:names},
            {con:"Do I really want to go back?", sp:names},
            {con:"I mean it's too good to be true.", sp:names},
            {con:"I should really find out why I'm here at camp Sentakushi.", sp:names},
            {con:"*Puts socks and shoes and walks off docks*", sp:names},
            {con:"It's all up to me to make a choice in the end.", sp:names}
        ]; 
        function contConv() {
            if(typeof disp != undefined) {
                if(index < conversations.length-1) { 
                    clearInterval(disp);
                    index+=1;
                    convIndex = 0;
                    nConv = conversations[index]["con"].split('');
                    createIntervals();
                    text[t].innerHTML = "";
                    spkBox[t].innerHTML = conversations[index]["sp"];
                } else {
                    map()
                    index = -1
                    beenHereLak = 2;
                };
            };
        };
        var nConv = conversations[index]["con"].split('');
        function createIntervals() {
            disp = setInterval(function() {
                text[t].innerHTML += nConv[convIndex];
                convIndex+=1;
                if(convIndex == nConv.length) {
                    clearInterval(disp);
                };
            }, 60);
        };
    } else {
        text[t].innerHTML = "I already been here I should look somewhere else.";
        next[t].onclick = map;
    }
}
// Nures
mapLocation[6].onclick = function nures() {
    mapP.style.display = "none"
    nuresP.style.display = "block"
    t = 12;
    spkBox[t].innerText = names;
    returnToMap[6].onclick = map;
    if (beenHereN == 1) {
        v++;
                
        text[t].innerHTML = "Hello is anyone here?";
            
        next[t].addEventListener("click",function() {
            contConv()
        });

        var conversations = [
            {con:"Looks like nobody here.", sp:names}, 
            {con:"Maybe I should just leave for now.", sp:names}, 
            {con:"*Front door opens and close.*", sp:names},  
            {con:"Hello, I saw someone walked in is everything ok.", sp:"Ms.Windy"}, 
            {con:"Yes, everything is fine I just have some questions.", sp:names},
            {con:"Sure have a seat why I give you a checkup.", sp:"Ms.Windy"},
            {con:"All students have to get seen on the first day here.", sp:"Ms.Windy"},
            {con:`Ok, but I think ${injury}`,sp:names},
            {con:"Well lets see then, ask your question as I run some test.", sp:"Ms.Windy"},
            {con:"Can you tell me who is over this camp and where I can find them?", sp:names},
            {con:"He is usually walking around the camp grounds looking at the new campers.", sp:"Ms.Windy"},
            {con:"So you can go looking around the camp if you want to see him.", sp:"Ms.Windy"},
            {con:"But I recommend you just wait until he goes back to his office.", sp:"Ms.Windy"},
            {con:"Well im all done.", sp:"Ms.Windy"},
            {con:"Thanks, I'll keep that in mind.", sp:names},
            {con:"See you around then.", sp:names},
        ]; 
        function contConv() {
            if(typeof disp != undefined) {
                if(index < conversations.length-1) { 
                    clearInterval(disp);
                    index+=1;
                    convIndex = 0;
                    nConv = conversations[index]["con"].split('');
                    createIntervals();
                    text[t].innerHTML = "";
                    spkBox[t].innerHTML = conversations[index]["sp"];
                    if (conversations[index]["sp"] == "Ms.Windy") {
                        spkBox[t].style.color = "purple"
                    } else {
                        spkBox[t].style.color = "#fff"
                    }
                } else {
                    map();
                    index = -1;
                    beenHereN = 2;
                };
            };
        };
        var nConv = conversations[index]["con"].split('');
        function createIntervals() {
            disp = setInterval(function() {
                text[t].innerHTML += nConv[convIndex];
                convIndex+=1;
                if(convIndex == nConv.length) {
                    clearInterval(disp);
                }
            }, 60);
        };
    } else {
        text[t].innerHTML = "I already been here I should look somewhere else.";
        next[t].onclick = map;
    }
}
// library
mapLocation[7].onclick = function library() {
    mapP.style.display = "none"
    libraryP.style.display = "block"
    t = 13;
    spkBox[t].innerText = names;
    returnToMap[7].onclick = map;
    if (beenHereLib == 1) {
        v++;
                
        text[t].innerHTML = "A library at a camp?";
            
        next[t].addEventListener("click",function() {
            contConv()
        });

        var conversations = [
            {con:"I'm not complaining thow it's good for research.", sp:names}, 
            {con:"It's probably some info on this camp and the history of this place.", sp:names}, 
            {con:"Now, lets see where are the archives located.", sp:names},  
            {con:"You need help to look for a book.", sp:"Yuki"}, 
            {con:"What, do people just sneak up on anybody here?", sp:names}, 
            {con:"Sorry, so what you want to know?", sp:"Yuki"}, 
            {con:"Im over the library this summer so if you have any questions?", sp:"Yuki"}, 
            {con:"Well, ya I have some questions.", sp:names}, 
            {con:"Like where is this camp located and how do you leave?", sp:names}, 
            {con:"Lets see this camp is in the far countryside deep in the woods.", sp:"Yuki"},
            {con:"The transportation is only a few vans with food for the week.", sp:"Yuki"}, 
            {con:"All transportation is gone by now until next week.", sp:"Yuki"}, 
            {con:"Wait, so there is no way to leave the camp?", sp:names},
            {con:"Unless you enjoy walking.", sp:"Yuki"},
            {con:"I appreciate the information, I'll see you around um...", sp:names},
            {con:"Yuki.", sp:"Yuki"},
            {con:"Thanks, Yuki.", sp:names}
        ]; 
        function contConv() {
            if(typeof disp != undefined) {
                if(index < conversations.length-1) { 
                    clearInterval(disp);
                    index+=1;
                    convIndex = 0;
                    nConv = conversations[index]["con"].split('');
                    createIntervals();
                    text[t].innerHTML = "";
                    spkBox[t].innerHTML = conversations[index]["sp"];
                    if (conversations[index]["sp"] == "Yuki") {
                        spkBox[t].style.color = "green";
                    } else {
                        spkBox[t].style.color = "#fff";
                    };
                } else {
                    map();
                    index = -1
                    beenHereLib = 2;
                };
            };
        };
        var nConv = conversations[index]["con"].split('');
        function createIntervals() {
            disp = setInterval(function() {
                text[t].innerHTML += nConv[convIndex];
                convIndex+=1;
                if(convIndex == nConv.length) {
                    clearInterval(disp);
                };
            }, 60);
        };
    } else {
        text[t].innerHTML = "I already been here I should look somewhere else.";
        next[t].onclick = map;
    }
}
// counselor office
function counselorO() {
    mapP.style.display = "none"
    counselorP.style.display = "block"
    v++;
    t = 14;
    spkBox[t].innerText = names;
            
    text[t].innerHTML = "This is the head office, about time.";
        
    next[t].addEventListener("click",function() {
        contConv();
    });

    var conversations = [
        {con:"So, I hear you're looking for me.", sp:"Dean"}, 
        {con:"Are you over the camp?", sp:names}, 
        {con:`Why yes I am, and I know why you're here ${names}.`, sp:"Dean"}, 
        {con:"How do you know my name?", sp:names}, 
        {con:"Lets take a seat on this bench and I'll explain.", sp:"Dean"}, 
        {con:"*You set on the bench.* Start talking.", sp:names},  
        {con:`${names} you were brought here for a reason the same as everyone else.`, sp:"Dean"}, 
        {con:"So everyone here came the same way I did.", sp:names}, 
        {con:"No, but none the less they are still here.", sp:"Dean"},
        {con:"I can't tell you why you were brought here.", sp:"Dean"}, 
        {con:"In the end its up to you to find that out only thing I can do is watch.", sp:"Dean"}, 
        {con:"If you really want to go home, I can make that happen but let me ask you this.", sp:"Dean"},
        {con:"Why go back to nothing when you can stay here and find something?", sp:"Dean"}, 
        {con:`It's time to make a choice ${names}.`, sp:"Dean"},
        {con:"So it's my choice, lets see.", sp:names}, 
    ]; 
    function contConv() {
        if(typeof disp != undefined) {
            if(index < conversations.length-1) { 
                clearInterval(disp);
                index+=1;
                convIndex = 0;
                nConv = conversations[index]["con"].split('');
                createIntervals();
                text[t].innerHTML = "";
                spkBox[t].innerHTML = conversations[index]["sp"];
                if (conversations[index]["sp"] == "Dean") {
                    spkBox[t].style.color = "brown"
                } else {
                    spkBox[t].style.color = "#fff"
                }
            } else {
                console.log(choiceDisplay[11]);
                
                choiceDisplay[11].style.display = "block"
                choices[32].onclick = cabinRoom;
                choices[33].onclick = guestRoom;
                index = -1
            };
        };
    };
    var nConv = conversations[index]["con"].split('');
    function createIntervals() {
        disp = setInterval(function() {
            text[t].innerHTML += nConv[convIndex];
            convIndex+=1;
            if(convIndex == nConv.length) {
                clearInterval(disp);
            };
        }, 60);
    };
};
// Cabin Room
function cabinRoom() {
    counselorP.style.display = "none"
    cabinRoomP.style.display = "block"
    v++;
    t = 15;
    spkBox[t].innerText = names;
            
    text[t].innerHTML = "..........";
        
    next[t].addEventListener("click",function() {
        contConv();
    });

    var conversations = [
        {con:"In the end the choice was mine.", sp:names},
        {con:"The choice to find something, the reason that brought me here.", sp:names},
        {con:"It could all be a dream, but its real.", sp:names},
        {con:"This summer trip could be what I need.", sp:names},
        {con:"Im a whole different person in this place.", sp:names},
        {con:"So in the end, im glad I made a choice that want lead to regret.", sp:names},
    ]; 
    function contConv() {
        if(typeof disp != undefined) {
            if(index < conversations.length-1) { 
                clearInterval(disp);
                index+=1;
                convIndex = 0;
                nConv = conversations[index]["con"].split('');
                createIntervals();
                text[t].innerHTML = "";
                spkBox[t].innerHTML = conversations[index]["sp"];
            } else {
                Fin();
                index = -1
            };
        };
    };
    var nConv = conversations[index]["con"].split('');
    function createIntervals() {
        disp = setInterval(function() {
            text[t].innerHTML += nConv[convIndex];
            convIndex+=1;
            if(convIndex == nConv.length) {
                clearInterval(disp);
            };
        }, 60);
    };
};
//Guest Room 
function guestRoom() {
    counselorP.style.display = "none"
    guestRoomP.style.display = "block"
    v++;
    t = 16;
    spkBox[t].innerText = names;
            
    text[t].innerHTML = "..........";
        
    next[t].addEventListener("click",function() {
        contConv();
    });

    var conversations = [
        {con:"In the end the choice was mine.", sp:names},
        {con:"The choice to go back to nothing, the reason that brought me back.", sp:names},
        {con:"To the same house I come home to everyday.", sp:names},
        {con:"It's not that bad coming back here home is home.", sp:names},
        {con:"But I wonder how nice it would have been to stay there.", sp:names},
        {con:"It showed so much color and joy.", sp:names},
        {con:"To all the people I met and said I'll see you around.", sp:names},
        {con:"Looks like that will never happen.", sp:names}
    ]; 
    function contConv() {
        if(typeof disp != undefined) {
            if(index < conversations.length-1) { 
                clearInterval(disp);
                index+=1;
                convIndex = 0;
                nConv = conversations[index]["con"].split('');
                createIntervals();
                text[t].innerHTML = "";
                spkBox[t].innerHTML = conversations[index]["sp"];
            } else {
                Fin();
                index = -1
            };
        };
    };
    var nConv = conversations[index]["con"].split('');
    function createIntervals() {
        disp = setInterval(function() {
            text[t].innerHTML += nConv[convIndex];
            convIndex+=1;
            if(convIndex == nConv.length) {
                clearInterval(disp);
            };
        }, 60);
    };
};
// Game over
function death() {
    busP.style.display = "none"
    gameHud.style.display = "block"
    ele4.setAttribute("id","name");
    gameHud.appendChild(ele);
    ele.appendChild(ele2);
    ele.appendChild(ele4);
    gameHud.style.background = "#000";
    gameHud.style.height = "754px";
    ele2.style.color = "red";
    ele2.innerText = "Game Over"
    ele3.style.display = "none"
    ele4.innerText = "Restart"
    ele4.onclick = restart
};
// End
function Fin() {
    cabinRoomP.style.display = "none"
    guestRoomP.style.display = "none"
    title.style.display = "none"
    display = start;
    progressBar();
    start.style.background = "#000"
    start.appendChild(ele2);
    ele2.setAttribute("id","end");
    ele2.innerText = "End"
}
// restart
function restart() {
    window.location.reload();
};