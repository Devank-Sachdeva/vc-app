import { Button } from "@/components/ui/button";
import {
    ChevronRight,
    Lightbulb,
    DollarSign,
    Search,
    Users,
    Star,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function App() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <Link className="flex items-center justify-center" to="#">
                    <Lightbulb className="h-6 w-6 text-primary" />
                    <span className="ml-2 text-2xl font-bold text-primary">
                        VentureConnect
                    </span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4"
                        to="#"
                    >
                        How It Works
                    </Link>
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4"
                        to="#"
                    >
                        For Ventures
                    </Link>
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4"
                        to="#"
                    >
                        For Investors
                    </Link>
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4"
                        to="#"
                    >
                        About
                    </Link>
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-10">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-7xl/none">
                                    Connecting Visionary Startups with Strategic
                                    Investors
                                </h1>
                                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                                    Discover perfect matches in your domain.
                                    Startups find the right investors, and
                                    investors uncover promising opportunities.
                                </p>
                            </div>
                            <div className="w-full max-w-sm space-y-2">
                                <Button
                                    type="submit"
                                    className="w-1/2"
                                    onClick={() => navigate("/auth")}
                                >
                                    Get Started
                                    <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                            How It Works
                        </h2>
                        <div className="grid gap-10 sm:grid-cols-2 md:gap-16">
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <DollarSign className="h-12 w-12 text-primary" />
                                <h3 className="text-xl font-bold">
                                    For Investors
                                </h3>
                                <p className="text-muted-foreground">
                                    Discover curated startups in your domain of
                                    interest. Our AI-powered matching system
                                    ensures you see the most relevant
                                    opportunities.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <Lightbulb className="h-12 w-12 text-primary" />
                                <h3 className="text-xl font-bold">
                                    For Startups
                                </h3>
                                <p className="text-muted-foreground">
                                    Connect with investors who understand your
                                    industry. Pitch your ideas to a targeted
                                    audience and increase your chances of
                                    funding.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                            Key Features
                        </h2>
                        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:gap-16">
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <Search className="h-10 w-10 text-primary" />
                                <h3 className="text-xl font-bold">
                                    Smart Matching
                                </h3>
                                <p className="text-muted-foreground">
                                    Our AI algorithm connects you with the most
                                    relevant partners based on industry, stage,
                                    and investment criteria.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <Users className="h-10 w-10 text-primary" />
                                <h3 className="text-xl font-bold">
                                    Direct Communication
                                </h3>
                                <p className="text-muted-foreground">
                                    Facilitate seamless interactions between
                                    startups and investors through our secure
                                    messaging platform.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <Star className="h-10 w-10 text-primary" />
                                <h3 className="text-xl font-bold">
                                    Verified Profiles
                                </h3>
                                <p className="text-muted-foreground">
                                    All users undergo a verification process to
                                    ensure credibility and build trust within
                                    our community.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                            Success Stories
                        </h2>
                        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <img
                                    alt="Venture founder"
                                    className="rounded-full"
                                    height="100"
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "100/100",
                                        objectFit: "cover",
                                    }}
                                    width="100"
                                />
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold">
                                        Sarah Johnson, TechInnovate CEO
                                    </h3>
                                    <p className="text-muted-foreground">
                                        "VentureConnect helped us find the
                                        perfect investor who not only provided
                                        funding but also valuable industry
                                        insights. It's been a game-changer for
                                        our growth."
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <img
                                    alt="Investor"
                                    className="rounded-full"
                                    height="100"
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "100/100",
                                        objectFit: "cover",
                                    }}
                                    width="100"
                                />
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold">
                                        Michael Chen, Venture Capital Partner
                                    </h3>
                                    <p className="text-muted-foreground">
                                        "As an investor, VentureConnect has
                                        streamlined our deal flow. We've
                                        discovered innovative startups that
                                        align perfectly with our investment
                                        thesis."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-muted-foreground">
                    © 2024 VentureConnect. All rights reserved.
                </p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link
                        className="text-xs hover:underline underline-offset-4"
                        to="#"
                    >
                        Terms of Service
                    </Link>
                    <Link
                        className="text-xs hover:underline underline-offset-4"
                        to="#"
                    >
                        Privacy
                    </Link>
                    <Link
                        className="text-xs hover:underline underline-offset-4"
                        to="#"
                    >
                        Contact
                    </Link>
                </nav>
            </footer>
        </div>
    );
}

export default App;
