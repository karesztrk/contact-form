import {
  Button,
  Card,
  Checkbox,
  Col,
  Grid,
  Input,
  Row,
  Select,
  Spacer,
  Text,
  Textarea,
} from '@geist-ui/react';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout title='Hello Contact Form'>
    <Card>
      <Text h1>Hello Contact Form 👋</Text>
      <Text p>
        A sample form to demonstrate various UI libraries with their
        capabilities.
      </Text>
      <Input placeholder='Your name'>Name</Input>
      <Spacer />
      <Input placeholder='Email address' type='email'>
        Email
      </Input>
      <Spacer />
      <div>
        <label style={{ display: 'block', color: '#444', marginBottom: '8pt' }}>
          Your description
        </label>
        <Textarea placeholder='Tell us what do you think'></Textarea>
      </div>
      <Spacer />
      <div>
        <label style={{ display: 'block', color: '#444', marginBottom: '8pt' }}>
          Country
        </label>
        <Select placeholder='Select country'>
          <Select.Option value='1'>United Kingdom</Select.Option>
          <Select.Option value='2'>Hungary</Select.Option>
        </Select>
      </div>
      <Spacer />
      <Checkbox checked={true}>Remember me</Checkbox>
      <Spacer />
      <Button auto type='secondary'>
        Submit
      </Button>
    </Card>
  </Layout>
);

export default IndexPage;
