import React, { useState } from 'react';
import { ThreeDots } from "react-loading-icons";
import Errors from '../../../../services/Errors';
import { Button } from '../../../../components/Button/Button';
import Label from '../../../../components/forms/Label/Label';
import Input from '../../../../components/forms/Input/Input';
import ValidationError from '../../../../components/ValidationError/ValidationError';
import { createShortUrlApi, postApi } from '../../../../services/api/requestApi';
import { MdOutlineContentCopy } from 'react-icons/md';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from "react-bootstrap/Tooltip";
import './CreateLinkForm.scss';


const CreateLinkForm: React.FC = () => {
    const [formState, setFormState] = useState({
        isSubmitting: false,
        longURL: "",
        preferredAlias: "",
        generatedURL: "",
        generatedKey: "",
        domain: "linkrplus.up.railway.app/",
        errors: Errors
    });

    const [toolTipMessage, setToolTipMessage] = useState("Copy to clipboard")
    const handleChange = (e: React.FormEvent<HTMLInputElement>, name: any) => {
        setFormState({ ...formState, [name]: e.currentTarget.value })
    }

    const copyToClipBoard = () => {
        navigator.clipboard.writeText(formState.generatedURL);
        setToolTipMessage('copied')
        setTimeout(() => {
            setToolTipMessage('Copy to clipboard')
         }, 3000);
    }
    const renderTooltip = (props: any) => (
        <Tooltip id="button-tooltip" {...props}>
            {toolTipMessage}
        </Tooltip>
    );

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        let generatedURL: string = "";
        setFormState({ ...formState, generatedURL, isSubmitting: true })

        formState.errors.reset();

        let formData = {
            long_url: formState.longURL,
            preferred_alias: formState.preferredAlias,
        }

        const response = await postApi(createShortUrlApi, formData);
        if (response.success) {
            generatedURL = response.data.short_url

        } else {
            formState.errors.setErrors(response.data)
        }


        setFormState({ ...formState, generatedURL, isSubmitting: false })
    }
    return (
        <div className="create-link-form mb-5">
            <div className="card p-4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <form>
                                <div className="mb-3">
                                    <Label name="Enter your Long URL" />
                                    <Input type="text" className="form-control form-control-lg" placeholder="https://www..." value={formState.longURL} onChange={(e) => handleChange(e, 'longURL')} />
                                    <ValidationError message={formState.errors.getKey('long_url')} />
                                </div>
                                <div className="mb-3">
                                    <Label name="Your Shortened URL" />
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Input type="text" className="form-control form-control-lg" placeholder="linkrplus.up.railway.app/" value={formState.domain} onChange={(e) => handleChange(e, 'domain')} disabled />

                                        </div>
                                        <div className="col-md-6"> <Input type="text" className="form-control form-control-lg mt-sm-3 mt-md-0" placeholder="e.g 4fwias (Optional)" value={formState.preferredAlias} onChange={(e) => handleChange(e, 'preferredAlias')} /></div>
                                    </div>
                                    <ValidationError message={formState.errors.getKey('preferred_alias')} />
                                </div>

                                <div className="mt-5 d-flex justify-content-end">
                                    {
                                        formState.isSubmitting ? <Button className="button button--primary button--md button--disabled"> <ThreeDots fill="white" height="10px" width="20px" /></Button> :
                                            <Button onClick={handleSubmit} className="button button--primary button--md">Create</Button>
                                    }
                                </div>


                            </form>
                            {
                                formState.generatedURL !== "" ? <>
                                    <div className="mt-4 pb-5">
                                        <Label name="Your Generated URL" />
                                        <Input
                                            type="text"
                                            className="form-control form-control-lg pe-5"
                                            value={formState.generatedURL}
                                            disabled
                                            extraElements={
                                                <OverlayTrigger
                                                    placement="right"
                                                    delay={{ show: 250, hide: 400 }}
                                                    overlay={renderTooltip}
                                                >
                                                    <button className="input__icon-container input__icon-container--right input__icon-container--clickable" onClick={() => copyToClipBoard()}><MdOutlineContentCopy /></button>
                                                </OverlayTrigger>}
                                        />
                                    </div>
                                </> : null
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateLinkForm;