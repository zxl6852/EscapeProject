import * as PIXI from "pixi.js";
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
    AnimatedSprite,
    Texture,
    varGameStart,
    varGameDeath,
    varGameIng,
    varGameWin,
    n
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


export function setup() {
    // const su = new SpriteUtilities(PIXI);
    // zero;
    varGameStart.id =
        loader.resources[imagesPath + "treasureHunter.json"].textures;
    varGameStart.id2 = loader.resources[imagesPath + "gameswl.json"].textures;
    varGameStart.id3 = loader.resources[imagesPath + "gameing.json"].textures;
    varGameStart.sheet = loader.resources[imagesPath + "gameing.json"].spritesheet;

    //新建Sprite
    // n.s['id'] = newSprite("id", [
    //     { key: "dungeon", value: "dungeon.png" },
    //     { key: "door", value: "door.png" },
    //     { key: "explorer", value: "explorer.png" },
    // ]);
    // n.s['id2'] = newSprite("id2", [
    //     { key: "picDungeon", value: "Dungeon.png" },
    //     { key: "picStart", value: "start.png" },
    //     { key: "picEscapeProject", value: "escapeProject.png" },
    //     { key: "picDemonEye", value: "demonEye.png" },
    //     { key: "picDeath", value: "YouDeath.png" },
    //     { key: "picBtnAgain", value: "againButton1.png" },
    //     { key: "picBtnAgain2", value: "againButton2.png" },
    //     { key: "picBtnEnd", value: "endButton1.png" },
    //     { key: "picBtnEnd2", value: "endButton2.png" },
    //     { key: "picEnd", value: "JWDLx5AZBtI.jpg" },
    //     { key: "picWin1", value: "end1.jpg" },
    //     { key: "picWin1_1", value: "end1-1.png" },
    //     { key: "picWin1_2", value: "end1-2.png" },
    //     { key: "picWin1_3", value: "end1-3.png" },
    //     { key: "picWin1_4", value: "end1-4.png" },
    //     { key: "picWin2", value: "end2.jpg" },
    //     { key: "picWin2_1", value: "end2-1.png" },
    //     { key: "picWin2_2", value: "end2-2.png" },
    //     { key: "picWin2_3", value: "end2-3.png" },
    //     { key: "picWin2_4", value: "end2-4.png" },
    // ]);
    // n.s['id3'] = newSprite("id3", [
    //     { key: "treasure", value: "key.png" },
    //     { key: "door2", value: "door2.png" },
    //     { key: "picLadder", value: "ladder.png" },
    //     { key: "picSnow", value: "snow.gif" },
    // ]);




    //start
    varGameStart.picDungeon = new Sprite(varGameStart.id2["Dungeon.png"]);
    varGameStart.picStart = new Sprite(varGameStart.id2["start.png"]);
    varGameStart.picEscapeProject = new Sprite(
        varGameStart.id2["escapeProject.png"]
    );
    varGameStart.picDemonEye = new Sprite(varGameStart.id2["demonEye.png"]);

    //death
    varGameDeath.picDeath = new Sprite(varGameStart.id2["YouDeath.png"]);
    varGameDeath.picBtnAgain = new Sprite(
        varGameStart.id2["againButton1.png"]
    );
    varGameDeath.picBtnAgain2 = new Sprite(
        varGameStart.id2["againButton2.png"]
    );
    varGameDeath.picBtnEnd = new Sprite(varGameStart.id2["endButton1.png"]);
    varGameDeath.picBtnEnd2 = new Sprite(varGameStart.id2["endButton2.png"]);
    varGameDeath.picEnd = new Sprite(varGameStart.id2["JWDLx5AZBtI.jpg"]);

    //gamein
    varGameIng.dungeon = new Sprite(varGameStart.id["dungeon.png"]);
    varGameIng.treasure = new Sprite(varGameStart.id3["key.png"]);
    varGameIng.door = new Sprite(varGameStart.id["door.png"]);
    varGameIng.door2 = new Sprite(varGameStart.id3["door2.png"]);
    varGameIng.explorer = new Sprite(varGameStart.id["explorer.png"]);
    varGameIng.note = new Sprite(varGameStart.id3["Paper.png"]);



    //gamewin
    varGameWin.picWin1 = new Sprite(varGameStart.id2["end1.jpg"]);
    varGameWin.picWin1_1 = new Sprite(varGameStart.id2["end1-1.png"]);
    varGameWin.picWin1_2 = new Sprite(varGameStart.id2["end1-2.png"]);
    varGameWin.picWin1_3 = new Sprite(varGameStart.id2["end1-3.png"]);
    varGameWin.picWin1_4 = new Sprite(varGameStart.id2["end1-4.png"]);
    varGameWin.picWin2 = new Sprite(varGameStart.id2["end2.jpg"]);
    varGameWin.picWin2_1 = new Sprite(varGameStart.id2["end2-1.png"]);
    varGameWin.picWin2_2 = new Sprite(varGameStart.id2["end2-2.png"]);
    varGameWin.picWin2_3 = new Sprite(varGameStart.id2["end2-3.png"]);
    varGameWin.picWin2_4 = new Sprite(varGameStart.id2["end2-4.png"]);
    varGameWin.picLadder = new Sprite(varGameStart.id3["ladder.png"]);
    varGameWin.spd1_lf = new AnimatedSprite(varGameStart.sheet.animations['spd1_lf']);



    openConfig();

    commonConfig();

    level1Config();

    deathConfig();

    winConfig();

    //設定遊戲狀態
    varGameIng.state = open;

    //加入遊戲循環
    varGameStart.app.ticker.add((delta) => gameLoop(delta));
    varGameStart.sounds[6].play();
}

export function zero() {
    varGameIng.gameScene.visible = false;
    varGameIng.gameOpenScene.visible = false;
    varGameIng.gameOverScene.visible = false;
    varGameIng.gameWinScene.visible = false;
}

//設定sprite數據
export function configSprite(e, scaleX, scaleY, anchorX, anchorY, x, y) {
    e.scale.x = scaleX;
    e.scale.y = scaleY;
    e.anchor.set(anchorX, anchorY);
    e.x = x;
    e.y = y;
}

export function newSprite(idName, picNameArray) {
    const sprite = {};
    picNameArray.forEach((picItem) => {
        sprite[picItem.key] = new Sprite([idName][picItem.value]);
    });
    return sprite;
}
// export function newAnimatedSprite(idName, idName2) {
//     const sprite = {};
//     // this.idName = idName;
//     sprite[idName] = new AnimatedSprite(varGameStart.sheet.animations[idName2]);
//     // this.idName = new AnimatedSprite(varGameStart.sheet.animations[idName2]);
//     return sprite;
// }


