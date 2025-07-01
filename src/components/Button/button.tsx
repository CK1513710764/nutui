import classNames from "classnames";
import React, { type AnchorHTMLAttributes, type ButtonHTMLAttributes, type FC } from "react";
// Button size
export type ButtonSize = 'lg' | 'sm';
// Button type
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

// BaseButtonProps
export interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string;
}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

// 最基本的button展示
const Button: FC<ButtonProps> = (props) => {
    const {
        size,
        className,
        btnType = 'default',
        disabled = false,
        children,
        href,
        ...restProps
    } = props;

    const classes = classNames(
        'btn',
        className,
        {
            [`btn-${btnType}`]: btnType,
            [`btn-${size}`]: size,
            'disabled': (btnType === 'link') && disabled
        }
    )

    if (btnType === 'link' && href) {
        return <a href={href}
            className={classes}
            {...restProps}>
            {children}
        </a>
    } else {
        return <button
            className={classes}
            disabled={disabled}
            {...restProps}>
            {children}
        </button>
    }
}


export default Button;
// 通过classNames 对button 的基础样式进行添加

// 通过mixin对不同属性的button集中添加不同的样式

// 把原生html元素的其他属性添加到自己的属性上
