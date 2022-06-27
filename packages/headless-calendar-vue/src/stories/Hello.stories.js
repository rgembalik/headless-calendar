import { HelloWorld } from "../lib";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "HelloWorld",
  component: HelloWorld,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: {},
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { HelloWorld },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<HelloWorld v-bind="args"><div>Testing</div></HelloWorld>',
});

export const HelloWorldTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
HelloWorldTemplate.args = {
  primary: true,
  label: "Button",
};
