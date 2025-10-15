import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Upload } from './upload'
import Button from '../Button/button'
import Icon from '../Icon/icon'

const meta: Meta<typeof Upload> = {
  title: 'Upload',
  id: 'Upload',
  component: Upload,
  parameters: {
    docs: {
      source: {
        type: "code",
      },
    }
  }
}
export default meta;

type Story = StoryObj<typeof meta>;

export const ASimpleUpload: Story = {
  name: '普通的 Upload 组件',
  args: {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  },
  render: (args) => (
    <Upload
      {...args}
    >
      <Button size="lg" btnType="primary"><Icon icon="upload" /> 点击上传 </Button>
    </Upload>
  ),
}

export const BCheckUpload: Story = {
  name: '上传前检查文件大小',
  args: {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  },
  render: (args) => {
    const checkFileSize = (file: File) => {
      if (Math.round(file.size / 1024) > 50) {
        alert('file too big')
        return false;
      }
      return true;
    }
    return (
      <Upload
        {...args}
        beforeUpload={checkFileSize}
      >
        <Button size="lg" btnType="primary"><Icon icon="upload" /> 不能传大于50Kb！ </Button>
      </Upload>
    )
  }
}

export const CDragUpload: Story = {
  name: '拖动上传',
  args: {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    name: "fileName",
    multiple: true,
    drag: true,
  },
  render: (args) => (
    <Upload
      {...args}
    >
      <Icon icon="upload" size="5x" theme="secondary" />
      <br />
      <p>点击或者拖动到此区域进行上传</p>
    </Upload>
  ),
}