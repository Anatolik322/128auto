import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import useFetchItems from "../hooks/FetchItemsHook";
import FeaturedItems from "../components/Featured/Items/FetauredItems";
import ItemCard from "../components/Card/ItemCard/ItemCard";

const CategoryView = () => {
  const param = useParams();
  console.log("param", param);
  const [menItems, setMenItems] = useState();
  const [womenItems, setWomenItems] = useState();
  const [kidsItems, setKidsItems] = useState();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //     axios.get("https://shema-backend.vercel.app/api/items")
  //         .then(res => {
  //             setMenItems(res.data.filter((item) => item.category === "men"))
  //             setKidsItems(res.data.filter((item) => item.category === "kids" ))
  //             setWomenItems(res.data.filter((item) => item.category === "women"))
  //             setLoading(false)
  //         })
  //         .catch(err => console.log(err))

  //     window.scrollTo(0, 0)
  // }, [param.id])
  const { data, isLoading } = useFetchItems(`/category/${param.id}`);
  data && console.log(data, "dwada");

  return (
    <div className=" min-vh-100 w-100 justify-content-center align-items-center m-auto">
      {isLoading && (
        <ReactLoading
          type="balls"
          color="#f28a0a"
          height={100}
          width={100}
          className="m-auto"
        />
      )}
      <div className="featured__products__headerd flex !flex-col justify-center items-center !my-10">
        <h3 className="featured__items__header__big  py-3">
          {data && data[0] && data[0].categoryUkr}
        </h3>
        <div className="featured__products__header__line"></div>
      </div>
      <div className="flex flex-row gap-10 flex-wrap pb-10">
        {/* <FeaturedItems items={data} /> */}
        {data &&
          data?.map((item, id) => {
            return <ItemCard item={item} category={item.category} key={id} />;
          })}
      </div>
    </div>
  );
};

export default CategoryView;
