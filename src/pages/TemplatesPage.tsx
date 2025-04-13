
import { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

export default function TemplatesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen w-full flex-col bg-background text-foreground">
      <Header 
        toggleSidebar={toggleSidebar} 
        isAuthenticated={true} 
        setIsAuthenticated={() => {}}
      />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold tracking-tight">Templates</h1>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="rounded-lg border bg-card p-6 shadow-sm flex items-center justify-center min-h-[400px] text-center">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Template Library Coming Soon</h2>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Our template library is currently under development. 
                    Check back soon for a collection of ready-to-use project templates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
