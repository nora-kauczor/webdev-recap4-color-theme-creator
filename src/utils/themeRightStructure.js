import { v4 as uuid } from "uuid";
export function themeRightStructure(theme) {
  return {
    key: uuid(),
    name: theme.name,
    colors: [
      {
        role: "primary",
        value: theme.primary,
      },
      {
        role: "secondary",
        value: theme.secondary,
      },
      {
        role: "surface",
        value: theme.surface,
      },
      {
        role: "surfaceon",
        value: theme.surfaceon,
      },
    ],
  };
}
