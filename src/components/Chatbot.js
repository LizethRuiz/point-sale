import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [conversation, setConversation] = useState([]); // Estado para almacenar la conversación

  const chatContainerStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '300px',
    minHeight: '400px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '8px',
    backgroundColor: '#f4f4f4',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  };

  const conversationStyle = {
    flexGrow: 1, // Ocupa todo el espacio disponible en el contenedor
    padding: '10px',
    overflowY: 'scroll', // Agrega scroll si el contenido excede el espacio visible
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    borderRadius: '20px',
    border: 'none',
    outline: 'none',
    marginTop: '10px',
    marginBottom: '10px',
    color: '#212321',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    marginTop: '10px',
    marginBottom: '10px',
  };

  const formStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
  };

  const sendMessage = async (message) => {
    // Agregar el mensaje del usuario a la conversación
    const updatedConversation = [
      ...conversation,
      { role: 'user', content: message },
    ];
  
    // Realizar la solicitud a la API de OpenAI
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          messages: updatedConversation,
        },
        {
          headers: {
            Authorization: 'Bearer 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',
            'Content-Type': 'application/json',
          },
        }
      );
  
      // Obtener la respuesta del bot
      const botReply = response.data.choices[0].message.content;
  
      // Agregar la respuesta del bot a la conversación
      const updatedConversationWithBotReply = [
        ...updatedConversation,
        { role: 'bot', content: botReply },
      ];
      
      setConversation(updatedConversationWithBotReply);
    } catch (error) {
      console.error('Error al enviar el mensaje al bot:', error);
    }
  };

  return (
    <div style={chatContainerStyle}>
      <h1>Chatbot</h1>
      {/* Renderizar la conversación */}
      <ul style={conversationStyle}>
        {conversation.map((message, index) => (
          <li key={index} className={message.user ? 'user-message' : 'bot-message'}>
            {message.text}
          </li>
        ))}
      </ul>
      {/* Formulario para enviar mensajes */}
      <form style={formStyle} onSubmit={(e) => {
        e.preventDefault();
        const message = e.target.message.value;
        sendMessage(message);
        e.target.reset();
      }}>
        <input style={inputStyle} type="text" placeholder="Escribe un mensaje..." name="message"/>
        <button style={buttonStyle} type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Chatbot;