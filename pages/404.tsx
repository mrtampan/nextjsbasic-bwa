import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div>
      <h1 className="title-not-found">Oopsss.....</h1>
      <h1 className="title-not-found">Halaman yang anda cari tidak ada</h1>
    </div>
  );
}
