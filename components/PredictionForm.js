function PredictionForm({ onPredict }) {
    const [formData, setFormData] = React.useState({
        gender: '',
        currentAge: '',
        gradAge: ''
    });
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.currentAge || !formData.gradAge) {
            alert('Please fill in all numerical fields scientifically.');
            return;
        }

        setLoading(true);

        // Fake calculation delay
        setTimeout(() => {
            const current = parseInt(formData.currentAge);
            const grad = parseInt(formData.gradAge);
            const isGraduated = current >= grad;
            
            onPredict({
                ...formData,
                isGraduated,
                currentAge: current,
                gradAge: grad
            });
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="card" data-name="prediction-form" data-file="components/PredictionForm.js">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="label">Gender (For wage gap calculations - JK 🤪)</label>
                    <select 
                        className="input-field bg-white"
                        value={formData.gender}
                        onChange={(e) => setFormData({...formData, gender: e.target.value})}
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male 👨</option>
                        <option value="female">Female 👩</option>
                        <option value="prefer_not">Prefer not to say (Mysterious, I like it 🎭)</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="label">Current Age (Time wasted so far ⏳)</label>
                        <input 
                            type="number" 
                            className="input-field"
                            placeholder="e.g. 24"
                            min="1"
                            max="100"
                            value={formData.currentAge}
                            onChange={(e) => setFormData({...formData, currentAge: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="label">Graduation Age (The Beginning of the End 🎓)</label>
                        <input 
                            type="number" 
                            className="input-field"
                            placeholder="e.g. 22"
                            min="1"
                            max="100"
                            value={formData.gradAge}
                            onChange={(e) => setFormData({...formData, gradAge: e.target.value})}
                        />
                    </div>
                </div>

                <div className="pt-4">
                    <button 
                        type="submit" 
                        className="btn-primary w-full flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <div className="icon-loader animate-spin"></div>
                                <span>Consulting the Stars ✨ & EMI Schedule 💸...</span>
                            </>
                        ) : (
                            <>
                                <div className="icon-skull"></div>
                                <span>Calculate My Suffering 🔮</span>
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
