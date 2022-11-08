export const initialMessages = [
    {
      id: `Fulano-${Math.ceil(Math.random() * 100000)}`,
      sender: "Fulano",
      content: "Hello",
      createdAt: new Date().toLocaleTimeString(
        "en-US",
        {
          hour: "numeric",
          minute: "numeric",
          hour12: true
        }
      )
    },

    {
      id: `Me-${Math.ceil(Math.random() * 100000)}`,
      sender: "Me",
      content: "Save",
      createdAt: new Date().toLocaleTimeString(
        "en-US",
        {
          hour: "numeric",
          minute: "numeric",
          hour12: true
        }
      )
    }
  ]