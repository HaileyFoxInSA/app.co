import React from 'react';
import { StyledHeader } from '@components/header';
import { Button } from '@components/button';
import Link from 'next/link'

const Header = ({ data }) => {
  const renderItems = (items) =>
    items.map(({ label, action = () => null, type }, i) => {
      if (type === 'button/primary') {
        return (
          <Button key={i} onClick={() => action()} type={type}>
            {label}
          </Button>
        );
      } else {
        return (
          <StyledHeader.Item key={i} onClick={() => action()}>
            <StyledHeader.Link href="">{label}</StyledHeader.Link>
          </StyledHeader.Item>
        );
      }
    });

  if (data) {
    return (
      <StyledHeader>
        <StyledHeader.Wrapper>
          <StyledHeader.Section>
            <StyledHeader.Logo>
              <StyledHeader.LogoImage src="/static/images/logo.png" />
            </StyledHeader.Logo>
            {renderItems(data.left)}
          </StyledHeader.Section>
          <StyledHeader.Section>{renderItems(data.right)}</StyledHeader.Section>
        </StyledHeader.Wrapper>
      </StyledHeader>
    );
  } else {
    return null;
  }
};

export { Header };
