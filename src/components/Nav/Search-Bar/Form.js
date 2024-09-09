import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Form.css'

const Form = () => {
    const [searchInput, setSearchInput] = useState('')
    const navigate = useNavigate()

    const handelChange = (e) => {
        setSearchInput(e.target.value)
    }



    return (
        <form className="search__form" >
            <input type="text" placeholder='Search for products' className="search__form__input" value={searchInput} onChange={handelChange} required />
            <button className="search__form__button" type='submit'>
                <SearchIcon fontSize='medium' />
            </button>
        </form>
    );
}

export default Form;