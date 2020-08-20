import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  FormStyled,
  FormItem,
  FormInput,
  FormTextArea,
  FormError
} from '../../styled/AddDemonFormStyled'
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
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <FormItem>
        <FormInput
          name="title"
          onChange={e => setTitle(e.target.value)}
          ref={register({ required: true, maxLength: 30, minLength: 2 })}
          placeholder="Title"
          type="text"
          value={title} />
        {errors.title && errors.title.type === 'required' && <FormError>Required field</FormError>}
        {errors.title && errors.title.type === 'minLength' && <FormError>Give this demon a proper title</FormError>}
        {errors.title && errors.title.type === 'maxLength' && <FormError>Title can't exceed 40 characters</FormError>}
      </FormItem>
      <FormItem>
        <FormTextArea
          name="cause"
          onChange={e => setCause(e.target.value)}
          placeholder="Root cause of this demon"
          ref={register({ required: true, minLength: 5 })}
          rows={5}
          type="text"
          value={cause} />
        {errors.cause && errors.cause.type === 'required' && <FormError>Required field</FormError>}
        {errors.cause && errors.cause.type === 'minLength' && <FormError>Write a proper explination of the root cause of this demon</FormError>}
      </FormItem>
      <FormItem>
        <FormTextArea
          name="manage"
          onChange={e => setManage(e.target.value)}
          placeholder="How will you manage your demon"
          ref={register({ required: true, minLength: 10 })}
          rows={5}
          type="text"
          value={manage} />
        {errors.manage && errors.manage.type === 'required' && <FormError>Required field</FormError>}
        {errors.manage && errors.manage.type === 'minLength' && <FormError>Write a proper explination of how you will manage this demon</FormError>}
      </FormItem>
      <FormItem>
        <MainButton
          type="submit"
        >Submit</MainButton>
      </FormItem>
    </FormStyled>
  )
}

export default DemonForm
