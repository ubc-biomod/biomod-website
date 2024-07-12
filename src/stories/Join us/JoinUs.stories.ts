import type { Meta, StoryObj } from "@storybook/react";
import PastSponsors from "@/components/Join us/JoinUs";
import JoinUs from "@/components/Join us/JoinUs";

const meta = {
  title: "Join us",
  component: JoinUs,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof JoinUs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};

export const LoggedOut: Story = {};
