import { Flex } from '@/lib/components/atoms/Flex';
import { ActionIcon, ActionIconProps } from '@mantine/core';
import { CellContext } from '@tanstack/react-table';
import { IconType } from 'react-icons';

export interface IconCellProps<C> extends Omit<ActionIconProps, 'onClick'> {
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement>,
    ctx: CellContext<C, any>
  ) => void;
}

export const iconCell =
  <C,>(Icon: IconType | React.ReactNode, props?: IconCellProps<C>) =>
  (ctx: CellContext<C, any>) => {
    const { onClick, ...actionIconProps } = props || {};
    return (
      <Flex alignItems="center">
        <ActionIcon
          onClick={(e: any) => onClick?.(e, ctx)}
          {...actionIconProps}
        >
          {typeof Icon === 'function' ? <Icon size={24} /> : Icon}
        </ActionIcon>
      </Flex>
    );
  };
