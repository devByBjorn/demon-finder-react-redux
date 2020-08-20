import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AddDemonFormStyled, DemonFormItem, DemonFormInput, DemonFormTextArea, DemonFormError } from '../../styled/AddDemonFormStyled'
import { MainButton } from '../../styled/Buttons'

const DemonForm = props => {
  const { demon, handleAddDemon } = props
  const { register, errors, handleSubmit } = useForm()
  const [title, setTitle] = useState(demon ? demon.title : '')
  const [cause, setCause] = useState(demon ? demon.cause : '')
  const [manage, setManage] = useState(demon ? demon.manage : '')

  const onSubmit = () =>
    handleAddDemon({
      title: title,
      cause: cause,
      manage: cause,
    })

  return (
    <AddDemonFormStyled onSubmit={handleSubmit(onSubmit)}>
      <DemonFormItem>
        <DemonFormInput
          name="title"
          onChange={e => setTitle(e.target.value)}
          ref={register({ required: true, maxLength: 30, minLength: 2 })}
          placeholder="Demon title"
          type="text"
          value={title} />
        {errors.title && errors.title.type === 'required' && <DemonFormError>Required field</DemonFormError>}
        {errors.title && errors.title.type === 'minLength' && <DemonFormError>Give this demon a proper title</DemonFormError>}
        {errors.title && errors.title.type === 'maxLength' && <DemonFormError>Title can't exceed 40 characters</DemonFormError>}
      </DemonFormItem>
      <DemonFormItem>
        <DemonFormTextArea
          name="cause"
          onChange={e => setCause(e.target.value)}
          placeholder="Root cause of demon"
          ref={register({ required: true, minLength: 5 })}
          rows={5}
          type="text"
          value={cause} />
        {errors.cause && errors.cause.type === 'required' && <DemonFormError>Required field</DemonFormError>}
        {errors.cause && errors.cause.type === 'minLength' && <DemonFormError>Write a proper explination of the root cause of this demon</DemonFormError>}
      </DemonFormItem>
      <DemonFormItem>
        <DemonFormTextArea
          name="manage"
          onChange={e => setManage(e.target.value)}
          placeholder="How will you manage your demon"
          ref={register({ required: true, minLength: 10 })}
          rows={5}
          type="text"
          value={manage} />
        {errors.manage && errors.manage.type === 'required' && <DemonFormError>Required field</DemonFormError>}
        {errors.manage && errors.manage.type === 'minLength' && <DemonFormError>Write a proper explination of how you will manage this demon</DemonFormError>}
      </DemonFormItem>
      <DemonFormItem>
        <MainButton
          type="submit"
        >Submit</MainButton>
      </DemonFormItem>
    </AddDemonFormStyled>
  )
}

export default DemonForm
