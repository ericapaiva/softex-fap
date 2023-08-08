function bombCountdown(segundos) {
    console.log("Iniciando contagem regressiva...");
  
    let contador = segundos;
    const countdownInterval = setInterval(() => {
      console.log(contador);
      contador--;
  
      if (contador < 0) {
        clearInterval(countdownInterval);
        console.log("BUMMMMMMMMMMMMMMMMM!");
      }
    }, 1000);
  }
  
  // Informe o número de segundos para a contagem regressiva
  const segundosParaExplodir = 10;
  bombCountdown(segundosParaExplodir);