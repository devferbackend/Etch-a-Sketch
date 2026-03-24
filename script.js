const container = document.getElementById('container');
    const GRID_SIZE = 16;
    const totalSquares = GRID_SIZE * GRID_SIZE;
 
    for (let i = 0; i < totalSquares; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      container.appendChild(square);

    }