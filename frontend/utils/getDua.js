export async function getDua() {
  // const res = await fetch("http://localhost:3001/api/duas");
  const res = await fetch("https://dua-page-task.onrender.com/api/duas");
  const dua = await res.json();

  return {
    props: {
      dua,
    },
    revalidate: 60,
  };
}
