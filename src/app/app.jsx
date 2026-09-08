import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/shared/ui/toast";
import { HomePage } from "@/pages/home";
import { AboutPage } from "@/pages/about";
import { CatalogPage } from "@/pages/catalog";
import { ProductPage } from "@/pages/product";
import { NewsPage } from "@/pages/news";
import { ArticlePage } from "@/pages/article";
import { DeliveryPage } from "@/pages/delivery";
import { ContactsPage } from "@/pages/contacts";
import { CalculatorPage } from "@/pages/calculator";
import { AccountPage } from "@/pages/account";
import { CartPage } from "@/pages/cart";
import { CheckoutPage } from "@/pages/checkout";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:slug" element={<ArticlePage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>

      <Toaster />
    </BrowserRouter>
  );
};
