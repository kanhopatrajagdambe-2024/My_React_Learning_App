import logo from './logo.svg';
import './App.css';
import ProductComponent2 from './componets/ProductComponent2';
import ProductComponent3 from './componets/ProductComponent3';
import ProductComponent4 from "./componets/ProductComponent4"
import StateExampleINClass from './componets/StateExampleINClass';
import StateExampleWithFunctionComponent from "./componets/StateExampleWithFunctionComponent"

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
     <StateExampleWithFunctionComponent />
    </div>
  );
}

export default App;
