import logo from './logo.svg';
import './App.css';
import ProductComponent2 from './componets/ProductComponent2';
import ProductComponent3 from './componets/ProductComponent3';
import ProductComponent4 from "./componets/ProductComponent4"
import StateExampleINClass from './componets/StateExampleINClass';
import StateExampleWithFunctionComponent from "./componets/StateExampleWithFunctionComponent"
import EventsExampleFunctionDemo, { EventExampleWithClassDemo } from './componets/EventsExample.js';
import EventExample2 from './componets/EventsExampleUncontrolledComponent';
import ControlledComponentEvent from './componets/ControlledComponentEvent';
import PrevenHandleExample from './componets/PrevenHandleExampleFunDemo.js';
import PrevenHandleExampleFunDemo from './componets/PrevenHandleExampleFunDemo.js';
import PrevenHandleExampleClassDemo from './componets/PrevenHandleExampleClassDemo.js';
import DataBindingExample from './componets/DataBindingExample.js';

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
     {/* <PrevenHandleExampleFunDemo /> */}
     <DataBindingExample />
    </div>
  );
}

export default App;
