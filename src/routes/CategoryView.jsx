import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import useFetchItems from "../hooks/FetchItemsHook";
import FeaturedItems from "../components/Featured/Items/FetauredItems";

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
  return (
    <div className="d-flex min-vh-100 w-100 justify-content-center align-items-center m-auto">
      {isLoading && (
        <ReactLoading
          type="balls"
          color="#f28a0a"
          height={100}
          width={100}
          className="m-auto"
        />
      )}
      <div>
        {/* {data &&
          data.map((item) => {
            return <FeaturedItems items={data}></FeaturedItems>;
          })} */}
        <FeaturedItems items={data} />
      </div>
    </div>
  );
};

export default CategoryView;
