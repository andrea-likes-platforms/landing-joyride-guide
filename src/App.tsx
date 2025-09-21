import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Content from "./pages/Content";
import WhatAndWhy from "./pages/WhatAndWhy";
import WhereToStart from "./pages/WhereToStart";
import StartingAndProgressing from "./pages/StartingAndProgressing";
import ArticleView from "./pages/ArticleView";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/content" element={<Content />} />
          <Route path="/what-and-why" element={<WhatAndWhy />} />
          <Route path="/where-to-start" element={<WhereToStart />} />
          <Route path="/starting-and-progressing" element={<StartingAndProgressing />} />
          <Route path="/article/:slug" element={<ArticleView />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
