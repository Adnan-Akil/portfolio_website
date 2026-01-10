import React from 'react'

const projects = [
  {
    name: "DocuRAG Chatbot",
    video: "/rag_preview.mp4",
    link: "https://docuragchatbot-kngarfajr3kn2wblrvb7kb.streamlit.app/",
  },
  {
    name: "AlgoLearn",
    video: "", // Placeholder or remove if no video
    link: "",
  },
  {
    name: "LiteSwitch",
    video: "/LiteSwitch_preview.mp4",
    link: "https://github.com/Adnan-Akil/LiteSwitch",
  },
  {
    name: "Fraud Detection Dashboard",
    video: "",
    link: "",
  }
]

const PreviewCards = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 lg:py-0">
      <h2 className="text-2xl md:text-3xl text-white ubuntu-mono mb-6 border-l-4 border-orange-500 pl-4">
        Projects //
      </h2>

      <div className="w-full flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 hide-scrollbar">
        {projects.map((proj, i) => (
          proj.video ? (
            <div
              key={i}
              className="relative flex-shrink-0 w-80 md:w-96 rounded-xl overflow-hidden shadow-lg border border-white/10 bg-white/5 backdrop-blur-sm snap-center group transition-transform hover:scale-[1.02]"
            >
              <div className="aspect-video w-full bg-black/50 relative">
                <video
                  src={proj.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => window.open(proj.link, "_blank")}
                    className="px-6 py-2 bg-white text-black font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all"
                  >
                    View Project
                  </button>
                </div>
              </div>

              <div className="p-4 bg-black/40 border-t border-white/5">
                <h3 className="text-white font-semibold text-lg truncate">{proj.name}</h3>
              </div>
            </div>
          ) : null
        ))}

        {/* Placeholder for empty videos or more projects if needed */}
      </div>
    </div>
  )
}

export default PreviewCards

