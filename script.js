    const container = document.getElementById('container');
    const clearBtn = document.getElementById('clear');
    const GRID_SIZE = 16;
    const totalSquares = GRID_SIZE * GRID_SIZE;
 
    for (let i = 0; i < totalSquares; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
 
      square.addEventListener('mouseenter', () => {
        square.classList.add('painted');
      });
 
      container.appendChild(square);
    }
 
    clearBtn.addEventListener('click', () => {
      const squares = container.querySelectorAll('.square');
      squares.forEach((square) => square.classList.remove('painted'));
    });