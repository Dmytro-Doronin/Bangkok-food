import { formController } from "../controllers/formController.js"
import {Form} from "../views/form.js"

export const createFormSection = ({ onSubmit }) => {
    const { form } = Form()
    formController({ form, onSubmit })
    return { form }
}