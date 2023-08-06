import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GridTable from "./Grid-Table";

// You can learn about this: https://storybook.js.org/docs/react/writing-stories/introduction

export default {
  title: "Grid Table",
  component: GridTable,
} as ComponentMeta<typeof GridTable>;

const Template: ComponentStory<typeof GridTable> = (args) => (
  <GridTable {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  headers: [
    {
      displayText: "Nombre",
      key: "Name",
    },
    {
      displayText: "Test1",
      key: "Name",
    },
    {
      displayText: "Test2",
      key: "Name",
    },
    {
      displayText: "Test3",
      key: "Name",
    },
    {
      displayText: "Test4",
      key: "Name",
    },
  ],
};
