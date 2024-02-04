export async function getSubCategory() {
  // const res = await fetch("http://localhost:3001/api/sub_categories");
  const res = await fetch(
    "https://dua-api.masudur-rahman.xyz/api/sub_categories"
  );
  const subcategories = await res.json();

  return {
    props: {
      subcategories,
    },
    revalidate: 60,
  };
}
