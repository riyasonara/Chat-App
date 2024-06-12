const fileFormat = (url = "") => {
  const fileExtension = url.split(".").pop();
  switch (fileExtension) {
    case "mp4":
    case "webm":
    case "ogg":
      return "video";
    case "mp3":
    case "wav":
      return "audio";
    case "png":
    case "jpeg":
    case "jpg":
    case "gif":
      return "image";
    default:
      return "file";
  }
};

const transformImage = (url = "", width = 100) => url;

export { fileFormat, transformImage };
