const imagePaths = [
  'https://images.unsplash.com/photo-1608687087357-845abfade367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Njc1NTk3NzE&ixlib=rb-4.0.3&q=80&w=400',
  'https://images.unsplash.com/photo-1604818640599-71bda0165d53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Njc1NTk3NzE&ixlib=rb-4.0.3&q=80&w=400',
  'https://images.unsplash.com/photo-1574357278720-2809ce8065db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Njc1NTk3NzE&ixlib=rb-4.0.3&q=80&w=400',
  'https://images.unsplash.com/photo-1602136773736-34d445b989cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Njc1NTk3NzE&ixlib=rb-4.0.3&q=80&w=400',
  'https://images.unsplash.com/photo-1501769752-a59efa2298ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Njc1NTk3NzE&ixlib=rb-4.0.3&q=80&w=400',
  'https://images.unsplash.com/photo-1558961166-9c584702dcb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Njc1NTk3NzE&ixlib=rb-4.0.3&q=80&w=400',
  'https://images.unsplash.com/photo-1571182160015-2169f6e1aa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Njc1NTk3NzE&ixlib=rb-4.0.3&q=80&w=400',
  'https://images.unsplash.com/photo-1555852224-2a3e675fc47e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Njc1NTk3NzE&ixlib=rb-4.0.3&q=80&w=400',
  'https://images.unsplash.com/photo-1620215175664-cb9a6f5b6103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Njc1NTk4NzE&ixlib=rb-4.0.3&q=80&w=400',
  'https://images.unsplash.com/photo-1539606328118-80c679838702?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Njc1NTk4NzE&ixlib=rb-4.0.3&q=80&w=400',
  'https://images.unsplash.com/photo-1574357278720-2809ce8065db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Njc1NTk4NzE&ixlib=rb-4.0.3&q=80&w=400',
  'https://images.unsplash.com/photo-1574357265250-10c88f63ebfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Njc1NTk4NzE&ixlib=rb-4.0.3&q=80&w=400',
  'https://images.unsplash.com/photo-1536901766856-5d45744cd180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Njc1NTk5MjA&ixlib=rb-4.0.3&q=80&w=400',
];

class Utilities {
  static norm(value, min, max) {
    return (value - min) / (max - min);
  }

  static lerp(norm, min, max) {
    return (max - min) * norm + min;
  }

  static map(value, sourceMin, sourceMax, destMin, destMax) {
    return this.lerp(this.norm(value, sourceMin, sourceMax), destMin, destMax);
  }

  static clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  static distance(x0, y0, x1, y1) {
    const dx = x1 - x0;
    const dy = y1 - y0;

    return Math.sqrt(dx * dx + dy * dy);
  }

  static randomRange(min, max) {
    return min + Math.random() * (max - min);
  }

  static randomInt(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
  }

  static randomDist(min, max, iterations) {
    let total = 0;

    for (let i = 0; i < iterations; i++) {
      total += this.randomRange(min, max);
    }

    return total / iterations;
  }

  static degreesToRads(degrees) {
    return degrees / 180 * Math.PI;
  }

  static radsToDegrees(radians) {
    return radians * 180 / Math.PI;
  }

  static roundToPlaces(value, places) {
    const mult = Math.pow(10, places);

    return Math.round(value * mult) / mult;
  }

  static roundNearest(value, nearest) {
    return Math.round(value / nearest) * nearest;
  }
}

class Loading {
  constructor() {
    this.load = document.getElementsByClassName('loading')[0];
    this.line = document.getElementsByClassName('line')[0];
    this.counter = document.getElementsByClassName('counter')[0];
    this.imagePaths = imagePaths;
    this.loadedNumber = 1;
    this.percentage = 0;
    this.num = 0;
  }

  initialize() {
    return new Promise((resolve, reject) => {
      this.loadImages(resolve, reject);
    });
  }

  loadImages(resolve, reject) {
    for (let i = 0; i < this.imagePaths.length; i++) {
      const path = this.imagePaths[i];
      const image = new Image();

      image.src = path;
      image.crossOrigin = "anonymous";

      const onSettled = () => {
        this.percentage = this.getPercentage(this.loadedNumber++);
      };

      // Count both success and failure so a single broken/blocked
      // image URL can't leave the progress bar stuck under 100%.
      image.addEventListener('load', onSettled);
      image.addEventListener('error', onSettled);
    }

    this.drawPercentage(resolve, reject);
  }

