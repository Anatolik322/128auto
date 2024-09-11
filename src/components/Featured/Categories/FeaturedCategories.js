
import CategoryCard from "../../Card/FeaturedCard/CategoryCard";
import './FeaturedCategories.css'
import useFetchItems from "../../../hooks/FetchItemsHook";
const Categories = () => {
    const { data } = useFetchItems('/items/categories');

    return (
        <div className="featured__categories__container">
            <div className="featured__categories">
                <div className="featured__categories__header">
                    <h2 className='featured__header__big'>Категорії</h2>
                    <div className="featured__categories__header__line"></div>
                </div>
                <div className="featured__categories__card__container">
                    <CategoryCard key={'32323gregre2'} data={{ name: 'Автопилососи', img: 'https://storage.npshopping.com/images/posts/669fbc58c92ab165176668.webp', url: '/category/vacuum' }} />
                    <CategoryCard key={'32323gre2'} data={{ name: 'Хімія для догляду', img: 'https://opt.lido.ua/uploads/cache/CatalogItems/CatalogItems8765/ed75368694-5_resize_1200x1200.jpeg', url: '/category/chemistry' }} />
                    <CategoryCard key={'323greg232'} data={{ name: 'Компресори', img: 'https://detto-palardo.com/wp-content/uploads/2024/02/img_0038-jpeg.webp', url: '/category/compressors' }} />
                </div>
            </div>
        </div>
    );
}

export default Categories;