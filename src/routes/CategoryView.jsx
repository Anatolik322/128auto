import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import useFetchItems from "../hooks/FetchItemsHook";
import ItemCard from "../components/Card/ItemCard/ItemCard";
import "../components/Featured/Items/FeaturedItems.css";
import { useEffect } from "react";
import { TabTitle } from "../utils/General";

const CategoryView = () => {
  const param = useParams();
  const { data, isLoading } = useFetchItems(`/category/${param.id}`);
  TabTitle(`128auto - ${data && data[0] && data[0].categoryUkr}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);
  return (
    <div className=" min-vh-100 w-100 justify-content-center align-items-center m-auto pt-[80px]">
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
          <div className="featured__products__headerd flex !flex-col justify-center items-center !mb-10 !mt-6">
            <h2 className="featured__items__header__big py-3 text-[#fff]">
              {data && data[0] && data[0].categoryUkr}
            </h2>
            <div className="featured__products__header__line"></div>
          </div>
          <div className="flex flex-row gap-10 flex-wrap pb-10 justify-center">
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
