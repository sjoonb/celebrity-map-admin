import styled, { system } from '@xstyled/emotion';

export const TdHead = styled.tdBox`
  ${system.apply({ text: 'caption-02-sb' })}
  height: 48px;
  padding: 0px 16px;
  line-height: relaxed;
  box-sizing: border-box;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  width: auto;
`;

export const Td = styled.tdBox`
  ${system.apply({ text: 'body-02-r' })}
  padding: 0px 16px;
  vertical-align: middle;
  line-height: relaxed;
  width: 1px;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;
