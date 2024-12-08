import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      <Alert>
        Custom Text as <span>HTML Element</span>
      </Alert>
      <Button color="danger" onClick={() => setAlertVisible(true)}>
        My Button
      </Button>

      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My alert</Alert>
      )}
    </div>
  );
}
export default App;

//return( <div><Alert text="Custom Text Passed" /> </div> );
// req

// import ListGroup from "./components/ListGroup";

// function App() {
//   let items = ["NYC", "Toronto", "Calgary", "Beirut", "Paris", "London"];
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }
// export default App;
