import logo from './logo.svg';
import './App.css';
import Clock from './components/clock';
import Sum from './components/sum';
import WorldClock from './components/world-clock';




function App() {
  return (
    <div className="App">
     <Clock/>
     <Sum/>
     <WorldClock tenThanhPho={"Ha Noi"} muiGio={"7"}/>
     <WorldClock tenThanhPho={"China"} muiGio={"8"}/>
     <WorldClock tenThanhPho={"New York"} muiGio={"-4"}/>
     <WorldClock tenThanhPho={"Korea"} muiGio={"9"}/>
     <WorldClock tenThanhPho={"Japan"} muiGio={"9"}/>
     <WorldClock tenThanhPho={"Singapore"} muiGio={"8"}/>
     <WorldClock tenThanhPho={"Berlin"} muiGio={"2"}/>
     <WorldClock tenThanhPho={"Hungary"} muiGio={"2"}/>
      
   
    </div>
  );
}

export default App;
