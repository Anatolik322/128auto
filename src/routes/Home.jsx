import { Fragment } from "react";
import Landing from "../components/Landing/Landing";
import FeaturedItems from "../components/Featured/Items/FetauredItems";
import FeaturedCategories from "../components/Featured/Categories/FeaturedCategories";
import { TabTitle } from "../utils/General";
import useFetchItems from "../hooks/FetchItemsHook";

const Home = () => {
  TabTitle("128auto");
  const { data } = useFetchItems("/homeitems");

  return (
    <Fragment>
      <Landing />
      <FeaturedCategories />
      <FeaturedItems items={data} title={"Популярні товари"} />
    </Fragment>
  );
};

export default Home;
