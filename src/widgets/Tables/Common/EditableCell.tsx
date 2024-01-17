import React, { useContext, useEffect, useRef, useState } from 'react'
import { DataIndex, EditableCellProps, EditableContext } from '../models/MTable';
import { InputRef } from 'antd';
import { Form, Input } from 'antd';
import { NamePath } from 'antd/es/form/interface';

const EditableCell = <T,>({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    adding,
    ...restProps
}: EditableCellProps<DataIndex<T>, T>) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef<InputRef>(null);
    const form = useContext(EditableContext)!;

    useEffect(() => {
        if (editing) {
            inputRef.current!.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({ [dataIndex]: record[dataIndex] });
    };

    const save = async () => {
        try {
            const values = await form.validateFields();

            toggleEdit();
            handleSave({ ...record, ...values }, dataIndex);
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    // const saveAdding = async () => {
    //   try {
    //     const values = await form.validateFields();
    //     handleSave({ ...record, ...values }, dataIndex);
    //   } catch (errInfo) {
    //     console.log('Save failed:', errInfo);
    //   }
    // };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{ margin: 0 }}
                name={dataIndex as NamePath}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
            <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onDoubleClick={toggleEdit}>
                {children}
            </div>
        );
    }
    // console.log(childNode)

    // if (adding) {
    //   childNode = (
    //     <Form.Item
    //       style={{ margin: 0 }}
    //       name={dataIndex}
    //       rules={[
    //         {
    //           required: true,
    //           message: `${title} is required.`,
    //         },
    //       ]}
    //     >
    //       <Input ref={inputRef} onPressEnter={saveAdding} onBlur={saveAdding} />
    //     </Form.Item>
    //   )
    // }

    return <td {...restProps}>{childNode}</td>;
};

export default EditableCell