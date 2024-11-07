import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
    LinkedinIcon,
    GlobeIcon,
    BookOpenIcon,
    Building2Icon,
    TagIcon,
} from "lucide-react";
import { EditButton } from "./edit-button";

export default function InvestorProfile() {
    const investor = {
        name: "John Doe",
        photo: "/placeholder.svg?height=200&width=200",
        bio: "Experienced angel investor with a passion for tech startups. 15+ years in venture capital, focusing on AI, blockchain, and sustainable energy solutions.Experienced angel investor with a passion for tech startups. 15+ years in venture capital, focusing on AI, blockchain, and sustainable energy solutions.Experienced angel investor with a passion for tech startups. 15+ years in venture capital, focusing on AI, blockchain, and sustainable energy solutions.Experienced angel investor with a passion for tech startups. 15+ years in venture capital, focusing on AI, blockchain, and sustainable energy solutions.Experienced angel investor with a passion for tech startups. 15+ years in venture capital, focusing on AI, blockchain, and sustainable energy solutions.Experienced angel investor with a passion for tech startups. 15+ years in venture capital, focusing on AI, blockchain, and sustainable energy solutions.Experienced angel investor with a passion for tech startups. 15+ years in venture capital, focusing on AI, blockchain, and sustainable energy solutions.Experienced angel investor with a passion for tech startups. 15+ years in venture capital, focusing on AI, blockchain, and sustainable energy solutions.Experienced angel investor with a passion for tech startups. 15+ years in venture capital, focusing on AI, blockchain, and sustainable energy solutions.",
        investments: [
            { name: "TechCorp", industry: "AI" },
            { name: "BlockChain Solutions", industry: "Blockchain" },
            { name: "GreenEnergy", industry: "Sustainable Energy" },
            { name: "DataViz", industry: "Data Analytics" },
        ],
        interests: [
            "Artificial Intelligence",
            "Blockchain",
            "Sustainable Energy",
            "FinTech",
            "HealthTech",
        ],
        portfolioLinks: [
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/johndoe",
                icon: LinkedinIcon,
            },
            {
                name: "Crunchbase",
                url: "https://www.crunchbase.com/person/johndoe",
                icon: BookOpenIcon,
            },
            {
                name: "Personal Website",
                url: "https://www.johndoe.com",
                icon: GlobeIcon,
            },
        ],
    };

    return (
        <div className="w-screen mx-auto px-4 pt-8 pb-20 h-auto">
            <Card className="max-w-4xl mx-auto">
                <CardHeader className="flex flex-col sm:flex-row items-center gap-6 pb-6">
                    <Avatar className="w-32 h-32">
                        <AvatarImage src={investor.photo} alt={investor.name} />
                        <AvatarFallback>
                            {investor.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                        </AvatarFallback>
                    </Avatar>
                    <div className="text-center sm:text-left">
                        <div className="flex justify-between">
                            <CardTitle className="text-3xl font-bold mb-2">
                                {investor.name}
                            </CardTitle>
                            <div>
                                <Button size={"sm"}>
                                    <div className="flex">
                                        Edit
                                        <EditButton />
                                    </div>
                                </Button>
                            </div>
                        </div>
                        <p className="text-muted-foreground max-w-2xl">
                            {investor.bio}
                        </p>
                    </div>
                </CardHeader>
                <CardContent className="grid gap-6">
                    <section>
                        <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Building2Icon className="w-5 h-5" />
                            Investments
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {investor.investments.map((investment, index) => (
                                <Card key={index}>
                                    <CardContent className="p-4">
                                        <CardTitle className="text-lg mb-1">
                                            {investment.name}
                                        </CardTitle>
                                        <p className="text-sm text-muted-foreground">
                                            {investment.industry}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <Separator />

                    <section>
                        <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <TagIcon className="w-5 h-5" />
                            Interests
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {investor.interests.map((interest, index) => (
                                <Badge key={index} variant="secondary">
                                    {interest}
                                </Badge>
                            ))}
                        </div>
                    </section>

                    <Separator />

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            Portfolio Links
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            {investor.portfolioLinks.map((link, index) => (
                                <Button key={index} variant="outline" asChild>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        <link.icon className="w-5 h-5" />
                                        {link.name}
                                    </a>
                                </Button>
                            ))}
                        </div>
                    </section>
                </CardContent>
            </Card>
        </div>
    );
}
