"use client";

import { useState, ChangeEvent, FormEvent } from "react";

// 🔗 URL do webhook do N8N — altere conforme o ambiente
const WEBHOOK_URL = "http://localhost:5678/webhook/contato";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  confirmacao: "sim" | "nao" | "";
  adultos: string;
  criancas: string;
  presente: string;
  mensagem: string;
}

const initialData: FormData = {
  nome: "",
  email: "",
  telefone: "",
  confirmacao: "",
  adultos: "1",
  criancas: "0",
  presente: "",
  mensagem: "",
};

export function ConfirmationForm() {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    // Payload para o N8N
    const payload = {
      ...formData,
      adultos: Number(formData.adultos),
      criancas: Number(formData.criancas),
      timestamp: new Date().toISOString(),
      origem: "cha-de-casa-nova",
    };

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      setStatus("success");
      setFormData(initialData); // Reset form on success
    } catch (err) {
      console.error("Erro ao enviar formulário:", err);
      setStatus("error");
      setErrorMsg(
        "Ops! Não conseguimos enviar sua confirmação. Tente novamente ou entre em contato diretamente."
      );
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setErrorMsg("");
    setFormData(initialData);
  };

  // ── Success State ──
  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-6 text-center animate-fade-in-up">
        {/* Success icon */}
        <div className="w-20 h-20 flex items-center justify-center bg-green-100 border border-green-300 mb-8">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="w-10 h-10 text-green-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h3 className="font-playfair text-3xl font-bold text-navy mb-4">
          Confirmação recebida!
        </h3>
        <p className="font-poppins text-navy/60 text-base mb-8 max-w-md leading-relaxed">
          Que alegria! Sua presença foi confirmada com sucesso. Estamos muito
          animados para te ver no nosso Chá de Casa Nova. 🏠✨
        </p>

        <button
          onClick={handleReset}
          className="font-poppins text-sm text-vinho/70 hover:text-vinho uppercase tracking-wider underline-offset-4 hover:underline transition-all duration-200"
        >
          Enviar outra resposta
        </button>
      </div>
    );
  }

  // ── Form ──
  return (
    <div className="max-w-2xl mx-auto">
      {/* Error Banner */}
      {status === "error" && (
        <div className="mb-8 p-5 bg-red-accent/10 border border-red-accent/30 flex items-start gap-4 animate-fade-in">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="w-5 h-5 text-red-accent mt-0.5 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
          <p className="font-poppins text-red-accent text-sm leading-relaxed">
            {errorMsg}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Nome */}
        <div>
          <label htmlFor="nome" className="label-base">
            Nome Completo <span className="text-vinho">*</span>
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Seu nome completo"
            required
            disabled={status === "loading"}
            className="input-base disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        {/* Email + Telefone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="label-base">
              E-mail <span className="text-vinho">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seu@email.com"
              required
              disabled={status === "loading"}
              className="input-base disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
          <div>
            <label htmlFor="telefone" className="label-base">
              Telefone / WhatsApp
            </label>
            <input
              id="telefone"
              name="telefone"
              type="tel"
              value={formData.telefone}
              onChange={handleChange}
              placeholder="(11) 99999-9999"
              disabled={status === "loading"}
              className="input-base disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
        </div>

        {/* Confirmação de Presença */}
        <div>
          <label htmlFor="confirmacao" className="label-base">
            Você vai comparecer? <span className="text-vinho">*</span>
          </label>
          <select
            id="confirmacao"
            name="confirmacao"
            value={formData.confirmacao}
            onChange={handleChange}
            required
            disabled={status === "loading"}
            className="input-base disabled:opacity-50 disabled:cursor-not-allowed appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%23003049%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1.25rem_center] bg-[length:1.25rem]"
          >
            <option value="" disabled>
              Selecione uma opção
            </option>
            <option value="sim">✅ Sim, estarei presente!</option>
            <option value="nao">😢 Infelizmente não poderei ir</option>
          </select>
        </div>

        {/* Adultos + Crianças (shown only if "sim") */}
        {formData.confirmacao === "sim" && (
          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            <div>
              <label htmlFor="adultos" className="label-base">
                Adultos
              </label>
              <input
                id="adultos"
                name="adultos"
                type="number"
                min="1"
                max="10"
                value={formData.adultos}
                onChange={handleChange}
                disabled={status === "loading"}
                className="input-base disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            <div>
              <label htmlFor="criancas" className="label-base">
                Crianças
              </label>
              <input
                id="criancas"
                name="criancas"
                type="number"
                min="0"
                max="10"
                value={formData.criancas}
                onChange={handleChange}
                disabled={status === "loading"}
                className="input-base disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>
        )}

        {/* Presente */}
        <div>
          <label htmlFor="presente" className="label-base">
            Pretende trazer algum presente?
          </label>
          <input
            id="presente"
            name="presente"
            type="text"
            value={formData.presente}
            onChange={handleChange}
            placeholder="Ex: Air Fryer, contribuição em PIX..."
            disabled={status === "loading"}
            className="input-base disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <p className="mt-2 font-poppins text-xs text-navy/40 italic">
            Opcional — mas nos ajuda a organizar. 😊
          </p>
        </div>

        {/* Mensagem */}
        <div>
          <label htmlFor="mensagem" className="label-base">
            Deixe uma mensagem carinhosa
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={4}
            value={formData.mensagem}
            onChange={handleChange}
            placeholder="Escreva uma mensagem para nós..."
            disabled={status === "loading"}
            className="input-base resize-none disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        {/* Submit */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full btn-primary py-5 text-base disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none relative overflow-hidden"
          >
            {status === "loading" ? (
              <span className="flex items-center justify-center gap-3">
                {/* Spinner */}
                <svg
                  className="animate-spin w-5 h-5 text-cream"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Enviando sua confirmação...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-3">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                  <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                </svg>
                Confirmar Presença
              </span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
