import ContactForm from '@/components/contact-form'

export default function Contact() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h2 className='title'>We should keep in touch !</h2>

        <ContactForm />
      </div>
    </section>
  )
}