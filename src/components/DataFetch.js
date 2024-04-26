const { useState, useEffect } = require("react");

function DataFetch() {
  const [item, setItem] = useState([]);

  useEffect(() => {

    fetch('https://api.sampleapis.com/wines/reds')
    .then(response => response.json())
    .then(data => setItem(data))
    .catch(error => {
      console.error(error);
    })
  }, []);


  console.log(item);
  return (
    <div>
      {item.length > 0 ? (
          item.map((item) => (
            <ul key={item.id}>
            <li>{item.winery}</li>
            <li>{item.wine}</li>
            <li>{item.rating.average}</li>
            <li>{item.rating.reviews}</li>
            <li>{item.location}</li>
            <li><img src={item.image}></img></li>
            </ul>
          ))
      ) : (
        <div>
          <p>Item doesn't exist</p>
        </div>
      )}
    </div>
  );
}

export default DataFetch;
