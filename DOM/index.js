const container = document.querySelector('#container');
const redText = document.createElement('p')
redText.style.color = "red";
redText.textContent = "Hey I'm red!";
container.append(redText);

const blueText = document.createElement('p')
blueText.style.color = "blue";
blueText.textContent = "Hey I'm blue!";
container.append(blueText);


const blackDiv = document.createElement('div')
blackDiv.style.backgroundColor = "pink";
blackDiv.style.border = "2px black solid";

const head1 = document.createElement('h1')
head1.textContent = "I'm in a div";
blackDiv.append(head1);

const p1 = document.createElement('p')
p1.textContent = "Me too";
blackDiv.append(p1);

container.append(blackDiv);
