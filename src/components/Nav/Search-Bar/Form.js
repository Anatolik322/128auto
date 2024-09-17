import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../../../hooks/AxiosInstans';
import debounce from 'lodash.debounce';
import './Form.css'

const Form = () => {
    const [searchInput, setSearchInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();

    const debouncedFetchProducts = debounce(async (query) => {
        if (query.length > 2) {
            try {
                const response = await api.get(`/search?name=${query}`);
                setSuggestions(response.data);
            } catch (error) {
                console.error('Error fetching product suggestions:', error);
            }
        } else {
            setSuggestions([]);
        }
    }, 300);

    useEffect(() => {
        debouncedFetchProducts(searchInput);
        return () => {
            debouncedFetchProducts.cancel();
        };
    }, [searchInput]);

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    }

    const handleSelectSuggestion = (suggestion) => {
        setSearchInput('');
        setSuggestions([]);
        navigate(`/item/${suggestion._id}`);
    }

    return (
        <form className="search__form !w-[400px]" >
            <input
                type="text"
                placeholder='Пошук по продуктах'
                className="search__form__input !border-b-2"
                value={searchInput}
                onChange={handleChange}
                required
            />
            <button className="search__form__button" type='submit'>
                <SearchIcon fontSize='medium' />
            </button>

            {suggestions.length > 0 && (
                <ul className="absolute bg-white border border-gray-200 w-full mt-2 rounded-lg shadow-lg max-h-60 overflow-y-auto !z-[110] top-[36px] p-0">
                    {suggestions.map((suggestion) => (
                        <li
                            key={suggestion.id}
                            className="p-2 hover:bg-gray-100 cursor-pointer flex flex-row gap-4"
                            onClick={() => handleSelectSuggestion(suggestion)}
                        >
                            <img className='h-10' src={suggestion.images[0]} />
                            <p>{suggestion.name}</p>
                        </li>
                    ))}
                </ul>
            )}
        </form>
    );
}

export default Form;
