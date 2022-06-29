/*
    Spelregels:

    De game set bevat 81 kaarten, iedere kaart is anders. De kaarten hebben verschillende 'attributen'.
    De attributen zijn als volgt:
        - De hoeveelheid symbolen op de kaart (1, 2 of 3 symbolen)
        - De inhoud van de symbool (leeg, gestreept of volledig ingekleurd)
        - De vorm van het symbool (ruit, ovaal, wiebel)
        - De kleur van het symbool (groen, paars of rood)

    De speler krijgt een punt als de speler een 'set' kaarten vind.
    Een 'set' bestaat uit 3 kaarten die:
        of:
            1 van de attributen (hoeveelheid, inhoud, vorm en kleur) komen overeen bij de 3 kaarten.

        of:
            Alle attributen van alle 3 de kaarten verschillen van elkaar.

    De game duurt [X] seconde. Als hierna geen set gevonden is. Krijgt de computer een punt.
    De eerste persoon die tot 5 punten komt, wint.

    Er zullen 3 moeilijkheids graden zijn.
        1. Easy
        2. Medium
        3. Hard
    Per moeilijkheidsgraad zal de 'timer' korter worden.
    Als de speler 5 keer gewonnen of verloren heeft zal de game stoppen.
    Als de speler gewonnen heeft zal er een 'leaderboard' punt toegevoegd worden aan zijn naam.
    Dit zal bijgehouden worden bij de 'highscores' aan de rechterkant van de webpagina
    */

/*
In de code zullen afkortingen gebruikt worden voor de verschillende attributen.
Deze zal zo opgebouwd zijn: (kleur, vorm, inhoud, hoeveelheid)
    hoeveelheid: 1, 2 of 3
    inhoud: E, S of F (Empty, Shaded of Filled)
    vorm: D, S of O (Diamond, Squiggle of Oval)
    kleur: G, P of R (Green, Purple of Red)
*/


//81 verschillende kaarten maken

const amount = [1, 2, 3];
const fill = [1, 2, 3];
const shape = [1, 2, 3];
const color = [1, 2, 3];

let stack = []; //maakt een lege array

amount.forEach((a) => { //Maakt 3 verschillende waardes (1, 2 en 3)
    fill.forEach((b) => {   //maakt 3 verschilllende waarden voor elke waarde van a
        shape.forEach((c) => {//maakt 3 verschillende waarden voor elke waarde van b
            color.forEach((d) => {//maakt 3 verschillende waarden voor elke waarde van c

                stack.push({    //pushed een array object in de array, met de waarden van a, b, c en d.
                    amount: a,
                    fill: b,
                    shape: c,
                    color: d
                })
            })
        })
    })
});


console.log(stack)
//einde kaarten stack




/*
To do:
    - Een menu maken die 3 checkboxes heeft voor de moeilijkheid, en een startknop. GEDAAN
    - Een function maken die 12 random kaarten showed in de HTML. GEDAAN
    - Een addEventListener maken die de clicks op de kaarten registreerd en die stored in een lege variabele. GEDAAN
    - Een function die aangeroepen wordt door de knop 'SET'. Deze kijkt of er een set gevonden is. GEDAAN
    - Een function die een punt bij de speler of computer opteld. BUSY
    - 3 timers, een voor easy mode, een voor medium mode en een voor hard mode. BUSY
    - Een refresh die na elke gevonden set plaatsvindt, waarschijnlijk door een reset van de elementen
    - Een kleurverandering van plaatjes als je ze geselecteerd hebt.
*/