//開頭數據設置
export function openConfig() {

    //開頭容器
    varGameIng.gameOpenScene = new Container();
    varGameStart.app.stage.addChild(varGameIng.gameOpenScene);

    //開頭背景
    configSprite(
        varGameStart.picDungeon,
        2,
        2,
        0.5,
        0.5,
        varGameStart.app.renderer.width / 2 + 15,
        varGameStart.app.renderer.height / 2
    );
    varGameIng.gameOpenScene.addChild(varGameStart.picDungeon);

    //開頭惡魔
    configSprite(
        varGameStart.picDemonEye,
        0.2,
        0.2,
        0.5,
        0.5,
        varGameStart.app.renderer.width / 2,
        varGameStart.app.renderer.height / 2
    );
    varGameIng.gameOpenScene.addChild(varGameStart.picDemonEye);

    //開頭標題
    configSprite(
        varGameStart.picEscapeProject,
        1,
        1,
        0.5,
        0.5,
        varGameStart.app.renderer.width / 2,
        varGameStart.app.renderer.height / 2
    );
    varGameIng.gameOpenScene.addChild(varGameStart.picEscapeProject);

    //開頭start
    configSprite(
        varGameStart.picStart,
        0.3,
        0.3,
        0.5,
        0.5,
        varGameStart.app.renderer.width / 2,
        varGameStart.app.renderer.height / 2 + 150,
        (varGameStart.picStart.interactive = true),
        (varGameStart.picStart.buttonMode = true),
        varGameStart.picStart.on("click", gameStart)
    );
    varGameIng.gameOpenScene.addChild(varGameStart.picStart);
}

//共同數據設置
export function commonConfig() {

    //遊戲內容器
    varGameIng.gameScene = new Container();
    varGameStart.app.stage.addChild(varGameIng.gameScene);

    //血條容器
    varGameIng.healthBar = new Container();
    varGameIng.healthBar.position.set(varGameStart.app.renderer.width - 160, 80);
    varGameIng.gameScene.addChild(varGameIng.healthBar);

    //血條邊框
    varGameIng.roundBoxl = new Graphics();
    varGameIng.roundBoxl.lineStyle(4, 0x99ccff, 2);
    varGameIng.roundBoxl.beginFill(0x000000);
    varGameIng.roundBoxl.drawRoundedRect(0, 0, 150, 25, 10);
    varGameIng.roundBoxl.endFill();
    varGameIng.healthBar.addChild(varGameIng.roundBoxl);

    //血條中間
    varGameIng.roundBox = new Graphics();
    varGameIng.roundBoxW = 145;
    varGameIng.roundBox.beginFill(0xFF9933);
    varGameIng.roundBox.drawRoundedRect(3, 3, varGameIng.roundBoxW, 20, 10);
    varGameIng.roundBox.endFill();
    varGameIng.healthBar.addChild(varGameIng.roundBox);

    //方便抓取
    varGameIng.healthBar.outer = varGameIng.roundBox;

    //血量百分比
    varGameIng.blood =
        (varGameIng.healthBar.outer.width / varGameIng.roundBoxW) * 100;
    varGameIng.PIXIText = new PIXI.Text(varGameIng.blood + "%");
    varGameIng.PIXIText.style = { fill: "white", font: "16px PetMe64" };
    varGameIng.PIXIText.x = varGameIng.healthBar.x - 80;
    varGameIng.PIXIText.y = varGameIng.healthBar.y - 3;
    varGameIng.gameScene.addChild(varGameIng.PIXIText);

    varGameIng.healthBar.blood = varGameIng.PIXIText;

    //無敵時間
    varGameIng.stras = new PIXI.Text(varGameIng.stra);
    varGameIng.stras.style = { fill: "white", font: "16px PetMe64" };
    varGameIng.stras.x = varGameIng.healthBar.x - 150;
    varGameIng.stras.y = varGameIng.healthBar.y - 3;
    varGameIng.stras.visible = false;
    varGameIng.gameScene.addChild(varGameIng.stras);

    varGameIng.healthBar.sdf = varGameIng.stras;

    //取得key數
    varGameIng.getKeyT = new PIXI.Text(varGameIng.getKey + "/3");
    varGameIng.getKeyT.style = { fill: "white", font: "16px PetMe64" };
    varGameIng.getKeyT.x = varGameIng.healthBar.x - 170;
    varGameIng.getKeyT.y = varGameIng.healthBar.y - 3;
    varGameIng.gameScene.addChild(varGameIng.getKeyT);

    varGameIng.healthBar.key = varGameIng.getKeyT;

    //key圖
    varGameIng.key = new Sprite(varGameStart.id3["key.png"]);
    varGameIng.key.x = varGameIng.healthBar.x - 180;
    varGameIng.key.y = varGameIng.healthBar.y - 3;
    varGameIng.gameScene.addChild(varGameIng.key);


    //狀態
    varGameIng.status = new PIXI.Text("");
    varGameIng.status.style = { fill: "white", font: "16px PetMe64" };
    varGameIng.status.x = 10;
    varGameIng.status.y = varGameIng.healthBar.y - 3;
    varGameIng.gameScene.addChild(varGameIng.status);

    varGameIng.gameScene.status = varGameIng.status;

    //note顯示字
    varGameIng.noteText = new PIXI.Text('');
    varGameIng.noteText.style = { fill: "white", font: "10px PetMe64" };
    varGameIng.noteText.x = 16;
    varGameIng.noteText.y = varGameStart.app.renderer.height - 120;
    // varGameIng.noteText.visible = false;
    varGameIng.gameScene.addChild(varGameIng.noteText);

    varGameIng.healthBar.noteText = varGameIng.noteText;

    //地牢
    // varGameIng.dungeon.y = 37;
    configSprite(
        varGameIng.dungeon,
        1,
        1,
        0.5,
        0.5,
        varGameStart.app.renderer.width / 2,
        varGameStart.app.renderer.height / 2
    );
    varGameIng.gameScene.addChild(varGameIng.dungeon);
}

