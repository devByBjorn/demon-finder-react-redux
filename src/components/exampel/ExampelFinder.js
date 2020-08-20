import React from 'react'
import ExampelList from './ExampelList'
import {
  Container,
  Top,
  TopHeading,
  TopRow,
  TopRowTitle,
} from '../../styled/DemonFinderStyled'
import {
  RowLeftSpan,
  RowRightSpan,
  HandleDemon,
  Count
} from '../../styled/DemonRowStyled'

const ExampelFinder = () => (
  <Container>
    <Top>
      <p>* Nothing you do here will be saved, it's just a showcase example.</p>
      <TopHeading>Exampel demons</TopHeading>
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
    <ExampelList />
  </Container>
)

export default ExampelFinder