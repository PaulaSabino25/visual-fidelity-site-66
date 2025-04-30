
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Index from "./pages/Index";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";

// Product detail pages
import ProductTofpetAsic from "./pages/products/ProductTofpetAsic";
import ProductTofAsicEKit from "./pages/products/ProductTofAsicEKit";
import ProductTofFebdBoard from "./pages/products/ProductTofFebdBoard";
import ProductTofFrontEndModule from "./pages/products/ProductTofFrontEndModule";
import ProductTofDaqBoard from "./pages/products/ProductTofDaqBoard";
import SignIn from "./pages/SignIn";
import Team from "./pages/Team";
import TrackRecord from "./pages/TrackRecord";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/team" element={<Team />} />
            <Route path="/track-record" element={<TrackRecord />} />
            <Route path="/sign-in" element={<SignIn />} />
            
            {/* Product detail routes */}
            <Route path="/products/tofpet2-asic" element={<ProductTofpetAsic />} />
            <Route path="/products/tof-asic-e-kit" element={<ProductTofAsicEKit />} />
            <Route path="/products/tof-febd-board" element={<ProductTofFebdBoard />} />
            <Route path="/products/tof-front-end-module" element={<ProductTofFrontEndModule />} />
            <Route path="/products/tof-daq-board" element={<ProductTofDaqBoard />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
