import type { Meta, StoryObj } from "@storybook/react";
import ProjectsDisplay from "@/components/main-page/ProjectsDisplay";

const meta = {
  title: "Main Page/Projects Display",
  component: ProjectsDisplay,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof ProjectsDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