//Plaatjes toevoegen aan het juiste object
{
    stack[0].img = new Image();
    stack[0].img.src = '../Plaatjes/greendiamondempty1.gif';

    stack[1].img = new Image();
    stack[1].img.src = '../Plaatjes/purplediamondempty1.gif';

    stack[2].img = new Image();
    stack[2].img.src = '../Plaatjes/reddiamondempty1.gif';

    stack[3].img = new Image();
    stack[3].img.src = '../Plaatjes/greensquiggleempty1.gif';

    stack[4].img = new Image();
    stack[4].img.src = '../Plaatjes/purplesquiggleempty1.gif';

    stack[5].img = new Image();
    stack[5].img.src = '../Plaatjes/redsquiggleempty1.gif';

    stack[6].img = new Image();
    stack[6].img.src = '../Plaatjes/greenovalempty1.gif';

    stack[7].img = new Image();
    stack[7].img.src = '../Plaatjes/purpleovalempty1.gif';

    stack[8].img = new Image();
    stack[8].img.src = '../Plaatjes/redovalempty1.gif';


    stack[9].img = new Image();
    stack[9].img.src = '../Plaatjes/greendiamondshaded1.gif';

    stack[10].img = new Image();
    stack[10].img.src = '../Plaatjes/purplediamondshaded1.gif';

    stack[11].img = new Image();
    stack[11].img.src = '../Plaatjes/reddiamondshaded1.gif';

    stack[12].img = new Image();
    stack[12].img.src = '../Plaatjes/greensquiggleshaded1.gif';

    stack[13].img = new Image();
    stack[13].img.src = '../Plaatjes/purplesquiggleshaded1.gif';

    stack[14].img = new Image();
    stack[14].img.src = '../Plaatjes/redsquiggleshaded1.gif';

    stack[15].img = new Image();
    stack[15].img.src = '../Plaatjes/greenovalshaded1.gif';

    stack[16].img = new Image();
    stack[16].img.src = '../Plaatjes/purpleovalshaded1.gif';

    stack[17].img = new Image();
    stack[17].img.src = '../Plaatjes/redovalshaded1.gif';


    stack[18].img = new Image();
    stack[18].img.src = '../Plaatjes/greendiamondfilled1.gif';

    stack[19].img = new Image();
    stack[19].img.src = '../Plaatjes/purplediamondfilled1.gif';

    stack[20].img = new Image();
    stack[20].img.src = '../Plaatjes/reddiamondfilled1.gif';

    stack[21].img = new Image();
    stack[21].img.src = '../Plaatjes/greensquigglefilled1.gif';

    stack[22].img = new Image();
    stack[22].img.src = '../Plaatjes/purplesquigglefilled1.gif';

    stack[23].img = new Image();
    stack[23].img.src = '../Plaatjes/redsquigglefilled1.gif';

    stack[24].img = new Image();
    stack[24].img.src = '../Plaatjes/greenovalfilled1.gif';

    stack[25].img = new Image();
    stack[25].img.src = '../Plaatjes/purpleovalfilled1.gif';

    stack[26].img = new Image();
    stack[26].img.src = '../Plaatjes/redovalfilled1.gif';


    stack[27].img = new Image();
    stack[27].img.src = '../Plaatjes/greendiamondempty2.gif';

    stack[28].img = new Image();
    stack[28].img.src = '../Plaatjes/purplediamondempty2.gif';

    stack[29].img = new Image();
    stack[29].img.src = '../Plaatjes/reddiamondempty2.gif';

    stack[30].img = new Image();
    stack[30].img.src = '../Plaatjes/greensquiggleempty2.gif';

    stack[31].img = new Image();
    stack[31].img.src = '../Plaatjes/purplesquiggleempty2.gif';

    stack[32].img = new Image();
    stack[32].img.src = '../Plaatjes/redsquiggleempty2.gif';

    stack[33].img = new Image();
    stack[33].img.src = '../Plaatjes/greenovalempty2.gif';

    stack[34].img = new Image();
    stack[34].img.src = '../Plaatjes/purpleovalempty2.gif';

    stack[35].img = new Image();
    stack[35].img.src = '../Plaatjes/redovalempty2.gif';


    stack[36].img = new Image();
    stack[36].img.src = '../Plaatjes/greendiamondshaded2.gif';

    stack[37].img = new Image();
    stack[37].img.src = '../Plaatjes/purplediamondshaded2.gif';

    stack[38].img = new Image();
    stack[38].img.src = '../Plaatjes/reddiamondshaded2.gif';

    stack[39].img = new Image();
    stack[39].img.src = '../Plaatjes/greensquiggleshaded2.gif';

    stack[40].img = new Image();
    stack[40].img.src = '../Plaatjes/purplesquiggleshaded2.gif';

    stack[41].img = new Image();
    stack[41].img.src = '../Plaatjes/redsquiggleshaded2.gif';

    stack[42].img = new Image();
    stack[42].img.src = '../Plaatjes/greenovalshaded2.gif';

    stack[43].img = new Image();
    stack[43].img.src = '../Plaatjes/purpleovalshaded2.gif';

    stack[44].img = new Image();
    stack[44].img.src = '../Plaatjes/redovalshaded2.gif';


    stack[45].img = new Image();
    stack[45].img.src = '../Plaatjes/greendiamondfilled2.gif';

    stack[46].img = new Image();
    stack[46].img.src = '../Plaatjes/purplediamondfilled2.gif';

    stack[47].img = new Image();
    stack[47].img.src = '../Plaatjes/reddiamondfilled2.gif';

    stack[48].img = new Image();
    stack[48].img.src = '../Plaatjes/greensquigglefilled2.gif';

    stack[49].img = new Image();
    stack[49].img.src = '../Plaatjes/purplesquigglefilled2.gif';

    stack[50].img = new Image();
    stack[50].img.src = '../Plaatjes/redsquigglefilled2.gif';

    stack[51].img = new Image();
    stack[51].img.src = '../Plaatjes/greenovalfilled2.gif';

    stack[52].img = new Image();
    stack[52].img.src = '../Plaatjes/purpleovalfilled2.gif';

    stack[53].img = new Image();
    stack[53].img.src = '../Plaatjes/redovalfilled2.gif';


    stack[54].img = new Image();
    stack[54].img.src = '../Plaatjes/greendiamondempty3.gif';

    stack[55].img = new Image();
    stack[55].img.src = '../Plaatjes/purplediamondempty3.gif';

    stack[56].img = new Image();
    stack[56].img.src = '../Plaatjes/reddiamondempty3.gif';

    stack[57].img = new Image();
    stack[57].img.src = '../Plaatjes/greensquiggleempty3.gif';

    stack[58].img = new Image();
    stack[58].img.src = '../Plaatjes/purplesquiggleempty3.gif';

    stack[59].img = new Image();
    stack[59].img.src = '../Plaatjes/redsquiggleempty3.gif';

    stack[60].img = new Image();
    stack[60].img.src = '../Plaatjes/greenovalempty3.gif';

    stack[61].img = new Image();
    stack[61].img.src = '../Plaatjes/purpleovalempty3.gif';

    stack[62].img = new Image();
    stack[62].img.src = '../Plaatjes/redovalempty3.gif';


    stack[63].img = new Image();
    stack[63].img.src = '../Plaatjes/greendiamondshaded3.gif';

    stack[64].img = new Image();
    stack[64].img.src = '../Plaatjes/purplediamondshaded3.gif';

    stack[65].img = new Image();
    stack[65].img.src = '../Plaatjes/reddiamondshaded3.gif';

    stack[66].img = new Image();
    stack[66].img.src = '../Plaatjes/greensquiggleshaded3.gif';

    stack[67].img = new Image();
    stack[67].img.src = '../Plaatjes/purplesquiggleshaded3.gif';

    stack[68].img = new Image();
    stack[68].img.src = '../Plaatjes/redsquiggleshaded3.gif';

    stack[69].img = new Image();
    stack[69].img.src = '../Plaatjes/greenovalshaded3.gif';

    stack[70].img = new Image();
    stack[70].img.src = '../Plaatjes/purpleovalshaded3.gif';

    stack[71].img = new Image();
    stack[71].img.src = '../Plaatjes/redovalshaded3.gif';


    stack[72].img = new Image();
    stack[72].img.src = '../Plaatjes/greendiamondfilled3.gif';

    stack[73].img = new Image();
    stack[73].img.src = '../Plaatjes/purplediamondfilled3.gif';

    stack[74].img = new Image();
    stack[74].img.src = '../Plaatjes/reddiamondfilled3.gif';

    stack[75].img = new Image();
    stack[75].img.src = '../Plaatjes/greensquigglefilled3.gif';

    stack[76].img = new Image();
    stack[76].img.src = '../Plaatjes/purplesquigglefilled3.gif';

    stack[77].img = new Image();
    stack[77].img.src = '../Plaatjes/redsquigglefilled3.gif';

    stack[78].img = new Image();
    stack[78].img.src = '../Plaatjes/greenovalfilled3.gif';

    stack[79].img = new Image();
    stack[79].img.src = '../Plaatjes/purpleovalfilled3.gif';

    stack[80].img = new Image();
    stack[80].img.src = '../Plaatjes/redovalfilled3.gif';
}
//einde plaatjes toevoegen aan het juiste object
//startmenu programmeren
//startknop programmeren


