import ItemCard from '../../Card/ItemCard/ItemCard';
import ReactLoading from 'react-loading';
import './FeaturedItems.css'

const FeaturedItems = (props) => {

    return (

        <div className="featured__products__container">
            <div className="featured__products">
                <div className="featured__categories__header">
                    <h1 className='featured__header__big'>{props.title ? props.title : props?.items && props?.items[0]?.categoryUkr}</h1>
                    <div className="featured__categories__header__line"></div>
                </div>
                <div className='d-flex min-vh-100 w-100 justify-content-center align-items-center m-auto'>
                    {!props.items ? <ReactLoading type="cylon" color='#f28a0a' height={100} width={100} className='m-auto' />
                        :
                        <div className="featured__products__card__container">
                            {
                                props.items.map((item, id) => {
                                    return <ItemCard item={item} category={item.category} key={id} />
                                })
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default FeaturedItems;