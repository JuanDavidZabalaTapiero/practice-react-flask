// WHEN PAGE IS RENDERED
import { useEffect } from "react";

export default function Home() {
  // CHANGE TITLE
  useEffect(() => {
    document.title = "Inicio | Mi App";
  }, []);

  return <h1>Hola Mundo</h1>;
}
