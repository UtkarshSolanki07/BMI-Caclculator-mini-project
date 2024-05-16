import './App.css'; 
import { useState } from 'react';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calcBmi = (e) => {
    e.preventDefault();
    if (weight === '' || height === '') {
      alert(`Please enter a valid weight and height`);
    } else {
      const weightInPounds = parseFloat(weight);
      const heightInInches = parseFloat(height);
      
      if (isNaN(weightInPounds) || isNaN(heightInInches)) {
        alert(`Please enter valid numeric values for weight and height`);
        return;
      }

      const bmiValue = (weightInPounds / (heightInInches * heightInInches)) * 703;
      setBmi(bmiValue.toFixed(1));
      
      if (bmiValue < 25) {
        setMessage("You are underweight");
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setMessage("You are a healthy weight person");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <h2>BMI Calculator</h2>
      <form onSubmit={calcBmi}>
        <div className="form-group">
          <label>Weight (lbs)</label>
          <br></br>
          <input
            type="text"
            placeholder="Enter your Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Height (in)</label>
          <input
            type="text"
            placeholder="Enter your Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div>
          <button className="btn" type="submit">Submit</button>
          <button className="btn btn-outline" type="button" onClick={reload}>Reload</button>
        </div>
        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </form>
    </div>
  );
}

export default App;
