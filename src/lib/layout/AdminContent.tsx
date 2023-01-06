import { PropsOf } from "@emotion/react";
import { x } from "@xstyled/emotion";

export const AdminContent = ({ children, ...props }: PropsOf<typeof x.div>) => {
  return (
    <x.div
      bg="#FAFAFA"
      py="72px"
      px="80px"
      minH="calc(100vh - 100px)"
      {...props}
    >
      {children}
    </x.div>
  );
};
