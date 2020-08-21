import React from 'react'
import DemonList from './DemonList'
import {
  Container,
  Top,
  TopHeading,
  TopRow,
  TopRowTitle,
} from '../../styled/DemonFinderStyled'
import { AddIcon } from '../../styled/IconsStyled'
import {
  RowLeftSpan,
  RowRightSpan,
  Count,
  HandleDemon
} from '../../styled/DemonRowStyled'
import { PlusSquareIcon } from '../icons/IconsComponents'

const DemonFinder = () => (
  <div>
    <Container>
      <Top>
        <div>
          <AddIcon to="add">
            <PlusSquareIcon />
          </AddIcon>
        </div>
        <TopHeading>My demons</TopHeading>
      </Top>

      <TopRow>
        <RowLeftSpan>
          <HandleDemon />
          <TopRowTitle>
            Demon #
        </TopRowTitle>
        </RowLeftSpan>
        <RowRightSpan>
          <Count>1</Count>
          <Count>2</Count>
          <Count>3</Count>
          <Count>4</Count>
          <Count>5</Count>
          <Count>6</Count>
          <Count>7</Count>
          <Count style={{ color: '#f67e7e' }}>Stop</Count>
        </RowRightSpan>
      </TopRow>

      <DemonList />
    </Container>
  </div>

)


export default DemonFinder