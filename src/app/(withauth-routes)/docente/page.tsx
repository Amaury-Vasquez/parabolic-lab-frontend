"use client";

export default function DocentePage() {
  const salones = [
    {
      nombre: "Física 3° A",
      codigo: "KJ-4T9",
      escenario: "Movimiento Parabólico",
      estudiantes: 28,
    },
    {
      nombre: "Física 3° B",
      codigo: "PL-8K2",
      escenario: "Fuerzas y Aceleración",
      estudiantes: 25,
    },
    {
      nombre: "Física Avanzada",
      codigo: "FZ-9M3",
      escenario: "Energía Cinética",
      estudiantes: 18,
    },
    {
      nombre: "Física 2° C",
      codigo: "QW-7R5",
      escenario: null,
      estudiantes: 22,
    },
  ];

  return (
    <div className="p-8">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold">Mis Salones</h1>
          <p className="text-base-content/70 mt-1">
            Gestiona tus salones, asigna escenarios y monitorea el progreso
          </p>
        </div>
        <button className="btn btn-primary">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Crear Nuevo Salón
        </button>
      </div>

      {/* Salones Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {salones.map((salon, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              {/* Card Header with Settings */}
              <div className="flex justify-between items-start">
                <h2 className="card-title">{salon.nombre}</h2>
                <div className="dropdown dropdown-end">
                  <button tabIndex={0} className="btn btn-ghost btn-sm btn-square">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Access Code */}
              <div className="bg-base-200 p-4 rounded-lg mt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs opacity-60 uppercase mb-1">
                      Código de acceso:
                    </p>
                    <p className="font-mono font-bold text-lg">{salon.codigo}</p>
                  </div>
                  <button className="btn btn-ghost btn-sm btn-square">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Assigned Scenario */}
              <div className="mt-4">
                <p className="text-xs opacity-60 uppercase mb-2">
                  Escenario Asignado:
                </p>
                {salon.escenario ? (
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span className="text-sm">{salon.escenario}</span>
                  </div>
                ) : (
                  <p className="text-sm opacity-50 italic">
                    Sin escenario asignado
                  </p>
                )}
              </div>

              {/* Students Count */}
              <div className="flex items-center gap-2 mt-3">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <span className="text-sm">{salon.estudiantes} estudiantes</span>
              </div>

              {/* Action Buttons */}
              <div className="card-actions flex-col mt-6">
                <button className="btn btn-primary btn-block">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Asignar Escenario
                </button>
                <button className="btn btn-outline btn-block">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  Ver Progreso
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
