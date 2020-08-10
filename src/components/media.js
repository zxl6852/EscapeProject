// import "pixi-sound";

export const imagesPath = '../../static/images/';
export const musicsPath = '../../static/musics/';
export const resourcesPath = '../../static/resources/';

export const soundss = [
    musicsPath + "level1.mp3", //0
    musicsPath + "level3.mp3", //1
    musicsPath + "gettreasure.mp3", //2
    musicsPath + "opendoor.mp3", //3
    musicsPath + "death.mp3", //4
    musicsPath + "success.wav", //5
    musicsPath + "openmusic.wav", //6
    musicsPath + "startclick.wav", //7
    musicsPath + "lose.mp3", //8
    musicsPath + "win.mp3", //9
    musicsPath + "level2.mp3", //10
    musicsPath + "sprite.mp3", //11
    musicsPath + "snowstorm.mp3", //12

];
// soundss: [
//   musicsPath + "level1.mp3", //0
//   musicsPath + "level3.mp3", //1
//   musicsPath + "crrect_answer3.mp3", //2
//   musicsPath + "opendoor.mp3", //3
//   musicsPath + "death.mp3", //4
//   musicsPath + "success.wav", //5
//   musicsPath + "openmusic.wav", //6
//   musicsPath + "startclick.wav", //7
// ],
// soundss: [
//   { name: "levle1", url: musicsPath + "level1.mp3" },
//   { name: "level3", url: musicsPath + "level3.mp3" },
//   { name: "crrect_answer3", url: musicsPath + "crrect_answer3.mp3" },
//   { name: "opendoor", url: musicsPath + "opendoor.mp3" },
//   { name: "death", url: musicsPath + "death.mp3" },
//   { name: "success", url: musicsPath + "success.mp3" },
//   { name: "openmusic", url: musicsPath + "openmusic.mp3" },
//   { name: "startclick", url: musicsPath + "startclick.mp3" },
// ],

export const manifest = {
    loop1: resourcesPath + 'loops/loop1.mp3',
    loop2: resourcesPath + 'loops/loop2.mp3',
    loop3: resourcesPath + 'loops/loop3.mp3',
    loop4: resourcesPath + 'loops/loop4.mp3',
    bird: resourcesPath + 'bird.mp3',
    boing: resourcesPath + 'boing.mp3',
    buzzer: resourcesPath + 'buzzer.mp3',
    car: resourcesPath + 'car.mp3',
    chime: resourcesPath + 'chime.mp3',
    success: resourcesPath + 'success.mp3',
    sword: resourcesPath + 'sword.mp3',
    whistle: resourcesPath + 'whistle.mp3',
};

//音效
export const sprites = {
    'alien death': { start: 1, end: 2 },
    'boss hit': { start: 3, end: 3.5 },
    'escape': { start: 4, end: 7.2 },
    'meow': { start: 8, end: 8.5 },
    'numkey': { start: 9, end: 9.1 },
    'ping': { start: 10, end: 11 },
    'death': { start: 12, end: 16.2 },
    'shot': { start: 17, end: 18 },
    'squit': { start: 19, end: 19.3 }
};

// 選擇音效
// export function sound(object) {
//     console.log(3, object.PIXI.sound)
//     const sound = object.PIXI.sound.Sound.from({
//         'url': resourcesPath + 'sprite.mp3',
//         'sprites': sprites
//     });
// }
// 選擇音效
// export const sound = Window.PIXI.sound.Sound.from({
//     'url': resourcesPath + 'sprite.mp3',
//     'sprites': sprites
// });