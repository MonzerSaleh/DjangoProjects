import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  //(item: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //let items = ["NYC", "Toronto", "Calgary", "Beirut", "Paris", "London"];
  //const items = [];
  //let selectedIndex = 0;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const message = items.length === 0 ? <p>Not Items Found</p> : null;
  const message2 = items.length === 0 && <p>Not Items Found</p>;

  return (
    <>
      <h2>List of {heading}</h2>
      {message}
      {message2}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;

// return (
// <>
//     <h2>Here's a list of elements</h2>
//     <ul className="list-group">
//     <li className="list-group-item">An item</li>
//     <li className="list-group-item">A second item</li>
//     <li className="list-group-item">A fourth item</li>
//     <li className="list-group-item">And a fifth one</li>
//     </ul>
// </>
// );
