// Fabonacci series - 2,2,4,6,10,16,26,42,68,110

function findFabonacciSeries(initial, n=10){
  const series = [];

  for(let i=0; i<n; i++){
    if(i === 0){
      series.push(initial);
    }else if(i === 1){
      series.push(series[(i - 1)]);
    }else{
      const next = series[(i - 1)] + series[(i - 2)];
      series.push(next);
    }
  }

  return series.toString();
}

module.exports = findFabonacciSeries;