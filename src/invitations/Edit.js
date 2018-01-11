import React from 'react';
import {
  translate,
  BooleanField,
  Datagrid,
  DateField,
  DateInput,
  Delete,
  Edit,
  Filter,
  FormTab,
  List,
  LongTextInput,
  NullableBooleanInput,
  NumberField,
  ReferenceManyField,
  TabbedForm,
  TextField,
  TextInput,
  ReferenceInput
} from 'admin-on-rest';
import Icon from 'material-ui/svg-icons/social/person';

import EditButton from '../buttons/EditButton';

import FullNameField from '../fields/FullNameField';

import { Title } from './Shared';

export const InviteIcon = Icon;

const ViewEdit = props => (
  <Edit title={<Title />} {...props}>
    <TabbedForm>
      <FormTab label="resources.visitors.tabs.invitation">
        <TextInput source="first_name" style={{ display: 'inline-block' }} />
        <TextInput
          source="last_name"
          style={{ display: 'inline-block', marginLeft: 32 }}
        />
        <TextInput
          type="email"
          source="email"
          validation={{ email: true }}
          options={{ fullWidth: true }}
          style={{ width: 544 }}
        />

        <LongTextInput
          label="resources.visitors.tabs.message"
          source="invitation"
          style={{ maxWidth: 544 }}
        />
      </FormTab>
    </TabbedForm>
  </Edit>
);

export default ViewEdit;