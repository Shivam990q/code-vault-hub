
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { v4 as uuidv4 } from "uuid";
import UploadArea from "@/components/projects/UploadArea";
import ProjectForm from "@/components/projects/ProjectForm";
import ProjectList, { Project } from "@/components/projects/ProjectList";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

export default function ProjectsPage() {
  const { toast } = useToast();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [currentFileName, setCurrentFileName] = useState("");

  const handleUploadComplete = (fileName: string) => {
    setCurrentFileName(fileName);
    setShowProjectForm(true);
  };

  const handleProjectFormSubmit = (projectData: any) => {
    const newProject = {
      id: uuidv4(),
      title: projectData.title,
      description: projectData.description,
      language: projectData.language,
      techStack: projectData.techStack,
      tags: projectData.tags,
      date: projectData.date || new Date(),
      fileName: projectData.fileName,
    };

    setProjects([newProject, ...projects]);
    setShowProjectForm(false);

    toast({
      title: "Project created",
      description: "Your project has been successfully added.",
    });
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter(project => project.id !== id));
    toast({
      title: "Project deleted",
      description: "Your project has been successfully deleted.",
    });
  };

  const handleEditProject = (id: string) => {
    toast({
      title: "Edit mode",
      description: "Edit functionality will be implemented soon.",
    });
  };

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
              <h1 className="text-3xl font-bold tracking-tight">My Projects</h1>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Upload Project</h2>
                <UploadArea onUploadComplete={handleUploadComplete} />
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Project List</h2>
                <ProjectList 
                  projects={projects} 
                  onDeleteProject={handleDeleteProject} 
                  onEditProject={handleEditProject}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
      
      <Dialog open={showProjectForm} onOpenChange={setShowProjectForm}>
        <DialogContent className="sm:max-w-[600px]">
          <h2 className="text-lg font-bold mb-4">Project Details</h2>
          <ProjectForm 
            fileName={currentFileName} 
            onSubmit={handleProjectFormSubmit} 
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
