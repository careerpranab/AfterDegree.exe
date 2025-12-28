function ResultDisplay({ data }) {
    const { isGraduated } = data;


    const difficultyScore = isGraduated ? Math.floor(Math.random() * (100 - 92 + 1) + 92) : 0;

    return (
        <div className="text-center space-y-6" data-name="result-display" data-file="components/ResultDisplay.js">
            <div className={`inline-block p-4 rounded-full ${isGraduated ? 'bg-red-50' : 'bg-green-50'} mb-2`}>
                <div className={`${isGraduated ? 'icon-siren text-red-600' : 'icon-baby text-green-600'} text-4xl`}></div>
            </div>

            <div className="space-y-2">
                <h2 className="text-2xl font-bold text-[var(--primary-color)]">Clinical Diagnosis 🩺</h2>
                <div className="text-4xl font-black">
                    {isGraduated ? (
                        <div className="flex flex-col items-center">
                            <span className="text-red-600 text-5xl mb-2">COOKED. 🍳</span>
                            <span className="text-sm font-normal text-slate-500">Regret Index: {difficultyScore}/100 (Critical 🚨)</span>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center">
                            <span className="text-green-600 text-5xl mb-2">Pre-Cooked 🥗</span>
                            <span className="text-sm font-normal text-slate-500">Status: Enjoy the canteen food 🍔 while it lasts</span>
                        </div>
                    )}
                </div>
            </div>
            
            <div className="card bg-slate-50 border-l-4 border-l-[var(--primary-color)]">
                <h3 className="text-lg font-bold mb-2 uppercase text-slate-400 text-xs tracking-widest">Expert Opinion 🧐</h3>
                <p className="text-xl md:text-2xl font-serif italic text-slate-800 leading-relaxed">
                    {isGraduated 
                        ? "“Beta, abhi toh bas shuruwat hai. Wait for the tax deductions. 💸”" 
                        : "“Your biggest problem right now is 75% attendance. Cute. 🥺”"
                    }
                </p>
                <div className="mt-4 text-xs text-slate-400 font-mono">
                     {isGraduated ? "* Recommended Treatment: Go to Goa 🏖️ (plan will fail anyway)" : "* Recommended Treatment: Sleep 12 hours a day 🛌"}
                </div>
            </div>
        </div>
    );
}
