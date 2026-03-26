const container = document.getElementById('container');
    const clearBtn = document.getElementById('clear');
    const resizeBtn = document.getElementById('resize');
    const gridInfo = document.getElementById('grid-info');

    function randomRGB() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
    }

    function createGrid(size) {
      container.innerHTML = '';
      const squareSize = 100 / size;

      for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}%`;
        square.style.height = `${squareSize}%`;

        // Track how many times this square has been touched (0–10)
        square.dataset.interactions = '0';

        square.addEventListener('mouseenter', () => {
          let interactions = parseInt(square.dataset.interactions);

          if (interactions < 10) {
            // Assign a new random color on each pass
            square.style.backgroundColor = randomRGB();

            interactions++;
            square.dataset.interactions = interactions;

            // Opacity goes from 0.1 (first touch) to 1.0 (tenth touch)
            square.style.opacity = interactions * 0.1;
          } else {
            // After 10 interactions: fully black
            square.style.backgroundColor = '#000';
            square.style.opacity = '1';
          }
        });

        container.appendChild(square);
      }

      gridInfo.textContent = `${size} × ${size}`;
    }

    clearBtn.addEventListener('click', () => {
      const squares = container.querySelectorAll('.square');
      squares.forEach((square) => {
        square.style.backgroundColor = '#16213e';
        square.style.opacity = '1';
        square.dataset.interactions = '0';
      });
    });

    resizeBtn.addEventListener('click', () => {
      let input = prompt('¿Cuántos cuadrados por lado? (1 – 100):');
      if (input === null) return;

      let size = parseInt(input);
      if (isNaN(size) || size < 1 || size > 100) {
        alert('Por favor ingresa un número entre 1 y 100.');
        return;
      }

      createGrid(size);
    });

    createGrid(16);