  getPercentage(num) {
    return Math.floor(num / this.imagePaths.length * 100);
  }

  drawPercentage(resolve, reject) {
    if (this.num < this.percentage) {
      this.num++;
    }

    this.line.style.width = this.num + '%';
    this.counter.textContent = this.num + '%';

    if (this.num === 100) {
      this.cancelDrawLoopCounterNumber(resolve, reject);

      return;
    }

    this.animationID = requestAnimationFrame(this.drawPercentage.bind(this, resolve, reject));
  }

  cancelDrawLoopCounterNumber(resolve, reject) {
    cancelAnimationFrame(this.animationID);

    this.addClass(resolve, reject);
  }

  addClass(resolve, reject) {
    this.delay(400)
      .then(() => {
        this.load.classList.add('loaded');
        this.line.classList.add('loaded');
        this.counter.classList.add('loaded');

        resolve();
      });
  }

  delay(time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }
}

class FullScreen {
  constructor() {
    this.setupEvents();
    this.initialize();
  }

  initialize() {
    const vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  setupEvents() {
    window.addEventListener('resize', this.onResize.bind(this), false);
  }

  onResize() {
    this.initialize();
  }
}

class DrawMainImage {
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.initialize();
  }

  initialize() {
    this.canvas = document.createElement('canvas');
    this.ctx2 = this.canvas.getContext('2d');
    this.image = null;
    this.stopWatch = new Stopwatch();
    this.dataArr = [];
  }

  drawImage(src) {
    this.isLoaded = false;
    this.image = new Image();
    this.image.src = src;
    this.image.crossOrigin = "anonymous";

    this.image.addEventListener('load', () => {
      this.stopWatch.initialize();

      let imageWidth, ratio, imageHeight;

      if (this.image.width >= this.image.height) {
        imageWidth = Math.min(this.width * 0.9, this.image.width);
        ratio = this.image.width / this.image.height;
        imageHeight = imageWidth / ratio;
      } else {
        imageHeight = Math.min(this.height * 0.9, this.image.height);
        ratio = this.image.height / this.image.width;
        imageWidth = imageHeight / ratio;

        if (imageWidth >= this.width * 0.9) {
          imageWidth = Math.min(this.width * 0.9, this.image.width);
          ratio = this.image.width / this.image.height;
          imageHeight = imageWidth / ratio;
        }
      }

      this.canvas.width = imageWidth;
      this.canvas.height = imageHeight;

      this.ctx2.clearRect(0, 0, imageWidth, imageHeight);
      this.ctx2.drawImage(this.image, 0, 0, imageWidth, imageHeight);

      this.getImageData();
      this.isLoaded = true;
    });
  }

  getImageData() {
    this.dataArr = [];

    let preHeight = 0, addHeight = 0;
    for (let i = 0; i < this.canvas.height; i += addHeight) {
      const obj = {};

      addHeight = Utilities.randomInt(5, 20);

      if (preHeight + addHeight > this.canvas.height) {
        addHeight = Math.floor(this.canvas.height - preHeight);
      }

      if (addHeight === 0) return;

      const image = this.ctx2.getImageData(
        0,
        preHeight,
        this.canvas.width,
        addHeight
      );

      obj.image = image;
      obj.height = preHeight;
      obj.width = Math.random() * this.width * 0.5 - this.width * 0.25;

      this.dataArr.push(obj);

      preHeight += addHeight;
    }
  }

  addImage(t) {
    if (!this.isLoaded) return;

    for (let i = 0; i < this.dataArr.length; i++) {
      this.ctx.putImageData(
        this.dataArr[i].image,
        this.width / 2 - this.canvas.width / 2 + this.dataArr[i].width,
        this.height / 2 - this.canvas.height / 2 + this.dataArr[i].height
      );
    }

    this.moveImage();
  }

