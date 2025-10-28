import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { GlobalLoading } from "@/components/GlobalLoading";
import { LoadingProvider } from "@/store/loading.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PageRoutes from "@/routes";

const queryClient = new QueryClient();
// console.log(queryClient);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LoadingProvider>
      <TooltipProvider>
        <GlobalLoading />
        <Toaster />
        <Sonner />
        <PageRoutes />
      </TooltipProvider>
    </LoadingProvider>
  </QueryClientProvider>
);

export default App;