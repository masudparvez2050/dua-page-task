export async function getSubCategory() {
  // const res = await fetch("http://localhost:3001/api/sub_categories");
  const res = await fetch(
    "https://dua-page-task.onrender.com/api/sub_categories"
  );
  const subcategories = await res.json();

  return {
    props: {
      subcategories,
    },
    revalidate: 60,
  };
}
