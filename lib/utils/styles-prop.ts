type Props<T extends (props: any) => any> = T extends (props: infer P) => any
  ? P
  : never;

export type StylesProps<T extends Record<string, (props: any) => any>> =
  Partial<{
    [K in keyof T]: Props<T[K]>;
  }>;
