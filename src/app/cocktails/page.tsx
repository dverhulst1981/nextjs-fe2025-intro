/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { slugit } from "@/helpers";
import { Metadata } from "next";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/cocktails" },
  description:
    "Overview of non-alcoholic cocktails. Overview of non-alcoholic cocktails. Overview of non-alcoholic cocktails. Overview of non-alcoholic cocktails. Overview of non-alcoholic cocktails. Overview of non-alcoholic cocktails. ",
  openGraph: {
    title: "Overview of non-alcoholic cocktails",
    description:
      "Overview of non-alcoholic cocktails. Overview of non-alcoholic cocktails. Overview of non-alcoholic cocktails. Overview of non-alcoholic cocktails. Overview of non-alcoholic cocktails. Overview of non-alcoholic cocktails. ",
    images: [
      {
        url: "/pitch.jpg",
      },
    ],
  },
};

type Cocktail = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};
const page = async () => {
  const resp = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
  );
  const data = await resp.json();
  return (
    <div className="cocktails">
      <h1>cocktails</h1>
      <ul>
        {data.drinks.map((drink: Cocktail) => (
          <li key={drink.idDrink}>
            <Link
              href={`/cocktails/${drink.idDrink}-${slugit(drink.strDrink)}`}
            >
              <div>
                <img src={drink.strDrinkThumb} alt="" />
              </div>
              <p>{drink.strDrink}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default page;
