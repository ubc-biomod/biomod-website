import type { Meta, StoryObj } from "@storybook/react";

import { JoinUsHero } from "../../components/joinus/JoinUsHero";

// export default meta;
const meta = {
  title: "Sponsors/JoinUsHero",
  component: JoinUsHero,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
    viewport: {
      defaultViewport: "responsive",
    },
  },
} satisfies Meta<typeof JoinUsHero>;
export default meta;
type Story = StoryObj<typeof meta>;

export const JoinUsH: Story = {};
