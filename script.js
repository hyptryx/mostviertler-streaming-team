document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  loadVOD("2794184335", "vod-hyptryx");
  loadVOD("2766880312", "vod-tommecs");
});

/* Twitch VOD Thumbnail Loader */
function loadVOD(vodId, elementId) {
  const thumbUrl = `https://static-cdn.jtvnw.net/s3_vods/${vodId}/thumbnails/thumb0-640x360.jpg`;

  const img = document.getElementById(elementId);
  img.src = thumbUrl;

  img.onerror = () => {
    img.src = "img/vod-fallback.png";
  };
}
