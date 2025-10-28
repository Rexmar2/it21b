 class LineChart{
        constructor(canvasId = dataUrl){
            this.canvasId = canvasId;
            this.dataUrl = dataUrl;
            this.chart = null;
        
        }
       renderCharts(data){
          const ctx = document.getElementById(this.canvasId).getContext("2d");
    new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
    
  });
       }
  async fetchData(){
    try {
        const response = await fets(this.dataUrl);
        if(!response.ok) throw new Error('Failed to load data:$()');
    
 
  </script>
 </html>