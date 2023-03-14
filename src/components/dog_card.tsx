import Dog from "../data/dog";

interface DogCardProps {
    dogObject: Dog;
    dogIndex: number;
}

const DogCard: React.FC<DogCardProps> = ({dogObject, dogIndex}) => {
    return (
        <div className='card'>
            <h3 className='card__text card__header'>{dogObject.name}</h3>
            <p className='card__text'>Species: {dogObject.species}</p>
            <p className='card__text'>Favourite Food(s): {dogObject.favFoods.join(", ")}</p>
            <p className='card__text'>Birth Year: {dogObject.birthYear}</p>

        </div>
    );
};

export default DogCard;