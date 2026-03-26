 const container = document.getElementById('container');
    const clearBtn = document.getElementById('clear');
    const resizeBtn = document.getElementById('resize');
    const gridInfo = document.getElementById('grid-info');
 
    function createGrid(size) {
      // Remove all existing squares
      container.innerHTML = '';
 
      // Calculate square dimensions based on container size
      const squareSize = 100 / size; // percentage
 
      for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}%`;
        square.style.height = `${squareSize}%`;
 
        square.addEventListener('mouseenter', () => {
          square.classList.add('painted');
        });
 
        container.appendChild(square);
      }
 
      gridInfo.textContent = `${size} × ${size}`;
    }
 
    clearBtn.addEventListener('click', () => {
      const squares = container.querySelectorAll('.square');
      squares.forEach((square) => square.classList.remove('painted'));
    });
 
    resizeBtn.addEventListener('click', () => {
      let input = prompt('¿Cuántos cuadrados por lado? (1 – 100):');
 
      // User cancelled
      if (input === null) return;
 
      let size = parseInt(input);
 
      if (isNaN(size) || size < 1 || size > 100) {
        alert('Por favor ingresa un número entre 1 y 100.');
        return;
      }
 
      createGrid(size);
    });
 
    // Initialize with 16x16
    createGrid(16);