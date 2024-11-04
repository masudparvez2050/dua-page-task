export async function getCategory() {
  // const res = await fetch("http://localhost:3001/api/categories");
  const res = await fetch("https://dua-page-task.onrender.com/api/categories");
  const categories = await res.json();

  return {
    props: {
      categories,
    },
    revalidate: 60,
  };
}
