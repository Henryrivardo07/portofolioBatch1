import React from 'react';
import { z } from 'zod';
import { AppForm } from '@/components/ui/AppForm';
import styles from './ContactForm.module.scss';
import clsx from 'clsx';

const schema = z.object({
  name: z.string().refine((val) => val.trim() !== '', {
    message: 'Name cannot be empty',
  }),
  email: z.string().superRefine((val, ctx) => {
    if (val.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Email cannot be empty',
      });
    } else {
      try {
        z.string().email().parse(val);
      } catch {
        ctx.addIssue({
          code: z.ZodIssueCode.invalid_string,
          validation: 'email',
          message: 'Invalid email address',
        });
      }
    }
  }),
  message: z.string().refine((val) => val.trim() !== '', {
    message: 'Message cannot be empty',
  }),
});

const handleOnSubmit = async (data: z.infer<typeof schema>) => {
  console.log(data);
};

type ContactFormProps = {
  className: string;
};

export const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  console.log('className', className);
  return (
    <div className={clsx(styles.contactForm, className)}>
      {/* form container */}

      <AppForm
        schema={schema}
        onSubmit={handleOnSubmit}
        options={{ clearOnSubmit: true }}
      >
        <AppForm.Input name='name' placeholder='Enter your name' />
        <AppForm.Input
          name='email'
          // label='Email'
          placeholder='Enter your email'
        />
        <AppForm.TextArea
          name='message'
          // label='Message'
          placeholder='Enter your message'
        />
        <button className={styles.submitButton}>Send Message</button>
      </AppForm>
    </div>
  );
};
