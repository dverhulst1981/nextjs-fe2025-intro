import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About page",
  description:
    "About content. About content. About content. About content. About content. About content. About content. About content. ",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About page",
    description:
      "About content. About content. About content. About content. About content. About content. About content. About content. About content. ",
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
      <h1>About</h1>
      <p>
        This is the about page. This is the about page. This is the about page.
        This is the about page. This is the about page. This is the about page.
        This is the about page. This is the about page. This is the about page.
        This is the about page. This is the about page. This is the about page.
        This is the about page. This is the about page. This is the about page.
        This is the about page. This is the about page. This is the about page.
        This is the about page. This is the about page. This is the about page.{" "}
      </p>
    </>
  );
};
export default page;
