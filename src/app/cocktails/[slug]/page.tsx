/* eslint-disable @next/next/no-img-element */
// generateMetadata
import { slugit } from "@/helpers";

//default behaviour = ongekende slug params ook zal verwerken
//export const dynamicParams = true;
export const revalidate = 86400;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resp = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +
      slug.split("-")[0]
  );
  const data = await resp.json();

  return {
    title: data.drinks[0].strDrink,
    description: data.drinks[0].strInstructions,
    alternates: {
      canonical: `/cocktails/${data.drinks[0].idDrink}-${slugit(
        data.drinks[0].strDrink
      )}`,
    },
    openGraph: {
      title: data.drinks[0].strDrink,
      description: data.drinks[0].strInstructions,
      images: [
        {
          url: data.drinks[0].strDrinkThumb,
        },
      ],
    },
  };
}

type Cocktail = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const resp = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +
      slug.split("-")[0]
  );
  const data = await resp.json();
  return (
    <div>
      <h1>{data.drinks[0].strDrink}</h1>
      <img src={data.drinks[0].strDrinkThumb} alt={data.drinks[0].strDrink} />
      <p>{data.drinks[0].strInstructions}</p>
    </div>
  );
};
export default Page;

export async function generateStaticParams() {
  const resp = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
  );
  const data = await resp.json();
  return data.drinks.map((drink: Cocktail) => ({
    slug: drink.idDrink + "-" + slugit(drink.strDrink),
  }));
}
