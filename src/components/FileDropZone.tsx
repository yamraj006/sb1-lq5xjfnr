import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';

interface FileDropZoneProps {
  onFileSelect: (file: File) => void;
  accept?: string;
}

export function FileDropZone({ onFileSelect, accept }: FileDropZoneProps) {
  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file) onFileSelect(file);
    },
    [onFileSelect]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onFileSelect(file);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-indigo-500 transition-colors cursor-pointer"
    >
      <input
        type="file"
        className="hidden"
        onChange={handleChange}
        accept={accept}
        id="file-upload"
      />
      <label htmlFor="file-upload" className="cursor-pointer">
        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-lg text-gray-600">
          Drag and drop your file here, or click to select
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Maximum file size: 10MB
        </p>
      </label>
    </div>
  );
}