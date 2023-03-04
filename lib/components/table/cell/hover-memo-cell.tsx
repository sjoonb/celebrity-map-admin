import { HoverCard } from '@mantine/core';
import { CellContext } from '@tanstack/react-table';
import { HiDocumentText } from 'react-icons/hi';

export const MemoIcon = (ctx: CellContext<any, any>) => {
  return (
    <HoverCard>
      <HoverCard.Target>
        <HiDocumentText />
      </HoverCard.Target>
      <HoverCard.Dropdown>{ctx.getValue()}</HoverCard.Dropdown>
    </HoverCard>
  );
};
