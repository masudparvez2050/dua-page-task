export async function getDua() {
  // const res = await fetch("http://localhost:3001/api/duas");
  const res = await fetch("https://dua-api.masudur-rahman.xyz/api/duas");
  const dua = await res.json();

  return {
    props: {
      dua,
    },
    revalidate: 60,
  };
}
