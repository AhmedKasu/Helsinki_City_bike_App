import { FieldValues, FormProvider, useForm } from 'react-hook-form';

import Form from '../Form';
import NumberInput from '../Form/NumberInput';
import SubmitButton from '../Form/SubmitButton';

interface FormData {
  distance: string;
  duration: string;
}

interface Props {
  onSubmit: (variables: FieldValues) => void;
}

const FilterJourneyForm = ({ onSubmit }: Props) => {
  const methods = useForm<FormData>({
    defaultValues: { distance: '', duration: '' },
  });

  const { isDirty } = methods.formState;

  return (
    <FormProvider {...methods}>
      <Form onSubmit={onSubmit}>
        <NumberInput name='distance' min={1} placeholder='Distance (km)' />
        <NumberInput name='duration' min={1} placeholder='Duration (mins)' />
        <SubmitButton label='Filter' isDisabled={!isDirty} />
      </Form>
    </FormProvider>
  );
};

export default FilterJourneyForm;
