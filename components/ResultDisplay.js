function ResultDisplay({ data }) {
    const { isGraduated, role } = data;

    const memeDatabase = {
        common: [
            { text: "Moye Moye...", sub: "Life update: Error 500 – Internal Soul Error." },
            { text: "Khatam. Tata. Bye Bye.", sub: "Career 404 – Not Found." },
            { text: "Seh Lenge Thoda…", sub: "Bolne ke liye keh diya, seh koi nahi raha." },
            { text: "Ye Dukh Kahe Khatam Nahi Hota?", sub: "While(true) { sadness++; }" },
            { text: "Sab Moh Maya Hai", sub: "Except EMI. EMI is permanent." }
        ],
        backend: [
            { text: "API Down Hai", sub: "Client: ‘Just restart the server na.’" },
            { text: "Database Chala Gaya", sub: "SELECT * FROM happiness; → 0 rows." },
            { text: "Prod Pe Bug", sub: "DevOps ne dekha, bola: ‘Mera nahi hai.’" }
        ],
        frontend: [
            { text: "Pixel Hil Gaya", sub: "Designer bola: ‘Bas thoda left.’" },
            { text: "Responsive Hai Na?", sub: "Mobile pe website ro rahi hai." }
        ],
        fullstack: [
            { text: "Full Stack Developer", sub: "Kaam: Sab. Salary: Junior." },
            { text: "Div Center Kar Raha Hu Backend Mein", sub: "Confusion hi confusion." }
        ],
        data: [
            { text: "Data Clean Kaun Karega?", sub: "80% cleaning, 20% regret." },
            { text: "Excel hi Database Hai", sub: "Client certified architecture." }
        ]
    };

    const expertOpinions = [
        "“Tumse na ho payega beta.” – Ramadhir Singh",
        "“Yeh sab doglapan hai.” – Ashneer Grover",
        "“Ismein meri expertise nahi hai, so I’m out.” – Namita",
        "“Aao kabhi haveli pe… code review ke liye.”",
        "“Chilla chilla ke sabko scheme bata de!”"
    ];

    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const roleContent = memeDatabase[role] || [];
    const memePool = [...memeDatabase.common, ...roleContent];

    const selectedMeme = getRandom(memePool);
    const expertQuote = getRandom(expertOpinions);

    const difficultyScore = isGraduated
        ? Math.floor(Math.random() * 11) + 90
        : Math.floor(Math.random() * 30) + 10;

    const stage =
        !isGraduated ? "SAFE" :
        difficultyScore < 93 ? "COPIUM" :
        difficultyScore < 97 ? "BURNOUT" :
        "ENDGAME";

    const stageMeta = {
        SAFE: {
            title: "Abhi Bhi Bach Sakte Ho",
            subtitle: "College mein ho. Please enjoy while stocks last.",
            badge: "SAFE ZONE"
        },
        COPIUM: {
            title: "Reality Ne Knock Kar Diya Hai",
            subtitle: "LinkedIn pe sab successful lag rahe hain. Lag rahe hain.",
            badge: "COPE MODE"
        },
        BURNOUT: {
            title: "Majdoor Era Unlocked",
            subtitle: "Sunday ko bhi Monday ka dukh ho raha hai.",
            badge: "BURNOUT"
        },
        ENDGAME: {
            title: "Endgame Achieved",
            subtitle: "Laude lag chuke hain. Ab bas EMI aur back pain.",
            badge: "SATYANASH"
        }
    };

    return (
        <div className="text-center space-y-8">

            {/* Status Icon */}
            <div className={`inline-block p-4 rounded-full ${isGraduated ? 'bg-red-50' : 'bg-green-50'}`}>
                <div className={`${isGraduated ? 'icon-triangle-alert text-red-600' : 'icon-code text-green-600'} text-4xl`}></div>
            </div>

            {/* Stage Header */}
            <div>
                <h2 className="text-3xl font-extrabold text-[var(--primary-color)]">
                    {stageMeta[stage].title}
                </h2>
                <p className="text-slate-500 italic mt-1">
                    {stageMeta[stage].subtitle}
                </p>
                <span className="inline-block mt-3 px-3 py-1 text-xs font-bold uppercase bg-black text-white rounded">
                    {stageMeta[stage].badge}
                </span>
            </div>

            {/* Meme Card */}
            <div className="relative p-6 bg-slate-900 text-white rounded-xl shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>

                <h3 className="text-4xl font-black uppercase text-yellow-400 tracking-tight">
                    {selectedMeme.text}
                </h3>

                <p className="mt-4 text-slate-300 font-mono border-t border-slate-700 pt-3">
                    {selectedMeme.sub}
                </p>

                {isGraduated && (
                    <div className="mt-4 inline-block px-4 py-1 bg-red-600 text-white text-xs font-bold rounded-full animate-pulse">
                        Dukh | Dard | Peeda
                    </div>
                )}
            </div>

            {/* Burnout Meter */}
            <div className={`text-2xl font-bold ${isGraduated ? 'text-red-600' : 'text-green-600'}`}>
                Burnout Level: {difficultyScore}%
                <div className="text-sm font-mono text-slate-500">
                    {isGraduated
                        ? "System overheating. Please cry and restart."
                        : "Battery full. Future updates will drain it."}
                </div>
            </div>

            {/* Expert Opinion */}
            <div className="relative bg-slate-50 border-l-4 border-l-[var(--primary-color)] p-6 rounded">
                <div className="absolute -top-3 -left-2 bg-[var(--primary-color)] text-white text-xs px-2 py-1 rounded shadow -rotate-2">
                    Expert Opinion
                </div>

                <p className="text-xl italic font-serif text-slate-800">
                    {expertQuote}
                </p>

                <div className="mt-4 text-xs text-slate-400 font-mono">
                    {isGraduated
                        ? "* Recommended: Chai → Code → Existential Crisis → Repeat"
                        : "* Recommended: College enjoy kar le bhai, warning hai"}
                </div>
            </div>
        </div>
    );
}
