import React, { useEffect, useState } from 'react'
import CalendarOfEvents from '../../../shared/ui/Calendar/Calendar'
import ModalWindow from '../../../shared/ui/Modal/Modal'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button, Form, Input } from 'antd'
import FormItem from '../../../shared/ui/FormItem/FormItem'
import { EventItem, EventType } from '../../api/store/models/MCalendarSlice'
import type { Dayjs } from 'dayjs';
import { useActions } from '../../../app/helpers/actions'
import SelectItem from '../../../shared/ui/SelectItem/SelectItem'
import { TOption } from '../../../shared/types/ISelectItem'

const WCalendar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dateEvent, setDateEvent] = useState<Dayjs>();
    const [selectKey, setSelectKey] = useState(0);
    const { addEvent } = useActions()

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    }
    const onSubmit: SubmitHandler<EventItem> = (dataAboutEvent) => {
        console.log(dataAboutEvent)
        setIsModalOpen(false)
        let year = dateEvent?.year()
        let month = dateEvent?.month()
        let date = dateEvent?.date()

        const updatedDataAboutEvent = { event: dataAboutEvent, date: { year: year!, month: month!, date: date! } }
        addEvent(updatedDataAboutEvent)
    }
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

    useEffect(() => {
        form.setFieldsValue(defaultValuesForm)
    }, [])

    useEffect(() => {
        if (isSubmitSuccessful) {
            form.resetFields()
            reset(defaultValuesForm)
        }
    }, [isSubmitSuccessful, reset])

    const showModal = (dateEvent: Dayjs) => {
        setDateEvent(dateEvent)
        setIsModalOpen(true)
    };

    const handleCancel = () => {
        setIsModalOpen(false)
        form.setFieldsValue(defaultValuesForm)
    };

    const eventTypes: TOption<EventType>[] = [{ value: 'success', label: 'success' }, { value: 'warning', label: 'warning' }, { value: 'error', label: 'error' },]

    const onEventTypeChange = (valueEventType: EventType) => {
        form.setFieldsValue({ type: valueEventType });
    };

    return (
        <>
            <CalendarOfEvents showModal={showModal} />
            <ModalWindow title='События' isModalOpen={isModalOpen} handleOk={handleSubmit(onSubmit)} handleCancel={handleCancel}>
                <div>
                    <h2>Event</h2>
                    <Form
                        form={form}
                        name="formEvent"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        onFinish={handleSubmit(onSubmit)}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <FormItem<EventItem> name="type" control={control} rules={{ required: false }} paramsFormItem={{ label: "Event Name" }}><SelectItem<EventType> defaultValue='success' onChange={onEventTypeChange} options={eventTypes} /></FormItem>
                        <FormItem<EventItem> name="content" control={control} rules={{ required: false, maxLength: { value: 25, message: "Length <= 25" } }} paramsFormItem={{ label: "Event Name" }} ><Input /></FormItem>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </ModalWindow>
        </>
    )
}

export default WCalendar