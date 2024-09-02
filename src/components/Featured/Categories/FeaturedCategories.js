import { useContext } from "react";
import { FeatureCategoryContext } from "../../../Context/FeaturedCategoryContext";
import CategoryCard from "../../Card/FeaturedCard/CategoryCard";
import './FeaturedCategories.css'
import useFetchItems from "../../../hooks/FetchItemsHook";

const Categories = () => {
    const featuredCategories = useContext(FeatureCategoryContext)
    const { data } = useFetchItems('/items/categories');
    // console.log('eeeeddd', data);

    return (
        <div className="featured__categories__container">
            <div className="featured__categories">
                <div className="featured__categories__header">
                    <h1 className='featured__header__big'>Категорії </h1>
                    <div className="featured__categories__header__line"></div>
                </div>
                <div className="featured__categories__card__container">
                    {/* {featuredCategories.map((category) => {
                        console.log('ddddddd', category);

                        return <CategoryCard key={category.id} data={category} />
                    }
                    )} */}

                    <CategoryCard key={'32323gregre2'} data={{ name: 'Пилососи', img: '/assets/aromat.jpg', url: '/fefsfsf' }} />
                    <CategoryCard key={'32323gre2'} data={{ name: 'Пилососи', img: '/assets/aromat.jpg', url: '/fefsfsf' }} />
                    <CategoryCard key={'323greg232'} data={{ name: 'Пилососи', img: '/assets/aromat.jpg', url: '/fefsfsf' }} />
                </div>
            </div>
        </div>
    );
}

export default Categories;