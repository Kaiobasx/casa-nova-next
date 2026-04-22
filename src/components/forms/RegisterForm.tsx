"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";

interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

type FieldErrors = Partial<RegisterData>;

export function RegisterForm() {
  const [formData, setFormData] = useState<RegisterData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof RegisterData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FieldErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "O nome é obrigatório.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "O email é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Por favor, insira um email válido.";
    }
    if (!formData.password.trim()) {
      newErrors.password = "A senha é obrigatória.";
    } else if (formData.password.length < 6) {
      newErrors.password = "A senha deve ter no mínimo 6 caracteres.";
    }
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirme sua senha.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "As senhas não coincidem.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in-up">
        <div className="w-16 h-16 flex items-center justify-center bg-sky-accent/20 border border-sky-accent/40 mb-6">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-sky-accent">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="font-playfair text-2xl font-bold text-navy mb-3">Cadastro realizado!</h3>
        <p className="font-poppins text-navy/60 text-sm mb-6 max-w-xs leading-relaxed">
          Bem-vindo(a)! Agora você pode fazer login e acompanhar nossa lista de presentes.
        </p>
        <Link href="/login" className="btn-primary text-sm py-3.5 px-8">
          Fazer Login
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Nome */}
      <div>
        <label htmlFor="register-name" className="label-base">
          Nome Completo <span className="text-vinho">*</span>
        </label>
        <input
          id="register-name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Seu nome completo"
          disabled={loading}
          className={`input-base disabled:opacity-50 ${errors.name ? "border-red-accent" : ""}`}
        />
        {errors.name && <p className="mt-1.5 font-poppins text-xs text-red-accent">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="register-email" className="label-base">
          Email <span className="text-vinho">*</span>
        </label>
        <input
          id="register-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="seu@email.com"
          disabled={loading}
          className={`input-base disabled:opacity-50 ${errors.email ? "border-red-accent" : ""}`}
        />
        {errors.email && <p className="mt-1.5 font-poppins text-xs text-red-accent">{errors.email}</p>}
      </div>

      {/* Senha + Confirmar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="register-password" className="label-base">
            Senha <span className="text-vinho">*</span>
          </label>
          <input
            id="register-password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Mín. 6 caracteres"
            disabled={loading}
            className={`input-base disabled:opacity-50 ${errors.password ? "border-red-accent" : ""}`}
          />
          {errors.password && <p className="mt-1.5 font-poppins text-xs text-red-accent">{errors.password}</p>}
        </div>
        <div>
          <label htmlFor="register-confirm-password" className="label-base">
            Confirmar Senha <span className="text-vinho">*</span>
          </label>
          <input
            id="register-confirm-password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Repita a senha"
            disabled={loading}
            className={`input-base disabled:opacity-50 ${errors.confirmPassword ? "border-red-accent" : ""}`}
          />
          {errors.confirmPassword && (
            <p className="mt-1.5 font-poppins text-xs text-red-accent">{errors.confirmPassword}</p>
          )}
        </div>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full btn-primary py-5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Criando conta...
            </span>
          ) : (
            "Criar Conta"
          )}
        </button>
      </div>

      <p className="text-center font-poppins text-sm text-navy/60">
        Já tem conta?{" "}
        <Link href="/login" className="text-vinho font-semibold hover:underline underline-offset-2">
          Faça login
        </Link>
      </p>
    </form>
  );
}