  moveImage() {
    this.stopWatch.calculateTime();

    const t = 1.0 - Math.min(this.stopWatch.getElapsedTime() * 0.0002, 1.0);

    this.e = this.ease(t);

    for (let i = 0; i < this.dataArr.length; i++) {
      this.dataArr[i].width *= this.e;
    }
  }

  deleteImage(t) {
    if (!this.isLoaded) return;

    for (let i = 0; i < this.dataArr.length; i++) {
      this.ctx.putImageData(
        this.dataArr[i].image,
        this.width / 2 - this.canvas.width / 2 + this.dataArr[i].width + Math.tan(t * 0.01 + this.dataArr[i].height / Math.PI) * 100,
        this.height / 2 - this.canvas.height / 2 + this.dataArr[i].height
      );
    }
  }

  ease(x) {
    return 1 - Math.sqrt(1 - Math.pow(x, 2));
  }
}

class Sketch {
  constructor() {
    this.setupCanvas();
    this.setupEvents();
    this.initialize();
  }

  setupCanvas() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.canvas.ariaLabel = 'This is images gallery.';
    this.canvas.role = 'img';

    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100%';
    this.canvas.style.minHeight = '100vh';
    this.canvas.style.minHeight = 'calc(var(--vh, 1vh) * 100)';
    this.canvas.style.display = 'block';
    this.canvas.style.background = 'radial-gradient(ellipse at center, #1c1c1c 0%, #0d0d0d 45%, #050505 100%)';
    this.canvas.style.zIndex = '-1';

