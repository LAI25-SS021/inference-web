import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Form, Input } from 'antd';

export default function Register() {
  const [form] = Form.useForm();

  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const submit = (e) => {
    e.preventDefault();

    post(route('register'), {
      onFinish: () => reset('password', 'password_confirmation'),
    });
  };

  return (
    <GuestLayout>
      <Head title="Register" />

      <Form
        form={form}
        initialValues={data}
        layout="vertical"
        size="large"
        onFinish={submit}
      >
        <Form.Item
          name="name"
          label="Name"
          validateStatus={errors.name ? 'error' : 'validating'}
          help={errors.name}
        >
          <Input onChange={(e) => setData('name', e.target.value)} />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          validateStatus={errors.email ? 'error' : 'validating'}
          help={errors.email}
        >
          <Input
            type="email"
            onChange={(e) => setData('email', e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          validateStatus={errors.password ? 'error' : 'validating'}
          help={errors.password}
        >
          <Input.Password
            onChange={(e) => setData('password', e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="password_confirmation"
          label="Confirm Password"
          validateStatus={errors.password_confirmation ? 'error' : 'validating'}
          help={errors.password_confirmation}
        >
          <Input.Password
            onChange={(e) => setData('password_confirmation', e.target.value)}
          />
        </Form.Item>
        <div className="mt-4 flex items-center justify-end">
          <Link
            href={route('login')}
            className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Already registered?
          </Link>

          <PrimaryButton
            className="ms-4"
            onClick={submit}
            disabled={processing}
          >
            Register
          </PrimaryButton>
        </div>
      </Form>
    </GuestLayout>
  );
}
