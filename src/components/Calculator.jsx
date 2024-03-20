
const Calculator = ({ value1, value2, onChange1, onChange2, bmi }) => {


  return (
    <div className="input-div">
        <h4 className="h4-input">Kilo: {value1} kg</h4>
       <input
         className="input"
          type="range"
          name="kilo"
          value={value1}
          min={25}
          max={150}
          onChange={(e) => onChange1 && onChange1(e.target.value)}
       />
       <h4 className="h4-input">Boy: {value2} cm</h4>
       <input
         className="input"
          type="range"
          name="boy"
          value={value2}
          min={120}
          max={250}
          onChange={(e) => onChange2 && onChange2(e.target.value)}
       />
         <h3>BMI:</h3>
         <p className="bmi">{bmi.toFixed(1)}</p>
    </div>
  )
}
export default Calculator