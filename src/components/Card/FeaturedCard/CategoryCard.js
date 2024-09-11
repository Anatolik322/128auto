import { Link } from 'react-router-dom';
import './CategoryCard.css'
import { Button } from '@mui/material';

const CategoryCard = (props) => {

    return (
        <div className="category__card__card">
            <img src={props.data.img} alt="фото категорії автотовару" className="product__img "
                title="фото катогорії автотовару"
                height="480"
                width="320"
                loading="eager" />
            <div className="category__card__detail">
                <div className="category__name">
                    <span className=' text-[#fff]'>{props.data.name}</span>
                </div>
                <div className="category__card__action">
                    <Link to={props.data.url}>
                        <Button variant='outlined' sx={[{ '&:hover': { backgroundColor: 'none', borderColor: '#fff', color: '#fff' }, borderRadius: '20px', marginBottom: '5px', backgroundColor: "#f28a0a", color: "#fff", fontWeight: '700' }]}>Перейти</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CategoryCard;