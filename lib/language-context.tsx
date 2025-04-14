"use client";

import React, { createContext, useContext, useState, useCallback } from 'react';

type Language = 'es' | 'en';

interface HeroTranslations {
  title: string;
  subtitle: string;
  bookNow: string;
}

interface FeatureTranslations {
  title: string;
  amenities: {
    title: string;
    description: string;
  };
  location: {
    title: string;
    description: string;
  };
  service: {
    title: string;
    description: string;
  };
}

interface BookingTranslations {
  title: string;
  checkIn: string;
  checkOut: string;
  checkAvailability: string;
  available: string;
  notAvailable: string;
  close: string;
  sendMessage: string;
}

interface ContactTranslations {
  title: string;
  name: string;
  email: string;
  message: string;
  address: string;
  phone: string;
  emailLabel: string;
  success: string;
  error: string;
}

interface FooterTranslations {
  copyright: string;
  address: string;
  contact: string;
}

interface MenuTranslations {
  home: string;
  rooms: string;
  services: string;
  contact: string;
  about: string;
}

interface Translations {
  hero: HeroTranslations;
  features: FeatureTranslations;
  booking: BookingTranslations;
  contact: ContactTranslations;
  footer: FooterTranslations;
  menu: MenuTranslations;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Translations;
  toggleLanguage: () => void;
}

const translations: Record<Language, Translations> = {
  es: {
    hero: {
      title: 'Hotel Boutique Mendoza',
      subtitle: 'Disfruta del mejor vino y la majestuosidad de los Andes',
      bookNow: 'Reservar Ahora'
    },
    features: {
      title: 'Nuestras Características',
      amenities: {
        title: 'Amenidades Premium',
        description: 'Piscina climatizada, spa, bodega propia y restaurante gourmet'
      },
      location: {
        title: 'Ubicación Privilegiada',
        description: 'A solo 15 minutos del centro de Mendoza y 30 minutos de los viñedos más prestigiosos'
      },
      service: {
        title: 'Servicio Personalizado',
        description: 'Experiencias enológicas y tours personalizados por las bodegas de la región'
      }
    },
    booking: {
      title: 'Reserva tu Estancia',
      checkIn: 'Entrada',
      checkOut: 'Salida',
      checkAvailability: 'Verificar Disponibilidad',
      available: '¡Disponible!',
      notAvailable: 'No disponible en estas fechas',
      close: 'Cerrar',
      sendMessage: 'Enviar mensaje'
    },
    contact: {
      title: 'Contáctanos',
      name: 'Nombre',
      email: 'Correo electrónico',
      message: 'Mensaje',
      address: 'Av. San Martín 1234, Mendoza, Argentina',
      phone: '+54 261 123-4567',
      emailLabel: 'reservas@hotelboutiquemendoza.com',
      success: 'Mensaje enviado con éxito',
      error: 'Error al enviar el mensaje'
    },
    footer: {
      copyright: '© 2024 Hotel Boutique Mendoza. Todos los derechos reservados.',
      address: 'Av. San Martín 1234, Mendoza, Argentina',
      contact: 'Tel: +54 261 123-4567 | Email: reservas@hotelboutiquemendoza.com'
    },
    menu: {
      home: 'Inicio',
      rooms: 'Habitaciones',
      services: 'Servicios',
      contact: 'Contacto',
      about: 'Nosotros'
    }
  },
  en: {
    hero: {
      title: 'Mendoza Boutique Hotel',
      subtitle: 'Experience the finest wine and the majesty of the Andes',
      bookNow: 'Book Now'
    },
    features: {
      title: 'Our Features',
      amenities: {
        title: 'Premium Amenities',
        description: 'Heated pool, spa, private winery, and gourmet restaurant'
      },
      location: {
        title: 'Prime Location',
        description: 'Just 15 minutes from downtown Mendoza and 30 minutes from the most prestigious vineyards'
      },
      service: {
        title: 'Personalized Service',
        description: 'Wine experiences and personalized tours of the region\'s wineries'
      }
    },
    booking: {
      title: 'Book Your Stay',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      checkAvailability: 'Check Availability',
      available: 'Available!',
      notAvailable: 'Not available for these dates',
      close: 'Close',
      sendMessage: 'Send message'
    },
    contact: {
      title: 'Contact Us',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      address: '1234 San Martín Ave, Mendoza, Argentina',
      phone: '+54 261 123-4567',
      emailLabel: 'reservations@mendozaboutiquehotel.com',
      success: 'Message sent successfully',
      error: 'Error sending message'
    },
    footer: {
      copyright: '© 2024 Mendoza Boutique Hotel. All rights reserved.',
      address: '1234 San Martín Ave, Mendoza, Argentina',
      contact: 'Tel: +54 261 123-4567 | Email: reservations@mendozaboutiquehotel.com'
    },
    menu: {
      home: 'Home',
      rooms: 'Rooms',
      services: 'Services',
      contact: 'Contact',
      about: 'About Us'
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  }, []);

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      translations: translations[language],
      toggleLanguage 
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}