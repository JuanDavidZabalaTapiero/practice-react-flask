import { useEffect } from "react";

export default function Home() {
  // CHANGE TITLE
  useEffect(() => {
    document.title = "Inicio | Mi App";
  }, []);

  return <h1 className="text-center">Bienvenido 👋</h1>;
}
