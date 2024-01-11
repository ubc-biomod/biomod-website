import type { Meta, StoryObj } from "@storybook/react";
import SponsorTier from "@/components/sponsors/SponsorTier";

const meta = {
  title: "Sponsor tier",
  component: SponsorTier,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof SponsorTier>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tier1: Story = {
  args: {
    sponsor: {
      name: "Jane Doe",
      tier: 1,
    },
  },
};
export const Tier2: Story = {
  args: {
    sponsor: {
      name: "Jane Doe",
      tier: 2,
    },
  },
};
