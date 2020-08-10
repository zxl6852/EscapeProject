import * as PIXI from "pixi.js";
import "../../createVariable.js";

// app.renderer.autoResize = true;
// app.renderer.resize(window.innerWidth - 18, window.innerHeight - 18);

app.stage = new PIXI.display.Stage();
const topLayer = new PIXI.display.Layer();
app.stage.addChild(topLayer);
topLayer.group.enableSort = true;