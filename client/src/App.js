import "./App.css";
import Payment from "./Payment";
import Completion from "./Completion";
import {Helmet} from "react-helmet"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
    <Helmet>
    <meta
      http-equiv="Content-Security-Policy"
      content="script-src 'self' https://js.stripe.com; frame-src http: https: http://localhost:4242 https://js.stripe.com https://hooks.stripe.com; img-src * 'self' data: https:;"
    />
  </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Payment />} />
          <Route path="/completion" element={<Completion />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
