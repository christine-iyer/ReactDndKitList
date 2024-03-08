import { SortableItem } from './SortableItem';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import {
  DndContext,
  closestCenter
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from 'react';

function App() {
  // const alphabet = Array.from({ length: 3 }, (v, n) => String.fromCharCode(n + 97));
  const alphabet = [
    {id: 1, value: "A"}, // <-- a `0` id value causes the element to not be draggable (probably a bad falsy check somewhere)
    {id: 2, value: "B"},
    {id: 3, value: "C"},
  ]

  const [abcs, setAbcs] = useState([...alphabet]);
  return (

    <div>
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <Container className="p-3" style={{ "width": "20%" }} align="center">
          <h3>The A B C</h3>
          <SortableContext
            items={abcs}
            strategy={verticalListSortingStrategy}
          >
            {abcs.map(({id, value}) => <SortableItem key={id} id={id} value={value} />)}
          </SortableContext>
        </Container>
      </DndContext>
    </div>
  );

  function handleDragEnd(event) {
    console.log("Drag end called");
    const { active, over } = event;
    console.log("ACTIVE: " + active.id);
    console.log("OVER :" + over.id);

    if (active.id !== over.id) {
      setAbcs((items) => {
        const activeIndex = items.findIndex(({ id }) => id ===  active.id);
        const overIndex = items.findIndex(({ id }) => id ===  over.id);
        console.log(arrayMove(items, activeIndex, overIndex));
        return arrayMove(items, activeIndex, overIndex);
      });
    }
  }
}

export default App;