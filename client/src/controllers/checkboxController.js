export const checkboxController = ({ checkboxElement }) => {
    if (!checkboxElement) {
        throw new Error('checkbox is required')
    }

    const input = checkboxElement.querySelector('.styled-checkbox')
    if (!input) {
        throw new Error('checkbox not found inside element')
    }

    function handleChange() {
        const event = new CustomEvent('checkbox-change', {
            detail: {
                checked: input.checked,
                value: input.value,
            },
            bubbles: true, 
        })

        checkboxElement.dispatchEvent(event)
    }

    input.addEventListener('change', handleChange)
}
