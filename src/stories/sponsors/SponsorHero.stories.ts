import type { Meta, StoryObj } from "@storybook/react";
import SponsorHero from "@/components/sponsors/SponsorHero";

const meta = {
  title: "Sponsors/Sponsor Hero",
  component: SponsorHero,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof SponsorHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
