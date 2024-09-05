import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import useFetchItems from "../hooks/FetchItemsHook";
import ItemCard from "../components/Card/ItemCard/ItemCard";
import "../components/Featured/Items/FeaturedItems.css";
import { useEffect } from "react";
const CategoryView = () => {
  const param = useParams();
  const { data, isLoading } = useFetchItems(`/category/${param.id}`);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" min-vh-100 w-100 justify-content-center align-items-center m-auto pt-[120px]">
      {isLoading || !data ? (
        <ReactLoading
          type="cylon"
          color="#f28a0a"
          height={100}
          width={100}
          className="mx-auto mt-10 w-20"
        />
      ) : (
        <div>
          <div className="featured__products__headerd flex !flex-col justify-center items-center !my-10">
            <h3 className="featured__items__header__big py-3 text-[#fff]">
              {data && data[0] && data[0].categoryUkr}
            </h3>
            <div className="featured__products__header__line"></div>
          </div>
          <div className="flex flex-row gap-10 flex-wrap pb-10">
            {/* <FeaturedItems items={data} /> */}
            {data &&
              data?.map((item, id) => {
                return (
                  <ItemCard item={item} category={item.category} key={id} />
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryView;
