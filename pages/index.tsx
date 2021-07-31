import { Button, Center, Checkbox, Container, Group, Select, Text, Textarea, TextInput, Title } from '@mantine/core';
import { FC } from 'react';
import Layout from '../components/Layout';

const IndexPage: FC = () => (
  <Layout title='Hello Contact Form'>
    <Container size='xs'>
      <Title order={1}>Hello Contact Form 👋</Title>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
        <Text>
          A sample form to demonstrate various UI libraries with their
          capabilities.
        </Text>
        <TextInput id='name' label='Your name' variant='filled' required />
        <TextInput id='email' label='Email address' variant='filled' required />
        <Textarea
          id='description'
          label='Your description'
          placeholder='Tell us what do you think'
          required
        />
        <Select
          id='country'
          label='Country'
          placeholder='Select country'
          data={[
            { value: 'gb', label: 'United Kingdom' },
            { value: 'hu', label: 'Hungary' },
          ]}
        />
        <Checkbox
          id='rememberMe'
          label='Remember me'
          checked
        />
        <Button>Submit</Button>
      </form>
    </Container>
  </Layout>
);

export default IndexPage;
