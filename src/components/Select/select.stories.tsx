import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Select from './index';
const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
  id: 'Select',
  subcomponents: { Option: Select.Option },
  decorators: [
    (Story) => (
      <div style={{ width: '350px' }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const ADefaultSelect: Story = {
  name: '默认的Select',
  args: {
    placeholder: '请选择',
  },
  render: (args) => (
    <Select {...args}>
      <Select.Option value="nihao" />
      <Select.Option value="nihao2" />
      <Select.Option value="nihao3" />
      <Select.Option value="disabled" disabled />
      <Select.Option value="nihao5" />
    </Select>
  ),
};

export const BMultipleSelect: Story = {
  name: '支持多选的 Select',
  args: {
    placeholder: '支持多选欧！',
    multiple: true,
  },
  render: (args) => (
    <Select {...args}>
      <Select.Option value="nihao" />
      <Select.Option value="nihao2" />
      <Select.Option value="nihao3" />
      <Select.Option value="viking" />
      <Select.Option value="viking2" />
    </Select>
  ),
};

export const CDisabledSelect: Story = {
  name: '被禁用的 Select',
  args: {
    placeholder: '禁用啦！',
    disabled: true,
  },
  render: (args) => (
    <Select {...args}>
      <Select.Option value="nihao" />
      <Select.Option value="nihao2" />
      <Select.Option value="nihao3" />
    </Select>
  ),
};
