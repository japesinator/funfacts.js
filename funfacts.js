var facts = [
    {data:{title:"Banging your head against a wall burns 150 calories an hour."}},
    {data:{title:"In the UK, it is illegal to eat mince pies on Christmas Day!"}},
    {data:{title:"Pteronophobia is the fear of being tickled by feathers!"}},
    {data:{title:"When hippos are upset, their sweat turns red."}},
    {data:{title:"A flock of crows is known as a murder."}},
    {data:{title:"The “french” in french fries actually describes the way the spuds are sliced, not their country of origin."}},
    {data:{title:"Though dragonflies possess 6 legs like any other insect, they cannot walk."}},
    {data:{title:"The \"x\" in \"x-ray\" indicates an unknown quantity, much like it does in mathematics."}},
    {data:{title:"1% of Germany's population is genetically immune to HIV."}},
    {data:{title:"Every single spy Hitler thought he had in Britain during WWII was a double agent under British control."}},
    {data:{title:"If you went to mass every week, it would take you 4,825 years and 10 weeks to eat a whole Jesus."}},
    {data:{title:"Giraffes only need 5 to 30 minutes of sleep in a 24-hour period."}},
    {data:{title:"Weed is tight."}},
    {data:{title:"\"Dog food lid\" spelled backwards is \"Dildo of God\""}},
    {data:{title:"In 2009, snipers were deployed in Australia to protect a colony of little penguins from predators."}},
    {data:{title:"node.js is the one true dev language."}},
    {data:{title:"Octopuses have copper-based blood instead of iron-based blood, which is why their blood is blue rather than red."}},
    {data:{title:"The dinosaur noises in the \"Jurassic Park\" movie were made from recordings of tortoise sex."}},
    {data:{title:"There are approximately 3.04 trillion trees on earth."}},
    {data:{title:"Bananas have more trade regulations than AK-47s."}},
];

var redditUrl = "https://www.reddit.com/r/funfacts/hot/.json?q=Fun%20Fact:";

var xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function() {
    "use strict";
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200){
        facts = JSON.parse(xmlHttp.responseText).data.children;
    }
};
xmlHttp.open("GET", redditUrl, true); // true for asynchronous
xmlHttp.send(null);

window.onerror = function(message, url, lineNumber, col, error) {
    "use strict";
    var isFact = message.indexOf("Fun Fact:");
    if(isFact > -1){
        return false;
    }
    var fact = facts[Math.floor(Math.random() * facts.length)].data.title;

    error.message = fact;
    setTimeout(function(){throwError(error);},10);

    return true;
};












// This whitespace is very important

var throwError = function(error){
    "use strict";
    var out = error;
    if(!(out.message.indexOf("Fun Fact:") > -1)){
        out.message = "Fun Fact: " + out.message;
    }
    throw out;
};