//第一關設置
export function level1Config() {
    //遊戲內容器
    varGameIng.gamel1Scene = new Container();
    varGameIng.gameScene.addChild(varGameIng.gamel1Scene);

    //注意紙
    configSprite(
        varGameIng.note,
        0.05,
        0.05,
        0.5,
        0.5,
        50,
        550
    );
    varGameIng.gamel1Scene.addChild(varGameIng.note);

    //寶藏
    configSprite(
        varGameIng.treasure,
        1,
        1,
        0.5,
        0.5,
        varGameIng.dungeon.width / 2 + 200,
        randomInt(150, 580)
    );
    varGameIng.gameScene.addChild(varGameIng.treasure);

    //門
    varGameIng.door.x = 68;
    varGameIng.door.y = 135;
    varGameIng.door.anchor.set(0.5, 0.5);
    varGameIng.gameScene.addChild(varGameIng.door);

    // varGameIng.wlContainer = new Container();

    // varGameIng.wlContainer.vx = varGameIng.wlvx;
    // varGameIng.wlContainer.vy = varGameIng.wlvy;
    // varGameIng.wlContainer.width = varGameIng.explorer.width;
    // varGameIng.wlContainer.height = varGameIng.explorer.height;
    // varGameIng.gameScene.addChild(varGameIng.wlContainer);

    // varGameIng.man1_fr = new AnimatedSprite(varGameStart.sheet.animations['man1_fr']);
    // varGameIng.man1_bk = new AnimatedSprite(varGameStart.sheet.animations['man1_bk']);
    // varGameIng.man1_lf = new AnimatedSprite(varGameStart.sheet.animations['man1_lf']);
    // varGameIng.man1_rt = new AnimatedSprite(varGameStart.sheet.animations['man1_rt']);

    // varGameIng.man1_fr.x = varGameIng.door.x;
    // varGameIng.man1_fr.y = varGameIng.door.y;

    // varGameIng.man1_fr.width = varGameIng.explorer.width;
    // varGameIng.man1_fr.height = varGameIng.explorer.height;
    // varGameIng.man1_bk.width = varGameIng.explorer.width;
    // varGameIng.man1_bk.height = varGameIng.explorer.height;
    // varGameIng.man1_lf.width = varGameIng.explorer.width;
    // varGameIng.man1_lf.height = varGameIng.explorer.height;
    // varGameIng.man1_rt.width = varGameIng.explorer.width;
    // varGameIng.man1_rt.height = varGameIng.explorer.height;

    // varGameIng.man1_fr.visible = true;
    // varGameIng.man1_fr.animationSpeed = varGameIng.wlsp;
    // varGameIng.wlContainer.addChild(varGameIng.man1_fr);
    // varGameIng.man1_bk.visible = false;
    // varGameIng.man1_bk.animationSpeed = varGameIng.wlsp;
    // varGameIng.wlContainer.addChild(varGameIng.man1_bk);
    // varGameIng.man1_lf.visible = false;
    // varGameIng.man1_lf.animationSpeed = varGameIng.wlsp;
    // varGameIng.wlContainer.addChild(varGameIng.man1_lf);
    // varGameIng.man1_rt.visible = false;
    // varGameIng.man1_rt.animationSpeed = varGameIng.wlsp;
    // varGameIng.wlContainer.addChild(varGameIng.man1_rt);

    //冒險家
    varGameIng.explorer.vx = varGameIng.wlvx;
    varGameIng.explorer.vy = varGameIng.wlvy;
    varGameIng.explorer.x = varGameIng.door.x;
    varGameIng.explorer.y = varGameIng.door.y + 20;
    // varGameIng.explorer.anchor.set(0.5, 0.5);
    varGameIng.gameScene.addChild(varGameIng.explorer);

    //製造敵人
    for (let i = 0; i < varGameIng.numberOfBlobs; i++) {
        varGameIng.blob = new Sprite(varGameStart.id["blob.png"]);

        varGameIng.x = varGameIng.spacing * i + varGameIng.xOffset;
        varGameIng.y = randomInt(135, 570);

        // blob.x = randomInt(31, 459);
        // blob.y = randomInt(71, 484);
        // if (boxesIntersect(howblob, blob)) {
        //     blob.x = randomInt(31, 459);
        //     blob.y = randomInt(71, 484);
        // }
        varGameIng.blob.x = varGameIng.x;
        varGameIng.blob.y = varGameIng.y;

        varGameIng.blob.vy = varGameIng.speed * varGameIng.direction;

        varGameIng.direction *= -1;

        varGameIng.blobArr.push(varGameIng.blob);

        varGameIng.gamel1Scene.addChild(varGameIng.blob);

        // varGameIng.howblob = varGameIng.blob;
    }

}

//第二關設置
export function level2Config() {
    varGameIng.blobArr = [];
    varGameIng.gamel1Scene.visible = false;

    varGameStart.sounds[10].play();
    varGameStart.sounds[10].volume(0.3);

    varGameIng.hitdemage = 30;
    varGameIng.speed = 4;

    //遊戲內容器
    varGameIng.gamel2Scene = new Container();
    varGameIng.gameScene.addChild(varGameIng.gamel2Scene);

    varGameIng.explorer.x = varGameIng.door.x;
    varGameIng.explorer.y = varGameIng.door.y + 20;

    //寶藏
    varGameIng.treasure.x = 60;
    varGameIng.treasure.y = randomInt(150, 580);

    //門
    varGameIng.door.x = 450;
    varGameIng.door.y = 135;

    varGameIng.spacing = 48;
    varGameIng.xOffset = 100;

    //製造敵人
    for (let i = 0; i < varGameIng.numberOfBlobs; i++) {
        varGameIng.chr1_bk = new AnimatedSprite(varGameStart.sheet.animations['chr1_bk']);
        varGameIng.chr1_fr = new AnimatedSprite(varGameStart.sheet.animations['chr1_fr']);

        varGameIng.x = varGameIng.spacing * i + varGameIng.xOffset;
        varGameIng.y = randomInt(135, 570);

        varGameIng.chr1_bk.x = varGameIng.x;
        varGameIng.chr1_bk.y = varGameIng.y;

        varGameIng.chr1_fr.x = varGameIng.chr1_bk.x;
        varGameIng.chr1_fr.y = varGameIng.chr1_bk.y;

        varGameIng.chr1_bk.vy = varGameIng.speed * varGameIng.direction;
        varGameIng.chr1_fr.vy = varGameIng.chr1_bk.vy;
        // varGameIng.chr1_bk.vy = 0;

        varGameIng.direction *= -1;

        varGameIng.blobArr2.push(varGameIng.chr1_bk, varGameIng.chr1_fr);

        varGameIng.chr1_bk.animationSpeed = 0.1;
        varGameIng.chr1_fr.animationSpeed = varGameIng.chr1_bk.animationSpeed;
        varGameIng.gamel2Scene.addChild(varGameIng.chr1_bk);
        varGameIng.gamel2Scene.addChild(varGameIng.chr1_fr);

        varGameIng.chr1_bk.play();
        varGameIng.chr1_fr.play();

        varGameIng.chr1_bk.visible = false;
        varGameIng.chr1_fr.visible = false;

        if (varGameIng.direction === 1) {
            varGameIng.chr1_fr.visible = true;
        } else varGameIng.chr1_bk.visible = true;
    }
}

