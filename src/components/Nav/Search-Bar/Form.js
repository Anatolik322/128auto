import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import api from '../../../hooks/AxiosInstans';
import debounce from 'lodash.debounce';
import './Form.css'
import ReactLoading from "react-loading";

const Form = () => {
    const [searchInput, setSearchInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    const debouncedFetchProducts = debounce(async (query) => {
        if (query.length > 2) {
            try {
                setIsLoading(true)
                const response = await api.get(`/search?name=${query}`);
                setSuggestions(response.data);
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching product suggestions:', error);
                setIsLoading(false)

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

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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
                onFocus={() => setIsOpen(true)}
                required
            />
            <button className="search__form__button" type='submit'>
                <SearchIcon fontSize='medium' />
            </button>

            {isOpen && (
                <div ref={dropdownRef} className="absolute w-full top-0">
                    {suggestions.length > 0 ? (
                        <ul className="absolute bg-white border border-gray-200 w-full mt-2 rounded-lg shadow-lg max-h-60 overflow-y-auto !z-[110] top-[36px] p-0">
                            {suggestions.map((suggestion) => (
                                <li
                                    key={suggestion.id}
                                    className="p-2 hover:bg-gray-100 cursor-pointer flex flex-row gap-4"
                                    onClick={() => handleSelectSuggestion(suggestion)}
                                >
                                    <img className='h-10' src={suggestion.images[0]} alt={suggestion.name} />
                                    <p>{suggestion.name}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <ul className="absolute bg-white border border-gray-200 w-full mt-2 rounded-lg shadow-lg max-h-60 overflow-y-auto !z-[110] top-[36px] p-0 h-16">
                            {
                                isLoading ? <ReactLoading
                                    type="cylon"
                                    color="#f28a0a"
                                    height={64}
                                    width={64}
                                    className="m-auto "
                                /> :
                                    <li className="p-2 hover:bg-gray-100 cursor-pointer flex flex-row gap-4 font-light mt-3">Товарів не знайдено</li>

                            }
                        </ul>
                    )}
                </div>
            )}
        </form>
    );
}

export default Form;
