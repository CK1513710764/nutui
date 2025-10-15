import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Icon from './icon';
import Button from '../Button';

const meta: Meta<typeof Icon> = {
  title: 'Icon 组件',
  id: 'Icon',
  component: Icon,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const ADefaultIcons: Story = {
  name: '默认图标',
  render: () => (
    <>
      <Icon icon="check" size="3x" />
      <Icon icon="times" size="3x" />
      <Icon icon="anchor" size="3x" />
      <Icon icon="trash" size="3x" />
      <Button size="lg" btnType="primary">
        <Icon icon="check" /> check{' '}
      </Button>
    </>
  ),
};

export const BThemeIcons: Story = {
  name: '不同主题的 Icon',
  render: () => (
    <>
      <Icon icon="check" size="3x" theme="success" />
      <Icon icon="times" size="3x" theme="danger" />
      <Icon icon="anchor" size="3x" theme="primary" />
      <Icon icon="exclamation-circle" size="3x" theme="warning" />
    </>
  ),
};

export const CCustomIcons: Story = {
  name: '更多行为的 Icon',
  render: () => (
    <>
      <Icon icon="spinner" size="3x" theme="primary" spin />
      <Icon icon="spinner" size="3x" theme="success" pulse />
    </>
  ),
};