//第三關設置
export function level3Config() {
    varGameIng.blobArr2 = [];
    varGameIng.gamel2Scene.visible = false;

    varGameStart.sounds[1].play();
    varGameStart.sounds[1].volume(0.3);

    varGameIng.hitdemage = 40;
    varGameIng.speed = 7;

    //遊戲內容器
    varGameIng.gamel3Scene = new Container();
    varGameIng.gameScene.addChild(varGameIng.gamel3Scene);

    //寶藏
    varGameIng.treasure.x = randomInt(30, 480);
    varGameIng.treasure.y = 170;

    //門
    varGameIng.door2.width = 110;
    varGameIng.door2.x = 17;
    varGameIng.door2.y = 550;
    // varGameIng.door2.anchor.set(0.5, 0.5);
    // varGameIng.door2.rotation = 2;
    varGameIng.gamel3Scene.addChild(varGameIng.door2);
    varGameIng.door.x = 20;
    varGameIng.door.y = 550;

    varGameIng.explorer.x = varGameIng.door.x + 20;
    varGameIng.explorer.y = varGameIng.door.y - 10;

    varGameIng.spacing = 80;
    varGameIng.xOffset = 100;

    //製造敵人
    for (let i = 0; i < varGameIng.numberOfBlobs; i++) {
        varGameIng.zph1_lf = new AnimatedSprite(varGameStart.sheet.animations['zph1_lf']);
        varGameIng.zph1_rt = new AnimatedSprite(varGameStart.sheet.animations['zph1_rt']);

        varGameIng.x = randomInt(20, 480);
        varGameIng.y = varGameIng.spacing * i + varGameIng.xOffset;

        varGameIng.zph1_lf.x = varGameIng.x;
        varGameIng.zph1_lf.y = varGameIng.y;

        varGameIng.zph1_rt.x = varGameIng.zph1_lf.x;
        varGameIng.zph1_rt.y = varGameIng.zph1_lf.y;

        varGameIng.zph1_lf.vx = varGameIng.speed * varGameIng.direction;
        varGameIng.zph1_rt.vx = varGameIng.zph1_lf.vx;
        // varGameIng.chr1_bk.vy = 0;

        varGameIng.direction *= -1;

        varGameIng.blobArr3.push(varGameIng.zph1_lf, varGameIng.zph1_rt);

        varGameIng.zph1_lf.animationSpeed = 0.1;
        varGameIng.zph1_rt.animationSpeed = varGameIng.zph1_lf.animationSpeed;
        varGameIng.gamel3Scene.addChild(varGameIng.zph1_lf);
        varGameIng.gamel3Scene.addChild(varGameIng.zph1_rt);

        varGameIng.zph1_lf.play();
        varGameIng.zph1_rt.play();

        varGameIng.zph1_lf.visible = false;
        varGameIng.zph1_rt.visible = false;

        if (varGameIng.direction === 1) {
            varGameIng.zph1_rt.visible = true;
        } else varGameIng.zph1_lf.visible = true;
    }
}
//死亡數據設置
export function deathConfig() {
    //遊戲結束容器
    varGameIng.gameOverScene = new Container();
    varGameStart.app.stage.addChild(varGameIng.gameOverScene);

    //背景
    configSprite(varGameDeath.picEnd, 1, 1, 0.5, 0.5,
        varGameStart.app.renderer.width / 2 + 100,
        varGameStart.app.renderer.height / 2);

    //文字
    configSprite(varGameDeath.picDeath, 1, 1, 0.5, 0.5,
        varGameStart.app.renderer.width / 2,
        varGameStart.app.renderer.height / 2 - 100);

    //重新按鈕
    configSprite(varGameDeath.picBtnAgain, 1, 1, 0.5, 0.5,
        varGameStart.app.renderer.width / 2 - 100,
        varGameStart.app.renderer.height / 2 + 100,
        varGameDeath.picBtnAgain.interactive = true,
        varGameDeath.picBtnAgain.buttonMode = true,
        varGameDeath.picBtnAgain.on("click", gameAgain));
    varGameDeath.picBtnAgain.on("mousedown", function () {
        varGameDeath.picBtnAgain.alpha = 0.5;
    });
    varGameDeath.picBtnAgain.on("mouseover", function () {
        varGameDeath.picBtnAgain.alpha = 0.8;
    });
    varGameDeath.picBtnAgain.on("mouseout", function () {
        varGameDeath.picBtnAgain.alpha = 1;
    });

    //結束按鈕
    configSprite(varGameDeath.picBtnEnd, 1, 1, 0.5, 0.5,
        varGameStart.app.renderer.width / 2 + 100,
        varGameStart.app.renderer.height / 2 + 100,
        varGameDeath.picBtnEnd.interactive = true,
        varGameDeath.picBtnEnd.buttonMode = true,
        varGameDeath.picBtnEnd.on("click", gameInit));
    varGameDeath.picBtnEnd.on("mousedown", function () {
        varGameDeath.picBtnEnd.alpha = 0.5;
    });
    varGameDeath.picBtnEnd.on("mouseover", function () {
        varGameDeath.picBtnEnd.alpha = 0.8;
    });
    varGameDeath.picBtnEnd.on("mouseout", function () {
        varGameDeath.picBtnEnd.alpha = 1;
    });

    varGameIng.gameOverScene.addChild(varGameDeath.picEnd);
    varGameIng.gameOverScene.addChild(varGameDeath.picDeath);
    varGameIng.gameOverScene.addChild(varGameDeath.picBtnAgain);
    varGameIng.gameOverScene.addChild(varGameDeath.picBtnEnd);

}
//勝利數據設置
export function winConfig() {
    //遊戲勝利容器
    varGameIng.gameWinScene = new Container();
    varGameStart.app.stage.addChild(varGameIng.gameWinScene);


    //取得三把key背景
    configSprite(varGameWin.picWin1, 0.7, 0.7, 0.5, 0.5,
        varGameStart.app.renderer.width / 2,
        varGameStart.app.renderer.height / 2);

    //取得三把key勝利文字
    configSprite(varGameWin.picWin1_1, 0.3, 0.3, 0, 0,
        0,
        varGameStart.app.renderer.height / 2 + 20);
    configSprite(varGameWin.picWin1_2, 0.3, 0.3, 0, 0,
        0,
        varGameStart.app.renderer.height / 2 + 40);
    configSprite(varGameWin.picWin1_3, 0.3, 0.3, 0, 0,
        4,
        varGameStart.app.renderer.height / 2 + 65);
    configSprite(varGameWin.picWin1_4, 0.4, 0.4, 0, 0,
        0,
        varGameStart.app.renderer.height / 2 + 80);

    varGameWin.picWin1_1.alpha = 0;
    varGameWin.picWin1_2.alpha = 0;
    varGameWin.picWin1_3.alpha = 0;
    varGameWin.picWin1_4.alpha = 0;

    varGameIng.gameWinScene.addChild(varGameWin.picWin1);
    varGameIng.gameWinScene.addChild(varGameWin.picWin1_1);
    varGameIng.gameWinScene.addChild(varGameWin.picWin1_2);
    varGameIng.gameWinScene.addChild(varGameWin.picWin1_3);
    varGameIng.gameWinScene.addChild(varGameWin.picWin1_4);


    //取得三把key背景
    configSprite(varGameWin.picWin2, 0.7, 0.7, 0.5, 0.5,
        varGameStart.app.renderer.width / 2,
        varGameStart.app.renderer.height / 2);

    //取得三把key勝利文字
    configSprite(varGameWin.picWin2_1, 0.3, 0.3, 0, 0,
        0,
        varGameStart.app.renderer.height / 2 + 20);
    configSprite(varGameWin.picWin2_2, 0.3, 0.3, 0, 0,
        0,
        varGameStart.app.renderer.height / 2 + 40);
    configSprite(varGameWin.picWin2_3, 0.3, 0.3, 0, 0,
        2,
        varGameStart.app.renderer.height / 2 + 60);
    configSprite(varGameWin.picWin2_4, 0.3, 0.3, 0, 0,
        0,
        varGameStart.app.renderer.height / 2 + 85);

    varGameWin.picWin2_1.alpha = 0;
    varGameWin.picWin2_2.alpha = 0;
    varGameWin.picWin2_3.alpha = 0;
    varGameWin.picWin2_4.alpha = 0;

    varGameIng.gameWinScene.addChild(varGameWin.picWin2);
    varGameIng.gameWinScene.addChild(varGameWin.picWin2_1);
    varGameIng.gameWinScene.addChild(varGameWin.picWin2_2);
    varGameIng.gameWinScene.addChild(varGameWin.picWin2_3);
    varGameIng.gameWinScene.addChild(varGameWin.picWin2_4);

    configSprite(varGameWin.spd1_lf, 1.5, 1.5, 0, 0,
        varGameStart.app.renderer.width,
        varGameStart.app.renderer.height - 80);
    varGameWin.spd1_lf.animationSpeed = 0.1;
    varGameWin.spd1_lf.play();
    varGameIng.gameWinScene.addChild(varGameWin.spd1_lf);

    //階梯
    configSprite(varGameWin.picLadder, 0.5, 0.5, 0.5, 0.5,
        varGameStart.app.renderer.width - 40,
        varGameStart.app.renderer.height / 2 + 150);
    varGameIng.gameWinScene.addChild(varGameWin.picLadder);

    //雪
    for (let i = 0; i < 5; i++) {
        varGameWin.picSnow = new Sprite(varGameStart.id3["snow.gif"]);
        switch (i) {
            case 0:
                configSprite(varGameWin.picSnow, 10, 10, 0, 0,
                    varGameStart.app.renderer.height / 2 + 100,
                    0);
                break;
            case 1:
                configSprite(varGameWin.picSnow, 5, 5, 0, 0,
                    varGameStart.app.renderer.height / 2 + 100,
                    0);
                break;
            case 2:
                configSprite(varGameWin.picSnow, 4, 4, 0, 0,
                    varGameStart.app.renderer.height / 2 - 100,
                    0);
                break;
            case 3:
                configSprite(varGameWin.picSnow, 3, 3, 0, 0,
                    varGameStart.app.renderer.height / 2,
                    0);
                break;
            case 4:
                configSprite(varGameWin.picSnow, 2, 2, 0, 0,
                    varGameStart.app.renderer.height / 2 - 300,
                    0);
                break;

            default:
                break;
        }
        varGameWin.snowArr.push(varGameWin.picSnow);

        varGameIng.gameWinScene.addChild(varGameWin.picSnow);
    }
}




