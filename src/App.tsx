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
import ArchitectureForFlow from "./pages/ArchitectureForFlow";
import PEMaturityModel from "./pages/PEMaturityModel";
import PlatformToolingLandscape from "./pages/PlatformToolingLandscape";
import PEKickoffApproach from "./pages/PEKickoffApproach";
import PEEngagementCanvas from "./pages/PEEngagementCanvas";
import PEEnablementServicesCanvas from "./pages/PEEnablementServicesCanvas";
import PlatformFundingDesign from "./pages/PlatformFundingDesign";
import UserNeedsMapping from "./pages/UserNeedsMapping";
import StoryTellingLevels from "./pages/StoryTellingLevels";
import FindSponsorsCoreTeam from "./pages/FindSponsorsCoreTeam";
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
          <Route path="/architecture-for-flow" element={<ArchitectureForFlow />} />
          <Route path="/pe-maturity-model" element={<PEMaturityModel />} />
          <Route path="/platform-tooling-landscape" element={<PlatformToolingLandscape />} />
          <Route path="/pe-kickoff-approach" element={<PEKickoffApproach />} />
          <Route path="/pe-engagement-canvas" element={<PEEngagementCanvas />} />
          <Route path="/pe-enablement-services-canvas" element={<PEEnablementServicesCanvas />} />
          <Route path="/platform-funding-design" element={<PlatformFundingDesign />} />
          <Route path="/user-needs-mapping" element={<UserNeedsMapping />} />
          <Route path="/storytelling-levels" element={<StoryTellingLevels />} />
          <Route path="/find-sponsors-core-team" element={<FindSponsorsCoreTeam />} />
          <Route path="/article/:slug" element={<ArticleView />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
