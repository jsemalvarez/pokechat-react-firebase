import { useState } from "react";

export const useForm = ( initForm = {}, formValidations = {}) => {

    const [formState, setFormState] = useState(initForm);


    const onInputChange = ({target}) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    const onResetForm = () => {
        setFormState( initForm );
    }



    return {
        ...formState,
        onInputChange,
        onResetForm
    }
}
