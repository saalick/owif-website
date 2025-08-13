import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const TokenomicsSection = () => {
  const tokenomics = [
    { label: "Olf Dogs Reserve", percentage: 40, description: "For the goodest olf bois" },
    { label: "Community Hat Fund", percentage: 30, description: "Memes and marketing" },
    { label: "Liquidity Pool", percentage: 20, description: "Keep it flowing" },
    { label: "Development", percentage: 10, description: "Building the future" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-l from-background to-accent/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Tokenomics
          </h2>
          <p className="text-xl text-muted-foreground">
            How we distribute the olf wealth
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-center mb-8">
              <img 
                src="https://picsum.photos/500/300?random=5" 
                alt="Tokenomics Expert Dog" 
                className="mx-auto rounded-2xl shadow-lg max-w-full h-auto hover:scale-105 transition-transform duration-300 glow-cyan"
                style={{ maxHeight: '300px' }}
              />
            </div>
            <Card className="bg-card/80 backdrop-blur border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl text-center">
                  1 Billion $OWIF Tokens
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {tokenomics.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{item.label}</span>
                      <span className="text-primary font-bold">{item.percentage}%</span>
                    </div>
                    <Progress value={item.percentage} className="h-3" />
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <Card className="bg-primary/10 border-primary/30">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-destructive rounded-full mb-4 mx-auto animate-pulse"></div>
                <h3 className="text-2xl font-bold mb-4">No Tax, Just Facts</h3>
                <p className="text-lg">
                  0% buy tax, 0% sell tax. We're too olf for complicated math.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-primary/10 border-primary/30">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent rounded-lg mb-4 mx-auto rotate-45"></div>
                <h3 className="text-2xl font-bold mb-4">LP Locked Forever</h3>
                <p className="text-lg">
                  Liquidity is locked until the heat death of the universe. 
                  We're not going anywhere, frens.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-primary/10 border-primary/30">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full mb-4 mx-auto glow wiggle"></div>
                <h3 className="text-2xl font-bold mb-4">Renounced Ownership</h3>
                <p className="text-lg">
                  Contract ownership renounced. This is the people's coin now. 
                  Power to the olf!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;