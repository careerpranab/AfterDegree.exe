function ResultDisplay({ data }) {
    const { isGraduated, role } = data;

    // Meme database
    const memeDatabase = {
        common: [
            { text: "Moye Moye...", sub: "Life update: Error 500 Internal Soul Error." },
            { text: "Khatam. Tata. Bye Bye.", sub: "Career 404 Not Found." },
            { text: "Seh Lenge Thoda...", sub: "Housla rakho, weekend aane wala hai." },
            { text: "Control Uday Control!", sub: "Gussa nahi, code karo." },
            { text: "Ye Dukh Kahe Khatam Nahi Hota?", sub: "Infinite loop of sadness detected." }
        ],
        css: [
            { text: "Pixel Phat Gaya!", sub: "Z-index: 99999 bhi kaam nahi aaya." },
            { text: "Bhai color change kar de.", sub: "Client: 'Make it more popping' (whatever that means)." },
            { text: "Responsive nahi hai bro.", sub: "Mobile view mein website ki halat kharaab hai." }
        ],
        devops: [
            { text: "Server Down Hai!", sub: "Raat ke 3 baje pager duty call incoming..." },
            { text: "Kubernetes samjh nahi aa raha.", sub: "Yaml files mein zindagii ulajh gayi hai." },
            { text: "It works on my machine!", sub: "Docker container mein aag lagi hai." }
        ],
        backend: [
            { text: "Database connection failed.", sub: "Select * from life where happiness = true; -> 0 rows returned." },
            { text: "API response: 502 Bad Gateway.", sub: "Backend walo ki koi izzat nahi hai." },
            { text: "Migration fail ho gaya.", sub: "Production DB uda diya galti se?" }
        ],
        fullstack: [
            { text: "Jack of all trades, Master of none.", sub: "Frontend bhi karlo, Backend bhi karlo, Rona bhi karlo." },
            { text: "Div center kar raha hu backend mein.", sub: "Confusion hi confusion hai, solution kuch pata nahi." },
            { text: "Full Stack Developer = Full Stress Developer.", sub: "Salary: Junior, Kaam: Senior." }
        ],
        manager: [
            { text: "Update kab doge?", sub: "Jaldi karo, client sar pe baitha hai." },
            { text: "Is it scalable?", sub: "Excel sheet maintain karna development nahi hota boss." },
            { text: "Let's sync up.", sub: "Ek aur meeting? Maar hi daalo mujhe." }
        ],
        data: [
            { text: "Data Clean kon karega?", sub: "80% time cleaning, 20% time crying." },
            { text: "Excel is not a Database.", sub: "Par client ko kaun samjhaye?" },
            { text: "Pie Chart mat banao!", sub: "Data visualization ke naam pe rangoli bana di." }
        ],
        medical: [
            { text: "Paracetamol kha lo.", sub: "5 saal padhai karke bas yahi seekha?" },
            { text: "Neend? Woh kya hoti hai?", sub: "Internship = Slavery with extra steps." },
            { text: "Handwriting kharab ho gayi.", sub: "Ab toh khud ko bhi samajh nahi aata kya likha hai." }
        ],
        finance: [
            { text: "Balance Sheet Match Nahi Hui!", sub: "1 rupay ka ghotala kahan se aa gaya?" },
            { text: "Audit Season is Coming.", sub: "Ghar walo ko bol do main zinda hoon." },
            { text: "CA ban na aasaan hai...", sub: "...said no one ever." }
        ],
        engineer: [
            { text: "Core company mili?", sub: "Akhir mein IT company hi join karni padi." },
            { text: "Govt Job ki Taiyari.", sub: "SSC, UPSC, GATE... sab de diya." },
            { text: "Site pe dhoop hai.", sub: "Civil engineer ki life = Mitti aur cement." }
        ]
    };

    // Expert opinions (Shark Tank style & Bollywood)
    const expertOpinions = [
        "“Yeh sab doglapan hai. Main tera code band karwa dunga.” - Ashneer G",
        "“Tumse na ho payega beta. Tum rehne do.” - Ramadhir Singh",
        "“Bilkul bakwaas idea hai. Ismein meri expertise nahi hai, so I am out.” - Namita",
        "“Bhai paisa ho toh kya kuch nahi ho sakta... par tere paas skill nahi hai.”",
        "“Chilla chilla ke sabko scheme bata de!” - Raju",
        "“Aao kabhi haveli pe (code review ke liye).”"
    ];

    // Select random content
    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
    
    // Get role specific content or fallback to common
    const roleContent = memeDatabase[role] || [];
    const allOptions = [...memeDatabase.common, ...roleContent];
    const selectedMeme = getRandom(allOptions);
    const expertQuote = getRandom(expertOpinions);

    const difficultyScore = isGraduated ? Math.floor(Math.random() * (100 - 90 + 1) + 90) : 0;

    return (
        <div className="text-center space-y-6" data-name="result-display" data-file="components/ResultDisplay.js">
            <div className={`inline-block p-4 rounded-full ${isGraduated ? 'bg-red-50' : 'bg-green-50'} mb-2`}>
                <div className={`${isGraduated ? 'icon-triangle-alert text-red-600' : 'icon-code text-green-600'} text-4xl`}></div>
            </div>

            <div className="space-y-2">
                <h2 className="text-2xl font-bold text-[var(--primary-color)]">
                    {isGraduated ? "Ab Pachtaye Hot Kya..." : "Abhi Bhi Time Hai..."}
                </h2>
                <div className="mt-4 p-6 bg-slate-900 text-white rounded-lg shadow-xl relative overflow-hidden">
                    {/* Meme Card Look */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
                    
                    <h3 className="text-3xl md:text-4xl font-black mb-2 uppercase tracking-tighter text-yellow-400">
                        {selectedMeme.text}
                    </h3>
                    <p className="text-slate-300 text-lg font-mono border-t border-slate-700 pt-3 mt-3 inline-block">
                        {selectedMeme.sub}
                    </p>

                    {isGraduated && (
                        <div className="mt-4 inline-flex items-center px-3 py-1 bg-red-600 text-white text-xs font-bold rounded uppercase tracking-wider animate-pulse">
                            Dukh | Dard | Peeda
                        </div>
                    )}
                </div>
            </div>

            {isGraduated && (
                 <div className="text-xl font-bold text-red-600">
                    Burnout Level: {difficultyScore}% (Satya Naash)
                 </div>
            )}
            
            <div className="card bg-slate-50 border-l-4 border-l-[var(--primary-color)] relative">
                <div className="absolute -top-3 -left-2 bg-[var(--primary-color)] text-white text-xs px-2 py-1 rounded shadow transform -rotate-2">
                    Shark Tank Judge Says
                </div>
                <p className="text-xl font-serif italic text-slate-800 leading-relaxed mt-2">
                    {expertQuote}
                </p>
                <div className="mt-4 text-xs text-slate-400 font-mono">
                     {isGraduated ? "* Recommended: Chai piyo, code likho (repeat until death)" : "* Recommended: LeetCode chalu kar de bhai"}
                </div>
            </div>
        </div>
    );
}
