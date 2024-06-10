import type { Meta, StoryObj } from "@storybook/react";

import { SponsorsTier } from "../../components/sponsors/SponsorsTier";

// export default meta;
const meta = {
  title: "Example/SponsorsTier",
  component: SponsorsTier,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
    viewport: {
      defaultViewport: "responsive",
    },
  },
} satisfies Meta<typeof SponsorsTier>;
export default meta;
type Story = StoryObj<typeof meta>;

export const SponsorsT: Story = {};
