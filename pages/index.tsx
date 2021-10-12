import React from "react"
import Navbar from "../src/components/navbar"
import Home from "./home"

export default function App() {
  return (
    <div className="bg-black h-screen">
      <Navbar />
      <Home />
    </div>
  )
}
