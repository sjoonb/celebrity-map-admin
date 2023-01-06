import { openModal } from '@mantine/modals';
import { ModalSettings } from '@mantine/modals/lib/context';

export const modalPromise = ({ ...props }: ModalSettings) => {
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
    modalId: props.modalId,
    withinPortal: false,
    // onClose: () => {
    //   //   onCancel?.();
    //   //   res(null);
    // },
    // children: (
    //   //     {...(componentProps as P)}
    //   //     onDone={(value?: any) => {
    //   //       res(value ?? true);
    //   //       closeModal(id);
    //   //     }}
    //   //     onCancel={() => res(null)}
    //   //   />
    //   <>Hi</>
    // ),
  });
};
