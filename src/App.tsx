import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { GlobalLoading } from "@/components/GlobalLoading";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PageRoutes from "@/routes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <GlobalLoading />
      <Toaster />
      <Sonner />
      <PageRoutes />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;