// let pointForWho = "";   //variable om te checken wie er een punt krijgt.
let timeOutTimer = ""; //Variable om te bepalen hoelang de TimeOut moet zijn op basis van de moeilijkheidsgraad
let scorePlayer = 0  //variabele voor score die maximaal 5 kan bereiken
let scoreComputer = 0 //variable voor score van computer, die ook maximaal 5 kan bereiken
document.getElementById('score').innerHTML += 'Je score is: '+scorePlayer;
document.getElementById('score').innerHTML += '<br>De computer zijn score is: '+scoreComputer;
let selectElem1 = 0 //variabele om door de verschillende 'clicks' heen te gaan.
let selectedId = []; //lege array om bij te houden welke kaart er al geklikt is
let amount1 = "";
let amount2 = ""; //lege variabelen voor de aangeklikte hoeveelheden symbolen op de kaart
let amount3 = "";

let fill1 = "";
let fill2 = ""; //lege variabelen voor de aangeklikte vulling van de symbolen op de kaart
let fill3 = "";

let shape1 = "";
let shape2 = ""; //lege variabelen voor de aangeklikte vorm van de symbolen op de kaart
let shape3 = "";

let color1 = "";
let color2 = ""; //lege variabelen voor de aangeklikte kleur van de symbolen op de kaart
let color3 = "";



