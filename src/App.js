import { SortableItem } from './SortableItem';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import QuizPage from './components/Quiz/pages/QuizPage';
import {
  DndContext,
  closestCenter
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy
} from "@dnd-kit/sortable";
import { useState } from 'react';

function App() {
  // const alphabet = Array.from({ length: 26 }, (v, n) => String.fromCharCode(n + 97));
  // const [languages, setLanguages] = useState([...alphabet]);


  return (

    <div>

      

      <QuizPage />
    </div>



  );

  // function handleDragEnd(event) {
  //   console.log("Drag end called");
  //   const { active, over } = event;
  //   console.log("ACTIVE: " + active.id);
  //   console.log("OVER :" + over.id);

  //   if (active.id !== over.id) {
  //     setLanguages((items) => {
  //       const activeIndex = items.indexOf(active.id);
  //       const overIndex = items.indexOf(over.id);
  //       console.log(arrayMove(items, activeIndex, overIndex));
  //       return arrayMove(items, activeIndex, overIndex);
  //     });
  //   }
  // }
}

export default App;
