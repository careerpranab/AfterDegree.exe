function PredictionForm({ onPredict }) {
    const [formData, setFormData] = React.useState({
        role: '',
        currentAge: '',
        gradAge: ''
    });
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.currentAge || !formData.gradAge || !formData.role) {
            alert('Arre bhai! Form toh poora bharo (Please fill all fields).');
            return;
        }

        setLoading(true);


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
                    <label className="label">Kaun ho tum? (Select Your Role)</label>
                    <select 
                        className="input-field bg-white"
                        value={formData.role}
                        onChange={(e) => setFormData({...formData, role: e.target.value})}
                    >
                        <option value="">Select Role</option>
                        <option value="css">CSS Student (Centering div specialist)</option>
                        <option value="devops">DevOps (Server restart karne wale)</option>
                        <option value="backend">Backend Dev (API banata hoon bro)</option>
                        <option value="fullstack">Fullstack (Majdoor)</option>
                        <option value="data">Data Analyst (Excel ko AI bolne wale)</option>
                        <option value="medical">Medical Student (Neend is a myth)</option>
                        <option value="finance">CA / Finance (Balance sheet match nahi hui)</option>
                        <option value="engineer">Mechanical/Civil (Govt job aspirant)</option>
                        <option value="manager">Project Manager (Bas update chahiye)</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="label">Abhi kitne saal ke ho? (Current Age)</label>
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
                        <label className="label">College kab khatam hoga? (Grad Year)</label>
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
                                <span>Kundli matching with bugs...</span>
                            </>
                        ) : (
                            <>
                                <div className="icon-wand"></div>
                                <span>Bhavishya Batao (Predict Future)</span>
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
