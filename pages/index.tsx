import {
  Button,
  Center,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout title='Hello Contact Form'>
    <Container maxW='xl'>
      <Heading>Hello Contact Form 👋</Heading>
      <VStack pt={8} pb={4}>
        <Text w='100%'>
          A sample form to demonstrate various UI libraries with their
          capabilities.
        </Text>
        <FormControl id='name'>
          <FormLabel>Your name</FormLabel>
          <Input />
        </FormControl>
        <FormControl id='email'>
          <FormLabel>Email address</FormLabel>
          <Input type='email' />
        </FormControl>
        <FormControl id='description'>
          <FormLabel>Your description</FormLabel>
          <Textarea placeholder='Tell us what do you think' />
        </FormControl>
        <FormControl id='country'>
          <FormLabel>Country</FormLabel>
          <Select placeholder='Select country'>
            <option>United Kingdom</option>
            <option>Hungary</option>
          </Select>
        </FormControl>
        <FormControl id='rememberMe'>
          <Checkbox defaultIsChecked>Remember me</Checkbox>
        </FormControl>
      </VStack>
      <Button>Submit</Button>
    </Container>
  </Layout>
);

export default IndexPage;
