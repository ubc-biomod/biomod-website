import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";

import { SponsorsTier } from "../components/sponsors_tier";

// const meta = {
//   title: "Example/Contact_Hero_Header",
//   component: Contact_Hero_Header,
//   parameters: {
//     // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
//     layout: "fullscreen",
//   },
// } satisfies Meta<typeof Contact_Hero_Header>;

// export default meta;
const meta = {
  title: "Example/Sponsors_Tier",
  component: SponsorsTier,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof SponsorsTier>;
export default meta;
type Story = StoryObj<typeof meta>;

export const test: Story = {};
