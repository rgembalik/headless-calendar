export default {
  title: "Introduction",
};

export const Introduction = () => {
  const div = document.createElement("div");
  div.innerHTML = `
    <div style="font-family: system-ui;">
        <h1>Headless Calendar</h1>

        <p>Hi! Welcome to storybook for Headless Calendar. Please select one of the stories for specific framework in the menu on the left.</p>
    </div>
`;

  return div;
};