//遊戲循環
export function gameLoop(delta) {
    varGameIng.state(delta);
    // open(delta);
}
//遊戲開頭
export function open(delta) {
    varGameIng.gameScene.visible = false;
    varGameIng.gameOverScene.visible = false;
    varGameIng.gameWinScene.visible = false;

    //   //start閃爍
    if (varGameIng.startcheck != 1) {
        varGameIng.startcheck = 1;
        // sounds[6].play();
        let ck = 0;
        setInterval(function () {
            if (ck === 0) {
                varGameStart.picStart.alpha -= 0.05;
                varGameStart.picDemonEye.alpha -= 0.05;
                if (varGameStart.picStart.alpha <= 0) ck = 1;
            } else {
                varGameStart.picStart.alpha += 0.05;
                varGameStart.picDemonEye.alpha += 0.05;
                if (varGameStart.picStart.alpha >= 1) ck = 0;
            }
        }, 100);
    }
}

//按start後
export function gameStart() {
    varGameStart.picStart.interactive = false;
    varGameStart.sounds[6].stop();
    varGameStart.sounds[7].play();

    if (varGameIng.startcheck === 1) {
        varGameStart.picDemonEye.alpha = 1;
        varGameIng.startcheck = 1;
        let ck = 0;
        setInterval(function () {
            if (ck === 0) {
                varGameStart.picStart.alpha = 0;
                if (varGameStart.picStart.alpha <= 0) ck = 1;
            } else {
                varGameStart.picStart.alpha = 1;
                if (varGameStart.picStart.alpha >= 1) ck = 0;
            }
        }, 150);
    }

    setTimeout(function () {
        varGameIng.state = play;
        varGameIng.gameOpenScene.visible = false;
        varGameIng.gameScene.visible = true;

        varGameStart.sounds[0].play();
        varGameStart.sounds[0].volume(0.5);
    }, 2000);
}

