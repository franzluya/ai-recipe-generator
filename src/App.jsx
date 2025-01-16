import { Analytics } from "@vercel/analytics/react"

import Header from "./components/Header"
import Main from "./components/Main"

export default function App() {
  return (
    <>
    <Analytics/>
    <Header/>
    <Main/>
    </>
  )
}