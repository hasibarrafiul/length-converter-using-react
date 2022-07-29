import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import './App.css';
import { useState } from 'react';

function App() {
  const [unit1, setUnit1] = useState('')
  const [unit2, setUnit2] = useState('')
  const [input, setInput] = useState(0)
  const [result, setResult] = useState(0)

  const convert = () =>{
      if(unit1 === "Kilometer"){
          if(unit2==="Kilometer") setResult(input*1)
          if(unit2=== "Meter") setResult(input*1000)
          if(unit2 === "Centimeter") setResult(input*100000)
          if(unit2 === "Millimeter") setResult(input*1000000)
          if(unit2 === "Micrometer") setResult(input*1000000000)
          if(unit2 === "Nanometer") setResult(input*1000000000000)
      }

        if(unit1 === "Meter"){
          if(unit2==="Kilometer") setResult(input/1000)
          if(unit2=== "Meter") setResult(input*1)
          if(unit2 === "Centimeter") setResult(input*100)
          if(unit2 === "Millimeter") setResult(input*1000)
          if(unit2 === "Micrometer") setResult(input*1000000)
          if(unit2 === "Nanometer") setResult(input*1000000000)
      }

        if(unit1 === "Centimeter"){
          if(unit2==="Kilometer") setResult(input/100000)
          if(unit2=== "Meter") setResult(input/100)
          if(unit2 === "Centimeter") setResult(input*1)
          if(unit2 === "Millimeter") setResult(input*10)
          if(unit2 === "Micrometer") setResult(input*10000)
          if(unit2 === "Nanometer") setResult(input*10000000)
      }

        if(unit1 === "Millimeter"){
          if(unit2==="Kilometer") setResult(input/1000000)
          if(unit2=== "Meter") setResult(input/1000)
          if(unit2 === "Centimeter") setResult(input/10)
          if(unit2 === "Millimeter") setResult(input*1)
          if(unit2 === "Micrometer") setResult(input*1000)
          if(unit2 === "Nanometer") setResult(input*1000000)
      }

        if(unit1 === "Micrometer"){
          if(unit2==="Kilometer") setResult(input/1000000000)
          if(unit2=== "Meter") setResult(input/1000000)
          if(unit2 === "Centimeter") setResult(input/10000)
          if(unit2 === "Millimeter") setResult(input/1000)
          if(unit2 === "Micrometer") setResult(input*1)
          if(unit2 === "Nanometer") setResult(input*1000)
      }

      if(unit1 === "Nanometer"){
        if(unit2==="Kilometer") setResult(input/1000000000000)
        if(unit2=== "Meter") setResult(input/1000000000)
        if(unit2 === "Centimeter") setResult(input/10000000)
        if(unit2 === "Millimeter") setResult(input/1000000)
        if(unit2 === "Micrometer") setResult(input/1000)
        if(unit2 === "Nanometer") setResult(input*1)
    }
      
  }

  return (
    <div className="App">
      Length Converter <br></br>
      Convert from
      <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          onChange={e=>setUnit1(e.target.value)}
          value={unit1}
        >
          <MenuItem value={"Kilometer"}>Kilometer</MenuItem>
          <MenuItem value={"Meter"}>Meter</MenuItem>
          <MenuItem value={"Centimeter"}>Centimeter</MenuItem>
          <MenuItem value={"Millimeter"}>Millimeter</MenuItem>
          <MenuItem value={"Micrometer"}>Micrometer</MenuItem>
          <MenuItem value={"Nanometer"}>Nanometer</MenuItem>
        </Select> 
        Convert to <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          onChange={e=>setUnit2(e.target.value)}
          value={unit2}
        >
          <MenuItem value={"Kilometer"}>Kilometer</MenuItem>
          <MenuItem value={"Meter"}>Meter</MenuItem>
          <MenuItem value={"Centimeter"}>Centimeter</MenuItem>
          <MenuItem value={"Millimeter"}>Millimeter</MenuItem>
          <MenuItem value={"Micrometer"}>Micrometer</MenuItem>
          <MenuItem value={"Nanometer"}>Nanometer</MenuItem>
        </Select>

        "Enter amount to convert"<br></br> <br></br>
      <input type="number" onChange={(e) => {setInput(e.target.value)}} value={input}/>
        &nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant="contained" onClick={(e)=>convert()}>Convert</Button>
      <br></br>
      Result: {result}
    </div>
  );
}

export default App;