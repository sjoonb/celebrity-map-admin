import { openConfirmModal } from '@mantine/modals';
import { OpenConfirmModal } from '@mantine/modals/lib/context';

export const confirmPromise = (title: string, props?: OpenConfirmModal) => {
  return new Promise((res) => {
    openConfirmModal({
      title,
      labels: { confirm: '확인', cancel: '취소' },
      centered: true,
      ...props,
      onCancel() {
        res(false);
      },
      onConfirm() {
        res(true);
      },
    });
  });
};