    document.body.appendChild(this.canvas);
  }

  setupEvents() {
    window.addEventListener('resize', this.onResize.bind(this), false);
    window.addEventListener('wheel', this.onWheel.bind(this), false);
    document.body.addEventListener('click', this.onClick.bind(this), false);
    document.body.addEventListener('mousemove', this.onMousemove.bind(this), false);
    document.body.addEventListener('touchstart', this.onTouchstart.bind(this), false);
    document.body.addEventListener('touchmove', this.onTouchmove.bind(this), false);
  }

  onMousemove(e) {
    this.touchInfos.mouse.x = (e.clientX / this.width) * this.width - this.width / 2;
    this.touchInfos.mouse.y = (e.clientY / this.height) * this.height - this.height / 2;
  }

  onTouchstart(e) {
    const t = e.targetTouches[0];

    this.touchInfos.fing.prev.x = t.pageX;
    this.touchInfos.fing.prev.y = t.pageY;
  }

  onTouchmove(e) {
    const t = e.targetTouches[0];

    this.touchInfos.mouse.x = (t.pageX / this.width) * this.width - this.width / 2;
    this.touchInfos.mouse.y = (t.pageY / this.height) * this.height - this.height / 2;

    // Use the *incremental* movement since the previous touchmove event,
    // not the total displacement from touchstart. Accumulating the total
    // displacement on every fired event (many times per second while
    // dragging) made the gallery spin faster the longer/farther a drag
    // went, instead of tracking the finger 1:1.
    const dx = this.touchInfos.fing.prev.x - t.pageX;
    const dy = this.touchInfos.fing.prev.y - t.pageY;

    this.touchInfos.delta.x += dx * 0.003;
    this.touchInfos.delta.y += dy * 0.003;

    this.touchInfos.fing.prev.x = t.pageX;
    this.touchInfos.fing.prev.y = t.pageY;
  }

  onResize() {
    if (this.preWidth === window.innerWidth) {
      this.height = this.canvas.height = window.innerHeight;

      if (this.P) {
        this.P.resize(this.width, this.height);
      }

      return;
    }

    this.initialize();
  }

  onWheel(e) {
    this.touchInfos.delta.x += e.deltaX * 0.0005;
    this.touchInfos.delta.y += e.deltaY * 0.0005;
  }

  onClick(e) {
    if (this.isDisplayed) {
      this.isDeleating = true;

      setTimeout(() => {
        this.isDeleating = false;
        this.isDisplayed = false;
      }, 160);

      return;
    } else {
      this.isDisplayed = false;
    }

    const x = this.touchInfos.mouse.x = (e.clientX / this.width) * this.width - this.width / 2;
    const y = this.touchInfos.mouse.y = (e.clientY / this.height) * this.height - this.height / 2;

    for (let i = 0; i < this.shapes.length; i++) {
      const s = this.shapes[i];

      if (this.isHovered(s, x, y)) {
        this.isDisplayed = true;
        this.M.drawImage(s.image.src);

        return;
      }
    }
  }

  initialize() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }

    this.paths = imagePaths;
    this.isDisplayed = false;

    this.hasHover = window.matchMedia('(hover: hover)').matches;

    this.setupSizes();
    this.setupShapes();

    this.focus = {
      x: 0,
      y: 0,
      s: this.size
    };

    this.touchInfos = {
      mouse: {
        x: 0,
        y: 0
      },
      delta: {
        x: 0,
        y: 0
      },
      fing: {
        prev: {
          x: null,
          y: null
        }
      }
    };

    this.G = new Glitch(this.ctx, this.width, this.height, 50, 200);
    this.M = new DrawMainImage(this.ctx, this.width, this.height);
    this.P = new Particles(this.ctx, this.width, this.height, 70);

    this.render(0);
  }

  setupSizes() {
    this.width = this.preWidth = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  setupShapes() {
    const edge = Math.max(this.width, this.height);
    //const edge = Math.sqrt(this.width * this.width + this.height * this.height);

    this.radius = edge / 2;
    this.numberOfShape = 16;
    this.size = this.radius / (this.numberOfShape / 6);
    this.shapes = [];

    let index = 0;
    for (let x = 0; x < this.numberOfShape; x++) {
      for (let y = 0; y < this.numberOfShape; y++) {
        const params = {
          x: x,
          y: y,
          i: index++,
          c: this.ctx,
          s: this.size,
          r: this.radius,
          n: this.numberOfShape,
          p: this.paths[Math.floor(Math.random() * (this.paths.length - 1))]
        };
        const s = new Shape(params);

        this.shapes.push(s);
      }
    }
  }

  drawFocus(s, hover) {
    if (hover === false) {
      this.focus.s += (0 - this.focus.s) * 0.16;
      this.focus.x += (this.touchInfos.mouse.x - this.focus.x) * 0.16;
      this.focus.y += (this.touchInfos.mouse.y - this.focus.y) * 0.16;

      this.ctx.save();
      this.ctx.strokeStyle = 'rgba(254, 41, 109, 0.7)';
      this.ctx.lineWidth = 1;
      this.ctx.strokeRect(this.focus.x - this.focus.s / 2, this.focus.y - this.focus.s / 2, this.focus.s, this.focus.s);
      this.ctx.restore();
    } else {
      this.focus.s += (this.size * s.ratio - this.focus.s) * 0.16;
      this.focus.x += (s.x - this.focus.x) * 0.16;
      this.focus.y += (s.y - this.focus.y) * 0.16;

      this.ctx.save();
      this.ctx.strokeStyle = 'rgba(254, 41, 109, 0.85)';
      //this.ctx.globalCompositeOperation = 'lighter';
      this.ctx.lineWidth = 3 * s.ratio;
      this.ctx.strokeRect(this.focus.x - this.focus.s / 2, this.focus.y - this.focus.s / 2, this.focus.s, this.focus.s);
      this.ctx.restore();
    };
  }

  isHovered(shape, x, y) {
    if (
         shape.displayed === true &&
         x > shape.x - this.size / 2 * shape.ratio &&
         x < shape.x + this.size / 2 * shape.ratio &&
         y > shape.y - this.size / 2 * shape.ratio &&
         y < shape.y + this.size / 2 * shape.ratio
       )
    {
      return true;
    }
  }

  resetParams() {
    this.hover = false;
    document.body.style.cursor = 'initial';
  }

  drawGlow(t) {
    // A soft white light sitting at the center of the sphere, slowly
    // breathing in size and brightness. It paints behind every tile, so it
    // reads as ambient light coming from deep inside the scene rather than
    // sitting on top of it, which is what sells the sense of depth.
    const pulse = 0.5 + 0.5 * Math.sin(t * 0.0006);
    const radius = Math.min(this.width, this.height) * (0.32 + 0.06 * pulse);
    const alpha = 0.05 + 0.035 * pulse;

    const glow = this.ctx.createRadialGradient(0, 0, 0, 0, 0, radius);
    glow.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
    glow.addColorStop(1, 'rgba(255, 255, 255, 0)');

    this.ctx.save();
    this.ctx.fillStyle = glow;
    this.ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
    this.ctx.restore();
  }

  render(t) {
    this.resetParams();

    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.save();
    this.ctx.translate(this.width / 2, this.height / 2);

    this.drawGlow(t);
    this.P.draw(t);

    let hoveredIndex;
    for (let i = 0; i < this.shapes.length; i++) {
      const s = this.shapes[i];

      this.shapes[i].draw(this.touchInfos);

      if (this.isHovered(s, this.touchInfos.mouse.x, this.touchInfos.mouse.y)) {
        document.body.style.cursor = 'zoom-in';
        this.hover = true;
        hoveredIndex = i;
      }
    }

    this.drawFocus(this.shapes[hoveredIndex], this.hover);

    if (Math.random() < 0.01) {
      this.G.draw(t);
    }

    if (this.isDisplayed && this.isDeleating !== true) {
      this.ctx.globalAlpha = 0.8;
      this.ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
      this.M.addImage(t);
    }

    if (this.isDeleating) {
      this.M.deleteImage(t);
    }

    this.ctx.restore();

    this.animationId = requestAnimationFrame(this.render.bind(this));
  }
}

