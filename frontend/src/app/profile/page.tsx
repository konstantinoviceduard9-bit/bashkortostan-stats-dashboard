"use client";

import { FormEvent, useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/layout/Header";

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

  return (
    <>
      <Header />
      <main className="mx-auto max-w-lg px-4 py-8">
        <div className="card-bashkir">
          <h2 className="heading-gold">Профиль</h2>
          {profile ? (
            <p className="mt-2 text-sm text-slate-600">
              {profile.login} · {profile.municipality_name ?? "—"} · {profile.role}
            </p>
          ) : null}
          <form className="mt-6 space-y-4" onSubmit={onSubmit}>
            <label className="block text-sm font-medium">
              Идентификатор в мессенджере «Макс»
              <input
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                value={maxUserId}
                onChange={(event) => setMaxUserId(event.target.value)}
              />
            </label>
            {message ? <p className="text-sm text-bashkir-green">{message}</p> : null}
            <Button type="submit">Сохранить</Button>
          </form>
        </div>
      </main>
    </>
  );
}
