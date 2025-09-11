import React from 'react'

const projects=[
  {
    name: "AlgoLearn",
    video: "",
    link: "",
  },
  {
    name: "Netflix Clone",
    video: "/netflix_preview.mp4",
    link: "https://netflixx-clonee-three.vercel.app/",
  },
  {
    name: "DocuRAG Chatbot",
    video: "/rag_preview.mp4",
    link: "https://docuragchatbot-kngarfajr3kn2wblrvb7kb.streamlit.app/",
  },
  {
    name: "LiteSwitch",
    video: "",
    link: "",
  },
  {
    name: "Fraud Detection Dashboard",
    video: "",
    link: "",
  }
]

const PreviewCards = () => {
  return (
    <div>
      <div className="w-screen h-screen select-none flex relative items-center justify-center overflow-hidden">
        <div className="absolute bottom-35 left-0 w-full flex gap-6 overflow-x-scroll snap-x snap-mandatory px-8 pb-6 hide-scrollbar">
          {[...projects].map((proj, i) => (
            proj.video ?
            <div
              key={i}
              className="w-[40vh] h-[28vh] flex-shrink-0 rounded-xl cursor-pointer overflow-hidden shadow-lg border border-white/20 bg-white/10 backdrop-blur-md snap-center"
            >
              <video
                src={proj.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[80%] object-cover"
                onClick={()=>window.open(proj.link, "_blank")}
              />
              <div onClick={()=>window.open(proj.link)} className="p-4 cursor-pointer hover:text-black text-center text-white font-semibold">
                {proj.name}
              </div>
            </div> : " "
          ))}
        </div>
      </div>
    </div>
  )
}

export default PreviewCards

