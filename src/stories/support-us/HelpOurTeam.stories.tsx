import type { Meta, StoryObj } from "@storybook/react";
import HelpOurTeam from "@/components/support-us/HelpOurTeam";

const meta = {
  title: "Support Us/Help Our Team",
  component: HelpOurTeam,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof HelpOurTeam>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
