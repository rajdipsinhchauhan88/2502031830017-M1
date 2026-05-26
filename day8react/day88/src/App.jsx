import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import HelloPage from "./Hellopage";
import CounterPage from "./Counterpage";
import User from "./User";
import Product from "./Product";

function App() {
  return (
    <BrowserRouter>

      <nav>

        <Link to="/">Home</Link> |

        <Link to="/hello">Hello</Link> |

        <Link to="/counter">Counter</Link> |

        <Link to="/user/1">User 1</Link> |

        <Link to="/user/2">User 2</Link> |

        <Link to="/product/1">Product 1</Link> |

        <Link to="/product/2">Product 2</Link>

      </nav>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/hello"
          element={<HelloPage />}
        />

        <Route
          path="/counter"
          element={<CounterPage />}
        />

        <Route
          path="/user/:id"
          element={<User />}
        />

        <Route
          path="/product/:id"
          element={<Product />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;