//遊戲中
export function play(delta) {
    if (varGameIng.dm === 2) {
        gameinitConfig();
    }
    varGameIng.gameScene.visible = true;
    varGameStart.sounds[7].stop();
    //同步xy
    // allXY();

    // 玩家撞牆偵測
    // contain(varGameIng.man1_fr, { x: 36, y: 60, width: 490, height: 530 });
    // contain(varGameIng.man1_bk, { x: 36, y: 60, width: 490, height: 530 });
    // contain(varGameIng.man1_lf, { x: 36, y: 60, width: 490, height: 530 });
    // contain(varGameIng.man1_rt, { x: 36, y: 60, width: 490, height: 530 });
    contain(varGameIng.explorer, { x: 30, y: 125, width: 480, height: 598 });

    //無敵時間
    if (varGameIng.stra > 0) {
        varGameIng.stra -= 1;
        varGameIng.healthBar.sdf.text = varGameIng.stra;
    }
    if (varGameIng.chr === 1) {
        varGameIng.enemyhX = 30;
        varGameIng.enemyhY = 130;
        varGameIng.enemyhW = 480;
        varGameIng.enemyhH = 600;
        varGameIng.enemyhB = -1;
        varGameIng.enemyArr = varGameIng.blobArr;
    }
    if (varGameIng.chr === 2) {
        varGameIng.enemyhX = 30;
        varGameIng.enemyhY = 150;
        varGameIng.enemyhW = 480;
        varGameIng.enemyhH = 610;
        varGameIng.enemyhB = -1;
        varGameIng.enemyArr = varGameIng.blobArr2;
    }
    if (varGameIng.chr === 3) {
        varGameIng.enemyhX = 35;
        varGameIng.enemyhY = 150;
        varGameIng.enemyhW = 500;
        varGameIng.enemyhH = 610;
        varGameIng.enemyhB = -1;
        varGameIng.enemyArr = varGameIng.blobArr3;
    }

    if (boxesIntersect(varGameIng.explorer, varGameIng.note) && varGameIng.chr === 1) {
        varGameIng.healthBar.noteText.text = '三把鑰匙代表:[希望、救贖、釋放]\n取得所有鑰匙，否則...';
    } else {
        varGameIng.healthBar.noteText.text = '';
    }

    let explorerHit = '';
    varGameIng.enemyArr.forEach(function (blob, index) {
        //移動blob
        if (varGameIng.chr != 3) {
            blob.y += blob.vy;
        } else blob.x += blob.vx;

        //撞牆偵測
        let blobHitsWall = contain(blob, { x: varGameIng.enemyhX, y: varGameIng.enemyhY, width: varGameIng.enemyhW, height: varGameIng.enemyhH });

        //撞牆反轉&顯示對應面
        if (blobHitsWall === 'top') {
            blob.vy *= varGameIng.enemyhB;
            if (varGameIng.chr != 1) {
                if (index === 0 || index === 2 || index === 4 || index === 6 || index === 8 || index === 10) {
                    blob.visible = false;
                } else {
                    blob.visible = true;
                }
            }
        }
        if (blobHitsWall === 'bottom') {
            blob.vy *= varGameIng.enemyhB;
            if (varGameIng.chr != 1) {
                if (index === 0 || index === 2 || index === 4 || index === 6 || index === 8 || index === 10) {
                    blob.visible = true;
                } else {
                    blob.visible = false;
                }
            }
        }
        if (blobHitsWall === 'left') {
            blob.vx *= varGameIng.enemyhB;
            if (varGameIng.chr != 1) {
                if (index === 0 || index === 2 || index === 4 || index === 6 || index === 8 || index === 10) {
                    blob.visible = false;
                } else {
                    blob.visible = true;
                }
            }

        }
        if (blobHitsWall === 'right') {
            blob.vx *= varGameIng.enemyhB;
            if (varGameIng.chr != 1) {
                if (index === 0 || index === 2 || index === 4 || index === 6 || index === 8 || index === 10) {
                    blob.visible = true;
                } else {
                    blob.visible = false;
                }
            }
        }

        if (boxesIntersect(varGameIng.explorer, blob)) {
            varGameIng.stra = 50;
            explorerHit = true;
        }
    });

    if (explorerHit) {
        //撞擊聲
        varGameStart.soundSprite.play('shot');

        varGameIng.time = setTimeout(function () {
            varGameIng.gameScene.status.text = '';
        }, 500)

        //角色閃爍
        setTimeout(function () {
            varGameIng.explorer.alpha = 0.5;
        }, 0)
        setTimeout(function () {
            varGameIng.explorer.alpha = 1;
        }, 100)
        setTimeout(function () {
            varGameIng.explorer.alpha = 0.5;
        }, 200)
        setTimeout(function () {
            varGameIng.explorer.alpha = 1;
        }, 300)
        setTimeout(function () {
            varGameIng.explorer.alpha = 0.5;
        }, 400)
        setTimeout(function () {
            varGameIng.explorer.alpha = 1;
        }, 500)

        //血條寬度減少
        varGameIng.healthBar.outer.width -= varGameIng.hitdemage;
        if (varGameIng.healthBar.outer.width < 0) varGameIng.healthBar.outer.width = 0;
        //血量數值減少
        varGameIng.blood = varGameIng.healthBar.outer.width / varGameIng.roundBoxW * 100;
        varGameIng.healthBar.blood.x = varGameIng.healthBar.x - 80;
        varGameIng.healthBar.blood.y = varGameIng.healthBar.y - 3;
        if (varGameIng.blood < 0) varGameIng.blood = 0;
        varGameIng.healthBar.blood.x = varGameIng.healthBar.x - 100;
        varGameIng.healthBar.blood.text = varGameIng.blood.toFixed(2) + '%';
        // gameScene.status.text = '撞傷-' + hitdemage;
        // setInterval(function () {
        varGameIng.gameScene.status.text = '撞傷-' + varGameIng.hitdemage;
        // }, 3000)
    }

    //讓寶藏跟隨玩家
    if (boxesIntersect(varGameIng.explorer, varGameIng.treasure)) {
        if (varGameIng.taketreasure != 1) varGameIng.taketreasure = 0;
        if (varGameIng.taketreasure === 0) {
            varGameIng.taketreasure = 1;
            varGameStart.sounds[2].on('end', function () {
                varGameStart.sounds[2].stop();
            });
            varGameStart.sounds[2].play();
        }
        varGameIng.treasure.x = varGameIng.explorer.x + 10;
        varGameIng.treasure.y = varGameIng.explorer.y + 10;
    }

    if (!boxesIntersect(varGameIng.explorer, varGameIng.treasure)) {
        varGameIng.taketreasure = 0;
    }

    //key抵達門
    if (boxesIntersect(varGameIng.treasure, varGameIng.door)) {
        varGameIng.getKey++;
        varGameIng.healthBar.key.text = varGameIng.getKey + '/3';
    }
    // if (boxesIntersect(varGameIng.treasure, varGameIng.door2)) {
    //     varGameIng.getKey++;
    //     varGameIng.healthBar.key.text = varGameIng.getKey + '/3';
    // }

    //抵達門
    if (boxesIntersect(varGameIng.explorer, varGameIng.door)) {
        setTimeout(() => {
            varGameIng.xlvx = 0;
            varGameIng.xlvy = 0;
        }, 2000);
        if (varGameIng.chr === 3) {
            if (varGameIng.getKey != 3) {
                varGameIng.taketreasure = 3;
            } else varGameIng.taketreasure = 2;

            varGameStart.sounds[1].stop();
            varGameStart.sounds[3].on('end', function () {
                varGameStart.sounds[3].stop();
            });
            varGameStart.sounds[3].play();
            setTimeout(function () {
                varGameStart.sounds[12].play();
                varGameStart.sounds[12].volume(0.3);
            }, 1500)
            varGameIng.state = win;

        }

        if (varGameIng.chr != 3) {
            varGameStart.sounds[0].stop();
            varGameStart.sounds[10].stop();

            varGameStart.sounds[3].on('end', function () {
                varGameStart.sounds[3].stop();
            });

            varGameStart.sounds[3].play();

            if (varGameIng.chr === 1) {
                varGameIng.chr = 2;
            } else varGameIng.chr = 3;

            gameAgain();
        }

    }



    //失敗
    if (varGameIng.healthBar.outer.width === 0) {
        varGameStart.sounds[0].stop();
        varGameStart.sounds[10].stop();
        varGameStart.sounds[1].stop();
        varGameIng.stra = 99999;
        varGameIng.explorer.anchor.set(0.5, 0.5);

        varGameIng.wlvx = 0;
        varGameIng.wlvy = 0;

        //控制死亡一次
        if (varGameIng.dm != 1) varGameIng.dm = 0;

        if (varGameIng.dm === 0) {
            varGameStart.sounds[4].on('end', function () {
                varGameStart.sounds[4].stop();
            });
            varGameStart.sounds[4].play();
            varGameIng.dm = 1;
            varGameIng.explorer.y += 15;
            varGameIng.explorer.x += 10;
            // setInterval(function () {
            //     if (explorer.rotation != -1.5) {
            //         explorer.rotation -= 0.75;
            //     }
            // }, 500)
            varGameIng.clearTime = setInterval(function () {
                if (varGameIng.explorer.rotation != -1.5) {
                    varGameIng.explorer.rotation -= 0.3;
                }
            }, 200)
            setTimeout(function () {
                varGameIng.state = end;
                varGameStart.sounds[8].play();
                // message.text = "你死了!";
            }, 2000)
        }
    }
}

//遊戲結束
export function end() {
    varGameIng.gameScene.visible = false;
    varGameIng.gameOverScene.visible = true;

}

