import { defineStore } from "pinia";
import artist from "../data/artist.json";
import { ref } from "vue";

export const useSongStore = defineStore(
  "song-store",
  () => {
    const isPlaying = ref(false);
    const audio = ref(null);
    const currentArtist = ref(null);
    const currentTrack = ref(null);

    const loadSong = (artist, track) => {
      currentArtist.value = artist;
      currentTrack.value = track;

      if (audio.value && audio.value.src) {
        audio.value.pause();
        isPlaying.value = false;
        audio.value.src = "";
      }

      audio.value = new Audio();
      audio.value.src = track.path;

      setTimeout(() => {
        isPlaying.value = true;
        audio.value.play();
      }, 200);
    };

    const playOrPauseSong = () => {
      if (audio.value.paused) {
        isPlaying.value = true;
        audio.value.play();
      } else {
        isPlaying.value = false;
        audio.value.pause();
      }
    };

    const playOrPauseThisSong = (artist, track) => {
      if (
        !audio.value ||
        !audio.value.src ||
        currentTrack.value.id !== track.id
      ) {
        loadSong(artist, track);
        return;
      }

      playOrPauseSong();
    };

    const prevSong = (currentTrack) => {
      let track = artist.tracks[currentTrack.id - 2];
      loadSong(artist, track);
    };

    const nextSong = (currentTrack) => {
      if (currentTrack.id === artist.tracks.length) {
        let track = artist.tracks[0];
        loadSong(artist, track);
      } else {
        let track = artist.tracks[currentTrack.id];
        loadSong(artist, track);
      }
    };

    const playFromFirst = () => {
      resetState();
      let track = artist.tracks[0];
      loadSong(artist, track);
    };

    const resetState = () => {
      isPlaying.value = false;
      audio.value = null;
      currentArtist.value = null;
      currentTrack.value = null;
    };

    return {
      isPlaying,
      audio,
      currentArtist,
      currentTrack,
      loadSong,
      playOrPauseSong,
      playOrPauseThisSong,
      prevSong,
      nextSong,
      playFromFirst,
      resetState,
    };
  },
  {
    persist: true,
  }
);
