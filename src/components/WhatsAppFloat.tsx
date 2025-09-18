
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de solicitar um orçamento para toldo.');
    window.open(`https://wa.me/5569993067833?text=${message}`, '_blank');
  };

  return (
    <a
      href="https://wa.me/5569993067833"
      onClick={handleWhatsAppClick}
      className="whatsapp-float"
      aria-label="Conversar no WhatsApp"
      title="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppFloat;
