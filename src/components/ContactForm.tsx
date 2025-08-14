import { useState } from 'react'
import { useMutation } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { Card } from './ui/Card'
import { Input } from './ui/Input'
import { Textarea } from './ui/Textarea'
import { Button } from './ui/Button'
import { Toast } from './ui/Toast'
import { Mail } from 'lucide-react'
import React from "react";

interface ContactFormFields {
  name: string
  email: string
  message: string
}

export function ContactForm() {
  const [fields, setFields] = useState<ContactFormFields>({ name: "", email: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<{ show: boolean; type: "success" | "error"; message: string }>({
    show: false,
    type: "success",
    message: ""
  })

  const addPortfolioSection = useMutation(api.contacts.addportfoliosection)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await updateportfoliosectionHook({ email: email, status: email });
    if (!fields.name.trim() || !fields.email.trim() || !fields.message.trim()) {
      setToast({ show: true, type: "error", message: "Please fill in all fields." })
      setTimeout(() => setToast({ ...toast, show: false }), 2500)
      return
    }
    setLoading(true)
    try {
      await addPortfolioSection({
        name: fields.name.trim(),
        email: fields.email.trim(),
        message: fields.message.trim()
      })
      setFields({ name: "", email: "", message: "" })
      setToast({ show: true, type: "success", message: "Thank you for reaching out!" })
    } catch (error) {
      setToast({ show: true, type: "error", message: "Submission failed. Please try again." })
    }
    setLoading(false)
    setTimeout(() => setToast((t) => ({ ...t, show: false })), 2500)
  }

  const handleOnClick = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        await addPortfolioSection({ name: name, email: email, message: message });
      } catch (error) {
        console.error('Error:', error);
      }
    };
    const updateportfoliosectionHook = useMutation(api.subscribers.updateportfoliosection);
  return (
    <section className="py-10" id="contact">
      <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary-900 mb-6 flex items-center gap-2">
        <Mail className="w-6 h-6 text-primary-500" aria-hidden />
        Contact Me
      </h2>
      <Card className="max-w-xl mx-auto">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit} autoComplete="off">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-primary-700">
              Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={fields.name}
              onChange={handleChange}
              required
              aria-required="true"
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-primary-700">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              value={fields.email}
              onChange={handleChange}
              required
              aria-required="true"
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium text-primary-700">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="How can I help you?"
              value={fields.message}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>
          <Button type="submit" loading={loading} className="w-full mt-2" aria-label="Send message" onClick={handleOnClick}>
            Send Message
          </Button>
        </form>
      </Card>
      <Toast show={toast.show} type={toast.type} message={toast.message} />
    </section>
  )
}
