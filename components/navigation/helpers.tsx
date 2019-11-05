import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { StyledAnchor } from '@components/top-bar/styled'
import { NavLink } from '@common/constants';

export const ErrorPageLink: React.FC<any> = ({ isErrorPage, children, onClick, href, ...props }) => (
  isErrorPage
    ? children
    : <Link href={href} {...props}>{children}</Link>
)
interface LinkListProps {
  list: NavLink[];
  isErrorPage: boolean;
  activeRoute?: string;
}

export const LinkList = ({ activeRoute, list, isErrorPage }: LinkListProps) => (
  <>
    {
      list.map(({ name, href }) => (
        <ErrorPageLink key={name} isErrorPage={isErrorPage} href={href} >
          <StyledAnchor href={href}>{name}</StyledAnchor>
        </ErrorPageLink>
      ))
    }
  </>
)

export const ActiveLinkList = ({ list, isErrorPage }: LinkListProps) => {
  const { pathname } = useRouter();
  return (
    <>
      {
        list.map(({ name, href }) => {
          const isActiveRoute = href === pathname
          return (
            <ErrorPageLink key={name} isErrorPage={isErrorPage} href={href} >
              <StyledAnchor topNav href={href} active={isActiveRoute}>{name}</StyledAnchor>
            </ErrorPageLink>
            )
          }
        )
      }
    </>
  )
}