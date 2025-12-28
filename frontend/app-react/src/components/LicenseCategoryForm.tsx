// REACT IMPORTS
import { useState } from "react";
// API URL
import { API_URL } from "../config/api";

export default function LicenseCategoryForm() {
  // MESSAGES
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // == FORM ==

  // INPUTS
  const [name, setName] = useState("");

  // LOADING (WHEN SUBMITING)
  const [loading, setLoading] = useState(false);

  // SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {
    // STOP SUBMIT
    e.preventDefault();

    // CLEAN MESSAGES
    setError("");
    setSuccess("");

    // VALIDATION
    if (!name.trim()) {
      setError("El nombre es obligatorio");
      return;
    }

    // FETCH API
    try {
      // LOADING ...
      setLoading(true);

      const response = await fetch(`${API_URL}/api/v1/license-categories/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      // DATA
      const data = await response.json();

      // RESPONSE: ERROR
      if (!response.ok) {
        setError(data.error);
        return;
      }

      // RESPONSE: OK
      setSuccess("Categoría registrada correctamente");

      // CLEAN INPUTS
      setName("");
    } catch {
      setError(
        "Error de conexión con el servidor. Por favor intente más tarde",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6 col-lg-5">
        <div className="card shadow-sm">
          <div className="card-body">
            <h4 className="card-title mb-4 text-center">Registrar Categoría</h4>

            {/* SUCCESS */}
            {success && <div className="alert alert-success">{success}</div>}

            {/* ERROR */}
            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ej: A1, B1, C3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={loading}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={loading}
              >
                {loading ? "Registrando..." : "Registrar"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