class Shape {
  constructor(params) {
    this.ctx = params.c;
    this.xIndex = params.x;
    this.yIndex = params.y;
    this.index = params.i;
    this.radius = params.r;
    this.numberOfShape = params.n;
    this.size = params.s;
    this.image = new Image();
    this.image.crossOrigin = "anonymous";
    this.image.src = params.p;
    this.ratio = 0;
    this.displayed = true;
    this.initialize();
  }

  initialize() {
    this.xRadian = Math.PI * 2 / this.numberOfShape * this.xIndex;
    this.yRadian = Math.PI * 2 / this.numberOfShape * this.yIndex;
  }

  updateParams(infos) {
    this.x = Math.sin(this.xRadian + infos.delta.x) * this.radius;
    this.y = Math.cos(this.yRadian + infos.delta.y) * this.radius;

    this.ratio = this.getNormalizedDist(infos);
  }

  getNormalizedDist(infos) {
    let tmp;
    tmp = Math.sqrt(this.x * this.x + this.y * this.y) / this.radius;
    tmp = this.ease(tmp);
    tmp = 1 - Math.min(tmp, 1);

    return tmp;
  }

  ease(t) {
    return t * t * t;
  }

  draw(infos) {
    this.updateParams(infos);

    if (Math.sin(this.yRadian + infos.delta.y) > 0 || Math.cos(this.xRadian + infos.delta.x) > 0) {
      this.displayed = false;

      return;
    }

    this.displayed = true;

    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    this.ctx.scale(this.ratio, this.ratio);
    this.ctx.translate(-this.x, -this.y);

    this.ctx.globalAlpha = this.ratio;

    const half = this.size / 2;

    // Cheap flat shadow, no shadowBlur. shadowBlur is by far the most
    // expensive canvas operation, and running it on every tile every frame
    // (~100+ tiles at 60fps) was the source of the lag. A solid offset
    // rect peeking out behind the tile still reads as "floating" without
    // the blur cost. The current transform's scale(ratio) already shrinks
    // this offset for far tiles automatically.
    this.ctx.fillStyle = `rgba(0, 0, 0, ${0.4 * this.ratio})`;
    this.ctx.fillRect(this.x - half + 6, this.y - half + 10, this.size, this.size);

    this.ctx.drawImage(
      this.image,
      this.image.width / 2 - this.size / 2,
      this.image.height / 2 - this.size / 2,
      this.size,
      this.size,
      this.x - half,
      this.y - half,
      this.size,
      this.size
    );

    // Shiny edge: a diagonal highlight gradient through the border. No
    // shadowBlur here either, for the same reason as above.
    const edge = this.ctx.createLinearGradient(
      this.x - half, this.y - half,
      this.x + half, this.y + half
    );
    edge.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
    edge.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
    edge.addColorStop(1, 'rgba(255, 255, 255, 0.95)');

    this.ctx.strokeStyle = edge;
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(this.x - half, this.y - half, this.size, this.size);

    this.ctx.restore();
  }
}

