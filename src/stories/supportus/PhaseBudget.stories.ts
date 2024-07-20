import type { Meta, StoryObj } from "@storybook/react";
import PhaseBudget from "@/components/supportus/PhaseBudget";

const meta = {
  title: "Support Us/Phase Budget",
  component: PhaseBudget,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof PhaseBudget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PhaseB: Story = {};
