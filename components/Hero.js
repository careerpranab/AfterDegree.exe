function Hero() {
    return (
        <div className="text-center space-y-4" data-name="hero" data-file="components/Hero.js">
            <div className="inline-flex items-center justify-center p-3 bg-slate-100 rounded-full mb-4">
                <div className="icon-chart-line text-2xl text-[var(--primary-color)]"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--primary-color)] tracking-tight">
                Post-Graduation Reality Check 🤡
                <span className="block text-lg md:text-xl font-normal text-[var(--secondary-color)] mt-2">
                    (Powered by Tears 😭 & Caffeine ☕)
                </span>
            </h1>
            <p className="text-lg text-[var(--secondary-color)] max-w-xl mx-auto italic">
                “A highly accurate algorithm to predict exactly when your soul leaves your body 👻.”
            </p>
        </div>
    );
}
