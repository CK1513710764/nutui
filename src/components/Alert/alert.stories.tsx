import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Alert from './alert'

const meta: Meta<typeof Alert> = {
  title: 'Alert 组件',
  id: 'Alert',
  component: Alert,
}

export default meta
type Story = StoryObj<typeof meta>;
// const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />

export const ADefaultAlert: Story = {
  args: {
    title: 'this is alert!'
  }
}
ADefaultAlert.storyName = '基本样式'
export const CDescAlert: Story = {
  args: {
    title: '提示标题欧亲',
    description: 'this is a long description'
  }
}
CDescAlert.storyName = '带描述的 Alert'
export const BStylesAlert = () => {
  return (
    <>
      <Alert title="this is Success" type="success"></Alert>
      <Alert title="this is Danger!" type="danger"></Alert>
      <Alert title="this is Warning!" type="warning" closable={false}></Alert>
    </>
  )
}
BStylesAlert.storyName = '不同样式的 Alert'