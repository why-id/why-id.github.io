import axios from 'axios';

const YT_API = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyC64RyHiNsSKM-fog3fxKCItc39GgeN0MU",
  },
});

(async () => {
  try {
    const response = await YT_API.get('search', {
      params: {
        part: 'snippet',
        q: 'tutorial gitar fingerstyle',  // Ganti dengan query pencarian Anda
        type: 'video',  // Untuk memastikan hanya hasil video yang ditampilkan
        maxResults: 5
      }
    });

    response.data.items.forEach(item => {
      console.log({
        id: item.id.videoId, // Video ID
        title: item.snippet.title,
        description: item.snippet.description,
        publishedAt: item.snippet.publishedAt
      });
    });
  } catch (error) {
    console.error(error);
  }
})();
