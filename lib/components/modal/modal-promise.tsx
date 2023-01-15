import { closeModal, openModal } from '@mantine/modals';
import { ModalSettings } from '@mantine/modals/lib/context';

export interface ModalChildProps<T = true> {
  onDone: (data: T) => void;
}

export interface ModalPromiseProps<
  T,
  P extends ModalChildProps<T> = ModalChildProps<T>
> extends ModalSettings {
  id: string;
  componentProps?: Omit<P, keyof ModalChildProps<T>>;
}

export const modalPromise = <
  T,
  P extends ModalChildProps<T> = ModalChildProps<T>
>(
  Component: (type: P) => any,
  { componentProps = {} as any, id, ...props }: ModalPromiseProps<T, P>
) => {
  return new Promise<T>((res) => {
    openModal({
      styles: {
        header: {
          marginBottom: '45px',
        },
        title: {
          fontWeight: 600,
          fontSize: '24px',
          lineHeight: '28px',
        },
      },
      size: 'lg',
      centered: true,
      ...props,
      modalId: id,
      withinPortal: false,
      children: (
        <Component
          {...(componentProps as P)}
          onDone={(value) => {
            res(value);
            closeModal(id);
          }}
        />
      ),
    });
  });
};
