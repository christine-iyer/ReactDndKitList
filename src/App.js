import Artists from './components/assets/Artists';
import { SortableItem } from './SortableItem';
import Filter from './components/Filter'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import FileInput from './components/FileInput'
import ColorPicker from './components/ColorPicker'
import Select from './components/Select'
import Radio from './components/Radio'
import Range from './components/Range'
import InputGroup from './components/InputGroup'
import Layout from './components/Layout'
import  AlertDismissibleExample  from './components/Error';
import Modal from './components/Modal'
import {
  DndContext,
  closestCenter
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import {useState} from 'react';
import Variant from './components/Variant';


function App() {
    // const [languages, setLanguages ] =  // const [languages, setLanguages ] =[
    { symbol: "GOOGL", purchasePrice: 143.49,  shares: 100 },
    { symbol: "TSLA", purchasePrice: 242.54, shares: 45 },
    { symbol: "AMZN", purchasePrice: 160.00, shares: 80 },
    { symbol: "BA", purchasePrice: 188.59, shares: 25},
    { symbol: "COIN", purchasePrice: 257.31, shares:50 },
    { symbol: "AAPL", purchasePrice: 114.56, shares:200},
    { symbol: "CVS", purchasePrice: 89.83, shares: 25 },
    { symbol: "GS", purchasePrice: 342.94, shares: 10 },
    { symbol: "MS", purchasePrice: 98.39, shares: 25 },
    { symbol: "NVDA", purchasePrice: 293.75, shares: 5 },
    { symbol: "PYPL", purchasePrice: 191.57, shares: 10 },
    { symbol: "PFE", purchasePrice: 47.45, shares: 100 },
    { symbol: "CRM", purchasePrice: 160.38, shares: 20 },
    { symbol: "SBUX", purchasePrice: 102.99, shares: 25 },
    { symbol: "DIS", purchasePrice: 151.93, shares: 10 },
    { symbol: "VTI", purchasePrice: 239.05, shares: 10 },
    { symbol: "LI", purchasePrice: 32.53, shares: 225 }
    
  ];

  // const [languages, setLanguages ] = useState(["JavaScript", "Python", "TypeScript"]);

  return (



    <div>
          <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <Container className="p-3" style={{"width": "50%"}} align="center">
        <h3>The best programming languages!</h3>
        <SortableContext
          items={assets}
          strategy={verticalListSortingStrategy}
        >
          {/* We need components that use the useSortable hook */}
          {assets.map(asset => <SortableItem key={asset.symbol} id={asset.symbol}/>)}
        </SortableContext>
      </Container>
    </DndContext>
      <Artists/>
      <Variant />
      <Modal/>
    <div>
    <Filter />
    
 </div>
 <br />
 <div>
     <FileInput />
    
 </div>
 <div>
  <ColorPicker />
 </div>
 <div>
  <Select/>
 </div>
 <div>
  <Radio />
 </div>
 <div>
  <Range />
 </div>
 <div>
  <InputGroup />
 </div>
 <div>
  <Layout />
 </div>
 <AlertDismissibleExample />
 </div>

  );

  function handleDragEnd(event) {
    console.log("Drag end called");
    const {active, over} = event;
    console.log("ACTIVE: " + active.id);
    console.log("OVER :" + over.id);

    if(active.id !== over.id) {
      setAssets((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        console.log(arrayMove(items, activeIndex, overIndex));
        return arrayMove(items, activeIndex, overIndex);
      });
    }
  }
}

export default App;
