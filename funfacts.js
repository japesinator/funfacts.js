var facts = [
    {data:{title:"Banging your head against a wall burns 150 calories an hour."}},
    {data:{title:"In the UK, it is illegal to eat mince pies on Christmas Day!"}},
    {data:{title:"Pteronophobia is the fear of being tickled by feathers!"}},
    {data:{title:"When hippos are upset, their sweat turns red."}},
    {data:{title:"A flock of crows is known as a murder."}},
];

var redditUrl = "https://www.reddit.com/r/funfacts/hot/.json?q=Fun%20Fact:";

var xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
        facts = JSON.parse(xmlHttp.responseText).data.children;
    }
}
xmlHttp.open("GET", redditUrl, true); // true for asynchronous
xmlHttp.send(null);

window.onerror = function(message, url, lineNumber) {
    fact = facts[Math.floor(Math.random() * facts.length)].data.title;
    try{
        fact = fact.replace('Fun Fact','');
    }
    catch (err){;}
    console.log(fact);
    return true;
};
