import { Button, Form, Input } from 'antd'
import React, { useCallback, useEffect } from 'react'
import FormItem from '../../FormItem/FormItem'
import { EventItem, EventType } from '../../../api/store/models/MCalendarSlice'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useActions } from '../../../../app/helpers/actions'
import SelectItem from '../../SelectItem/SelectItem'
import { TOption } from '../../SelectItem/types/ISelectItem'
import ModalWindow from '../../Modal/Modal'
import { ICalendarEventForm } from '../types/ICalendarEventForm'

const CalendarEventForm: React.FC<ICalendarEventForm> = ({ isModalOpen, setIsModalOpen, dateEvent }) => {
    const { addEvent } = useActions()

    const defaultValuesForm: EventItem = {
        content: '',
        type: 'success',
    }
    const {
        handleSubmit,
        control,
        reset,
        formState: { isSubmitSuccessful }
    } = useForm<EventItem>({
        defaultValues: defaultValuesForm
    })
    const [form] = Form.useForm()

    const onSubmit: SubmitHandler<EventItem> = (dataAboutEvent) => {
        console.log(dataAboutEvent)
        setIsModalOpen(false)
        let year = dateEvent?.year()
        let month = dateEvent?.month()
        let date = dateEvent?.date()

        const updatedDataAboutEvent = { event: dataAboutEvent, date: { year: year!, month: month!, date: date! } }
        addEvent(updatedDataAboutEvent)
    }

    const eventTypes: TOption<EventType>[] = [{ value: 'success', label: 'success' }, { value: 'warning', label: 'warning' }, { value: 'error', label: 'error' },]

    const onFinishFailed = useCallback((errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }, [])

    const handleCancel = useCallback(() => {
        setIsModalOpen(false)
        form.setFieldsValue(defaultValuesForm)
    }, [form, defaultValuesForm])

    const onEventTypeChange = useCallback((valueEventType: unknown) => {
        form.setFieldsValue({ type: valueEventType as EventType })
    }, [form])

    useEffect(() => {
        if (isSubmitSuccessful) {
            form.resetFields()
            reset(defaultValuesForm)
        }
    }, [isSubmitSuccessful, reset])

    useEffect(() => {
        form.setFieldsValue(defaultValuesForm)
    }, [])

    return (
        <ModalWindow title='События' isModalOpen={isModalOpen} handleOk={handleSubmit(onSubmit)} handleCancel={handleCancel}>
            <div>
                <h2>Event</h2>
                <Form
                    form={form}
                    initialValues={defaultValuesForm}
                    name="formEvent"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    onFinish={handleSubmit(onSubmit)}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <FormItem<EventItem> name="type" control={control} rules={{ required: false }} paramsFormItem={{ label: "Event Name" }}><SelectItem defaultValue='success' onChange={onEventTypeChange} options={eventTypes} /></FormItem>
                    <FormItem<EventItem> name="content" control={control} rules={{ required: false, maxLength: { value: 25, message: "Length <= 25" } }} paramsFormItem={{ label: "Event Name" }} ><Input /></FormItem>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </ModalWindow>
    )
}

export default CalendarEventForm