gameMenuBuildUp();

let highScore = parseInt(getCookie("highScore"));


if(highScore === ""){
    setCookie("highScore", 0, 3000);
}
document.getElementById('score').innerHTML += '<br>Je hebt al '+highScore+" keer gewonnen";


let start = document.getElementById('startknop').addEventListener('click', startGame);
//  Array die gebruikt wordt voor een random number generator die elke keer een nummer exclude.
let numberArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80];
let DifficultySelectElem = document.getElementById('DifficultySelect');
let DifficultySelectedOption = DifficultySelectElem.options[DifficultySelectElem.selectedIndex].value;

function startGame() {
    DifficultySelectedOption = DifficultySelectElem.options[DifficultySelectElem.selectedIndex].value;
    console.log(DifficultySelectedOption);

    if((DifficultySelectedOption=='easy') || (DifficultySelectedOption=='medium') || (DifficultySelectedOption=='hard')){
        moeilijkheidsGraad(DifficultySelectedOption);

        //Verwijderd de menu opties
        document.getElementById('container').replaceChildren();

        //Maakt een nieuw element waar de game zich gaat afspelen
        let gameDiv = document.createElement('div');
        let gameClass = document.createAttribute('id');
        gameClass.value = 'game';
        gameDiv.setAttributeNode(gameClass);
        document.getElementById('container').appendChild(gameDiv);

        //maakt een titel voor de game
        let titleElem = document.createElement('div');
        let titleId = document.createAttribute('id');
        titleId.value = 'titel'
        titleElem.setAttributeNode(titleId);
        document.getElementById('container').appendChild(titleElem);

        //zorgt dat de kaarten van het spel toe worden gevoegd aan de 'game' div.
        //deze div wordt gemaakt nadat er op de startknop geklikt wordt.
        showCards();

        //maakt een knop om 3 extra kaarten toe te voegen.
        let extraThreeCards = document.createElement('div');
        let extraCardButId = document.createAttribute('id');
        extraCardButId.value = 'ExtraCardKnop';
        extraThreeCards.setAttributeNode(extraCardButId); // MOET NOG GEMAAKT WORDEN

        document.getElementById('score').appendChild(extraThreeCards);

        let titleText = ""; //lege variabele voor tekst die zo veranderd wordt door switch.

        switch(DifficultySelectedOption){
            case 'easy':
                titleText = document.createTextNode("Easy Mode");
                break;
            case 'medium':
                titleText = document.createTextNode("Medium Mode");
                break;
            case 'hard':
                titleText = document.createTextNode("Hard Mode")
                break;
        }

        //setTimeout(puntVoorComputer, timeOutTimer);
        titleElem.appendChild(titleText);
    }

    else if(DifficultySelectedOption=='select'){
        console.log('Kies een moeilijkheidsgraad')
    }
};
//Startmenu klaar.

