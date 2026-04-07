'use client';
import { useState } from 'react';
import { CheckCircle, Copy, Video } from 'lucide-react';

export default function VistaHoy() {
  const [completado, setCompletado] = useState(false);

  const tareaHoy = {
    tipo: "Reel",
    objetivo: "Generar consultas sobre cristales Blue Block",
    hook: "¿Trabajas más de 6 horas frente a la compu? Mira esto.",
    pasosGrabacion: [
      "1. Plano selfie tuyo frente a una laptop con cara de cansado (3 seg).",
      "2. Muestra un armazón moderno sobre la mesa (2 seg).",
      "3. Tú hablando directo a cámara con el armazón puesto (5 seg)."
    ],
    textoPantalla: "El filtro azul no es un lujo, es necesidad 🤓",
    copy: "Si te duelen los ojos al final del día, la solución es más simple de lo que crees. Vení a probártelos. Link en bio para turnos. 👇",
  };

  return (
    <div className="min-h-screen p-6 font-sans max-w-2xl mx-auto">
      <header className="mb-8 mt-4">
        <p className="text-zinc-400 text-sm uppercase tracking-wider mb-1">Ejecución Diaria</p>
        <h1 className="text-3xl font-bold tracking-tight">Tu tarea de hoy</h1>
      </header>

      <div className="bg-[#18181b] border border-zinc-800 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-zinc-800 p-2 rounded-lg text-zinc-300">
            <Video size={24} />
          </span>
          <div>
            <h2 className="text-xl font-semibold">{tareaHoy.tipo} Estratégico</h2>
            <p className="text-sm text-zinc-400">Objetivo: {tareaHoy.objetivo}</p>
          </div>
        </div>

        <div className="space-y-6">
          <section className="bg-black p-4 rounded-xl border border-zinc-800/50">
            <h3 className="text-sm text-zinc-400 mb-2 font-medium">1. EL GANCHO</h3>
            <p className="text-lg font-bold">"{tareaHoy.hook}"</p>
          </section>

          <section>
            <h3 className="text-sm text-zinc-400 mb-3 font-medium">2. QUÉ GRABAR</h3>
            <ul className="space-y-2">
              {tareaHoy.pasosGrabacion.map((paso, index) => (
                <li key={index} className="text-zinc-300">{paso}</li>
              ))}
            </ul>
          </section>
        </div>

        <button 
          onClick={() => setCompletado(!completado)}
          className={`mt-8 w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
            completado 
            ? 'bg-zinc-800 text-zinc-400 border border-zinc-700' 
            : 'bg-white text-black hover:bg-zinc-200'
          }`}
        >
          {completado ? 'Completado por hoy' : 'Marcar como Listo'}
          {completado && <CheckCircle size={20} />}
        </button>
      </div>
    </div>
  );
}
