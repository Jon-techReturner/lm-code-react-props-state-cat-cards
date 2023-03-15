import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from 'react';
import Card from './components/card';
import Cat from './data/cat';
import Dog from './data/dog';
import { catData } from "./data/cat-data"
import { dogData } from './data/dog-data';
import { v4 as uuidv4 } from "uuid";
	
function App(): JSX.Element {
	catData.forEach((cat) => (cat.id = uuidv4()));
	dogData.forEach((dog) => (dog.id = uuidv4()));

	const [ cats, setCats ] = useState<Array<Cat>>(catData);
	const [ dogs, setDogs ] = useState<Array<Dog>>(dogData);
	const catCount = cats.length;
	const dogCount = dogs.length;

	const [name, setName] = useState<string>('');
    const [species, setSpecies] = useState<string>('');
    const [favFoods, setFavFood] = useState<Array<string>>([]);
    const [birthYear, setBirthYear] = useState<number>(0);
    const [typeAnimal, setTypeAnimal] = useState<string>("Cat");

    const addAnimal = () => {
        if (typeAnimal === "Cat") {
            const newCat: Cat = {
                name,
                species,
                favFoods,
                birthYear,
            };
            newCat.id = uuidv4();
            setCats(cats.concat([newCat]));
        } else {
            const newDog: Dog = {
                name,
                species,
                favFoods,
                birthYear,
            };
            newDog.id = uuidv4();
            setDogs(dogs.concat([newDog]));
        }

        clearForm();
    };

    const clearForm = () => {
        setName('');
        setSpecies('');
        setFavFood([]);
        setBirthYear(0);  
	};

	return (
		<>
			<Navbar />
			<Header catCount={catCount}
					dogCount = {dogCount} />

			<main>
				{/* <div className='form__wrapper'> */}
					<form className="form__content">
						<h3>You want to add your own love</h3>
						<div>
							<input type="radio" id="cat" onChange={(e) => setTypeAnimal(e.target.value)}
								name="type__animal"
								value="Cat"
								checked={typeAnimal === "Cat"}
							/>
							<label htmlFor="cat" className="card__label">Cat</label>
							<input type="radio" id="dog" onChange={(e) => setTypeAnimal(e.target.value)}
								name="type__animal"
								value="Dog"
								checked={typeAnimal === "Dog"}
							/>
							<label htmlFor="cat" className="card__label">Dog</label>
						</div>
						
						<div>
							<div>
							<label htmlFor="card__name" className="card__label">Name: </label>
							<input value={name} onChange={e => setName(e.target.value)} type="text" />
							</div>

							<div>
							<label htmlFor="card__species" className="card__label">Species: </label>
							<input value={species} onChange={e => setSpecies(e.target.value)} type="text" />
							</div>
							
							<div>
							<label htmlFor="card__favfoods" className="card__label">Favourite Food(s): </label>
							<input value={favFoods.join(', ')} onChange={e => setFavFood(e.target.value.split(","))} type="text" />
							</div>
							
							<div>
							<label htmlFor="card__birthYear" className="card__label">Birth Year: </label>
							<input value={birthYear > 0 ? birthYear.toString() : ''} onChange={e => setBirthYear(parseInt(e.target.value))} type="number" />
							</div>

						</div>
						<div>
						<button onClick={(e) => {e.preventDefault();
								addAnimal();
								}} className="button button--style">Add
							</button>
						</div>
						
					</form>
				{/* </div> */}

				<div className="cards__wrapper">
					{cats.map((cat, index) => (
						<Card 
							key={cat.id}
							name={cat.name}
							species={cat.species}
							favFoods={cat.favFoods}
							birthYear={cat.birthYear}
							cardIndex={index}
							typeAnimal="Cat"
						/>
					))}
					{dogs.map((dog, index) => (
						<Card 
							key={dog.id}
							name={dog.name}
							species={dog.species}
							favFoods={dog.favFoods}
							birthYear={dog.birthYear}
							cardIndex={index + cats.length}
							typeAnimal="Dog"
						/>
					))}
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App;
