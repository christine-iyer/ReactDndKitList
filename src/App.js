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
const alphabet = Array.from({ length: 26 }, (v, n) => String.fromCharCode(n + 97));
const [bookmarks, setBookmarks] = useState([...alphabet]);



  return (

    <div>
               <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <Container className="p-3" style={{"width": "50%"}} align="center">
        <h3>The best programming languages!</h3>
        <SortableContext
          items={bookmarks}
          strategy={verticalListSortingStrategy}
        >
          {/* We need components that use the useSortable hook */}
          {bookmarks.map(bookmark => <SortableItem key={bookmark} id={bookmark}/>)}
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
      setBookmarks((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        console.log(arrayMove(items, activeIndex, overIndex));
        return arrayMove(items, activeIndex, overIndex);
      });
    }
  }
}

export default App;