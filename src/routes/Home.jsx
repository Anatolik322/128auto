import { Fragment } from "react";
import Landing from "../components/Landing/Landing";
import FeaturedItems from "../components/Featured/Items/FetauredItems";
import FeaturedCategories from "../components/Featured/Categories/FeaturedCategories";
import { TabTitle } from "../utils/General";
import useFetchItems from "../hooks/FetchItemsHook";

const Home = () => {
	TabTitle("128auto - Автотовари");
	const { data } = useFetchItems("/homeitems");

	return (
		<Fragment>
			<h1 className=" text-transparent absolute">
				автохімія, автомобільні компресори,
				автопилососи, автомобільний пилосос,
				автотовари, аксесуари для авто, інструменти
				для авто, магазин автотоварів, купити
				автохімію, автомобільні аксесуари
			</h1>
			<h2 className=" text-transparent absolute">
				автохімічні засоби компресори для
				автомобілів пилососи для авто автомобільні
				чистячі пристрої товари для
				автопромисловості аксесуари для автомобілів
				інструменти для автосервісу магазин
				автозапчастин купити автохімічні засоби
				аксесуари для автомобільного ремонту
			</h2>
			<p className=" text-transparent absolute">
				Вітаємо у нашому магазині автотоварів, де ви
				знайдете широкий асортимент автохімії,
				компресорів для автомобілів, пилососів для
				авто та інших автомобільних аксесуарів. Ми
				пропонуємо високоякісні чистячі засоби,
				інструменти для автосервісу та товари для
				автопромисловості, які допоможуть вам
				підтримувати ваш автомобіль у відмінному
				стані. Купити автохімію та автомобільні
				аксесуари стало простіше – з нами ви зможете
				знайти все необхідне для догляду та ремонту
				вашого авто. Завітайте до нашого магазину
				автозапчастин та обирайте найкращі рішення
				для вашого автомобіля!
			</p>

			<Landing />
			<FeaturedCategories />
			<FeaturedItems
				items={data}
				title={"Популярні товари"}
			/>
		</Fragment>
	);
};

export default Home;
