import type { Meta, StoryObj } from "@storybook/react";
import Sponsors from "@/components/main-page/Sponsors";

const meta = {
  title: "Main Page/Sponsors",
  component: Sponsors,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof Sponsors>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
