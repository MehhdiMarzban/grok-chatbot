"use client";
import { useChat } from "@ai-sdk/react";
import { Chat } from "@/components/ui/chat";

export default function Home() {
    const { messages, input, handleInputChange, handleSubmit, isLoading, stop, append } = useChat();
    return (
        <div className="flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <Chat
                className="grow"
                messages={messages}
                handleSubmit={handleSubmit}
                input={input}
                handleInputChange={handleInputChange}
                isGenerating={isLoading}
                stop={stop}
                append={append}
                suggestions={[
                    "Generate a tasty vegan lasagna recipe for 3 people.",
                    "Generate a list of 5 questions for a job interview for a software engineer.",
                    "Who won the 2022 FIFA World Cup?",
                ]}
            />
        </div>
    );
}
