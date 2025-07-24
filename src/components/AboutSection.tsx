import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">About Akumric Law House</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Akumric Law House (ALH) is a leading law firm based in Juba, Republic of South Sudan, with a legacy dating back to 1987. Founded by Justice Mareu D. Malual-Akumric, the firm is now managed by the 2nd and 3rd generation of the Malual-Akumric family. ALH is recognized for its local and regional influence across Eastern Africa, providing specialized legal services to major corporations, NGOs, and international organizations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-brand mb-2">Our Legacy</h3>
              <p className="text-muted-foreground mb-4">
                Established in 1987 by Justice Mareu D. Malual-Akumric, ALH has grown through generations, maintaining a strong commitment to justice, integrity, and advocacy. Justice Mareu’s distinguished career included serving as Director of Public Prosecution, State Minister, and President of the High Court of South Sudan until 2020.
              </p>
              <p className="text-muted-foreground">
                Today, ALH is managed by the 2nd and 3rd generation of the Malual-Akumric family, continuing a tradition of legal service, advocacy, and innovation. The firm has played a pivotal role in shaping the legal landscape of South Sudan, advising on landmark cases, legislative drafting, and supporting both public and private sector clients.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-brand mb-2">Practice Areas</h3>
              <ul className="list-disc pl-5 text-muted-foreground mb-4">
                <li>Oil & Gas</li>
                <li>Mining</li>
                <li>Commercial Law</li>
                <li>Taxation & Employment Law</li>
                <li>Investment Law</li>
                <li>Alternative Dispute Resolution (Lobby, Mediation, Negotiation, Arbitration)</li>
                <li>Civil & Criminal Litigation</li>
                <li>Real Estate</li>
                <li>Legal Drafting (Opinions, Bills, Constitutions)</li>
                <li>Media & Telecoms Law</li>
                <li>Public Relations & Lobbying</li>
              </ul>
              <h3 className="text-xl font-bold text-brand mb-2">Reputation</h3>
              <p className="text-muted-foreground">
                ALH is highly regarded as one of South Sudan’s premier law chambers, known for its ethical, client-focused, and pragmatic legal services. The firm’s lawyers possess deep expertise in the South Sudanese market, making them trusted advisors for complex legal matters.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-brand mb-4">Our Clients</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            ALH serves a diverse clientele, including major corporations, NGOs, and international organizations such as Trinity Energy, UNESCO South Sudan, UNDP South Sudan, Defy Hate Now (East Africa), MGurush, Gourmet Services Co. Ltd, Specialist Services Ltd, Easy Services Co. Ltd (ESICO), Yo’Care South Sudan, Rak Media, and Screen of Rights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;