export function win() {
    varGameIng.gameScene.visible = false;
    // varGameIng.gameOpenScene.visible = false;
    varGameIng.gameWinScene.visible = true;

    varGameWin.snowArr.forEach(function (item, i) {
        if (item.x < -500 || item.y > 1000) {
            item.x = 300;
            item.y = -100;
        }
    })

    if (varGameIng.dm != 1) varGameIng.dm = 0;

    if (varGameIng.dm === 0) {
        varGameIng.dm = 1;

        setInterval(() => {
            varGameWin.snowArr.forEach(function (item, i) {
                item.x -= 40;
                item.y += 10;
            })
        }, 25);

        setInterval(() => {
            varGameWin.snowArr.forEach(function (item, i) {
                item.x -= 40;
                item.y += 10;
            })
        }, 40);

        varGameDeath.picBtnEnd.on("mousedown", function () {
            varGameDeath.picBtnEnd.alpha = 0.5;
        });
        varGameDeath.picBtnEnd.on("mouseover", function () {
            varGameDeath.picBtnEnd.alpha = 0.8;
        });
        varGameDeath.picBtnEnd.on("mouseout", function () {
            varGameDeath.picBtnEnd.alpha = 1;
        });


        if (varGameIng.taketreasure === 2) {
            varGameWin.picWin2.visible = false;
        } else varGameWin.picWin2.visible = true;
        //動主角設定
        // varGameIng.wlContainer.addChild(varGameIng.explorer);
        // varGameIng.gameWinScene.addChild(varGameIng.wlContainer);
        // varGameIng.wlContainer.addChild(varGameIng.man1_fr);
        // varGameIng.wlContainer.addChild(varGameIng.man1_bk);
        // varGameIng.wlContainer.addChild(varGameIng.man1_lf);
        // varGameIng.wlContainer.addChild(varGameIng.man1_rt);
        // varGameIng.man1_fr.x = varGameStart.app.renderer.width - 40;
        // varGameIng.man1_fr.y = varGameStart.app.renderer.height - 40;
        // varGameIng.man1_bk.x = varGameStart.app.renderer.width - 40;
        // varGameIng.man1_bk.y = varGameStart.app.renderer.height - 40;
        // varGameIng.man1_lf.x = varGameStart.app.renderer.width - 40;
        // varGameIng.man1_lf.y = varGameStart.app.renderer.height - 40;
        // varGameIng.man1_rt.x = varGameStart.app.renderer.width - 40;
        // varGameIng.man1_rt.y = varGameStart.app.renderer.height - 40;
        // varGameIng.man1_bk.visible = true;
        varGameIng.gameWinScene.addChild(varGameIng.explorer);
        varGameIng.explorer.x = varGameStart.app.renderer.width - 40;
        varGameIng.explorer.y = varGameStart.app.renderer.height - 40;

        // allXY();

        // setTimeout(function () {
        //     setInterval(function () {
        //         varGameWin.picWin1_1.alpha += 0.05;
        //     }, 100)
        // }, 4000)
    }

    //沒有取得全部key
    if (varGameIng.explorer.y <= 680) {
        if (varGameIng.taketreasure === 3) {
            varGameIng.taketreasure = 0;
            varGameIng.wlvx = 0;
            varGameIng.wlvy = 0;

            //文字按鈕顯現
            setTimeout(function () {
                varGameWin.spd1_lf.x = 460;
                varGameIng.explorer.x = 455;
                varGameIng.wlvx = 15;
                setInterval(function () {

                    varGameIng.explorer.x -= 50;
                    varGameIng.explorer.y += 50;
                }, 100)
                // setInterval(function () {
                //     varGameIng.explorer.y += 10;
                // }, 200)
                varGameStart.sounds[4].on('end', function () {
                    varGameStart.sounds[4].stop();
                });
                varGameStart.sounds[4].play();
            }, 100)
            setTimeout(function () {
                varGameWin.spd1_lf.stop();
                setInterval(function () {
                    varGameWin.picWin2_1.alpha += 0.05;
                }, 100)
            }, 3000)
            setTimeout(function () {
                setInterval(function () {
                    varGameWin.picWin2_2.alpha += 0.05;
                }, 100)
            }, 6000)
            setTimeout(function () {
                setInterval(function () {
                    varGameWin.picWin2_3.alpha += 0.05;
                }, 100)
            }, 9000)
            setTimeout(function () {
                setInterval(function () {
                    varGameWin.picWin2_4.alpha += 0.05;
                }, 100)
            }, 11000)
            //按鈕顯現
            setTimeout(function () {
                configSprite(varGameDeath.picBtnEnd, 0.7, 0.7, 0, 0,
                    0,
                    varGameStart.app.renderer.height / 2 + 300,
                    varGameDeath.picBtnEnd.interactive = true,
                    varGameDeath.picBtnEnd.buttonMode = true,
                    varGameDeath.picBtnEnd.on("click", gameInit),
                    varGameDeath.picBtnEnd.alpha = 0,
                );
                varGameIng.gameWinScene.addChild(varGameDeath.picBtnEnd);

                setInterval(function () {
                    varGameDeath.picBtnEnd.alpha += 0.05;
                }, 100)
            }, 13000)
        }
    }


    //抵達階梯
    if (varGameIng.explorer.x === 457 && varGameIng.explorer.y === 515) {
        if (varGameIng.taketreasure === 2) {
            varGameIng.taketreasure = 0;
            varGameIng.wlvx = 0;
            varGameIng.wlvy = 0;

            //文字按鈕顯現
            setTimeout(function () {
                setInterval(function () {
                    varGameIng.explorer.alpha -= 0.05;
                }, 100)
                varGameStart.sounds[12].stop();
                varGameStart.sounds[9].on('end', function () {
                    varGameStart.sounds[9].stop();
                });
                varGameStart.sounds[9].play();
            }, 2000)
            setTimeout(function () {
                setInterval(function () {
                    varGameWin.picWin1_1.alpha += 0.05;
                }, 100)
            }, 5000)
            setTimeout(function () {
                setInterval(function () {
                    varGameWin.picWin1_2.alpha += 0.05;
                }, 100)
            }, 9000)
            setTimeout(function () {
                setInterval(function () {
                    varGameWin.picWin1_3.alpha += 0.05;
                }, 100)
            }, 13000)
            setTimeout(function () {
                setInterval(function () {
                    varGameWin.picWin1_4.alpha += 0.05;
                }, 100)
            }, 17000)
            //按鈕顯現
            setTimeout(function () {
                configSprite(varGameDeath.picBtnEnd, 0.7, 0.7, 0, 0,
                    0,
                    varGameStart.app.renderer.height / 2 + 300,
                    varGameDeath.picBtnEnd.interactive = true,
                    varGameDeath.picBtnEnd.buttonMode = true,
                    varGameDeath.picBtnEnd.on("click", gameInit),
                    varGameDeath.picBtnEnd.alpha = 0,
                );
                varGameIng.gameWinScene.addChild(varGameDeath.picBtnEnd);

                setInterval(function () {
                    varGameDeath.picBtnEnd.alpha += 0.05;
                }, 100)
            }, 21000)
        }
    }


    // if (varGameIng.explorer.y >= 640 && varGameIng.explorer.x <= 457) {
    //     varGameIng.explorer.x = 457;
    // setInterval(function () {
    //     if (varGameIng.explorer.rotation != -1.5) {
    //         varGameIng.explorer.rotation -= 0.3;
    //     }
    // }, 200)
    // varGameStart.sounds[4].on('end', function () {
    //     varGameStart.sounds[4].stop();
    // });
    // varGameStart.sounds[4].play();
    // }
    // if (varGameIng.explorer.y <= 635 && varGameIng.explorer.x <= 397) {
    //     varGameIng.explorer.x = 397;
    // }

    //位置限制
    if (varGameIng.explorer.x >= 487) varGameIng.explorer.x = 487;
    if (varGameIng.explorer.x <= 457 && varGameWin.spd1_lf.x != 460) {
        varGameIng.explorer.x = 457;
    }
    if (varGameIng.explorer.y <= 515) varGameIng.explorer.y = 515;
    if (varGameIng.explorer.y >= 710 && varGameWin.spd1_lf.x != 460) {
        varGameIng.explorer.y = 710;
    }
}

export function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//重試
export function gameAgain() {
    varGameIng.dm = 2;
    varGameIng.xlvx = 15;
    varGameIng.xlvy = 15;
    varGameIng.state = play;

    varGameDeath.picBtnAgain.interactive = false;
}

export function gameinitConfig() {
    varGameIng.gameScene.visible = true;
    varGameIng.gameOverScene.visible = false;
    clearInterval(varGameIng.clearTime);

    if (varGameIng.chr === 1) {
        // varGameIng.treasure.x = varGameIng.dungeon.width / 2 + 200;
        // varGameIng.treasure.y = randomInt(150, 580);
        varGameStart.sounds[0].play();
    }
    if (varGameIng.chr === 2) {
        if (varGameIng.healthBar.outer.width === 0) {
            // varGameIng.treasure.x = 60;
            // varGameIng.treasure.y = randomInt(150, 580);
            varGameStart.sounds[10].play();
        } else {
            level2Config();
        }
    }
    if (varGameIng.chr === 3) {
        if (varGameIng.healthBar.outer.width === 0) {
            // varGameIng.treasure.x = randomInt(20, 480);
            // varGameIng.treasure.y = 170;
            varGameStart.sounds[1].play();
        } else {
            level3Config();
        }
    }

    // varGameIng.taketreasure = 0;
    varGameIng.explorer.rotation = 0;
    varGameIng.explorer.anchor.set(0, 0);
    if (varGameIng.chr != 3) {
        varGameIng.explorer.x = varGameIng.door.x;
        varGameIng.explorer.y = varGameIng.door.y + 20;
    } else {
        varGameIng.explorer.x = varGameIng.door.x + 20;
        varGameIng.explorer.y = varGameIng.door.y - 10;
    }
    varGameIng.healthBar.outer.width = varGameIng.roundBoxW = 145;
    varGameIng.blood = varGameIng.healthBar.outer.width / varGameIng.roundBoxW * 100;
    varGameIng.healthBar.blood.text = (varGameIng.blood.toFixed(2) | 0) + '%';
    varGameIng.healthBar.blood.x = varGameIng.healthBar.x - 80;
    varGameIng.healthBar.blood.y = varGameIng.healthBar.y - 3;
    varGameIng.stra = 0;
    varGameIng.wlvx = 15;
    varGameIng.wlvy = 15;
    varGameIng.dm = '';
    // explorerHit = '';
    varGameDeath.picBtnAgain.interactive = true;
    varGameStart.sounds[8].stop();





}

