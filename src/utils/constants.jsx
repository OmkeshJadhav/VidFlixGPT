export const netflixLogo =
  "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png";

export const backgroundImage =
  "https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const userIcon =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

  export const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer" + process.env.REACT_APP_TMDB_KEY,
    },
  };

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

  export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

  export const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY;