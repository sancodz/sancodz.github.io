import type { FC } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const Contact: FC = () => {
  return (
    <div className="max-w-2xl">
      <p className="text-gray-700 dark:text-gray-300 mb-8">
        Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
      </p>

      <form className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm">
            Name
          </label>
          <Input
            id="name"
            placeholder="Your name"
            required
            className="border-gray-300 dark:border-gray-700 bg-transparent"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Your email"
            required
            className="border-gray-300 dark:border-gray-700 bg-transparent"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm">
            Message
          </label>
          <Textarea
            id="message"
            placeholder="Your message"
            rows={5}
            required
            className="border-gray-300 dark:border-gray-700 bg-transparent"
          />
        </div>

        <Button
          type="submit"
          className="bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
        >
          Send Message
        </Button>
      </form>
    </div>
  )
}

export default Contact

