"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { BorderBeam } from "@/components/ui/border-beam";

interface BookingConfiguratorProps {
  company: string;
  whatsapp: string;
  services: string[];
  compact?: boolean;
}

const periods = ["Manhã", "Tarde", "Fim do dia"] as const;

export function BookingConfigurator({ company, whatsapp, services, compact = false }: BookingConfiguratorProps) {
  const [service, setService] = useState(services[0] ?? "Corte");
  const [period, setPeriod] = useState<(typeof periods)[number]>("Tarde");

  const href = useMemo(() => {
    const number = whatsapp.replace(/\D/g, "");
    const message = `Olá! Vim pelo site da ${company}. Quero agendar ${service}. Minha preferência de período é ${period.toLowerCase()}. Quais horários estão disponíveis?`;
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  }, [company, period, service, whatsapp]);

  return (
    <div className={`bb-booking-card booking-card${compact ? " bb-booking-card-compact" : ""}`}>
      <div className="bb-booking-field">
        <label htmlFor="booking-service">Serviço</label>
        <div className="bb-select-wrap">
          <select id="booking-service" value={service} onChange={(event) => setService(event.target.value)}>
            {services.map((name) => <option key={name} value={name}>{name}</option>)}
          </select>
          <span aria-hidden="true">⌄</span>
        </div>
      </div>

      <fieldset className="bb-booking-periods">
        <legend>Melhor período</legend>
        <div className="period-toggle-group">
          {periods.map((item) => (
            <button
              key={item}
              type="button"
              className={`period-toggle ${period === item ? "is-selected" : ""}`}
              aria-pressed={period === item}
              onClick={() => setPeriod(item)}
            >
              {period === item && (
                <motion.div
                  layoutId="period-pill"
                  className="period-pill"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                />
              )}
              <span className="period-label">{item}</span>
            </button>
          ))}
        </div>
      </fieldset>

      <a className="bb-booking-submit" href={href} target="_blank" rel="noopener noreferrer" style={{ position: "relative" }}>
        <BorderBeam size={200} duration={15} colorFrom="#b8874d" colorTo="#d2ad7c" />
        <span style={{ position: "relative", zIndex: 1 }}>Ver horários no WhatsApp <span aria-hidden="true">↗</span></span>
      </a>
      <p className="bb-booking-note">O site prepara a mensagem; a confirmação do horário acontece no WhatsApp.</p>
    </div>
  );
}
