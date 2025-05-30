import MainLayout from '@/Layouts/MainLayout';
import { CloseOutlined, InboxOutlined } from '@ant-design/icons';
import { Head } from '@inertiajs/react';
import { Button, Image, Typography } from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import { useState } from 'react';

export default function Home() {
  const [image, setImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const submit = (status) => {
    if (status) {
      setLoading(true);
      setTimeout(() => {
        setSubmitted(true);
        setLoading(false);
      }, 2000);
    } else {
      setImage(false);
      setSubmitted(false);
    }
  };

  const props = {
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done' || status === 'error') {
        setImage(true);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <MainLayout>
      <Head title="Home" />

      <div className="py-16">
        <div className="mx-auto max-w-lg space-y-8">
          {submitted ? (
            <>
              <Typography.Title className="block text-center" level={3}>
                Hasil Analisis
              </Typography.Title>

              <div className="flex w-full items-center space-x-6 rounded-xl border p-6">
                <Image
                  width={240}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                <div className="grow text-center">
                  <Typography.Title level={4}>Normal</Typography.Title>
                </div>
              </div>

              <div className="flex space-x-6">
                <Button size="large" disabled={!image} onClick={() => submit(false)} block>
                  Analisis Ulang
                </Button>
                <Button type="primary" size="large" disabled={!image} block>
                  Kirim Feedback
                </Button>
              </div>
            </>
          ) : (
            <>
              <Typography.Title className="block text-center" level={3}>
                RupaKoe: AI untuk Analisis Wajah Anda
              </Typography.Title>

              <div>
                {image ? (
                  <div className="relative w-full rounded-xl border py-6 text-center">
                    <Image
                      width={240}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                    <Button
                      type="link"
                      className="absolute right-0 top-0 w-0"
                      onClick={() => setImage(false)}
                    >
                      <CloseOutlined />
                    </Button>
                  </div>
                ) : (
                  <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload. Strictly prohibited from uploading
                      company data or other banned files.
                    </p>
                  </Dragger>
                )}
              </div>

              <Button
                type="primary"
                size="large"
                disabled={!image}
                onClick={() => submit(true)}
                loading={loading}
                block
              >
                Submit
              </Button>
            </>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
