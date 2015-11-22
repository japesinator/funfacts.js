var facts = ["Banging your head against a wall burns 150 calories an hour.", "In the UK, it is illegal to eat mince pies on Christmas Day!", "Pteronophobia is the fear of being tickled by feathers!", "When hippos are upset, their sweat turns red.", "A flock of crows is known as a murder."];

window.onerror = function(message, url, lineNumber) {
  console.log(facts[Math.floor(Math.random() * facts.length)]);
  return true;
};
