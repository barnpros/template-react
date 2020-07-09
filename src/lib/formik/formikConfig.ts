import { FormikConfig, FormikValues } from "formik";

/**
 * This function sets some handy defaults which make input validation easier.
 *
 * To use, spread the return object on the <Formik> component.
 * Example: <Formik {...formikConfig(myConfig)}>...</Formik>
 */
export function formikConfig(
  configOptions: FormikConfig<FormikValues>,
): FormikConfig<FormikValues> {
  return {
    ...configOptions,
    validateOnChange: true,
    validateOnMount: true,
    validateOnBlur: false,
  };
}
