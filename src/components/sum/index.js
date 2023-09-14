import React, { useState } from 'react';

function Sum() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [sum, setSum] = useState(0);

    const handleNum1Change = (e) => {
        setNum1(parseInt(e.target.value) || 0);
    };

    const handleNum2Change = (e) => {
        setNum2(parseInt(e.target.value) || 0);
    };

    const calculateSum = () => {
        const result = num1 + num2;
        setSum(result);
    };
    return (
        <div className="App">
        <h1>Tính Tổng Hai Số Nguyên</h1>
        <div>
          <label>Số nguyên 1: </label>
          <input type="number" value={num1} onChange={handleNum1Change} />
        </div>
        <div>
          <label>Số nguyên 2: </label>
          <input type="number" value={num2} onChange={handleNum2Change} />
        </div>
        <button onClick={calculateSum}>Tính Tổng</button>
        <div>
          <label>Kết quả:</label>
          <span>{sum}</span>
        </div>
      </div>
    )
}

export default Sum;