"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";

interface LoginData {
  email: string;
  password: string;
}

export function LoginForm() {
  const [formData, setFormData] = useState<LoginData>({ email: "", password: "" });
  const [errors, setErrors] = useState<Partial<LoginData>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof LoginData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<LoginData> = {};
    if (!formData.email.trim()) {
      newErrors.email = "O email é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Por favor, insira um email válido.";
    }
    if (!formData.password.trim()) {
      newErrors.password = "A senha é obrigatória.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simula requisição
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    alert("Login simulado com sucesso! (nenhum dado real foi enviado)");
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Email */}
      <div>
        <label htmlFor="login-email" className="label-base">
          Email <span className="text-vinho">*</span>
        </label>
        <input
          id="login-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="seu@email.com"
          disabled={loading}
          className={`input-base disabled:opacity-50 ${errors.email ? "border-red-accent" : ""}`}
        />
        {errors.email && (
          <p className="mt-2 font-poppins text-xs text-red-accent">{errors.email}</p>
        )}
      </div>

      {/* Senha */}
      <div>
        <label htmlFor="login-password" className="label-base">
          Senha <span className="text-vinho">*</span>
        </label>
        <input
          id="login-password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Sua senha"
          disabled={loading}
          className={`input-base disabled:opacity-50 ${errors.password ? "border-red-accent" : ""}`}
        />
        {errors.password && (
          <p className="mt-2 font-poppins text-xs text-red-accent">{errors.password}</p>
        )}
      </div>

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
            Entrando...
          </span>
        ) : (
          "Entrar"
        )}
      </button>

      <p className="text-center font-poppins text-sm text-navy/60">
        Não tem conta?{" "}
        <Link href="/cadastro" className="text-vinho font-semibold hover:underline underline-offset-2">
          Cadastre-se aqui
        </Link>
      </p>
    </form>
  );
}
