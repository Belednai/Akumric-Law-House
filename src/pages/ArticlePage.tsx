import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, Clock, User, BookOpen, Share2, Download } from "lucide-react";

const ArticlePage = () => {
  const { slug } = useParams();
  const [isPrintMode, setIsPrintMode] = useState(false);

  // Article data - in a real app, this would come from an API or CMS
  const article = {
    id: "fictitious-bias",
    title: "Fictitious Bias: The Critical Role of Negative Critics in Hindering Justice Delivery and The Paramount Importance of Respecting the Authority of Courts in South Sudan",
    author: "Reech M.D Malual",
    authorTitle: "PhD Student in Constitutional Law, Parul University, Vadodara, Gujarat, India",
    authorEmail: "rmalual@gmail.com",
    date: "2022-09-22",
    category: "Legal Opinions",
    readTime: "25 min read",
    tags: ["Constitutional Law", "Judicial Independence", "South Sudan", "Rule of Law", "Justice System"],
    abstract: `This paper examines the critical importance of respecting the Supreme Court of South Sudan's authority for the nation's stability and democratic consolidation. It begins by acknowledging the constitutional provisions for judicial independence while highlighting the practical challenges and the thin line separating it from executive influence in emerging democracies. The opinion underscores why belief in a functional justice system is fundamental for societal order, peacebuilding, and the protection of rights, especially for a country emerging from prolonged conflict. Furthermore, it details the severe dangers of alienating the justice system, including the erosion of the rule of law, increased instability, impunity, and hindered development. The paper recognizes the pivotal role of judicial leadership, exemplified by a Chief Justice's high integrity, in fostering public trust. It emphasizes the necessity of appreciating due court proceedings, such as fair trials and litigation, as a cornerstone of statehood, contrasting this with arbitrary detention. Finally, the acquittal of the SPLM Leaders in 2014 is presented as a significant historical example demonstrating the court's capacity for independence in a highly charged political environment, reinforcing the argument that a strong, respected judiciary is indispensable for a peaceful and prosperous South Sudan.`,
    content: {
      introduction: `The establishment of the Republic of South Sudan in 2011 marked a new chapter for a people who had endured protracted conflict. With statehood came the imperative to build robust institutions capable of upholding the rule of law and ensuring justice for all citizens. At the apex of this institutional framework stands the Supreme Court, whose authority is fundamental to the nation's stability, democratic governance, and the protection of individual rights. Respecting its decisions and independence is not merely a legal obligation but a societal necessity for the consolidation of peace and development in South Sudan. The Transitional Constitution of the Republic of South Sudan, 2011, designates the Supreme Court as the custodian of both the national and state constitutions. Despite this constitutional provision, the judiciary in many nascent democracies, including South Sudan, frequently faces considerable challenges in practical implementation, such as inadequate funding and political interference, which can undermine its operational autonomy and public trust (Bosire, 2024).`,
      
      sections: [
        {
          title: "The Role of Negative Critics in Justice Delivery in South Sudan",
          content: `In any nascent democracy, particularly one emerging from protracted conflict like South Sudan, the role of critical voices in shaping public discourse around state institutions, including the judiciary, is complex and multifaceted. When we speak of "negative critics" in the context of justice delivery, we generally refer to individuals, civil society organizations, media, or members of the public who highlight perceived shortcomings, biases, corruption, or failures within the judicial system. While often viewed with apprehension, their engagement can be both constructive and destructive, profoundly influencing the trajectory of justice delivery in South Sudan.`,
          subsections: [
            {
              title: "The Landscape of Justice in South Sudan and the Emergence of Criticism",
              content: `South Sudan's justice system operates within a challenging environment. The Transitional Constitution of the Republic of South Sudan, 2011, enshrines the principles of judicial independence and fair trial. However, there is a recognized gap between these constitutional ideals and the practical realities, with concerns about informal interference from the executive and political actors influencing judicial processes (Llanos et al., 2015). These vulnerabilities naturally give rise to scrutiny and criticism.`
            },
            {
              title: "The Constructive Role of Critical Voices",
              content: `When exercised responsibly and based on credible evidence, "negative critics" can play a vital, constructive role in strengthening justice delivery:

1. Promoting Accountability and Transparency: Legitimate criticism compels the judiciary and related institutions to confront their weaknesses. By exposing corruption, delays in justice, or undue influence, critics can galvanize efforts toward greater accountability and transparency. The call for judicial accountability is essential for both judicial independence and the overall quality of justice.

2. Enhancing Public Trust: Constructive criticism can ultimately build public trust. When concerns raised by critics are addressed through reform, it demonstrates the system's capacity for self-correction and responsiveness to public needs. Public trust and confidence in the courts and judiciary are central tenets of the Rule of Law and help maintain the legitimacy and effectiveness of the criminal justice system.

3. Driving Reforms: Critics often highlight areas where legal frameworks are inadequate or where judicial practices deviate from international standards or constitutional mandates. This can instigate necessary legal and institutional reforms. For instance, the Human Rights Commission in South Sudan has the mandate to express opinions and advise government organs on human rights issues, which inherently involves scrutinizing aspects of justice delivery.

4. Safeguarding Judicial Independence: Paradoxically, critics can act as a check against executive overreach. By drawing attention to instances of political interference, they can create public pressure that helps protect the judiciary's constitutional independence. Public awareness of judicial behavior can also limit the effective exercise of review by courts lacking strong public support.`
            },
            {
              title: "The Destructive Potential of Unfounded Criticism",
              content: `Conversely, "negative critics" can also undermine the very justice system they purport to scrutinize, especially when their critiques are:

1. Unfounded or Politically Motivated: Criticism that lacks factual basis or is driven purely by political agendas can erode public confidence in the judiciary without contributing to genuine improvement (Aydın-Çakır & Akarçay, 2025; Moliterno & Čuroš, 2021). Public opinion and media influence judges in their decision-making (Hanych et al., 2023). When judges are perceived as using a politicized decision-making process, rather than a principled one, the acceptance of their decisions is determined by agreement with policy implications, which can be detrimental to the rule of law (Woodson, 2015).

2. Undermining Legitimacy: In a fragile institutional context, weakening trust through unfounded attacks can be particularly detrimental to the functioning of the state and its ability to maintain order. The popular perception of the judicial system is its ultimate safeguard or primary source of vulnerability, and an institution's legitimacy depends on the opinions of ordinary citizens (Joński, 2021; Meernik, 2014). When public trust declines, it can reduce the willingness of parties to resolve disputes through the courts and abide by court decisions (Green & Roiphe, 2024).

3. Hindering Judicial Functioning: Constant, aggressive, or personal attacks on judges can deter qualified individuals from serving in the judiciary and may lead existing judges to become overly cautious or fearful, impairing their ability to render impartial justice. Unethical behavior among judges, when publicized, also serves as a signal to the public about potential threats to individual rights (Baker & Canelo, 2024).`
            },
            {
              title: "Striking a Balance",
              content: `The optimal role of "negative critics" in South Sudan's justice delivery lies in a delicate balance. It requires critics to operate with a strong commitment to accuracy, objectivity, and constructive engagement. The Transitional Constitution of the Republic of South Sudan guarantees freedom of expression and media, but it also explicitly states that all media shall abide by professional ethics. Simultaneously, the judiciary and the government must cultivate an environment that tolerates and responds to legitimate criticism, viewing it as a necessary feedback mechanism for growth and improvement. This approach helps in building trust, as negative experiences in a particular court may be generalized to the entire judicial system; conversely, measures adopted to increase confidence in specific courts may heighten confidence generally. Ultimately, for justice delivery to flourish in South Sudan, there must be an ongoing dialogue between the judiciary, the public, and critical voices. When criticism is channeled effectively, it can serve as a potent force for good, driving the continuous evolution of a justice system that is truly independent, accountable, and deserving of the South Sudanese people's trust.`
            }
          ]
        },
        {
          title: "Acknowledging Current Gaps and The Delicate Balance of Judicial Independence from The Executive",
          content: `While foundational documents of South Sudan, such as the Transitional Constitution, explicitly enshrine judicial independence by stating that "Justices and Judges shall be independent in their judicial work, and shall perform their functions without interference," the reality often presents a more complex picture. Academic discussions highlight a gap between these constitutional provisions for judicial independence and the practical challenges faced by the judiciary. A significant concern is the potential for executive influence. In many new democracies, particularly those with weak institutional oversight, democratic principles like independent legislative and judicial oversight can become subordinate to the political survival of the ruling regime. This creates a "thin line" where the judiciary's ability to act without fear or favor, as mandated by the Constitution, can be compromised. Furthermore, issues such as weak state institutions, corruption, and nepotism contribute to an environment where the very institutions meant to protect citizens and the state can paradoxically become a threat to human and national security. Political actors can engage in informal interference once judges are on the bench, further eroding public trust and the perception of independence. Addressing these gaps requires a sustained commitment to strengthening institutional safeguards and fostering a culture that genuinely respects judicial autonomy.`
        },
        {
          title: "Why Belief in a Justice System?",
          content: `A foundational belief in the justice system is crucial, representing society's dedication to equity, order, and the protection of fundamental rights. A well-functioning and respected judiciary serves as the ultimate guarantor of impartial dispute resolution and the principle of equality before the law for all individuals, regardless of their standing. For South Sudan, navigating the aftermath of prolonged conflict, the justice system transcends mere punishment; it is an essential instrument for peacebuilding, fostering reconciliation, and cultivating national unity. The preamble of the Transitional Constitution embodies this vision, articulating a commitment to establishing a society grounded in justice, equality, human rights, and the rule of law. When citizens have confidence in their justice system, they are more inclined to seek resolutions through legal channels, thereby eschewing violence or vigilantism. This trust underpins societal compacts and facilitates economic development by ensuring the predictability of legal frameworks. The Constitution mandates that "justice shall be done to all irrespective of their social, political or economic status, gender, religion or beliefs," and crucially stipulates that "justice shall not be delayed." These tenets are vital for cultivating a stable and prosperous society where rights are safeguarded and obligations are met.`
        },
        {
          title: "The Detrimental Consequences of Undermining The Judicial System",
          content: `The alienation or erosion of the justice system can precipitate severe repercussions for any state, particularly for emerging nations such as South Sudan. A decline in the judiciary's authority or public confidence can destabilize the fundamental structures of the state.

• Undermining the Rule of Law: The disregard for judicial pronouncements or interference in legal proceedings directly compromises the rule of law, potentially fostering an environment of arbitrary governance and human rights violations where laws are applied selectively or disregarded.

• Exacerbating Instability and Conflict: Within contexts prone to conflict, a compromised justice system can intensify societal tensions. The absence of legitimate recourse for grievances can lead to the festering of discontent, potentially culminating in social unrest, renewed violence, and a relapse into cyclical conflict. Post-conflict governance frequently struggles to re-establish the rule of law, often reverting to pre-conflict conditions if institutional frameworks are weak.

• Fostering Impunity: The alienation of the judiciary cultivates a climate of impunity, enabling those in positions of power or influence to operate outside legal boundaries without accountability. This perpetuates injustice and breeds public resentment and distrust in governance. Moreover, inequitable state systems that favor the affluent and connected can reinforce barriers to justice, discouraging communities from engaging with formal legal channels.

• Impeding Development: A judiciary characterized by weakness and a lack of public trust deters both domestic and foreign investment by failing to provide assurance for contracts or the protection of property rights. This economic stagnation hinders growth and efforts aimed at poverty reduction. The effective implementation of rule of law reforms is inherently a political undertaking that affects power dynamics, especially in post-conflict settings. Consequently, proactive measures are essential to safeguard the justice system from alienation and to ensure its operational independence.`
        },
        {
          title: "The Personal Qualities of The Chief Justice: A Matter of High Integrity Prior to Appointment",
          content: `The effectiveness and credibility of the Supreme Court are significantly influenced by its leadership. A Chief Justice who is perceived as highly ethical and dedicated to the principles of justice plays a crucial role in shaping public confidence and the judiciary's perceived independence. The example of Dr. Benjamin Bak, PhD, demonstrating exceptional integrity as a judge before assuming the Chief Justice role, illustrates the essential principled leadership required of the judiciary. This integrity acts as a critical stabilizing force for the institution, helping to uphold professional standards and foster trust among judicial staff and the general populace. Consequently, this perception of ethical leadership enhances the judiciary's moral authority, empowering it to function as a truly impartial arbiter and a protector of the Constitution, thereby fulfilling its constitutional obligation to dispense justice impartially and without undue influence.`
        },
        {
          title: "Appreciating The Importance of Due Court Proceedings",
          content: `The people of South Sudan have endured rebellions for over fifty years. With the establishment of a sovereign nation, it must be recognized that a system, including a judiciary, is in place. Consequently, the right to a fair trial and the right to litigation should be observed. Trying Dr. Riek Machar before a competent court of law, for instance, is preferable to arbitrary detention without trial.

The long and arduous history of conflict in South Sudan underscores the urgent need for established legitimate state institutions. After decades of struggle, the very existence of a sovereign nation necessitates adherence to established systems, with judiciary playing a central role. Appreciating formal court proceedings, including the fundamental rights to a fair trial and litigation, signifies an acknowledgment that statehood entails a commitment to legal processes over arbitrary actions and against impunity. The Transitional Constitution explicitly guarantees "Fair Trial" and the "Right to Litigation" as fundamental rights.

The scenario of Dr. Riek Machar, or any individual, facing trial before a competent court of law exemplifies this principle. Such a process, regardless of the outcome, affirms the state's dedication to due process and the rule of law. It reinforces that legal recourse is the legitimate path for addressing alleged wrongdoings, in stark contrast to arbitrary detention without trial, which is anathema to any just system. A fair trial necessitates compliance with principles of equality, non-discrimination, and an adversarial process, with the court justifying its decision. This approach, while sometimes perceived as slow or imperfect, is indispensable for building a society where justice is served transparently and credibly, reducing the likelihood of grievances escalating into further conflict.`
        },
        {
          title: "The 2014 SPLM Leaders Case: An Instance of Judicial Independence",
          content: `The 2014 "Government of South Sudan versus Pagan Amum and others" case, commonly known as the SPLM Leaders case, is a notable instance illustrating the independence of the South Sudanese judiciary. In this high-profile political matter, the court acquitted the G10, finding them not guilty of treason and charges associated with an attempted coup. The defendants, prominent members of the ruling SPLM, were apprehended following an alleged coup attempt in December 2013. The judiciary's decision to acquit individuals charged with treason, especially amidst significant political tensions, highlights its adherence to legal principles irrespective of political pressure. This verdict underscores the court's function as an impartial arbiter and a crucial mechanism for governmental oversight, demonstrating a commitment to dispensing justice without bias or coercion, in accordance with constitutional mandates. Such judicial resilience is vital for cultivating public trust and reinforcing the perception that the justice system can deliver equitable outcomes, even in sensitive political circumstances, thereby affirming the rule of law within the nation.`
        }
      ],
      conclusion: `The Supreme Court of South Sudan is crucial for the nation's survival, stability, and democratic principles. While its constitutional framework supports impartial judiciary, executive influence and the risk of "fabricated bias" continually challenge its independence. Constructive criticism, based on evidence and aimed at reform, promotes accountability and transparency, helping to fix shortcomings and build public trust. However, unfounded or politically motivated attacks that spread "fabricated bias" severely damage public confidence, undermine the judiciary's legitimacy, and hinder impartial functioning. This manufactured doubt can lead to judicial decisions, even sound ones, being dismissed as tainted, further destabilizing the rule of law. This is currently South Sudan's greatest challenge, especially in a landmark case involving the First Vice President and a company. Belief in the system requires leaders of integrity, such as a Chief Justice with an impeccable record, and a societal commitment to fair legal processes and discerning criticism. South Sudan's history demonstrates that a strong, independent judiciary, willing to uphold justice against powerful forces and resist both actual and "fabricated bias," is the most robust defense against arbitrary rule and renewed conflict. This principle necessitates that no individual should be detained without due process. For figures like Dr. Riek Machar, fair trials and litigation rights are far more principled than arbitrary detention. Adherence to due process unequivocally respects the system and actively prevents the arbitrary actions that disrupt peace and justice. Respecting the Supreme Court's authority fundamentally means fostering an environment where constructive criticism drives improvement, "fabricated bias" is resolutely rejected, and due process is rigorously prioritized. Ultimately, this commitment represents a vital investment in a peaceful, just, and prosperous South Sudan, founded upon an independent judiciary that is free from undue influence and malicious fabrication.`,
      references: [
        "The Transitional Constitution of the Republic of South Sudan, 2011.",
        "Chan, W. D. A.. Comparative Analysis of Judicial Independence in South Sudan and India. SSRN Electronic Journal.",
        "Adeba, B.. Oversight mechanisms, regime security, and intelligence service autonomy in South Sudan. African Security Review, 29, 170–186.",
        "Gandur, M., Chewning, T. K., & Driscoll, A.. Awareness of Executive Interference and the Demand for Judicial Independence: Evidence from Four Constitutional Courts (Gandur, Chewning and Driscoll, 2025).",
        "Llanos, M., Weber, C. T., Heyl, C., Gherghina, S., Mignone, E., & Perrotta, L. Informal interference in the judiciary in new democracies: a comparison of six African and Latin American cases. Democratization, 22, 659–680.",
        "Haggard, S., & Tiede, L. B.. The Revival of the Rule of Law in the Wake of Civil War. San Diego Legal Studies Paper, 12-094.",
        "Haggard, S., & Tiede, L. B.. The Rule of Law in Post-Conflict Settings: The Empirical Record. Journal of Conflict Resolution, 57, 399–423.",
        "Jean, S.. Leadership and the rule of law in conflict and post-conflict societies. International Journal of Public Leadership, 15, 130–136.",
        "Sesay, M.. Hijacking the rule of law in post conflict environments. Journal of Intervention and State building, 12, 481–498.",
        "Johnson, D. H.. Briefing: The crisis in South Sudan. African Affairs, 113, 302–311.",
        "Andrusyshyn, B. I., Bilozorov, Y., Оpоlska, N., Kupina, L. F., & Tokarchuk, O. V.. Right to a Fair Trial in Extraordinary Conditions. The Age of Human Rights Journal, 20, e7539.",
        "Llanos, M., Weber, C. T., Heyl, C., Gherghina, S., Mignone, E., & Perrotta, L.. Informal interference in the judiciary in new democracies: a comparison of six African and Latin American cases. Democratization, 22, 659–680 (Akkas, 2002).",
        "Sarkar, A. A.. Judicial independence and accountability: a comparative study of contemporary Bangladesh experience. Commonwealth Law Bulletin, 28, 497–514 (Regalado and Sun, 2024).",
        "Regalado, J., & Sun, I. Y.. Trust in Legal Institutions: An Examination of the Philippines. Asian Journal of Criminology, 19, 239–256.",
        "Wallace, A., & Goodman‐Delahunty, J.. Measuring Trust and Confidence in Courts. Journal of Applied Psychology and Law, 5, 103–128 (Wallace and Goodman‐Delahunty, 2021).",
        "The Southern Sudan Human Rights Commission Act (\"The Southern Sudan Human Rights Commission Act,\" 2009).",
        "Krehbiel, J.. Public Awareness and the Behavior of Unpopular Courts. Political Research Quarterly, 73, 162–176 (Moliterno and Čuroš, 2021).",
        "Moliterno, J. E., & Čuroš, P.. Recent Attacks on Judicial Independence: The Vulgar, the Systemic, and the Insidious. University of Richmond Law Review, 56, 629–677 (Aydın‐Çakır and Akarçay, 2025).",
        "Aydın‐Çakır, A., & İlter Akarçay, E.. When do governments attack the judiciary? The explanatory power of political corruption. Journal of Law and Courts (Hanych, Smekal and Benák, 2023).",
        "Hanych, M., Smekal, H., & Benák, J.. The Influence of Public Opinion and Media on Judicial Decision-Making: Elite Judges' Perceptions and Strategies. Sociological Research Online, 28, 334–352 (Woodson, 2015).",
        "Woodson, B.. Politicization and the Two Modes of Evaluating Judicial Decisions. Law & Social Inquiry, 40, 980–1004 (Joński, 2021).",
        "Joński, K.. Public Confidence in the Judiciary and the Police – Does Respondents Internalize Montesquieu's Ideas?. Political Psychology, 42, 825–842 (Meernik, 2014).",
        "Meernik, J.. Explaining public opinion on international criminal justice. International Criminal Justice Review, 24, 141–157 (Green and Roiphe, 2024).",
        "Green, B. A., & Roiphe, R.. Public Confidence, Judges, and Politics on and off the Bench. Cornell Law Review (Baker and Canelo, 2024).",
        "Baker, M. N., & Canelo, K. S.. Judges Behaving Badly: Judicial Misconduct and a Threat to Rights. St. John's Law Review (Neave, 2021).",
        "Neave, M.. Building Trust: Can Courts Learn From Royal Commissions?. Adelaide Law Review, 42, 193–216"
      ]
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handlePrint = () => {
    setIsPrintMode(true);
    setTimeout(() => {
      window.print();
      setIsPrintMode(false);
    }, 100);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.abstract,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className={`min-h-screen bg-background ${isPrintMode ? 'print-mode' : ''}`}>
      {!isPrintMode && <Header />}
      
      <div className={`${!isPrintMode ? 'pt-16' : ''}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          {!isPrintMode && (
            <div className="mb-6">
              <Button 
                variant="ghost" 
                onClick={() => window.history.back()}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Articles
              </Button>
            </div>
          )}

          {/* Article Header */}
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardContent className="p-8">
                {/* Category and Meta */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <Badge className="bg-purple-100 text-purple-800 border-purple-200">
                    <BookOpen className="h-3 w-3 mr-1" />
                    {article.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readTime}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(article.date)}
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-brand mb-6 leading-tight">
                  {article.title}
                </h1>

                {/* Author Info */}
                <div className="mb-6 p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <User className="h-5 w-5 text-brand" />
                    <span className="font-semibold text-lg">{article.author}</span>
                  </div>
                  <p className="text-muted-foreground mb-1">{article.authorTitle}</p>
                  <p className="text-sm text-muted-foreground">Email: {article.authorEmail}</p>
                </div>

                {/* Action Buttons */}
                {!isPrintMode && (
                  <div className="flex flex-wrap gap-3 mb-6">
                    <Button onClick={handleShare} variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                    <Button onClick={handlePrint} variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Print/PDF
                    </Button>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Abstract */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-brand mb-4">Abstract</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {article.abstract}
                </p>
              </CardContent>
            </Card>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-brand mb-4">1. Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {article.content.introduction}
                  </p>
                </CardContent>
              </Card>

              {/* Main Sections */}
              {article.content.sections.map((section, sectionIndex) => (
                <Card key={sectionIndex} className="mb-8">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-brand mb-4">
                      {sectionIndex + 2}. {section.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {section.content}
                    </p>
                    
                    {/* Subsections */}
                    {section.subsections && section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex} className="mb-6">
                        <h3 className="text-xl font-semibold text-brand mb-3">
                          ({String.fromCharCode(65 + subIndex)}) {subsection.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {subsection.content}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}

              {/* Conclusion */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-brand mb-4">9. Conclusions</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {article.content.conclusion}
                  </p>
                </CardContent>
              </Card>

              {/* References */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-brand mb-6">References</h2>
                  <div className="space-y-3">
                    {article.content.references.map((ref, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground leading-relaxed">
                        {idx + 1}. {ref}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {!isPrintMode && <Footer />}

      <style jsx>{`
        @media print {
          .print-mode {
            background: white !important;
          }
          .print-mode .container {
            max-width: none !important;
            padding: 0 !important;
          }
          .print-mode .prose {
            font-size: 12pt !important;
            line-height: 1.6 !important;
          }
          .print-mode h1, .print-mode h2, .print-mode h3 {
            page-break-after: avoid;
          }
          .print-mode .card {
            box-shadow: none !important;
            border: 1px solid #e5e7eb !important;
            margin-bottom: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ArticlePage;
