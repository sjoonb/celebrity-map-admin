import { x } from '@xstyled/emotion';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { HiChevronDown, HiOutlineLogout } from 'react-icons/hi';
import { Avatar, Menu, MenuItemProps } from '@mantine/core';
import { Fragment, useCallback } from 'react';
import { Flex } from '../components/atoms/Flex';
import { useAuthStore } from '../auth/AuthStore';
import { useProfileQuery } from '../auth/use-profile-query';

const HeaderLink = ({ children, ...props }: LinkProps & { children: any }) => {
  const router = useRouter();
  const active = router.pathname === props.href;
  return (
    <Link passHref {...props}>
      <x.span
        text={active ? 'button-04-sb' : 'button-04-r'}
        cursor="pointer"
        lineHeight={1}
        color={active ? 'primary' : 'gray'}
      >
        {children}
      </x.span>
    </Link>
  );
};

export const AdminHeader = () => {
  const { data } = useProfileQuery();
  const { setAcessToken } = useAuthStore();
  const { push } = useRouter();

  const handleLogout = useCallback(() => {
    setAcessToken(null);
    push('/login');
  }, [push, setAcessToken]);

  return (
    <x.div
      bg="white"
      h="100px"
      px="80px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex gap="32px" alignItems="center">
        <HeaderLink href="/restaurant">식당관리</HeaderLink>
        <HeaderLink href="/celebrity">유명인 관리</HeaderLink>
      </Flex>
      <Flex gap="28px" alignItems="center">
        <Menu width={200}>
          <Menu.Target>
            <Flex gap="17px" alignItems="center" cursor="pointer">
              <Avatar radius="xl" size={40}></Avatar>
              <x.h4 text="button-04-sb">{data?.username ?? '알 수 없음'}</x.h4>
              <HiChevronDown size={24} />
            </Flex>
          </Menu.Target>
          <Menu.Dropdown sx={{ padding: '4px 2px' }}>
            <Menu.Item
              // h="50px"
              icon={<HiOutlineLogout size={18} color="red" />}
              sx={{ color: 'red' }}
              onClick={handleLogout}
            >
              Log Out
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Flex>
    </x.div>
  );
};

const MenuItem = ({
  sx,
  href,
  ...props
}: MenuItemProps & { href?: string }) => {
  const LinkWrapper = (args: any) =>
    href ? (
      <Link passHref href={href} {...args} />
    ) : (
      <Fragment>{args.children}</Fragment>
    );

  return (
    <Menu.Item
      sx={{
        width: 250,
        paddingLeft: '30px',
        '& svg': {
          color: '#636363',
          marginRight: '8px',
        },
        ...sx,
      }}
      {...props}
    >
      <LinkWrapper>
        <x.h4 text="header-08-r">{props.children}</x.h4>
      </LinkWrapper>
    </Menu.Item>
  );
};

// Will Refactor For Reuse
interface IconWithBadgeProps {
  badge: React.ReactNode;
  icon: React.ReactNode;
}

const IconWithBadge = ({ icon, badge }: IconWithBadgeProps) => {
  return (
    <x.div position="relative">
      {icon}
      <x.div
        position="absolute"
        top={-5}
        right={-15}
        bg="red"
        color="white"
        borderRadius="50%"
      >
        {badge}
      </x.div>
    </x.div>
  );
};

const NumberBadge = ({ count }: { count: number }) => {
  return (
    <x.div
      text="header-08-sb"
      color="white"
      lineHeight={1}
      textAlign="center"
      w="28px"
      h="20px"
      bg="red"
      borderRadius="10px"
      fontSize="12px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {String(count).padStart(2, '0')}
    </x.div>
  );
};
