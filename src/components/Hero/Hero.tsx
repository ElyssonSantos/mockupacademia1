import { ArrowRight, ThermometerSnowflake, Zap, Users } from 'lucide-react';
import './Hero.css';

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1920&h=1080&auto=format&fit=crop"
          alt="Sua Academia Treino"
          className="hero-img"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/hero.jpg';
          }}
        />
      </div>

      <div className="hero-content container">
        <div className="hero-text-area">
          <h1 className="hero-title reveal" style={{ transitionDelay: '0.1s' }}>
            MAIS QUE UMA ACADEMIA,<br />
            <span className="text-green">UM ESTILO DE VIDA.</span>
          </h1>
          <p className="hero-description reveal" style={{ transitionDelay: '0.2s' }}>
            Aqui você encontra estrutura, energia e o suporte certo para conquistar seus objetivos.
          </p>
          <div className="hero-cta-wrapper reveal" style={{ transitionDelay: '0.3s' }}>
            <a href="#sobre" className="hero-cta btn-primary">
              QUERO CONHECER <ArrowRight size={20} />
            </a>
          </div>

          <div className="hero-features reveal">
            <div className="feature-icon-wrapper" data-tooltip="100% CLIMATIZADA" tabIndex={0}>
              <ThermometerSnowflake size={20} />
            </div>
            <div className="feature-icon-wrapper" data-tooltip="EQUIPAMENTOS MODERNOS" tabIndex={0}>
              <Zap size={20} />
            </div>
            <div className="feature-icon-wrapper" data-tooltip="PROFISSIONAIS QUALIFICADOS" tabIndex={0}>
              <Users size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
