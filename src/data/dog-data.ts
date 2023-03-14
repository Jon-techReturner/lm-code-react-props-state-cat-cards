import Dog from './dog';
import { v4 as uuidv4 } from 'uuid';

const dogsData: Array<Dog> = [
	{
		name: 'Floofus',
		species: 'Puppy',
		favFoods: ['marshmallows'],
		birthYear: 2020,
	},
	{
		name: 'Doofus',
		species: 'Doggo',
		favFoods: ['porridge, dog food'],
		birthYear: 2010,
	},
	{
		name: 'Goofus',
		species: 'Dog',
		favFoods: ['bouncy balls'],
		birthYear: 2018,
	},
	{
		name: 'Loofus',
		species: 'Doggo',
		favFoods: ['porridge, dog food'],
		birthYear: 2010,
	},
	{
		name: 'Koofus',
		species: 'Dog',
		favFoods: ['bouncy balls'],
		birthYear: 2015,
	},
	{
		name: 'Poofus',
		species: 'Doggo',
		favFoods: ['porridge, dog food'],
		birthYear: 2011,
	},
];
	dogsData.forEach(dog => dog.id = uuidv4());
	console.log(dogsData); 

export default dogsData;
