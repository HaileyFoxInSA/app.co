import React from 'react';
import styled from 'styled-components';
import { wrapperStyles } from '@common/styles';

const StyledAppList = styled.div`
  width: 100%;
  font-family: Lato, sans-serif;
  font-size: 14px;
  color: #282f36;
`;

const Table = styled.table`
  width: 100%;
  padding: 0px 10px;
  border-collapse: collapse;
`;

const SpacerRow = styled.tr`
  height: 30px;
`;

const Row = styled.tr`
  height: 60px;
  &:hover {
    background-color: white;
    box-shadow: 0 0 1px #e0e0e0;
    td {
      background-color: white;
      &:first-child {
        border-radius: 3px 0 0 3px;
      }
      &:last-child {
        border-radius: 0 3px 3px 0;
      }
    }
  }
`;

const Rank = styled.td`
  width: 35px;
  text-align: center;
  padding: 10px 0px;
`;

const Icon = styled.td`
  width: 45px;
  height: 45px;
`;

const IconImage = styled.img`
  width: 45px;
  height: 45px;
`;

const Name = styled.td`
  padding: 10px 10px;
  font-weight: bold;
`;

const NameLink = styled.a`
  color: #282f36;
  font-weight: 700;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Column = styled.td`
  padding: 10px 15px;
  color: #6c737a;
  text-align: ${props => props.align};
`;

const TagGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Tag = styled.div`
  color: #282f36;
  text-align: right;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid rgba(40, 47, 54, 0.15);
  margin-left: 10px;
`;

const ExpandButtonWrapper = styled.div`
  width: 150px;
  margin: 20px 10px;
`;

const Header = styled.thead`
`;

const HeaderRow = styled.tr`
  align-items: center;
  border-bottom: 2px solid #bdbdbd;
  margin-bottom: 20px;
`;

const HeaderItem = styled.th`
  text-align: ${props => props.align};
  padding: 20px 15px;
`

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

StyledAppList.Table = Table;
StyledAppList.SpacerRow = SpacerRow;
StyledAppList.Row = Row;
StyledAppList.Rank = Rank;
StyledAppList.Name = Name;
StyledAppList.NameLink = NameLink;
StyledAppList.Column = Column;
StyledAppList.Tag = Tag;
StyledAppList.TagGroup = TagGroup;
StyledAppList.Icon = Icon;
StyledAppList.IconImage = IconImage;
StyledAppList.ExpandButtonWrapper = ExpandButtonWrapper;
StyledAppList.Header = Header;
StyledAppList.HeaderRow = HeaderRow;
StyledAppList.HeaderItem = HeaderItem;
StyledAppList.Footer = Footer;

export { StyledAppList };