import { Flex } from '@/lib/components/atoms/Flex';
import { Button, ButtonProps } from '@mantine/core';
import { CellContext } from '@tanstack/react-table';

export interface ButtonCellProps<C> extends Omit<ButtonProps, 'onClick'> {
  onClick: (
    e: React.MouseEvent<HTMLButtonElement>,
    ctx: CellContext<C, any>
  ) => void;
}

export const buttonCell =
  <C,>(children: React.ReactNode | string, props?: ButtonCellProps<C>) =>
  // eslint-disable-next-line react/display-name
  (ctx: CellContext<C, any>) => {
    const { onClick, ...buttonProps } = props || {};
    return (
      <Flex alignItems="center">
        <Button {...buttonProps} onClick={(e: any) => onClick?.(e, ctx)}>
          {children}
        </Button>
      </Flex>
    );
  };