//Speel elementen placeholders maken met matchend ID.
//Dit moet pas zichtbaar worden als er op de startknop geklikt wordt.
function showCards(){
    for(let kaart = 0; kaart<12; kaart++){
        let newCardElem = document.createElement('div');
        let cardElemId = document.createAttribute('id');
        cardElemId.value = "card"+kaart;
        newCardElem.setAttributeNode(cardElemId);
        document.getElementById('game').appendChild(newCardElem);

        let myNumber = getRandomWithOneExclusion();
        console.log(getRandomWithOneExclusion())
        let divElement = document.getElementById("card"+kaart);
        divElement.appendChild(stack[myNumber]['img']);
        divElement.addEventListener('click', () => myClick(myNumber, cardElemId.value, divElement));
    };
    if(scoreComputer<5) {
        moeilijkheidsGraad(DifficultySelectedOption); //Werkt niet, moet nog gefixed worden.
        setTimeout(puntVoorComputer, timeOutTimer);
    }
    //puntenSysteem();
}

function myClick(id, divId, divx) //haalt de waarde van index van desbetreffend plaatje op.
{
    if(selectedId.length < 4){
        if(selectElem1 === 0){
            console.log('1e keer');
            selectedId.push(divx);
            selectElem1++;
            document.getElementById(divId).style.border = '3px solid yellow';
            //waardesKaart1(id, divId);
            amount1 = parseInt(stack[id]['amount']);
            fill1 = parseInt(stack[id]['fill']);
            shape1 = parseInt(stack[id]['shape']);
            color1 = parseInt(stack[id]['color']);
            console.log(amount1)
        }
        if(!selectedId.includes(divx)){
            if(selectElem1 === 1){
                console.log('2e keer');
                selectedId.push(divx);
                selectElem1++;
                document.getElementById(divId).style.border = '3px solid yellow';
                amount2 = parseInt(stack[id]['amount']);
                fill2 = parseInt(stack[id]['fill']);
                shape2 = parseInt(stack[id]['shape']);
                color2 = parseInt(stack[id]['color']);
                console.log(amount2)
            }
            else if(selectElem1 === 2){
                console.log('3e keer');
                selectedId.push(divx);
                document.getElementById(divId).style.border = '3px solid yellow';
                amount3 = parseInt(stack[id]['amount']);
                fill3 = parseInt(stack[id]['fill']);
                shape3 = parseInt(stack[id]['shape']);
                color3 = parseInt(stack[id]['color']);
                console.log(amount3)
                checkAll();
                selectElem1 = 0;
                selectedId = [];

                return;
            }
        }
        else{
            return;
        }
    }
}

/*  function waardesKaart1(index, id){
      //index = myNumber, dus de gegenereerde waarde waarmee de kaart wordt opgeroepen
      //id = Het id van de div waarin de kaart staat
      console.log(index);
      console.log(id)

  }*/

//functie maken die de waarden van de hoeveelheden vergelijkt vergelijkt
function amountChecker(){
    if((amount1 + amount2 + amount3 === 3)||(amount1 + amount2 + amount3 === 6)||(amount1 + amount2 + amount3 === 9)){
        return(true);
    }
    else{
        return;
    }
}

