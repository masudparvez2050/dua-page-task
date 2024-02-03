export async function getSubCategory() {
  const res = await fetch("http://localhost:3001/api/sub_categories");
  const subcategories = await res.json();

  return {
    props: {
      subcategories,
    },
    revalidate: 60,
  };
}
