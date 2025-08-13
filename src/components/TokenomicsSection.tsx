import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const TokenomicsSection = () => {
  const tokenomics = [
    { label: "For The Culture", percentage: 40, description: "Airdrops for the day ones, rewards for diamond hands" },
    { label: "Keep It Liquid", percentage: 30, description: "Smooth trading only, no sketchy business" },
    { label: "Building Different", percentage: 20, description: "Funding the most FIRE olf hat innovations" },
    { label: "Viral Marketing", percentage: 10, description: "Spreading olf hat supremacy across ALL timelines" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-l from-background to-accent/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            The Numbers Game
          </h2>
          <p className="text-xl text-muted-foreground">
            Math that actually makes sense (shocking ik)
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
                <h3 className="text-2xl font-bold mb-4">Zero Tax Energy</h3>
                <p className="text-lg">
                  0% buy tax, 0% sell tax. We too olf for the IRS shenanigans fr.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-primary/10 border-primary/30">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent rounded-lg mb-4 mx-auto rotate-45"></div>
                <h3 className="text-2xl font-bold mb-4">LP Locked Till Heat Death</h3>
                <p className="text-lg">
                  Liquidity locked until the universe itself gets rekt. 
                  We aint rugpulling nobody bestie.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-primary/10 border-primary/30">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full mb-4 mx-auto glow wiggle"></div>
                <h3 className="text-2xl font-bold mb-4">Ownership = YEETED</h3>
                <p className="text-lg">
                  Contract ownership straight up DELETED. This the people's coin now. 
                  Power to the olf degeneracy!
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