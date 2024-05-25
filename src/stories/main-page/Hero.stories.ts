import type { Meta, StoryObj } from "@storybook/react";
import Hero from "@/components/main-page/Hero";

const meta = {
  title: "Main Page/Hero",
  component: Hero,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultHero: Story = {};
