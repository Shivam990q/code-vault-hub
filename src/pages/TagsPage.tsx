
import { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Badge } from "@/components/ui/badge";
import { Tag } from "lucide-react";

export default function TagsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const sampleTags = ["React", "TypeScript", "Frontend", "API", "Database"];

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
              <h1 className="text-3xl font-bold tracking-tight">Tags</h1>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Popular Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {sampleTags.map(tag => (
                    <Badge key={tag} variant="secondary" className="px-3 py-1 text-sm">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                      <span className="ml-1 text-xs text-muted-foreground">(0)</span>
                    </Badge>
                  ))}
                </div>
                <div className="mt-8 text-center text-muted-foreground">
                  <p>Add tags to your projects to see them appear here.</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
