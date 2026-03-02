export default function NewsletterSignup() {
    return (
        <section className="bg-primary text-white py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                    Stay Connected with Nadi Canadi
                </h2>

                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                    Get the latest news, events and opportunities delivered to your inbox.
                </p>

                <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-1 px-5 py-4 rounded-xl text-foreground bg-white border-2 border-transparent focus:border-white focus:ring-4 focus:ring-white/20 outline-none transition-all placeholder:text-gray-400"
                        required
                    />
                    <button
                        type="submit"
                        className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-sm whitespace-nowrap"
                    >
                        Subscribe
                    </button>
                </form>

                <p className="text-xs text-white/60 mt-6">
                    We respect your privacy. No spam, ever.
                </p>
            </div>
        </section>
    );
}
