"use client";

import { FormEvent, useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";
import { Button } from "@/components/ui/Button";
import { LoadingState } from "@/components/ui/LoadingState";

interface UserProfile {
  login: string;
  role: string;
  municipality_name: string | null;
  max_user_id: string | null;
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [maxUserId, setMaxUserId] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    apiFetch<UserProfile>("/profile").then((data) => {
      setProfile(data);
      setMaxUserId(data.max_user_id ?? "");
    });
  }, []);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const updated = await apiFetch<UserProfile>("/profile", {
      method: "PATCH",
      body: JSON.stringify({ max_user_id: maxUserId }),
    });
    setProfile(updated);
    setMessage("Профиль сохранён");
  }

  if (!profile) return <LoadingState label="Загрузка профиля…" />;

  return (
    <div className="mx-auto max-w-lg space-y-6">
      <h2 className="heading-gold">Профиль</h2>
      <div className="card-bashkir">
        <p className="text-sm text-slate-600">
          {profile.login} · {profile.municipality_name ?? "—"} · {profile.role}
        </p>
        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <label className="block text-sm font-medium text-slate-700">
            Идентификатор в мессенджере «Макс»
            <input className="input-bashkir" value={maxUserId} onChange={(event) => setMaxUserId(event.target.value)} />
          </label>
          {message ? <p className="text-sm text-bashkir-green">{message}</p> : null}
          <Button type="submit">Сохранить</Button>
        </form>
      </div>
    </div>
  );
}