class Glitch {
  constructor(ctx, width, height, min, max) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.min = min;
    this.max = max;
    this.dataArr = [];
  }

  getImageData() {
    let preHeight = 0, addHeight = 0;
    for (let i = 0; i < this.height; i += addHeight) {
      const obj = {};

      addHeight = Utilities.randomInt(this.min, this.max);

      if (preHeight + addHeight > this.height) {
        addHeight = Math.floor(this.height - preHeight);
      }

      if (addHeight === 0) {
        return;
      }

      const image = this.ctx.getImageData(0, preHeight, this.width, preHeight + addHeight);

      obj.image = image;
      obj.height = preHeight;

      this.dataArr.push(obj);

      preHeight += addHeight
    }
  }

  addImage(t) {
    for (let i = 0; i < this.dataArr.length ; i++) {
      if (Math.random() > 0.01) {
        this.ctx.putImageData(
          this.dataArr[i].image,
          Math.tan(this.dataArr[i].height * 0.1 + t) * 10 * Math.random(),
          this.dataArr[i].height
        );
      } else {
        this.ctx.putImageData(
          this.dataArr[Math.floor(this.dataArr.length * Math.random())].image,
          this.width * Math.random() - this.width / 2,
          this.dataArr[i].height
        );
      }
    }
  }

  draw(t) {
    this.dataArr = [];
    this.getImageData();
    this.addImage(t);
  }
}

class Particles {
  constructor(ctx, width, height, count) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.count = count;
    this.items = [];

    this.setup();
  }

  setup() {
    this.items = [];

    for (let i = 0; i < this.count; i++) {
      this.items.push(this.createParticle(true));
    }
  }

  // spawnFromBottom: true when a particle first drifts off the top of the
  // screen and needs to reappear below, false for the initial fill of the
  // whole screen so it doesn't look empty on load.
  createParticle(spawnAnywhere) {
    return {
      x: Utilities.randomRange(-this.width / 2, this.width / 2),
      y: spawnAnywhere
        ? Utilities.randomRange(-this.height / 2, this.height / 2)
        : this.height / 2 + Utilities.randomRange(10, 60),
      r: Utilities.randomRange(1, 3),
      speed: Utilities.randomRange(0.15, 0.55),
      drift: Utilities.randomRange(-0.08, 0.08),
      minAlpha: Utilities.randomRange(0.08, 0.25),
      maxAlpha: Utilities.randomRange(0.6, 1),
      phase: Utilities.randomRange(0, Math.PI * 2),
      twinkleSpeed: Utilities.randomRange(0.0015, 0.005)
    };
  }

  resize(width, height) {
    this.width = width;
    this.height = height;
  }

  draw(t) {
    const ctx = this.ctx;

    for (let i = 0; i < this.items.length; i++) {
      const p = this.items[i];

      p.y -= p.speed;
      p.x += p.drift;

      if (p.y < -this.height / 2 - 10) {
        Object.assign(p, this.createParticle(false));
      }

      const twinkle = 0.5 + 0.5 * Math.sin(t * p.twinkleSpeed + p.phase);
      const alpha = p.minAlpha + (p.maxAlpha - p.minAlpha) * twinkle;

      // Soft halo + bright core instead of shadowBlur. shadowBlur run on
      // ~70 particles every frame was a big chunk of the lag; two plain
      // circle fills give a similar twinkling-star look for a fraction of
      // the cost, and skip save/restore since nothing here needs undoing.
      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.25})`;
      ctx.arc(p.x, p.y, p.r * 2.4, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

class Stopwatch {
  constructor() {
    this.initialize();
  }

  initialize() {
    const time = Date.now();

    this.startTime = time;
    this.lastTime = time;
  }

  calculateTime() {
    const time = Date.now();

    this.elapsedTime = time - this.startTime;
    this.lastTime = time;
  }

  getElapsedTime() {
    return this.elapsedTime;
  }
}

window.addEventListener('load', () => {
  const F = new FullScreen();
  const L = new Loading();

  L.initialize()
    .then(() => {
      const S = new Sketch();
  });
});
