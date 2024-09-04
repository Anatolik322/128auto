
import CategoryCard from "../../Card/FeaturedCard/CategoryCard";
import './FeaturedCategories.css'
import useFetchItems from "../../../hooks/FetchItemsHook";
const Categories = () => {
    const { data } = useFetchItems('/items/categories');

    return (
        <div className="featured__categories__container">
            <div className="featured__categories">
                <div className="featured__categories__header">
                    <h1 className='featured__header__big'>Категорії</h1>
                    <div className="featured__categories__header__line"></div>
                </div>
                <div className="featured__categories__card__container">
                    <CategoryCard key={'32323gregre2'} data={{ name: 'Пилососи', img: 'asset/pylosos.jpg', url: '/category/car_vacuums' }} />
                    <CategoryCard key={'32323gre2'} data={{ name: 'Хімія для догляду', img: '/assets/aromat.jpg', url: '/category/care_chemicals' }} />
                    <CategoryCard key={'323greg232'} data={{ name: 'Обладнання', img: '/assets/aromat.jpg', url: '/category/vacuum_attachments' }} />
                </div>
            </div>
        </div>
    );
}

export default Categories;