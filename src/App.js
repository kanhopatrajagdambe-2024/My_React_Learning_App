import logo from './logo.svg';
import './App.css';
import ProductComponent2 from './componets/ProductComponent2';
import ProductComponent3 from './componets/ProductComponent3';
import ProductComponent4 from "./componets/ProductComponent4"
import StateExampleINClass from './componets/StateExampleINClass';
import StateExampleWithFunctionComponent from "./componets/StateExampleWithFunctionComponent"
import EventsExampleFunctionDemo, { EventExampleWithClassDemo } from './componets/EventsExamplejs';
import EventExample2 from './componets/EventsExampleUncontrolledComponent';
import ControlledComponentEvent from './componets/ControlledComponentEvent';

function App() {
  const products = [
    { 
      productName: "Laptop", 
      price: 1200, 
      photo: "laptop.jpg" 
    },
    { 
      productName: "Smartphone", 
      price: 800, 
      photo: "smartphone.jpg" 
    },
    { 
      productName: "Headphones", 
      price: 150, 
      photo: "headphones.jpg" 
    }
  ];
  return (
    <div className="App">
     {/* <EventsExampleFunctionDemo />
     <EventExampleWithClassDemo /> */}
     {/* <EventExample2 /> */}
     <ControlledComponentEvent />
    </div>
  );
}

export default App;