//functie maken die de waarden van de invulling vergelijkt
function fillChecker(){
    if((fill1 + fill2 + fill3 === 3)||(fill1 + fill2 + fill3 === 6)||(fill1 + fill2 + fill3 === 9)){
        return(true);
    }
    else{
        return;
    }
}

//functie maken die de shape vergelijkt
function shapeChecker(){
    if((shape1 + shape2 + shape3 === 3)||(shape1 + shape2 + shape3 === 6)||(shape1 + shape2 + shape3 === 9)){
        return(true);
    }
    else{
        return;
    }
}

//functie maken die de kleur vergelijkt
function colorChecker(){
    if((color1 + color2 + color3 === 3)||(color1 + color2 + color3 === 6)||(color1 + color2 + color3 === 9)){
        return(true);
    }
}

//functie maken die alle waarden vergelijkt
function checkAll(){
    if(amountChecker() && fillChecker() && shapeChecker() && colorChecker()){
        alert('Goed gedaan, Je hebt een set gevonden!');
        document.getElementById('game').innerHTML = "";
        numberArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80];
        scorePlayer++
        showCards();
        document.getElementById('score').innerHTML = '';
        document.getElementById('score').innerHTML += 'Je score is: '+scorePlayer;
        document.getElementById('score').innerHTML += '<br>De computer zijn score is: '+scoreComputer;
        puntenSysteem();
        //moeilijkheidsGraad(DifficultySelectedOption);
        //console.log(DifficultySelectedOption);
        //setTimeout(puntVoorComputer(), timeOutTimer);
        return(true);
    }
    else{
        alert('Dat is helaas geen set');
        for(x=0; x<12; x++){
            document.getElementById('card'+x).style.border = "";
        }

        return;
    }
}


function puntenSysteem(){
    if(scorePlayer === 5) {
        alert('Goed gedaan, je hebt gewonnen');
        //Verwijderd de game menu, om terug te gaan naar het menu
        scorePlayer = 0;
        scoreComputer = 0;
        highScore++
        setCookie("highScore", highScore, 3000);

        document.getElementById('score').innerHTML = '';
        document.getElementById('score').innerHTML += 'Je score is: '+scorePlayer;
        document.getElementById('score').innerHTML += '<br>De computer zijn score is: '+scoreComputer;
        document.getElementById('container').replaceChildren();
        gameMenuBuildUp();
        document.location.reload();
    }
    else if(scoreComputer === 5){
        alert('Helaas je hebt verloren');
        //Verwijderd de game menu, om terug te gaan naar het menu
        scorePlayer = 0;
        scoreComputer = 0;
        document.getElementById('score').innerHTML = '';
        document.getElementById('score').innerHTML += 'Je score is: '+scorePlayer;
        document.getElementById('score').innerHTML += '<br>De computer zijn score is: '+scoreComputer;
        document.getElementById('container').replaceChildren();
        gameMenuBuildUp();
        document.location.reload();
    }
    else{
        return;
    }
}

//Functie om de computer een punt te geven. Hier moet een timeout functie op komen
//die veranderd op basis van welke gamemode er gekozen is.
function puntVoorComputer(){
    // puntenSysteem();
    // document.getElementById('game').innerHTML = "";
    // numberArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80];
    // showCards();
    // scoreComputer++;
    // document.getElementById('score').innerHTML = '';
    // document.getElementById('score').innerHTML += 'Je score is: '+scorePlayer;
    // document.getElementById('score').innerHTML += '<br>De computer zijn score is: '+scoreComputer;
    if(scoreComputer < 5){
        //console.log('Dit is de computerscore'+scoreComputer);
        document.getElementById('game').innerHTML = "";
        numberArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80];
        showCards();
        //moeilijkheidsGraad(DifficultySelectedOption);
        //console.log(DifficultySelectedOption);
        scoreComputer++;
        document.getElementById('score').innerHTML = '';
        document.getElementById('score').innerHTML += 'Je score is: '+scorePlayer;
        document.getElementById('score').innerHTML += '<br>De computer zijn score is: '+scoreComputer;
    }
    puntenSysteem();
    return(true);
}


