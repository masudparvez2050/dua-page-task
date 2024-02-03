export async function getDua() {
  const res = await fetch("http://localhost:3001/api/duas");
  const dua = await res.json();

  return {
    props: {
      dua,
    },
    revalidate: 60,
  };
}
