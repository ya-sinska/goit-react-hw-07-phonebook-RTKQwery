import { useForm } from "react-hook-form";
import { useUpdateContactMutation} from "redux/contactsItemSlice";
import { useEffect} from "react";
import { sucsessEdit, errorEdit } from "utils/notification";
import { useGetContactsByIdQuery } from 'redux/contactsItemSlice';

export const useEditorForm = (id) => {
    const { data: contact } = useGetContactsByIdQuery(id);
    const { register, handleSubmit, formState: { errors } } = useForm({});
    const [updateContact, { isLoading, isSuccess, isError }] = useUpdateContactMutation();
    useEffect(() => {
        isSuccess && sucsessEdit();
        isError && errorEdit();
    }, [isError, isSuccess]);
    const handleUpdateContact = async fields => {
    try {
      await updateContact({ id: id, ...fields });
    } catch (error) {
      console.log(error);
    }
    };
    const onSubmit = async (values) => {
        await handleUpdateContact(values);
  };
    return { register, handleSubmit, errors, onSubmit, isLoading, contact};
}