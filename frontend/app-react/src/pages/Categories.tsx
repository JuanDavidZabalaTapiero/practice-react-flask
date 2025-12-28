// WHEN PAGE IS RENDERED
import { useEffect } from "react";

// COMPONENT
import LicenseCategoryForm from "../components/LicenseCategoryForm";

export default function Categories() {
  // CHANGE TITLE
  useEffect(() => {
    document.title = "Categorías | Mi App";
  }, []);

  return <LicenseCategoryForm />;
}
