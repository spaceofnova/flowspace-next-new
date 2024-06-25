export interface MaterialYouColors {
  primary: string;
  secondary: string;
  tertiary: string;
  error: string;
  warning: string;
  info: string;
  success: string;
  background: string;
  surface: string;
  onBackground: string;
  onSurface: string;
  text: string;
  action: string;
}

export function generateMaterialYouColors(
  baseColor: string
): MaterialYouColors {
  // Generate shades for all colors except error, warning, info, and success
  const shades = [
    ...Array(101)
      .fill(baseColor)
      .map((_, index) => `${baseColor}${index.toString(16).padStart(2, "0")}`),
  ].slice(50);

  return {
    primary: shades[0],
    secondary: shades[1],
    tertiary: shades[2],
    error: "#F44336",
    warning: "#FFEB3B",
    info: "#00BCD4",
    success: "#4CAF50",
    background: shades[46],
    surface: shades[21],
    onBackground: "#000000",
    onSurface: "#FFFFFF",
    text: shades[37],
    action: shades[0],
  };
}
