"use client"
import Calculator from "./Calculator"
import { useState,useMemo } from "react"

const App = () => {
const [kilo,setKilo] = useState(72)
const [boy,setBoy] = useState(186)
const [bmi,setBmi] = useState(null)

const handleBoyChange = (newBoy) => {
   setBoy(newBoy)
}

const handleKiloChange = (newKilo) => {
   setKilo(newKilo)
}
// Vücut Kitle Endeksi (BMI) hesaplama formülü: kilo / (boy * boy) //
const result = useMemo(() => {
 const boyMetreCinsinden = boy / 100
 const bmiResult = kilo / (boyMetreCinsinden * boyMetreCinsinden)
 setBmi(bmiResult)
 return bmiResult
},[kilo,boy]) 

  return (
    <div className="container">
        <h1>BMI CALCULATOR</h1>
        <Calculator bmi={result} value1={kilo} value2={boy} onChange1={handleKiloChange} onChange2={handleBoyChange} />
    </div>
  )
}
export default App