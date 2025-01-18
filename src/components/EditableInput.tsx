import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Check, Edit } from 'lucide-react'
import { Label } from './ui/label'

const EditableInput = ({ initialVal, setNewValue, label }: {
    initialVal: string,
    setNewValue: (input: string) => void,
    label: string
}) => {
    const [editorMode, setEditorMode] = useState(false)
    const [value, setValue] = useState(initialVal)

    return (
        <div>
            <div className='w-[300px] border-b border-gray-300'>
                <Label >
                    {label}
                </Label>
            </div>
            <div className="flex">
                {
                    editorMode
                        ? (

                            <>
                                <Input
                                    className='w-[300px]'
                                    value={value}
                                    onChange={(e => setValue((e.target as HTMLInputElement).value))}
                                />
                                <Button
                                    className='ml-6'
                                    onClick={() => {
                                        setNewValue(value)
                                        setEditorMode(false)
                                    }}>
                                    <Check />
                                </Button></>
                        )
                        : (<>
                            <div className='w-[300px]'>
                                {initialVal}
                            </div>
                            <Button onClick={() => setEditorMode(true)} className='ml-6' >
                                <Edit className='' />
                            </Button>
                        </>)
                }
            </div>

        </div>
    )
}

export default EditableInput