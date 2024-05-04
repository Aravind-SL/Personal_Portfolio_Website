import {Application, Graphics} from 'pixi.js';

const app = new Application();

let obj = new Graphics()
  .rect(0, 0, 200, 200)
  .fill(0xff0000);


obj.position.x = window.innerWidth/2
obj.position.y = window.innerHeight/2
obj.pivot.x = 100
obj.pivot.y = 100


const duplicates: Graphics[] =  [];

for (let i = 0; i < 10; i++){
  let dup = new Graphics()
    .rect(0, 0, 10 * i, 10 * i)
    .fill(0xffff00);
  dup.position.x += obj.position.x + i * 80;
  dup.position.y += obj.position.y + i * 10;
  dup.pivot.x = 5 * i
  dup.pivot.y = 5 * i
  duplicates.push(
    dup
  )
}

export const setup: () => void = async () => {
  await app.init({
    resizeTo: window
  });


  app.stage.addChild(obj);
  duplicates.forEach((e) => app.stage.addChild(e));

  let elapsed = 0.0;
  app.ticker.add((delta) => {
    obj.rotation += 0.1 * delta.deltaTime;
    duplicates.forEach(
      (e, i) => {
        e.position.y = (window.innerHeight / 2) + i * 100
        e.rotation += 0.1 * delta.deltaTime * i
      });
  })


  // Setup Element
  app.canvas.className = "fixed -z-10 top-0 left-0";
  document.body.appendChild(app.canvas);
}
