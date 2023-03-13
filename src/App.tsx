import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from 'react';
import Cat from './data/cat';
import CatCard from './components/cat_card';
import catData from "./data/catData"
import { v4 as uuidv4 } from 'uuid';
import CatImage from './components/cat_image';

	
function App(): JSX.Element {
	
	const [ cats, setCats ] = useState<Array<Cat>>(catData);
	const catCount = cats.length;
	const images = CatImage;
	cats.forEach((cat, index) => {
		const id = uuidv4();
		cat.id = id;
		// images[index].id = id;
	});
	
	return (
		<>
			<Navbar />
			<Header catCount={catCount}/>

			<main>
				<div className="cards__wrapper">
					{cats.map((cat, index) => (
							<CatCard 
								key={index}
								catObject={cat}
								catIndex ={index}
							/>
					))}
				</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
