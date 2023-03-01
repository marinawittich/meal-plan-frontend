

import { AiOutlineEdit, AiOutlineDelete} from 'react-icons/ai';

export const MyMeals = ({ text, updatingInInput, deleteMeal }) => {
    return(
        <div className='getMeal'>
            <p>{text}</p>
            <AiOutlineEdit onClick={updatingInInput}></AiOutlineEdit>
            <AiOutlineDelete onClick={deleteMeal}></AiOutlineDelete>
        </div>
    )
}

