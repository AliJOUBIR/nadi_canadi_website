import { User, Heart, Shield, Award } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
                        About <span className="text-primary">NADI CANADI</span>
                    </h1>
                    <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                        We are dedicated to building a vibrant, supportive community. Our mission is to connect individuals with resources, opportunities, and each other.
                    </p>
                    <div className="flex justify-center flex-wrap gap-4">
                        <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Community Driven</span>
                        <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Inclusivity</span>
                        <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Growth</span>
                    </div>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {[
                        { title: "Teamwork", icon: User, desc: "Working together to achieve common goals and support our community." },
                        { title: "Empathy", icon: Heart, desc: "Understanding and sharing the feelings, experiences, and perspectives of others." },
                        { title: "Integrity", icon: Shield, desc: "Maintaining high ethical standards and being honest in all our efforts." },
                        { title: "Excellence", icon: Award, desc: "Striving for the best in our programs, services, and community engagement." },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors">
                            <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm mb-6">
                                <item.icon size={24} strokeWidth={2} />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                            <p className="text-foreground/70 leading-relaxed text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
