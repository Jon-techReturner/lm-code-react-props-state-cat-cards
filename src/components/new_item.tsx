import { useState } from "react";
import Cat from '../data/cat';
import Dog from '../data/dog';
import { v4 as uuidv4 } from 'uuid';

export const Form = () => {
    const [nameInputValue, setNameInputValue] = useState('');
    const [speciesInputValue, setSpeciesInputValue] = useState('');
    const [favFoodInputValue, setfavFoodInputValue] = useState('');
    const [birthYearInputValue, setbirthYearInputValue] = useState('');


       
         return (
            <form className="form__content">
                <div><label htmlFor="card__name" className="card__label">Cat/Dog name: </label></div>
                <div><input id="card__name" value={nameInputValue} onChange={e => setNameInputValue(e.target.value)} type="text" /></div>
                <div><label htmlFor="card__species" className="card__label">Species: </label></div>
                <div><input id="card__species" value={speciesInputValue} onChange={e => setSpeciesInputValue(e.target.value)} type="text" /></div>
                <div><label htmlFor="card__favfoods" className="card__label">Favourite Food(s): </label></div>
                <div><input id="card__favfoods" value={favFoodInputValue} onChange={e => setfavFoodInputValue(e.target.value)} type="text" /></div>
                <div><label htmlFor="card__birthYear" className="card__label">Birth Year: </label></div>
                <div><input id="card__birthYear" value={birthYearInputValue} onChange={e => setbirthYearInputValue(e.target.value)} type="number" /></div>
                <input type="submit" />
            </form>
         )
}