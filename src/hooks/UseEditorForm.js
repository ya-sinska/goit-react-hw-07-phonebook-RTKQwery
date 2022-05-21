import { useForm } from "react-hook-form";
import {  useAddContactsMutation, useUpdateContactMutation} from "redux/contactsItemSlice";
import { useEffect } from "react";
import { sucsessAdd, errorAdd } from "utils/notification";
import { useGetContactsByIdQuery } from 'redux/contactsItemSlice';
export const useEditorForm = (id) => {
    const { data: contact } = useGetContactsByIdQuery(id);
    const { register, handleSubmit, formState: { errors } } = useForm({});
    // const [addContact, {isLoading, isSuccess, isError}] = useAddContactsMutation();
    const [updateContact, {isLoading, isSuccess, isError}] = useUpdateContactMutation;
    useEffect(() => {
        isSuccess && sucsessAdd();
        isError && errorAdd();
    }, [isError, isSuccess]);
console.log(updateContact)
    const onSubmit = async (values) => {
        try {
            const item = {
            
            name: values.name ,
            number: values.number,
            } 
            // await updateContact({...item});
        }
        catch (error) {
            error();    
        }

    };
    return{register,handleSubmit, errors, onSubmit, isLoading, contact}
}