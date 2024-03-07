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
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from 'react';

function App() {
const alphabet = Array.from({ length: 26 }, (v, n) => String.fromCharCode(n + 97));
const [bookmarks, setLanguages] = useState([...alphabet]);


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
<QuizPage />
    </div>



  );

  function handleDragEnd(event) {
    console.log("Drag end called");
    const { active, over } = event;
    console.log("ACTIVE: " + active.id);
    console.log("OVER :" + over.id);

    if (active.id !== over.id) {
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

// import { SortableItem } from './SortableItem';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import QuizPage from './components/Quiz/pages/QuizPage';
// import {
//   DndContext,
//   closestCenter
// } from "@dnd-kit/core";
// import {
//   arrayMove,
//   SortableContext,
//   verticalListSortingStrategy,
// } from "@dnd-kit/sortable";
// import { useState } from 'react';

// function App() {
//  const alphabet = Array.from({ length: 26 }, (v, n) => String.fromCharCode(n + 97));

// // const alphabet = [
// //   {id:0, bkmk: 'a'}, 
// //   {id:1, bkmk: 'b'}, 
// //   {id:2, bkmk: 'c'}, 
// //   {id:3, bkmk: 'd'}, 
// //   {id:4, bkmk: 'e'}, 
// //   {id:5, bkmk: 'f'}, 
// //   {id:6, bkmk: 'g'}, 
// //   {id:7, bkmk: 'h'}, 
// //   {id:8, bkmk: 'i'}, 
// //   {id:9, bkmk: 'j'}, 
// //   {id:10, bkmk: 'k'}, 
// //   {id:11, bkmk: 'l'}, 
// //   {id:12, bkmk: 'm'}, 
// //   {id:13, bkmk: 'n'}, 
// //   {id:14, bkmk: 'o'}]

// const [bookmarks, setLanguages] = useState([...alphabet]);


//   return (

//     <div>
//                <DndContext
//       collisionDetection={closestCenter}
//       onDragEnd={handleDragEnd}
//     >
//       <Container className="p-3" style={{"width": "50%"}} align="center">
//         <h3>The best programming languages!</h3>
//         <SortableContext
//           items={bookmarks}
//           strategy={verticalListSortingStrategy}
//         >
//           {/* We need components that use the useSortable hook */}
//           {bookmarks.map(bookmark => <SortableItem key={bookmark.bkmk} id={bookmark.id}/>)}
//         </SortableContext>
//       </Container>
//     </DndContext>
// <QuizPage />
//     </div>



//   );

//   function handleDragEnd(event) {
//     console.log("Drag end called");
//     const { active, over } = event;
//     console.log("ACTIVE: " + active.id);
//     console.log("OVER :" + over.id);

//     if (active.id !== over.id) {
//       setLanguages((items) => {
//         const activeIndex = items.indexOf(active.id);
//         const overIndex = items.indexOf(over.id);
//         console.log(arrayMove(items, activeIndex, overIndex));
//         return arrayMove(items, activeIndex, overIndex);
//       });
//     }
//   }
// }

// export default App;
