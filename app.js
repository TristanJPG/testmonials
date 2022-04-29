// JavaScript Document


const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
	{
		name : "Miyah Myles",
		position: "Marketing",
		photo: 'https://media.istockphoto.com/photos/positivity-puts-you-in-a-position-of-power-picture-id1299077582?b=1&k=20&m=1299077582&s=170667a&w=0&h=Esjqlg_WCWmTc83Dv6PLhwPFwYN9uXoclBn0cUhtS5I=',
		text: 'I love working hard! Work Work Work is me!',
	}, {
		name : "Veeti Seppanen",
		position: "Director",
		photo: 'https://images.unsplash.com/photo-1582233479366-6d38bc390a08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
		text: "I love directing films. I've worked on thousands of films and such.",
	}, { name : "Sasah Ho",
		position: "Programmer",
		photo: 'https://images.unsplash.com/photo-1578774296842-c45e472b3028?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
		text: "I know so many languages its crazy! I've worked on everything from pyton to nodeJS, ruby, etc...!!",
	},
	
]


let idx = 1;


function updateTestimonial() {
	const {name, position, photo, text} = testimonials[idx]
	testimonial.innerHTML = text
	username.innerHTML = name
	userImage.src = photo
	role.innerHTML = position
	idx++ 
	if (idx > testimonials.length - 1) {
		idx = 0
	}
}
setInterval(updateTestimonial, 10000)

