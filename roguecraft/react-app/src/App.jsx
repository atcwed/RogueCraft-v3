import React from 'react'

export default function App(){
  return (
    <div style={{padding:20, background:'#071026', minHeight:'100vh', color:'#e6eef6'}}>
      <h1>RogueCraft — React Wrapper</h1>
      <p>Este scaffold incluye una versión empaquetada del juego en un iframe.</p>
      <iframe src="../web-version/index_embedded.html" style={{width:'100%', height: '80vh', border:0}} title="RogueCraft"></iframe>
      <p style={{opacity:0.8}}>Para desarrollar: npm install && npm run dev</p>
    </div>
  )
}
