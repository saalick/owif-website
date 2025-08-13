import { useState, useEffect, useCallback } from "react";
import { RunwareService, GenerateImageParams, GeneratedImage } from "@/services/runware";
import { toast } from "sonner";

export const useRunware = () => {
  const [apiKey, setApiKey] = useState<string>("");
  const [service, setService] = useState<RunwareService | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (apiKey.trim()) {
      try {
        const newService = new RunwareService(apiKey);
        setService(newService);
      } catch (error) {
        console.error("Failed to initialize Runware service:", error);
        toast.error("Failed to initialize image service");
      }
    }
  }, [apiKey]);

  const generateImage = useCallback(async (
    params: GenerateImageParams, 
    imageKey: string
  ): Promise<string | null> => {
    if (!service) {
      toast.error("Please enter your Runware API key first");
      return null;
    }

    // Return cached image if exists
    if (generatedImages[imageKey]) {
      return generatedImages[imageKey];
    }

    setIsGenerating(true);
    try {
      const result = await service.generateImage(params);
      const imageUrl = result.imageURL;
      
      setGeneratedImages(prev => ({
        ...prev,
        [imageKey]: imageUrl
      }));
      
      toast.success("Image generated successfully!");
      return imageUrl;
    } catch (error) {
      console.error("Image generation failed:", error);
      toast.error("Failed to generate image. Please try again.");
      return null;
    } finally {
      setIsGenerating(false);
    }
  }, [service, generatedImages]);

  return {
    apiKey,
    setApiKey,
    generateImage,
    isGenerating,
    generatedImages,
    isServiceReady: !!service
  };
};