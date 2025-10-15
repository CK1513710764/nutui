import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Menu from './index';

const meta: Meta<typeof Menu> = {
  title: 'Menu',
  id: 'Menu',
  component: Menu,
  subcomponents: { SubMenu: Menu.SubMenu, Item: Menu.Item },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const ADefaultMenu: Story = {
  name: '默认Menu',
  args: {
    defaultIndex: '0',
  },
  render: (args) => (
    <Menu {...args}>
      <Menu.Item>cool link</Menu.Item>
      <Menu.Item>cool link 2</Menu.Item>
      <Menu.Item disabled>disabled</Menu.Item>
      <Menu.SubMenu title="下拉选项">
        <Menu.Item>下拉选项一</Menu.Item>
        <Menu.Item>下拉选项二</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  ),
};

export const BClickMenu: Story = {
  name: '纵向的 Menu',
  args: {
    defaultIndex: '0',
    mode: 'vertical',
  },
  render: (args) => (
    <Menu {...args}>
      <Menu.Item>cool link</Menu.Item>
      <Menu.Item>cool link 2</Menu.Item>
      <Menu.SubMenu title="点击下拉选项">
        <Menu.Item>下拉选项一</Menu.Item>
        <Menu.Item>下拉选项二</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  ),
};

export const COpenedMenu: Story = {
  name: '默认展开的纵向 Menu',
  args: {
    defaultIndex: '0',
    mode: 'vertical',
    defaultOpenSubMenus: ['2'],
  },
  render: (args) => (
    <Menu {...args}>
      <Menu.Item>cool link</Menu.Item>
      <Menu.Item>cool link 2</Menu.Item>
      <Menu.SubMenu title="默认展开下拉选项">
        <Menu.Item>下拉选项一</Menu.Item>
        <Menu.Item>下拉选项二</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  ),
};
