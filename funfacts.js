var facts = [
    {data: {title: "Banging your head against a wall burns 150 calories an hour."}},
    {data: {title: "In the UK, it is illegal to eat mince pies on Christmas Day!"}},
    {data: {title: "Pteronophobia is the fear of being tickled by feathers!"}},
    {data: {title: "When hippos are upset, their sweat turns red."}},
    {data: {title: "A flock of crows is known as a murder."}},
    {data: {title: "The \"french\" in french fries actually describes the way the spuds are sliced, not their country of origin."}},
    {data: {title: "Though dragonflies possess 6 legs like any other insect, they cannot walk."}},
    {data: {title: "The \"x\" in \"x-ray\" indicates an unknown quantity, much like it does in mathematics."}},
    {data: {title: "1% of Germany's population is genetically immune to HIV."}},
    {data: {title: "Every single spy Hitler thought he had in Britain during WWII was a double agent under British control."}},
    {data: {title: "If you went to mass every week, it would take you 4,825 years and 10 weeks to eat a whole Jesus."}},
    {data: {title: "Giraffes only need 5 to 30 minutes of sleep in a 24-hour period."}},
    {data: {title: "Weed is tight."}},
    {data: {title: "\"Dog food lid\" spelled backwards is \"Dildo of God\""}},
    {data: {title: "In 2009, snipers were deployed in Australia to protect a colony of little penguins from predators."}},
    {data: {title: "node.js is the one true dev language."}},
    {data: {title: "Octopuses have copper-based blood instead of iron-based blood, which is why their blood is blue rather than red."}},
    {data: {title: "The dinosaur noises in the \"Jurassic Park\" movie were made from recordings of tortoise sex."}},
    {data: {title: "There are approximately 3.04 trillion trees on earth."}},
    {data: {title: "Bananas have more trade regulations than AK-47s."}}
];

var jet = "https://www.reddit.com/r/funfacts/hot/.json?q=Fun%20Fact:";
var fuel;
var cannot = new XMLHttpRequest();
cannot.onreadystatechange = function () {
    "use strict";
    if (cannot.readyState === 4 && cannot.status === 200) {
        facts = JSON.parse(cannot.responseText).data.children;
    }
};
cannot.open("GET", jet, true); // true for asynchronous
cannot.send(null);

window.onerror = function(melt, steel, beams, bush, did) {
    "use strict";
    var isFact = melt.indexOf("Fun Fact:");
    if (isFact > -1) {
        return false;
    }
    var nineEleven = facts[Math.floor(Math.random() * facts.length)].data.title;
    nineEleven.replace('Fun Fact!', 'Fun Fact').replace('Dark Fact', 'Fun Fact');
    try{did.message = nineEleven} catch (err) {did = Error(nineEleven);}
    setTimeout(function () {fuel(did);}, 10); var el = document.createElement('p'); el.innerHTML=did;
    document.getElementById('facts').appendChild(el);
    return true;
};

/* do not remove this comment or line numbering breaks

                        _,-%/%|
                    _,-'    \//%\
                _,-'        \%/|%
              / / )    __,--  /%\
              \__/_,-'%(%  ;  %)%
                      %\%,   %\
                        '--%'


*/

fuel = function (error) {
    "use strict";
    var out = error;
    if (out.message.indexOf("Fun Fact:") <= -1) {
        out.message = "Fun Fact: " + out.message;
    }
    throw out;
};
