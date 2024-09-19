const fonts = [
  "roboto-black.woff2",
  "roboto-black.woff",
  "roboto-bold.woff2",
  "roboto-bold.woff",
  "roboto-regular.woff2",
  "roboto-regular.woff",
  "roboto-light.woff2",
  "roboto-light.woff",
];

const preloadFont = (font) => {
  const link = document.createElement("link");

  link.rel = "preload";
  link.as = "font";
  link.href = `./fonts/${font}`;
  link.type = `font/${font.split(".")[1]}`;

  return link;
};

export default function preloadFonts() {
  fonts.forEach(preloadFont);
}
