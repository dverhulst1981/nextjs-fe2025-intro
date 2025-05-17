import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Home content. Home content. Home content. Home content. Home content. Home content. ",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Home",
    description:
      "Home content. Home content. Home content. Home content. Home content. Home content. Home content. Home content. ",
    images: [
      {
        url: "/pitch.jpg",
      },
    ],
  },
};

const page = () => {
  return (
    <>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
        laudantium eos recusandae, optio pariatur necessitatibus provident eum
        nemo libero, similique tempora ea voluptate eligendi voluptatibus?
        Labore reprehenderit, aliquam debitis quam ratione unde accusantium
        dolorum voluptates odio vero, nisi harum nulla, culpa saepe est?
        Aspernatur soluta nulla est. Sed, fugit est. Beatae dolor labore iste
        consectetur voluptas autem, tenetur vero corporis eaque voluptatum
        aperiam et cumque perspiciatis molestias sed hic ab quia quam amet iusto
        sequi corrupti debitis. Eius reiciendis ad, voluptatibus fugit facere
        praesentium! Accusamus modi, ab porro odio quidem labore iusto quis
        nobis ipsa nemo. Laboriosam natus dignissimos nihil dolores quae? Sint
        laudantium molestias adipisci eaque. Commodi rem aspernatur recusandae,
        optio excepturi possimus culpa consectetur blanditiis vitae distinctio
        quia sint ad, nam ut, mollitia ipsa eius quod ea? Veniam distinctio sed
        eligendi quae, ipsum natus ea reprehenderit optio neque velit sapiente
        voluptates quos nihil porro mollitia ab dignissimos, illum ducimus nisi
        fugiat quod facilis debitis? Tenetur reprehenderit nostrum consequuntur
        debitis asperiores nemo, iusto quasi vero dolores architecto dolorum
        voluptates natus nam, corporis nihil cum. Odit quo aut accusantium neque
        suscipit commodi nihil velit quos, temporibus explicabo cum vitae
        distinctio qui consectetur voluptatibus in eveniet laborum? Cumque ab
        iste quo.
      </p>
    </>
  );
};
export default page;
