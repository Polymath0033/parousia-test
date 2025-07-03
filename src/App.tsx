import { ProductProvider } from "./context";
import ProductDashboard from "./pages/product-dashboard";
function App() {
 

  return (
    <ProductProvider>
      <ProductDashboard />
    </ProductProvider>
  );
}

export default App;
