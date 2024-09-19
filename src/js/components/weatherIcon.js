const importAll = (requireContext) =>
  requireContext.keys().reduce((icons, key) => {
    const formattedKey = key
      .replace("./", "")
      .replace(".svg", "")
      .replace(/-/g, "-");

    return {
      ...icons,
      [formattedKey]: requireContext(key).default,
    };
  }, {});

const ICONS = importAll(
  require.context("../../assets/icons/weather", false, /\.svg$/)
);

export default function getIcon(key) {
  return ICONS[key];
}