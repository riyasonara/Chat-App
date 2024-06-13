import moment from "moment";

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

const getLast7Days = () => {
  const currentDate = moment();

  const last7days = [];

  for (let i = 0; i < 7; i++) {
    const dayDate = currentDate.clone().subtract(i, "days");
    const dayName = dayDate.format("dddd");
    last7days.unshift(dayName);
  }
  return last7days;
};

export { fileFormat, transformImage, getLast7Days };
