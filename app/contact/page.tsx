import Header from '@/components/header'
import LetsConnect from '@/components/contact/lets-connect'
import SocialLinks from '@/components/contact/social-links'
import BookAppointment from '@/components/contact/book-appointment'
import MyOffice from '@/components/contact/my-office'
import ContactFooter from '@/components/contact/contact-footer'

export const metadata = {
  title: 'Contact - Lilac Template',
  description: 'Get in touch and book your therapy session',
}

export default function ContactPage() {
  return (
    <main className="bg-[#F0ECE6]">
      <Header />
      <div className="pt-24 md:pt-28" />
      <LetsConnect />
      <BookAppointment />
      <MyOffice />
      <SocialLinks />
      <ContactFooter />
    </main>
  )
}
