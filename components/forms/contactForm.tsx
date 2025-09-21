export function ContactForm() {
  interface ContactFormData {
    access_key: string;
    name: string;
    email: string;
    message: string;
  }

  interface Web3FormsResponse {
    success: boolean;
    [key: string]: any;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data: ContactFormData = {
      access_key: '59cb4de0-48c5-4a5d-b358-4a82f4a08ace',
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result: Web3FormsResponse = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" required placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="email@example.com"
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            required
            rows="3"
            placeholder="Enter Message"
          ></textarea>
        </div>
        <button type="submit">Submit Form</button>
      </form>
    </>
  );
}
