import { getLyrics, getSong } from "genius-lyrics-api";
export default function FetchSong() {
  const options = {
    apiKey: "AiojVBtQYimSAYarbPns0HYBA6PgyvEwRskKN77fLm-PD30qlwStT2iaigBjz_Gb",
    title: "Blinding Lights",
    artist: "The Weeknd",
    optimizeQuery: true
  };

  getLyrics(options).then((lyrics) => console.log(lyrics));

  getSong(options).then((song) =>
    console.log(`
	${song.id}
	${song.title}
	${song.url}
	${song.albumArt}
	${song.lyrics}`)
  );
}
