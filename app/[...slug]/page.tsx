import ThisIsNotApage from "./page.client";

export default function SlugPage({
  params: { slug },
}: {
  params: { slug: string[] };
}) {
  return (
    <>
      <h1>Slug: {slug.join("/")}</h1>
      <ThisIsNotApage />
    </>
  );
}
