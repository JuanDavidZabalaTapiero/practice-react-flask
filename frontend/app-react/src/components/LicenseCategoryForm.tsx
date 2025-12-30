import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { API_URL } from "../config/api";

type FormData = {
  name: string;
};

export default function LicenseCategoryForm() {
  // LOADING
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      // LOADING ...
      setLoading(true);

      const response = await fetch(`${API_URL}/license-categories/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // RESPONSE DATA
      let responseData;

      try {
        responseData = await response.json();
      } catch {
        responseData = null;
      }

      if (!response.ok) {
        toast.error(
          responseData.error || "Ocurrió un error. Por favor intenta más tarde",
        );
        return;
      }

      toast.success("Categoría registrada correctamente");

      // RESET FORM
      reset();
    } catch {
      toast.error("Ocurrió un error. Por favor intenta más tarde");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="card shadow-sm">
        <div className="card-body">
          <h1 className="h4 mb-4 text-center">Registrar Categoría</h1>

          {/* NOMBRE */}
          <div className="mb-3">
            <label className="form-label">Nombre</label>

            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              placeholder="Ej: A1, B1, C3"
              {...register("name", {
                required: "Completa este campo",
                minLength: {
                  value: 2,
                  message: "Mínimo 2 caracteres",
                },
              })}
              disabled={loading}
            />

            {errors.name && (
              <div className="invalid-feedback">{errors.name.message}</div>
            )}
          </div>

          {/* BOTÓN */}
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading && (
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                />
              )}
              {loading ? "Registrando..." : "Registrar"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
