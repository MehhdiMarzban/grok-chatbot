# Next.js Chat Application

A modern chat application built with Next.js that supports rich messaging features including file attachments, markdown rendering, and tool invocations.

## Features

- 💬 Real-time chat messaging
- 📎 File attachment support
- ✨ Markdown rendering in messages
- 🔧 Tool invocation capabilities
- 🕒 Timestamp display options
- 🎭 Message animations

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

- `src/components/ui/chat.tsx` - Core chat functionality
- `src/components/ui/chat-message.tsx` - Individual message component with support for various content types

## Usage

### Chat Message Component

add the XAI_API_KEY environment variable to your .env file

The `ChatMessage` component supports various props:

```typescript
interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  createdAt?: Date;
  showTimeStamp?: boolean;
  animation?: "scale" | "none";
  actions?: React.ReactNode;
  className?: string;
  experimental_attachments?: Array<{
    name?: string;
    url: string;
  }>;
  toolInvocations?: any[];
}
```

### File Handling

The application includes utilities for handling files:

```typescript
function createFileList(files: File[] | FileList): FileList {
  const dataTransfer = new DataTransfer();
  for (const file of Array.from(files)) {
    dataTransfer.items.add(file);
  }
  return dataTransfer.files;
}
```

## Technologies

This project uses:

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - For styling (inferred from class names)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

[MIT](LICENSE)
