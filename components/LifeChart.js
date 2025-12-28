function LifeChart({ data }) {
    const chartRef = React.useRef(null);
    const canvasRef = React.useRef(null);
    const { currentAge, gradAge } = data;
    const yearsSinceGrad = currentAge - gradAge;

    React.useEffect(() => {
        if (!canvasRef.current) return;

        if (chartRef.current) {
            chartRef.current.destroy();
        }

        const ctx = canvasRef.current.getContext('2d');
        const labels = Array.from({length: 41}, (_, i) => i);
        
        const difficultyData = labels.map(year => {
            const base = 20;
            const growth = Math.pow(year, 1.4); 
            if (year > 1 && year < 4) return base + growth - 5;
            return Math.min(100, base + growth);
        });

        const config = {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Zindagi Ki Lagne Wali Hai (Dread)',
                        data: difficultyData,
                        borderColor: '#0f172a',
                        backgroundColor: 'rgba(15, 23, 42, 0.1)',
                        borderWidth: 2,
                        tension: 0.4,
                        pointRadius: 0, 
                        fill: true
                    },
                    {
                        label: 'Aap Yahan Hai (You are here)',
                        data: labels.map((year, index) => index === yearsSinceGrad ? difficultyData[index] : null),
                        borderColor: '#ef4444',
                        backgroundColor: '#ef4444',
                        pointStyle: 'circle',
                        pointRadius: 8,
                        pointHoverRadius: 12,
                        showLine: false
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                    },
                    tooltip: {
                        enabled: true,
                        backgroundColor: 'rgba(0,0,0,0.9)',
                        titleFont: { size: 14 },
                        bodyFont: { size: 14 },
                        padding: 12,
                        callbacks: {
                            label: function(context) {
                                if (context.dataset.label.includes('You are here')) {
                                    return 'Current Status: Barbadi Loading...';
                                }
                                const val = context.raw;
                                if (val < 30) return `Maze hi maze (Happiness)`;
                                if (val < 60) return `Thoda stress (BP high)`;
                                if (val < 90) return `Baal safed hone lage (Aging)`;
                                return `Sanyaas le lo (Give up)`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        title: { display: true, text: 'Years since College (Golden Days)' },
                        grid: { display: false }
                    },
                    y: {
                        title: { display: true, text: 'Stress Level' },
                        min: 0,
                        max: 120,
                        ticks: {
                            callback: function(value) {
                                if (value === 0) return 'Bachpan';
                                if (value === 50) return 'Job';
                                if (value === 100) return 'Manager';
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
            <h3 className="text-xl font-bold mb-6 text-center">Graph of Doom 📉</h3>
            <div className="relative w-full h-80">
                <canvas ref={canvasRef}></canvas>
                <div 
                    className="absolute text-slate-400 font-mono text-xs"
                    style={{ bottom: '10px', right: '10px' }}
                >
                    * Based on real tears of developers
                </div>
            </div>
        </div>
    );
}
