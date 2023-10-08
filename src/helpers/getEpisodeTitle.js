export function getEpisodeNum (str) {
    const arr = str.split('/');

    return +arr[arr.length - 1];
}