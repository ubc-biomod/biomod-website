import type { Meta, StoryObj } from "@storybook/react";
import Card from "@/components/support-us/Card";

const meta = {
  title: "Support Us/Card",
  component: Card,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Image: Story = {
  args: {
    title: "Donate as an industry",
    subtitle: "Something something that identifies as an industry",
    body: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    href: "#",
    img: "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
  },
  decorators: [
    (Story) => (
      <div className="w-1/2">
        <Story />
      </div>
    ),
  ],
};

export const NoImage: Story = {
  args: {
    title: "Donate as an industry",
    subtitle: "Something something that identifies as an industry",
    body: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    href: "#",
  },
};
