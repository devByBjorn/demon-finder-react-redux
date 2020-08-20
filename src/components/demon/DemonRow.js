import React, { useState, useEffect } from 'react'
import { useDispatch, ReactReduxContext } from 'react-redux'
import { store } from '../../app'
import { editInDb, deleteFromDb, populateDbData } from '../../actions/demon'
import DemonModal from './DemonModal'
import SinsCheckbox from './SinsCheckbox'
import { TrashIcon, EditIcon } from '../icons/IconsComponents'
import {
  Row,
  RowLeftSpan,
  RowRightSpan,
  HandleDemon,
  Title,
  Count
} from '../../styled/DemonRowStyled'
import { NavLinkStyled } from '../../styled/NavLinkStyled'

const DemonRow = ({ demon }) => {
  const dispatch = useDispatch()
  const [count, setCount] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const activePath = '/demons'
  const pathName = window.location.pathname
  const pathIsActive = pathName === activePath

  useEffect(() => {
    setCount(demon.sins)
    return () => store.dispatch(populateDbData())
  }, [])

  const sins = [1, 2, 3, 4, 5, 6, 7, 8]

  const handleModal = () => {
    showModal === false
      ? setShowModal(true)
      : setShowModal(false)
  }

  const handleDelete = () => {
    const { id } = demon

    confirm('Delete this demon?')
      ? dispatch(deleteFromDb({ id }))
      : false
  }

  const onChange = e => {
    const value = e.target.value
    const shouldCount = value - count === 1

    if (shouldCount) {
      setCount(parseInt(value))
      dispatch(editInDb(demon.id, { sins: parseInt(count) + 1 }))
    }
  }

  return (
    <Row>
      <RowLeftSpan>
        <HandleDemon>
          <div>
            <TrashIcon
              onClick={pathIsActive ? handleDelete : false}
              hovercolor='#f67e7e'
            />
          </div>
          <div>
            <NavLinkStyled
              to={pathIsActive ? `edit/${demon.id}` : 'example'}
            ><EditIcon hovercolor="#ffc600" />
            </NavLinkStyled>
          </div>
        </HandleDemon>
        <Title onClick={handleModal}
        >{demon.title}</Title>
      </RowLeftSpan>

      <DemonModal
        demon={demon}
        handleModal={handleModal}
        showModal={showModal}
      />

      <RowRightSpan>
        {sins.map(sin => (
          <Count key={`${demon.title}${sin}`}>
            <SinsCheckbox
              onChange={onChange}
              value={sin}
              count={count}
            />
          </Count>
        ))}
      </RowRightSpan>
    </Row>
  )
}

export default DemonRow