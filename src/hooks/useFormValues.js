
import { useForm } from "react-hook-form";
import { useAddContactsMutation } from "redux/contactsItemSlice";
import { contactsItemSlice} from "../redux";
import { useEffect } from "react";
import { notify, sucsessAdd,errorAdd } from "utils/notification";

export const useFormValues = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            name:'',
            number:'+380'
        }
    });
    const [addContact, {isLoading, isSuccess, isError}] = useAddContactsMutation();
    const { data: stateItems} = contactsItemSlice.useGetContactsQuery();
    
    useEffect(() => {
        isSuccess && sucsessAdd();
        isError && errorAdd();
    }, [isError, isSuccess]);

    const onSubmit = async (values) => {
        try {
            const item = {
            name: values.name ,
            number: values.number,
            } 
            const dublicateName = stateItems.find(item => item.name.toLowerCase() === values.name.toLowerCase());
            if (dublicateName) {
                notify(item.name);
                reset();
            return
            }
            else {
                await addContact(item);
            }
            reset();
        }
        catch (error) {
            error();    
        }

    };
    return{register, handleSubmit, errors, onSubmit, isLoading}
}