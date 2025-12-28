
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-black"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  const [predictionData, setPredictionData] = React.useState(null);

  const handlePredict = (data) => {
    setPredictionData(data);
    // Smooth scroll to result
    setTimeout(() => {
        const resultSection = document.getElementById('result-section');
        if (resultSection) {
            resultSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col" data-name="app" data-file="app.js">
      <main className="flex-grow container mx-auto px-4 py-12 max-w-3xl">
        <Hero />
        
        <div className="mt-12">
            <PredictionForm onPredict={handlePredict} />
        </div>

        {predictionData && (
            <div id="result-section" className="mt-12 space-y-8 animate-fade-in">
                <ResultDisplay data={predictionData} />
                {predictionData.isGraduated && (
                    <LifeChart data={predictionData} />
                )}
            </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
