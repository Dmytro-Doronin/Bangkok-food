import { Form } from "../views/Form.js"
import { formController } from "../controllers/formController.js"

export const createFormSection = ({ host, onSubmit }) => {
    const { form } = Form()
    formController({ form, onSubmit })
    return { form }
}