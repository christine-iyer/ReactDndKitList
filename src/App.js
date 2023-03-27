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

  const [languages, setLanguages ] = useState(["JavaScript", "Python", "TypeScript"]);

  return (



    <div>
          <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <Container className="p-3" style={{"width": "50%"}} align="center">
        <h3>The best programming languages!</h3>
        <SortableContext
          items={languages}
          strategy={verticalListSortingStrategy}
        >
          {/* We need components that use the useSortable hook */}
          {languages.map(language => <SortableItem key={language} id={language}/>)}
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
      setLanguages((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        console.log(arrayMove(items, activeIndex, overIndex));
        return arrayMove(items, activeIndex, overIndex);
      });
    }
  }
}

export default App;
