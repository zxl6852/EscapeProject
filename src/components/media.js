
export const imagesPath = '${pageContext.request.contextPath}../../static/images/';
export const musicsPath = '${pageContext.request.contextPath}../../static/musics/';
export const resourcesPath = '${pageContext.request.contextPath}../../static/resources/';

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
