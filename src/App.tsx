import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from 'react';
import Cat from './data/cat';
import CatCard from './components/cat_card';
import catData from "./data/catData"
import DogCard from './components/dog_card';
import dogsData from './data/dog-data';
import Dog from './data/dog';
import { Form } from './components/new_item';

	
function App(): JSX.Element {
	
	const [ cats, setCats ] = useState<Array<Cat>>(catData);
	const catCount = cats.length;
	const [ dogs, setDogs ] = useState<Array<Dog>>(dogsData);
	const dogCount = dogs.length;
	
	return (
		<>
			<Navbar />
			<Header catCount={catCount}
					dogCount = {dogCount} />

			<main>
				<div className="cards__wrapper">
					{cats.map((cat, index) => (
							<CatCard 
								key={index}
								catObject={cat}
								catIndex ={index}
							/>
					))}
					{dogs.map((dog, index) => (
							<DogCard 
								key={index}
								dogObject={dog}
								dogIndex ={index}
							/>
					))}
				</div>
				<div className='form__wrapper'>
					<Form />
				</div>
				
			</main>

			<Footer />
		</>
	);
}

export default App;