//重頭
export function gameInit() {
    window.location.reload();
    // window.location.replace(window.location.href);
    varGameDeath.picBtnEnd.interactive = false;
    // app.renderer.render(gameScene);
}

//碰撞偵測
export function boxesIntersect(a, b) {
    const ab = a.getBounds();
    const bb = b.getBounds();
    // let ab = a;
    // let bb = b;
    return varGameIng.stra === 0 && ab.x + ab.width > bb.x && ab.x < bb.x + bb.width && ab.y + ab.height > bb.y && ab.y < bb.y + bb.height;
}

//防止超出牆壁個別
export function contain(sprite, container) {
    let collision = undefined;
    //Left
    if (sprite.x < container.x) {
        sprite.x = container.x;
        collision = "left";
    }
    //Top
    if (sprite.y < container.y) {
        sprite.y = container.y;
        collision = "top";
    }
    //Right
    if (sprite.x + sprite.width > container.width) {
        sprite.x = container.width - sprite.width;
        collision = "right";
    }
    //Bottom
    if (sprite.y + sprite.height > container.height) {
        sprite.y = container.height - sprite.height;
        collision = "bottom";
    }
    return collision;
}

export function allXY() {
    //讓主角每個方向同樣x,y
    if (varGameIng.wlafter === 1) {
        varGameIng.man1_fr.x = varGameIng.man1_bk.x;
        varGameIng.man1_fr.y = varGameIng.man1_bk.y;
        varGameIng.man1_lf.x = varGameIng.man1_bk.x;
        varGameIng.man1_lf.y = varGameIng.man1_bk.y;
        varGameIng.man1_rt.x = varGameIng.man1_bk.x;
        varGameIng.man1_rt.y = varGameIng.man1_bk.y;
        varGameIng.explorer.x = varGameIng.man1_bk.x - 8;
        varGameIng.explorer.y = varGameIng.man1_bk.y - 8;
    }
    if (varGameIng.wlafter === 2) {
        varGameIng.man1_bk.x = varGameIng.man1_fr.x;
        varGameIng.man1_bk.y = varGameIng.man1_fr.y;
        varGameIng.man1_lf.x = varGameIng.man1_fr.x;
        varGameIng.man1_lf.y = varGameIng.man1_fr.y;
        varGameIng.man1_rt.x = varGameIng.man1_fr.x;
        varGameIng.man1_rt.y = varGameIng.man1_fr.y;
        varGameIng.explorer.x = varGameIng.man1_fr.x - 8;
        varGameIng.explorer.y = varGameIng.man1_fr.y - 8;
    }
    if (varGameIng.wlafter === 3) {
        varGameIng.man1_bk.x = varGameIng.man1_lf.x;
        varGameIng.man1_bk.y = varGameIng.man1_lf.y;
        varGameIng.man1_fr.x = varGameIng.man1_lf.x;
        varGameIng.man1_fr.y = varGameIng.man1_lf.y;
        varGameIng.man1_rt.x = varGameIng.man1_lf.x;
        varGameIng.man1_rt.y = varGameIng.man1_lf.y;
        varGameIng.explorer.x = varGameIng.man1_lf.x - 8;
        varGameIng.explorer.y = varGameIng.man1_lf.y - 8;
    }
    if (varGameIng.wlafter === 4) {
        varGameIng.man1_bk.x = varGameIng.man1_rt.x;
        varGameIng.man1_bk.y = varGameIng.man1_rt.y;
        varGameIng.man1_fr.x = varGameIng.man1_rt.x;
        varGameIng.man1_fr.y = varGameIng.man1_rt.y;
        varGameIng.man1_lf.x = varGameIng.man1_rt.x;
        varGameIng.man1_lf.y = varGameIng.man1_rt.y;
        varGameIng.explorer.x = varGameIng.man1_rt.x - 8;
        varGameIng.explorer.y = varGameIng.man1_rt.y - 8;
    }
}

//按鍵設置
const body = document.querySelector('body');
body.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
        //上、w
        case 38:
        case 87:
            varGameIng.explorer.y -= varGameIng.wlvy;

            // varGameIng.wlafter = 1;
            // varGameIng.man1_bk.visible = true;
            // varGameIng.man1_fr.visible = false;
            // varGameIng.man1_lf.visible = false;
            // varGameIng.man1_rt.visible = false;
            // varGameIng.man1_bk.y -= varGameIng.wlvy;
            // varGameIng.man1_bk.play();
            break;
        //下、s
        case 40:
        case 83:
            varGameIng.explorer.y += varGameIng.wlvy;

            // varGameIng.wlafter = 2;
            // varGameIng.man1_bk.visible = false;
            // varGameIng.man1_fr.visible = true;
            // varGameIng.man1_lf.visible = false;
            // varGameIng.man1_rt.visible = false;
            // varGameIng.man1_fr.y += varGameIng.wlvy;
            // varGameIng.man1_fr.play();
            break;
        //左、a
        case 37:
        case 65:
            varGameIng.explorer.x -= varGameIng.wlvx;

            // varGameIng.wlafter = 3;
            // varGameIng.man1_bk.visible = false;
            // varGameIng.man1_fr.visible = false;
            // varGameIng.man1_lf.visible = true;
            // varGameIng.man1_rt.visible = false;
            // varGameIng.man1_lf.x -= varGameIng.wlvx;
            // varGameIng.man1_lf.play();
            break;
        //右、d
        case 39:
        case 68:
            varGameIng.explorer.x += varGameIng.wlvx;

            // varGameIng.wlafter = 4;
            // varGameIng.man1_bk.visible = false;
            // varGameIng.man1_fr.visible = false;
            // varGameIng.man1_lf.visible = false;
            // varGameIng.man1_rt.visible = true;
            // varGameIng.man1_rt.x += varGameIng.wlvx;
            // varGameIng.man1_rt.play();
            break;
        default:
            break;
    }
})

// body.addEventListener('keyup', (e) => {
//     switch (e.keyCode) {
//         //上、w
//         case 38:
//         case 87:
//             varGameIng.man1_bk.stop();
//             break;
//         //下、s
//         case 40:
//         case 83:
//             varGameIng.man1_fr.stop();
//             break;
//         //左、a
//         case 37:
//         case 65:
//             varGameIng.man1_lf.stop();
//             break;
//         //右、d
//         case 39:
//         case 68:
//             varGameIng.man1_rt.stop();
//             break;
//         default:
//             break;
//     }
// })