import Checkbox from '@/Components/Checkbox';
import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Form, Input } from 'antd';

export default function Login({ status }) {
  const [form] = Form.useForm();

  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const submit = (e) => {
    e.preventDefault();

    post(route('login'), {
      onFinish: () => reset('password'),
    });
  };

  return (
    <GuestLayout>
      <Head title="Log in" />

      {status && (
        <div className="mb-4 text-sm font-medium text-green-600">{status}</div>
      )}

      <Form
        form={form}
        initialValues={data}
        layout="vertical"
        size="large"
        onFinish={submit}
      >
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
        <Form.Item>
          <Checkbox
            name="remember"
            checked={data.remember}
            onChange={(e) => setData('remember', e.target.checked)}
          />
          <span className="ms-2 text-sm text-gray-600">Remember me</span>
        </Form.Item>
        <div className="mt-4 flex items-center justify-end">
          <Link
            href={route('register')}
            className="text-sm !text-gray-600 !underline"
          >
            Don't have an account?
          </Link>
          <PrimaryButton
            className="ms-4"
            onClick={submit}
            disabled={processing}
          >
            Log in
          </PrimaryButton>
        </div>
      </Form>
    </GuestLayout>
  );
}
