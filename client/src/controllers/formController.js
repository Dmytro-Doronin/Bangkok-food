export const formController = ({ form, onSubmit }) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault()

        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())


        if (typeof onSubmit === "function") {
            onSubmit(data)
        }
    })
}