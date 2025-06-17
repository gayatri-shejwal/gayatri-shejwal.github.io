import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-gray-950 dark:text-white p-6 md:p-12">
      {/* Header */}
      <header className="max-w-5xl mx-auto mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Your Name
        </motion.h1>
        <p className="text-lg md:text-xl mb-6">A short tagline or bio about your profession, skills or passion.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </header>

      {/* Projects Section */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3].map((project) => (
            <Card key={project} className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Title {project}</h3>
                <p className="mb-4">Short description of the project, technologies used, and purpose.</p>
                <div className="flex space-x-3">
                  <Button asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">View Code</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="mb-6">Feel free to reach out via email at <a href="mailto:youremail@example.com" className="underline">youremail@example.com</a>.</p>
        {/* Optional: Add Formspree or similar integration here */}
      </section>
    </main>
  );
}
