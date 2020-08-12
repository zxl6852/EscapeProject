
import * as PIXI from "pixi.js";
export const Application = PIXI.Application;
export const loader = PIXI.Loader.shared;
export const Sprite = PIXI.Sprite;
export const TextureCache = PIXI.utils.TextureCache;
export const Rectangle = PIXI.Rectangle;
export const renderer = PIXI.Renderer;
export const Graphics = PIXI.Graphics;
export const Container = PIXI.Container;
export const TextStyle = PIXI.TextStyle;
export const AnimatedSprite = PIXI.AnimatedSprite;
export const Texture = PIXI.Texture;

//新建Sprite用
export const n = {
    s: {},
    // id: {},
    // id2: {},
    // id3: {},
}

export const varGameStart = {
    app: undefined,
    picDungeon: undefined,
    picStart: undefined,
    picEscapeProject: undefined,
    picDemonEye: undefined,
    sounds: [],
    soundSprite: undefined,
    id: undefined,
    id2: undefined,
    id3: undefined,
    sheet: undefined,

}
export const varGameDeath = {
    picDeath: undefined,
    picBtnAgain: undefined,
    picBtnAgain2: undefined,
    picBtnEnd: undefined,
    picBtnEnd2: undefined,
    picEnd: undefined,
    style: undefined,
}
export const varGameWin = {
    picWin1: undefined,
    picWin1_1: undefined,
    picWin1_2: undefined,
    picWin1_3: undefined,
    picWin1_4: undefined,
    picWin2: undefined,
    picWin2_1: undefined,
    picWin2_2: undefined,
    picWin2_3: undefined,
    picWin2_4: undefined,
    picSnow: undefined,
    snowArr: [],
    picLadder: undefined,
    spd1_lf: undefined,

}
export const varGameIng = {
    //容器
    gameScene: undefined,
    gamel1Scene: undefined,
    gamel2Scene: undefined,
    gamel3Scene: undefined,
    gameOpenScene: undefined,
    gameOverScene: undefined,
    gameWinScene: undefined,
    //看目前第幾關
    chr: 1,
    //設定敵人碰撞
    enemyhX: undefined,
    enemyhY: undefined,
    enemyhW: undefined,
    enemyhH: undefined,
    enemyhB: undefined,
    enemyArr: undefined,

    dungeon: undefined,
    explorer: undefined,
    treasure: undefined,
    state: undefined,
    blob: undefined,
    x: undefined,
    y: undefined,
    blobArr: [],
    blobArr2: [],
    blobArr3: [],
    note: undefined,
    noteText: undefined,
    animals: undefined,
    roundBoxl: undefined,
    roundBox: undefined,
    PIXIText: undefined,
    stras: undefined,
    status: undefined,
    roundBoxW: undefined,
    chimes: undefined,
    exit: undefined,
    player: undefined,
    door: undefined,
    door2: undefined,
    healthBar: undefined,
    blood: undefined,
    getKey: 0,
    getKeyT: undefined,
    key: undefined,
    time: undefined,
    dm: undefined,
    explorerHit: false,
    taketreasure: undefined,
    startcheck: undefined,
    enemies: undefined,
    clearTime: undefined,
    stra: 0,
    //怪物傷害
    hitdemage: 15,
    //敵人參數
    numberOfBlobs: 6,
    spacing: 48,
    xOffset: 150,
    speed: 2,
    direction: 1,
    howblob: "",
    keyUp: 0,
    keyDown: 0,
    keyLeft: 0,
    keyRight: 0,
    //確認第幾關
    checklevel: 1,

    //動圖
    wlContainer: undefined,
    chrContainer: undefined,
    dvlContainer: undefined,
    l2EnCon: undefined,
    l3EnCon: undefined,
    wlbefore: 0,
    wlafter: 0,
    wlx: 200,
    wly: 200,
    wlvx: 15,
    wlvy: 15,
    wlsp: 0.1,
    man1_fr: undefined,
    man1_bk: undefined,
    man1_lf: undefined,
    man1_rt: undefined,
    chr1_bk: undefined,
    chr1_fr: undefined,
    dvl1_lf: undefined,
    dvl1_rt: undefined,
    zph1_lf: undefined,
    zph1_rt: undefined,

}