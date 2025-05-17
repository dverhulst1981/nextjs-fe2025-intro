import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "contact description. contact description. contact description.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact",
    description:
      "contact description. contact description. contact description.",
    images: [
      {
        url: "/pitch.jpg",
      },
    ],
  },
};

export const revalidate = 10;

const page = () => {
  return (
    <>
      <h1>Contact</h1>
      <h2>{new Date().toLocaleString()}</h2>
      <p>
        This is the contact page. This is the contact page. This is the contact
        page. This is the contact page. This is the contact page. This is the
        contact page. This is the contact page. This is the contact page. This
        is the contact page. This is the contact page. This is the contact page.
        This is the contact page. This is the contact page. This is the contact
        page. This is the contact page. This is the contact page. This is the
        contact page. This is the contact page. This is the contact page. This
        is the contact page.{" "}
      </p>
    </>
  );
};
export default page;
