const cats = [
	{
		name: 'Kitty',
		age: 'age: 2',
		imageURL: 'https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg',
	},
	{
		name: 'Leo',
		age: 'age: 2 months',
		imageURL: 'https://cdn.freecodecamp.org/curriculum/css-photo-gallery/2.jpg',
	},
	{
		name: 'Oscar',
		age: 'age: 4',
		imageURL: 'https://cdn.freecodecamp.org/curriculum/css-photo-gallery/3.jpg',
	},
    {
		name: 'Cleo',
		age: 'age: 5',
		imageURL: 'https://cdn.freecodecamp.org/curriculum/css-photo-gallery/4.jpg',
	},
    {
		name: 'Bella',
		age: 'age: 1 month',
		imageURL: 'https://cdn.freecodecamp.org/curriculum/css-photo-gallery/5.jpg',
	},
    {
		name: 'Coco',
		age: 'age: 1 month',
		imageURL: 'https://cdn.freecodecamp.org/curriculum/css-photo-gallery/6.jpg',
	},
    {
		name: 'Thor',
		age: 'age: 15',
		imageURL: 'https://cdn.freecodecamp.org/curriculum/css-photo-gallery/7.jpg',
	},
    {
		name: 'Ursu',
		age: 'age: 11',
		imageURL: 'https://cdn.freecodecamp.org/curriculum/css-photo-gallery/8.jpg',
	},
    {
		name: 'Tommy',
		age: 'age: 10',
		imageURL: 'https://cdn.freecodecamp.org/curriculum/css-photo-gallery/9.jpg',
	},
    {
		name: 'Blu',
		age: 'age: 3 weeks',
		imageURL: 'https://cdn.freecodecamp.org/curriculum/css-photo-gallery/10.jpg',
	},
];

const catContainers = cats.map((cat) => `
   <div class='box'>
      <h4>${cat.name}</h4>
      <p>${cat.age}</p>
      <img src='${cat.imageURL}'>
   </div>
`
);

const container = document.querySelector('.container');
container.innerHTML = catContainers.join('');