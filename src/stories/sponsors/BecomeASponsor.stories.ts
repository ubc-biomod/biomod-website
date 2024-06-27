import type { Meta, StoryObj } from "@storybook/react";
import BecomeASponsor from "@/components/sponsors/BecomeASponsor";

// export default meta;
const meta = {
  title: "Sponsors/Become a Sponsor",
  component: BecomeASponsor,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
    viewport: {
      defaultViewport: "responsive",
    },
  },
} satisfies Meta<typeof BecomeASponsor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