//einde kaartplaceholders

//Random number generator die 12 keer een waarde tussen 0 en 80 geeft.
//De waarde kan hierbij niet 2 keer het zelfde zijn.
function getRandomWithOneExclusion() {
    let arrayLength = numberArray.length
    let randomNum = Math.floor(Math.random() * arrayLength);
    let waardeNummer = numberArray[randomNum]
    numberArray.splice(randomNum, 1);

    return (waardeNummer);
}

function gameMenuBuildUp(){
    //het maken van de startknop
    let newStartKnop = document.createElement('div');
    let newStartKnopId = document.createAttribute('id');
    newStartKnopId.value = 'startknop';
    newStartKnop.setAttributeNode(newStartKnopId);
    document.getElementById('container').appendChild(newStartKnop);

    //het maken van het p element in de startknop
    let newStartKnopText = document.createElement('p');
    newStartKnopText.innerHTML = 'Start';
    document.getElementById('startknop').appendChild(newStartKnopText);

    //het maken van de dropdown menu
    let newForm = document.createElement('form');
    let newFormName = document.createAttribute('name');
    newFormName.value = 'form';
    let newFormId = document.createAttribute('id');
    newFormId.value = 'form';
    newForm.setAttributeNode(newFormId);
    newForm.setAttributeNode(newFormName);
    document.getElementById('container').appendChild(newForm);

    //het maken van de select
    let newSelect = document.createElement('select');
    let newSelectName = document.createAttribute('name');
    newSelectName.value = 'DifficultySelect';
    let newSelectId = document.createAttribute('id');
    newSelectId.value = 'DifficultySelect';
    newSelect.setAttributeNode(newSelectName);
    newSelect.setAttributeNode(newSelectId);
    document.getElementById('form').appendChild(newSelect);

    //het maken van de opties
    //optie 1, selecteer een moeilijkheidsgraad
    let newDifficultySelect = document.createElement('option');
    let newDifficultySelectValue = document.createAttribute('value');
    newDifficultySelectValue.value = 'select';
    newDifficultySelect.setAttributeNode(newDifficultySelectValue);
    newDifficultySelect.innerHTML = 'Selecteer een moeilijkheidsgraad'
    document.getElementById('DifficultySelect').appendChild(newDifficultySelect);

    //optie 2, easy difficulty
    let newEasyDiff = document.createElement('option');
    let newEasyDiffValue = document.createAttribute('value');
    newEasyDiffValue.value = 'easy';
    newEasyDiff.setAttributeNode(newEasyDiffValue);
    newEasyDiff.innerHTML = 'Easy';
    document.getElementById('DifficultySelect').appendChild(newEasyDiff);

    //optie 3, medium difficulty
    let newMediumDiff = document.createElement('option');
    let newMediumDiffValue = document.createAttribute('value');
    newMediumDiffValue.value = 'medium';
    newMediumDiff.setAttributeNode(newMediumDiffValue);
    newMediumDiff.innerHTML = 'Medium';
    document.getElementById('DifficultySelect').appendChild(newMediumDiff);

    //optie 4, hard difficulty
    let newHardDiff = document.createElement('option');
    let newHardDiffValue = document.createAttribute('value');
    newHardDiffValue.value = 'hard';
    newHardDiff.setAttributeNode(newHardDiffValue);
    newHardDiff.innerHTML = 'Hard';
    document.getElementById('DifficultySelect').appendChild(newHardDiff);
}



//Maken van de moeilijkheidsgraad timers
function moeilijkheidsGraad(mode){
    if(mode=='easy'){
        timeOutTimer = 60000;
    }
    else if(mode=='medium'){
        timeOutTimer = 30000;
    }
    else if(mode=='hard'){
        timeOutTimer = 15000;
    }
    else{
        return;
    }
}



function setCookie(cname, cvalue, exdays) {
    const date = new Date();
    date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+date.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}



