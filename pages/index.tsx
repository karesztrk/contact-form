import {
  Button,
  Box,
  Container,
  Heading,
  Paragraph,
  FieldStack,
  InputField,
  TextareaField,
  SelectField,
  CheckboxField,
} from 'bumbag';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout title='Hello Contact Form'>
    <Container maxWidth='768px'>
      <Heading paddingY='major-2'>Hello Contact Form 👋</Heading>
      <Paragraph>
        A sample form to demonstrate various UI libraries with their
        capabilities.
      </Paragraph>
      <Box>
        <FieldStack>
          <InputField name='name' label='Your name' />
          <InputField name='email' label='Email address' type='email' />
          <TextareaField placeholder='Tell us what do you think' />
          <SelectField
            label='Country'
            options={[
              { label: 'United Kingdom', value: 'uk' },
              { label: 'Hungary', value: 'hu' },
            ]}
          />
          <CheckboxField checked checkboxLabel='Remember me' />
          <Button palette='primary' marginY='minor-2'>
            Submit
          </Button>
        </FieldStack>
      </Box>
    </Container>
  </Layout>
);

export default IndexPage;
