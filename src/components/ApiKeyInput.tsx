import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ApiKeyInputProps {
  apiKey: string;
  setApiKey: (key: string) => void;
  isServiceReady: boolean;
}

const ApiKeyInput = ({ apiKey, setApiKey, isServiceReady }: ApiKeyInputProps) => {
  const [inputValue, setInputValue] = useState(apiKey);
  const [isVisible, setIsVisible] = useState(!apiKey);

  const handleSubmit = () => {
    if (inputValue.trim()) {
      setApiKey(inputValue.trim());
      setIsVisible(false);
    }
  };

  if (!isVisible && isServiceReady) {
    return (
      <div className="fixed top-4 right-4 z-50">
        <Badge 
          className="bg-green-500 hover:bg-green-600 cursor-pointer"
          onClick={() => setIsVisible(true)}
        >
          ✅ API Connected
        </Badge>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">🎨 Enable AI Images</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground text-center">
            To generate amazing meme images, please enter your Runware API key.
          </p>
          
          <div className="bg-primary/10 p-4 rounded-lg text-center">
            <p className="text-sm mb-2">Get your API key from:</p>
            <a 
              href="https://runware.ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              runware.ai → Dashboard → API Keys
            </a>
          </div>
          
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Enter your Runware API key..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
            />
            <Button 
              onClick={handleSubmit} 
              className="w-full"
              disabled={!inputValue.trim()}
            >
              Connect & Generate Images 🚀
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground text-center">
            Your API key is stored locally and never sent to our servers.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApiKeyInput;