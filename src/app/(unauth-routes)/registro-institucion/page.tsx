export default function RegistroInstitucion() {
  return (
    <div className="min-h-screen bg-base-200 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h1 className="card-title text-3xl font-bold mb-6">
              Registro de Institución
            </h1>

            <form className="space-y-6">
              {/* Nombre Institución */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Nombre Institución <span className="text-error">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Ingrese el nombre de la institución"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* CCT */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Clave de Centro de Trabajo (CCT)
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Ingrese la CCT"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Email <span className="text-error">*</span>
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="ejemplo@institucion.edu.mx"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Teléfono */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Teléfono <span className="text-error">*</span>
                  </span>
                </label>
                <input
                  type="tel"
                  placeholder="55 1234 5678"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Dirección */}
              <div className="divider">Dirección</div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Calle</span>
                </label>
                <input
                  type="text"
                  placeholder="Ingrese la calle"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Colonia</span>
                </label>
                <input
                  type="text"
                  placeholder="Ingrese la colonia"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Municipio</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ingrese el municipio"
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Estado</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ingrese el estado"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Código Postal</span>
                </label>
                <input
                  type="text"
                  placeholder="00000"
                  className="input input-bordered w-full"
                  maxLength={5}
                />
              </div>

              {/* Botones */}
              <div className="card-actions justify-end mt-8">
                <button type="button" className="btn btn-ghost">
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  Registrar Institución
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
