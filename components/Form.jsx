
export default function Form() {
  return (
    <form className="flex flex-col gap-4">
        <input type="text" className="input" placeholder="Full Name" />
        <input type="email" className="input" placeholder="Email address" />
        <input type="text" className="input" placeholder="Phone number" />
        <textarea className="textarea" placeholder="Your message"></textarea>
        <button type="submit" className="btn self-start">Send Message</button>
    </form>
  )
}
