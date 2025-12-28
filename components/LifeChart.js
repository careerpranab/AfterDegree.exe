function LifeChart({ data }) {
    const chartRef = React.useRef(null);
    const canvasRef = React.useRef(null);
    const { currentAge, gradAge } = data;
    const yearsSinceGrad = currentAge - gradAge;

    React.useEffect(() => {
        if (!canvasRef.current) return;

        // Cleanup previous chart
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        const ctx = canvasRef.current.getContext('2d');

        // Generate data points
        // X-axis: 0 to 40 years post grad
        const labels = Array.from({length: 41}, (_, i) => i);
        
        // Y-axis: Exponential growth of difficulty
        // Formula: y = x^1.5 + noise + base_difficulty
        const difficultyData = labels.map(year => {
            const base = 20;
            const growth = Math.pow(year, 1.4); 
            // Add a dip around year 2-3 (honeymoon phase) then skyrocket
            if (year > 1 && year < 4) return base + growth - 5;
            return Math.min(100, base + growth);
        });

        // Create the dataset
        const config = {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Existential Dread Level',
                        data: difficultyData,
                        borderColor: '#0f172a', // primary color
                        backgroundColor: 'rgba(15, 23, 42, 0.1)',
                        borderWidth: 2,
                        tension: 0.4,
                        pointRadius: 0, // hide normal points
                        fill: true
                    },
                    {
                        label: 'You Are Screwed Here',
                        data: labels.map((year, index) => index === yearsSinceGrad ? difficultyData[index] : null),
                        borderColor: '#ef4444',
                        backgroundColor: '#ef4444',
                        pointStyle: 'crossRot',
                        pointRadius: 15,
                        pointHoverRadius: 20,
                        pointBorderWidth: 4,
                        showLine: false
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            font: { family: 'ui-sans-serif, system-ui, sans-serif' }
                        }
                    },
                    tooltip: {
                        enabled: true,
                        callbacks: {
                            label: function(context) {
                                if (context.dataset.label === 'You Are Screwed Here') {
                                    return 'Bank Balance: $0';
                                }
                                return `Dread Level: ${context.raw.toFixed(1)}`;
                            }
                        }
                    },
                    annotation: {
                        // Chart.js annotation plugin might not be loaded, skipping advanced annotations
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Years Wasted After Degree'
                        },
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Regret Intensity (RI)'
                        },
                        min: 0,
                        max: 120, // Give some headroom for the text
                        ticks: {
                            callback: function(value) {
                                if (value === 0) return 'Bliss';
                                if (value === 50) return 'Panic';
                                if (value === 100) return 'Moye Moye';
                                return '';
                            }
                        }
                    }
                }
            }
        };

        chartRef.current = new window.ChartJS(ctx, config);

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [data, yearsSinceGrad]);

    return (
        <div className="card" data-name="life-chart" data-file="components/LifeChart.js">
            <h3 className="text-xl font-bold mb-6 text-center">Your Corporate Slavery Trajectory 📉</h3>
            <div className="relative w-full h-80">
                <canvas ref={canvasRef}></canvas>
                {/* Custom HTML Annotation overlay */}
                <div 
                    className="absolute text-red-600 font-bold text-sm md:text-base whitespace-nowrap pointer-events-none"
                    style={{
                        // Approximate positioning if possible, otherwise rely on the big red X
                        top: '10px',
                        right: '10px'
                    }}
                >
                    * Data Source: Trust Me Bro Institute 🤝
                </div>
            </div>
            <div className="mt-4 text-center text-sm text-slate-500 font-mono">
                Figure 1.1: The correlation between "Age" and "Why is back pain my only friend 🦴"
            </div>
        </div>
    );
}
