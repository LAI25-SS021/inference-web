import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import CardLayout from '@/Layouts/CardLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
  const breadcrumbs = [{ title: 'Dashboard' }];

  return (
    <AuthenticatedLayout auth={auth} breadcrumbs={breadcrumbs}>
      <Head title="Dashboard" />

      <CardLayout className="h-[72vh]">This is a Dashboard page</CardLayout>
    </AuthenticatedLayout>
  );
}
