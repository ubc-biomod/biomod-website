import type { Meta, StoryObj } from "@storybook/react";
import GetInvolved from "@/components/main-page/GetInvolved";

const meta = {
  title: "Main Page/GetInvolved",
  component: GetInvolved,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof GetInvolved>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultGetInvolved: Story = {};
