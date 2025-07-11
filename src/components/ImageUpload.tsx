
import { useRef } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
  imagePreview: string | null;
  isLoading: boolean;
}

const ImageUpload = ({ onImageSelect, imagePreview, isLoading }: ImageUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      onImageSelect(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      onImageSelect(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className="space-y-4">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />

      {imagePreview ? (
        <div className="relative group">
          <img
            src={imagePreview}
            alt="Selected image"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          {!isLoading && (
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <Button
                onClick={handleClick}
                variant="secondary"
                className="bg-white/90 hover:bg-white text-black"
              >
                <Upload className="w-4 h-4 mr-2" />
                Change Image
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div
          onClick={handleClick}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="border-2 border-dashed border-white/50 rounded-lg p-8 text-center cursor-pointer hover:border-white/70 transition-colors duration-300 hover:bg-white/5"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 bg-white/20 rounded-full">
              <ImageIcon className="w-12 h-12 text-white" />
            </div>
            <div>
              <p className="text-white text-lg font-semibold mb-2">
                Drop your image here or click to browse
              </p>
              <p className="text-white/70 text-sm">
                Supports JPG, PNG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
