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
    ArrowUpRight,
    ChartNoAxesCombined,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function InvestorProfile({ isOwn = true }) {
    const investor = {
        name: "John Doe",
        photo: "/john.png",
        bio: "Experienced angel investor with a passion for tech startups. 15+ years in venture capital, focusing on AI, blockchain, and sustainable energy solutions.Experienced angel investor with a passion for tech startups. 15+ years in venture capital, focusing on AI, blockchain, and sustainable energy solutions.Experienced angel investor with a passion for tech startups. 15+ years in venture capital, focusing on AI, blockchain, and sustainable energy solutions.Experienced angel investor with a passion for tech startups.",
        totalInvested: 1000000,
        averageInvestment: 50000,
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

    const navigate = useNavigate();

    return (
        <div className="w-[80%] mx-auto px-4 py-8 h-auto">
            <Card className="w-full mx-auto">
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
                    <div className="text-center sm:text-left w-full">
                        <div className="flex justify-between">
                            <CardTitle className="text-3xl font-bold mb-2 flex justify-between w-full">
                                {investor.name}
                                <div>
                                    <Button
                                        size={"sm"}
                                        onClick={() => {
                                            if (isOwn) {
                                                navigate(
                                                    "/investor/edit"
                                                );
                                            }
                                        }}
                                    >
                                        <div className="flex text-base items-center">
                                            {isOwn ? "Edit" : "Connect"}
                                            <ArrowUpRight className="w-5 h-5 ml-1" />
                                        </div>
                                    </Button>
                                </div>
                            </CardTitle>
                        </div>
                        <p className="text-muted-foreground ">{investor.bio}</p>
                    </div>
                </CardHeader>
                <CardContent className="grid gap-6">
                    <section>
                        <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <ChartNoAxesCombined className="w-5 h-5" />
                            Portfolio Highlights
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Card>
                                <CardContent className="p-4">
                                    <CardTitle className="text-lg mb-1">
                                        Average Investment Size
                                    </CardTitle>
                                    <p className="text-muted-foreground">
                                        $
                                        {investor.averageInvestment.toLocaleString()}
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-4">
                                    <CardTitle className="text-lg mb-1">
                                        Total Amount Invested
                                    </CardTitle>
                                    <p className="text-muted-foreground">
                                        $
                                        {investor.totalInvested.toLocaleString()}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>
                    <Separator />
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
