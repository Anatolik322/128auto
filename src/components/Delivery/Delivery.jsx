import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Delivery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-[100px] p-10">
      <section className=" text-[#fff] h-[500px]">
        <h2>Доставка та оплата</h2>

        <p>
          Доставка товарів здійснюється через службу Нова Пошта. Ми пропонуємо
          швидку та зручну доставку в будь-яке відділення Нової Пошти по всій
          території України. Під час оформлення замовлення ви можете вибрати
          найближче відділення або вказати адресу для кур'єрської доставки.
          Доставка зазвичай займає від одного до трьох робочих днів в залежності
          від вашого місцезнаходження.
        </p>

        <p>
          Оплата товару здійснюється при отриманні. Ви маєте можливість
          перевірити товар на відділенні Нової Пошти перш ніж оплатити його. Це
          дозволяє переконатися у якості та відповідності замовлення.
        </p>

        <p>
          Якщо у вас виникли питання, звертайтеся до нас через зручні для вас
          соціальні мережі. Ми завжди раді допомогти у Facebook, Instagram,
          Viber та Telegram.
        </p>

        <Link to="/">
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#f28a0a",
              margin: "0 auto",
              "&:hover": {
                backgroundColor: "rgba(242, 138, 10, 0.7)",
              },
            }}
          >
            На головну
          </Button>
        </Link>
      </section>
    </div>
  );
}

export default Delivery;
