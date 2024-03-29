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
let textlog = document.getElementById("textlog");
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
let tData = [];
let height = window.innerHeight;
let parkAud = new Audio('media/dark-forest(chosic.com).mp3');
let bedroomAud = new Audio('media/bedroom-Komiku_Resolution(chosic.com).mp3');
let barAud = new Audio('media/bar.mp3');
let busAud = new Audio('media/bus-stop_The_Bards_Tale(chosic.com).mp3');
let woodsAud = new Audio('media/woods-Komiku_The_Wind(chosic.com).mp3');
let gravelAud = new Audio('media/gravelAud_in-the-forest-ambient-acoustic-guitar-instrumental-background-music-for-videos-5718.mp3');
let mapAud = new Audio('media/map_春のテーマ-Spring-field-(chosic.com).mp3');
let cabinsAud = new Audio('media/John-Bartmann-A-Kwela-Fella(chosic.com).mp3');
let fieldsAud = new Audio('media/fieldsaud_happy-whistling-ukulele-115485.mp3');
let amphitheaterAud = new Audio('media/amphitheateraud_set-176805.mp3');
let musicAud = new Audio('media/musicroom_Daniel_Veesey_(chosic.com).mp3');
let lakeAud = new Audio('media/lake-Komiku_Sunset_on_the_beach(chosic.com).mp3');
let nuresAud = new Audio('media/nuresAud_black_box-153858.mp3');
let libraryAud = new Audio('media/library-Aaron_Dunn_-_Goldberg_Variation-Aria(chosic.com).mp3');
let counselorAud = new Audio('media/counselorAud_desolate-world-121196.mp3');
let cabinRoomAud = new Audio('media/cabinroom-Komiku_When_you_see_that_you_were_subject_of_experiment(chosic.com).mp3');
let guestroomAud = new Audio('media/guestroomAud_Loyalty_Freak_Music_-_06_-_People_are_spinning(chosic.com).mp3');
let gameoverAud = new Audio('media/kl-peach-game-over-ii-135684.mp3');
let snakeSou = new Audio('media/snake-hissing-6092.mp3');
let bearSou = new Audio('media/bear_02.flac');
// Type write effect
function typeWriter(text, i, fnCallback) {
    let texts = document.querySelectorAll("#text");
    if (i < (text.length)) {
        texts[t].innerHTML = text.substring(0, i+1);
        setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
        }, 130);
    } else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
    }
}
// ProgressBar
function progressBar () {
    barL.style.display = "block"
    barL.style.height = height.toString() + "px";

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
            display.style.height = height.toString() + "px";
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
    gameHud.style.height = height.toString() + "px";
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
        parkAud.play();
        let nextDis = next[t];

        text[t].innerHTML = "You know, things in this world change faster then we tend to think."

        next[t].addEventListener("click",function () {
            nextDis.style.display = "none"
            StartTextAnimation(0)
        })
        function StartTextAnimation(i) {
            if (dataText[i] == undefined ) {
                choiceDisplay[0].style.display = "block"
                textlog.style.display = "block";
                tData.forEach(function(el) {
                    let para = document.createElement("p");
                    para.className = "finalBlock";
                    para.innerHTML = names + ":" + el;
                    textlog.appendChild(para);
                });
                parkAud.play();
            }
            if (i < dataText[i].length) {
                tData.push(dataText[i]);
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
                tData.push(dataText[i]);
                typeWriter(dataText[i], 0, function(){
                    StartTextAnimation2(i + 1);
                });
            };
        }
        let dataText = [
            "This park for example, with little people around out at night.       ",
            "You can see all of the city lights up here on this bench.       ",
            "Watching a city grow and change over night.    ",
            "It's strange, I would always come here to celabreate.    ",
            "I thought finally being free of endless work would make me happy?        ",
            "But in the end, I just felt lost, sad that this world is filled with evil people.           ",
            "My coworkers framed and betrayed me, all so that they can save there friend.     ",
            "Heh, I came in early everyday for that company just for shit to turn out like this.     ",
            "Well, that's enough thinking for today what should I do next?      ",
            "Should I go home or stay here for a little longer? Maybe the bar is a good idea?     "
        ];
        choices[0].onclick = home;
        choices[1].onclick = stayPark;
        choices[2].onclick = bar;

        function stayPark() {
            textlog.style.display = "none";
            tData = [];
            choiceDisplay[0].style.display = "none"
            dataText = [
                "Well, sitting here doesen't seem too bad when you think about it.      ",
                "I can look up and stare at the stars to put my mind at ease.      ",
                "I'm just lost at how things turned out to be this way.",
                "I'll just set here until I'm ready...... to.... go..... hom....              ",
                "..............................        "
            ];
            StartTextAnimation2(0);
        };
    };
    // document.getElementById('test1').id = 'test2';p
};
// Home
function home() {
    textlog.style.display = "none";
    tData = [];
    parkP.style.display = "none"
    parkAud.pause();
    bedroomP.style.display = "block";
    bedroomAud.play();
    bedroomP.style.height = height.toString() + "px";

    t = 1;
    let nextDis = next[t];
    spkBox[t].innerText = names;
    text[t].innerHTML = "Home sweet home, about time.";
    
    next[t].addEventListener("click",function () {
        nextDis.style.display = "none"
        StartTextAnimation(0);
    });
    let dataText = [
        "The bus took forever to get to my stop, at least I made it home ok.        ",
        "Time to take a shower and get some rest.        ",
        "*Shower Noses*.......                    ",
        "........*Water turns off*        ",
        "*Heavy Sigh*..... Tomorrow is a new day, ..... what am I going to do with my life.          ",
        "Time to get some rest..........              "
    ];
    function StartTextAnimation(i) {
        if (dataText[i] == undefined ) {
            bus()
          };
        if (i < dataText[i].length) {
            tData.push(dataText[i]);
            typeWriter(dataText[i], 0, function(){
                StartTextAnimation(i + 1);
            });
        };
    };
};
// Bar
function bar() {
    textlog.style.display = "none";
    tData = [];
    parkP.style.display = "none";
    parkAud.pause();
    barP.style.display = "block";
    barAud.play();
    barP.style.height = height.toString() + "px";
    t = 2;
    let nextDis = next[t];
    spkBox[t].innerText = names;
        
    text[t].innerHTML = "Time to celebrate my freedom into the night and so forth.";

    next[t].addEventListener("click",function () {
        nextDis.style.display = "none";
        StartTextAnimation(0);
    });
    let dataText = [
        "I don't really go to the bar unless some friends go with me.        ",
        "But, I'm here.          ",
        "With all the other people here drinking their problems away.    ",
        "I start to not feel bad about my situation, or it could be the drinks tring to numb the pain, Hahhh.         ",
        "At least im not the only one with problems tonight.            ",
        "*Three glasses later*.......         ",
        "*Grunt noise*.... I hated my job, this is not how things should have gone.          ",
        "If only things can...... restart in my life you know.         ",
        "Anything is..... better......... than.... this.         "
    ];
    
    function StartTextAnimation(i) {
        console.log(dataText[i]);
        
        if (dataText[i] == undefined ) {
            bus();
          };
        if (i < dataText[i].length) {
            tData.push(dataText[i]);
            typeWriter(dataText[i], 0, function(){
                StartTextAnimation(i + 1);
            });
            };
    };
}
// Bus Area
function bus() {
    parkP.style.display = "none";
    parkAud.pause();
    bedroomAud.pause();
    barAud.pause();
    bedroomP.style.display = "none";
    barP.style.display = "none";
    display = busP
    progressBar();
    busAud.play();
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
            textlog.style.display = "block";
            tData.forEach(function(el) {
                let para = document.createElement("p");
                para.className = "finalBlock";
                para.innerHTML = names + ":" + el;
                textlog.appendChild(para);
            });
        }
        if (i < dataText[i].length) {
            tData.push(dataText[i]);
            typeWriter(dataText[i], 0, function(){
                StartTextAnimation(i + 1);
            });
        };
    };
    function StartTextAnimation2(i) {
        if (dataText[i] == undefined ) {
            tData.forEach(function(el) {
                let para = document.createElement("p");
                para.className = "finalBlock";
                para.innerHTML = names + ":" + el;
                textlog.appendChild(para);
            });
            death();
        };
        if (i < dataText[i].length) {
            tData.push(dataText[i]);
            typeWriter(dataText[i], 0, function(){
                StartTextAnimation2(i + 1);
            });
            if (i == 3) {
                snakeSou.play();
            }
        };
    }
    let dataText = [
        ".....*Grunt Noises*.......Wha...What the, where am I.....?*Looks Around*.......          ",
        "On a bus,...how did I end up on a bus...*Looks outside* TREES?           ",
        "*Walks outside bus*... A forest?, why am I in a forest?            ",
        `OK ${names} think, why are you here, how did I get here and how do I get home?        `,
        "What did I do last night........           ",
        "Wait!, why do I have a uniform on, WHAT IS GOING ON?          ",
        "*30 minutes of panic later*....... I'm lost in the forest with nobody around.        ",
        "No way of communication, and the fact that I'm somehow in a school uniform it looks like?          ",
        "hmmm... maybe if I stay here somebody will find me.           ",
        "The woods don't look too dense, maybe there's a road or highway nearby.           ",
        "Or maybe take the gravel path to that sign over there, what does that even say anyway.                       ",
        "'WELCOME TO CAMP SENTAKUSHI'                 "
    ];

    choices[3].onclick = staybus;
    choices[4].onclick = woods;
    choices[5].onclick = gravel;

    function staybus() {
        tData = [];
        
        choiceDisplay[1].style.display = "none"
        dataText = [
            "You know staying at the bus is probably the safest bet, I think.              ",
            "Maybe somebody will come and find me, somebody drove this bus after all.            ",
            "*Walks back on bus*... Ok just sit here and wait for help.                ",
            `*Falls asleep on bus*............ OUCH!!, what was that shit that hurt.....                `,
            `Is that a snake bite?, no way I got to get some help shit follow the trail ${names}.       `,
            "*The poison kicks in and your body begins to feel numb you then collapse on the trail.*                ",
            "*Just before you die you look off to the side and see everything go gray.*                ",
            "*The last words to come out of your mouth were.* This.... really.. is the end.                "
        ];
        StartTextAnimation2(0);
    };
};
// Woods
function woods() {
    textlog.style.display = "none";
    tData = [];
    busP.style.display = "none"
    busAud.pause();
    woodsP.style.display = "block";
    woodsAud.play();
    woodsP.style.height = height.toString() + "px";
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
            textlog.style.display = "block";
            tData.forEach(function(el) {
                let para = document.createElement("p");
                para.className = "finalBlock";
                para.innerHTML = names + ":" + el;
                textlog.appendChild(para);
            });
          };
          if (i < dataText[i].length) {
            tData.push(dataText[i]);
            typeWriter(dataText[i], 0, function(){
                StartTextAnimation(i + 1);
            });
            if (i == 3) {
                bearSou.play();
            }
        };
    };
    function StartTextAnimation2(i) {
        if (dataText[i] == undefined ) {
            tData.forEach(function(el) {
                let para = document.createElement("p");
                para.className = "finalBlock";
                para.innerHTML = names + ":" + el;
                textlog.appendChild(para);
            });
            map();
        };
        if (i < dataText[i].length) {
            tData.push(dataText[i]);
            typeWriter(dataText[i], 0, function(){
                StartTextAnimation2(i + 1);
            });
        };
    };
    function StartTextAnimation3(i) {
        if (dataText[i] == undefined ) {
            tData.forEach(function(el) {
                let para = document.createElement("p");
                para.className = "finalBlock";
                para.innerHTML = names + ":" + el;
                textlog.appendChild(para);
            });
            death();
        };
        if (i < dataText[i].length) {
            tData.push(dataText[i]);
            typeWriter(dataText[i], 0, function(){
                StartTextAnimation2(i + 1);
            });
        };
    };
    let dataText = [
        "Theres got to be a road or highway nearby so I can leave this place.                         ",
        "I can probably run into a gas station and use somebody phone.                         ",
        "Maybe I can call someone and see where i'm actually at and get some answers.                         ",
        "*Bear noise*........ Was that a bear just now, where the hell am I.                         ",
        "*The bear was eating berries and the family was not far behind*.                         ",
        "*The bears where enjoying the berries until a little cub sees you and runs towards his parents*.                         ",
        "Shit the bears are over there, so whats my next move?        "
    ];
    choices[6].onclick = Fgravel;
    choices[7].onclick = bears;
    function Fgravel() {
        textlog.style.display = "none";
        tData = [];
        choiceDisplay[2].style.display = "none"
        woodsP.style.background = "url(../media/gravel-path.jpg)"
        injury = "my ankle is sprain.";
        dataText = [
            "*As fast as your legs can run, you sprint full speed the opposite way of the bears.*                   ",
            "*But you sprained your ankle on a slope and rolled down to the bottom.*                   ",
            "*Luckily it seems you fell near the trail from earlier.*                   ",
            "Well... that could have gone better, damn my ankle looks bad I need treatment.                   ",
            "Wait is that a building, great I can get some help.                   ",
            "*Sees small billboard with a map on it* Looks like a map of the area.                   ",
            "Cool now I can find someone to help me with my ankle.                 "
        ];
        StartTextAnimation2(0);
    }
    function bears() {
        choiceDisplay[2].style.display = "none";
        woodsP.style.height = "0";
        dataText = [
            "*You decided to hide but the bears start to smell you*                       ",
            "*The bears start to surround you as you sit there in fear.*                       ",
            "No stop stay back, STAY BACK NOOOOO!!!!                       ",
        ];
        StartTextAnimation3(0);
    }
}
// Gravel path
function gravel() {
    textlog.style.display = "none";
    tData = [];
    busP.style.display = "none"
    busAud.pause();
    gravelP.style.display = "block";
    gravelAud.play();
    gravelP.style.height = height.toString() + "px";
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
            tData.forEach(function(el) {
                let para = document.createElement("p");
                para.className = "finalBlock";
                para.innerHTML = names + ":" + el;
                textlog.appendChild(para);
            });
            map()
        };
        if (i < dataText[i].length) {
            tData.push(dataText[i]);
            typeWriter(dataText[i], 0, function(){
                StartTextAnimation(i + 1);
            });
            if (i == 6) {
                bearSou.play();
            }
        };
    };
    let dataText = [
        "Taking this trail seems like the best bet in finding someone.              ",
        "Taking the woods would have been too dangerous for me.              ",
        "Then there's staying at the bus I'll be too board and probably fall asleep.              ",
        "You know this would be a nice trip if I wasn't stranded in the middle of nowhere.              ",
        "I hope there's people in this so-called Camp Sentakushi.              ",
        "..........I've been walking for a while now surly I'm close, starting to get tired.              ",
        "*Bear noise in the distance*              ",
        "Well, Ok not tired anymore, lets keep moving.              ",
        ".............*Sees a building in the distance*              ",
        "Finally a sign of human life.              ",
        "*Sees small billboard with a map on it* Looks like a map of the area.              ",
        "It's time to ask for some help and figure out just how and why im here?                       "
    ];
};
// Map
function map() {
    diningP.style.display = "none"
    barAud.pause();
    cabinsP.style.display = "none"
    cabinsAud.pause();
    fieldP.style.display = "none"
    fieldsAud.pause();
    amphitheaterP.style.display = "none"
    amphitheaterAud.pause();
    musicP.style.display = "none"
    musicAud.pause();
    lakeP.style.display = "none"
    lakeAud.pause();
    nuresP.style.display = "none"
    nuresAud.pause();
    libraryP.style.display = "none"
    libraryAud.pause();
    counselorP.style.display = "none"
    counselorAud.pause();
    woodsP.style.display = "none";
    gravelP.style.display = "none";
    gravelAud.pause();
    textlog.style.display = "block";
    display = mapP
    progressBar();
    mapAud.play();
    if (v == 8) {
        counselorDisplay.style.display = "block"
    }
    counselorDisplay.onclick = counselorO
}
// Dining hall
mapLocation[0].onclick = function diningH() {
    textlog.style.display = "none";
    tData = [];
    mapP.style.display = "none"
    diningP.style.display = "block";
    mapAud.pause();
    barAud.play();
    diningP.style.height = height.toString() + "px";
    t = 6;
    spkBox[t].innerText = names;
    returnToMap[0].onclick = map
    if (beenHereD == 1) {
        v++;

        text[t].innerHTML = "Looks like theres few people in the dining hall.";
            
        next[t].addEventListener("click",function() {
            contConv()
        });

        var conversations = [
            {con:"*You see a girl eating a sandwich by herself.*             ", sp:names},
            {con:"I'll ask her about this place.             ", sp:names},
            {con:"Hay can I ask you a question about this place right quick?             ", sp:names},
            {con:"You mean me, sure what do you want to know.             ",sp:"Saria"},
            {con:"And just to let you know, I don't really know that much either.             ",sp:"Saria"},
            {con:"This camp, where is the closest town or gas station?              ",sp:names},
            {con:"I don't know exactly but if I had to say around a ten-hour drive.             ",sp:"Saria"},
            {con:"And even then it's just a little convenient store with a gas station.             ",sp:"Saria"},
            {con:"*What, are you for real?* Ok, thanks for that it was really helpful.             ",sp:names},
            {con:"But wait?, how do you not know that we were all on the bus at the gas station earlier right?             ",sp:"Saria"},
            {con:"*I think it's best if I don't tell people I just spawed here.*             ",sp:names},
            {con:"*At least until I get more information about this place.*             ",sp:names},
            {con:"I fell asleep all the way here, so I missed it.             ",sp:names},
            {con:"...Well, if you say so, if you don't have anymore questions let me eat in peace please.             ",sp:"Saria"},
            {con:"Sure. *I should find someone else to talk to.*             ",sp:names}
        ]; 
        function contConv() {
            if(typeof disp != undefined) {
                if(index < conversations.length-1) { 
                    clearInterval(disp);
                    index+=1;
                    convIndex = 0;
                    nConv = conversations[index]["con"].split('');
                    tData.push(conversations[index]["con"]);
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
                    tData.forEach(function(el) {
                        let para = document.createElement("p");
                        para.id = "yellow";
                        para.innerHTML = conversations[index]["sp"] + ":" + el;
                        textlog.appendChild(para);
                    });
                    tData = [];
                } else {
                    spkBox[t].style.color = "#fff"
                    tData.forEach(function(el) {
                        let para = document.createElement("p");
                        para.id = "white";
                        para.innerHTML = conversations[index]["sp"] + ":" + el;
                        textlog.appendChild(para);
                    });
                    tData = [];

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
    textlog.style.display = "none";
    tData = [];
    mapP.style.display = "none"
    cabinsP.style.display = "block";
    mapAud.pause();
    cabinsP.style.height = height.toString() + "px";
    returnToMap[1].onclick = map
    cabinsAud.play();
    t = 7;
    spkBox[t].innerText = names;;
    if (beenHereC == 1) {
        v = 8; 
                
        text[t].innerHTML = "It's so strange, why am I dress like this?";
            
        next[t].addEventListener("click",function() {
            contConv()
        });

        var conversations = [
            {con:"This looks like the cabin area.                ", sp:names},
            {con:"Someone here may know something about this camp.                ", sp:names},
            {con:"Hay you over there, can you give me a hand with this!                ",sp:"Marquez"},
            {con:"Huh.., Sure let me get that side of the box.                ", sp:names},
            {con:"Thanks, I needed the help.                ",sp:"Marquez"},
            {con:"Names Marquez you?                ",sp:"Marquez"},
            {con:`${names}.          `,sp:names}, 
            {con:`Nice to meet you ${names}              .`,sp:"Marquez"},
            {con:"Same here.                ",sp:names},
            {con:"So what's in the box if you don't mind me asking?                ",sp:names},
            {con:"My console and some snacks I bought for this summer trip.                ",sp:"Marquez"}, 
            {con:"Ow ok,*Summer its the middle of winter, right?* so what is this camp purpose anyway do you know?                ",sp:names},
            {con:"Wait what, dude this camp is a place where all trouble makers go.                ",sp:"Marquez"},
            {con:"Or if your parents want nothing to do with you this summer.                ",sp:"Marquez"},
            {con:"You really didn't know that?                ",sp:"Marquez"},
            {con:"Well, I was kept in the dark about most of the stuff thats going on in this camp.                ",sp:names},
            {con:"...Annd there that should do it, Thanks for the talk but I should really be going.                ",sp:names},
            {con:"All right thanks see you around then.                ",sp:"Marquez"},
            {con:"*So this is a camp full of trouble makers huh?, Great just what I wanted to hear.*               ",sp:names}
        ]; 
        function contConv() {
            if(typeof disp != undefined) {
                if(index < conversations.length-1) { 
                    clearInterval(disp);
                    index+=1;
                    convIndex = 0;
                    nConv = conversations[index]["con"].split('');
                    tData.push(conversations[index]["con"]);
                    createIntervals();
                    text[t].innerHTML = "";
                    spkBox[t].innerHTML = conversations[index]["sp"];
                    if (conversations[index]["sp"] == "Marquez") {
                        spkBox[t].style.color = "cadetblue";
                        tData.forEach(function(el) {
                            let para = document.createElement("p");
                            para.id = "blue";
                            para.innerHTML = conversations[index]["sp"] + ":" + el;
                            textlog.appendChild(para);
                        });
                        tData = [];
                    } else {
                        spkBox[t].style.color = "#fff";
                        tData.forEach(function(el) {
                            let para = document.createElement("p");
                            para.id = "white";
                            para.innerHTML = conversations[index]["sp"] + ":" + el;
                            textlog.appendChild(para);
                        });
                        tData = [];
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
    textlog.style.display = "none";
    tData = [];
    mapP.style.display = "none"
    fieldP.style.display = "block"
    mapAud.pause();
    fieldsAud.play();
    fieldP.style.height = height.toString() + "px";
    t = 8;
    returnToMap[2].onclick = map;
    if (beenHereF == 1) {
        v++;
        spkBox[t].innerText = names;
                
        text[t].innerHTML = "Theres people playing soccor in the fields.";
            
        next[t].addEventListener("click",function() {
            contConv()
        });

        var conversations = [
            {con:"Maybe I should ask somewhere else.                   ", sp:names},
            {con:"The whole sports thing was never really my kind of thing to do.                   ", sp:names},  
            {con:"WATCH OUT!!                   ",sp:"Mike"},
            {con:"Wha...*You get hit in the face with a soccorball.*                   ", sp:names},   
            {con:"My bad, the ball went sideways are you ok, can you speak?                   ",sp:"Mike"}, 
            {con:"...Ya, I'm ok it was just a hit to the face.                   ",sp:names}, 
            {con:"Just let me sit down for a moment and I'll be fine.*Fuck this hurt*                   ",sp:names}, 
            {con:"Let me help you to the bench over there.                 ",sp:"Mike"}, 
            {con:"I'll get you something to drink just give me a minute.                   ",sp:"Mike"}, 
            {con:"*He runs away to get us some drinks*.............                   ",sp:names}, 
            {con:"Thanks for the drink man.                   ",sp:names}, 
            {con:"It's ok I was the one in the wrong, by the way names mike.                   ",sp:"Mike"},
            {con:`Cool i'm ${names}                  .`,sp:names},
            {con:"So why were you walking around you look lost?                   ",sp:"Mike"}, 
            {con:"Well im trying to get more information about this camp and I got lost.                   ",sp:names},
            {con:"If you're looking for someone with info then find the instructor over the camp.                   ",sp:"Mike"},
            {con:"The main office is somewhere around here just keep looking.                   ",sp:"Mike"},
            {con:"Ok thanks for the info, see you around.                   ",sp:names},
            {con:"*You sat there and watch the game as you recover, then you went your own way*                   ",sp:names},
        ]; 
        function contConv() {
            if(typeof disp != undefined) {
                if(index < conversations.length-1) { 
                    clearInterval(disp);
                    index+=1;
                    convIndex = 0;
                    nConv = conversations[index]["con"].split('');
                    tData.push(conversations[index]["con"]);
                    createIntervals();
                    text[t].innerHTML = "";
                    spkBox[t].innerHTML = conversations[index]["sp"];
                    if (conversations[index]["sp"] == "Mike") {
                        spkBox[t].style.color = "grey"
                        tData.forEach(function(el) {
                            let para = document.createElement("p");
                            para.id = "gray";
                            para.innerHTML = conversations[index]["sp"] + ":" + el;
                            textlog.appendChild(para);
                        });
                        tData = [];
                    } else {
                        spkBox[t].style.color = "#fff"
                        tData.forEach(function(el) {
                            let para = document.createElement("p");
                            para.id = "white";
                            para.innerHTML = conversations[index]["sp"] + ":" + el;
                            textlog.appendChild(para);
                        });
                        tData = [];
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
    textlog.style.display = "none";
    tData = [];
    mapP.style.display = "none"
    amphitheaterP.style.display = "block"
    mapAud.pause();
    amphitheaterAud.play();
    amphitheaterP.style.height = height.toString() + "px";
    t = 9;
    spkBox[t].innerText = names;;
    returnToMap[3].onclick = map
    if (beenHereA == 1) {
        v++;
        
        text[t].innerHTML = ".....Wow this is a big area, I think this is a stage area.";
            
        next[t].addEventListener("click",function() {
            contConv()
        });

        var conversations = [            
            {con:"It's called an amphitheater.                  ", sp:"Maria"},
            {con:"What the, where you came from?                  ", sp:names},
            {con:"You walked right pass me.                  ",sp:"Maria"},
            {con:"I did? *I'm sure she wasn't there.*                   ", sp:names},
            {con:"So why are you here?                  ", sp:"Maria"},
            {con:"Nobody's around so keep moving will ya, your interrupting my peace and quiet.                  ", sp:"Maria"},
            {con:"Well, you're here so that counts as somebody don't you think.                  ", sp:names},
            {con:"You know, people don't like a smart ass.                  ", sp:"Maria"},
            {con:"Says the smart ass.                  ", sp:names},
            {con:"So what do you want anyway, walking around looking like a headless chicken?                  ", sp:"Maria"},
            {con:"look, I'm just looking for some information about this place ok.                  ", sp:names},
            {con:"This is a place where you can get away from all your problems in your life.                  ", sp:"Maria"},
            {con:"*The way she said that* What....?                  ", sp:names},
            {con:"That's what the counselor who spoke to me said, anyway.                  ", sp:"Maria"},
            {con:"Now leave me be if you want to talk to someone go to the dining hall.                  ", sp:"Maria"},
            {con:"You'll probably see my sister Saria stuffing her face with food, ask her stuff.                  ", sp:"Maria"},
            {con:"Thanks, by the way what is even your name?                  ", sp:names},
            {con:"......Maria, yours?                  ",sp:"Maria"},
            {con:`${names}, see you around.          `,sp:names},
        ]; 
        function contConv() {
            if(typeof disp != undefined) {
                if(index < conversations.length-1) { 
                    clearInterval(disp);
                    index+=1;
                    convIndex = 0;
                    nConv = conversations[index]["con"].split('');
                    tData.push(conversations[index]["con"]);
                    createIntervals();
                    text[t].innerHTML = "";
                    spkBox[t].innerHTML = conversations[index]["sp"];
                    if (conversations[index]["sp"] == "Maria") {
                        spkBox[t].style.color = "red"
                        tData.forEach(function(el) {
                            let para = document.createElement("p");
                            para.id = "red";
                            para.innerHTML = conversations[index]["sp"] + ":" + el;
                            textlog.appendChild(para);
                        });
                        tData = [];
                    } else {
                        spkBox[t].style.color = "#fff"
                        tData.forEach(function(el) {
                            let para = document.createElement("p");
                            para.id = "white";
                            para.innerHTML = conversations[index]["sp"] + ":" + el;
                            textlog.appendChild(para);
                        });
                        tData = [];
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
    textlog.style.display = "none";
    tData = [];
    mapP.style.display = "none"
    musicP.style.display = "block"
    mapAud.pause();
    musicAud.play();
    musicP.style.height = height.toString() + "px";
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
            {con:"This music sounds very peaceful to listen to.                     ", sp:names}, 
            {con:"*You see, a girl playing the piano.*                     ", sp:names}, 
            {con:"..................                     ", sp:names}, 
            {con:"...You're not going to say anything just watch?                     ", sp:"Fiona"}, 
            {con:"Well, you were playing so well I didn't want to interrupt you.                     ", sp:names},   
            {con:"It's ok I can talk and still play.                     ", sp:"Fiona"},
            {con:"So what's up, you want to sit here and hear me play all day.                     ", sp:"Fiona"}, 
            {con:"Hahh No, I came in looking for help, do you know someone who can help me?                     ", sp:names}, 
            {con:"Well actually, I do she is right next to this building.                     ", sp:"Fiona"}, 
            {con:"She's a nurse over the camp her names Ms.Windy.                     ", sp:"Fiona"},
            {con:"Thanks, that helps a lot.                     ", sp:names}, 
            {con:"No problem, the names Fiona by the way.                     ",sp:"Fiona"}, 
            {con:"Well, I got to check on my bags before the day ends so.                     ", sp:"Fiona"},
            {con:`See you around ${names}.         `, sp:"Fiona"},
            {con:"See ya, ......hold on how she know my name?                     ", sp:names}
        ]; 
        function contConv() {
            if(typeof disp != undefined) {
                if(index < conversations.length-1) { 
                    clearInterval(disp);
                    index+=1;
                    convIndex = 0;
                    nConv = conversations[index]["con"].split('');
                    tData.push(conversations[index]["con"]);
                    createIntervals();
                    text[t].innerHTML = "";
                    spkBox[t].innerHTML = conversations[index]["sp"];
                    if (conversations[index]["sp"] == "Fiona") {
                        spkBox[t].style.color = "silver"
                        tData.forEach(function(el) {
                            let para = document.createElement("p");
                            para.id = "silver";
                            para.innerHTML = conversations[index]["sp"] + ":" + el;
                            textlog.appendChild(para);
                        });
                        tData = [];
                    } else {
                        spkBox[t].style.color = "#fff"
                        tData.forEach(function(el) {
                            let para = document.createElement("p");
                            para.id = "white";
                            para.innerHTML = conversations[index]["sp"] + ":" + el;
                            textlog.appendChild(para);
                        });
                        tData = [];
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
    textlog.style.display = "none";
    tData = [];
    mapP.style.display = "none"
    lakeP.style.display = "block"
    mapAud.pause();
    lakeAud.play();
    lakeP.style.height = height.toString() + "px";
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
            {con:"This place is amazeing to be honest.                   ", sp:names},
            {con:"People here are friendly enough to some degree.                   ", sp:names},
            {con:"Why am I here at this camp with nothing but the clothes on my back?                   ", sp:names},
            {con:"It feels like im in a whole different world or something.                   ", sp:names},
            {con:"Could this all be just a bad dream, but it feels real?                   ", sp:names},
            {con:"What if I can't go back home what will happen then?                   ", sp:names},
            {con:"*You take your socks and shoes off then put your feet in the water.*                   ", sp:names}, 
            {con:"This feels so nice when you take a breath in and relax.                   ", sp:names},
            {con:"............Do I really want to go back?                   ", sp:names},
            {con:"I mean it's too good to be true.                   ", sp:names},
            {con:".............I should really find out why I'm here at camp Sentakushi.                   ", sp:names},
            {con:"*Puts socks and shoes and walks off docks*                   ", sp:names},
            {con:"It's all up to me to make a choice in the end.                   ", sp:names}
        ]; 
        function contConv() {
            if(typeof disp != undefined) {
                if(index < conversations.length-1) { 
                    clearInterval(disp);
                    index+=1;
                    convIndex = 0;
                    nConv = conversations[index]["con"].split('');
                    tData.push(conversations[index]["con"]);
                    createIntervals();
                    text[t].innerHTML = "";
                    spkBox[t].innerHTML = conversations[index]["sp"];
                    tData.forEach(function(el) {
                        let para = document.createElement("p");
                        para.id = "white";
                        para.innerHTML = conversations[index]["sp"] + ":" + el;
                        textlog.appendChild(para);
                    });
                    tData = [];
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
    textlog.style.display = "none";
    tData = [];
    mapP.style.display = "none";
    nuresP.style.display = "block";
    mapAud.pause();
    nuresAud.play();
    nuresP.style.height = height.toString() + "px";
    t = 12;
    spkBox[t].innerText = names;
    returnToMap[6].onclick = map;
    if (beenHereN == 1) {
        v++;
                
        text[t].innerHTML = "Hello, is anyone here?";
            
        next[t].addEventListener("click",function() {
            contConv()
        });

        var conversations = [
            {con:"Looks like nobody's here.                  ", sp:names}, 
            {con:"Maybe I should just leave for now.                  ", sp:names}, 
            {con:"*Front door opens and close.*                  ", sp:names},  
            {con:"Hello, I saw someone walked in is everything ok.                  ", sp:"Ms.Windy"}, 
            {con:"Yes, everything is fine I just have some questions.                  ", sp:names},
            {con:"Sure have a seat why I give you a checkup.                  ", sp:"Ms.Windy"},
            {con:"All students have to get seen on the first day here.                  ", sp:"Ms.Windy"},
            {con:`Ok, but I think ${injury}            `,sp:names},
            {con:"Well lets see then, ask your question as I run some test.                  ", sp:"Ms.Windy"},
            {con:"Can you tell me who is over this camp and where I can find them?                  ", sp:names},
            {con:"He is usually walking around the camp grounds looking at the new campers.                  ", sp:"Ms.Windy"},
            {con:"So you can go looking around the camp if you want to see if you can find him.                  ", sp:"Ms.Windy"},
            {con:"But I recommend you just wait until he goes back to his office.                  ", sp:"Ms.Windy"},
            {con:"....Well im all done.                  ", sp:"Ms.Windy"},
            {con:"Thanks, I'll keep what you said in mind.                  ", sp:names},
            {con:"See you around then.                  ", sp:names},
            {con:"*This place is pretty big this might be difficult.*                  ", sp:names},
        ]; 
        function contConv() {
            if(typeof disp != undefined) {
                if(index < conversations.length-1) { 
                    clearInterval(disp);
                    index+=1;
                    convIndex = 0;
                    nConv = conversations[index]["con"].split('');
                    tData.push(conversations[index]["con"]);
                    createIntervals();
                    text[t].innerHTML = "";
                    spkBox[t].innerHTML = conversations[index]["sp"];
                    if (conversations[index]["sp"] == "Ms.Windy") {
                        spkBox[t].style.color = "purple"
                        tData.forEach(function(el) {
                            let para = document.createElement("p");
                            para.id = "purple";
                            para.innerHTML = conversations[index]["sp"] + ":" + el;
                            textlog.appendChild(para);
                        });
                        tData = [];
                    } else {
                        spkBox[t].style.color = "#fff"
                        tData.forEach(function(el) {
                            let para = document.createElement("p");
                            para.id = "white";
                            para.innerHTML = conversations[index]["sp"] + ":" + el;
                            textlog.appendChild(para);
                        });
                        tData = [];
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
    textlog.style.display = "none";
    tData = [];
    mapP.style.display = "none";
    libraryP.style.display = "block";
    mapAud.pause();
    libraryAud.play();
    libraryP.style.height = height.toString() + "px";
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
            {con:"I'm not complaining thow it's good for research, I guess.                        ", sp:names}, 
            {con:"It's probably some info on this camp, the history of this place along with a location too.                        ", sp:names}, 
            {con:"Now, lets see where are the archives located.                        ", sp:names},  
            {con:"You need help to look for a book.                        ", sp:"Hanna"}, 
            {con:"What?, do people just sneak up on anybody here?                        ", sp:names}, 
            {con:"Sorry, so what you want to know?                        ", sp:"Hanna"}, 
            {con:"Im over the library this summer so if you have any questions?                        ", sp:"Hanna"}, 
            {con:"Well, ya I have a few questions actually.                        ", sp:names}, 
            {con:"Like where is this camp located and how do you leave?                        ", sp:names}, 
            {con:"Lets see this camp is in the far countryside deep in the woods.                        ", sp:"Hanna"},
            {con:"The transportation is only a few vans with food for the week.                        ", sp:"Hanna"}, 
            {con:"All transportation is gone until next week according to the schedule.                        ", sp:"Hanna"}, 
            {con:"Wait, so there is no way to leave the camp?                        ", sp:names},
            {con:"Unless you enjoy walking?                        ", sp:"Hanna"},
            {con:"I appreciate the information, I'll probably come back um...                        ", sp:names},
            {con:"Hanna.                        ", sp:"Hanna"},
            {con:"Thanks, Hanna.                        ", sp:names}
        ]; 
        function contConv() {
            if(typeof disp != undefined) {
                if(index < conversations.length-1) { 
                    clearInterval(disp);
                    index+=1;
                    convIndex = 0;
                    nConv = conversations[index]["con"].split('');
                    tData.push(conversations[index]["con"]);
                    createIntervals();
                    text[t].innerHTML = "";
                    spkBox[t].innerHTML = conversations[index]["sp"];
                    if (conversations[index]["sp"] == "Hanna") {
                        spkBox[t].style.color = "green";
                        tData.forEach(function(el) {
                            let para = document.createElement("p");
                            para.id = "green";
                            para.innerHTML = conversations[index]["sp"] + ":" + el;
                            textlog.appendChild(para);
                        });
                        tData = [];
                    } else {
                        spkBox[t].style.color = "#fff";
                        tData.forEach(function(el) {
                            let para = document.createElement("p");
                            para.id = "white";
                            para.innerHTML = conversations[index]["sp"] + ":" + el;
                            textlog.appendChild(para);
                        });
                        tData = [];
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
    textlog.style.display = "none";
    tData = [];
    mapP.style.display = "none";
    counselorP.style.display = "block";
    mapAud.pause();
    counselorAud.play();
    counselorP.style.height = height.toString() + "px";
    v++;
    t = 14;
    spkBox[t].innerText = names;
            
    text[t].innerHTML = "So this is the head office, about time.";
        
    next[t].addEventListener("click",function() {
        contConv();
    });

    var conversations = [
        {con:"So, I hear you're looking for me.           ", sp:"Dean"}, 
        {con:"Are you the one over the camp?           ", sp:names}, 
        {con:`Why yes I am, and to get things out the way I know why you  are here ${names}.                   `, sp:"Dean"}, 
        {con:"How do you know my name?           ", sp:names}, 
        {con:"Lets take a seat on this bench and I'll explain.           ", sp:"Dean"}, 
        {con:"*You set on the bench.*..... Start talking.           ", sp:names},  
        {con:`${names} you were brought here for a reason, the same as everyone else.               `, sp:"Dean"}, 
        {con:"So everyone I met came here the same way I did?           ", sp:names}, 
        {con:"Yes and No, but none the less they are still here.           ", sp:"Dean"},
        {con:"I can't really tell you why you were brought here specifically.           ", sp:"Dean"}, 
        {con:"In the end its up to you to find that out, only thing I can do is watch.           ", sp:"Dean"}, 
        {con:"But, If you really want to go home, I can make that happen but let me ask you this.           ", sp:"Dean"},
        {con:"Why go back to nothing when you can stay here and find something?           ", sp:"Dean"}, 
        {con:`.............It's time to make a choice ${names}.                      `, sp:"Dean"},
        {con:"So it really is my choice huh, lets see.                ", sp:names}, 
    ]; 
    function contConv() {
        if(typeof disp != undefined) {
            if(index < conversations.length-1) { 
                clearInterval(disp);
                index+=1;
                convIndex = 0;
                nConv = conversations[index]["con"].split('');
                tData.push(conversations[index]["con"]);
                createIntervals();
                text[t].innerHTML = "";
                spkBox[t].innerHTML = conversations[index]["sp"];
                if (conversations[index]["sp"] == "Dean") {
                    spkBox[t].style.color = "brown"
                    tData.forEach(function(el) {
                        let para = document.createElement("p");
                        para.id = "brown";
                        para.innerHTML = conversations[index]["sp"] + ":" + el;
                        textlog.appendChild(para);
                    });
                    tData = [];
                } else {
                    spkBox[t].style.color = "#fff"
                    tData.forEach(function(el) {
                        let para = document.createElement("p");
                        para.id = "white";
                        para.innerHTML = conversations[index]["sp"] + ":" + el;
                        textlog.appendChild(para);
                    });
                    tData = [];
                }
            } else {
                console.log(choiceDisplay[11]);
                
                choiceDisplay[11].style.display = "block"
                textlog.style.display = "block";
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
    textlog.style.display = "none";
    tData = [];
    counselorP.style.display = "none";
    cabinRoomP.style.display = "block";
    counselorAud.pause();
    cabinRoomAud.play();
    cabinRoomP.style.height = height.toString() + "px";
    v++;
    t = 15;
    spkBox[t].innerText = names;
            
    text[t].innerHTML = "..........";
        
    next[t].addEventListener("click",function() {
        contConv();
    });

    var conversations = [
        {con:"In the end the choice was mine.                       ", sp:names},
        {con:"The choice to find something, the reason that brought me here.                       ", sp:names},
        {con:"It could all be a dream, but if its real.                       ", sp:names},
        {con:"This summer trip could be what I needed.                       ", sp:names},
        {con:"Im a whole different person in this place.                       ", sp:names},
        {con:"So in the end, im glad I made this choice.                       ", sp:names},
        {con:"Because, things in this world change faster then we tend to think.                       ", sp:names},
        {con:"So thats why I'm going to choose a path that leads to no regret.                       ", sp:names},
    ]; 
    function contConv() {
        if(typeof disp != undefined) {
            if(index < conversations.length-1) { 
                clearInterval(disp);
                index+=1;
                convIndex = 0;
                nConv = conversations[index]["con"].split('');
                tData.push(conversations[index]["con"]);
                createIntervals();
                text[t].innerHTML = "";
                spkBox[t].innerHTML = conversations[index]["sp"];
                tData.forEach(function(el) {
                    let para = document.createElement("p");
                    para.id = "white";
                    para.innerHTML = conversations[index]["sp"] + ":" + el;
                    textlog.appendChild(para);
                });
                tData = [];
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
    counselorP.style.display = "none";
    guestRoomP.style.display = "block";
    counselorAud.pause();
    guestroomAud.play();
    guestRoomP.style.height = height.toString() + "px";
    v++;
    t = 16;
    spkBox[t].innerText = names;
            
    text[t].innerHTML = "..........";
        
    next[t].addEventListener("click",function() {
        contConv();
    });

    var conversations = [
        {con:"In the end the choice was mine.                     ", sp:names},
        {con:"The choice to go back to nothing, whats the reason that brought me back.                     ", sp:names},
        {con:"To the same house I come home to everyday.                     ", sp:names},
        {con:"It's what I wanted right? Coming back here, home is home right?                     ", sp:names},
        {con:"But I wonder how nice it would have been to stay there.                     ", sp:names},
        {con:"That place showed so much color and joy.                     ", sp:names},
        {con:"And after I told all those people I met and said I'll see you around.                     ", sp:names},
        {con:"Looks like that will never happen.                     ", sp:names}
    ]; 
    function contConv() {
        if(typeof disp != undefined) {
            if(index < conversations.length-1) { 
                clearInterval(disp);
                index+=1;
                convIndex = 0;
                nConv = conversations[index]["con"].split('');
                tData.push(conversations[index]["con"]);
                createIntervals();
                text[t].innerHTML = "";
                spkBox[t].innerHTML = conversations[index]["sp"];
                tData.forEach(function(el) {
                    let para = document.createElement("p");
                    para.id = "white";
                    para.innerHTML = conversations[index]["sp"] + ":" + el;
                    textlog.appendChild(para);
                });
                tData = [];
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
    gameoverAud.play();
    busP.style.display = "none"
    gameHud.style.display = "block"
    ele4.setAttribute("id","name");
    gameHud.appendChild(ele);
    ele.appendChild(ele2);
    ele.appendChild(ele4);
    gameHud.style.background = "#000";
    gameHud.style.height = height.toString() + "px";
    ele2.style.color = "red";
    ele2.innerText = "Game Over"
    ele3.style.display = "none"
    ele4.innerText = "Restart"
    ele4.onclick = restart
};
// End
function Fin() {
    textlog.style.display = "block";
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
    textlog.style.display = "none";
    tData = [];
    textlog.innerHTML = tData;
    window.location.reload();
};