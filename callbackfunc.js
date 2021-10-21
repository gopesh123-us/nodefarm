const button = document.querySelector('button');

const toggle = (name) => {
	button.classList.toggle('alt-color');
	console.log(name);
};

button.addEventListener('click', () => toggle('Gopesh Sharma'));
