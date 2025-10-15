import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Tabs from './tabs';
import TabItem from './tabItem';
import Icon from '../Icon';

const meta: Meta<typeof Tabs> = {
  title: 'Tabs',
  id: 'Tabs',
  component: Tabs,
  subcomponents: { TabItem: TabItem },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const ADefaultTabs: Story = {
  name: '默认的Tabs',
  render: (args) => (
    <Tabs {...args}>
      <TabItem label="选项卡一">this is content one</TabItem>
      <TabItem label="选项卡二">this is content two</TabItem>
      <TabItem label="用户管理">this is content three</TabItem>
    </Tabs>
  ),
};

export const BCardTabs: Story = {
  name: '选项卡样式的Tabs',
  args: {
    type: 'card',
  },
  render: (args) => (
    <Tabs {...args}>
      <TabItem label="card1">this is card one</TabItem>
      <TabItem label="card2">this is content two</TabItem>
      <TabItem label="disabled" disabled>
        this is content three
      </TabItem>
    </Tabs>
  ),
};

export const CCustomTabs: Story = {
  name: '自定义选项卡样式',
  args: {
    type: 'card',
  },
  render: (args) => (
    <Tabs {...args}>
      <TabItem
        label={
          <>
            <Icon icon="check-circle" /> 自定义图标
          </>
        }
      >
        this is card one
      </TabItem>
      <TabItem label="tab2">this is content two</TabItem>
    </Tabs>
  ),
};
