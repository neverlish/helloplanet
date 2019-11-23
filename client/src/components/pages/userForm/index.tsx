import * as React from 'react';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';

export interface IUser {
  firstName: string;
  lastName: string;
}

interface IProps {
  message?: string;
}

class UserForm extends React.Component<InjectedFormProps<IUser> & IProps> {
  render() {
    const { pristine, submitting, reset, handleSubmit, message } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>{message}</div>
        <div>
          <label>First Name </label>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div>
          <label>Last Name </label>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm<IUser, IProps>({
  form: 'userForm',
})(UserForm);