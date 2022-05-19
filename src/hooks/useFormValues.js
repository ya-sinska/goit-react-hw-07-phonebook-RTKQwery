import { useForm } from "react-hook-form";
import { useAddContactsMutation } from "redux/contactsItemSlice";
import { contactsItemSlice} from "../redux";

export const useFormValues = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            name:'',
            number:'+380'
        }
    });
    const [addContact] = useAddContactsMutation();
    const { data:stateItems} = contactsItemSlice.useGetContactsQuery();
    const onSubmit = async (values) => {
        try {
            const item = {
            name: values.name ,
            number: values.number,
            } 
            const isIncludesName = stateItems.find(item => item.name.toLowerCase() === values.name.toLowerCase());
            if (isIncludesName) {
                alert(`${values.name.name} is already is contacts`);
                reset();
            return
            }
            else {await addContact(item)}
            reset();
        }
        catch (error) {
            alert('Error')    
        }

    };
    return{register, handleSubmit, errors, onSubmit }
}