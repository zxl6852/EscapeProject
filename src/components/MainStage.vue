<template>
  <div></div>
</template>

<script>
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
    varGameStart.sounds = new Array(soundss.length);
  },
  mounted() {
    loader
      .add(imagesPath + "gameswl.json")
      .add(imagesPath + "gameing.json")
      .add(imagesPath + "treasureHunter.json");
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
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
