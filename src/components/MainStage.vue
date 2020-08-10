<template>
  <div></div>
</template>

<script>
// import * as PIXI from "pixi.js";
// import * as pixisound from "pixi-sound";
import { Howl, Howler } from "howler";
import { setup } from "./functions.js";

import {
  Application,
  loader,
  Sprite,
  TextureCache,
  Rectangle,
  renderer,
  Graphics,
  Container,
  TextStyle,
  varGameStart,
  varGameDeath,
  varGameIng,
} from "./createVariable.js";

import {
  imagesPath,
  musicsPath,
  resourcesPath,
  manifest,
  sprites,
  sound,
  soundss,
} from "./media.js";

export default {
  data() {
    return {
      app: undefined,
      GAME_STATUS: {
        UNINIT: 0, //初始态
        INIT: 1, //开始初始化
        LOADED: 2, //资源加载完成
        PLAYING: 3, //游戏中
        GAME_OVER: 4, //游戏结束
      },
    };
  },
  created() {
    varGameStart.app = new Application({
      width: 512,
      // height: 550,
      height: 750,
      antialias: true,
      transparent: false,
      resolution: 1,
      backgroundColor: 0x000000,
    });

    document.body.appendChild(varGameStart.app.view);

    // varGameStart.sounds = new Array(soundss.length);
  },
  mounted() {
    // this.app.stage = new PIXI.display.Stage();
    // const topLayer = new PIXI.display.Layer();
    // app.stage.addChild(topLayer);
    // topLayer.group.enableSort = true;

    // this.app.renderer.view.style.position = "absolute";
    // this.app.renderer.view.style.display = "block";
    // this.app.renderer.autoResize = true;
    // this.app.renderer.resize(window.innerWidth, window.innerHeight);

    loader
      .add(imagesPath + "gameswl.json")
      .add(imagesPath + "gameing.json")
      .add(imagesPath + "treasureHunter.json");
    // .add(imagesPath + "ladder.png")
    // .add(imagesPath + "snow.gif");

    // for (let name in picture) {
    //   loader.add(name, picture[name]);
    // }

    soundss.forEach((name, i) => {
      varGameStart.sounds[i] = new Howl({
        src: [name],
        loop: true,
      });
    });

    varGameStart.soundSprite = new Howl({
      src: [musicsPath + "sprite.mp3"],
      sprite: {
        shot: [1000, 2000],
      },
    });

    loader.load(setup); //名子自創
  },
  methods: {
    // newSprite: function (idName, picNameArray) {
    //   const spthis = this;
    //   const a = {};
    //   picNameArray.forEach((picName) => {
    //     a[`pic${picName.split(".")[0]}`] = new Sprite(spthis[idName][picName]);
    //   });
    // },
    // setup: function () {
    //   varGameStart.id =
    //     loader.resources[imagesPath + "treasureHunter.json"].textures;
    //   varGameStart.id2 = loader.resources[imagesPath + "gameswl.json"].textures;
    //   varGameStart.id3 = loader.resources[imagesPath + "gameing.json"].textures;
    //   // this.newSprite("id2", [
    //   //   "Dungeon.png",
    //   //   "start.png",
    //   //   "escapeProject.png",
    //   //   "demonEye.png",
    //   //   "YouDeath.png",
    //   //   "againButton1.png",
    //   //   "againButton2.png",
    //   //   "endButton1.png",
    //   //   "endButton2.png",
    //   //   "JWDLx5AZBtI.jpg",
    //   // ]);
    //   //start
    //   varGameStart.picDungeon = new Sprite(varGameStart.id2["Dungeon.png"]);
    //   varGameStart.picStart = new Sprite(varGameStart.id2["start.png"]);
    //   varGameStart.picEscapeProject = new Sprite(
    //     varGameStart.id2["escapeProject.png"]
    //   );
    //   varGameStart.picDemonEye = new Sprite(varGameStart.id2["demonEye.png"]);
    //   //death
    //   varGameDeath.picDeath = new Sprite(varGameStart.id2["YouDeath.png"]);
    //   varGameDeath.picBtnAgain = new Sprite(
    //     varGameStart.id2["againButton1.png"]
    //   );
    //   varGameDeath.picBtnAgain2 = new Sprite(
    //     varGameStart.id2["againButton2.png"]
    //   );
    //   varGameDeath.picBtnEnd = new Sprite(varGameStart.id2["endButton1.png"]);
    //   varGameDeath.picBtnEnd2 = new Sprite(varGameStart.id2["endButton2.png"]);
    //   varGameDeath.picEnd = new Sprite(varGameStart.id2["JWDLx5AZBtI.jpg"]);
    //   //gamein
    //   varGameIng.dungeon = new Sprite(varGameStart.id["dungeon.png"]);
    //   varGameIng.treasure = new Sprite(varGameStart.id["treasure.png"]);
    //   varGameIng.door = new Sprite(varGameStart.id["door.png"]);
    //   varGameIng.explorer = new Sprite(varGameStart.id["explorer.png"]);
    //   varGameIng.treasure = new Sprite(varGameStart.id["treasure.png"]);
    //   varGameIng.gameOpenScene = new Container();
    //   this.app.stage.addChild(varGameIng.gameOpenScene);
    //   // conf();
    //   // console.log(conf);
    //   //開頭背景
    //   configSprite(
    //     varGameStart.picDungeon,
    //     2,
    //     2,
    //     0.5,
    //     0.5,
    //     this.app.renderer.width / 2 + 15,
    //     this.app.renderer.height / 2
    //   );
    //   varGameIng.gameOpenScene.addChild(varGameStart.picDungeon);
    //   //開頭惡魔
    //   this.configSprite(
    //     varGameStart.picDemonEye,
    //     0.2,
    //     0.2,
    //     0.5,
    //     0.5,
    //     this.app.renderer.width / 2,
    //     this.app.renderer.height / 2
    //   );
    //   varGameIng.gameOpenScene.addChild(varGameStart.picDemonEye);
    //   //開頭標題
    //   this.configSprite(
    //     varGameStart.picEscapeProject,
    //     1,
    //     1,
    //     0.5,
    //     0.5,
    //     this.app.renderer.width / 2,
    //     this.app.renderer.height / 2
    //   );
    //   varGameIng.gameOpenScene.addChild(varGameStart.picEscapeProject);
    //   //開頭start
    //   this.configSprite(
    //     varGameStart.picStart,
    //     0.3,
    //     0.3,
    //     0.5,
    //     0.5,
    //     this.app.renderer.width / 2,
    //     this.app.renderer.height / 2 + 150,
    //     (varGameStart.picStart.interactive = true),
    //     (varGameStart.picStart.buttonMode = true),
    //     varGameStart.picStart.on("click", this.gameStart)
    //   );
    //   varGameIng.gameOpenScene.addChild(varGameStart.picStart);
    //   this.configSprite(
    //     varGameDeath.picDeath,
    //     0.7,
    //     0.7,
    //     0.5,
    //     0.5,
    //     this.app.renderer.width / 2,
    //     this.app.renderer.height / 2 - 100
    //   );
    //   varGameIng.gameScene = new Container();
    //   this.app.stage.addChild(varGameIng.gameScene);
    //   //血條容器
    //   varGameIng.healthBar = new Container();
    //   varGameIng.healthBar.position.set(this.app.renderer.width - 160, 5);
    //   varGameIng.gameScene.addChild(varGameIng.healthBar);
    //   //血條邊框
    //   varGameIng.roundBoxl = new Graphics();
    //   varGameIng.roundBoxl.lineStyle(4, 0x99ccff, 2);
    //   varGameIng.roundBoxl.beginFill(0x00cc99);
    //   varGameIng.roundBoxl.drawRoundedRect(0, 0, 150, 25, 10);
    //   varGameIng.roundBoxl.endFill();
    //   varGameIng.healthBar.addChild(varGameIng.roundBoxl);
    //   //血條中間
    //   varGameIng.roundBox = new Graphics();
    //   varGameIng.roundBoxW = 145;
    //   varGameIng.roundBox.beginFill(0xff9933);
    //   varGameIng.roundBox.drawRoundedRect(3, 3, varGameIng.roundBoxW, 20, 10);
    //   varGameIng.roundBox.endFill();
    //   varGameIng.healthBar.addChild(varGameIng.roundBox);
    //   //方便抓取
    //   varGameIng.healthBar.outer = varGameIng.roundBox;
    //   //血量百分比
    //   varGameIng.blood =
    //     (varGameIng.healthBar.outer.width / varGameIng.roundBoxW) * 100;
    //   varGameIng.PIXIText = new PIXI.Text(varGameIng.blood + "%");
    //   varGameIng.PIXIText.style = { fill: "white", font: "16px PetMe64" };
    //   varGameIng.PIXIText.x = varGameIng.healthBar.x - 80;
    //   varGameIng.PIXIText.y = varGameIng.healthBar.y - 3;
    //   varGameIng.gameScene.addChild(varGameIng.PIXIText);
    //   varGameIng.healthBar.blood = varGameIng.PIXIText;
    //   varGameIng.stras = new PIXI.Text(varGameIng.stra);
    //   varGameIng.stras.style = { fill: "white", font: "16px PetMe64" };
    //   varGameIng.stras.x = varGameIng.healthBar.x - 150;
    //   varGameIng.stras.y = varGameIng.healthBar.y - 3;
    //   varGameIng.stras.visible = false;
    //   varGameIng.gameScene.addChild(varGameIng.stras);
    //   varGameIng.healthBar.sdf = varGameIng.stras;
    //   //狀態
    //   varGameIng.status = new PIXI.Text("");
    //   varGameIng.status.style = { fill: "white", font: "16px PetMe64" };
    //   varGameIng.status.x = 10;
    //   varGameIng.status.y = varGameIng.healthBar.y - 3;
    //   varGameIng.gameScene.addChild(varGameIng.status);
    //   varGameIng.gameScene.status = varGameIng.status;
    //   //地牢
    //   varGameIng.dungeon.y = 37;
    //   varGameIng.gameScene.addChild(varGameIng.dungeon);
    //   //寶藏
    //   varGameIng.treasure.x = 250;
    //   varGameIng.treasure.y = 250;
    //   varGameIng.gameScene.addChild(varGameIng.treasure);
    //   //門
    //   varGameIng.door.x = 68;
    //   varGameIng.door.y = 37;
    //   varGameIng.gameScene.addChild(varGameIng.door);
    //   //冒險家
    //   varGameIng.explorer.vx = 15;
    //   varGameIng.explorer.vy = 15;
    //   varGameIng.explorer.x = varGameIng.door.x;
    //   varGameIng.explorer.y = varGameIng.door.y;
    //   varGameIng.gameScene.addChild(varGameIng.explorer);
    //   //製造史萊姆
    //   for (let i = 0; i < varGameIng.numberOfBlobs; i++) {
    //     varGameIng.blob = new Sprite(varGameStart.id["blob.png"]);
    //     varGameIng.x = varGameIng.spacing * i + varGameIng.xOffset;
    //     varGameIng.y = this.randomInt(30, 470);
    //     // blob.x = randomInt(31, 459);
    //     // blob.y = randomInt(71, 484);
    //     // if (boxesIntersect(howblob, blob)) {
    //     //     blob.x = randomInt(31, 459);
    //     //     blob.y = randomInt(71, 484);
    //     // }
    //     varGameIng.blob.x = varGameIng.x;
    //     varGameIng.blob.y = varGameIng.y;
    //     varGameIng.blob.vy = varGameIng.speed * varGameIng.direction;
    //     varGameIng.direction *= -1;
    //     varGameIng.blobArr.push(varGameIng.blob);
    //     varGameIng.gameScene.addChild(varGameIng.blob);
    //     varGameIng.howblob = varGameIng.blob;
    //   }
    //   //遊戲結束容器
    //   varGameIng.gameOverScene = new Container();
    //   this.app.stage.addChild(varGameIng.gameOverScene);
    //   varGameDeath.picDeath.anchor.set(0.5, 0.5);
    //   varGameDeath.picDeath.x = this.app.renderer.width / 2;
    //   varGameDeath.picDeath.y = this.app.renderer.height / 2 - 100;
    //   varGameIng.gameOverScene.addChild(varGameDeath.picDeath);
    //   varGameDeath.picBtnAgain.anchor.set(0.5, 0.5);
    //   varGameDeath.picBtnAgain.x = this.app.renderer.width / 2 - 100;
    //   varGameDeath.picBtnAgain.y = this.app.renderer.height / 2 + 100;
    //   varGameDeath.picBtnAgain.interactive = true;
    //   varGameDeath.picBtnAgain.buttonMode = true;
    //   varGameDeath.picBtnAgain.on("click", this.gmaeInit);
    //   varGameIng.gameOverScene.addChild(varGameDeath.picBtnAgain);
    //   varGameDeath.picBtnEnd.anchor.set(0.5, 0.5);
    //   varGameDeath.picBtnEnd.x = this.app.renderer.width / 2 + 100;
    //   varGameDeath.picBtnEnd.y = this.app.renderer.height / 2 + 100;
    //   varGameIng.gameOverScene.addChild(varGameDeath.picBtnEnd);
    //   //設定遊戲狀態
    //   varGameIng.state = this.open;
    //   // console.log(this.state);
    //   //加入遊戲循環
    //   this.app.ticker.add((delta) => this.gameLoop(delta));
    //   // varGameStart.sounds[0].play();
    // },
    // configSprite: function (e, scaleX, scaleY, anchorX, anchorY, x, y) {
    //   e.scale.x = scaleX;
    //   e.scale.y = scaleY;
    //   e.anchor.set(anchorX, anchorY);
    //   e.x = x;
    //   e.y = y;
    // },
    // gameLoop: function (delta) {
    //   varGameIng.state(delta);
    //   // this.open(delta);
    // },
    // open: function (delta) {
    //   varGameIng.gameScene.visible = false;
    //   varGameIng.gameOverScene.visible = false;
    //   const openthis = this;
    //   //   //start閃爍
    //   if (varGameIng.startcheck != 1) {
    //     varGameIng.startcheck = 1;
    //     // this.sounds[6].play();
    //     let ck = 0;
    //     setInterval(function () {
    //       if (ck === 0) {
    //         varGameStart.picStart.alpha -= 0.05;
    //         varGameStart.picDemonEye.alpha -= 0.05;
    //         if (varGameStart.picStart.alpha <= 0) ck = 1;
    //       } else {
    //         varGameStart.picStart.alpha += 0.05;
    //         varGameStart.picDemonEye.alpha += 0.05;
    //         if (varGameStart.picStart.alpha >= 1) ck = 0;
    //       }
    //     }, 100);
    //   }
    // },
    // gameStart: function () {
    //   const openthis = this;
    //   varGameStart.picStart.interactive = false;
    //   varGameStart.sounds[6].stop();
    //   varGameStart.sounds[7].play();
    //   if (varGameIng.startcheck === 1) {
    //     varGameStart.picDemonEye.alpha = 1;
    //     varGameIng.startcheck = 1;
    //     let ck = 0;
    //     setInterval(function () {
    //       if (ck === 0) {
    //         varGameStart.picStart.alpha = 0;
    //         if (varGameStart.picStart.alpha <= 0) ck = 1;
    //       } else {
    //         varGameStart.picStart.alpha = 1;
    //         if (varGameStart.picStart.alpha >= 1) ck = 0;
    //       }
    //     }, 150);
    //   }
    //   setTimeout(function () {
    //     varGameIng.state = openthis.play;
    //     varGameIng.gameOpenScene.visible = false;
    //     varGameIng.gameScene.visible = true;
    //     varGameStart.sounds[0].play();
    //   }, 2000);
    // },
    // play: function () {
    //   varGameIng.gameScene.visible = true;
    //   varGameStart.sounds[7].stop();
    // },
    // randomInt: function (min, max) {
    //   return Math.floor(Math.random() * (max - min + 1)) + min;
    // },
    //  gameInit: function () {
    //     varGameDeath.picBtnAgain.interactive = false;
    //     window.location.replace(window.location.href);
    //     // app.renderer.render(gameScene);
    //   },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
