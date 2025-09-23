import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PageRoutes from "@/routes";

const queryClient = new QueryClient();
console.log(queryClient);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <PageRoutes />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;