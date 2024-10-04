export const content = [
  "./src/**/*.{js,jsx,ts,tsx}", // Include your app files
  "./node_modules/flowbite/**/*.js", // Add Flowbite components
];
export const theme = {
  extend: {},
};
export const plugins = [
  require("flowbite/plugin"), // Add Flowbite plugin
];
