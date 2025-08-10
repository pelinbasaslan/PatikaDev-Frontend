import { Profiler, useState } from 'react'
import './App.css'
import Header from './Header'
import Title from './Title'
import Balance from './Balance'
import Body from './Body'
import i18n from "./i18n"

const products = [
  { id: 1, name: "Big Mac", price: 2, image: "bigmac.png" },
  { id: 2, name: "Flip Flops", price: 3, image: "flipflop.png" },
  { id: 3, name: "Coca-Cola Pack", price: 5, image: "cola.png" },
  { id: 4, name: "Movie Ticket", price: 12, image: "ticket.png" },
  { id: 5, name: "Book", price: 15, image: "book.png" },
  { id: 6, name: "Lobster Dinner", price: 45, image: "dinner.png" },
  { id: 7, name: "Video Game", price: 60, image: "game.png" },
  { id: 8, name: "Amazon Echo", price: 99, image: "echo.png" },
  { id: 9, name: "Year of Netflix", price: 100, image: "netflix.png" },
  { id: 10, name: "Air Jordans", price: 125, image: "airjordan.png" },
  { id: 11, name: "Airpods", price: 199, image: "airpods.png" },
  { id: 12, name: "Gaming Console", price: 299, image: "gameconsole.png" },
  { id: 13, name: "Drone", price: 350, image: "drone.png" },
  { id: 14, name: "Smartphone", price: 699, image: "phone.png" },
  { id: 15, name: "Bike", price: 800, image: "bike.png" },
  { id: 16, name: "Kitten", price: 1500, image: "kitten.png" },
  { id: 17, name: "Puppy", price: 1500, image: "puppy.png" },
  { id: 18, name: "Auto Rickshaw", price: 100, image: "rickshaw.png" },
  { id: 19, name: "Horse", price: 2500, image: "horse.png" },
  { id: 20, name: "Arce of Farmland", price: 3000, image: "farmland.png" },
  { id: 21, name: "Designer Handbag", price: 5500, image: "bag.png" },
  { id: 22, name: "Hot Tub", price: 6000, image: "hub.png" },
  { id: 23, name: "Luxury Wine", price: 7000, image: "wine.png" },
  { id: 24, name: "Diamond Ring", price: 10000, image: "diamond.png" },
  { id: 25, name: "Jet Ski", price: 12000, image: "jetski.png" },
  { id: 26, name: "Rolex", price: 15000, image: "rolex.png" },
  { id: 27, name: "Ford F-150", price: 30000, image: "ford.png" },
  { id: 28, name: "Tesla", price: 75000, image: "tesla.png" },
  { id: 29, name: "Monster Truck", price: 150000, image: "truck.png" },
  { id: 30, name: "Ferrari", price: 250000, image: "ferrari.png" },
  { id: 31, name: "Single Family Home", price: 300000, image: "familyhome.png" },
  { id: 32, name: "Gold Bar", price: 700000, image: "gold.png" },
  { id: 33, name: "McDondalds Franchise", price: 1500000, image: "mcdonalds.png" },
  { id: 34, name: "Superbowl Ad", price: 5250000, image: "superbowl.png" },
  { id: 35, name: "Yatch", price: 7500000, image: "yatch.png" },
  { id: 36, name: "M1 Abrams", price: 8000000, image: "m1.png" },
  { id: 37, name: "Formula 1 Car", price: 15000000, image: "formula.png" },
  { id: 38, name: "Apache Helicopter", price: 31000000, image: "helicopter.png" },
  { id: 39, name: "Mansion", price: 45000000, image: "mansion.png" },
  { id: 40, name: "Make a Movie", price: 100000000, image: "movie.png" },
  { id: 41, name: "Boeing", price: 148000000, image: "boeing.png" },
  { id: 42, name: "Mona Lisa", price: 780000000, image: "monalisa.png" },
  { id: 43, name: "Skyscraper", price: 850000000, image: "skyscraper.png" },
  { id: 44, name: "Cruise Ship", price: 930000000, image: "cruiseship.png" },
  { id: 45, name: "NBA Team", price: 2120000000, image: "nba.png" },

];

products.map((product) => (
  <img key={product.id} src={`/images/${product.image}`} alt={product.name} />
));

function App() {
  const [balance, setBalance] = useState(100000000000);
  const [basket, setBasket] = useState({});

  const buyProduct = (product, amount = 1) => {
    const totalCost = product.price * amount;
    if (balance >= totalCost) {
      setBalance(balance - totalCost);
      setBasket((prev) => ({
        ...prev,
        [product.id]: (prev[product.id] || 0) + amount,
      }));
    }
  };

  const sellProduct = (product, amount = 1) => {
    if ((basket[product.id] || 0) >= amount) {
      setBalance(balance + product.price * amount);
      setBasket((prev) => ({
        ...prev,
        [product.id]: prev[product.id] - amount
      }));
    }

  };
  const formatPrice = (num) => {
    if (num >= 1_000_000_000) {
      return `$ ${(num / 1_000_000_000).toFixed(1)}b`;
    }
    else if (num >= 1_000_000) {
      return `$ ${(num / 1_000_000).toFixed(1)}m`;
    }
    return `${num.toLocaleString(i18n.language, { style: "currency", currency: "USD" })}`;
  };

  return (
    <>
      <Header />
      <Title />
      <Balance balance={balance} />
      <div className="product-container">
        {products.map((product) => (
          <Body
            key={product.id}
            product={product}
            buy={buyProduct}
            sell={sellProduct}
            balance={balance}
            quantity={basket[product.id] || 0} />
        ))}
      </div>

      <div className='receipt'>
        <h3>Your Receipt</h3>
        <ul>
          {Object.entries(basket).map(([productId, quantity]) => {
            const product = products.find(p => p.id === parseInt(productId));
            if (!product || quantity === 0) return null;

            return (
              <li key={productId} className="receipt-item">
                <span className="product-name">{product.name}</span>
                <span className="quantity">x{quantity}</span>
                <span className="product-price">{formatPrice(product.price * quantity)}</span>
              </li>
            );
          })}
        </ul>
        <div className='total'>
          <p><strong>TOTAL</strong></p>
          <p className='total-price'>{formatPrice(Object.entries(basket).reduce((sum, [productId, quantity]) => {
            const product = products.find(p => p.id === parseInt(productId));
            return sum + (product ? product.price * quantity : 0);
          }, 0))}</p>
        </div>
      </div>
    </>
  );
};

export default App;