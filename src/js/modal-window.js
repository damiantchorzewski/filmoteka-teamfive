import { getInfoMovie, getVideos } from './api';
import { getMovieDetails, getMovieTrailer } from './api';
import refs from './refs';
import { onAddToWatched, onAddToQueue } from './watched&queue';
import {
  watched,
  queue,
  setQueueLocalStoradge,
  setWatchedLocalStoradge,
} from './local-storage';