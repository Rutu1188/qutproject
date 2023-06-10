window.formioCreateFormOptions = ({ envUrl, projectName, formName, defaultOptions, elem }) =>{
    // you could retrieve the data attribute from the form container element with the following code, for example if you want to get the formConfirmation metadata:
    // the build-in default Option is here: https://github.com/qld-gov-au/formio/blob/main/src/options/createForm.options.js
    /*
        const { formioFormConfirmation } = elem.dataset;
    */
    // below is an example to pass custom options to the form, for more details please refer to https://help.form.io/developers/form-renderer#form-renderer-options
    /*
    return {
        buttonSettings: {
            showCancel: false,
            showPrevious: false,
            showNext: false,
            showSubmit: false,
          },
    };
    */
    return {};
}
window.formioCreateFormController = ({ envUrl, projectName, formName, form, elem }) =>{
    // you could retrieve the data attribute from the form container element with the following code, for example if you want to get the formConfirmation metadata:
    // the build-in default controller is here: https://github.com/qld-gov-au/formio/blob/main/src/options/createForm.controller.js
    /*
        const { formioFormConfirmation } = elem.dataset;
    */
    // below is an example to control the form, for more details please refer to https://help.form.io/developers/form-renderer#controlling-the-form-with-javascript
    /*
        form.on("change", (e) => {
          // you can see the data object in the browser's inspector whenever you change the field value.
          console.info("onChange", e.data);
        });
    */
}
window.onFormioLoaded = () =>{
    // this function will be executed when the global Formio is loaded into the page and before form initialisation, so you could do modification on that object. Form example, you could modify the Formio.Form.prototype.errorForm to print a custom error message.
}