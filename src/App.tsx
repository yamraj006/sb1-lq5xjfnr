import React, { useState } from 'react';
import { ImageIcon, FileImage, FileVideo, FileText } from 'lucide-react';
import { Header } from './components/Header';
import { ToolCard } from './components/ToolCard';
import { FileDropZone } from './components/FileDropZone';

type Tool = 'image' | 'gif' | 'pdf' | null;

function App() {
  const [selectedTool, setSelectedTool] = useState<Tool>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleToolSelect = (tool: Tool) => {
    setSelectedTool(tool);
    setFile(null);
  };

  const handleFileSelect = (file: File) => {
    setFile(file);
    // In a real application, we would process the file here
    console.log('Processing file:', file.name);
  };

  const tools = [
    {
      icon: ImageIcon,
      title: 'Image Optimizer',
      description: 'Compress and resize your images without losing quality',
      type: 'image' as Tool,
      accept: 'image/*',
    },
    {
      icon: FileImage,
      title: 'GIF Optimizer',
      description: 'Optimize your GIFs while maintaining animation quality',
      type: 'gif' as Tool,
      accept: 'image/gif',
    },
    {
      icon: FileText,
      title: 'PDF Optimizer',
      description: 'Reduce PDF file size while preserving document quality',
      type: 'pdf' as Tool,
      accept: '.pdf',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!selectedTool ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <ToolCard
                key={tool.type}
                icon={tool.icon}
                title={tool.title}
                description={tool.description}
                onClick={() => handleToolSelect(tool.type)}
              />
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <button
              onClick={() => handleToolSelect(null)}
              className="mb-8 text-indigo-600 hover:text-indigo-800 flex items-center space-x-2"
            >
              <span>← Back to tools</span>
            </button>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                {tools.find(t => t.type === selectedTool)?.title}
              </h2>
              
              <FileDropZone
                onFileSelect={handleFileSelect}
                accept={tools.find(t => t.type === selectedTool)?.accept}
              />
              
              {file && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">
                    Selected file: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                  </p>
                  <button
                    className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                    onClick={() => {
                      // In a real application, we would process the file here
                      alert('File processing would start here in a real application!');
                    }}
                  >
                    Process File
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;