import { Card, CardContent } from "@/components/ui/card";

const PartnersSection = () => {
  const partners = [
    { name: "DEX Partner 1", logo: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=100&h=100&fit=crop" },
    { name: "DEX Partner 2", logo: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=100&h=100&fit=crop" },
    { name: "DEX Partner 3", logo: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=100&h=100&fit=crop" },
    { name: "DEX Partner 4", logo: "https://images.unsplash.com/photo-1634733988138-bf2c3a2a13fa?w=100&h=100&fit=crop" },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            OUR PARTNERS
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <Card key={index} className="bg-card hover:bg-card/80 transition-all duration-300 hover-lift hover:scale-105">
              <CardContent className="p-8 text-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="w-16 h-16 mx-auto rounded-lg object-cover transition-transform duration-300 hover:rotate-12"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;