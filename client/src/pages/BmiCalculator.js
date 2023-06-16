import React from "react";
import { useState } from "react"; 
import { Button, TextInput, Select } from "react-materialize";
const Bmi=()=>{
    const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState('');

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    setBmiResult(bmi);
  };
    
  
    return( 
        <div>
            <h3 style={{textAlign: 'center',padding:'10px'}}>BMI Calculator  </h3>
            
        <form className="search-form" action="#">
        <Select
  id="Select-60"
  multiple={false}
  onChange={function noRefCheck(){}}
  options={{
    classes: '',
    dropdownOptions: {
      alignment: 'left',
      autoTrigger: true,
      closeOnClick: true,
      constrainWidth: true,
      coverTrigger: true,
      hover: false,
      inDuration: 150,
      onCloseEnd: null,
      onCloseStart: null,
      onOpenEnd: null,
      onOpenStart: null,
      outDuration: 250
    }
  }}
  value=""
>
  <option
    disabled
    value=""
  >
    Choose your option
  </option>
  <option value="1">
    Male
  </option>
  <option value="2">
    Female
  </option>
  
</Select>
<TextInput
        label="Height (cm)"
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <TextInput
        label="Weight (kg)"
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <Button onClick={calculateBMI}>Calculate</Button>
      {bmiResult && <p>Your BMI is: {bmiResult}</p>}


          
        </form>
      </div>
    )
}
export default Bmi;