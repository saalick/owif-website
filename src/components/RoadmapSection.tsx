import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const RoadmapSection = () => {
  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "The Awakening",
      status: "completed",
      items: [
        "Launch $OWIF token",
        "Build the olf community",
        "Deploy memes arsenal",
        "Get listed on DEX"
      ]
    },
    {
      phase: "Phase 2", 
      title: "The Hat Revolution",
      status: "current",
      items: [
        "1000 olf holders",
        "CoinGecko & CMC listings",
        "Olf hat NFT collection",
        "Celebrity olf endorsements"
      ]
    },
    {
      phase: "Phase 3",
      title: "World Domination",
      status: "upcoming",
      items: [
        "10,000 olf army",
        "Major CEX listings",
        "Olf hat merchandise",
        "Olf dog sanctuary funding"
      ]
    },
    {
      phase: "Phase 4",
      title: "The Olf Legacy",
      status: "future",
      items: [
        "100,000 olf believers",
        "Cross-chain expansion",
        "Olf hat metaverse",
        "Retirement home for all dogs"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-500";
      case "current": return "bg-primary";
      case "upcoming": return "bg-blue-500";
      default: return "bg-muted";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed": return <Badge className="bg-green-500 hover:bg-green-600">✅ Complete</Badge>;
      case "current": return <Badge className="glow">🚀 In Progress</Badge>;
      case "upcoming": return <Badge variant="secondary">⏳ Coming Soon</Badge>;
      default: return <Badge variant="outline">🔮 Future</Badge>;
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Roadmap 🗺️
          </h2>
          <p className="text-xl text-muted-foreground">
            The journey from olf to legendary
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-muted rounded-full"></div>
          
          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-6 h-6 rounded-full ${getStatusColor(item.status)} border-4 border-background shadow-lg`}></div>
                </div>
                
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <Card className="bg-card/90 backdrop-blur hover:scale-105 transition-transform duration-300 border-2 border-primary/20">
                    <CardContent className="p-8">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-2xl font-bold">{item.phase}</h3>
                        {getStatusBadge(item.status)}
                      </div>
                      <h4 className="text-xl font-semibold text-primary mb-4">{item.title}</h4>
                      <ul className="space-y-2">
                        {item.items.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-center space-x-2">
                            <span className="text-lg">
                              {item.status === "completed" ? "✅" : 
                               item.status === "current" ? "🔄" : "⭐"}
                            </span>
                            <span className={item.status === "completed" ? "line-through opacity-70" : ""}>
                              {task}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Card className="bg-primary/20 border-primary/40 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg">
                To prove that being olf doesn't mean being forgotten. 
                Every great meme coin needs its day, and today is ours!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;