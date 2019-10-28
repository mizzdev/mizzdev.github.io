const canvas = document.getElementById('tex');
const cxt = canvas.getContext('2d');

const w = 1024;
const h = 512;

const levels = 8;
let depth = 0;

setInterval(() => {
  if (depth >= levels) {
    return;
  }

  const dropFactor = 1.2;
  const n = Math.pow(2, depth);
  const m = Math.pow(dropFactor, depth);

  for (let i = 0; i < 2*n; i++) {
    for (let j = 0; j < n; j++) {
      const a = (1 - 1/dropFactor)*Math.random()/m;
      cxt.fillStyle = `rgba(255,255,255,${a})`;
      cxt.fillRect(i*(w/(2*n)), j*(h/n), w/(2*n), h/n);
    }
  }

  depth++;
}, 500);
